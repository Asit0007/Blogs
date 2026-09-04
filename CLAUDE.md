# CLAUDE.md — blogs.asitminz.com

The personal blog of **Asit Minz**. Static HTML, GitHub Pages from repo root
(`Asit0007/Blogs`), custom domain `blogs.asitminz.com`. No build step, no
framework, no dependencies. Each page is self-contained HTML with an inline
`<style>` block; the only shared file is `assets/css/tokens.css`.

## Positioning (as of 2026-09-04 rebrand)

Repositioned from a generic "engineering blog" to **"building & explaining AI
systems, from an operator's chair"** — a builder-explainer in AI who happens to
have real infrastructure experience. Enduring tagline: *Production experience, not
tutorials.* Niche line: *The wiring behind AI.* The three existing infra case
studies stay, reframed as the operator track record.

The full strategy is the **AI Personal Brand Playbook** (a Google Doc, not in this
repo) and the **Visual Identity Kit** (a Claude artifact). `BRAND.md` is the
in-repo mirror and the source of truth for anything visual — **read it first**.

## Non-negotiable design rules

- Three typefaces only: DM Serif Display (display/headlines), DM Sans (body),
  JetBrains Mono (labels, data, the wordmark). Adding a fourth = update `BRAND.md`.
- One accent: ember `#c84b11` (`--ember`). One functional colour: signal green
  `#1a6b4a`. Warm neutral: `wire #8a8578`. **No gradients, ever.**
- Warm paper ground `#faf9f6`; warm near-black for dark `#141310` (never `#000`).
- The mark is `a▌` — lowercase "a" + ember block caret in a rounded square
  (`favicon.svg`, `assets/brand/mark.svg`). The wordmark `asit minz▌` runs inline
  in headers.
- Eyebrow pattern: `.eyebrow` — a 22px ember rule + uppercase mono ember label.

## Layout

| Path | What |
|---|---|
| `index.html` | Home — hero, 3 content pillars, Cold Start capture, writing list |
| `about/index.html` | The story. **Still a DRAFT** — Asit edits it; has `[BRACKETED]` bits |
| `posts/<slug>/index.html` | One self-contained page per post |
| `assets/css/tokens.css` | Shared tokens (light + `prefers-color-scheme: dark`) |
| `favicon.svg`, `assets/brand/mark*.svg` | The mark |
| `assets/og/template.html` | 1200×630 OG image template — screenshot per post |
| `BRAND.md` | Brand reference + the live TODO list |

## Working on it

```bash
python3 -m http.server 8000   # http://localhost:8000
```

Verify: open `index.html`, `about/`, and each post at desktop and ≤680px; check
links resolve, dark mode reads, no horizontal scroll.

## Known follow-ups (also in BRAND.md)

- `index.html` newsletter form action is a placeholder
  (`REPLACE-WITH-BEEHIIV-PUBLICATION`) — the *Cold Start* beehiiv publication
  doesn't exist yet.
- `posts/*/index.html` still carry their own inline `:root` (pre-`tokens.css`), so
  they're light-only; migrate them to `tokens.css` for site-wide dark mode.
- No raster copies of the mark yet (`avatar-400.png`, `og-default.png`).
- `posts/quantbot/index.html` carries an in-progress "$0/month" correction by Asit
  (OCI Always Free is regional) — leave that content alone.

## Git

Solo repo, commits straight to `main`, GitHub Pages auto-deploys. GitHub username
stays `Asit0007` (not renamed); display name is "Asit Minz".
