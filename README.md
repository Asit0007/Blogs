# blogs.asitminz.com

The engineering blog of **Asit Minz** — a cloud & infrastructure engineer building
and explaining AI systems, from an operator's chair.

> *Production experience, not tutorials.*

Static HTML, served by GitHub Pages from the repo root. No build step.

## Layout

```
index.html              home — positioning, pillars, Cold Start capture, writing list
about/index.html        the story (DRAFT — see BRAND.md)
posts/<slug>/index.html  one self-contained page per post
assets/css/tokens.css   shared design tokens (light + warm-dark)
assets/images/<slug>/    per-post figures
BRAND.md                 brand reference — read before changing anything visual
CNAME                    blogs.asitminz.com
```

## Working on it

Open any `.html` file in a browser, or serve the root:

```bash
python3 -m http.server 8000   # then http://localhost:8000
```

Design decisions live in [`BRAND.md`](BRAND.md); the full system is the Visual
Identity Kit. Keep to three typefaces (DM Serif Display / DM Sans / JetBrains
Mono), one ember accent, no gradients.

## Posts

| Post | Subject |
|---|---|
| [The Backtest That Lied](posts/quantbot/) | An automated futures bot, and the day the numbers turned out wrong |
| [Engineering for Zero](posts/cloudpulse/) | A cloud dashboard built to never cost a cent |
| [Bare Server to Magento in 7 Scripts](posts/magento-deploykit/) | Idempotent shell provisioning of a multi-layer LEMP stack |
