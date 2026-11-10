# Social posters

Ready-to-post artwork for **Umrah & Hajj Journey** — https://umrah-journey.umrahguide.workers.dev

The current artwork is built around the Umrah guide; the captions below also introduce the Hajj guide that now lives on the same site.

| File | Size | Use |
| --- | --- | --- |
| `umrah-poster-square.png` | 1080 × 1080 | Instagram / Facebook feed, LinkedIn, X |
| `umrah-poster-story.png` | 1080 × 1920 | Instagram / Facebook Stories, WhatsApp status |
| `umrah-poster-square-2x.png` | 2160 × 2160 | High-resolution master |
| `umrah-poster-story-2x.png` | 2160 × 3840 | High-resolution master |

The QR code in every poster points to the live site. Both final PNGs were decoded with `zbarimg` to confirm they scan correctly.

## Editable source

- `poster-square.html` — square layout
- `poster-story.html` — story layout
- `poster.css` — shared styles, colours, type and positions
- `arch.svg` — mihrab + Kaaba line illustration
- `qr.svg` — generated QR code
- `render.mjs` — headless Chromium renderer

## Re-render

Requires Chromium at `/usr/bin/chromium` and network access for Google Fonts.

```bash
cd marketing
node render.mjs "$PWD/poster-square.html" 1080 1080 "$PWD/umrah-poster-square.png" 1
node render.mjs "$PWD/poster-story.html" 1080 1920 "$PWD/umrah-poster-story.png" 1
```

Use `2` as the last argument for a 2× master.

If the site URL changes, regenerate the QR code first:

```bash
npx --yes qrcode -t svg -e H -q 1 -l "#f6f1e3" -d "#0a1a14" \
  -o qr.svg "https://your-new-url"
```

## Suggested captions

### English

> Umrah, step by step — free, and in your language. 🕋
>
> From the first intention at the miqat to the final haircut: 8 guided rites, 10 authentic duas with references, and word-by-word Qur’anic recitation.
>
> The same guide now walks you through **Hajj** too — all 11 rites across the five days, with Tamattu‘, Ifrad and Qiran side by side.
>
> English · العربية · اردو
> No sign-up. Your progress stays on your device.
>
> Scan the code or visit: umrah-journey.umrahguide.workers.dev

### العربية

> العمرة خطوة بخطوة — مجانًا وبلغتك. 🕋
>
> من أول نية عند الميقات إلى الحلق: ٨ مناسك، و١٠ أدعية موثقة، وتلاوة قرآنية كلمة بكلمة.
>
> والدليل نفسه يمشي بك في **الحج** أيضاً — أحد عشر منسكاً في خمسة أيام، مع التمتع والإفراد والقران جنباً إلى جنب.
>
> الإنجليزية · العربية · اردو
> بدون تسجيل، ويُحفظ تقدمك على جهازك.
>
> امسح الرمز أو زر: umrah-journey.umrahguide.workers.dev

### اردو

> عمرہ قدم بہ قدم — مفت اور آپ کی زبان میں۔ 🕋
>
> میقات پر پہلی نیت سے لے کر حلق تک: ۸ مناسک، ۱۰ مستند دعائیں، اور قرآن کی لفظ بلفظ تلاوت۔
>
> یہی گائیڈ اب **حج** میں بھی رہنمائی کرتی ہے — پانچ دن کے گیارہ اعمال، تمتع، افراد اور قران کے ساتھ۔
>
> English · العربية · اردو
> کوئی سائن اپ نہیں، پیش رفت آپ کے ڈیوائس پر محفوظ۔
>
> کوڈ اسکین کریں یا یہاں جائیں: umrah-journey.umrahguide.workers.dev

### Hashtags

`#Umrah #Hajj #UmrahGuide #HajjGuide #Makkah #MasjidAlHaram #Mina #Arafah #Islam #Muslim #Dua #Quran #Sunnah #Ummah`

## Posting notes

- Use the **square** for feed posts and the **story** for Stories or status.
- Keep the QR code uncovered — do not place stickers, captions or the platform's link bar over it.
- Instagram and Facebook compress uploads; use the 1080 px files rather than the 2× masters.
- Captions cannot make a URL clickable. The QR plus the printed address cover this; also put the link in your bio.
- The line **“Works on any phone · Progress saved on your device”** is accurate: the site is responsive and stores progress in `localStorage`.
