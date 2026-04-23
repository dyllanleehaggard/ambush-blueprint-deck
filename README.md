# Elevating the St. Louis Ambush — Strategic Blueprint

A cinematic HTML presentation deck. 98 slides. Single-click deploy.

## What's inside

- `index.html` — the shell (styles, navigation engine, nav UI, script)
- `slides.js` — all 98 slides as data

No frameworks. No build step. Single folder. Works on GitHub Pages, Vercel, Netlify, or just double-click the HTML file locally.

## How to present

| Key | Action |
|---|---|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `Esc` | Overview grid (click any tile to jump) |
| `F` | Fullscreen |

Touch/swipe works on mobile and tablet. Deck remembers position via URL hash (`#14` jumps to slide 14).

## Deploying to GitHub Pages

Two options.

### Option A: Standalone repo

```bash
# From this folder
git init
git add .
git commit -m "Initial deck"
git branch -M main
git remote add origin https://github.com/dyllanleehaggard/ambush-blueprint-deck.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `root`.**

Live at `https://dyllanleehaggard.github.io/ambush-blueprint-deck/` within 1-2 minutes.

### Option B: Subfolder of existing site

Drop `index.html` and `slides.js` into any subfolder of an existing GitHub Pages repo (e.g. `/blueprint-deck/`). Done.

## Editing content

Every slide lives in `slides.js` as an object with `{ cls, title, render }`:

```js
SLIDES.push({
  title: 'My New Slide',
  render: (n, total) => `
    ${chrome(n, total, 'PART I · OVERVIEW')}
    ${watermark(n)}
    <div class="slide-inner">
      <div class="kicker"><span class="dot"></span>KICKER</div>
      <h2>The headline.</h2>
      <p class="subtitle">The subhead.</p>
      <ul class="bullets pink">
        <li>Point one</li>
        <li>Point two</li>
      </ul>
    </div>
  `
});
```

Reorder by moving the `SLIDES.push(...)` blocks. Delete slides by deleting their block. Duplicate slides by copying a block.

### Available slide classes (`cls`)
- default (no class) — standard slide chrome
- `slide-cover` — hero/cover layout (used for slide 1 and closing)
- `slide-divider` — part dividers (II, III, IV, etc.)

### Available helper classes inside slides
- `.kicker`, `.kicker.pink`, `.kicker.amber`, `.kicker.mute`
- `.card`, `.card.pink`, `.card.amber` (with `.accent-bar`)
- `.stat`, `.stat.pink`
- `.bullets`, `.bullets.pink`, `.bullets.amber`
- `.todo` — amber badge for unresolved items
- `.img-placeholder` — dashed box for image slots
- `.table`
- `.two-col`, `.two-col-head`, `.two-col-head.pink`
- `.pullquote`, `.pullquote.pink`, `.pullquote.teal`
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4`, `.grid-5`
- `.reveal reveal-1` through `.reveal reveal-8` for staggered entrance animations

## Known trade-offs

- **Fonts** load from Google Fonts. First-time viewers see a brief flash before Bebas Neue kicks in.
- **Chart.js** is loaded from a CDN. If you're presenting offline, download it locally.
- **Film grain overlay** uses an inline SVG — no external request.
- The deck is **~200KB gzipped** total. Loads instantly on any connection.

## Design system

- **Typography:** Bebas Neue (display), DM Sans (body), JetBrains Mono (data)
- **Palette:** Deep charcoal `#0A0E12` base, warm off-white `#F5F0E6` ink, teal `#00B4A6` for CURRENT, pink `#F4587C` for FUTURE, amber `#F2A93B` for callouts, red `#E11D2C` for Ambush brand
- **Aesthetic:** Editorial-brutalist × sports broadcast. Bloomberg Terminal meets matchday graphics.

---

Built for the Ambush ownership meeting. Prepared by Dyllan Haggard.
