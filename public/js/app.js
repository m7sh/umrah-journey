import { META, STEPS, DUAS, PILLARS, CHECKLIST, PROHIBITIONS, FAQ, SOURCES } from './data.js';
import { LANGS, t, dirFor, pick } from './i18n.js';
import { sceneFor } from './scenes.js';

/* ------------------------------------------------------------------ */
/*  Utilities                                                          */
/* ------------------------------------------------------------------ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ESCAPES[c]);

const html = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage may be disabled — the site still works for this session */
  }
}

/* ------------------------------------------------------------------ */
/*  State                                                              */
/* ------------------------------------------------------------------ */

const STORAGE = {
  lang: 'umrah.lang',
  theme: 'umrah.theme',
  step: 'umrah.step',
  done: 'umrah.done',
  checks: 'umrah.checks',
  voice: 'umrah.voice',
  auto: 'umrah.auto',
  counters: 'umrah.counters'
};

const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
const initialLang = read(STORAGE.lang, ['en', 'ar', 'ur'].includes(browserLang) ? browserLang : 'en');

const state = {
  lang: LANGS.some((l) => l.code === initialLang) ? initialLang : 'en',
  theme: read(STORAGE.theme, window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
  step: clamp(Number(read(STORAGE.step, 0)) || 0, 0, STEPS.length - 1),
  done: new Set(Array.isArray(read(STORAGE.done, [])) ? read(STORAGE.done, []) : []),
  checks: new Set(Array.isArray(read(STORAGE.checks, [])) ? read(STORAGE.checks, []) : []),
  voice: read(STORAGE.voice, true) !== false,
  auto: read(STORAGE.auto, false) === true,
  counters: Object.assign({ tawaf: 0, sai: 0 }, read(STORAGE.counters, {})),
  duas: [],
  query: '',
  journeyCompleteSent: false,
  viewed: new Set()
};

function persist() {
  write(STORAGE.lang, state.lang);
  write(STORAGE.theme, state.theme);
  write(STORAGE.step, state.step);
  write(STORAGE.done, [...state.done]);
  write(STORAGE.checks, [...state.checks]);
  write(STORAGE.voice, state.voice);
  write(STORAGE.auto, state.auto);
  write(STORAGE.counters, state.counters);
}

/* ------------------------------------------------------------------ */
/*  Analytics (anonymous)                                              */
/* ------------------------------------------------------------------ */

function sessionId() {
  try {
    let id = sessionStorage.getItem('umrah.session');
    if (!id) {
      id = (crypto.randomUUID && crypto.randomUUID()) || `s-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      sessionStorage.setItem('umrah.session', id);
    }
    return id;
  } catch {
    return null;
  }
}

function post(url, payload) {
  try {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  } catch {
    /* offline — ignore */
  }
}

function trackEvent(name, extra = {}) {
  post('/api/event', { name, step: extra.step || null, lang: state.lang });
}

function trackVisit() {
  post('/api/track', {
    path: location.pathname,
    referrer: document.referrer,
    lang: state.lang,
    screen: `${window.screen.width}x${window.screen.height}`,
    session: sessionId()
  });
}

function loadCounter() {
  fetch('/api/counter', { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      if (!data) return;
      countUp($('#statVisitors'), data.total);
      const countries = $('#statCountries');
      if (countries) countries.textContent = String(data.countries ?? 0).padStart(2, '0');
      const footer = $('#footerVisits');
      if (footer) footer.textContent = `${data.total.toLocaleString()} visits · ${data.today.toLocaleString()} today`;
    })
    .catch(() => {});
}

function countUp(el, target) {
  if (!el) return;
  if (reduceMotion || target > 100000) {
    el.textContent = target.toLocaleString();
    return;
  }
  const start = performance.now();
  const duration = 1200;
  const from = 0;
  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (target - from) * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ------------------------------------------------------------------ */
/*  Voice & audio                                                      */
/* ------------------------------------------------------------------ */

const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let voices = [];
let audioManifest = {};
let activeAudio = null;
let speechToken = 0;
let currentKey = null;
let warnNoVoice = false;

function loadVoices() {
  if (!speechSupported) return;
  voices = window.speechSynthesis.getVoices();
}

if (speechSupported) {
  loadVoices();
  window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices);
}

fetch('/audio/manifest.json', { cache: 'no-store' })
  .then((r) => (r.ok ? r.json() : null))
  .then((data) => {
    if (data && typeof data === 'object') audioManifest = data;
  })
  .catch(() => {});

const LANG_TTS = { en: 'en-US', ar: 'ar-SA', ur: 'ur-PK' };

function pickVoice(lang) {
  const want = { en: 'en', ar: 'ar', ur: 'ur' }[lang] || lang;
  const matches = voices.filter((v) => String(v.lang || '').toLowerCase().startsWith(want));
  if (!matches.length) return null;
  const score = (v) => {
    let s = 0;
    if (/google/i.test(v.name)) s += 4;
    if (/natural|neural|premium|enhanced/i.test(v.name)) s += 2;
    if (v.localService) s += 0.5;
    if (/maged|tarik|hamed|naayf|zariyah|laila/i.test(v.name)) s += 1;
    if (/samantha|daniel|karen|serena|moira/i.test(v.name)) s += 1;
    return s;
  };
  return matches.sort((a, b) => score(b) - score(a))[0];
}

function chunkText(text, lang) {
  const normalized = String(text).replace(/\s+/g, ' ').trim();
  if (!normalized) return [];
  const sentences = normalized.match(/[^.!?۔؟…]+[.!?۔؟…]?/g) || [normalized];
  const chunks = [];
  let buf = '';
  for (const sentence of sentences) {
    const piece = sentence.trim();
    if (!piece) continue;
    if ((buf + ' ' + piece).trim().length > 220 && buf) {
      chunks.push(buf.trim());
      buf = piece;
    } else {
      buf = (buf + ' ' + piece).trim();
    }
  }
  if (buf) chunks.push(buf.trim());
  return chunks;
}

function stopMedia() {
  speechToken += 1;
  currentKey = null;
  if (speechSupported) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      /* ignore */
    }
  }
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    } catch {
      /* ignore */
    }
    activeAudio = null;
  }
  clearWordHighlights();
  updatePlayUI();
}

function speakText({ key, text, lang, onend }) {
  if (!state.voice) {
    currentKey = null;
    updatePlayUI();
    return;
  }
  if (!speechSupported) {
    showToast(t(state.lang, 'voice.unavailable'));
    currentKey = null;
    updatePlayUI();
    return;
  }

  const voice = pickVoice(lang);
  if (!voice && !warnNoVoice) {
    warnNoVoice = true;
    showToast(t(state.lang, 'voice.unavailable'));
  }

  const token = ++speechToken;
  currentKey = key;
  updatePlayUI();

  const parts = chunkText(text, lang);
  if (!parts.length) {
    currentKey = null;
    updatePlayUI();
    onend?.();
    return;
  }

  let index = 0;
  const speakNext = () => {
    if (token !== speechToken) return;
    if (index >= parts.length) {
      currentKey = null;
      updatePlayUI();
      onend?.();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(parts[index++]);
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || LANG_TTS[lang] || 'en-US';
    utterance.rate = lang === 'ar' ? 0.82 : lang === 'ur' ? 0.85 : 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onend = speakNext;
    utterance.onerror = () => {
      if (token !== speechToken) return;
      stopMedia();
      showToast(t(state.lang, 'voice.unavailable'));
    };
    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      stopMedia();
    }
  };
  speakNext();
}

function srcForKey(key) {
  const entry = audioManifest[key];
  if (!entry) return null;
  if (typeof entry === 'string') return entry.startsWith('/') ? entry : `/audio/${entry}`;
  if (entry && typeof entry.src === 'string') return entry.src.startsWith('/') ? entry.src : `/audio/${entry.src}`;
  return null;
}

function playMedia({ key, text, lang, onend }) {
  const wasSame = currentKey === key;
  stopMedia();
  if (wasSame) return;

  if (!state.voice) {
    showToast(t(state.lang, 'voice.off'));
    return;
  }

  const src = srcForKey(key);
  if (src) {
    try {
      const audio = new Audio(src);
      activeAudio = audio;
      currentKey = key;
      updatePlayUI();
      audio.onended = () => {
        if (activeAudio !== audio) return;
        activeAudio = null;
        currentKey = null;
        updatePlayUI();
        onend?.();
      };
      audio.onerror = () => {
        if (activeAudio !== audio) return;
        activeAudio = null;
        currentKey = null;
        updatePlayUI();
        speakText({ key, text, lang, onend });
      };
      audio.play().catch(() => {
        if (activeAudio !== audio) return;
        activeAudio = null;
        currentKey = null;
        updatePlayUI();
        speakText({ key, text, lang, onend });
      });
      return;
    } catch {
      /* fall through to speech */
    }
  }

  speakText({ key, text, lang, onend });
}

function playAudioList({ key, sources, text, lang, onend }) {
  const wasSame = currentKey === key;
  stopMedia();
  if (wasSame) return;

  if (!state.voice) {
    showToast(t(state.lang, 'voice.off'));
    return;
  }

  const list = (sources || []).filter(Boolean);
  if (!list.length) {
    speakText({ key, text, lang, onend });
    return;
  }

  const token = speechToken;
  currentKey = key;
  updatePlayUI();

  let index = 0;
  const fallback = () => {
    if (token !== speechToken) return;
    activeAudio = null;
    currentKey = null;
    clearWordHighlights();
    updatePlayUI();
    speakText({ key, text, lang, onend });
  };

  const next = () => {
    if (token !== speechToken) return;
    if (index >= list.length) {
      activeAudio = null;
      currentKey = null;
      clearWordHighlights();
      updatePlayUI();
      onend?.();
      return;
    }
    const audio = new Audio(list[index++]);
    activeAudio = audio;
    audio.onended = () => {
      if (token !== speechToken) return;
      next();
    };
    audio.onerror = fallback;
    audio.play().catch(fallback);
  };

  next();
}

function clearWordHighlights() {
  $$('.dua-word.is-playing').forEach((el) => el.classList.remove('is-playing'));
}

function setWordActive(card, index) {
  if (!card) return;
  $$('.dua-word', card).forEach((el) => {
    el.classList.toggle('is-playing', Number(el.dataset.word) === index);
  });
}

function playWord(dua, index, card) {
  const word = dua.quran?.words?.[index];
  if (!word) return;

  const key = `dua:${dua.id}:word:${index}`;
  const wasSame = currentKey === key;
  stopMedia();
  if (wasSame) return;

  if (!state.voice) {
    showToast(t(state.lang, 'voice.off'));
    return;
  }

  const token = speechToken;
  currentKey = key;
  setWordActive(card, index);
  updatePlayUI();

  const audio = new Audio(word.src);
  activeAudio = audio;
  const finish = () => {
    if (token !== speechToken) return;
    activeAudio = null;
    currentKey = null;
    clearWordHighlights();
    updatePlayUI();
  };
  audio.onended = finish;
  audio.onerror = () => {
    finish();
    speakText({ key, text: word.ar, lang: 'ar' });
  };
  audio.play().catch(() => {
    finish();
    speakText({ key, text: word.ar, lang: 'ar' });
  });
}

function playWords(dua, card) {
  const words = dua.quran?.words || [];
  if (!words.length) return;

  const key = `dua:${dua.id}:words`;
  const wasSame = currentKey === key;
  stopMedia();
  if (wasSame) return;

  if (!state.voice) {
    showToast(t(state.lang, 'voice.off'));
    return;
  }

  const token = speechToken;
  currentKey = key;
  updatePlayUI();

  let index = 0;
  const fallback = () => {
    if (token !== speechToken) return;
    activeAudio = null;
    currentKey = null;
    clearWordHighlights();
    updatePlayUI();
    speakText({ key, text: words.map((word) => word.ar).join(' '), lang: 'ar' });
  };

  const next = () => {
    if (token !== speechToken) return;
    if (index >= words.length) {
      activeAudio = null;
      currentKey = null;
      clearWordHighlights();
      updatePlayUI();
      return;
    }
    const current = index++;
    setWordActive(card, current);
    const audio = new Audio(words[current].src);
    activeAudio = audio;
    audio.onended = () => {
      if (token !== speechToken) return;
      next();
    };
    audio.onerror = fallback;
    audio.play().catch(fallback);
  };

  next();
}

function updatePlayUI() {
  const step = STEPS[state.step];
  const narrationKey = `step:${step.id}:${state.lang}`;
  const btn = $('#playNarration');
  if (btn) {
    const playing = currentKey === narrationKey;
    const playIcon = btn.querySelector('.i-play');
    const stopIcon = btn.querySelector('.i-stop');
    const label = btn.querySelector('span');
    if (playIcon) playIcon.hidden = playing;
    if (stopIcon) stopIcon.hidden = !playing;
    if (label) label.textContent = t(state.lang, playing ? 'journey.stop' : 'journey.listen');
  }
  $$('.dua-play').forEach((button) => {
    const key = `dua:${button.dataset.dua}:${state.lang}`;
    button.classList.toggle('is-playing', currentKey === key);
    const label = button.querySelector('span');
    if (label) label.textContent = t(state.lang, currentKey === key ? 'dua.stop' : 'dua.play');
  });
  $$('.dua-words-play').forEach((button) => {
    const key = `dua:${button.dataset.dua}:words`;
    const playing = currentKey === key;
    button.classList.toggle('is-playing', playing);
    const label = button.querySelector('span');
    if (label) label.textContent = t(state.lang, playing ? 'dua.stop' : 'dua.wordsPlay');
  });
}

/* ------------------------------------------------------------------ */
/*  Toasts                                                             */
/* ------------------------------------------------------------------ */

let toastTimer = null;
function showToast(message) {
  const toast = $('#toast');
  const text = $('#toastText');
  if (!toast || !text) return;
  text.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ------------------------------------------------------------------ */
/*  Rendering                                                          */
/* ------------------------------------------------------------------ */

function geometrySVG() {
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 360) / 8;
    return `<g transform="rotate(${a} 300 300)">
      <path d="M300 70c34 60 34 120 0 180-34-60-34-120 0-180z"/>
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 600 600" aria-hidden="true">
    <g fill="none" stroke="var(--gold)" stroke-opacity=".3" stroke-width="1">
      <circle cx="300" cy="300" r="282" stroke-dasharray="2 12"/>
      <circle cx="300" cy="300" r="236"/>
      <circle cx="300" cy="300" r="150" stroke-opacity=".2"/>
      <rect x="88" y="88" width="424" height="424" stroke-opacity=".22"/>
      <rect x="88" y="88" width="424" height="424" transform="rotate(45 300 300)" stroke-opacity=".22"/>
      <rect x="150" y="150" width="300" height="300" stroke-opacity=".14" transform="rotate(22.5 300 300)"/>
      ${petals}
    </g>
  </svg>`;
}

function stepTitle(step) {
  return pick(step.title, state.lang);
}

function renderHero() {
  $('#heroTitle').textContent = pick(META.heroTitle, state.lang);
  $('#heroLead').textContent = pick(META.heroLead, state.lang);

  const startSpan = $('#heroStart span');
  if (startSpan) {
    const started = state.done.size > 0 || state.step > 0;
    startSpan.textContent = t(state.lang, started ? 'hero.resume' : 'hero.start');
  }
}

function renderRail() {
  const rail = $('#stepRail');
  if (!rail) return;
  rail.innerHTML = STEPS.map((step, index) => {
    const active = index === state.step;
    const done = state.done.has(step.id);
    return `<button class="rail-btn${active ? ' is-active' : ''}${done ? ' is-done' : ''}"
      type="button" role="tab" aria-selected="${active}" data-step="${index}"
      aria-label="${esc(stepTitle(step))}">
      <span class="rail-num">${String(step.num).padStart(2, '0')}</span>
      <span class="rail-name">${esc(stepTitle(step))}</span>
      <span class="rail-bar"><i></i></span>
    </button>`;
  }).join('');
}

function actionsHTML(step) {
  const items = step.actions || [];
  if (!items.length) return '';
  return `<p class="stage-subhead">${t(state.lang, 'journey.whatYouDo')}</p>
    <ul class="action-list">${items.map((item) => `<li>${esc(pick(item, state.lang))}</li>`).join('')}</ul>`;
}

function tipsHTML(step) {
  const tips = step.tips || [];
  if (!tips.length) return '';
  return tips
    .map(
      (tip) => `<div class="tip-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
          <path d="M9.5 18h5M10 21h4"/><path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.4-.9 1-.9 1.7V16h-5.2v-.4c0-.7-.3-1.3-.9-1.7A6 6 0 0 1 12 3z"/>
        </svg>
        <span>${esc(pick(tip, state.lang))}</span>
      </div>`
    )
    .join('');
}

function duaCard(dua) {
  const label = pick(dua.label, state.lang);
  const meaning = state.lang === 'ur' ? dua.ur : dua.en;
  const note = dua.note ? pick(dua.note, state.lang) : '';
  const grade = pick(dua.grade, state.lang);
  const quran = dua.quran;
  const words = quran?.words || [];
  const searchBlob = [
    dua.id,
    dua.ar,
    dua.tr,
    dua.en,
    dua.ur,
    dua.label?.en,
    dua.label?.ar,
    dua.label?.ur,
    dua.note?.en,
    dua.note?.ar,
    dua.note?.ur,
    dua.ref,
    label
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return `<article class="dua-card" data-dua-card="${dua.id}" data-search="${esc(searchBlob)}">
    <div class="dua-head">
      <span class="dua-label">${esc(label)}</span>
      <div class="dua-actions">
        <button class="dua-action dua-play" type="button" data-dua="${dua.id}" aria-label="${esc(t(state.lang, 'dua.play'))}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>
          <span>${esc(t(state.lang, 'dua.play'))}</span>
        </button>
        ${quran ? `<button class="dua-action dua-words-toggle" type="button" data-dua="${dua.id}" aria-expanded="false" aria-label="${esc(t(state.lang, 'dua.words'))}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 7h10M4 12h16M4 17h7"/></svg>
          <span>${esc(t(state.lang, 'dua.words'))}</span>
        </button>` : ''}
        <button class="dua-action dua-copy" type="button" data-dua="${dua.id}" aria-label="${esc(t(state.lang, 'dua.copy'))}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true">
            <rect x="8" y="8" width="11" height="12" rx="2"/><path d="M5 16V6a2 2 0 0 1 2-2h8"/>
          </svg>
          <span>${esc(t(state.lang, 'dua.copy'))}</span>
        </button>
      </div>
    </div>
    <p class="dua-arabic" lang="ar" dir="rtl">${esc(dua.ar)}</p>
    ${quran ? `<div class="dua-words" data-words-panel="${dua.id}" hidden>
      <div class="dua-words-top">
        <span>${esc(t(state.lang, 'dua.wordsHint'))}</span>
        <button class="dua-words-play" type="button" data-dua="${dua.id}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>
          <span>${esc(t(state.lang, 'dua.wordsPlay'))}</span>
        </button>
      </div>
      <div class="dua-words-list" lang="ar" dir="rtl">
        ${words.map((word, index) => `<button class="dua-word" type="button" data-dua="${dua.id}" data-word="${index}" aria-label="${esc(t(state.lang, 'dua.wordAria'))} ${index + 1}">${esc(word.ar)}</button>`).join('')}
      </div>
      <p class="dua-words-credit">${esc(t(state.lang, 'dua.wordsCredit'))} · <a href="https://quran.com/${esc(quran.link)}" target="_blank" rel="noopener noreferrer">Quran.com</a></p>
    </div>` : ''}
    <p class="dua-tr">${esc(dua.tr)}</p>
    ${state.lang === 'ar' ? '' : `<p class="dua-en">${esc(meaning)}</p>`}
    <div class="dua-foot">
      <div class="dua-ref">
        <span>${esc(t(state.lang, 'dua.reference'))}:</span>
        <a href="${esc(dua.url)}" target="_blank" rel="noopener noreferrer">${esc(dua.ref)}</a>
        <span class="badge badge-soft">${esc(grade)}</span>
      </div>
    </div>
    ${note ? `<p class="dua-note">${esc(note)}</p>` : ''}
  </article>`;
}

function duasHTML(step) {
  const ids = step.duas || [];
  if (!ids.length) {
    return `<p class="stage-subhead">${t(state.lang, 'journey.duas')}</p>
      <div class="dua-card"><p class="dua-en">${esc(t(state.lang, 'dua.none'))}</p></div>`;
  }
  return `<p class="stage-subhead">${t(state.lang, 'journey.duas')}</p>
    <div class="dua-stack">${ids.map((id) => (DUAS[id] ? duaCard(DUAS[id]) : '')).join('')}</div>`;
}

function counterHTML(type) {
  const count = state.counters[type] || 0;
  const isTawaf = type === 'tawaf';
  const label = t(state.lang, isTawaf ? 'tawaf.circuit' : 'sai.trip');
  const status = counterStatus(type, count);
  return `<div class="counter" data-counter="${type}">
    <div class="counter-ring">
      <svg viewBox="0 0 116 116" aria-hidden="true">
        <circle class="ring-bg" cx="58" cy="58" r="50"/>
        <circle class="ring-fill" cx="58" cy="58" r="50" style="stroke-dashoffset:${314.16 * (1 - count / 7)}"/>
      </svg>
      <button class="counter-btn" type="button" aria-label="${esc(t(state.lang, isTawaf ? 'tawaf.tap' : 'sai.hint'))}">
        <span class="count-num">${count}</span>
        <span class="count-sub">${esc(label)} / 7</span>
      </button>
      <span class="counter-burst" aria-hidden="true"></span>
    </div>
    <div class="counter-body">
      <h4>${esc(t(state.lang, isTawaf ? 'tawaf.title' : 'sai.title'))}</h4>
      <p>${esc(t(state.lang, isTawaf ? 'tawaf.hint' : 'sai.hint'))}</p>
      <div class="counter-status${count >= 7 ? ' is-done' : ''}">${esc(status)}</div>
      <button class="counter-reset" type="button">${esc(t(state.lang, 'counter.reset'))}</button>
    </div>
  </div>`;
}

function counterStatus(type, count) {
  if (count >= 7) return t(state.lang, type === 'tawaf' ? 'tawaf.done' : 'sai.done');
  if (count === 0) return '';
  if (type === 'sai') {
    return count % 2 === 0 ? 'المروة → الصفا' : 'الصفا → المروة';
  }
  return `${t(state.lang, 'tawaf.circuit')} ${count} ${t(state.lang, 'counter.of')} 7`;
}

function renderStage() {
  const step = STEPS[state.step];
  if (!step) return;

  $('#stageStepNum').textContent = String(step.num).padStart(2, '0');
  $('#stageStepOf').textContent = `${t(state.lang, 'journey.step')} ${step.num} ${t(state.lang, 'journey.of')} ${STEPS.length}`;
  $('#stageMinutes').textContent = `${step.minutes} ${t(state.lang, 'journey.min')}`;
  $('#stageScene').innerHTML = sceneFor(step.scene);
  $('#stageKicker').textContent = pick(step.kicker, state.lang);
  $('#stageTitle').textContent = stepTitle(step);
  $('#stageSummary').textContent = pick(step.summary, state.lang);
  $('#stageActions').innerHTML = actionsHTML(step);
  $('#stageTips').innerHTML = tipsHTML(step);
  $('#stageDuas').innerHTML = duasHTML(step);
  $('#counterHost').innerHTML = step.interactive ? counterHTML(step.interactive) : '';

  const done = state.done.has(step.id);
  const doneState = $('#stageDoneState');
  const markBtn = $('#markComplete');
  if (doneState) doneState.hidden = !done;
  if (markBtn) {
    markBtn.disabled = done;
    markBtn.textContent = t(state.lang, done ? 'journey.completed' : 'journey.markDone');
  }

  const nextBtn = $('#nextStep span');
  if (nextBtn) {
    nextBtn.textContent = t(state.lang, state.step === STEPS.length - 1 ? 'journey.finish' : 'journey.next');
  }

  const prevBtn = $('#prevStep');
  if (prevBtn) prevBtn.disabled = state.step === 0;

  updatePlayUI();
  updateProgress();
}

function renderDuas() {
  state.duas = Object.values(DUAS);
  const library = $('#duaLibrary');
  if (!library) return;
  library.innerHTML = state.duas.map(duaCard).join('');
  applyDuaFilter();
  const count = $('#duaCount');
  if (count) count.textContent = `${state.duas.length}`;
}

function applyDuaFilter() {
  const query = state.query.trim().toLowerCase();
  let visible = 0;
  $$('#duaLibrary [data-dua-card]').forEach((card) => {
    const match = !query || (card.dataset.search || '').includes(query);
    card.hidden = !match;
    if (match) visible += 1;
  });
  const count = $('#duaCount');
  if (count) count.textContent = query ? `${visible} / ${state.duas.length}` : `${state.duas.length}`;
}

function renderPillars() {
  const host = $('#pillars');
  if (!host) return;
  host.innerHTML = PILLARS.map((pillar, index) => `
    <article class="pillar reveal" data-delay="${index % 4}">
      <span class="pillar-num">0${index + 1}</span>
      <h3>${esc(pick(pillar.title, state.lang))}</h3>
      <p>${esc(pick(pillar.text, state.lang))}</p>
    </article>`).join('');
  observeReveals(host);
}

function totalCheckItems() {
  return CHECKLIST.reduce((sum, group) => sum + group.items.length, 0);
}

function renderChecklist() {
  const host = $('#checklist');
  if (!host) return;
  host.innerHTML = CHECKLIST.map((group) => `
    <div class="check-group reveal">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 7.5l4 4 8-9M4 17.5l4 4 8-9"/>
        </svg>
        ${esc(pick(group.title, state.lang))}
      </h3>
      ${group.items.map((item) => `
        <label class="check-item">
          <input type="checkbox" data-check="${item.id}" ${state.checks.has(item.id) ? 'checked' : ''}>
          <span>${esc(pick(item.text, state.lang))}</span>
        </label>`).join('')}
    </div>`).join('');
  updateCheckProgress();
  observeReveals(host);
}

function updateCheckProgress() {
  const total = totalCheckItems();
  const done = CHECKLIST.reduce(
    (sum, group) => sum + group.items.filter((item) => state.checks.has(item.id)).length,
    0
  );
  const fill = $('#checkProgressFill');
  const text = $('#checkProgressText');
  if (fill) fill.style.width = `${total ? (done / total) * 100 : 0}%`;
  if (text) text.textContent = `${done} / ${total}`;
}

function renderProhibitions() {
  const host = $('#prohibitions');
  if (!host) return;
  host.innerHTML = PROHIBITIONS.map((group) => `
    <article class="prohibition reveal">
      <h3>${esc(pick(group.title, state.lang))}</h3>
      <ul>${group.items.map((item) => `<li>${esc(pick(item, state.lang))}</li>`).join('')}</ul>
    </article>`).join('');
  observeReveals(host);
}

function renderFaq() {
  const host = $('#faqList');
  if (!host) return;
  host.innerHTML = FAQ.map((item) => `
    <details class="faq-item">
      <summary>${esc(pick(item.q, state.lang))}</summary>
      <p class="faq-answer">${esc(pick(item.a, state.lang))}</p>
    </details>`).join('');
}

function renderSources() {
  const host = $('#sourcesGrid');
  if (!host) return;
  host.innerHTML = SOURCES.map((source) => `
    <a class="source-card" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">
      <span class="source-title">${esc(pick(source.title, state.lang))}</span>
      <span class="source-ref">
        ${esc(source.ref)}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8"/>
        </svg>
      </span>
    </a>`).join('');
}

function renderAll() {
  renderHero();
  renderRail();
  renderStage();
  renderDuas();
  renderPillars();
  renderChecklist();
  renderProhibitions();
  renderFaq();
  renderSources();
  updateProgress();
}

/* ------------------------------------------------------------------ */
/*  Progress & step navigation                                         */
/* ------------------------------------------------------------------ */

function updateProgress() {
  const done = state.done.size;
  const pct = (done / STEPS.length) * 100;
  const fill = $('#journeyProgress');
  if (fill) fill.style.width = `${pct}%`;
  const text = $('#journeyProgressText');
  if (text) text.textContent = `${done} / ${STEPS.length}`;
  const bar = $('#journeyProgressBar');
  if (bar) bar.setAttribute('aria-valuenow', String(done));
}

function setStep(index, { scroll = false, silent = false } = {}) {
  const next = clamp(index, 0, STEPS.length - 1);
  if (next !== state.step) {
    stopMedia();
  }
  state.step = next;
  persist();
  renderRail();
  renderStage();

  if (!silent) {
    const step = STEPS[next];
    if (!state.viewed.has(step.id)) {
      state.viewed.add(step.id);
      trackEvent('step_view', { step: step.id });
    }
  }

  if (scroll) {
    const stage = $('#stage');
    if (stage) {
      const top = stage.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  const activeRail = $(`#stepRail [data-step="${next}"]`);
  if (activeRail) {
    activeRail.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}

function markStepDone(stepId) {
  if (state.done.has(stepId)) return;
  state.done.add(stepId);
  persist();
  trackEvent('step_complete', { step: stepId });
  if (state.done.size === STEPS.length && !state.journeyCompleteSent) {
    state.journeyCompleteSent = true;
    trackEvent('journey_complete');
    showToast(t(state.lang, 'journey.done'));
  }
  renderRail();
  renderStage();
  updateProgress();
}

function nextStep() {
  const step = STEPS[state.step];
  markStepDone(step.id);
  if (state.step < STEPS.length - 1) {
    setStep(state.step + 1, { scroll: true });
  } else {
    showToast(t(state.lang, 'journey.celebrate'));
  }
}

/* ------------------------------------------------------------------ */
/*  Language & theme                                                   */
/* ------------------------------------------------------------------ */

function applyStatic() {
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(state.lang, key);
  });
  $$('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(state.lang, el.dataset.i18nAria));
  });
  $$('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(state.lang, el.dataset.i18nPlaceholder));
  });
  const search = $('#duaSearch');
  if (search) search.setAttribute('aria-label', t(state.lang, 'duas.search'));
}

function setLang(lang) {
  if (!LANGS.some((l) => l.code === lang)) return;
  if (lang === state.lang) return;
  stopMedia();
  state.lang = lang;
  persist();
  html.lang = lang;
  html.dir = dirFor(lang);
  const select = $('#langSelect');
  if (select) select.value = lang;
  applyStatic();
  renderAll();
  updateVoiceUI();
  updateAutoUI();
  const themeToggle = $('#themeToggle');
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', t(lang, state.theme === 'dark' ? 'theme.toLight' : 'theme.toDark'));
  }
  trackEvent('lang_change');
}

function setTheme(theme, { silent = false } = {}) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  persist();
  html.dataset.theme = state.theme;
  const sun = $('.icon-sun');
  const moon = $('.icon-moon');
  if (sun) sun.hidden = state.theme !== 'dark';
  if (moon) moon.hidden = state.theme !== 'light';
  const toggle = $('#themeToggle');
  if (toggle) {
    toggle.setAttribute('aria-label', t(state.lang, state.theme === 'dark' ? 'theme.toLight' : 'theme.toDark'));
  }
  if (!silent) trackEvent('theme_change');
}

function updateVoiceUI() {
  const toggle = $('#voiceToggle');
  if (!toggle) return;
  toggle.classList.toggle('is-on', state.voice);
  toggle.setAttribute('aria-pressed', String(state.voice));
  toggle.setAttribute('aria-label', t(state.lang, state.voice ? 'voice.on' : 'voice.off'));
  const on = $('.icon-voice-on', toggle);
  const off = $('.icon-voice-off', toggle);
  if (on) on.hidden = !state.voice;
  if (off) off.hidden = state.voice;
}

function toggleVoice() {
  state.voice = !state.voice;
  persist();
  if (!state.voice) stopMedia();
  updateVoiceUI();
  showToast(t(state.lang, state.voice ? 'voice.on' : 'voice.off'));
}

function updateAutoUI() {
  $$('#autoToggle, #autoToggleInline').forEach((button) => {
    button.setAttribute('aria-pressed', String(state.auto));
    button.setAttribute('aria-label', t(state.lang, state.auto ? 'journey.autoOn' : 'journey.autoOff'));
  });
}

function toggleAuto() {
  state.auto = !state.auto;
  persist();
  updateAutoUI();
  showToast(t(state.lang, state.auto ? 'journey.autoOn' : 'journey.autoOff'));
}

/* ------------------------------------------------------------------ */
/*  Clipboard & sharing                                                */
/* ------------------------------------------------------------------ */

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    return true;
  } catch {
    return false;
  }
}

async function shareGuide() {
  const payload = {
    title: 'Umrah Journey',
    text: 'A step-by-step, voice-guided Umrah walkthrough with authentic duas.',
    url: location.origin + location.pathname
  };
  if (navigator.share) {
    try {
      await navigator.share(payload);
      trackEvent('share');
      return;
    } catch {
      /* user cancelled — fall back to copy */
    }
  }
  const ok = await copyText(payload.url);
  if (ok) {
    showToast(t(state.lang, 'footer.copied'));
    trackEvent('share');
  } else {
    showToast(t(state.lang, 'footer.copyFailed'));
  }
}

/* ------------------------------------------------------------------ */
/*  Reveal & scroll spy                                                */
/* ------------------------------------------------------------------ */

let revealObserver = null;
function observeReveals(root = document) {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal', root).forEach((el) => el.classList.add('in'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
  }
  $$('.reveal:not(.in)', root).forEach((el) => revealObserver.observe(el));
}

function setupScrollSpy() {
  const links = $$('#siteNav a');
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const matches = link.getAttribute('href') === `#${entry.target.id}`;
          if (matches) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((section) => spy.observe(section));
}

/* ------------------------------------------------------------------ */
/*  Events                                                             */
/* ------------------------------------------------------------------ */

function bindEvents() {
  const header = $('#siteHeader');
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const menuToggle = $('#menuToggle');
  menuToggle?.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', t(state.lang, open ? 'menu.close' : 'menu.open'));
    const menu = $('.icon-menu', menuToggle);
    const close = $('.icon-close', menuToggle);
    if (menu) menu.hidden = open;
    if (close) close.hidden = !open;
  });

  $$('#siteNav a').forEach((link) => {
    link.addEventListener('click', () => {
      header?.classList.remove('nav-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      const menu = $('.icon-menu', menuToggle);
      const close = $('.icon-close', menuToggle);
      if (menu) menu.hidden = false;
      if (close) close.hidden = true;
    });
  });

  $('#langSelect')?.addEventListener('change', (event) => setLang(event.target.value));
  $('#themeToggle')?.addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  $('#voiceToggle')?.addEventListener('click', toggleVoice);
  $('#autoToggle')?.addEventListener('click', toggleAuto);
  $('#autoToggleInline')?.addEventListener('click', toggleAuto);
  $('#shareBtn')?.addEventListener('click', shareGuide);

  $('#stepRail')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-step]');
    if (!button) return;
    setStep(Number(button.dataset.step), { scroll: true });
  });

  $('#stepRail')?.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const buttons = $$('#stepRail [data-step]');
    const current = buttons.indexOf(document.activeElement);
    if (current < 0) return;
    event.preventDefault();
    const dir = event.key === 'ArrowRight' ? 1 : -1;
    const next = buttons[clamp(current + dir, 0, buttons.length - 1)];
    next?.focus();
  });

  $('#prevStep')?.addEventListener('click', () => setStep(state.step - 1, { scroll: true }));
  $('#nextStep')?.addEventListener('click', nextStep);
  $('#markComplete')?.addEventListener('click', () => markStepDone(STEPS[state.step].id));

  $('#resetJourney')?.addEventListener('click', () => {
    const message = state.lang === 'ar'
      ? 'هل تريد البدء من جديد؟ ستُمسح علامات الخطوات.'
      : state.lang === 'ur'
        ? 'کیا آپ دوبارہ شروع کرنا چاہتے ہیں؟ مراحل کے نشانات مٹ جائیں گے۔'
        : 'Start the journey over? Your step progress will be cleared.';
    if (!window.confirm(message)) return;
    state.done.clear();
    state.counters = { tawaf: 0, sai: 0 };
    state.step = 0;
    state.journeyCompleteSent = false;
    persist();
    renderAll();
    setStep(0, { silent: true });
    showToast(t(state.lang, 'journey.reset'));
  });

  $('#playNarration')?.addEventListener('click', () => {
    const step = STEPS[state.step];
    const key = `step:${step.id}:${state.lang}`;
    playMedia({
      key,
      text: pick(step.narration, state.lang),
      lang: state.lang,
      onend: () => {
        if (state.auto) {
          window.setTimeout(() => {
            if (state.step < STEPS.length - 1) {
              markStepDone(step.id);
              setStep(state.step + 1, { scroll: true });
            } else {
              markStepDone(step.id);
              showToast(t(state.lang, 'journey.celebrate'));
            }
          }, 800);
        }
      }
    });
    trackEvent('voice_play', { step: step.id });
  });

  document.addEventListener('click', async (event) => {
    const wordsToggle = event.target.closest('.dua-words-toggle');
    if (wordsToggle) {
      const card = wordsToggle.closest('.dua-card');
      const panel = card?.querySelector('[data-words-panel]');
      if (panel) {
        const open = panel.hidden;
        panel.hidden = !open;
        wordsToggle.setAttribute('aria-expanded', String(open));
        const label = wordsToggle.querySelector('span');
        if (label) label.textContent = t(state.lang, open ? 'dua.wordsHide' : 'dua.words');
      }
      return;
    }

    const wordButton = event.target.closest('.dua-word');
    if (wordButton) {
      const dua = DUAS[wordButton.dataset.dua];
      if (!dua) return;
      playWord(dua, Number(wordButton.dataset.word), wordButton.closest('.dua-card'));
      trackEvent('dua_words', { step: STEPS[state.step].id });
      return;
    }

    const wordsPlay = event.target.closest('.dua-words-play');
    if (wordsPlay) {
      const dua = DUAS[wordsPlay.dataset.dua];
      if (!dua) return;
      playWords(dua, wordsPlay.closest('.dua-card'));
      trackEvent('dua_words', { step: STEPS[state.step].id });
      return;
    }

    const play = event.target.closest('.dua-play');
    if (play) {
      const dua = DUAS[play.dataset.dua];
      if (!dua) return;
      const key = `dua:${dua.id}:${state.lang}`;
      const sources = dua.quran?.ayahs || [];
      if (srcForKey(key)) {
        playMedia({ key, text: dua.ar, lang: 'ar' });
      } else if (sources.length) {
        playAudioList({
          key,
          sources,
          text: dua.ar,
          lang: 'ar'
        });
      } else {
        playMedia({
          key,
          text: dua.ar,
          lang: 'ar'
        });
      }
      trackEvent('dua_play', { step: STEPS[state.step].id });
      return;
    }

    const copy = event.target.closest('.dua-copy');
    if (copy) {
      const dua = DUAS[copy.dataset.dua];
      if (!dua) return;
      const ok = await copyText(dua.ar);
      showToast(t(state.lang, ok ? 'dua.copied' : 'dua.copyFailed'));
      return;
    }

    const check = event.target.closest('[data-check]');
    if (check) {
      const id = check.dataset.check;
      if (check.checked) state.checks.add(id);
      else state.checks.delete(id);
      persist();
      updateCheckProgress();
      trackEvent('checklist_item');
    }
  });

  $('#counterHost')?.addEventListener('click', (event) => {
    const wrap = event.target.closest('[data-counter]');
    if (!wrap) return;
    const type = wrap.dataset.counter;
    if (event.target.closest('.counter-reset')) {
      state.counters[type] = 0;
      persist();
      refreshCounter(wrap, type, false);
      return;
    }
    if (!event.target.closest('.counter-btn')) return;
    const count = state.counters[type] || 0;
    if (count >= 7) return;
    state.counters[type] = count + 1;
    persist();
    refreshCounter(wrap, type, true);
  });

  $('#duaSearch')?.addEventListener('input', (event) => {
    state.query = event.target.value;
    applyDuaFilter();
  });

  window.addEventListener('beforeunload', stopMedia);
}

function refreshCounter(wrap, type, burst) {
  const count = state.counters[type] || 0;
  const ring = $('.ring-fill', wrap);
  const num = $('.count-num', wrap);
  const status = $('.counter-status', wrap);
  const burstEl = $('.counter-burst', wrap);
  if (ring) ring.style.strokeDashoffset = String(314.16 * (1 - count / 7));
  if (num) num.textContent = String(count);
  if (status) {
    status.textContent = counterStatus(type, count);
    status.classList.toggle('is-done', count >= 7);
  }
  if (burst && burstEl && !reduceMotion) {
    burstEl.classList.remove('go');
    void burstEl.offsetWidth;
    burstEl.classList.add('go');
  }
}

/* ------------------------------------------------------------------ */
/*  Boot                                                               */
/* ------------------------------------------------------------------ */

function boot() {
  html.lang = state.lang;
  html.dir = dirFor(state.lang);
  html.dataset.theme = state.theme;

  const select = $('#langSelect');
  if (select) select.value = state.lang;

  $('#heroGeometry').innerHTML = geometrySVG();

  applyStatic();
  setTheme(state.theme, { silent: true });
  updateVoiceUI();
  updateAutoUI();
  renderAll();
  bindEvents();
  observeReveals();
  setupScrollSpy();

  const initial = $('#themeToggle');
  if (initial) initial.setAttribute('aria-label', t(state.lang, state.theme === 'dark' ? 'theme.toLight' : 'theme.toDark'));

  // Resume: open at the saved step without hijacking the scroll position.
  if (state.step > 0) {
    const startSpan = $('#heroStart span');
    if (startSpan) startSpan.textContent = t(state.lang, 'hero.resume');
  }

  if (!speechSupported) {
    const toggle = $('#voiceToggle');
    if (toggle) {
      toggle.classList.add('is-on');
      toggle.title = t(state.lang, 'voice.unavailable');
    }
  }

  trackVisit();
  loadCounter();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach((el) => el.classList.add('in'));
  }
}

boot();
