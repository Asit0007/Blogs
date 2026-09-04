# blogs.asitminz.com

The engineering blog of **Asit Minz** — a cloud & infrastructure engineer building
and explaining AI systems, from an operator's chair.

> *Production experience, not tutorials.*

Static HTML, served by GitHub Pages from the repo root. No build step.

## Layout

```
index.html                home — positioning, pillars, Cold Start capture, writing list
about/index.html          the story (DRAFT — Asit's to edit; see BRAND.md)
posts/<slug>/index.html   one self-contained page per post
favicon.svg               the mark — lowercase "a" + ember caret, on every page
assets/brand/mark*.svg    full-res logomark (ink + paper), JetBrains Mono "a" embedded
assets/css/tokens.css     shared design tokens (light + warm-dark)
assets/og/template.html   1200x630 OG-image template (screenshot to PNG per post)
assets/images/<slug>/     per-post figures
BRAND.md                  brand reference — read before changing anything visual
CNAME                     blogs.asitminz.com
```

## Working on it

Open any `.html` file in a browser, or serve the root:

```bash
python3 -m http.server 8000   # then http://localhost:8000
```

Design decisions live in [`BRAND.md`](BRAND.md); the full system is the Visual
Identity Kit (a separate artifact). **Read `BRAND.md` before any visual change.**
The rules that don't bend: three typefaces (DM Serif Display / DM Sans / JetBrains
Mono), one ember accent (`#c84b11`), one functional green, **no gradients**. The
mark is the lowercase `a` + ember caret in a rounded square.

## Posts

| Post | Subject |
|---|---|
| [The Backtest That Lied](posts/quantbot/) | An automated futures bot, and the day the numbers turned out wrong |
| [Engineering for Zero](posts/cloudpulse/) | A cloud dashboard built to never cost a cent |
| [Bare Server to Magento in 7 Scripts](posts/magento-deploykit/) | Idempotent shell provisioning of a multi-layer LEMP stack |
