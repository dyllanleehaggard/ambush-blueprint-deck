# Elevating the St. Louis Ambush — Strategic Blueprint (v2)

Editorial-brutalist cinematic deck. 98 slides. No PowerPoint DNA.

## Files

- `index.html` — shell with design system, navigation engine, nav UI
- `slides.js` — all 98 slides as data

That's it. No build step. No framework. Works on GitHub Pages or by double-clicking `index.html` locally.

## How to present

| Key | Action |
|---|---|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `Esc` | Overview grid (click any tile to jump) |
| `F` | Fullscreen |

Touch/swipe works on mobile and tablet. URL hash routing — `#14` jumps to slide 14.

## Design system

**Typography**
- Anton — ultra-condensed display
- Fraunces — editorial italic serif
- Archivo Black — heavy numerals
- Inter Tight — body copy
- JetBrains Mono — data labels and chrome

**Palette**
- Ambush teal `#00B8A9` (CURRENT state)
- Ambush pink `#FF3D6E` (FUTURE state)
- Deep black `#0A0A0A`
- Warm paper `#F4F1EA` (also used as third accent)
- Teal-deep `#006B64`, Pink-deep `#C72152` (Part dividers)

## Deploy to GitHub Pages

```bash
cd ambush-v2
git init
git add .
git commit -m "Strategic Blueprint v2"
git branch -M main
git remote add origin https://github.com/dyllanleehaggard/ambush-blueprint-v2.git
git push -u origin main
```

Then: Settings → Pages → Deploy from a branch → `main` / root. Live in 1-2 minutes.
