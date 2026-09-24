# Global Mind website

Static bilingual site (Persian primary, English secondary) for Global Mind and its first product, Nim Negah. The owner is not a developer and usually writes in Persian: reply in plain Persian, avoid jargon, and explain what changed in terms of what visitors will see.

## How it is built
- `dist/` is the finished site that gets uploaded to the host. **Never edit `dist/` by hand**; it is regenerated from `site/`.
- Rebuild after every change: `node site/build.mjs` (Node 18+, no npm install).
- Commit both `site/` and the rebuilt `dist/`, then push to `main` (the default branch).

## Where things live
- Page text: `site/src/pages/home.mjs`, `nimnegah.mjs`, `engineering.mjs`, `about.mjs`. Each exports a `fa` and an `en` version; keep both languages in step when content changes.
- Header, footer, "How to get it" steps, sticky order bar, Telegram/Instagram links (`LINKS`), page URLs (`PATHS`): `site/src/layout.mjs`.
- Styles: `site/src/site.css`. `fl(a, b)` is expanded by the build into a fluid size (a px at 390px wide, b px at 1280px). Layout switches to desktop at 960px. Design-system tokens are prepended from `project/_ds/…`.
- Mobile menu + offline link fix: `site/src/site.js`.
- Images and fonts: `site/static/assets/`. New images should be resized/compressed first; `site/tools/prepare_assets.py` shows how (Pillow).
- A new page needs an entry in `PATHS`, a page module, and a line in the `pages` map in `site/build.mjs`.
- `project/` and `chats/` hold the original Claude Design files and conversation; they are the reference for the design intent.

## Content and brand rules (from the owner's brief)
- Honesty: Global Mind is in its building phase. Never invent events, speakers, partners, testimonials, reviews, statistics, awards or prices. International events are a future vision, not an offer.
- No prices on the site; ordering is only via Telegram @NNAdminGM (https://t.me/NNAdminGM), free samples on https://t.me/NimNegahGM. No cart, payment gateway or card numbers.
- Persian text uses Playpen Sans Arabic, never Playfair Display, and never letter-spacing/uppercase tricks. English uses Playfair Display at weight 400.
- Persian pages are RTL: mirror layouts and arrows; wrap Latin runs in `<span lang="en" dir="ltr">`.
- Global Mind chrome stays navy / antique gold / ivory. Only Nim Negah lines get their own palettes (Master's: navy/gold/ivory; Engineering: charcoal green #2E3532, copper #B5723A, sage #5C6B5D).
- KimiaInterprets (@kimiainterprets) appears only in the small block on the About page, never in header, nav or footer.
- Everything self-hosted: no Google Fonts, CDNs or external scripts.

## Before pushing
Serve `dist/` (e.g. `python3 -m http.server` in `dist/`) and check the changed pages at 390px and 1280px wide in both languages with Playwright (Chromium is preinstalled at `/opt/pw-browsers/chromium`). Confirm no horizontal scroll, no external requests, and that the mobile menu still opens and closes. Send the owner screenshots of what changed.
