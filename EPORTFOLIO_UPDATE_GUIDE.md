# ePortfolio Update Guide

Step-by-step instructions for updating the ePortfolio as each module of the MSc progresses.

Live site: **https://tanky0.github.io**
Repository: **https://github.com/Tanky0/Tanky0.github.io**

## Table of Contents
1. [How the Site is Built](#how-built)
2. [Page Structure](#structure)
3. [Naming Other People](#naming)
4. [Starting a New Module](#start-module)
5. [Adding an Assignment](#add-assignment)
6. [Adding a Grade and Feedback](#add-grade-feedback)
7. [Completing a Module](#complete-module)
8. [Updating the Skills Matrix](#skills-matrix)
9. [Adding Files to `assets/documents/`](#add-files)
10. [Publishing Changes](#publishing)
11. [Getting References Right](#references)
12. [Troubleshooting](#troubleshooting)

---

## 1. How the Site is Built {#how-built}

All eleven pages share **one stylesheet** and **one script**:

| File | Purpose |
|---|---|
| `assets/css/site.css` | The entire design system: colours, type, layout, components, light and dark themes |
| `assets/js/site.js` | Theme toggle, reading progress, mobile menu, scroll reveals, and the section navigation on long pages |

**Never add a `<style>` block or a `style="..."` attribute to a page.** If something needs to look different, add or adjust a class in `site.css` so every page benefits. The pages used to carry eleven separate copies of the CSS, which is exactly how they drifted out of step with each other.

### Design system in brief

- **Type**: Newsreader (serif) for headings, IBM Plex Sans for body text, IBM Plex Mono for metadata — deadlines, tutor names, statuses, grades, table headers.
- **Colour**: warm paper ground with a muted moss accent. Both themes are defined as CSS custom properties at the top of `site.css`; changing a value there changes it everywhere.
- **Dark mode** follows the visitor's system setting, with a toggle in the top bar that remembers their choice.
- **Motion** is deliberately restrained and switches off entirely for visitors who set `prefers-reduced-motion`.

### Where a component style already exists

`.reflist` styles a reference list as hanging-indent paragraphs. It lives in `site.css` and is used two ways: as a whole section (`<section class="content-section reflist">`) and as a block inside an assignment box (`<div class="reflist">`).

It carries a second, more specific selector for its `h4`, because `.assignment-box h4` sets the display font later in the file and would otherwise win. If you promote another page-local style into `site.css` and it stops working, check for exactly this: equal specificity, decided by source order.

### The page skeleton

Every page has the same `<head>` and the same chrome above `<main>`. When creating a new page, copy an existing one and replace what sits inside `<main>`. Note the path prefix: pages in `modules/` use `../assets/...`, pages at the root use `assets/...`.

### The section navigation is automatic

On any page with three or more `<h2>` headings inside `.content-section` blocks, the script builds a sticky index on the right and highlights the current section as you scroll. Add a section and it appears by itself — there is nothing to maintain.

---

## 2. Page Structure {#structure}

Module pages use these sections, in this order. Only Module Overview and Assignments are required.

| Section | When to include it |
|---|---|
| **Module Overview** | Always. Description, aims, learning outcomes, skills to be gained. Add the result box when the module finishes. |
| **Assignments** | Always. One `assignment-box` per assessment. |
| **e-Portfolio Activities** | Where the module sets assessed portfolio activities separately from the assignments (Intelligent Agents). |
| **Outcomes from the Team Exercises** | Team-assessed modules only (Intelligent Agents, Machine Learning). A named component in its own right &mdash; **not** the same as the assessed team project report. |
| **Summary of Learning Outcomes** | Where the brief lists it. A table: each outcome, how it was met, the evidence. |
| **Artefacts Mapped to Learning Outcomes** | Where artefacts must be shown against the outcomes. Include a brief description of each and any feedback received. |
| **Reflective Piece** | **Only where a reflective piece was actually produced.** Do not add an empty one. |
| **Team Meeting Notes** | Team-assessed modules only. Covers both team meetings and tutor meetings. |
| **Peer and Tutor Feedback** | Where the module requires it as a distinct portfolio component. |
| **Professional Skills Matrix and Action Plan (PDP)** | A short box linking to About Me. Never the matrix itself — see [section 8](#skills-matrix). |

Order the professional-development sections as the brief lists them: summary of learning outcomes, meeting notes, peer and tutor feedback, then the PDP.

Sections that are **not** part of the structure: a general "Meeting Notes" section on modules without team assessment, and a per-module copy of the skills matrix.

Induction is the exception to all of the above: Module Overview and Assignment only.

**Modules not yet started stay a light guide, not a build.** A planned module page carries its learning outcomes, its skills list and the e-portfolio components it expects &mdash; nothing more. Only the module currently in progress is built out to its brief with sections and placeholders. Building future modules early creates sections that go stale before you reach them.

### Large activities get their own page

Where an e-portfolio activity produces more than a couple of paragraphs &mdash; a full collaborative discussion, a coded artefact &mdash; give it a page of its own in `modules/` and leave a summary plus a link in the `assignment-box` on the module page. It keeps the module page readable and gives the artefact its own section index.

Naming: `ia-cd1-agent-based-systems.html`, `ia-unit06-agent-dialogues.html`. Module prefix, unit or activity, short slug.

Where the activity has two strands that a reader could conflate, say so explicitly at the top. Collaborative discussions are the obvious case: replies *you* wrote on other students' threads are a different thing from replies *others* wrote on yours, and the summary post answers only the second.

### Check the module's own brief

Each module publishes its required e-portfolio components. Build the page from that list rather than copying the previous module — they differ. Intelligent Agents and Machine Learning require team exercise outcomes and team meeting notes; Knowledge Representation and Research Methods do not.

### The reflective piece is graded against a published rubric

The department publishes the criteria, and the top band (*Reflective Review*) needs more than description: analysis of the choices made, multiple perspectives on them, critique of the artefacts produced, engagement with and critique of literature, and an action plan that follows from it. It is also the only component with a strict word limit. Keep reflective notes weekly as the module runs — a contemporaneous account reads very differently from one reconstructed at the end.

### Before submitting a module e-portfolio

The department requires you to create a **branch** for the module section being submitted and to configure the GitHub Pages source accordingly. Do a dry run well before the deadline rather than on the night.

---

## 3. Naming Other People {#naming}

**This site is public and indexed. Classmates are identified by initials, never by name.**

That applies everywhere a fellow student appears: forum posts reproduced as evidence, team logs, meeting notes and reflections. Use initials inside the reproduced text too, not only in the surrounding commentary &mdash; a post that names someone in its body is still naming them.

| Who | How they appear |
|---|---|
| Me | Full name |
| Module tutors | Full name and title. They are named staff and the tutor is part of the record |
| Published authors in references | Normal Harvard form |
| **Fellow students** | **Initials only**, e.g. `A.B.`, `L.M.F.` |

**Do not republish another student's work.** The UoEO referencing guide (p. 39, *Self and peer referencing*) says to check with your tutor before citing another student's assignment. Summarising their argument in your own words and crediting them by initials avoids the question entirely, and reads better. Do not carry their reference lists across either &mdash; those are sources you have not read.

**Keep one initial per person across the whole site.** The same classmate can appear in a team log, a discussion artefact and a reflection. Before adding a new set, grep for what is already in use:

```bash
grep -rno "\b\([A-Z]\.\)\{2,\}" --include=*.html .
```

If two different people would collide on the same initials, disambiguate with a middle initial rather than inventing a label.

---

## 4. Starting a New Module {#start-module}

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
3. Replace the placeholder description with the real one.

Cards are ordered to follow the sequence actually studied, not the generic programme order. Move the card if the order changes.

**On `modules/[module-name].html`:**

1. Update the masthead:
   ```html
   <p class="eyebrow">In Progress</p>
   <h1>Module Name</h1>
   <p class="lede">Tutor: Dr Jane Smith &middot; January 2026 B</p>
   ```
   The eyebrow carries the status; the lede carries tutor and intake.
2. Replace the Module Overview placeholder with the description, the aims and learning outcomes as published, and the skills listed for the module.

---

## 5. Adding an Assignment {#add-assignment}

Copy the block from `TEMPLATE_Assignment.html` into the Assignments section and fill it in:

```html
<div class="assignment-box">
    <h3>Assignment title as it appears in the brief</h3>
    <p class="deadline"><strong>Unit 6</strong> &middot; Deadline: 23:55, Monday 7 September 2026</p>
    <p><strong>Brief Description:</strong> What the brief asked for.</p>
    <p><strong>Submission:</strong> What you produced and the decisions behind it.</p>
    <p><span class="status-badge status-pending">Status: Not yet submitted</span></p>
    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank" rel="noopener noreferrer">View Assignment Output (PDF)</a>
</div>
```

Add one `download-link` per artefact, labelling each where there are several:

```html
<a href="../assets/documents/LiC_PartB_Presentation_Slides.pdf" class="download-link" target="_blank" rel="noopener noreferrer">Part B: Slides (PDF)</a>
<a href="../assets/documents/LiC_PartB_Presentation_Transcript.pdf" class="download-link" target="_blank" rel="noopener noreferrer">Part B: Transcript (PDF)</a>
<a href="../assets/documents/LiC_PartB_Video_Presentation.mp4" class="download-link" target="_blank" rel="noopener noreferrer">Part B: Video Presentation (MP4)</a>
```

---

## 6. Adding a Grade and Feedback {#add-grade-feedback}

Swap the pending badge for the result and add the feedback beneath it:

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

## 7. Completing a Module {#complete-module}

**Step 1 — Update the status.** On `index.html`:

```html
<span class="module-status status-completed">Completed</span>
<span class="module-grade">Module result: 87% (Distinction)</span>
```

On the module page, the eyebrow becomes `Completed` and the lede gains the intake.

**Step 2 — Add the result box** at the end of Module Overview:

```html
<div class="module-result">
    <strong>Module result: 87% (Distinction)</strong><br>
    Assignment 1: 97% &middot; Assignment 2: 92% &middot; End of Module Assignment: 82%
</div>
```

**Step 3 — Add the Reflective Piece, if there was one.**

*Where the module was assessed by a reflective piece*, don't retype it — link the submitted document:

```html
<section class="content-section">
    <h2>Reflective Piece</h2>
    <p>[One paragraph: what it covers, and what it was awarded. If it contains a skills matrix,
       note that this is reproduced on the <a href="../about.html#skills-matrix">About Me</a> page.]</p>

    <a href="../assets/documents/FILENAME.pdf" class="download-link" target="_blank" rel="noopener noreferrer">Read the Reflective Piece (PDF)</a>
</section>
```

*Where a reflective piece was set but written on the page*, use What? / So What? / What Next?:

- **What?** — factual description of the module, its assessments and what was produced.
- **So What?** — interpretation. What shifted, what assumption was challenged, what the feedback exposed. Anchor claims to specific evidence.
- **What Next?** — concrete, checkable actions. Not intentions.

*Where the module did not include a reflective piece*, **leave the section out entirely.** An empty or invented reflection is worse than none: Launch into Computing and Understanding Artificial Intelligence have no Reflective Piece section for exactly this reason.

**Step 4 — Update the skills matrix** on `about.html`. See below.

---

## 8. Updating the Skills Matrix {#skills-matrix}

The Professional Skills Matrix lives in **one place only**: `about.html`, in the section with `id="skills-matrix"`. It is never duplicated onto a module page. Where a module requires a PDP as a portfolio component, add a short box linking to it:

```html
<section class="content-section">
    <h2>Professional Skills Matrix and Action Plan (PDP)</h2>
    <div class="assignment-box">
        <h3>Maintained on the About Me page</h3>
        <p>[One or two sentences explaining that it is kept as a single current record.]</p>
        <a href="../about.html#skills-matrix" class="download-link">View the Professional Skills Matrix and Action Plan</a>
    </div>
</section>
```

Rules for the matrix itself:

- **Show only the current version.** Replace the table on module completion rather than adding a second one.
- **No separate Action Plan section.** The *Action plan (PDP)* column carries the forward actions per skill.
- **The *Progress against the plan* column** records how each action is going during the module in progress. While a module is young, "Not yet evidenced" plus where it will be tested is the honest entry — write nothing you cannot point to.
- **Update the benchmarks line** with each newly completed module and its result.
- **Claim a level change only where the module worked directly on that skill.** *Competent (improved)* is more credible than an unearned promotion.
- **Every Evidence cell needs something checkable**: a mark, a named artefact, a specific piece of feedback.

Row structure:

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

**Scale:** Developing → Competent → Proficient.

**The nine skills** (fixed by the reflection brief): Time management, Critical thinking & analysis, Communication & literacy, IT & digital, Numeracy, Research, Interpersonal, Problem-solving, Ethical awareness.

Wrap every table in `<div class="table-scroll"> ... </div>` so it scrolls on a phone instead of breaking the page.

---

## 9. Adding Files to `assets/documents/` {#add-files}

**Naming:** `ModulePrefix_Assessment_Component.ext`, no spaces.

| Prefix | Module |
|---|---|
| `LiC_` | Launch into Computing |
| `UAI_` | Understanding Artificial Intelligence |
| `NA_` | Numerical Analysis |
| `IA_` | Intelligent Agents |

Examples: `NA_EMA1_Statistical_Analysis_Slides.pdf`, `UAI_CLD2_Summary_Post.pdf`, `LiC_PartB_Video_Presentation.mp4`

**Convert Word and PowerPoint to PDF** before adding them — PDFs render in the browser, `.docx` and `.pptx` force a download.

**Video:** compress first. GitHub rejects any single file over 100MB, and video already committed stays in the repository history permanently even if deleted later. Keep recordings well under 50MB.

---

## 10. Publishing Changes {#publishing}

GitHub credentials are stored on this machine (Git Credential Manager), so pushing needs no login.

```bash
cd "C:\Users\annes\Tanky0.github.io"
git add .
git commit -m "Describe what changed"
git push origin main
```

GitHub Pages rebuilds within a minute or two. If the live site still shows the old version, wait and hard-refresh (Ctrl+F5) — that is CDN caching, not a failed push.

**Before pushing, check** that every `download-link` filename matches the file in `assets/documents/` exactly, including capitalisation.

To edit small things without a terminal, use the pencil icon on any file at github.com/Tanky0/Tanky0.github.io.

---

## 11. Getting References Right {#references}

**Check the source, not the reading list.** The Intelligent Agents reading list was wrong three separate times: Wooldridge's place of publication (it says New York; the book's copyright page says Chichester), Pollack's first initial (Michael, where the paper says Martha), and Russell and Norvig's year (2021, where the copy actually held is the 2022 Global Edition). Open the title and copyright pages of the edition you used and read the details off them.

**Cite the version you consulted.** A Global Edition is a different publication from the US edition, and page numbers belong to it. Year and page must come from the same copy.

**E-books read through the module.** Use the VitalSource form: `Author (Year) *Title*. Edition. Place: Publisher. Available via the VitalSource Bookshelf (Accessed: DD Month YYYY).`

**Preprints.** The UoEO guide has no arXiv template, so follow Cite Them Right: the repository goes in the URL, not in the journal position. `Author (Year) 'Title' [Preprint]. Available at: URL (Accessed: date).`

**When a reference is corrected after posting**, say so on the page rather than changing it silently. A short note is worth more than a clean-looking list.

---
## 12. Troubleshooting {#troubleshooting}

| Problem | Cause and fix |
|---|---|
| Changes not appearing | GitHub Pages caching. Wait two minutes, then Ctrl+F5. Confirm the push landed with `git log origin/main -1`. |
| A page looks unstyled | The stylesheet link is wrong or missing. Root pages need `assets/css/site.css`; pages in `modules/` need `../assets/css/site.css`. |
| Fonts look wrong | The Google Fonts `<link>` is missing from `<head>`. Copy the three font lines from any working page. |
| Link preview on LinkedIn is blank | The page is missing its Open Graph tags. Copy the `og:` block from any existing page and update title, description and URL. |
| Section index missing | It only appears with three or more `<h2>` sections, and only on screens wider than about 1180px. Both are intentional. |
| PDF link 404s | Filename mismatch. Filenames are case-sensitive on GitHub Pages even though Windows ignores case. |
| Layout broken | An unclosed tag. Check every `<div>`, `<section>` and `<table>` has its closing partner. |
| Table runs off-screen on mobile | It needs wrapping in `<div class="table-scroll"> ... </div>`. |
| Dark mode looks wrong on new content | A hard-coded colour somewhere. Use the CSS variables (`var(--ink)`, `var(--accent)`) rather than hex values. |
| `could not read Username` on push | Run the push from a normal terminal window so the GitHub sign-in can open. |
| Links broken on `about.html` | It sits at the repository root, so its paths must be `index.html` and `assets/...`, never `../index.html`. |

---

## File Locations

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
| Assignment template | `TEMPLATE_Assignment.html` |
| Module completion template | `TEMPLATE_Module_Completion.html` |
| Quick reference | `QUICK_REFERENCE.md` |

---

*Last updated: August 2026*
