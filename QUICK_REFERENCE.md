# ePortfolio Quick Reference

Snippets for common edits. Full instructions in `EPORTFOLIO_UPDATE_GUIDE.md`.

> **Never write inline CSS.** All styling lives in `assets/css/site.css`, shared by every page.

## Assignment Block

```html
<div class="assignment-box">
    <h4>Assignment title</h4>
    <p class="deadline"><strong>Unit 6</strong> &middot; Deadline: 23:55, Monday 7 September 2026</p>
    <p><strong>Brief Description:</strong> What the brief asked for.</p>
    <p><strong>Submission:</strong> What you produced and the decisions behind it.</p>
    <p><span class="status-badge status-submitted">89% (Distinction)</span></p>
    <p><strong>Feedback Received:</strong> Tutor feedback, quoted verbatim.</p>
    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank">View Assignment Output (PDF)</a>
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

Only the first two are required.

1. Module Overview
2. Assignments
3. e-Portfolio Activities *(where the module sets them)*
4. Artefacts Mapped to Learning Outcomes *(optional)*
5. Reflective Piece *(only if one was actually produced)*
6. Team Meeting Notes *(team-assessed modules only)*
7. Peer and Tutor Feedback *(where required)*
8. Professional Skills Matrix and Action Plan *(link box only)*

The sticky section index on the right builds itself from the `<h2>` headings — nothing to maintain.

## New Page Checklist

Copy an existing page and replace what is inside `<main>`. Check:

- Google Fonts `<link>` present in `<head>`
- `assets/css/site.css` and `assets/js/site.js` linked with the right prefix
  (`../` from `modules/`, nothing from the root)
- `<main id="main">` for the skip link
- no `<style>` block anywhere

## File Naming

`ModulePrefix_Assessment_Component.ext` — no spaces.

| Prefix | Module |
|---|---|
| `LiC_` | Launch into Computing |
| `UAI_` | Understanding Artificial Intelligence |
| `NA_` | Numerical Analysis |

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
| Full guide | `EPORTFOLIO_UPDATE_GUIDE.md` |
