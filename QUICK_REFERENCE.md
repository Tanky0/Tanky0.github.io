# ePortfolio Quick Reference

Snippets for common edits. Full instructions in `EPORTFOLIO_UPDATE_GUIDE.md`.

> **Never write inline CSS.** All styling lives in `assets/css/site.css`, shared by every page.
> **Never name a classmate.** Initials only, including inside reproduced posts. This site is public.
> **Never put a reflection or a learning-outcome table inside an artefact page.** Both live at module level.

## Assignment Block

```html
<div class="assignment-box">
    <h3>Assignment title</h3>
    <p class="deadline"><strong>Unit 6</strong> &middot; Deadline: 23:55, Monday 7 September 2026</p>
    <p><strong>Brief Description:</strong> What the brief asked for.</p>
    <p><strong>Submission:</strong> What you produced and the decisions behind it.</p>
    <p><span class="status-badge status-submitted">89% (Distinction)</span></p>
    <p><strong>Feedback Received:</strong> Tutor feedback, quoted verbatim.</p>
    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank" rel="noopener noreferrer">View Assignment Output (PDF)</a>
</div>
```

## Badges

```html
<!-- In an assignment box -->
<span class="status-badge status-pending">Status: Not yet submitted</span>
<span class="status-badge status-submitted">89% (Distinction)</span>

<!-- On a module card in index.html -->
<span class="module-status status-completed">Completed</span>
<span class="module-status status-in-progress">In Progress</span>
<span class="module-status status-planned">Planned</span>
<span class="module-grade">Module result: 87% (Distinction)</span>
```

## Module Result Box

End of Module Overview, on a completed module.

```html
<div class="module-result">
    <strong>Module result: 87% (Distinction)</strong><br>
    Assignment 1: 97% &middot; Assignment 2: 92% &middot; End of Module Assignment: 82%
</div>
```

## Masthead

```html
<p class="eyebrow">Completed</p>
<h1>Module Name</h1>
<p class="lede">Tutor: Dr Jane Smith &middot; January 2026 B</p>
```

Eyebrow carries the status; lede carries tutor and intake.

## Not-Yet-Done Note

```html
<div class="placeholder">
    <p><strong>Planned:</strong> What will go here and when.</p>
</div>
```

## Wide Tables

Always wrap, or the page scrolls sideways on a phone.

```html
<div class="table-scroll">
<table>
    ...
</table>
</div>
```

## Skills Matrix Row

`about.html` only, in the section with `id="skills-matrix"`. Nowhere else.

```html
<tr>
    <td><strong>Skill name</strong></td>
    <td>Module start level</td>
    <td><span class="skill-rating">Module end level</span></td>
    <td>Evidence — marks, artefacts, feedback.</td>
    <td>Action plan (PDP).</td>
    <td>Progress against the plan.</td>
</tr>
```

**Scale:** Developing → Competent → Proficient

Qualify rather than promote where progress stayed in a band: `Competent (improved)`, `Competent (maintained)`, `Proficient (spoken still developing)`.

**The nine skills:** Time management · Critical thinking & analysis · Communication & literacy · IT & digital · Numeracy · Research · Interpersonal · Problem-solving · Ethical awareness

## Link to the PDP from a Module Page

```html
<a href="../about.html#skills-matrix" class="download-link">View the Professional Skills Matrix and Action Plan</a>
```

## Module Page Sections

Only the first two are required. Build the rest from the module's own brief — they differ by module.

1. Module Overview
2. Assignments
3. e-Portfolio Activities *(where the module sets them)*
4. Summary of Learning Outcomes: Artefacts, Evidence and Growth *(one table, both jobs)*
5. Reflective Piece, with the running reflections inside it
6. Team Meeting Notes *(team-assessed only; covers team and tutor meetings)*
7. AI Acknowledgement *(once, covering the whole module e-portfolio)*
8. Professional Skills Matrix and Action Plan *(link box only)*

Three sections that no longer exist: **Peer and Tutor Feedback** (feedback goes in
the `assignment-box` it belongs to), **Artefacts Mapped to Learning Outcomes**
(section 4 does both jobs), and **Outcomes from the Team Exercises** (a
`Team Working Log` block inside the team project `assignment-box`).

Sections 5 onwards follow the order the brief lists them in.

The sticky section index on the right builds itself from the `<h2>` headings — nothing to maintain.

## Summary of Learning Outcomes Table

One table for the whole module, a row per artefact, columns: artefact, unit(s),
outcomes, evidence, **learning and changed action**. The last column is what is
marked. Close with a note on which outcomes are still thin.

```html
<div class="table-scroll">
<table>
    <thead>
        <tr>
            <th>Artefact</th><th>Unit(s)</th><th>Outcomes</th>
            <th>Evidence in the artefact</th><th>Learning and changed action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="ia-unit06-agent-dialogues.html">Creating Agent Dialogues</a></td>
            <td>6</td>
            <td><strong>LO1, LO2</strong></td>
            <td>What the artefact contains that evidences them</td>
            <td>What it changed in how you work, in the first person</td>
        </tr>
        <tr>
            <td colspan="5"><em>Rows added as each remaining component completes.</em></td>
        </tr>
    </tbody>
</table>
</div>
```

## Reflective Piece — Top Band

Strict word limit. The *Reflective Review* band needs: analysis of choices · multiple perspectives · critique of artefacts · reference to and critique of literature · action plan. Structure as What? / So What? / What Next?, with What? the shortest part.

## Before Submitting a Module e-Portfolio

Create a branch for the module section being submitted and configure the GitHub Pages source. Dry-run it early.

## New Page Checklist

Copy an existing page and replace what is inside `<main>`. Check:

- `<meta name="description">`, `<link rel="canonical">`, `<link rel="icon">` and the `og:` block, all with this page's own title, description and URL
- Google Fonts `<link>` present in `<head>`
- `assets/css/site.css` and `assets/js/site.js` linked with the right prefix
  (`../` from `modules/`, nothing from the root)
- `<main id="main">` for the skip link
- every `target="_blank"` also carries `rel="noopener noreferrer"`
- assignment titles are `<h3>`, never `<h4>` (heading order)
- no `<style>` block anywhere
- no classmate named anywhere, including inside quoted posts
- eyebrow links to the module page and to the activity anchor
- AI acknowledgement section present and linked to the module statement
- no reflection and no learning-outcome table on the artefact page

## File Naming

`ModulePrefix_Assessment_Component.ext` — no spaces.

| Prefix | Module |
|---|---|
| `LiC_` | Launch into Computing |
| `UAI_` | Understanding Artificial Intelligence |
| `NA_` | Numerical Analysis |
| `IA_` | Intelligent Agents |

## Artefact Page Eyebrow

```html
<p class="eyebrow"><a href="intelligent-agents.html">Intelligent Agents</a> &middot;
   <a href="intelligent-agents.html#activity-unit06">Unit 6 e-Portfolio Activity</a></p>
```

Give the target `assignment-box` an explicit `id`. Runtime-generated ids are too
late for the browser to jump to.

## Module Level, Not Assignment Level

| Content | Goes in |
|---|---|
| Reflection on an artefact | Running reflections, module page |
| Artefact to learning outcomes | The single module-level table |
| Tutor guidance on the group project | Team working log |
| Team exercise outcomes | `Team Working Log` block in the team project box |
| AI acknowledgement | Both: per artefact **and** once for the module |

Artefact page may keep a two-sentence `Reflection` section that links to the
module entry. Never the reflection itself.

## Running Reflection Entry

```html
<div class="assignment-box">
    <h3>Unit 6: what the dialogue exposed</h3>
    <p class="deadline">Written 11 August 2026 &middot; <a href="...">Artefact</a></p>
    <p><strong>What.</strong> ...</p>
    <p><strong>So what.</strong> ...</p>
    <p><strong>Now what.</strong> ...</p>
    <div class="reflist">
        <h4>References for this entry</h4>
        <p>Rolfe, G., Freshwater, D. and Jasper, M. (2001) ...</p>
    </div>
</div>
```

Ordered by unit, not by write date. No point repeated from an earlier entry.
Every feeling stated with the consequence it had for the work.

## Large Activities

Give a full collaborative discussion or a coded artefact its own page in `modules/`
(`ia-cd1-agent-based-systems.html`), and leave a summary plus a link in the module
page's `assignment-box`. Where two strands could be confused, separate them by heading.

## Reference Lists

```html
<section class="content-section reflist" id="references">   <!-- whole section -->
<div class="reflist">                                        <!-- inside a box -->
```

Check the book's own copyright page for place, year and edition. The module reading
list has been wrong more than once.

## Publish

```bash
cd "C:\Users\annes\Tanky0.github.io"
git add .
git commit -m "Describe what changed"
git push origin main
```

## File Paths

| Item | Path |
|---|---|
| Homepage | `index.html` |
| About Me + skills matrix | `about.html` |
| Module pages | `modules/[module-name].html` |
| Stylesheet | `assets/css/site.css` |
| Script | `assets/js/site.js` |
| Documents and media | `assets/documents/` |
| Custom 404 page | `404.html` |
| Favicon | `assets/favicon.svg` |
| Full guide | `EPORTFOLIO_UPDATE_GUIDE.md` |
