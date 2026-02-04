# ePortfolio Update Guide

This guide provides step-by-step instructions for updating your ePortfolio as you progress through your MSc programme.

## Table of Contents
1. [How to Remove Sections from Induction Module Only](#remove-induction-sections)
2. [How to Update Module Information](#update-module-info)
3. [How to Add a New Assignment](#add-assignment)
4. [How to Add Grade and Feedback](#add-grade-feedback)
5. [How to Complete a Module (Add Reflective Piece + Skills Matrix)](#complete-module)
6. [How to Update Meeting Notes](#update-meetings)
7. [How to Upload Files to GitHub](#upload-files)

---

## 1. How to Remove Sections from Induction Module Only {#remove-induction-sections}

The Induction module should NOT have the following sections:
- Reflective Piece (already completed)
- Meeting Notes (not applicable)
- Professional Skills Matrix and Action Plan (not applicable)

**Steps to remove these sections from Induction:**

1. Open `modules/induction.html` in your text editor
2. Find the section that starts with `<!-- Reflective Piece -->`
3. Delete everything from `<!-- Reflective Piece -->` through to the end of that `</section>` tag
4. Find the section that starts with `<!-- Meeting Notes -->`
5. Delete everything from `<!-- Meeting Notes -->` through to the end of that `</section>` tag
6. Find the section that starts with `<!-- Professional Skills Matrix -->`
7. Delete everything from `<!-- Professional Skills Matrix -->` through to the end of that `</section>` tag
8. Save the file

**What to delete specifically:**
```html
<!-- Delete this entire block for Reflective Piece -->
<section class="content-section">
    <h2>Reflective Piece</h2>
    ...
</section>

<!-- Delete this entire block for Meeting Notes -->
<section class="content-section">
    <h2>Meeting Notes</h2>
    ...
</section>

<!-- Delete this entire block for Professional Skills Matrix -->
<section class="content-section">
    <h2>Professional Skills Matrix and Action Plan</h2>
    ...
</section>
```

**Note:** Keep the Reflective Piece, Meeting Notes, and Professional Skills Matrix sections in ALL other modules.

---

## 2. How to Update Module Information {#update-module-info}

When you get information about a module (tutor name, dates, etc.), here's how to update it:

### Update Module Name
1. Open the module file (e.g., `modules/understanding-ai.html`)
2. Find the `<header>` section
3. Update the `<h1>` tag with the correct module name
4. Update the page `<title>` tag at the top

### Update Tutor Name
1. In the same file, find the `<header>` section
2. Find the `<p>` tag that says `Tutor: [Name]`
3. Replace `[Name]` with the tutor's name
4. Example: `<p>Tutor: Dr Jane Smith</p>`

### Update Module Status (on Homepage)
1. Open `index.html`
2. Find the module card for your module
3. Update the status badge:
   ```html
   <!-- Change from: -->
   <span class="module-status status-planned">Planned</span>
   
   <!-- To one of these: -->
   <span class="module-status status-in-progress">In Progress</span>
   <span class="module-status status-completed">Completed</span>
   ```

### Update Module Description
1. In the module file, find the `<!-- Module Overview -->` section
2. Update the paragraph text to reflect what you actually learned
3. Keep it professional and factual

---

## 3. How to Add a New Assignment {#add-assignment}

**Step 1: Prepare your assignment PDF**
1. Save your assignment as a PDF
2. Name it descriptively (e.g., `UnderstandingAI_Assignment1_2025-11-15.pdf`)
3. Upload it to the `assets/documents/` folder in GitHub

**Step 2: Add assignment to module page**
1. Open `TEMPLATE_Assignment.html` and copy the entire template
2. Open your module file (e.g., `modules/understanding-ai.html`)
3. Find the `<!-- Assignments -->` section
4. Paste the template inside the `<section class="content-section">` after the `<h2>Assignments</h2>` line
5. Replace all the [PLACEHOLDER] text:
   - `[ASSIGNMENT TITLE]`: Your assignment title
   - `[Write a brief description...]`: What the assignment asked you to do
   - `[Grade: XX%...]`: Your grade when you receive it (or remove this line if not yet graded)
   - `[Paste the feedback...]`: Tutor feedback (or "Feedback pending" if not received)
   - `[FILENAME]`: Must match your PDF filename exactly

**Example:**
```html
<div class="assignment-box">
    <h4>Understanding AI Fundamentals Essay</h4>
    <p><strong>Brief Description:</strong> A 1500-word essay examining the historical development of artificial intelligence and its current applications across various domains.</p>
    
    <span class="grade-badge">Grade: 75%</span>
    
    <p><strong>Feedback Received:</strong> Well-structured essay with good use of sources. Consider exploring more recent developments in deep learning.</p>
    
    <a href="../assets/documents/UnderstandingAI_Assignment1_2025-11-15.pdf" class="download-link" target="_blank">View Assignment Output (PDF)</a>
</div>
```

---

## 4. How to Add Grade and Feedback {#add-grade-feedback}

When you receive a grade and feedback for a submitted assignment:

1. Open the module file containing the assignment
2. Find the assignment box you want to update
3. Update the grade badge:
   ```html
   <!-- Change from: -->
   <span class="status-badge status-submitted">Status: Submitted - Awaiting Feedback</span>
   
   <!-- To: -->
   <span class="grade-badge">Grade: 75%</span>
   <!-- OR -->
   <span class="grade-badge">Grade: Pass</span>
   <!-- OR -->
   <span class="grade-badge">Grade: Merit</span>
   <!-- OR -->
   <span class="grade-badge">Grade: Distinction</span>
   ```

4. Update the feedback section:
   ```html
   <!-- Change from: -->
   <p><strong>Feedback Received:</strong> Feedback pending.</p>
   
   <!-- To: -->
   <p><strong>Feedback Received:</strong> [Paste your actual feedback here]</p>
   ```

---

## 5. How to Complete a Module {#complete-module}

When you finish a module, you need to add:
- Reflective Piece (What? So What? What Next?)
- Professional Skills Matrix
- Action Plan

**Step 1: Use the Module Completion Template**
1. Open `TEMPLATE_Module_Completion.html`
2. Copy the entire content
3. Open your module file
4. Find the placeholder sections for Reflective Piece and Professional Skills Matrix

**Step 2: Replace Reflective Piece**
1. Delete the placeholder Reflective Piece section
2. Paste the Reflective Piece from the template
3. Fill in the three sections (What? So What? What Next?)
4. Use the framework:
   - **What?** Describe what happened (factual)
   - **So What?** Interpret the meaning (analysis)
   - **What Next?** Plan forward actions (outcomes)

**Step 3: Replace Professional Skills Matrix**
1. Delete the placeholder Professional Skills Matrix section
2. Paste the Professional Skills Matrix from the template
3. Base your skills on the module's learning outcomes
4. For each skill, fill in:
   - **Competency**: Technical, Professional, Legal/Ethical, Social, or Subject Application
   - **Essex Graduate**: The graduate attribute it relates to
   - **Skill**: Copy from the module learning outcomes
   - **Skill Level**: Aware, Trained, Proficient, or Expert
   - **Evidence**: Specific examples from your work/studies

**Skill Level Guide:**
- **Aware**: General understanding and basic knowledge
- **Trained**: Able to apply knowledge, can work independently under certain conditions
- **Proficient**: Broad and in-depth knowledge, can work independently with very little supervision
- **Expert**: Seen as a subject matter expert, able to lead and train others

**Step 4: Fill in Action Plan**
1. Set immediate actions for the next module
2. Set medium-term goals for 2-3 modules ahead
3. Set programme-level goals for overall development
4. Be specific and measurable

---

## 6. How to Update Meeting Notes {#update-meetings}

When you have meetings (team meetings, tutor consultations, etc.):

1. Open the module file
2. Find the `<!-- Meeting Notes -->` section
3. Replace the placeholder with actual meeting notes
4. Format like this:

```html
<section class="content-section">
    <h2>Meeting Notes</h2>
    
    <h3>Meeting with Tutor - [Date]</h3>
    <p><strong>Attendees:</strong> [Names]</p>
    <p><strong>Topics Discussed:</strong></p>
    <ul>
        <li>[Topic 1]</li>
        <li>[Topic 2]</li>
    </ul>
    <p><strong>Actions:</strong></p>
    <ul>
        <li>[Action 1]</li>
        <li>[Action 2]</li>
    </ul>
    
    <h3>Team Meeting - [Date]</h3>
    <p><strong>Attendees:</strong> [Names]</p>
    <p><strong>Topics Discussed:</strong></p>
    <ul>
        <li>[Topic 1]</li>
    </ul>
</section>
```

---

## 7. How to Upload Files to GitHub {#upload-files}

### Method 1: Through GitHub Website (Easier)
1. Go to https://github.com/Tanky0/Tanky0.github.io
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (Edit this file)
4. Make your changes
5. Scroll down to "Commit changes"
6. Add a commit message (e.g., "Update assignment grade")
7. Click "Commit changes"

### Method 2: Upload New Files
1. Go to your repository on GitHub
2. Navigate to the folder where you want to upload (e.g., `assets/documents/`)
3. Click "Add file" → "Upload files"
4. Drag and drop your PDF files
5. Add a commit message
6. Click "Commit changes"

### Method 3: Using Git Command Line (Advanced)
```bash
# Download repository
git clone https://github.com/Tanky0/Tanky0.github.io.git
cd Tanky0.github.io

# Make your changes to files
# Add new files if needed

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

---

## Quick Reference: File Locations

- **Module pages**: `modules/[module-name].html`
- **Homepage**: `index.html`
- **About page**: `about.html`
- **Assignment PDFs**: `assets/documents/`
- **Templates**: 
  - `TEMPLATE_Assignment.html` (for adding assignments)
  - `TEMPLATE_Module_Completion.html` (for completing modules)

---

## Common Issues and Solutions

**Issue**: Changes don't appear on website
- **Solution**: Wait 1-2 minutes for GitHub Pages to rebuild. Clear browser cache.

**Issue**: PDF link doesn't work
- **Solution**: Check that the filename in the HTML exactly matches the PDF filename (case-sensitive!)

**Issue**: Layout looks broken
- **Solution**: Make sure you didn't accidentally delete any HTML tags. Check that every `<div>` has a matching `</div>`.

**Issue**: Can't find the section to edit
- **Solution**: Use Ctrl+F (or Cmd+F) to search for keywords in the HTML file.

---

## Need Help?

If you get stuck:
1. Check that you've followed the steps exactly
2. Make sure all filenames match exactly (case-sensitive)
3. Verify all HTML tags are properly closed
4. Check the GitHub Pages build status in your repository settings

---

*Last updated: November 2025*
