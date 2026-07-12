# AI Safe Use Knowledge Base for UK Charities
# 54_LINKING_STANDARD.md

**Version:** 1.0.0  
**Status:** Website and Editorial Standard  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

---

# Purpose

This document defines how links should be created, reviewed and maintained across the AI Safe Use Knowledge Base for UK Charities.

Good linking helps users:

- move from a quick answer to deeper guidance
- find practical next steps
- understand related risks
- reach templates and tools
- verify evidence
- report problems
- navigate without technical knowledge

The core principle is:

> **Every link should help the reader make progress.**

---

# Linking Goals

Links should:

- be useful
- be descriptive
- be accessible
- remain stable
- support evidence traceability
- avoid unnecessary duplication
- reduce dead ends
- connect overview pages to detail
- connect guidance to templates
- connect claims to sources
- connect updates to affected pages

---

# Link Types

The project uses several link types.

## Internal Guidance Links

Links between public guidance pages.

Examples:

- Before You Paste
- Personal data
- Trustee guidance
- AI policy template

## Related Workflow Links

Links connecting one practical task to another.

Example:

A meeting-notes page may link to:

- personal data
- transcription tools
- safeguarding
- output review

## Template Links

Links from guidance to downloadable or reusable resources.

Examples:

- AI policy template
- Approved-tools register
- AI-use register
- Output-review checklist

## Evidence Links

Links to external sources supporting public guidance.

Examples:

- ICO
- Charity Commission
- official provider documentation
- charity-sector reports

## Source and Claim Links

Links or identifiers connecting pages to:

- Source Register
- Claim Register
- evidence notes

## Navigation Links

Links used in:

- primary navigation
- sidebars
- breadcrumbs
- previous and next controls
- footer

## Feedback Links

Links used to:

- report an error
- flag outdated guidance
- suggest a topic
- join research
- contact the project

## Release Links

Links connecting:

- changelog entries
- release notes
- pull requests
- affected pages
- archived versions

---

# Link Text Standard

Link text should describe the destination.

Good:

- Read the personal data guide
- Download the AI policy template
- See the latest release notes
- Review the safeguarding guidance
- Report outdated information

Avoid:

- Click here
- Read more
- More
- This page
- Link
- Here

Link text should make sense when read out of context.

---

# Internal Link Format

Use root-relative links where supported.

Examples:

```md
[Read the Before You Paste guide](/before-you-paste/)
[See the personal data guidance](/ai-and-data-protection/personal-data/)
[Download the AI policy template](/templates/ai-policy-template/)
```

Avoid hard-coding the full production domain for internal links.

This makes:

- local development easier
- preview builds more reliable
- domain changes safer
- link validation simpler

---

# Relative Links

Use relative links only where they improve maintainability and are supported by the framework.

Good use:

```md
[Next page](./personal-data.md)
```

Prefer root-relative links for long-term public navigation because they are easier to read and validate.

---

# External Link Standard

External links should:

- use the canonical source URL
- point to the most authoritative page
- avoid search-result links
- avoid tracking parameters where possible
- open in the same tab unless there is a strong reason not to
- include meaningful link text
- be reviewed regularly

Good:

```md
[Read the ICO guidance on AI and data protection](https://ico.org.uk/...)
```

Avoid:

```md
[ICO](https://www.google.com/search?q=ico+ai)
```

---

# Source-Link Priority

When several sources say the same thing, prefer:

1. legislation
2. regulator
3. government
4. official provider documentation
5. trusted charity-sector body
6. academic or professional source
7. supporting practice example

Do not link to a commentary article when the primary source is available.

---

# Link to the Specific Evidence

Link to the most specific relevant page.

Prefer:

- exact ICO guidance page
- exact Charity Commission article
- exact provider privacy documentation
- exact report PDF
- exact research publication

Avoid linking only to:

- organisation homepage
- generic resource hub
- unrelated summary page

---

# Source Attribution

External evidence links should appear in:

- a Sources section
- inline where the claim needs immediate support
- page metadata through Source IDs
- release notes where the evidence changed

Do not overload every sentence with links.

Use links where they support important claims or next steps.

---

# Source IDs and Public Links

Internal Source IDs should remain stable.

Example:

```yaml
source_ids:
  - "ICO-AI-001"
```

The public page should show a readable source name and link.

Do not expose only the Source ID to users.

---

# Claim Links

Important claims should connect to Claim IDs in metadata.

Example:

```yaml
claim_ids:
  - "CLAIM-0042"
```

Where a public claim register is available, the claim may link to its public record.

---

# Related Guidance

Every substantive page should include a small Related Guidance section.

Recommended:

- two to five links
- most useful next steps
- no duplicate destinations
- no unrelated links

Example:

```md
## Related guidance

- [Before You Paste](/before-you-paste/)
- [Personal data and AI](/ai-and-data-protection/personal-data/)
- [Safeguarding guidance](/charity-workflows/safeguarding/)
```

---

# Related Templates

Where a template is relevant, link to it close to the action it supports.

Example:

> Before approving a new tool, use the [AI tool assessment template](/templates/tool-assessment/).

Do not bury important templates only in the footer.

---

# Learning Path Links

Learning paths should link to existing guidance rather than duplicate it.

Example:

```text
Trustee learning path
  ↓
AI basics
  ↓
Trustee guidance
  ↓
Risk appetite
  ↓
AI policy
  ↓
Quarterly review
```

---

# Breadcrumb Links

Breadcrumbs should:

- show the page hierarchy
- use readable labels
- link to parent pages
- avoid exposing filenames
- remain concise

Example:

```text
Home
› Everyday Charity Work
› Meetings
› Can I upload meeting notes?
```

---

# Previous and Next Links

Use previous and next links where there is a clear sequence.

Good uses:

- learning paths
- step-by-step guides
- multi-page templates
- onboarding journeys

Avoid forcing a sequence where users may enter from search or another page.

---

# Footer Links

The footer should include stable project links:

- About the Project
- About the Creator
- Contact
- Privacy
- Accessibility
- Contributing
- Code of Conduct
- Governance
- Changelog
- Roadmap
- GitHub
- LinkedIn

Do not overload the footer with every content page.

---

# Feedback Links

Every substantive page should provide one clear route to:

- report an error
- flag outdated guidance
- suggest an improvement
- join research

Where possible, feedback links should carry:

- page title
- page URL
- page version
- last-reviewed date

---

# Contact Links

Use central configuration for:

- contact forms
- research survey
- accessibility feedback
- corrections
- security contact
- newsletter
- GitHub

Do not hard-code the same URL across dozens of pages.

---

# Link Titles

Do not rely on HTML title attributes to explain links.

Important information must appear in visible link text.

---

# Opening Links in New Tabs

Default:

- open in the same tab

Use a new tab only where:

- the user is completing a form alongside the guidance
- a downloadable resource opens separately
- there is a strong usability reason

If a link opens a new tab, inform the user where practical.

---

# Download Links

Download links should:

- say what the file is
- include file type where useful
- include file size where useful
- use a meaningful filename
- provide an accessible alternative

Good:

- Download the AI policy template as a Word document
- Download the staff rules checklist as a PDF

Avoid:

- Download
- File
- Click here

---

# File Naming

Use clear filenames.

Good:

```text
ai-policy-template.docx
before-you-paste-checklist.pdf
trustee-ai-briefing.md
```

Avoid:

```text
final2.docx
document.pdf
new-template.docx
```

---

# Anchor Links

Use anchor links for long pages.

Rules:

- headings should remain stable
- anchor labels should be readable
- avoid duplicate headings
- test anchor links after title changes

Do not rely on deep anchors where a stable page-level link is sufficient.

---

# Redirects

When a URL changes:

1. create a redirect
2. update internal links
3. update navigation
4. update search index
5. record the change
6. preserve the old URL where possible

Do not delete a published URL without a redirect unless the content must be removed for safety or privacy.

---

# Broken Links

Broken links should be classified.

## Critical

- core safety guidance unavailable
- correction form broken
- privacy page broken
- download required for a core process unavailable

## High

- regulator or evidence link broken
- key template unavailable
- navigation link broken

## Medium

- related-page link broken
- older release link unavailable

## Low

- optional supporting link broken

---

# External-Link Decay

External links may change.

Mitigation:

- review critical links monthly
- review other links quarterly
- prefer stable canonical URLs
- record source title and organisation
- archive important source summaries
- preserve Source IDs
- update links without changing source identity where appropriate

---

# Archived Sources

If a source is withdrawn:

- mark it as archived
- record the original title and publisher
- link to an archive where lawful and reliable
- explain that it is no longer current
- identify replacement guidance

Do not continue presenting an archived source as current authority.

---

# Link Validation

Automated validation should check:

- internal links
- missing pages
- invalid anchors
- external HTTP errors
- duplicate redirects
- orphaned pages
- download paths
- configuration links

External link failures may be temporary.

Do not automatically remove a source after one failed check.

---

# Orphaned Pages

An orphaned page has no meaningful inbound links.

Every public page should be linked from at least one of:

- navigation
- landing page
- related guidance
- learning path
- search
- release notes

Review orphaned pages monthly.

---

# Dead-End Pages

A dead-end page gives no useful next action.

Every substantive page should include:

- related guidance
- template
- deeper explanation
- feedback
- return to section

---

# Duplicate Links

Avoid repeating the same destination several times in one small section.

Repeated links can create noise for screen-reader users and reduce clarity.

---

# Accessibility

Links should:

- be visually distinguishable
- have visible focus
- work with keyboard
- have descriptive text
- not rely on colour alone
- avoid ambiguous repeated labels
- use sufficiently large touch targets

---

# Mobile Linking

On mobile:

- avoid tightly packed links
- make tap targets large
- prevent links being covered by sticky elements
- keep related-link lists short
- avoid long unbroken URLs

---

# Link and Citation Separation

A link helps the user move.

A citation shows the basis for a claim.

Some links do both, but not every navigation link is a citation.

Do not describe a general related-page link as evidence.

---

# Affiliate Links

If affiliate links are introduced:

- disclose them clearly
- keep them outside core safety ratings
- do not use affiliate tracking on regulator or evidence links
- do not rank tools based on commission
- provide a non-affiliate option where practical
- document the relationship

Affiliate links must not appear disguised as neutral evidence.

---

# Sponsored Links

Sponsored links should:

- be clearly labelled
- remain separate from evidence
- not influence editorial conclusions
- not appear inside regulator summaries
- not replace the primary source

---

# Privacy and Tracking

Avoid unnecessary tracking parameters.

Do not include personal identifiers in feedback or form URLs unless necessary and disclosed.

Use privacy-conscious analytics.

---

# Link Governance

Linking changes may affect:

- navigation
- search
- evidence traceability
- accessibility
- SEO
- user trust

Material changes should be included in release notes where they alter user journeys or evidence.

---

# Monthly Link Review

Review:

- broken internal links
- broken external links
- core source URLs
- feedback routes
- downloads
- orphaned pages
- dead ends
- redirects
- high-risk pages

---

# Quarterly Link Review

Review:

- external source quality
- duplicate links
- related-guidance patterns
- footer links
- navigation links
- learning paths
- affiliate or commercial disclosures
- archived sources

---

# Linking Checklist

Before publishing:

- [ ] Link text is descriptive.
- [ ] Internal links use the agreed format.
- [ ] External links point to canonical sources.
- [ ] Important claims link to evidence.
- [ ] Source IDs exist.
- [ ] Claim IDs exist.
- [ ] Related guidance is included.
- [ ] Relevant templates are linked.
- [ ] Feedback link works.
- [ ] Download names are meaningful.
- [ ] New URLs are stable.
- [ ] Redirects exist where required.
- [ ] Anchors work.
- [ ] Links are keyboard accessible.
- [ ] Links are usable on mobile.
- [ ] No unnecessary tracking parameters exist.
- [ ] Commercial links are disclosed.

---

# Claude Prompt

Use:

```text
Review the links in the selected page or release.

Check:

- internal links
- external links
- canonical sources
- Source IDs
- Claim IDs
- anchors
- redirects
- related guidance
- template links
- feedback links
- downloads
- accessibility
- commercial disclosure

Identify:

1. Broken links.
2. Weak or vague link text.
3. Links to secondary sources where a primary source exists.
4. Missing related guidance.
5. Missing template links.
6. Orphaned pages.
7. Dead-end pages.
8. Redirects required.
9. Tracking or privacy concerns.
10. Exact recommended fixes.

Do not invent URLs.
Do not replace authoritative sources with commentary.
```

---

# Success Criteria

The linking standard succeeds when:

- users always know where a link leads
- important claims connect to reliable evidence
- pages do not become dead ends
- core journeys remain easy to follow
- external-link changes are managed transparently
- accessibility is preserved
- commercial links remain separate from evidence
- the site can grow without creating link chaos
