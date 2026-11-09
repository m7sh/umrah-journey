/* ------------------------------------------------------------------ *
 * Umrah Journey — visitor insights dashboard
 * Anonymous analytics only: no cookies, no raw IP addresses.
 * ------------------------------------------------------------------ */

const TOKEN_KEY = 'umrah.admin.token';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const number = new Intl.NumberFormat('en-US');
const dateTime = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
const timeOnly = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit'
});

const STEP_LABELS = [
  ['ihram', '1 · Niyyah & Ihram'],
  ['talbiyah', '2 · Talbiyah'],
  ['first-sight', '3 · First sight of the Kaaba'],
  ['tawaf', '4 · Tawaf'],
  ['maqam', "5 · Maqam Ibrahim & Zamzam"],
  ['sai', "6 · Sa'i"],
  ['halq', '7 · Halq or Taqsir'],
  ['complete', '8 · Completion']
];

const LANGUAGE_NAMES = {
  en: 'English',
  ar: 'العربية',
  ur: 'اردو'
};

const gate = $('#gate');
const dashboard = $('#dashboard');
const tokenInput = $('#tokenInput');
const gateForm = $('#gateForm');
const gateError = $('#gateError');
const nav = $('#adminNav');
const logoutBtn = $('#logoutBtn');
const refreshBtn = $('#refreshBtn');
const exportBtn = $('#exportBtn');

let token = sessionStorage.getItem(TOKEN_KEY) || '';
let lastData = null;
let autoRefresh = null;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function formatNumber(value) {
  return number.format(Number(value) || 0);
}

function formatCountry(code) {
  if (!code || code === 'Unknown') return 'Unknown';
  if (code === 'T1') return 'Tor network';
  try {
    if (code.length === 2) {
      const names = new Intl.DisplayNames(['en'], { type: 'region' });
      return names.of(code.toUpperCase()) || code;
    }
  } catch {
    /* Intl.DisplayNames is not available everywhere */
  }
  return code;
}

function formatReferrer(value) {
  if (!value || value === 'Direct') return 'Direct';
  if (value === 'Internal') return 'Internal navigation';
  try {
    const url = new URL(value);
    return url.hostname.replace(/^www\./, '') || 'Direct';
  } catch {
    return String(value).slice(0, 40);
  }
}

function showGate(message = '') {
  dashboard.hidden = true;
  nav.hidden = true;
  logoutBtn.hidden = true;
  gate.hidden = false;
  gateError.textContent = message;
  tokenInput.focus();
}

function showDashboard() {
  gate.hidden = true;
  dashboard.hidden = false;
  nav.hidden = false;
  logoutBtn.hidden = false;
}

/* ------------------------------------------------------------------ */
/* Data loading                                                        */
/* ------------------------------------------------------------------ */

async function fetchStats() {
  const res = await fetch('/api/stats', {
    headers: { 'x-admin-token': token },
    cache: 'no-store'
  });
  if (res.status === 401) {
    const err = new Error('Unauthorized');
    err.unauthorized = true;
    throw err;
  }
  if (!res.ok) throw new Error(`The server replied with ${res.status}`);
  return res.json();
}

async function loadDashboard({ quiet = false } = {}) {
  if (!token) return showGate();
  if (!quiet) {
    refreshBtn.disabled = true;
    refreshBtn.textContent = 'Refreshing…';
  }
  try {
    const data = await fetchStats();
    if (!data || !data.ok) throw new Error('Unexpected response');
    lastData = data;
    render(data);
    showDashboard();
  } catch (err) {
    if (err.unauthorized) {
      sessionStorage.removeItem(TOKEN_KEY);
      token = '';
      showGate('That token was not accepted. Check the value printed in your server console.');
      return;
    }
    if (!quiet) {
      if (dashboard.hidden) {
        showGate(err.message || 'Could not reach the server.');
      } else {
        setText('generatedAt', `Could not refresh — ${err.message || 'server unreachable'}`);
      }
    }
  } finally {
    refreshBtn.disabled = false;
    refreshBtn.textContent = 'Refresh';
  }
}

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
/* ------------------------------------------------------------------ */

function render(data) {
  const totals = data.totals || {};
  const countries = (data.countries || []).filter((row) => row.country && row.country !== 'Unknown');
  const generated = data.generatedAt ? new Date(data.generatedAt) : new Date();

  setText('generatedAt', `Updated ${dateTime.format(generated)} · anonymous, first-party data`);

  setText('kpiVisits', formatNumber(totals.visits));
  setText('kpiUniques', formatNumber(totals.uniques));
  setText('kpiToday', formatNumber(totals.today));
  setText('kpiTodayUniques', `${formatNumber(totals.todayUniques)} unique today`);
  setText('kpi7', formatNumber(totals.last7));
  setText('kpiJourneys', formatNumber(totals.journeysCompleted));
  setText('kpiCountries', formatNumber(countries.length));

  renderChart(data.daily || []);
  renderBars($('#countries'), countries, (row) => formatCountry(row.country));
  renderBars($('#devices'), data.devices || [], (row) => titleCase(row.device));
  renderBars($('#browsers'), data.browsers || [], (row) => row.browser || 'Unknown');
  renderBars($('#referrers'), data.referrers || [], (row) => formatReferrer(row.referrer));
  renderBars($('#languages'), data.languages || [], (row) => LANGUAGE_NAMES[row.lang] || row.lang || 'Unknown');
  renderBars($('#pages'), data.pages || [], (row) => row.path || '/');
  renderFunnel(data.steps || []);
  renderRecent(data.recent || []);
}

function titleCase(value) {
  if (!value) return 'Unknown';
  const s = String(value);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function renderChart(daily) {
  const host = $('#chart');
  if (!host) return;
  host.textContent = '';

  const byDay = new Map(daily.map((row) => [row.day, row]));
  const days = [];
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  for (let i = 29; i >= 0; i -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const key = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0')
    ].join('-');
    const row = byDay.get(key);
    days.push({
      key,
      date,
      visits: row ? Number(row.visits) : 0,
      uniques: row ? Number(row.uniques) : 0
    });
  }

  const max = Math.max(1, ...days.map((d) => d.visits));
  const total = days.reduce((sum, d) => sum + d.visits, 0);
  setText('chartTotal', `${formatNumber(total)} visits in 30 days`);

  const fragment = document.createDocumentFragment();
  days.forEach((day, index) => {
    const col = document.createElement('div');
    col.className = 'chart-col';
    col.dataset.empty = day.visits ? 'false' : 'true';
    col.title = `${dateTime.format(day.date)} — ${formatNumber(day.visits)} visits, ${formatNumber(day.uniques)} unique`;

    const bar = document.createElement('span');
    bar.className = 'chart-bar';
    bar.style.setProperty('--h', `${Math.max(2, Math.round((day.visits / max) * 100))}%`);

    const value = document.createElement('span');
    value.className = 'chart-value';
    value.textContent = day.visits ? formatNumber(day.visits) : '';
    bar.appendChild(value);

    const label = document.createElement('span');
    label.className = 'chart-day';
    label.textContent = String(day.date.getDate());
    if (index % 5 !== 0 && index !== days.length - 1) label.classList.add('is-sparse');

    col.append(bar, label);
    fragment.appendChild(col);
  });
  host.appendChild(fragment);
}

function renderBars(host, rows, labelFor) {
  if (!host) return;
  host.textContent = '';

  const cleaned = rows
    .map((row) => ({
      label: labelFor(row),
      visits: Number(row.visits || row.count || 0)
    }))
    .filter((row) => row.visits > 0)
    .slice(0, 10);

  if (!cleaned.length) {
    const empty = document.createElement('p');
    empty.className = 'bar-empty';
    empty.textContent = 'No data yet — share the site to see this fill up.';
    host.appendChild(empty);
    return;
  }

  const max = Math.max(...cleaned.map((row) => row.visits));
  const total = cleaned.reduce((sum, row) => sum + row.visits, 0);
  const fragment = document.createDocumentFragment();

  cleaned.forEach((row) => {
    const item = document.createElement('div');
    item.className = 'bar-item';

    const head = document.createElement('div');
    head.className = 'bar-head';

    const label = document.createElement('span');
    label.className = 'bar-label';
    label.textContent = row.label;

    const value = document.createElement('span');
    value.className = 'bar-value';
    const pct = total ? Math.round((row.visits / total) * 100) : 0;
    value.textContent = `${formatNumber(row.visits)} · ${pct}%`;

    head.append(label, value);

    const track = document.createElement('div');
    track.className = 'bar-track';
    const fill = document.createElement('span');
    fill.className = 'bar-fill';
    fill.style.setProperty('--w', `${Math.max(3, Math.round((row.visits / max) * 100))}%`);
    track.appendChild(fill);

    item.append(head, track);
    fragment.appendChild(item);
  });
  host.appendChild(fragment);
}

function renderFunnel(steps) {
  const host = $('#funnel');
  if (!host) return;
  host.textContent = '';

  const counts = new Map(steps.map((row) => [row.step, Number(row.completions)]));
  const values = STEP_LABELS.map(([id, label]) => ({ id, label, count: counts.get(id) || 0 }));
  const max = Math.max(1, ...values.map((row) => row.count));
  const start = values[0].count;

  const fragment = document.createDocumentFragment();
  values.forEach((row, index) => {
    const item = document.createElement('div');
    item.className = 'funnel-row';

    const num = document.createElement('span');
    num.className = 'funnel-num';
    num.textContent = String(index + 1).padStart(2, '0');

    const body = document.createElement('div');
    body.className = 'funnel-body';

    const head = document.createElement('div');
    head.className = 'funnel-head';

    const label = document.createElement('span');
    label.className = 'funnel-label';
    label.textContent = row.label.replace(/^\d+\s·\s/, '');

    const value = document.createElement('span');
    value.className = 'funnel-value';
    const rate = start ? Math.round((row.count / start) * 100) : 0;
    value.textContent = start
      ? `${formatNumber(row.count)} completed · ${rate}% of starters`
      : `${formatNumber(row.count)} completed`;

    head.append(label, value);

    const track = document.createElement('div');
    track.className = 'funnel-track';
    const fill = document.createElement('span');
    fill.className = 'funnel-fill';
    fill.style.setProperty('--w', `${Math.max(row.count ? 3 : 0, Math.round((row.count / max) * 100))}%`);
    track.appendChild(fill);

    body.append(head, track);
    item.append(num, body);
    fragment.appendChild(item);
  });
  host.appendChild(fragment);
}

function renderRecent(rows) {
  const body = $('#recentBody');
  if (!body) return;
  body.textContent = '';

  const wrap = $('#recentWrap');
  const empty = $('#recentEmpty');

  if (!rows.length) {
    if (wrap) wrap.hidden = true;
    if (empty) empty.hidden = false;
    return;
  }

  if (wrap) wrap.hidden = false;
  if (empty) empty.hidden = true;

  const fragment = document.createDocumentFragment();
  rows.forEach((row) => {
    const tr = document.createElement('tr');
    const cells = [
      { text: timeOnly.format(new Date(row.ts)), className: 'cell-when' },
      { text: row.path || '/', className: 'cell-path' },
      { text: formatCountry(row.country) },
      { text: titleCase(row.device) },
      { text: row.browser || 'Unknown' },
      { text: row.os || 'Unknown' },
      { text: LANGUAGE_NAMES[row.lang] || row.lang || 'Unknown' },
      { text: formatReferrer(row.referrer), className: 'cell-referrer' }
    ];
    cells.forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell.text;
      if (cell.className) td.className = cell.className;
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  body.appendChild(fragment);
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

function activateNav() {
  const links = $$('#adminNav a');
  if (!links.length) return;

  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((link) => {
      const on = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', on);
      if (on) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window) {
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
        let best = null;
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.8] }
    );
    sections.forEach((section) => observer.observe(section));
  }

  links.forEach((link) => {
    link.addEventListener('click', () => setActive(link.getAttribute('href').slice(1)));
  });
}

/* ------------------------------------------------------------------ */
/* Export                                                              */
/* ------------------------------------------------------------------ */

async function exportCsv() {
  if (!token) return;
  exportBtn.disabled = true;
  exportBtn.textContent = 'Preparing…';
  try {
    const res = await fetch('/api/export', {
      headers: { 'x-admin-token': token },
      cache: 'no-store'
    });
    if (res.status === 401) {
      sessionStorage.removeItem(TOKEN_KEY);
      token = '';
      showGate('Your session expired. Enter the admin token again.');
      return;
    }
    if (!res.ok) throw new Error(`Export failed (${res.status})`);

    const disposition = res.headers.get('content-disposition') || '';
    const match = disposition.match(/filename="?([^";]+)"?/i);
    const filename = match ? match[1] : 'umrah-visits.csv';
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  } catch (err) {
    setText('generatedAt', `Could not export — ${err.message || 'server unreachable'}`);
  } finally {
    exportBtn.disabled = false;
    exportBtn.textContent = 'Export CSV';
  }
}

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

gateForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const value = tokenInput.value.trim();
  if (!value) {
    gateError.textContent = 'Paste the token printed in your server console.';
    return;
  }
  token = value;
  gateError.textContent = '';
  try {
    const data = await fetchStats();
    if (!data || !data.ok) throw new Error('Unexpected response');
    sessionStorage.setItem(TOKEN_KEY, token);
    tokenInput.value = '';
    lastData = data;
    render(data);
    showDashboard();
  } catch (err) {
    token = '';
    if (err.unauthorized) {
      gateError.textContent = 'That token was not accepted. Copy it again from data/admin-token.txt.';
    } else {
      gateError.textContent = err.message || 'Could not reach the server.';
    }
  }
});

refreshBtn?.addEventListener('click', () => loadDashboard());

exportBtn?.addEventListener('click', exportCsv);

logoutBtn?.addEventListener('click', () => {
  sessionStorage.removeItem(TOKEN_KEY);
  token = '';
  lastData = null;
  tokenInput.value = '';
  if (location.hash) history.replaceState(null, '', location.pathname);
  showGate('Signed out. Enter the token to reopen the dashboard.');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !gate.hidden) {
    tokenInput.value = '';
    gateError.textContent = '';
  }
});

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

if (token) {
  loadDashboard();
} else {
  showGate();
}
activateNav();

if (autoRefresh) clearInterval(autoRefresh);
autoRefresh = setInterval(() => {
  if (token && !dashboard.hidden && document.visibilityState === 'visible') {
    loadDashboard({ quiet: true });
  }
}, 60000);
