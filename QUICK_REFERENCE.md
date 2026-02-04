# ePortfolio Quick Reference

## Assignment Template - Quick Copy

```html
<div class="assignment-box">
    <h4>[ASSIGNMENT TITLE]</h4>
    <p><strong>Brief Description:</strong> [Description]</p>
    <span class="grade-badge">Grade: [XX%]</span>
    <p><strong>Feedback Received:</strong> [Feedback]</p>
    <a href="../assets/documents/[FILENAME].pdf" class="download-link" target="_blank">View Assignment Output (PDF)</a>
</div>
```

## Grade Badges

```html
<!-- Percentage -->
<span class="grade-badge">Grade: 75%</span>

<!-- Pass/Merit/Distinction -->
<span class="grade-badge">Grade: Pass</span>
<span class="grade-badge">Grade: Merit</span>
<span class="grade-badge">Grade: Distinction</span>

<!-- Awaiting feedback -->
<span class="status-badge status-submitted">Status: Submitted - Awaiting Feedback</span>
```

## Module Status Badges (for index.html)

```html
<span class="module-status status-completed">Completed</span>
<span class="module-status status-in-progress">In Progress</span>
<span class="module-status status-planned">Planned</span>
```

## Skill Levels

- **Aware**: General understanding and basic knowledge
- **Trained**: Can apply knowledge, work independently under certain conditions
- **Proficient**: Broad knowledge, work independently with little supervision
- **Expert**: Subject matter expert, can lead and train others

## Competency Categories

- **Technical**: Computing and technical skills
- **Professional**: Communication, literacy, research, time management
- **Legal and Ethical**: Ethical awareness, professional conduct, compliance
- **Social**: Teamwork, leadership, cultural awareness
- **Subject Application**: Decision making, initiative, emotional intelligence

## Essex Graduate Attributes (Common)

- Subject understanding, research, critical thinking
- Literacy, communication, language skills
- IT and digital, numeracy
- Teamwork, leadership, resilience
- Ethical awareness, professional conduct
- Decision making, initiative, problem solving
- Cultural awareness, global citizen
- Creativity, entrepreneurial, innovation
- Time management

## File Paths Reference

| Item | Path |
|------|------|
| Module pages | `modules/[module-name].html` |
| Homepage | `index.html` |
| About page | `about.html` |
| Assignment PDFs | `assets/documents/` |
| Assignment template | `TEMPLATE_Assignment.html` |
| Module completion template | `TEMPLATE_Module_Completion.html` |
| Update guide | `EPORTFOLIO_UPDATE_GUIDE.md` |

## Common File Names Pattern

Assignment PDFs should follow this pattern:
- `ModuleName_AssignmentType_YYYY-MM-DD.pdf`
- Examples:
  - `UnderstandingAI_Essay_2025-12-15.pdf`
  - `MachineLearning_CollaborativeDiscussion_2026-01-20.pdf`
  - `NumericalAnalysis_EndOfModule_2026-02-10.pdf`
