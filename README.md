# Anne Dayer, MSc Artificial Intelligence ePortfolio

Assessed ePortfolio for the MSc Artificial Intelligence at the University of Essex Online.

**Live at https://tanky0.github.io/**

## Programme

| Module | Status | Result |
|---|---|---|
| Induction | Completed | n/a |
| Launch into Computing | Completed | 76, Distinction |
| Understanding Artificial Intelligence | Completed | 87, Distinction |
| Numerical Analysis | Completed | 81, Distinction |
| Intelligent Agents | In progress, started 28 July 2026 | n/a |
| Machine Learning | Planned | n/a |
| Knowledge Representation and Reasoning | Planned | n/a |
| Research Methods | Planned | n/a |
| MSc Project | Planned | n/a |

## Layout

```
index.html          Home: the nine modules, their status and results
about.html          Profile, CV, and the Professional Skills Matrix (#skills-matrix)
404.html            Custom not-found page
modules/            One page per module, plus artefact pages for Intelligent Agents
assets/css/         site.css, the whole design system
assets/js/          site.js, progressive enhancement only
assets/documents/   Submitted work: reports, slides, transcripts, recordings, CV
assets/images/      Profile photo
```

Intelligent Agents carries four artefact pages of its own, linked from the module page:
`ia-cd1-agent-based-systems.html`, `ia-unit06-agent-dialogues.html`,
`ia-unit08-parse-trees.html` and `ia-team-project-log.html`.

## How a module page is built

Module Overview and Assignments first, then whichever of these that module requires:
e-Portfolio Activities, Summary of Learning Outcomes, Reflective Piece, Team Meeting
Notes, Feedback Received, AI Acknowledgement, and a link to the skills matrix.

Two rules hold across the site. The **Professional Skills Matrix appears once only**, on
`about.html`, and every module page links to it rather than repeating it. Substantial
artefacts get their **own page** under `modules/` rather than expanding the module page.

## Design

Hand-written static HTML. No framework, no build step, no dependencies. One stylesheet
and one small script serve every page, so styling changes belong in `assets/css/site.css`
rather than in a page.

- **Type**: Newsreader for display, IBM Plex Sans for body, IBM Plex Mono for metadata
- **Colour**: warm paper ground, muted moss accent, all as CSS custom properties
- **Themes**: light and dark, following the system setting, with a toggle that persists
- **Accessibility**: skip link, visible focus, WCAG AA contrast in both themes, no
  horizontal overflow at 375px, motion disabled under `prefers-reduced-motion`

`.nojekyll` is present, so GitHub Pages serves the files as written. Markdown in this
repository is documentation only and is never rendered on the site.

## Writing conventions

- British English throughout
- No em dashes or en dashes in prose; use commas, parentheses or semicolons
- Harvard referencing, Cite Them Right, with a reference list on any page that cites
- Every page carries its own AI acknowledgement
- Dates written in full, as `4 September 2026`

## Editing and publishing

```bash
git add .
git commit -m "Short description of what changed"
git push
```

GitHub Pages rebuilds within a minute or two. If a change does not appear, hard-refresh
with Ctrl+F5 before assuming the push failed; it is usually CDN caching.

Before pushing, check that tags balance, that internal links and anchors resolve, and
that no em dash has crept into the prose.

## Templates

`TEMPLATE_Assignment.html` and `TEMPLATE_Module_Completion.html` hold the two blocks that
recur. `EPORTFOLIO_UPDATE_GUIDE.md` covers the longer procedures and
`QUICK_REFERENCE.md` holds copy-paste snippets.

---

© 2025–2026 Anne Dayer
