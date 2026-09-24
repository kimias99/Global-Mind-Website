# Global Mind website — source

The upload-ready site is in `../dist/`. Upload the **contents** of `dist/` to your host's web root.

- Pages: `/fa/`, `/fa/nimnegah/`, `/fa/nimnegah/engineering/`, `/fa/about/` and the same under `/en/`. `/` forwards to `/fa/`.
- Everything is self-hosted (fonts, images, CSS, JS); no external requests except the Telegram/Instagram links themselves.
- All links are relative, so the site also works from a sub-folder, or opened straight from disk (double-click `dist/index.html`).
- `404.html` uses root paths (`/assets/...`), so it only looks right when the site is at the root of a domain.

## Editing
- Page text: `src/pages/*.mjs` (each file has a `fa` and an `en` version).
- Header, footer, the 3-step block, Telegram/Instagram links: `src/layout.mjs`.
- Styles: `src/site.css` (design-system tokens are added automatically from `../project/_ds/`).
- Mobile menu script: `src/site.js`.

Then rebuild (Node 18+, no npm install needed):

    node site/build.mjs

`tools/prepare_assets.py` is the one-off script that resized the images and converted the fonts in `static/assets/`; you only need it if you replace an image.
