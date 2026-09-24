# Global Mind design system

Global Mind is a bilingual brand — English and Persian, published side by side. Midnight Navy carries it, Ivory is the ground, Antique Gold and Dusty Plum are the accents. The mark is a brain in profile whose hemispheres are filled with a world map, outlined in antique gold.

The brand reads as an editorial publication: a serif display face on a warm off-white page, generous line heights, hairline rules instead of heavy chrome, and colour used sparingly. Persian is a first-class language here, not a translation layer — every type style, component and layout has a Persian counterpart with its own weight and line height.

## Sources

Everything here comes from one upload: `GlobalMind-DesignSystem.zip`, expanded to `uploads/GlobalMind-DesignSystem/` in this project. It contained `README.md` (brand rules), `START-HERE.txt`, `tokens.css` + `tokens.json`, `components/` (a prebuilt React bundle plus per-component READMEs and previews for Button, Input, Card, Tag, and preview-only `Cover` and `TypeSpecimen` cards), `fonts/Vazirmatn.ttf`, and `logos/` (two PNG marks).

No Figma file, repository, product screenshots, slide template or marketing copy was provided. Nothing in this system is inferred from a real Global Mind product because no product surface was supplied.

**Substitutions and gaps, flagged:**
- **Playfair Display** was supplied separately by the user after the zip and now ships at `assets/fonts/PlayfairDisplay.ttf`; both faces are self-hosted, no CDN font.
- **No icon set was supplied.** Lucide is substituted — see Iconography.
- **No product screens.** `ui_kits/site/` composes the supplied parts into one plausible surface and says so in its README; it is not a recreation. The system is being built ahead of the products it will dress.

## Content fundamentals

The voice is that of an editor, not a marketer. Plain declarative sentences, no exclamation, no hype verbs, no second-person selling. The brand writes about the world, then invites the reader in — "Every culture opens a new window on the world; we set those windows side by side to build a fuller picture." Semicolons and commas do real work; sentences are allowed to be long when the thought is.

- **Person:** "we" for the publication, "the reader" or an implied you. Never "you'll love", never imperatives stacked for urgency.
- **Casing:** sentence case for headings and body. The only uppercase is the `label` style (12px, .08em tracking) used for kickers like ABOUT US and THIS MONTH — and never in Persian, which is not letter-spaced, italicised or capitalised.
- **Length:** headings are a phrase, not a sentence — "One world, many minds", "Perspectives that widen the view". Body runs one to three sentences per block.
- **Buttons and labels:** a verb plus its object, in the language of the surrounding page — "Read the report", "Browse essays", "Subscribe"; "خواندن گزارش", "اشتراک". Placeholders are examples ("name@example.com"), never labels.
- **Errors:** carry the word, not only the colour — "Error: This address is not valid", "خطا: این نشانی معتبر نیست". Status tags read "Published", "Retracted", "ثبت شد".
- **Emoji:** none. The system has no emoji anywhere and none should be added.
- **Digits:** Persian digits inside Persian copy, Latin digits inside English copy. In a mixed line, the surrounding language sets direction and the foreign run gets its own `lang` span.
- **Persian is written, not machine-translated.** Pair by size step: `heading-1` beside `fa-heading-1`, `body` beside `fa-body`.

## Visual foundations

**Colour.** Four brand colours and three support tones, no gradients anywhere. Pages sit on `ivory` (#F8F5EF) with `midnight-navy` (#1B263B) text at 13.9:1. Recessed areas use `ivory-sunken`; on navy grounds, panels are `navy-raised` and accents `antique-gold`. `antique-gold` is never text on ivory (2.45:1) — use `gold-deep` for gold-toned text and links. `dusty-plum` is secondary text and control borders on ivory only. `danger` and `success` always arrive with an icon or a word.

**Type.** Playfair Display for English — the brand rules use weight 400 only, so hierarchy is built from size and colour, never faux bold (the supplied binary carries the variable range, but stay at 400). Vazirmatn (variable, 100–900) for Persian, with the weights already baked into the styles: 700 titles, 600 `fa-heading-2`, 500 `fa-label`, 400 body. Persian line heights are deliberately taller (16px body sits on 30px leading against English 17/28); never shrink them to match an English neighbour.

**Space.** A 4px grid, `space-1` (4) to `space-9` (96). Card padding `space-4`, gaps between cards `space-5`, section padding `space-8` on desktop.

**Shape.** `radius-md` (8px) on buttons and inputs, `radius-lg` (16px) on cards, `radius-xl` (24px) on feature panels, `radius-pill` on tags — tags are the only pill in the system.

**Depth.** A hairline beats a shadow: `border` (#1b263b33) for decorative dividers, `border-strong` (dusty plum) for control edges. Shadows are reserved and shallow — `shadow-sm` resting cards, `shadow-md` hover and menus, `shadow-lg` dialogs. No inner shadows, no glows, no protection gradients or scrims; text always sits on a solid ground, never over imagery.

**Cards.** Light cards are ivory with a 1px `border` hairline, 16px radius and `shadow-sm`. Sunken cards drop the border and shadow and use `ivory-sunken`. Navy cards are solid `midnight-navy` with the title in antique gold. No coloured left borders, no tinted headers.

**Backgrounds.** Flat colour fields only. The one decorative device is the cover composition: a tall navy slab with a gold and a plum satellite bleeding off the edge, crossed by three antique-gold hairlines, on an ivory ground (see `guidelines/brand-cover.card.html`). No photography, illustration, pattern, texture or grain is supplied — if imagery is added later it should be warm-toned and quiet to sit with the ivory.

**Transparency and blur.** Only one use in the whole system: `border` is navy at 20% alpha. No frosted panels, no blurred overlays.

**Motion.** 150–250ms, ease-out, on colour, opacity and small movements only. No bounces, no springs, no entrance animation. `prefers-reduced-motion` turns transitions off (handled in `tokens/motion.css`).

**States.** Hover darkens or fills rather than fades: primary buttons go navy → `navy-raised`; secondary and ghost pick up an `ivory-sunken` wash; gold buttons gain `shadow-md`. There is no distinct press state and no scale transform. Focus is a 2px `focus-ring` outline at 2px offset — navy on ivory, antique gold on navy grounds. Disabled is 50% opacity with `not-allowed`.

**Layout.** Left-aligned editorial columns in English, mirrored in Persian. Mirror layouts, reading order and icons that point; never mirror the logo or the world map. Headers may be sticky; nothing else is fixed.

## Iconography

The upload contained **no icons at all** — no icon font, no SVG sprite, no glyph set, and no icon in any supplied component or preview. Rather than draw a mark-by-mark set by hand, the system substitutes an existing open line set.

**Substituted set: Lucide** (ISC licence), loaded per-glyph from `unpkg.com/lucide-static@0.544.0/icons/<name>.svg`. Lucide is drawn on a 24px grid with a 2px stroke and rounded caps — calm, geometric and unfussy, which sits with Playfair's contrast without competing with it. **Flagging this clearly: it is a substitution, not the brand's own set.** If Global Mind adopts a different family, change `ICON_CDN` in `components/icon/Icon.jsx` and nothing else moves.

How icons are used:
- Through the `Icon` component only: `<Icon name="arrow-right" size={20} />`. It renders the SVG as a CSS mask filled with `currentColor`, so a glyph always takes the colour of the text around it and never introduces a new one.
- Sizes: 16 beside `body-sm`, 20 beside body copy and inside buttons (the button's `space-2` gap), 24 standalone.
- Decorative by default (`aria-hidden`); pass `aria-label` when the icon carries the meaning. Status still carries its word — an icon never replaces "Error" or "Published".
- Direction: mirror pointing icons in Persian (`arrow-left` for "next"), never mirror the rest, and never the logo.
- Sparing. A page of ivory and hairlines does not need a glyph on every row; icons appear on actions and navigation, not as decoration.

Other graphic marks in the system: the two logo PNGs in `assets/logos/`, and the flat blocks plus antique-gold hairlines of the cover composition. **Emoji are never used**, and Unicode symbols are not used as icons.

## Index

Root:
- `styles.css` — the single entry point consumers link; `@import` lines only.
- `readme.md` — this file. `SKILL.md` — Agent Skills wrapper. `thumbnail.html` — homepage tile.
- `tokens/` — `fonts.css`, `colors.css`, `spacing.css`, `shape.css`, `typography.css`, `motion.css`, plus `tokens.json` (the original data file, kept for tools).
- `assets/` — `logos/global-mind-on-ivory.png`, `logos/global-mind-on-navy.png`, `fonts/Vazirmatn.ttf` (+ OFL licence), `fonts/PlayfairDisplay.ttf`.
- `guidelines/` — 18 specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — the four primitives and their card. `components/icon/` — the Icon wrapper.
- `ui_kits/site/` — the bilingual site surface.

### Components

All four come from the upload's own inventory; nothing has been added.

- **Button** — `primary`, `secondary`, `ghost`, `gold`; sizes `md`, `sm`.
- **Input** — labelled field with `hint` and `error`.
- **Card** — `light`, `sunken`, `navy` tones with an optional title.
- **Tag** — `neutral`, `gold`, `plum`, `success`, `danger` pills.

Every one takes `lang="en" | "fa"`, which sets language, direction and typeface together. Persian and English versions share size and spacing; only the typeface and line height differ.

Plus one addition:

- **Icon** — wrapper around a Lucide glyph, tinted with `currentColor`.

**Intentional additions:** `Icon` only, because the brand shipped no glyph set and buttons, navigation and empty states need one. No Toast, Avatar, Tabs, Dialog or Select has been authored — the source defines four families and this system ships those four.

### UI kits

- `ui_kits/site/` — one bilingual publication surface composed from the four primitives and the cover composition. Not a recreation of a real product; see its README.
