# Umrah Journey

A free, interactive, voice-guided Umrah walkthrough for the Ummah. Eight rites, every dua, and a calm step-by-step stage that saves progress on the visitor's device.

**Live site:** <https://umrah-journey.memusharaf777.workers.dev>
**Dashboard:** <https://umrah-journey.memusharaf777.workers.dev/admin>

The public deployment runs on **Cloudflare Workers** with a **D1** database, which is free, always on, and needs no card. The same code also runs locally with zero npm dependencies through a small Node HTTP server and the built-in `node:sqlite` module; the front end is vanilla HTML/CSS/ES modules in both cases.

## What is inside

- **Eight guided steps** — Ihram, Talbiyah, first sight of the Kaaba, Tawaf, two rak'ahs and Zamzam, Sa'i, Halq/Taqsir, completion.
- **Authentic duas** — Arabic, transliteration, English and Urdu meanings, grading, and direct links to the source on sunnah.com.
- **Voice guidance** — browser speech synthesis out of the box, with an optional real-audio manifest for recorded voiceovers.
- **Interactive stage** — animated SVG scenes, a 7-circuit Tawaf counter, a 7-trip Sa'i counter, progress tracking, and auto-advance.
- **English, Arabic and Urdu** — full interface translation with RTL layout and appropriate fonts.
- **Light and dark themes**, reduced-motion support, keyboard-friendly controls.
- **Anonymous visitor insights** — a private dashboard with visits, uniques, countries, devices, referrers, language choice, step completion funnel, and CSV export.
- **Preparation toolkit** — packing checklist, the four pillars, common questions, and a source library.

## Run it locally

Requires **Node.js 22.5 or newer** (uses `node:sqlite`).

```bash
npm start
```

Then open:

- Site: <http://localhost:4173>
- Dashboard: <http://localhost:4173/admin>

There is no build step and nothing to install. For development with automatic restarts:

```bash
npm run dev
```

### Admin token

- **Production:** stored as the Worker secret `ADMIN_TOKEN` and also saved locally in `data/cloudflare-admin-token.txt` (git-ignored). Paste it into the live dashboard gate.
- **Local Node server:** on first start a token is generated and printed in the console, then saved with owner-only permissions in `data/admin-token.txt`.

The token is kept in `sessionStorage` for the current browser tab, never in a cookie or in the page source.

To rotate the production token:

```bash
npx wrangler secret put ADMIN_TOKEN
```

To rotate the local token, delete `data/admin-token.txt` and restart. To pin your own local token:

```bash
ADMIN_TOKEN='a-long-random-secret' npm start
```

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `4173` | HTTP port |
| `HOST` | `0.0.0.0` | Bind address. Use `127.0.0.1` when behind a local reverse proxy. |
| `ADMIN_TOKEN` | generated | Overrides the token file |
| `TRUST_PROXY` | off | Set to `1` to read the visitor IP from `x-forwarded-for` |
| `VISITOR_SALT` | derived from token | Extra secret for daily visitor hashes |

Country detection uses Cloudflare's `request.cf.country` / `cf-ipcountry` in production, and falls back to `x-vercel-ip-country`, `x-country-code`, or `x-geo-country` on other proxies. Without a proxy, countries show as unknown — everything else still works.

## Visitor analytics and privacy

- No cookies, no third-party analytics or tracking scripts. Interface fonts are requested from Google Fonts; self-host them under `public/fonts/` if you need a fully third-party-free deployment.
- A raw IP address is **never stored**. The app derives a salted SHA-256 visitor hash that includes the current day, so hashes cannot be correlated across days.
- Stored visit fields: timestamp, day, path, random session id, daily hash, country code, device, browser, OS, language, referrer host, and screen size.
- Events are limited to a fixed list: step views/completions, journey completion, dua/voice plays, checklist items, language/theme changes, and shares.
- The dashboard and CSV export require the admin token, and `/admin` is served with `noindex`.
- Production data lives in Cloudflare D1, inside the account that owns the Worker. Cloudflare necessarily processes request metadata to serve the site and supplies the country code; the app itself stores only the fields above. The local Node version stores the same data in `data/umrah.db`.
- To start fresh locally, stop the server and delete `data/umrah.db*`. To clear production data, run the `DELETE` command shown under [Deploying](#deploying).

## Optional recorded voiceovers

Browser speech synthesis is used whenever a recording is missing. To add real audio, put MP3/WAV/OGG files in `public/audio/` and describe them in `public/audio/manifest.json`:

```json
{
  "step:ihram:en": "/audio/step-ihram-en.mp3",
  "step:tawaf:ar": "/audio/step-tawaf-ar.mp3",
  "dua:talbiyah:en": "/audio/dua-talbiyah-en.mp3"
}
```

Manifest keys use:

- `step:<step-id>:<lang>` for narration
- `dua:<dua-id>:<lang>` for a dua

Step ids: `ihram`, `talbiyah`, `first-sight`, `tawaf`, `maqam`, `sai`, `halq`, `complete`.
Dua ids match the keys in `public/js/data.js` (`talbiyah`, `travel`, `enter_mosque`, `black_stone`, `between_corners`, `maqam`, `zamzam`, `safa`, `sai_dhikr`, `acceptance`).
Languages: `en`, `ar`, `ur`.

An entry may be a URL string or an object with a `src` field. The app falls back to speech synthesis if the file is missing or fails to play. See the notes already inside `public/audio/manifest.json`.

## Project layout

```
server.js              Local Node server, SQLite analytics API, static files
worker/index.js        Cloudflare Worker: analytics API + static asset routing
wrangler.toml          Workers/D1 configuration
migrations/            D1 schema
public/index.html      Main guide
public/admin.html      Private visitor dashboard
public/css/styles.css  Design system and site layout
public/css/admin.css   Dashboard layout
public/js/data.js      Steps, duas, checklist, FAQ, sources
public/js/i18n.js      Interface strings (EN/AR/UR)
public/js/scenes.js    Animated SVG scene for each step
public/js/app.js       Journey state, rendering, voice, tracking
public/js/admin.js     Dashboard gate, charts, tables, export
public/audio/          Optional recordings + manifest.json
data/                  Local SQLite database and tokens (git-ignored)
```

## Deploying

### Cloudflare Workers (the live deployment)

The production site uses Workers Static Assets for the front end and a Worker plus D1 for analytics. It fits comfortably inside the free plan: static asset requests are free, and the Worker/D1 free allowances cover far more traffic than a personal guide needs. There is no card on file.

```bash
npx wrangler login                 # once per machine
npm run db:migrate                 # apply migrations/0001_init.sql to D1
npx wrangler secret put ADMIN_TOKEN
npx wrangler secret put VISITOR_SALT
npm run deploy
```

`wrangler.toml` already contains the deployed D1 `database_id`. To create a separate database under another account:

```bash
npx wrangler d1 create umrah-journey
# copy the new database_id into wrangler.toml
```

Useful production commands:

```bash
npm run deploy                     # deploy a new version
npx wrangler tail                  # live logs
npx wrangler d1 execute umrah-journey --remote --command "DELETE FROM visits; DELETE FROM events;"
```

The Worker runs at `umrah-journey.<your-subdomain>.workers.dev`. Connect a custom domain in the Cloudflare dashboard if you have one. The repository can also be connected to Cloudflare Workers Builds for automatic deploys on push.

For local parity with the Worker runtime:

```bash
npm run preview
```

### Self-hosting with Node

The Node server is a plain process and is happy behind Nginx, Caddy, or another platform proxy.

1. Run as a non-root user with a persistent `data/` directory.
2. Put HTTPS in front of it and set `HOST=127.0.0.1` if the proxy is local.
3. Set `TRUST_PROXY=1` only when the proxy strips client-supplied forwarding headers.
4. Back up `data/umrah.db` (or the whole `data/` folder) regularly.
5. Keep `data/admin-token.txt` out of version control and out of backups you share.

Minimal systemd unit:

```ini
[Unit]
Description=Umrah Journey
After=network.target

[Service]
WorkingDirectory=/srv/umrah-journey
ExecStart=/usr/bin/node server.js
Environment=PORT=4173
Environment=HOST=127.0.0.1
Environment=NODE_ENV=production
Restart=on-failure
User=www-data

[Install]
WantedBy=multi-user.target
```

## Content and disclaimer

The walkthrough follows the majority understanding of Umrah and is written for learning and preparation. Duas and rulings are referenced to their published sources on [sunnah.com](https://sunnah.com/) and Qur'an verses to [quran.com](https://quran.com/); gradings are shown as published there.

This guide is **educational, not a fatwa**. Specific situations — illness, menstruation, mahram rules, missed rites, or a different madhhab — should be checked with a qualified scholar.

Translations are rendered for clarity; the Arabic is authoritative. If you find an error, correct it from the source and open an issue or send a patch.

Built for the Ummah, with love and humility.
