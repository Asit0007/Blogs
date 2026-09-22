# Brand reference — Asit Minz

The living, in-repo companion to the **AI Personal Brand Playbook** (Google Doc)
and the **Visual Identity Kit** (Artifact). If those and this disagree, the
Playbook wins — then update this file.

---

## Positioning

**Builder-explainer of AI systems, from an operator's chair.** I build AI systems
solo under hard constraints and write down what actually happens when they run.

- **Enduring tagline:** *Production experience, not tutorials.*
- **Niche line:** *The wiring behind AI.*
- **North star:** every piece serves — *"I build AI systems the way I run
  infrastructure, in public, and write down what actually happens."*
- **Audience:** mid-to-senior engineers moving into AI who are tired of content
  that never shows the wiring; secondarily the people who build/hire for AI-platform
  and DevRel roles.

## Content pillars

1. **Build logs** (~40%) — real systems shipped in public: the constraint, the
   decision, what broke, what it cost.
2. **Systems, explained** (~35%) — agent loops, RAG cost, evals, inference
   economics, observability — from an operator's view.
3. **The field, filtered** (~15%) — new models/papers/tools judged by one question:
   *does this change what I'd build on Monday?*
4. **The person** (~10%) — the arc (boring job → self-taught → building), the work,
   life outside (Muay Thai, gaming, badminton). **Light-touch on personal history.**

## Voice

Lead with the concrete anomaly. Short declarative sentences. Name the non-obvious
trade-off. Show the number. No hype vocabulary (game-changer, revolutionary,
unlock, leverage-as-verb, seamless, "the future of"). Dry, understated. Write from
having done it. One argument per post. Test: *would a bot have written this
sentence without me?*

## Identity

| | |
|---|---|
| Name | **Asit Minz** |
| Handle | `asitminz` on X, YouTube, Instagram, TikTok, beehiiv |
| GitHub | stays `github.com/Asit0007` — display name "Asit Minz" |
| Home | `asitminz.com` (portfolio) · `blogs.asitminz.com` (this repo) |
| Newsletter | **beehiiv**, titled ***Cold Start*** |
| Employer in copy | described, never named — "~4 yrs in enterprise cloud ops at a large IT services company" |

## Visual system

Source of truth: [`assets/css/tokens.css`](assets/css/tokens.css). Full spec + all
social artboards: the Visual Identity Kit artifact.

- **Two voices:** serif (DM Serif Display) = the person; mono (JetBrains Mono) =
  the machine / labels / the wordmark; sans (DM Sans) = body.
- **Logomark:** the **avatar mark** — lowercase `a` + ember block caret (`a▌`) in
  a rounded square. Ink ground is primary, `mark-paper.svg` is the inverted form.
  Files: [`assets/brand/mark.svg`](assets/brand/mark.svg),
  [`assets/brand/mark-paper.svg`](assets/brand/mark-paper.svg),
  [`favicon.svg`](favicon.svg). The wordmark `asit minz▌` still runs inline in page
  headers and OG images; the square mark is the avatar / app-icon / profile form.
- **Color:** warm paper `#faf9f6`, ink `#0f0f0e`, one ember accent `#c84b11`, one
  functional green `signal #1a6b4a`, warm neutral `wire #8a8578`. **No gradients.**
  Warm-dark counterpart in the `@media (prefers-color-scheme: dark)` block.
- **Eyebrow pattern:** `.eyebrow` — 22px ember rule + uppercase mono ember label.

## This repo — what changed & what's left

**Done (rebrand v1):**
- `assets/css/tokens.css` — shared tokens, light + warm-dark.
- `index.html` — repositioned to the AI builder-explainer angle; 3 case studies
  kept as the "operator track record"; pillars + Cold Start capture added.
- `about/index.html` — new story page (DRAFT — marked for Asit's edit).
- Posts: LinkedIn URL fixed, About link added, magento logo href fixed.

**Done (2026-09-22 cross-project brand-alignment pass):**
- Portfolio (`asitminz.com`) cross-linked from nav/byline/footer on `index.html`,
  `about/index.html`, and the three post pages.
- `about/index.html`: education line confirmed — B.Tech, Computer Science, IIIT
  Bhubaneswar, 2018 (bracket resolved); JobPipe fact swapped for a ContentPipe one
  (JobPipe is private, not a public brand-carrying property).
- `index.html` newsletter section now shows an honest "coming soon" state instead
  of a dead form pointed at the beehiiv placeholder URL.
- The GitHub profile (`github.com/Asit0007`) and `asit-portfolio` were repositioned
  the same way in the same pass — see their own repos' history.

**TODO:**
- [ ] Create the *Cold Start* beehiiv publication; then swap the "coming soon"
      newsletter block in `index.html` back for a real subscribe form / embed
      (the original form is in git history, pre-2026-09-22).
- [x] Logomark finalised (avatar mark); `favicon.svg` + `assets/brand/mark*.svg`
      committed and wired into every page.
- [ ] Export raster copies from `mark.svg`: `avatar-400.png` for platforms that
      need an upload, and a 1200×630 `og-default.png` (screenshot
      `assets/og/template.html`).
- [ ] Migrate `posts/*/index.html` to `tokens.css` (drop their inline `:root`),
      then dark mode is consistent site-wide.
- [ ] Claim `asitminz` on X/YouTube/IG/TikTok; the `x.com/asitminz` links assume it.
- [x] Asit: edit `about/index.html`, confirm the `[BRACKETED]` education line —
      confirmed 2026-09-22: IIIT Bhubaneswar, 2018.
