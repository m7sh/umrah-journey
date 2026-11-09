'use strict';

/**
 * Cloudflare Worker entry point.
 *
 * The static site is served from ./public through the ASSETS binding; the
 * analytics API runs here and stores data in D1. The Node server (server.js)
 * remains the zero-dependency local option.
 */

const EVENT_NAMES = new Set([
  'step_view',
  'step_complete',
  'journey_complete',
  'dua_play',
  'voice_play',
  'checklist_item',
  'lang_change',
  'theme_change',
  'share'
]);

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'"
].join('; ');

export default {
  async fetch(request, env) {
    let response;
    try {
      response = await route(request, env);
    } catch (err) {
      console.error('[worker]', (err && err.stack) || err);
      response = json(500, { ok: false, error: 'Internal error' });
    }
    return secure(response);
  }
};

async function route(request, env) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (pathname === '/api/track') {
    if (request.method !== 'POST') return methodNotAllowed();
    return handleTrack(request, env);
  }
  if (pathname === '/api/event') {
    if (request.method !== 'POST') return methodNotAllowed();
    return handleEvent(request, env);
  }
  if (pathname === '/api/counter') {
    if (request.method !== 'GET' && request.method !== 'HEAD') return methodNotAllowed();
    return handleCounter(env);
  }
  if (pathname === '/api/stats') {
    if (request.method !== 'GET' && request.method !== 'HEAD') return methodNotAllowed();
    return handleStats(request, env, url);
  }
  if (pathname === '/api/export') {
    if (request.method !== 'GET' && request.method !== 'HEAD') return methodNotAllowed();
    return handleExport(request, env, url);
  }
  if (pathname === '/healthz') {
    if (request.method !== 'GET' && request.method !== 'HEAD') return methodNotAllowed();
    return json(200, { ok: true });
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return methodNotAllowed();
  }

  // `/admin` is handled by the assets layer, which maps it to admin.html.
  const response = await env.ASSETS.fetch(request);
  if (pathname === '/admin' || pathname === '/admin/' || pathname === '/admin.html') {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
  return response;
}

/* ------------------------------------------------------------------ */
/* API                                                                 */
/* ------------------------------------------------------------------ */

async function handleTrack(request, env) {
  const ip = clientIP(request);
  if (rateLimited(ip, 'track', 90, 60_000)) {
    return json(429, { ok: false, error: 'Too many requests' });
  }

  const body = await readBody(request);
  if (!body.ok) return json(body.status, { ok: false, error: body.error });

  const ua = request.headers.get('user-agent') || '';
  const { device, browser, os } = parseUA(ua);
  const now = new Date();
  const day = dayKey(now);
  const hash = await visitorHash(env, ip, ua, day);

  const clean = (value, max = 200) =>
    typeof value === 'string' ? value.slice(0, max) : null;

  const visitPath = (clean(body.data.path, 120) || '/').replace(/[^\w\-./?=&%]/g, '');
  const host = new URL(request.url).host;
  const referrer = safeReferrer(clean(body.data.referrer, 500), host);
  const lang = (clean(body.data.lang, 8) || 'en').toLowerCase();
  const screen = clean(body.data.screen, 24);
  const sessionId = clean(body.data.session, 64);

  await env.DB.prepare(
    `INSERT INTO visits (ts, day, path, session_id, visitor_hash, country, device, browser, os, lang, referrer, screen)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      now.toISOString(),
      day,
      visitPath,
      sessionId,
      hash,
      countryFromRequest(request),
      device,
      browser,
      os,
      lang,
      referrer,
      screen
    )
    .run();

  const total = await count(env, 'SELECT COUNT(*) AS c FROM visits');
  const today = await count(env, 'SELECT COUNT(*) AS c FROM visits WHERE day = ?', day);

  return json(200, { ok: true, total, today });
}

async function handleEvent(request, env) {
  const ip = clientIP(request);
  if (rateLimited(ip, 'event', 120, 60_000)) {
    return json(429, { ok: false, error: 'Too many requests' });
  }

  const body = await readBody(request);
  if (!body.ok) return json(body.status, { ok: false, error: body.error });

  const name = typeof body.data.name === 'string' ? body.data.name : '';
  if (!EVENT_NAMES.has(name)) {
    return json(400, { ok: false, error: 'Unknown event' });
  }

  const ua = request.headers.get('user-agent') || '';
  const now = new Date();
  const day = dayKey(now);
  const hash = await visitorHash(env, ip, ua, day);
  const step = typeof body.data.step === 'string' ? body.data.step.slice(0, 40) : null;
  const lang = typeof body.data.lang === 'string' ? body.data.lang.slice(0, 8) : null;

  await env.DB.prepare(
    'INSERT INTO events (ts, day, visitor_hash, name, step, lang) VALUES (?, ?, ?, ?, ?, ?)'
  )
    .bind(now.toISOString(), day, hash, name, step, lang)
    .run();

  return json(200, { ok: true });
}

async function handleCounter(env) {
  const day = dayKey();
  const row = await env.DB.prepare(
    `SELECT
       (SELECT COUNT(*) FROM visits) AS total,
       (SELECT COUNT(*) FROM visits WHERE day = ?1) AS today,
       (SELECT COUNT(DISTINCT visitor_hash) FROM visits WHERE day = ?1) AS uniquesToday,
       (SELECT COUNT(DISTINCT country) FROM visits WHERE country != 'Unknown') AS countries`
  )
    .bind(day)
    .first();

  return json(200, {
    total: row?.total ?? 0,
    today: row?.today ?? 0,
    uniquesToday: row?.uniquesToday ?? 0,
    countries: row?.countries ?? 0
  });
}

async function handleStats(request, env, url) {
  if (!(await authorize(request, env, url))) {
    return json(401, { ok: false, error: 'Unauthorized' });
  }

  const db = env.DB;
  const day = dayKey();
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString();
  const monthAgo = dayKey(new Date(Date.now() - 29 * 864e5));

  const totalsRow = await db
    .prepare(
      `SELECT
         (SELECT COUNT(*) FROM visits) AS visits,
         (SELECT COUNT(DISTINCT visitor_hash) FROM visits) AS uniques,
         (SELECT COUNT(*) FROM visits WHERE day = ?1) AS today,
         (SELECT COUNT(DISTINCT visitor_hash) FROM visits WHERE day = ?1) AS todayUniques,
         (SELECT COUNT(*) FROM visits WHERE ts >= ?2) AS last7,
         (SELECT COUNT(DISTINCT visitor_hash) FROM events WHERE name = 'journey_complete') AS journeysCompleted`
    )
    .bind(day, weekAgo)
    .first();

  const daily = await all(
    db,
    `SELECT day, COUNT(*) AS visits, COUNT(DISTINCT visitor_hash) AS uniques
     FROM visits WHERE day >= ? GROUP BY day ORDER BY day ASC`,
    monthAgo
  );
  const countries = await all(
    db,
    `SELECT country, COUNT(*) AS visits FROM visits GROUP BY country ORDER BY visits DESC LIMIT 12`
  );
  const devices = await all(
    db,
    `SELECT device, COUNT(*) AS visits FROM visits GROUP BY device ORDER BY visits DESC`
  );
  const browsers = await all(
    db,
    `SELECT browser, COUNT(*) AS visits FROM visits GROUP BY browser ORDER BY visits DESC LIMIT 8`
  );
  const referrers = await all(
    db,
    `SELECT referrer, COUNT(*) AS visits FROM visits GROUP BY referrer ORDER BY visits DESC LIMIT 10`
  );
  const pages = await all(
    db,
    `SELECT path, COUNT(*) AS visits FROM visits GROUP BY path ORDER BY visits DESC LIMIT 10`
  );
  const languages = await all(
    db,
    `SELECT lang, COUNT(*) AS visits FROM visits GROUP BY lang ORDER BY visits DESC LIMIT 8`
  );
  const steps = await all(
    db,
    `SELECT step, COUNT(*) AS completions FROM events
     WHERE name = 'step_complete' AND step IS NOT NULL
     GROUP BY step ORDER BY completions DESC`
  );
  const eventTotals = await all(
    db,
    `SELECT name, COUNT(*) AS count FROM events GROUP BY name ORDER BY count DESC`
  );
  const recent = await all(
    db,
    `SELECT ts, path, country, device, browser, os, lang, referrer
     FROM visits ORDER BY id DESC LIMIT 25`
  );

  const totals = {
    visits: totalsRow?.visits ?? 0,
    uniques: totalsRow?.uniques ?? 0,
    today: totalsRow?.today ?? 0,
    todayUniques: totalsRow?.todayUniques ?? 0,
    last7: totalsRow?.last7 ?? 0,
    journeysCompleted: totalsRow?.journeysCompleted ?? 0
  };

  return json(200, {
    ok: true,
    generatedAt: new Date().toISOString(),
    totals,
    daily,
    countries,
    devices,
    browsers,
    referrers,
    pages,
    languages,
    steps,
    eventTotals,
    recent
  });
}

async function handleExport(request, env, url) {
  if (!(await authorize(request, env, url))) {
    return json(401, { ok: false, error: 'Unauthorized' });
  }

  // Page through D1 results so exports are not capped by a single query.
  const rows = [];
  let lastId = 0;
  for (;;) {
    const page = await env.DB.prepare(
      `SELECT id, ts, day, path, country, device, browser, os, lang, referrer, screen
       FROM visits WHERE id > ? ORDER BY id ASC LIMIT 1000`
    )
      .bind(lastId)
      .all();
    const batch = page.results || [];
    if (!batch.length) break;
    rows.push(...batch);
    lastId = batch[batch.length - 1].id;
    if (batch.length < 1000) break;
  }
  rows.reverse();

  const headers = ['ts', 'day', 'path', 'country', 'device', 'browser', 'os', 'lang', 'referrer', 'screen'];
  const escape = (value) => {
    const s = value === null || value === undefined ? '' : String(value);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((h) => escape(row[h])).join(','))
  ].join('\n');

  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="umrah-visits-${dayKey()}.csv"`,
      'Cache-Control': 'no-store'
    }
  });
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function methodNotAllowed() {
  return json(405, { ok: false, error: 'Method not allowed' });
}

function secure(response) {
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  headers.set('Content-Security-Policy', CSP);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

async function readBody(request, limit = 16 * 1024) {
  const text = await request.text();
  if (text.length > limit) {
    return { ok: false, status: 413, error: 'Payload too large' };
  }
  if (!text) return { ok: true, data: {} };
  try {
    const data = JSON.parse(text);
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return { ok: false, status: 400, error: 'Invalid JSON' };
    }
    return { ok: true, data };
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON' };
  }
}

async function count(env, sql, ...params) {
  const stmt = params.length ? env.DB.prepare(sql).bind(...params) : env.DB.prepare(sql);
  const row = await stmt.first();
  return row?.c ?? 0;
}

async function all(db, sql, ...params) {
  const stmt = params.length ? db.prepare(sql).bind(...params) : db.prepare(sql);
  const result = await stmt.all();
  return result.results || [];
}

function clientIP(request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    '0.0.0.0'
  ).slice(0, 64);
}

function countryFromRequest(request) {
  const country = request.cf?.country || request.headers.get('cf-ipcountry') || '';
  if (country && country !== 'XX') return String(country).toUpperCase().slice(0, 8);
  return 'Unknown';
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

function dayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

async function sha256Hex(text) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function visitorHash(env, ip, ua, day) {
  const salt = env.VISITOR_SALT || env.ADMIN_TOKEN || 'umrah-journey';
  const hash = await sha256Hex(`${day}|${salt}|${ip}|${ua}`);
  return hash.slice(0, 32);
}

async function authorize(request, env, url) {
  if (!env.ADMIN_TOKEN) return false;
  const header = request.headers.get('x-admin-token');
  const token = header || url.searchParams.get('token');
  if (!token) return false;

  // Hash both values so the comparison is length-independent and constant-time.
  const [a, b] = await Promise.all([sha256Hex(token), sha256Hex(env.ADMIN_TOKEN)]);
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const rateBuckets = new Map();

function rateLimited(ip, key, max, windowMs) {
  const id = `${key}:${ip}`;
  const now = Date.now();

  if (rateBuckets.size > 5000) {
    for (const [bucketId, value] of rateBuckets) {
      if (now > value.reset) rateBuckets.delete(bucketId);
    }
  }

  const bucket = rateBuckets.get(id);
  if (!bucket || now > bucket.reset) {
    rateBuckets.set(id, { count: 1, reset: now + windowMs });
    return false;
  }
  bucket.count += 1;
  return bucket.count > max;
}
