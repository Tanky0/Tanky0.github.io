# ePortfolio Quick Reference

Snippets for common edits. Full instructions in `EPORTFOLIO_UPDATE_GUIDE.md`.

## Assignment Block

```html
<div class="assignment-box">
    <h4>Assignment title</h4>
    <p><strong>Brief Description:</strong> What the brief asked for.</p>
    <p><strong>Submission:</strong> What you produced and the decisions behind it.</p>
    <p><span class="status-badge status-submitted">89% (Distinction)</span></p>
    <p><strong>Feedback Received:</strong> Tutor feedback, quoted verbatim.</p>
    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank">View Assignment Output (PDF)</a>
</div>
```

## Result and Status Badges

```html
<!-- Inside an assignment box, before the result is known -->
<span class="status-badge status-submitted">Status: Submitted &ndash; Awaiting Feedback</span>

<!-- Inside an assignment box, once graded -->
<span class="status-badge status-submitted">89% (Distinction)</span>

<!-- On a module card in index.html -->
<span class="module-status status-completed">Completed</span>
<span class="module-status status-in-progress">In Progress</span>
<span class="module-status status-planned">Planned</span>

<!-- On a module card, under a completed badge -->
<span class="module-grade">Module result: 87% (Distinction)</span>
```

Note: `grade-badge` exists only in `modules/induction.html`. Everywhere else, use `status-badge status-submitted`.

## Module Result Box

Goes at the end of Module Overview on a completed module page.

```html
<div class="module-result">
    <strong>Module result: 87% (Distinction)</strong><br>
    Assignment 1: 97% &middot; Assignment 2: 92% &middot; End of Module Assignment: 82%
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
    <td>Action plan (PDP) — what this means next.</td>
</tr>
```

**Scale:** Developing → Competent → Proficient

Qualify rather than promote where progress stayed within a band: `Competent (improved)`, `Proficient (spoken still developing)`, `Competent (maintained)`.

**The nine skills:** Time management · Critical thinking & analysis · Communication & literacy · IT & digital · Numeracy · Research · Interpersonal · Problem-solving · Ethical awareness

## Wide Tables

Always wrap, or the page scrolls sideways on mobile.

```html
<div class="table-scroll">
<table>
    ...
</table>
</div>
```

## Module Page Sections

In order. No Meeting Notes, no skills matrix.

1. Module Overview
2. Assignments
3. Reflective Piece
4. Artefacts Mapped to Learning Outcomes *(optional)*

## File Naming

`ModulePrefix_Assessment_Component.ext` — no spaces.

| Prefix | Module |
|---|---|
| `LiC_` | Launch into Computing |
| `UAI_` | Understanding Artificial Intelligence |
| `NA_` | Numerical Analysis |

Examples: `NA_EMA1_Statistical_Analysis_Slides.pdf`, `UAI_CLD2_Summary_Post.pdf`, `LiC_PartB_Video_Presentation.mp4`

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
| Documents and media | `assets/documents/` |
| Assignment template | `TEMPLATE_Assignment.html` |
| Full guide | `EPORTFOLIO_UPDATE_GUIDE.md` |
