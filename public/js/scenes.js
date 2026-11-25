/* Architectural & spatial vector diagrams — one per rite.
   Supports English, Arabic and Urdu labels so every language reads natively. */

const SCENE_LABELS = {
  en: {
    miqat: 'MIQAT',
    haram: 'HARAM',
    miqatSub: 'MIQAT → MAKKAH',
    talbiyahSub: 'TALBIYAH · MIQAT TO MAKKAH',
    sightSub: 'AL-MASJID AL-HARAM · FIRST SIGHT',
    start: 'START',
    antiCw: '7× ANTI-CW',
    tawafSub: 'MATAF PLAN · {count}/7 CIRCUITS',
    kaaba: 'KA‘BAH',
    maqam: 'MAQAM',
    twoRakah: '2 RAK‘AH',
    maqamSub: 'MAQAM IBRAHIM AXIS & ZAMZAM',
    greenZone: 'GREEN MARKERS · BRISK PACE (MEN)',
    saiSub: 'MAS‘A · {count}/7 TRIPS ({m}M / 3150M)',
    halqSub: 'HALQ OR TAQSIR · IHRAM COMPLETE',
    minaSub: 'DAY 8 · TARWIYAH IN MINA',
    arafahSub: 'DAY 9 · WUQUF · DHUHR TO SUNSET',
    muzdalifahSub: 'NIGHT AT AL-MASH‘AR AL-HARAM',
    sughra: '1. SUGHRA',
    wusta: '2. WUSTA',
    aqabah: '3. AQABAH',
    jamaratSub: '7 PEBBLES EACH · IN ORDER',
    sacrificeSub: 'DAY 10 · HADY · BISMILLAH ALLAHU AKBAR',
    wadaSub: 'FINAL RITE BEFORE DEPARTURE',
    completeSub: 'PILGRIMAGE COMPLETE · MAY ALLAH ACCEPT'
  },
  ar: {
    miqat: 'الميقات',
    haram: 'الحرم',
    miqatSub: 'الميقات ← مكة المكرمة',
    talbiyahSub: 'التلبية من الميقات إلى مكة',
    sightSub: 'المسجد الحرام · أول نظرة',
    start: 'البداية',
    antiCw: '٧ أشواط',
    tawafSub: 'خطة المطاف · {count} / ٧ أشواط',
    kaaba: 'الكعبة',
    maqam: 'المقام',
    twoRakah: 'ركعتان',
    maqamSub: 'مقام إبراهيم وزمزم',
    greenZone: 'العلامتان الخضراوان · السعي السريع للرجال',
    saiSub: 'المسعى · {count} / ٧ أشواط',
    halqSub: 'الحلق أو التقصير · التحلل',
    minaSub: 'اليوم ٨ · التروية في منى',
    arafahSub: 'اليوم ٩ · الوقوف من الظهر للغروب',
    muzdalifahSub: 'ليلة المشعر الحرام',
    sughra: '١. الصغرى',
    wusta: '٢. الوسطى',
    aqabah: '٣. العقبة',
    jamaratSub: '٧ حصيات لكل جمرة بالترتيب',
    sacrificeSub: 'اليوم ١٠ · الهدي · بسم الله والله أكبر',
    wadaSub: 'آخر منسك قبل المغادرة',
    completeSub: 'تم النسك · تقبل الله طاعتكم'
  },
  ur: {
    miqat: 'میقات',
    haram: 'حرم',
    miqatSub: 'میقات ← مکہ مکرمہ',
    talbiyahSub: 'تلبیہ · میقات سے مکہ',
    sightSub: 'مسجد الحرام · پہلی زیارت',
    start: 'آغاز',
    antiCw: '۷ چکر',
    tawafSub: 'مطاف · {count} / ۷ چکر',
    kaaba: 'کعبہ',
    maqam: 'مقام',
    twoRakah: 'دو رکعت',
    maqamSub: 'مقام ابراہیم اور زمزم',
    greenZone: 'سبز نشان · مردوں کے لیے تیز چال',
    saiSub: 'مسعیٰ · {count} / ۷ چکر',
    halqSub: 'حلق یا قصر · احرام سے آزادی',
    minaSub: 'دن ۸ · ترویہ منیٰ میں',
    arafahSub: 'دن ۹ · وقوف ظہر سے غروب تک',
    muzdalifahSub: 'مشعر حرام کی رات',
    sughra: '۱. صغریٰ',
    wusta: '۲. وسطیٰ',
    aqabah: '۳. عقبہ',
    jamaratSub: 'ترتیب سے ۷ کنکریاں',
    sacrificeSub: 'دن ۱۰ · قربانی · بسم اللہ اللہ اکبر',
    wadaSub: 'روانگی سے پہلے آخری عمل',
    completeSub: 'مکمل · اللہ قبول فرمائے'
  }
};

function lbl(lang, key) {
  return (SCENE_LABELS[lang] && SCENE_LABELS[lang][key]) || SCENE_LABELS.en[key] || '';
}

const DEFS = `
  <defs>
    <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0v24" fill="none" stroke="var(--scene-grid)" stroke-width="0.75"/>
    </pattern>
    <radialGradient id="softFocus" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.14"/>
      <stop offset="70%" stop-color="var(--accent)" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="hizamBand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--gold)" stop-opacity="0.75"/>
      <stop offset="50%" stop-color="var(--gold-2)" stop-opacity="1"/>
      <stop offset="100%" stop-color="var(--gold)" stop-opacity="0.75"/>
    </linearGradient>
    <marker id="arrowAccent" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M1.5 2L8 5L1.5 8" fill="none" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
    <marker id="arrowGold" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M1.5 2L8 5L1.5 8" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>`;

function frameBase() {
  return `
    ${DEFS}
    <rect width="600" height="400" fill="var(--scene-bg)"/>
    <rect width="600" height="400" fill="url(#archGrid)"/>
    <circle cx="300" cy="200" r="190" fill="url(#softFocus)"/>`;
}

function kaabaElevation(cx, cy, w, h) {
  const x = cx - w / 2;
  const y = cy - h;
  const bandY = y + Math.round(h * 0.22);
  const bandH = Math.max(8, Math.round(h * 0.14));
  const doorW = Math.round(w * 0.18);
  const doorH = Math.round(h * 0.36);
  const doorX = cx + Math.round(w * 0.14);
  const doorY = cy - doorH;
  return `
    <g class="kaaba-elev">
      <rect x="${x - 18}" y="${cy}" width="${w + 36}" height="8" rx="2" fill="var(--scene-line)"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="var(--kaaba-fill)" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <rect x="${x}" y="${bandY}" width="${w}" height="${bandH}" fill="url(#hizamBand)"/>
      <line x1="${x + 10}" y1="${bandY + bandH * 0.5}" x2="${x + w - 10}" y2="${bandY + bandH * 0.5}" stroke="var(--kaaba-fill)" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="4 4"/>
      <rect x="${doorX}" y="${doorY}" width="${doorW}" height="${doorH}" rx="1.5" fill="var(--gold)" fill-opacity="0.92"/>
      <rect x="${doorX + 3}" y="${doorY + 4}" width="${doorW - 6}" height="${doorH - 8}" fill="none" stroke="var(--kaaba-fill)" stroke-opacity="0.4" stroke-width="0.9"/>
      <circle cx="${x + 8}" cy="${cy - 8}" r="4.5" fill="var(--gold-2)" stroke="var(--kaaba-fill)" stroke-width="1.5"/>
    </g>`;
}

export const SCENES = {
  miqat: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <g fill="none">
        <circle cx="300" cy="200" r="144" stroke="var(--scene-line-strong)" stroke-width="1.25" stroke-dasharray="6 6"/>
        <circle cx="300" cy="200" r="96" stroke="var(--accent)" stroke-opacity="0.55" stroke-width="1.25"/>
        <circle cx="300" cy="200" r="46" stroke="var(--gold)" stroke-opacity="0.65" stroke-width="1.25"/>
      </g>
      <path d="M124 200h352M300 32v336" stroke="var(--scene-line)" stroke-width="1" stroke-dasharray="3 5"/>
      <path d="M180 286L278 214" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" marker-end="url(#arrowAccent)"/>
      <circle cx="176" cy="289" r="5" fill="var(--accent)"/>
      <rect x="287" y="187" width="26" height="26" rx="2" fill="var(--kaaba-fill)" stroke="var(--gold)" stroke-width="1.5"/>
      <line x1="287" y1="194" x2="313" y2="194" stroke="var(--gold)" stroke-width="2"/>
      <g transform="translate(116 266)">
        <rect width="74" height="22" rx="11" fill="var(--scene-card)" stroke="var(--scene-line-strong)"/>
        <text x="37" y="14.5" text-anchor="middle" class="scene-mono">${lbl(lang, 'miqat')}</text>
      </g>
      <g transform="translate(362 96)">
        <rect width="84" height="22" rx="11" fill="var(--scene-card)" stroke="var(--scene-line-strong)"/>
        <text x="42" y="14.5" text-anchor="middle" class="scene-mono">${lbl(lang, 'haram')}</text>
      </g>
      <text x="300" y="374" text-anchor="middle" class="scene-mono">${lbl(lang, 'miqatSub')}</text>
    </svg>`,

  talbiyah: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <path d="M88 282C184 270 232 198 300 184C368 170 416 144 504 114" fill="none" stroke="var(--scene-line-strong)" stroke-width="1.5" stroke-dasharray="4 6"/>
      <path d="M88 282C184 270 232 198 300 184" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" marker-end="url(#arrowAccent)"/>
      <g transform="translate(300 236)" fill="none" stroke="var(--accent)" stroke-linecap="round">
        <path d="M-128 0c16-42 32-42 48 0s32 42 48 0s32-72 48 0s32 72 48 0s32-42 48 0s32 42 48 0" stroke-opacity="0.24" stroke-width="1.4"/>
        <path d="M-96 0c12-28 24-28 36 0s24 28 36 0s24-48 36 0s24 48 36 0s24-28 36 0" stroke-opacity="0.6" stroke-width="1.8"/>
      </g>
      <circle cx="88" cy="282" r="5" fill="var(--accent)"/>
      <g transform="translate(508 112)">
        <circle r="18" fill="var(--scene-card)" stroke="var(--gold)" stroke-width="1.4"/>
        <rect x="-8" y="-8" width="16" height="16" rx="1.5" fill="var(--kaaba-fill)" stroke="var(--gold)" stroke-width="1.2"/>
        <line x1="-8" y1="-3" x2="8" y2="-3" stroke="var(--gold)" stroke-width="1.6"/>
      </g>
      <text x="300" y="102" text-anchor="middle" class="scene-ar" lang="ar">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ</text>
      <text x="300" y="356" text-anchor="middle" class="scene-mono">${lbl(lang, 'talbiyahSub')}</text>
    </svg>`,

  sight: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <g fill="none" stroke="var(--scene-line-strong)" stroke-width="1.3">
        <path d="M116 346V162a184 136 0 0 1 368 0v184"/>
        <path d="M144 346V172a156 112 0 0 1 312 0v174" stroke="var(--scene-line)"/>
        <line x1="76" y1="346" x2="524" y2="346" stroke-width="1.5"/>
      </g>
      <path d="M300 44v26M300 326v20" stroke="var(--gold)" stroke-opacity="0.45" stroke-width="1.2" stroke-dasharray="2 4"/>
      ${kaabaElevation(300, 314, 136, 120)}
      <text x="300" y="376" text-anchor="middle" class="scene-mono">${lbl(lang, 'sightSub')}</text>
    </svg>`,

  tawaf: ({ count = 0, lang = 'en' } = {}) => {
    const rings = Array.from({ length: 7 }, (_, i) => {
      const num = i + 1;
      const r = 64 + i * 16;
      const active = num <= count;
      const current = num === count + 1 || (count === 7 && num === 7);
      const stroke = active ? 'var(--accent)' : current ? 'var(--gold)' : 'var(--scene-line)';
      const width = active ? 2.2 : current ? 1.6 : 1;
      const opacity = active ? 0.92 : current ? 0.85 : 0.7;
      const dash = active ? '' : 'stroke-dasharray="4 5"';
      return `<circle cx="300" cy="196" r="${r}" fill="none" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="${width}" ${dash}/>`;
    }).join('');

    return `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      ${rings}
      <path d="M276 168a24 24 0 0 1 48 0" fill="none" stroke="var(--gold)" stroke-width="2" stroke-opacity="0.8"/>
      <rect x="274" y="170" width="52" height="52" rx="2" fill="var(--kaaba-fill)" stroke="var(--gold)" stroke-width="1.8"/>
      <rect x="280" y="176" width="40" height="40" fill="none" stroke="var(--gold)" stroke-opacity="0.35" stroke-width="1"/>
      <circle cx="326" cy="222" r="5" fill="var(--gold-2)" stroke="var(--kaaba-fill)" stroke-width="1.5"/>
      <line x1="330" y1="222" x2="480" y2="222" stroke="var(--gold)" stroke-width="1.4" stroke-dasharray="3 4"/>
      <path d="M472 194A172 172 0 0 0 364 36" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" marker-end="url(#arrowAccent)"/>
      <circle cx="364" cy="222" r="4.5" fill="var(--scene-card)" stroke="var(--gold)" stroke-width="1.6"/>
      <text x="488" y="226" class="scene-mono">${lbl(lang, 'start')}</text>
      <text x="114" y="198" text-anchor="end" class="scene-mono">${lbl(lang, 'antiCw')}</text>
      <text x="300" y="382" text-anchor="middle" class="scene-mono">${lbl(lang, 'tawafSub').replace('{count}', String(count))}</text>
    </svg>`;
  },

  maqam: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <line x1="90" y1="242" x2="510" y2="242" stroke="var(--scene-line-strong)" stroke-width="1" stroke-dasharray="4 5"/>
      ${kaabaElevation(164, 242, 84, 78)}
      <g transform="translate(320 242)">
        <rect x="-18" y="-8" width="36" height="8" rx="1.5" fill="var(--scene-line-strong)"/>
        <rect x="-12" y="-58" width="24" height="50" rx="2" fill="var(--scene-card)" stroke="var(--gold)" stroke-width="1.6"/>
        <path d="M-14 -58c0-10 6-18 14-18s14 8 14 18z" fill="var(--gold)" fill-opacity="0.85"/>
        <circle cx="0" cy="-80" r="2.5" fill="var(--gold)"/>
      </g>
      <g transform="translate(434 218)">
        <rect x="-26" y="-14" width="52" height="28" rx="3" fill="var(--scene-card)" stroke="var(--accent)" stroke-width="1.5"/>
        <path d="M-16 0h18" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#arrowAccent)"/>
      </g>
      <g transform="translate(300 318)">
        <path d="M-14 -14h28l-4 28h-20z" fill="var(--scene-card)" stroke="var(--accent)" stroke-width="1.5"/>
        <path d="M-8 -4c4-3 12 3 16 0" fill="none" stroke="var(--accent)" stroke-width="1.4"/>
      </g>
      <text x="164" y="276" text-anchor="middle" class="scene-mono">${lbl(lang, 'kaaba')}</text>
      <text x="320" y="276" text-anchor="middle" class="scene-mono">${lbl(lang, 'maqam')}</text>
      <text x="434" y="276" text-anchor="middle" class="scene-mono">${lbl(lang, 'twoRakah')}</text>
      <text x="300" y="368" text-anchor="middle" class="scene-mono">${lbl(lang, 'maqamSub')}</text>
    </svg>`,

  sai: ({ count = 0, lang = 'en' } = {}) => {
    const dirForward = count % 2 === 0;
    const progressPct = Math.min(1, count / 7);
    const markerX = dirForward ? 120 + (count === 7 ? 360 : 0) : 480;
    const meters = Math.round(progressPct * 3150);
    return `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <line x1="76" y1="258" x2="524" y2="258" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <path d="M68 258c16-42 42-62 70-62s44 20 56 62z" fill="var(--scene-card)" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <path d="M406 258c12-42 28-62 56-62s54 20 70 62z" fill="var(--scene-card)" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <rect x="242" y="138" width="116" height="120" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-opacity="0.35" stroke-dasharray="3 4"/>
      <line x1="242" y1="138" x2="242" y2="258" stroke="var(--accent)" stroke-width="2"/>
      <line x1="358" y1="138" x2="358" y2="258" stroke="var(--accent)" stroke-width="2"/>
      <circle cx="242" cy="134" r="4" fill="var(--accent)"/>
      <circle cx="358" cy="134" r="4" fill="var(--accent)"/>
      ${Array.from({ length: 7 }, (_, i) => {
        const x = 180 + i * 40;
        const done = i + 1 <= count;
        return `<rect x="${x - 10}" y="294" width="20" height="5" rx="2.5" fill="${done ? 'var(--accent)' : 'var(--scene-line)'}"/>`;
      }).join('')}
      <path d="${dirForward ? 'M148 214h304' : 'M452 214H148'}" fill="none" stroke="var(--gold)" stroke-width="2" marker-end="url(#arrowGold)"/>
      <circle cx="${markerX}" cy="258" r="5" fill="var(--gold-2)" stroke="var(--scene-bg)" stroke-width="1.5"/>
      <text x="132" y="182" text-anchor="middle" class="scene-ar" lang="ar">الصفا</text>
      <text x="468" y="182" text-anchor="middle" class="scene-ar" lang="ar">المروة</text>
      <text x="300" y="122" text-anchor="middle" class="scene-mono">${lbl(lang, 'greenZone')}</text>
      <text x="300" y="348" text-anchor="middle" class="scene-mono">${lbl(lang, 'saiSub').replace('{count}', String(count)).replace('{m}', String(meters))}</text>
    </svg>`;
  },

  halq: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <g fill="none">
        <circle cx="300" cy="192" r="98" stroke="var(--scene-line-strong)" stroke-width="1.3"/>
        <circle cx="300" cy="192" r="76" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="140 80" stroke-linecap="round"/>
        <path d="M300 94v24M300 266v24M202 192h24M374 192h24" stroke="var(--scene-line-strong)" stroke-width="1.2"/>
      </g>
      <g transform="translate(300 192)">
        <circle r="38" fill="var(--scene-card)" stroke="var(--gold)" stroke-width="1.5"/>
        <path d="M-12 2l8 8 18-20" fill="none" stroke="var(--accent)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <text x="300" y="336" text-anchor="middle" class="scene-ar" lang="ar">التحلل من الإحرام</text>
      <text x="300" y="368" text-anchor="middle" class="scene-mono">${lbl(lang, 'halqSub')}</text>
    </svg>`,

  mina: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <path d="M60 304h480" stroke="var(--scene-line-strong)" stroke-width="1.4"/>
      <g fill="var(--scene-card)" stroke="var(--scene-line-strong)" stroke-width="1.4" stroke-linejoin="round">
        ${[132, 216, 300, 384, 468].map((cx, i) => {
          const w = i === 2 ? 78 : 68;
          const h = i === 2 ? 66 : 54;
          const accent = i === 2 ? 'stroke="var(--accent)" stroke-width="1.8"' : '';
          return `<path d="M${cx - w / 2} 304L${cx} ${304 - h}L${cx + w / 2} 304z" ${accent}/>
                  <line x1="${cx}" y1="${304 - h}" x2="${cx}" y2="${304 - h - 12}" stroke="var(--gold)" stroke-width="1.4"/>`;
        }).join('')}
      </g>
      <text x="300" y="138" text-anchor="middle" class="scene-ar" lang="ar">منى</text>
      <text x="300" y="354" text-anchor="middle" class="scene-mono">${lbl(lang, 'minaSub')}</text>
    </svg>`,

  arafah: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <path d="M120 264A180 140 0 0 1 480 264" fill="none" stroke="var(--gold)" stroke-opacity="0.45" stroke-width="1.3" stroke-dasharray="4 5"/>
      <circle cx="300" cy="124" r="14" fill="var(--gold)" fill-opacity="0.22" stroke="var(--gold)" stroke-width="1.5"/>
      <circle cx="300" cy="124" r="5" fill="var(--gold-2)"/>
      <path d="M64 294h472" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <path d="M180 294c36-62 72-92 120-92s84 30 120 92z" fill="var(--scene-card)" stroke="var(--accent)" stroke-width="1.6"/>
      <path d="M300 202v-18" stroke="var(--scene-ink)" stroke-width="2" stroke-linecap="round"/>
      <text x="300" y="90" text-anchor="middle" class="scene-ar" lang="ar">عرفة</text>
      <text x="300" y="348" text-anchor="middle" class="scene-mono">${lbl(lang, 'arafahSub')}</text>
    </svg>`,

  muzdalifah: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <path d="M88 262c80-18 140-12 212 0s132 18 212 0" fill="none" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <g transform="translate(300 140)">
        <circle r="30" fill="none" stroke="var(--scene-line)" stroke-width="1"/>
        <path d="M8 -16a18 18 0 1 0 14 28 14 14 0 1 1-14-28z" fill="var(--gold)" fill-opacity="0.9"/>
      </g>
      <g fill="var(--accent)" fill-opacity="0.7">
        ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<circle cx="${210 + i * 30}" cy="296" r="3.5"/>`).join('')}
      </g>
      <text x="300" y="88" text-anchor="middle" class="scene-ar" lang="ar">المزدلفة</text>
      <text x="300" y="348" text-anchor="middle" class="scene-mono">${lbl(lang, 'muzdalifahSub')}</text>
    </svg>`,

  jamarat: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <line x1="72" y1="292" x2="528" y2="292" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
      <g>
        <rect x="128" y="196" width="44" height="96" rx="18" fill="var(--scene-card)" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
        <rect x="278" y="176" width="44" height="116" rx="18" fill="var(--scene-card)" stroke="var(--scene-line-strong)" stroke-width="1.5"/>
        <rect x="428" y="156" width="44" height="136" rx="18" fill="var(--scene-card)" stroke="var(--accent)" stroke-width="2"/>
      </g>
      <path d="M188 238h74M338 238h74" stroke="var(--gold)" stroke-width="1.6" stroke-dasharray="3 4" marker-end="url(#arrowGold)"/>
      <text x="150" y="318" text-anchor="middle" class="scene-mono">${lbl(lang, 'sughra')}</text>
      <text x="300" y="318" text-anchor="middle" class="scene-mono">${lbl(lang, 'wusta')}</text>
      <text x="450" y="318" text-anchor="middle" class="scene-mono">${lbl(lang, 'aqabah')}</text>
      <text x="300" y="110" text-anchor="middle" class="scene-ar" lang="ar">الجمرات</text>
      <text x="300" y="362" text-anchor="middle" class="scene-mono">${lbl(lang, 'jamaratSub')}</text>
    </svg>`,

  sacrifice: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <g transform="translate(300 192)" fill="none">
        <rect x="-56" y="-56" width="112" height="112" rx="4" stroke="var(--scene-line-strong)" stroke-width="1.3"/>
        <rect x="-56" y="-56" width="112" height="112" rx="4" transform="rotate(45)" stroke="var(--gold)" stroke-opacity="0.7" stroke-width="1.3"/>
        <circle r="32" fill="var(--scene-card)" stroke="var(--accent)" stroke-width="1.6"/>
        <text y="8" text-anchor="middle" class="scene-ar" lang="ar">الهدي</text>
      </g>
      <text x="300" y="348" text-anchor="middle" class="scene-mono">${lbl(lang, 'sacrificeSub')}</text>
    </svg>`,

  wada: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <circle cx="300" cy="200" r="128" fill="none" stroke="var(--scene-line)" stroke-width="1.2" stroke-dasharray="4 6"/>
      ${kaabaElevation(300, 268, 108, 96)}
      <path d="M300 288l-96 48M300 288l96 48" stroke="var(--gold)" stroke-opacity="0.6" stroke-width="1.4" stroke-dasharray="3 5" marker-end="url(#arrowGold)"/>
      <text x="300" y="102" text-anchor="middle" class="scene-ar" lang="ar">طواف الوداع</text>
      <text x="300" y="368" text-anchor="middle" class="scene-mono">${lbl(lang, 'wadaSub')}</text>
    </svg>`,

  complete: ({ lang = 'en' } = {}) => `
    <svg viewBox="0 0 600 400" class="scene-svg" aria-hidden="true" focusable="false">
      ${frameBase()}
      <g transform="translate(300 186)" fill="none">
        <circle r="118" stroke="var(--scene-line)" stroke-width="1" stroke-dasharray="3 6"/>
        <rect x="-74" y="-74" width="148" height="148" rx="4" stroke="var(--gold)" stroke-opacity="0.75" stroke-width="1.4"/>
        <rect x="-74" y="-74" width="148" height="148" rx="4" transform="rotate(45)" stroke="var(--accent)" stroke-opacity="0.8" stroke-width="1.4"/>
        <rect x="-24" y="-24" width="48" height="48" rx="2" fill="var(--kaaba-fill)" stroke="var(--gold)" stroke-width="1.6"/>
        <rect x="-24" y="-12" width="48" height="7" fill="url(#hizamBand)"/>
      </g>
      <text x="300" y="338" text-anchor="middle" class="scene-ar" lang="ar">الحمد لله</text>
      <text x="300" y="370" text-anchor="middle" class="scene-mono">${lbl(lang, 'completeSub')}</text>
    </svg>`
};

export function sceneFor(name, options) {
  return (SCENES[name] || SCENES.miqat)(options);
}
