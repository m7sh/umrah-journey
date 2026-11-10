/* Animated SVG scenes — one per step.
   Decorative only: the parent element carries the accessible description. */

const STARS = `
  <g class="stars" aria-hidden="true">
    <circle cx="62" cy="58" r="2" class="twinkle s1"/>
    <circle cx="140" cy="34" r="1.4" class="twinkle s2"/>
    <circle cx="228" cy="72" r="1.8" class="twinkle s3"/>
    <circle cx="332" cy="40" r="1.3" class="twinkle s1"/>
    <circle cx="430" cy="66" r="2.1" class="twinkle s2"/>
    <circle cx="512" cy="36" r="1.4" class="twinkle s3"/>
    <circle cx="556" cy="104" r="1.8" class="twinkle s1"/>
    <circle cx="500" cy="150" r="1.2" class="twinkle s2"/>
    <circle cx="86" cy="132" r="1.5" class="twinkle s3"/>
    <circle cx="30" cy="220" r="1.2" class="twinkle s2"/>
    <circle cx="572" cy="236" r="1.3" class="twinkle s1"/>
    <circle cx="252" cy="26" r="1.2" class="twinkle s3"/>
  </g>`;

const DEFS = `
  <defs>
    <radialGradient id="sceneGlow" cx="50%" cy="46%" r="52%">
      <stop offset="0%" stop-color="var(--gold)" stop-opacity=".26"/>
      <stop offset="60%" stop-color="var(--gold)" stop-opacity=".07"/>
      <stop offset="100%" stop-color="var(--gold)" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--emerald)" stop-opacity=".18"/>
      <stop offset="100%" stop-color="var(--emerald)" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--gold)" stop-opacity=".35"/>
      <stop offset="50%" stop-color="var(--gold-2)"/>
      <stop offset="100%" stop-color="var(--gold)" stop-opacity=".35"/>
    </linearGradient>
    <pattern id="kiswah" width="16" height="16" patternUnits="userSpaceOnUse">
      <rect width="16" height="16" fill="var(--kaaba)"/>
      <path d="M8 0v16M0 8h16" stroke="var(--gold)" stroke-opacity=".18" stroke-width="1"/>
      <circle cx="8" cy="8" r="2.2" fill="none" stroke="var(--gold)" stroke-opacity=".28"/>
    </pattern>
  </defs>`;

function kaabaTopDown() {
  return `
    <g class="kaaba-top" transform="translate(300 208)">
      <rect x="-58" y="-58" width="116" height="116" rx="4" fill="url(#kiswah)" stroke="var(--gold)" stroke-width="2"/>
      <rect x="-58" y="-58" width="116" height="116" rx="4" fill="none" stroke="var(--gold-2)" stroke-width="1" stroke-opacity=".7"/>
      <rect x="-46" y="-46" width="92" height="92" rx="2" fill="none" stroke="var(--gold)" stroke-opacity=".35" stroke-dasharray="3 6"/>
      <path d="M-34 -58h18v22h-18z" fill="var(--gold)" opacity=".8"/>
      <path d="M-30 58a30 30 0 0 0 60 0" fill="none" stroke="var(--gold)" stroke-width="2" stroke-opacity=".75"/>
    </g>`;
}

function orbits() {
  let out = '';
  for (let i = 1; i <= 7; i += 1) {
    const r = 92 + i * 26;
    out += `<circle cx="300" cy="208" r="${r}" fill="none" stroke="var(--gold)"
      stroke-opacity="${0.2 - i * 0.014}" stroke-width="1"
      stroke-dasharray="${i % 2 ? '2 8' : '10 12'}"/>`;
  }
  return out;
}

export const SCENES = {
  miqat: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="190" r="190" fill="url(#sceneGlow)"/>
      ${STARS}
      <g class="moon">
        <path d="M505 84a44 44 0 1 0 34 66 36 36 0 1 1-34-66z" fill="var(--gold-2)" opacity=".9"/>
      </g>
      <path class="dune dune-back" d="M0 322c90-38 188-40 300-8s210 22 300-8v114H0z" fill="var(--surface-2)" opacity=".75"/>
      <path class="dune dune-front" d="M0 356c104-30 190-24 292 4s224 12 308-18v78H0z" fill="var(--surface)" opacity=".95"/>
      <g class="signpost" transform="translate(388 214)">
        <rect x="-4" y="0" width="8" height="150" rx="3" fill="var(--gold)" opacity=".55"/>
        <g class="sign-board sb1">
          <path d="M-40 18h68l14 12-14 12h-68z" fill="var(--surface-2)" stroke="var(--gold)" stroke-opacity=".55"/>
          <path d="M-26 30h36" stroke="var(--gold)" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"/>
        </g>
        <g class="sign-board sb2">
          <path d="M-52 58h68l14 12-14 12h-68z" fill="var(--surface-2)" stroke="var(--gold)" stroke-opacity=".4"/>
          <path d="M-38 70h36" stroke="var(--gold)" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>
        </g>
      </g>
      <g transform="translate(232 292)">
        <g class="pilgrim">
          <circle cx="0" cy="-46" r="15" fill="var(--ink)" opacity=".92"/>
          <path d="M-19 -28q19 -10 38 0l9 66h-56z" fill="var(--ink)" opacity=".88"/>
          <path d="M-19 -6q17 9 34 0" fill="none" stroke="var(--surface)" stroke-opacity=".7" stroke-width="2"/>
          <path d="M-24 -18h-12v34h12" fill="none" stroke="var(--gold)" stroke-opacity=".5" stroke-width="3"/>
          <circle cx="-30" cy="24" r="9" fill="var(--gold)" opacity=".35"/>
          <path d="M-6 38v28M8 38v28" stroke="var(--ink)" stroke-opacity=".85" stroke-width="6" stroke-linecap="round"/>
        </g>
      </g>
      <path class="path-dash" d="M40 400c80-24 118-66 172-78" fill="none" stroke="var(--gold)" stroke-opacity=".25" stroke-width="2" stroke-dasharray="2 10"/>
    </svg>`,

  talbiyah: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="330" cy="180" r="180" fill="url(#sceneGlow)"/>
      ${STARS}
      <defs>
        <path id="talbiyahPath" d="M46 382C150 352 126 268 236 252S404 226 486 128"/>
      </defs>
      <path d="M46 382C150 352 126 268 236 252S404 226 486 128" fill="none"
        stroke="var(--gold)" stroke-opacity=".3" stroke-width="2.5" stroke-dasharray="3 12" stroke-linecap="round"/>
      <path class="land" d="M0 330c110-26 196-8 300 8s204 10 300-14v96H0z" fill="var(--surface-2)" opacity=".8"/>
      <g class="city" transform="translate(470 120)">
        <rect x="-58" y="30" width="20" height="34" fill="var(--surface)" opacity=".9"/>
        <rect x="-30" y="14" width="26" height="50" rx="2" fill="var(--surface)" opacity=".9"/>
        <rect x="4" y="24" width="34" height="40" rx="2" fill="var(--surface)" opacity=".9"/>
        <path d="M-30 14a13 13 0 0 1 26 0" fill="var(--gold)" opacity=".35"/>
        <rect x="-10" y="34" width="12" height="12" fill="var(--gold)" opacity=".8"/>
        <path d="M-24 68h74" stroke="var(--gold)" stroke-opacity=".3"/>
      </g>
      <g class="caravan">
        <circle r="8" fill="var(--gold-2)">
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#talbiyahPath"/>
          </animateMotion>
        </circle>
        <circle r="4" fill="var(--gold)" opacity=".6">
          <animateMotion dur="9s" begin="-2.2s" repeatCount="indefinite" rotate="auto">
            <mpath href="#talbiyahPath"/>
          </animateMotion>
        </circle>
        <circle r="3" fill="var(--gold)" opacity=".4">
          <animateMotion dur="9s" begin="-4.4s" repeatCount="indefinite" rotate="auto">
            <mpath href="#talbiyahPath"/>
          </animateMotion>
        </circle>
      </g>
      <g class="sound" transform="translate(228 328)">
        <path d="M-14 -6a18 18 0 0 1 0 12M-24 -12a30 30 0 0 1 0 24M-34 -18a42 42 0 0 1 0 36"
          fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" opacity=".55"/>
      </g>
    </svg>`,

  sight: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="230" r="210" fill="url(#sceneGlow)"/>
      ${STARS}
      <g class="beams" transform="translate(300 150)">
        <path d="M-16 0L-150 250h52L-4 0z" fill="var(--gold)" opacity=".07"/>
        <path d="M16 0L150 250h-52L4 0z" fill="var(--gold)" opacity=".07"/>
        <path d="M-8 0L-44 250h24L4 0z" fill="var(--gold)" opacity=".05"/>
        <path d="M8 0L44 250h-24L-4 0z" fill="var(--gold)" opacity=".05"/>
      </g>
      <g class="kaaba-front" transform="translate(300 300)">
        <rect x="-96" y="-150" width="192" height="150" fill="url(#kiswah)" stroke="var(--gold)" stroke-width="2.5"/>
        <rect x="-96" y="-124" width="192" height="24" fill="url(#goldBar)" opacity=".95"/>
        <path d="M-96 -124h192" stroke="var(--gold-2)" stroke-opacity=".6"/>
        <path d="M-96 -100h192" stroke="var(--gold-2)" stroke-opacity=".35"/>
        <rect x="44" y="-56" width="34" height="56" fill="var(--gold)" opacity=".85"/>
        <path d="M44 -56h34" stroke="var(--gold-2)"/>
        <rect x="-96" y="-2" width="192" height="8" fill="var(--gold)" opacity=".35"/>
        <path d="M-116 6h232" stroke="var(--gold)" stroke-opacity=".3" stroke-width="2"/>
      </g>
      <g class="crowd">
        ${Array.from({ length: 22 }, (_, i) => {
          const x = 96 + i * 19;
          const y = 350 + (i % 3) * 4;
          return `<circle cx="${x}" cy="${y}" r="${4 + (i % 3)}" fill="var(--ink)" opacity="${0.25 + (i % 4) * 0.12}" style="--d:${(i * 0.23).toFixed(2)}s"/>`;
        }).join('')}
      </g>
      <path class="glow-line" d="M300 120v-54" stroke="var(--gold)" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/>
      <circle cx="300" cy="58" r="5" fill="var(--gold-2)" opacity=".8"/>
    </svg>`,

  tawaf: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="208" r="210" fill="url(#sceneGlow)"/>
      <g class="tawaf-field">
        ${orbits()}
        <g class="orbit-dot">
          <circle cx="300" cy="30" r="6.5" fill="var(--gold-2)"/>
          <circle cx="300" cy="30" r="13" fill="var(--gold)" opacity=".18"/>
        </g>
      </g>
      ${kaabaTopDown()}
      <g class="start-mark" transform="translate(404 208)">
        <circle r="5" fill="var(--gold-2)"/>
        <path d="M10 0h18M22 -6l7 6-7 6" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="direction-hint">
        <path d="M300 386a64 64 0 0 1-46-18" fill="none" stroke="var(--gold)" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/>
        <path d="M258 360l-6 12 13 1" fill="none" stroke="var(--gold)" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>`,

  maqam: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="210" r="200" fill="url(#sceneGlow)"/>
      ${STARS}
      <g class="arches" transform="translate(300 214)">
        <path d="M-170 176V-30a58 58 0 0 1 116 0v206" fill="none" stroke="var(--gold)" stroke-opacity=".35" stroke-width="2"/>
        <path d="M54 176V-46a64 64 0 0 1 128 0v222" fill="none" stroke="var(--gold)" stroke-opacity=".28" stroke-width="2"/>
        <path d="M-196 178h392" stroke="var(--gold)" stroke-opacity=".3" stroke-width="2"/>
        <g class="lamp">
          <path d="M-112 -70v40" stroke="var(--gold)" stroke-opacity=".4"/>
          <path d="M-128 22l16 -32 16 32z" fill="var(--gold)" opacity=".3"/>
          <circle cx="-112" cy="24" r="20" fill="var(--gold)" opacity=".1"/>
          <circle cx="-112" cy="24" r="4" fill="var(--gold-2)"/>
        </g>
      </g>
      <g class="rug" transform="translate(300 330)">
        <rect x="-118" y="-34" width="236" height="78" rx="6" fill="var(--surface-2)" stroke="var(--gold)" stroke-opacity=".4"/>
        <path d="M-84 34v-46a22 22 0 0 1 44 0v46" fill="none" stroke="var(--gold)" stroke-opacity=".35"/>
        <path d="M-30 34v-46a22 22 0 0 1 44 0v46" fill="none" stroke="var(--gold)" stroke-opacity=".25"/>
        <path d="M-118 -8h236" stroke="var(--gold)" stroke-opacity=".15" stroke-dasharray="4 8"/>
      </g>
      <g class="zamzam" transform="translate(470 286)">
        <path d="M-16 -8h32l-4 46h-24z" fill="var(--surface-2)" stroke="var(--gold)" stroke-opacity=".5"/>
        <path d="M-8 -8v-10a8 8 0 0 1 16 0v10" fill="none" stroke="var(--gold)" stroke-opacity=".4"/>
        <circle class="drop d1" cx="0" cy="50" r="3" fill="var(--gold-2)"/>
        <circle class="drop d2" cx="-6" cy="50" r="2.2" fill="var(--gold)"/>
        <circle class="drop d3" cx="7" cy="50" r="1.8" fill="var(--gold)"/>
      </g>
    </svg>`,

  sai: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <defs>
        <path id="saiPath" d="M96 330C190 300 250 322 300 322s110 22 204-8"/>
      </defs>
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="200" r="190" fill="url(#sceneGlow)"/>
      ${STARS}
      <path d="M0 336h600v84H0z" fill="var(--surface-2)" opacity=".6"/>
      <g class="hills">
        <path d="M-20 336c30-92 118-120 186-56 20 18 28 38 34 56z" fill="var(--surface)" stroke="var(--gold)" stroke-opacity=".2"/>
        <path d="M620 336c-30-92-118-120-186-56-20 18-28 38-34 56z" fill="var(--surface)" stroke="var(--gold)" stroke-opacity=".2"/>
        <text x="98" y="292" class="scene-name" text-anchor="middle">الصفا</text>
        <text x="502" y="292" class="scene-name" text-anchor="middle">المروة</text>
      </g>
      <path class="sai-path" d="M96 330C190 300 250 322 300 322s110 22 204-8" fill="none"
        stroke="var(--gold)" stroke-opacity=".35" stroke-width="2" stroke-dasharray="3 10"/>
      <g class="markers" stroke="var(--gold-2)" stroke-width="2" stroke-linecap="round" opacity=".7">
        <path d="M236 300v22M364 300v22"/>
      </g>
      <g class="walker">
        <circle cx="0" cy="0" r="7" fill="var(--gold-2)"/>
        <circle cx="0" cy="0" r="15" fill="var(--gold)" opacity=".15"/>
        <circle cx="0" cy="-16" r="4.5" fill="var(--ink)" opacity=".9"/>
        <path d="M-5 -10h10l2 14h-14z" fill="var(--ink)" opacity=".85"/>
        <animateMotion dur="7s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="spline"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1">
          <mpath href="#saiPath"/>
        </animateMotion>
      </g>
    </svg>`,

  halq: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="200" r="185" fill="url(#sceneGlow)"/>
      ${STARS}
      <g class="head" transform="translate(280 190)">
        <path d="M-64 40a64 64 0 0 1 128 0v86h-128z" fill="var(--ink)" opacity=".18"/>
        <circle cx="0" cy="0" r="60" fill="var(--ink)" opacity=".82"/>
        <path d="M-60 -6a60 60 0 0 1 120 0v-6a60 60 0 0 0-120 0z" fill="var(--surface-2)" opacity=".5"/>
        <path d="M-30 -12q8-8 16 0M14 -12q8-8 16 0" stroke="var(--surface)" stroke-opacity=".5" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M-14 22q14 8 28 0" stroke="var(--surface)" stroke-opacity=".4" stroke-width="3" fill="none" stroke-linecap="round"/>
      </g>
      <g class="strands">
        ${Array.from({ length: 7 }, (_, i) => {
          const x = 340 + i * 9;
          return `<path class="strand st${i + 1}" d="M${x} 150q${i % 2 ? 10 : -10} 30 0 62" stroke="var(--gold)" stroke-opacity=".55" stroke-width="2" fill="none" stroke-linecap="round" style="--d:${i * 0.32}s"/>`;
        }).join('')}
      </g>
      <g class="scissors" transform="translate(404 262) rotate(-18)">
        <circle cx="-16" cy="16" r="9" fill="none" stroke="var(--gold-2)" stroke-width="2.5"/>
        <circle cx="16" cy="16" r="9" fill="none" stroke="var(--gold-2)" stroke-width="2.5"/>
        <path d="M-9 10L18 -34M9 10L-18 -34" stroke="var(--gold-2)" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="0" cy="-8" r="2.5" fill="var(--gold-2)"/>
      </g>
      <g class="sparkles" fill="var(--gold-2)">
        <circle cx="452" cy="150" r="2.5" class="twinkle s2"/>
        <circle cx="486" cy="196" r="1.8" class="twinkle s1"/>
        <circle cx="456" cy="222" r="1.4" class="twinkle s3"/>
      </g>
    </svg>`,

  mina: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="196" r="200" fill="url(#sceneGlow)"/>
      ${STARS}
      <g class="moon">
        <path d="M498 78a42 42 0 1 0 32 64 34 34 0 1 1-32-64z" fill="var(--gold-2)" opacity=".85"/>
      </g>
      <path d="M0 250l88-74 70 52 62-44 94 70 84-58 92 62 110-70v232H0z" fill="var(--surface-2)" opacity=".5"/>
      <path class="dune dune-front" d="M0 356c104-26 196-20 300 6s204 10 300-16v74H0z" fill="var(--surface)" opacity=".95"/>
      <g class="mina-tents" stroke="var(--gold)" stroke-opacity=".5" fill="var(--surface-2)">
        <path d="M70 330l38-44 38 44z" fill-opacity=".55"/>
        <path d="M130 336l42-50 42 50z" fill-opacity=".7"/>
        <path d="M196 330l38-44 38 44z" fill-opacity=".55"/>
        <path d="M258 338l46-54 46 54z" fill-opacity=".75"/>
        <path d="M330 330l40-46 40 46z" fill-opacity=".6"/>
        <path d="M398 336l42-50 42 50z" fill-opacity=".72"/>
        <path d="M462 330l38-44 38 44z" fill-opacity=".55"/>
        <path d="M520 336l34-40 34 40z" fill-opacity=".65"/>
      </g>
      <g stroke="var(--gold-2)" stroke-width="1" stroke-opacity=".45">
        <path d="M70 286c120 26 240 26 360 0s120-8 170 0" fill="none" stroke-dasharray="2 7"/>
      </g>
      <g class="particles">
        ${Array.from({ length: 10 }, (_, i) => {
          const x = 90 + ((i * 149) % 420);
          const delay = (i * 0.6).toFixed(2);
          return `<circle cx="${x}" cy="356" r="${1.4 + (i % 3)}" fill="var(--gold-2)" opacity=".45" style="--d:${delay}s"/>`;
        }).join('')}
      </g>
      <text x="300" y="128" text-anchor="middle" class="scene-calligraphy" opacity=".55">منى</text>
    </svg>`,

  arafah: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="170" r="196" fill="url(#sceneGlow)"/>
      <circle cx="452" cy="106" r="46" fill="var(--gold-2)" opacity=".16"/>
      <circle cx="452" cy="106" r="26" fill="var(--gold-2)" opacity=".32"/>
      <path d="M0 300c96-58 200-96 300-96s204 38 300 96v120H0z" fill="var(--surface-2)" opacity=".62"/>
      <path d="M0 340c108-40 206-58 300-58s192 18 300 58v80H0z" fill="var(--surface)" opacity=".96"/>
      <path class="arafah-hill" d="M214 322c18-46 42-70 86-70s68 24 86 70z" fill="var(--surface-2)" stroke="var(--gold)" stroke-opacity=".38"/>
      <g class="pilgrims" stroke="var(--gold)" stroke-opacity=".55" stroke-width="1.6" fill="none">
        <circle cx="196" cy="316" r="5"/><path d="M196 321v18"/>
        <circle cx="238" cy="322" r="5"/><path d="M238 327v16"/>
        <circle cx="286" cy="300" r="5"/><path d="M286 305v18"/>
        <circle cx="330" cy="306" r="5"/><path d="M330 311v16"/>
        <circle cx="374" cy="320" r="5"/><path d="M374 325v15"/>
        <circle cx="414" cy="316" r="5"/><path d="M414 321v17"/>
      </g>
      <g stroke="var(--gold-2)" stroke-width="1" stroke-opacity=".35" stroke-dasharray="3 8">
        <path d="M96 352h408"/>
      </g>
      <text x="300" y="132" text-anchor="middle" class="scene-calligraphy" opacity=".6">عرفة</text>
    </svg>`,

  muzdalifah: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="180" r="210" fill="url(#sceneGlow)"/>
      ${STARS}
      <g class="moon">
        <path d="M470 70a38 38 0 1 0 28 58 30 30 0 1 1-28-58z" fill="var(--gold-2)" opacity=".85"/>
      </g>
      <path d="M0 286c92-30 198-34 300-10s208 14 300-10v154H0z" fill="var(--surface-2)" opacity=".55"/>
      <path d="M0 348c116-22 206-16 300 6s196 8 300-14v80H0z" fill="var(--surface)" opacity=".96"/>
      <g stroke="var(--gold)" stroke-opacity=".45" fill="var(--surface-2)" stroke-width="1.2">
        <rect x="120" y="330" width="84" height="16" rx="8" fill-opacity=".55"/>
        <rect x="258" y="340" width="84" height="16" rx="8" fill-opacity=".55"/>
        <rect x="396" y="330" width="84" height="16" rx="8" fill-opacity=".55"/>
      </g>
      <g fill="var(--gold-2)" opacity=".6">
        ${Array.from({ length: 16 }, (_, i) => {
          const x = 150 + ((i * 73) % 320);
          const y = 356 + ((i * 37) % 26);
          return `<circle cx="${x}" cy="${y}" r="${1.2 + (i % 2) * 0.8}"/>`;
        }).join('')}
      </g>
      <text x="300" y="126" text-anchor="middle" class="scene-calligraphy" opacity=".55">المزدلفة</text>
    </svg>`,

  jamarat: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="210" r="196" fill="url(#sceneGlow)"/>
      <path d="M0 330c104-24 196-18 300 6s204 8 300-14v98H0z" fill="var(--surface)" opacity=".95"/>
      <g stroke="var(--gold)" stroke-width="2">
        <rect x="150" y="216" width="34" height="116" rx="10" fill="var(--surface-2)" fill-opacity=".8" stroke-opacity=".45"/>
        <rect x="283" y="196" width="34" height="136" rx="10" fill="var(--surface-2)" fill-opacity=".85" stroke-opacity=".55"/>
        <rect x="416" y="176" width="34" height="156" rx="10" fill="var(--surface-2)" fill-opacity=".9" stroke-opacity=".7"/>
      </g>
      <g stroke="var(--gold-2)" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7">
        <path class="pebble-arc pa1" d="M70 300c34-52 74-62 92-30"/>
        <path class="pebble-arc pa2" d="M206 282c34-50 74-58 90-26"/>
        <path class="pebble-arc pa3" d="M340 264c32-48 70-56 86-24"/>
      </g>
      <g fill="var(--gold-2)" opacity=".75">
        <circle cx="94" cy="286" r="4"/><circle cx="122" cy="262" r="3.4"/><circle cx="150" cy="256" r="3"/>
        <circle cx="228" cy="270" r="4"/><circle cx="256" cy="248" r="3.4"/><circle cx="284" cy="244" r="3"/>
        <circle cx="362" cy="252" r="4"/><circle cx="390" cy="230" r="3.4"/><circle cx="418" cy="226" r="3"/>
      </g>
      <text x="300" y="120" text-anchor="middle" class="scene-calligraphy" opacity=".55">الجمرات</text>
    </svg>`,

  sacrifice: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="200" r="190" fill="url(#sceneGlow)"/>
      ${STARS}
      <path d="M0 330c110-30 204-22 300 4s198 8 300-16v102H0z" fill="var(--surface)" opacity=".96"/>
      <g class="ram" transform="translate(300 262)" stroke="var(--gold)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M-46 12c-10-30 10-58 40-58 22 0 38 14 52 26 10 8 20 10 30 8" />
        <path d="M-52 4c-16-8-22-30-12-44 8-12 24-14 34-4 8 8 8 20 0 28"/>
        <path d="M-52 4c-6 6-8 16-4 24"/>
        <path d="M34 20c14 2 26 12 30 24"/>
        <path d="M58 44l6 18M38 44l-2 18"/>
        <circle cx="66" cy="-14" r="2.4" fill="var(--gold)" stroke="none"/>
        <path d="M70 -12c8 6 12 14 10 22" stroke-opacity=".55"/>
      </g>
      <g class="sacred-glow" fill="none" stroke="var(--gold-2)" stroke-opacity=".3">
        <circle cx="300" cy="236" r="112" stroke-dasharray="2 10"/>
        <circle cx="300" cy="236" r="88" stroke-dasharray="8 12"/>
      </g>
      <text x="300" y="128" text-anchor="middle" class="scene-calligraphy" opacity=".55">الهدي</text>
    </svg>`,

  wada: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="196" r="196" fill="url(#sceneGlow)"/>
      <circle cx="300" cy="286" r="72" fill="var(--gold-2)" opacity=".1"/>
      <path d="M0 334c118-26 208-18 300 4s184 8 300-18v100H0z" fill="var(--surface)" opacity=".96"/>
      <g class="kaaba-small" transform="translate(300 300)">
        <rect x="-58" y="-90" width="116" height="90" fill="url(#kiswah)" stroke="var(--gold)" stroke-width="2"/>
        <rect x="-58" y="-72" width="116" height="15" fill="url(#goldBar)" opacity=".9"/>
        <rect x="26" y="-36" width="20" height="36" fill="var(--gold)" opacity=".8"/>
        <path d="M-76 2h152" stroke="var(--gold)" stroke-opacity=".35" stroke-width="2"/>
      </g>
      <g stroke="var(--gold-2)" stroke-width="1.4" stroke-dasharray="3 10" fill="none" opacity=".55">
        <path d="M300 360c-80 30-126 42-214 48"/>
        <path d="M300 360c80 30 126 42 214 48"/>
      </g>
      <g stroke="var(--gold)" stroke-width="1.4" fill="none" opacity=".6" stroke-linecap="round">
        <path d="M96 118l6 14 14 6-14 6-6 14-6-14-14-6 14-6z"/>
        <path d="M498 150l5 11 11 5-11 5-5 11-5-11-11-5 11-5z"/>
      </g>
      <text x="300" y="126" text-anchor="middle" class="scene-calligraphy" opacity=".55">الوداع</text>
    </svg>`,

  complete: () => `
    <svg viewBox="0 0 600 420" class="scene-svg" aria-hidden="true" focusable="false">
      ${DEFS}
      <rect width="600" height="420" fill="url(#skyFade)"/>
      <circle cx="300" cy="230" r="230" fill="url(#sceneGlow)"/>
      <g class="rays" transform="translate(300 230)">
        ${Array.from({ length: 18 }, (_, i) => {
          const angle = (i * 360) / 18;
          return `<path d="M0 -100V-186" stroke="var(--gold)" stroke-opacity=".18" stroke-width="1.5" transform="rotate(${angle})"/>`;
        }).join('')}
      </g>
      ${STARS}
      <g class="kaaba-small" transform="translate(300 302)">
        <rect x="-54" y="-86" width="108" height="86" fill="url(#kiswah)" stroke="var(--gold)" stroke-width="2"/>
        <rect x="-54" y="-68" width="108" height="14" fill="url(#goldBar)" opacity=".9"/>
        <rect x="24" y="-34" width="20" height="34" fill="var(--gold)" opacity=".8"/>
        <path d="M-70 2h140" stroke="var(--gold)" stroke-opacity=".35" stroke-width="2"/>
      </g>
      <text x="300" y="118" text-anchor="middle" class="scene-calligraphy">الحمد لله</text>
      <g class="particles">
        ${Array.from({ length: 14 }, (_, i) => {
          const x = 120 + ((i * 137) % 360);
          const delay = (i * 0.55).toFixed(2);
          const r = 1.5 + (i % 3);
          return `<circle cx="${x}" cy="370" r="${r}" fill="var(--gold-2)" opacity=".55" style="--d:${delay}s"/>`;
        }).join('')}
      </g>
      <g class="moon small">
        <path d="M492 92a34 34 0 1 0 26 50 28 28 0 1 1-26-50z" fill="var(--gold-2)" opacity=".8"/>
      </g>
    </svg>`
};

export function sceneFor(name) {
  return (SCENES[name] || SCENES.miqat)();
}
