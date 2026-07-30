# Anne Dayer — MSc AI ePortfolio

Professional ePortfolio documenting my learning journey through the MSc Artificial Intelligence programme at the University of Essex Online.

Live at **https://tanky0.github.io/**

## Structure

- **index.html** — Homepage: programme modules, statuses and results
- **about.html** — About Me, CV, and the Professional Skills Matrix (`#skills-matrix`)
- **modules/** — Individual module pages
  - `induction.html` — Completed
  - `launch-into-computing.html` — Completed, 76% (Distinction)
  - `understanding-ai.html` — Completed, 87% (Distinction)
  - `numerical-analysis.html` — Completed, 99% (Distinction)
  - `intelligent-agents.html` — In progress (started 28 July 2026)
  - `machine-learning.html` — Planned
  - `knowledge-reasoning.html` — Planned
  - `research-methods.html` — Planned
  - `msc-project.html` — Planned
- **assets/**
  - `css/site.css` — the whole design system, shared by every page
  - `js/site.js` — theme toggle, reading progress, mobile menu, section navigation
  - `documents/` — assignment outputs, transcripts, slides, recordings, CV
  - `images/` — profile photo

Module pages run Module Overview → Assignments, then whichever of Reflective Piece, e-Portfolio Activities, Artefacts, Team Meeting Notes and Peer/Tutor Feedback that module actually requires. The Professional Skills Matrix appears once only, on `about.html`.

## Design

Hand-built static HTML with no framework or build step. One stylesheet and one small progressive-enhancement script serve all eleven pages — edit `assets/css/site.css` rather than adding styles to a page.

- **Type** — Newsreader for headings, IBM Plex Sans for body, IBM Plex Mono for metadata
- **Colour** — warm paper ground with a muted moss accent, defined as CSS custom properties
- **Themes** — light and dark, following the system setting, with a toggle that persists
- **Motion** — restrained, and disabled entirely under `prefers-reduced-motion`
- **Accessibility** — skip link, visible focus rings, WCAG AA contrast in both themes, no horizontal overflow at 375px

## Updating Content

- **`EPORTFOLIO_UPDATE_GUIDE.md`** — full instructions: how the site is built, page structure, adding assignments and feedback, completing a module, maintaining the skills matrix, publishing, troubleshooting
- **`QUICK_REFERENCE.md`** — copy-paste snippets
- **`TEMPLATE_Assignment.html`** — assignment block
- **`TEMPLATE_Module_Completion.html`** — module completion block

## Deployment

GitHub Pages, from `main`.

```bash
cd "C:\Users\annes\Tanky0.github.io"
git add .
git commit -m "Description"
git push origin main
```

Pages rebuilds within a minute or two. If the site looks unchanged, hard-refresh with Ctrl+F5 — that is CDN caching, not a failed push.

## Programme Information

- **Programme**: MSc Artificial Intelligence
- **Institution**: University of Essex Online
- **Started**: October 2025
- **Total Modules**: 9

---

&copy; 2025 Anne Dayer
