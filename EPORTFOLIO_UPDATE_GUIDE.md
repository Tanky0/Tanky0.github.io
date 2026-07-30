# ePortfolio Update Guide

Step-by-step instructions for updating the ePortfolio as each module of the MSc progresses.

Live site: **https://tanky0.github.io**
Repository: **https://github.com/Tanky0/Tanky0.github.io**

## Table of Contents
1. [Page Structure](#structure)
2. [Starting a New Module](#start-module)
3. [Adding an Assignment](#add-assignment)
4. [Adding a Grade and Feedback](#add-grade-feedback)
5. [Completing a Module](#complete-module)
6. [Updating the Skills Matrix](#skills-matrix)
7. [Adding Files to `assets/documents/`](#add-files)
8. [Publishing Changes](#publishing)
9. [Troubleshooting](#troubleshooting)

---

## 1. Page Structure {#structure}

Every module page follows the same pattern, in this order:

| Section | When to fill it |
|---|---|
| **Module Overview** | At module start: description, tutor, learning outcomes. Add the result box when the module finishes. |
| **Assignments** | One `assignment-box` per assessment, added as each is submitted. |
| **Reflective Piece** | On module completion. |
| **Artefacts Mapped to Learning Outcomes** | *Optional.* Only where formative work is worth evidencing separately (currently Numerical Analysis). |

**Sections that must NOT appear on module pages:**

- **Meeting Notes** — removed from the portfolio. Tutor feedback belongs inside each `assignment-box`.
- **Professional Skills Matrix and Action Plan** — appears once only, on `about.html`. See [section 6](#skills-matrix).

Induction is the exception to everything above: it carries Module Overview and Assignment only.

---

## 2. Starting a New Module {#start-module}

**On `index.html`:**

1. Find the module card and change its status badge:
   ```html
   <span class="module-status status-planned">Planned</span>
   <!-- becomes -->
   <span class="module-status status-in-progress">In Progress</span>
   ```
2. Add the tutor above the description:
   ```html
   <p class="module-tutor">Tutor: Dr Jane Smith</p>
   ```
3. Replace the placeholder description with the real module description.

**On `modules/[module-name].html`:**

1. Update the header line under the `<h1>`:
   ```html
   <p>Tutor: Dr Jane Smith | In Progress</p>
   ```
2. Replace the Module Overview placeholder with the description and the learning outcomes as a `<ul>`.

Module cards on `index.html` are ordered to follow the sequence actually studied, not the generic programme order. Move the card if the order changes.

---

## 3. Adding an Assignment {#add-assignment}

Copy the block from `TEMPLATE_Assignment.html` into the Assignments section of the module page and fill it in:

```html
<div class="assignment-box">
    <h4>Assignment title as it appears in the brief</h4>
    <p><strong>Brief Description:</strong> What the brief actually asked for — word count,
       weighting, required components, assessed criteria.</p>

    <p><strong>Submission:</strong> What you actually produced and the decisions behind it.
       This is what makes the entry evidence rather than a list.</p>

    <p><span class="status-badge status-submitted">Status: Submitted &ndash; Awaiting Feedback</span></p>

    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank">View Assignment Output (PDF)</a>
</div>
```

Add one `download-link` per artefact. Where an assessment has several components, label each one:

```html
<a href="../assets/documents/LiC_PartB_Presentation_Slides.pdf" class="download-link" target="_blank">Part B: Slides (PDF)</a>
<a href="../assets/documents/LiC_PartB_Presentation_Transcript.pdf" class="download-link" target="_blank">Part B: Transcript (PDF)</a>
<a href="../assets/documents/LiC_PartB_Video_Presentation.mp4" class="download-link" target="_blank">Part B: Video Presentation (MP4)</a>
```

---

## 4. Adding a Grade and Feedback {#add-grade-feedback}

Replace the submitted badge with the result, and add the feedback beneath it:

```html
<p><span class="status-badge status-submitted">89% (Distinction)</span></p>

<p><strong>Feedback Received:</strong> &ldquo;Paste the tutor's feedback verbatim here.&rdquo;</p>
```

Where the feedback separates strengths from development points, split them out:

```html
<p><strong>Points for development:</strong> &ldquo;Quote the development point verbatim.&rdquo;</p>
```

**Quote feedback exactly as received.** Do not paraphrase or tidy it — the value of the portfolio is that it is a genuine record. Where interim and final feedback differ, use the final version.

---

## 5. Completing a Module {#complete-module}

**Step 1 — Update the status.** On `index.html`, change the badge to `status-completed` and add the result underneath it:

```html
<span class="module-status status-completed">Completed</span>
<span class="module-grade">Module result: 87% (Distinction)</span>
```

On the module page, update the header line:

```html
<p>Tutor: Dr Jane Smith | January 2026 B | Completed</p>
```

**Step 2 — Add the result box** to the end of Module Overview:

```html
<div class="module-result">
    <strong>Module result: 87% (Distinction)</strong><br>
    Assignment 1: 97% &middot; Assignment 2: 92% &middot; End of Module Assignment: 82%
</div>
```

**Step 3 — Add the Reflective Piece.** Two options:

*If the module was assessed by a reflective piece*, don't retype it — link the submitted document:

```html
<section class="content-section">
    <h2>Reflective Piece</h2>
    <p>One paragraph saying what the reflection covers and what it was awarded.
       Note that the skills matrix it contains is reproduced on the
       <a href="../about.html#skills-matrix">About Me</a> page.</p>

    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank">Read the Reflective Piece (PDF)</a>
</section>
```

*Otherwise*, write it on the page using What? / So What? / What Next?:

- **What?** — factual description of the module, its assessments and what was produced.
- **So What?** — interpretation. What shifted, what assumption was challenged, what the tutor and peer feedback exposed. Reference specific evidence rather than generalising.
- **What Next?** — concrete, checkable actions. Not intentions.

**Step 4 — Update the skills matrix** on `about.html`. See below.

---

## 6. Updating the Skills Matrix {#skills-matrix}

The Professional Skills Matrix lives in **one place only**: `about.html`, in the section with `id="skills-matrix"`. It is **not** duplicated on module pages.

Rules:

- **Show only the current version.** Replace the table on module completion rather than adding a second one. The portfolio shows where the skills stand now, not a history of every assessment.
- **No separate Action Plan section.** Each row's *Action plan (PDP)* column carries the forward actions for that skill, so a standalone list would only repeat them.
- **Update the benchmarks line** with the newly completed module and its result.
- **Claim a level change only where the module worked directly on that skill.** Where progress stayed within a band, say so — *Competent (improved)* is more credible than an unearned promotion.
- **Every Evidence cell needs something checkable**: a mark, a named artefact, or a specific piece of feedback.

Row structure:

```html
<tr>
    <td><strong>Skill name</strong></td>
    <td>Module start level</td>
    <td><span class="skill-rating">Module end level</span></td>
    <td>Specific evidence — marks, artefacts, feedback.</td>
    <td>What this means for the next module and for professional practice.</td>
</tr>
```

**Scale:** Developing → Competent → Proficient.

**The nine skills** (fixed by the Numerical Analysis reflection brief): Time management, Critical thinking & analysis, Communication & literacy, IT & digital, Numeracy, Research, Interpersonal, Problem-solving, Ethical awareness.

---

## 7. Adding Files to `assets/documents/` {#add-files}

**Naming:** `ModulePrefix_Assessment_Component.ext`, no spaces.

| Prefix | Module |
|---|---|
| `LiC_` | Launch into Computing |
| `UAI_` | Understanding Artificial Intelligence |
| `NA_` | Numerical Analysis |

Examples: `NA_EMA1_Statistical_Analysis_Slides.pdf`, `UAI_CLD2_Summary_Post.pdf`, `LiC_PartB_Video_Presentation.mp4`

**Convert Word and PowerPoint files to PDF** before adding them — PDFs render in the browser, while `.docx` and `.pptx` force a download.

**Video:** compress before adding. GitHub rejects any single file over 100MB, and video already committed stays in the repository history permanently even if deleted later. Keep recordings well under 50MB.

---

## 8. Publishing Changes {#publishing}

GitHub credentials are stored on this machine (Git Credential Manager), so pushing needs no login.

```bash
cd "C:\Users\annes\Tanky0.github.io"
git add .
git commit -m "Describe what changed"
git push origin main
```

GitHub Pages rebuilds within a minute or two. If the live site still shows the old version, wait and hard-refresh (Ctrl+F5) — that is CDN caching, not a failed push.

**Before pushing, check** that every `download-link` filename matches the file in `assets/documents/` exactly, including capitalisation. A broken link is the most common mistake and the least visible.

To edit small things without a terminal, use the pencil icon on any file at github.com/Tanky0/Tanky0.github.io.

---

## 9. Troubleshooting {#troubleshooting}

| Problem | Cause and fix |
|---|---|
| Changes not appearing | GitHub Pages caching. Wait two minutes, then Ctrl+F5. Confirm the push landed with `git log origin/main -1`. |
| PDF link 404s | Filename mismatch. Filenames are case-sensitive on GitHub Pages even though Windows treats them as equivalent locally. |
| Layout broken | An unclosed tag. Check every `<div>`, `<section>` and `<table>` has its closing partner. |
| Table runs off-screen on mobile | The table needs wrapping in `<div class="table-scroll"> ... </div>`. |
| `could not read Username` on push | Credentials missing. Run the push from a normal terminal window so the GitHub sign-in can open. |
| Links broken on `about.html` | It sits at the repository root, so its paths must be `index.html` and `assets/...`, never `../index.html`. |

---

## File Locations

| Item | Path |
|---|---|
| Homepage | `index.html` |
| About Me + skills matrix | `about.html` |
| Module pages | `modules/[module-name].html` |
| Documents and media | `assets/documents/` |
| Assignment template | `TEMPLATE_Assignment.html` |
| Quick reference | `QUICK_REFERENCE.md` |

---

*Last updated: July 2026*
