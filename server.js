'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { DatabaseSync } = require('node:sqlite');

const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'data');
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '0.0.0.0';
const TRUST_PROXY = process.env.TRUST_PROXY === '1';

fs.mkdirSync(DATA_DIR, { recursive: true });

/* ------------------------------------------------------------------ */
/* Database                                                            */
/* ------------------------------------------------------------------ */

const db = new DatabaseSync(path.join(DATA_DIR, 'umrah.db'));
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;

  CREATE TABLE IF NOT EXISTS visits (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    ts            TEXT    NOT NULL,
    day           TEXT    NOT NULL,
    path          TEXT    NOT NULL,
    session_id    TEXT,
    visitor_hash  TEXT    NOT NULL,
    country       TEXT,
    device        TEXT,
    browser       TEXT,
    os            TEXT,
    lang          TEXT,
    referrer      TEXT,
    screen        TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_visits_day     ON visits(day);
  CREATE INDEX IF NOT EXISTS idx_visits_visitor ON visits(visitor_hash);
  CREATE INDEX IF NOT EXISTS idx_visits_ts      ON visits(ts);

  CREATE TABLE IF NOT EXISTS events (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    ts            TEXT    NOT NULL,
    day           TEXT    NOT NULL,
    visitor_hash  TEXT    NOT NULL,
    name          TEXT    NOT NULL,
    step          TEXT,
    lang          TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_events_day  ON events(day);
  CREATE INDEX IF NOT EXISTS idx_events_name ON events(name);
`);

const insertVisit = db.prepare(`
  INSERT INTO visits (ts, day, path, session_id, visitor_hash, country, device, browser, os, lang, referrer, screen)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertEvent = db.prepare(`
  INSERT INTO events (ts, day, visitor_hash, name, step, lang) VALUES (?, ?, ?, ?, ?, ?)
`);

/* ------------------------------------------------------------------ */
/* Admin token                                                         */
/* ------------------------------------------------------------------ */

const TOKEN_FILE = path.join(DATA_DIR, 'admin-token.txt');
let ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

if (!ADMIN_TOKEN) {
  try {
    ADMIN_TOKEN = fs.readFileSync(TOKEN_FILE, 'utf8').trim();
  } catch {
    ADMIN_TOKEN = crypto.randomBytes(24).toString('base64url');
    fs.writeFileSync(TOKEN_FILE, ADMIN_TOKEN + '\n', { mode: 0o600 });
  }
}

try {
  fs.chmodSync(TOKEN_FILE, 0o600);
} catch {
  /* best effort on filesystems without POSIX permissions */
}

function tokenMatches(candidate) {
  if (!candidate || candidate.length !== ADMIN_TOKEN.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(candidate), Buffer.from(ADMIN_TOKEN));
  } catch {
    return false;
  }
}

// Salt rotates daily: a raw IP is never stored, and hashes cannot be
// correlated across days.
const SALT_SECRET = process.env.VISITOR_SALT || crypto.createHash('sha256')
  .update(ADMIN_TOKEN)
  .digest('hex');

function dayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function visitorHash(ip, ua, day) {
  return crypto
    .createHash('sha256')
    .update(`${day}|${SALT_SECRET}|${ip}|${ua}`)
    .digest('hex')
    .slice(0, 32);
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2'
};

function securityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data:",
      "connect-src 'self'",
      "media-src 'self' https://verses.quran.com https://audio.qurancdn.com",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'"
    ].join('; ')
  );
}

function sendJSON(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store'
  });
  res.end(body);
}

function readBody(req, limit = 16 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(Object.assign(new Error('Payload too large'), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (!chunks.length) return resolve({});
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(Object.assign(new Error('Invalid JSON'), { status: 400 }));
      }
    });
    req.on('error', reject);
  });
}

function clientIP(req) {
  if (TRUST_PROXY) {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.length) {
      return forwarded.split(',')[0].trim().slice(0, 64);
    }
  }
  return (req.socket.remoteAddress || '0.0.0.0').replace(/^::ffff:/, '');
}

function parseUA(ua = '') {
  const s = String(ua).slice(0, 400);
  let device = 'Desktop';
  if (/iPad|Tablet|PlayBook|Silk/i.test(s)) device = 'Tablet';
  else if (/Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(s)) device = 'Mobile';

  let browser = 'Other';
  if (/Edg\//i.test(s)) browser = 'Edge';
  else if (/OPR\/|Opera/i.test(s)) browser = 'Opera';
  else if (/SamsungBrowser/i.test(s)) browser = 'Samsung Internet';
  else if (/Firefox\//i.test(s)) browser = 'Firefox';
  else if (/Chrome\//i.test(s)) browser = 'Chrome';
  else if (/Safari\//i.test(s)) browser = 'Safari';
  else if (/curl|wget|bot|spider|crawler/i.test(s)) browser = 'Bot';

  let os = 'Other';
  if (/Windows/i.test(s)) os = 'Windows';
  else if (/Android/i.test(s)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(s)) os = 'iOS';
  else if (/Mac OS X|Macintosh/i.test(s)) os = 'macOS';
  else if (/Linux/i.test(s)) os = 'Linux';

  return { device, browser, os };
}

function safeReferrer(ref, selfHost) {
  if (!ref) return 'Direct';
  try {
    const url = new URL(ref);
    if (url.hostname === selfHost) return 'Internal';
    return url.host.slice(0, 120) || 'Direct';
  } catch {
    return 'Direct';
  }
}

function countryFromHeaders(req) {
  const keys = ['cf-ipcountry', 'x-vercel-ip-country', 'x-country-code', 'x-geo-country'];
  for (const key of keys) {
    const value = req.headers[key];
    if (typeof value === 'string' && value.trim() && value.trim() !== 'XX') {
      return value.trim().toUpperCase().slice(0, 8);
    }
  }
  return 'Unknown';
}

const rateBuckets = new Map();
function rateLimited(ip, key, max, windowMs) {
  const id = `${key}:${ip}`;
  const now = Date.now();
  const bucket = rateBuckets.get(id);
  if (!bucket || now > bucket.reset) {
    rateBuckets.set(id, { count: 1, reset: now + windowMs });
    return false;
  }
  bucket.count += 1;
  return bucket.count > max;
}

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateBuckets) {
    if (now > value.reset) rateBuckets.delete(key);
  }
}, 60_000).unref();

/* ------------------------------------------------------------------ */
/* API                                                                 */
/* ------------------------------------------------------------------ */

async function handleTrack(req, res) {
  const ip = clientIP(req);
  if (rateLimited(ip, 'track', 90, 60_000)) {
    return sendJSON(res, 429, { ok: false, error: 'Too many requests' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    return sendJSON(res, err.status || 400, { ok: false, error: err.message });
  }

  const ua = req.headers['user-agent'] || '';
  const { device, browser, os } = parseUA(ua);
  const now = new Date();
  const day = dayKey(now);
  const hash = visitorHash(ip, ua, day);

  const clean = (value, max = 200) =>
    typeof value === 'string' ? value.slice(0, max) : null;

  const visitPath = (clean(body.path, 120) || '/').replace(/[^\w\-./?=&%]/g, '');
  const host = (req.headers.host || '').split(':')[0];
  const referrer = safeReferrer(clean(body.referrer, 500), host);
  const lang = (clean(body.lang, 8) || 'en').toLowerCase();
  const screen = clean(body.screen, 24);
  const sessionId = clean(body.session, 64);

  insertVisit.run(
    now.toISOString(),
    day,
    visitPath,
    sessionId,
    hash,
    countryFromHeaders(req),
    device,
    browser,
    os,
    lang,
    referrer,
    screen
  );

  const total = db.prepare('SELECT COUNT(*) AS c FROM visits').get().c;
  const today = db.prepare('SELECT COUNT(*) AS c FROM visits WHERE day = ?').get(day).c;

  return sendJSON(res, 200, { ok: true, total, today });
}

async function handleEvent(req, res) {
  const ip = clientIP(req);
  if (rateLimited(ip, 'event', 120, 60_000)) {
    return sendJSON(res, 429, { ok: false, error: 'Too many requests' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    return sendJSON(res, err.status || 400, { ok: false, error: err.message });
  }

  const allowed = new Set([
    'step_view',
    'step_complete',
    'journey_complete',
    'journey_switch',
    'hajj_type',
    'dua_play',
    'dua_words',
    'voice_play',
    'checklist_item',
    'lang_change',
    'theme_change',
    'share'
  ]);
  const name = typeof body.name === 'string' ? body.name : '';
  if (!allowed.has(name)) {
    return sendJSON(res, 400, { ok: false, error: 'Unknown event' });
  }

  const ua = req.headers['user-agent'] || '';
  const now = new Date();
  const day = dayKey(now);
  const hash = visitorHash(ip, ua, day);
  const step = typeof body.step === 'string' ? body.step.slice(0, 40) : null;
  const lang = typeof body.lang === 'string' ? body.lang.slice(0, 8) : null;

  insertEvent.run(now.toISOString(), day, hash, name, step, lang);
  return sendJSON(res, 200, { ok: true });
}

function handleCounter(res) {
  const day = dayKey();
  const total = db.prepare('SELECT COUNT(*) AS c FROM visits').get().c;
  const today = db.prepare('SELECT COUNT(*) AS c FROM visits WHERE day = ?').get(day).c;
  const uniques = db
    .prepare('SELECT COUNT(DISTINCT visitor_hash) AS c FROM visits WHERE day = ?')
    .get(day).c;
  const countries = db
    .prepare("SELECT COUNT(DISTINCT country) AS c FROM visits WHERE country != 'Unknown'")
    .get().c;
  sendJSON(res, 200, { total, today, uniquesToday: uniques, countries });
}

function handleStats(req, res, url) {
  const header = req.headers['x-admin-token'];
  const token = typeof header === 'string' ? header : url.searchParams.get('token');
  if (!tokenMatches(token)) {
    return sendJSON(res, 401, { ok: false, error: 'Unauthorized' });
  }

  const day = dayKey();
  const last7 = db
    .prepare('SELECT COUNT(*) AS c FROM visits WHERE ts >= ?')
    .get(new Date(Date.now() - 7 * 864e5).toISOString()).c;

  const daily = db
    .prepare(
      `SELECT day, COUNT(*) AS visits, COUNT(DISTINCT visitor_hash) AS uniques
       FROM visits
       WHERE day >= ?
       GROUP BY day
       ORDER BY day ASC`
    )
    .all(dayKey(new Date(Date.now() - 29 * 864e5)));

  const countries = db
    .prepare(
      `SELECT country, COUNT(*) AS visits FROM visits
       GROUP BY country ORDER BY visits DESC LIMIT 12`
    )
    .all();

  const devices = db
    .prepare(`SELECT device, COUNT(*) AS visits FROM visits GROUP BY device ORDER BY visits DESC`)
    .all();

  const browsers = db
    .prepare(`SELECT browser, COUNT(*) AS visits FROM visits GROUP BY browser ORDER BY visits DESC LIMIT 8`)
    .all();

  const referrers = db
    .prepare(`SELECT referrer, COUNT(*) AS visits FROM visits GROUP BY referrer ORDER BY visits DESC LIMIT 10`)
    .all();

  const pages = db
    .prepare(`SELECT path, COUNT(*) AS visits FROM visits GROUP BY path ORDER BY visits DESC LIMIT 10`)
    .all();

  const languages = db
    .prepare(`SELECT lang, COUNT(*) AS visits FROM visits GROUP BY lang ORDER BY visits DESC LIMIT 8`)
    .all();

  const steps = db
    .prepare(
      `SELECT step, COUNT(*) AS completions FROM events
       WHERE name = 'step_complete' AND step IS NOT NULL
       GROUP BY step ORDER BY completions DESC`
    )
    .all();

  const eventTotals = db
    .prepare(`SELECT name, COUNT(*) AS count FROM events GROUP BY name ORDER BY count DESC`)
    .all();

  const recent = db
    .prepare(
      `SELECT ts, path, country, device, browser, os, lang, referrer
       FROM visits ORDER BY id DESC LIMIT 25`
    )
    .all();

  const totals = {
    visits: db.prepare('SELECT COUNT(*) AS c FROM visits').get().c,
    uniques: db.prepare('SELECT COUNT(DISTINCT visitor_hash) AS c FROM visits').get().c,
    today: db.prepare('SELECT COUNT(*) AS c FROM visits WHERE day = ?').get(day).c,
    todayUniques: db
      .prepare('SELECT COUNT(DISTINCT visitor_hash) AS c FROM visits WHERE day = ?')
      .get(day).c,
    last7,
    journeysCompleted: db
      .prepare("SELECT COUNT(DISTINCT visitor_hash) AS c FROM events WHERE name = 'journey_complete'")
      .get().c
  };

  sendJSON(res, 200, { ok: true, generatedAt: new Date().toISOString(), totals, daily, countries, devices, browsers, referrers, pages, languages, steps, eventTotals, recent });
}

function handleExport(req, res, url) {
  const header = req.headers['x-admin-token'];
  const token = typeof header === 'string' ? header : url.searchParams.get('token');
  if (!tokenMatches(token)) {
    return sendJSON(res, 401, { ok: false, error: 'Unauthorized' });
  }

  const rows = db
    .prepare('SELECT ts, day, path, country, device, browser, os, lang, referrer, screen FROM visits ORDER BY id DESC')
    .all();

  const headers = ['ts', 'day', 'path', 'country', 'device', 'browser', 'os', 'lang', 'referrer', 'screen'];
  const escape = (value) => {
    const s = value === null || value === undefined ? '' : String(value);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [headers.join(','), ...rows.map((row) => headers.map((h) => escape(row[h])).join(','))].join('\n');

  res.writeHead(200, {
    'Content-Type': 'text/csv; charset=utf-8',
    'Content-Disposition': `attachment; filename="umrah-visits-${dayKey()}.csv"`,
    'Cache-Control': 'no-store'
  });
  res.end(csv);
}

/* ------------------------------------------------------------------ */
/* Static files                                                        */
/* ------------------------------------------------------------------ */

function serveFile(req, res, filePath, cache = true) {
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }
    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': cache ? 'public, max-age=300' : 'no-store'
    };
    if (req.method === 'HEAD') {
      res.writeHead(200, headers);
      return res.end();
    }
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
}

function serveStatic(req, res, pathname) {
  let requested = pathname === '/' ? '/index.html' : pathname;
  if (requested === '/admin' || requested === '/admin/') requested = '/admin.html';

  let decoded;
  try {
    decoded = decodeURIComponent(requested);
  } catch {
    res.writeHead(400);
    return res.end('Bad request');
  }

  const resolved = path.resolve(PUBLIC_DIR, '.' + decoded);
  if (!resolved.startsWith(PUBLIC_DIR + path.sep) && resolved !== PUBLIC_DIR) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  if (path.basename(resolved).startsWith('.')) {
    res.writeHead(404);
    return res.end('Not found');
  }

  serveFile(req, res, resolved);
}

/* ------------------------------------------------------------------ */
/* Server                                                              */
/* ------------------------------------------------------------------ */

const server = http.createServer(async (req, res) => {
  securityHeaders(res);

  let url;
  try {
    url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch {
    res.writeHead(400);
    return res.end('Bad request');
  }

  const { pathname } = url;

  try {
    if (pathname === '/api/track' && req.method === 'POST') return await handleTrack(req, res);
    if (pathname === '/api/event' && req.method === 'POST') return await handleEvent(req, res);
    if (pathname === '/api/counter' && req.method === 'GET') return handleCounter(res);
    if (pathname === '/api/stats' && req.method === 'GET') return handleStats(req, res, url);
    if (pathname === '/api/export' && req.method === 'GET') return handleExport(req, res, url);

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return sendJSON(res, 405, { ok: false, error: 'Method not allowed' });
    }

    if (pathname === '/healthz') return sendJSON(res, 200, { ok: true });
    return serveStatic(req, res, pathname);
  } catch (err) {
    console.error('[server]', err);
    if (!res.headersSent) sendJSON(res, 500, { ok: false, error: 'Internal error' });
  }
});

server.listen(PORT, HOST, () => {
  const shown = HOST === '0.0.0.0' ? 'localhost' : HOST;
  console.log('');
  console.log('  ✦ Umrah Journey');
  console.log(`  Site   http://${shown}:${PORT}`);
  console.log(`  Admin  http://${shown}:${PORT}/admin`);
  console.log(`  Token  ${ADMIN_TOKEN}`);
  console.log(`  Data   ${path.join(DATA_DIR, 'umrah.db')}`);
  console.log('');
});

let shuttingDown = false;
function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`\n  ${signal} received — closing the database…`);
  server.close(() => {
    try {
      db.exec('PRAGMA wal_checkpoint(TRUNCATE);');
      db.close();
    } catch {
      /* already closed */
    }
    process.exit(0);
  });
  setTimeout(() => process.exit(0), 4000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
