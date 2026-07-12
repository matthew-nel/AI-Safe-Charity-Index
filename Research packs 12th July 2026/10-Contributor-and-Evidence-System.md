---
title: Contributor and Evidence System
description: Design for a GitHub-based contributor and evidence system for the AI Safe Use Playbook for UK charities.
research_date: 2026-07-13
last_updated: 2026-07-13
suggested_review_date: 2027-01-13
jurisdiction: United Kingdom
audience: All UK charity sizes
status: Research pack
---

# Contributor and Evidence System

## Executive summary

Open, evidence-led guidance requires a structured contributor system and clear standards for sources, uncertainty and change control.[web:245][web:255] This pack designs a GitHub-based contributor and evidence model for the AI Safe Use Playbook for UK charities, including contribution guidelines, evidence-quality levels, source templates, page review checklists, correction processes, conflict-of-interest declarations, vendor rules, product-comparison update methods, scheduled reviews and accessibility/plain-English checks.

The proposed evidence-rating model distinguishes legislation and regulator guidance from vendor documentation and anecdotal claims, recognising that vendor docs are essential for tool details but not independent evidence of product effectiveness or safety.[web:243][web:252] Each knowledge-base page must record ownership, research author, reviewer, evidence levels, uncertainties and a change log, with statuses such as Draft, Research complete, Under review, Reviewed, Needs update, Superseded and Archived.[web:255][web:248]

## Scope

This pack covers:

- Contribution process for research and updates.
- Evidence-quality guide and rating model.
- Source submission template and evidence assessment form.
- Page review checklist and scheduled review process.
- Correction and challenge process.
- Conflict-of-interest declaration.
- Vendor contribution rules.
- Product-comparison update process.
- Citation standards.
- Accessibility and plain-English review.
- Legal and specialist review flags.

It is designed for a public GitHub repository hosting Markdown research packs, guidance pages and templates.[web:245][web:255]

## Method

### Source identification

- GitHub open-source contribution guidelines and community practices.[web:245][web:248][web:255][web:257]
- Evidence-hierarchy literature and levels-of-evidence models.[web:243][web:247][web:252][web:256]
- Charity and AI governance resources emphasising evidence-led decisions.[web:51][web:231]

### Evidence hierarchy adaptation

The model adapts clinical and social-science evidence hierarchies to the charity AI context, distinguishing law, regulator guidance, vendor documentation and anecdotal claims.[web:243][web:247][web:252]

## Evidence-quality model

### Levels

- **Level A – Legislation and statutory regulators**: UK Acts (e.g. UK GDPR, Data Protection Act 2018, Equality Act 2010) and statutory regulator publications (ICO, Charity Commission, Fundraising Regulator, NCSC).[web:51][web:211]
- **Level B – Official government and public-body guidance**: Departmental guidance, parliamentary research notes, NHS or local-government policy applicable to charities by analogy.[web:84][web:91]
- **Level C – Peer-reviewed academic research**: Published, peer-reviewed studies and reviews relevant to AI, safeguarding, data protection and governance.[web:243][web:247][web:254]
- **Level D – Established charity-sector research**: Reports and surveys from NCVO, Charity Excellence, Charity Digital, Blackbaud, CIOF and similar.[web:65][web:4][web:197]
- **Level E – Official vendor documentation**: Trust centres, DPAs, security docs and product manuals; essential for tool features but not independent evidence of safety or effectiveness.[web:128][web:143][web:160][web:193]
- **Level F – Credible professional analysis**: Law-firm articles, governance consultancies, AI advisory blogs.[web:196][web:201]
- **Level G – Documented organisational examples**: Case studies and policies from charities or public bodies.[web:225][web:105][web:224]
- **Level H – Reputable media reporting**: Journalism from recognised outlets.[web:207]
- **Level I – Anecdotal or unverified claims**: Blog posts, forums, social media or vendor marketing without independent corroboration.[web:257]

### Limitations of vendor documentation

Vendor documentation (Level E) is vital for contractual terms, retention and training policies, but should not be treated as Level A–D evidence for claims that a product is “safe”, “ethical” or “bias-free”.[web:243][web:252] Product marketing must be critically assessed and cross-checked against independent research and regulator guidance.[web:211][web:212]

---

## Contributor workflow

### How to contribute research

1. Fork the repository on GitHub.[web:245]
2. Create a feature branch (e.g. `feature/pack-04-update`).
3. Add or edit Markdown files in `packs/` or relevant directories.
4. Ensure citations use the agreed inline format and evidence levels are recorded.
5. Open a pull request linking to issues or research notes.

### Contributor guidelines (CONTRIBUTING.md excerpt)

```markdown
# Contributing to the AI Safe Use Playbook

We welcome evidence-led contributions from charity practitioners, researchers and technologists.

## Ground rules

- Be kind and thoughtful; this is a cross-sector community.[web:248]
- Separate facts, interpretation and recommendations.
- Do not add vendor marketing claims without independent evidence.
- Do not reproduce copyrighted text; summarise in your own words.

## What we accept

- Research packs and evidence updates.
- New documented examples with sources.
- Corrections and challenges with supporting evidence.

## What we do not accept

- Unsourced claims about product features or incidents.
- Promotional content for vendors.
- Legal advice.
```

---

## Source submission template

### Purpose

To standardise how new sources are proposed and recorded.[web:243][web:245]

### Template

```markdown
# New Source Submission

**Contributor:**
**Date submitted:**

## Source details

- Organisation or author:
- Title:
- Date:
- Last updated:
- Jurisdiction:
- Source type (e.g. legislation, regulator guidance, academic, vendor doc):
- Evidence level (A–I):

## URL and access

- Direct URL:
- Date accessed:

## Relevance

- How does this source inform charity AI safety or governance?

## Limitations

- Known limitations, bias or gaps.
```

---

## Evidence assessment form

### Purpose

To record judgement on source reliability and how it should be used.[web:243][web:252]

### Template

```markdown
# Evidence Assessment

**Source ID:**
**Reviewer:**
**Date:**

## Summary

- Key findings.

## Evidence level and quality

- Level (A–I).
- Strengths (e.g. methodology, scope).
- Weaknesses (e.g. small sample, vendor-sponsored).

## Use in playbook

- Sections/packs where it will be cited.
- Whether it supports, challenges or refines existing guidance.
```

---

## Page review checklist

### Purpose

To ensure pages remain accurate, proportionate and accessible.[web:255]

### Template

```markdown
# Page Review Checklist

**Page:**
**Reviewer:**
**Date:**

## Evidence and citations

- Are all key claims cited with up-to-date sources?
- Are evidence levels recorded?

## Legal and regulatory alignment

- Are legal requirements distinguished from good practice?[web:51]

## Proportionate guidance

- Are recommendations sized for different charity capacities?

## Accessibility and language

- Is language plain-English and inclusive?
- Are headings and tables clear?

## Status update

- Status: Draft / Research complete / Under review / Reviewed / Needs update / Superseded / Archived.
- Next review date.
```

---

## Correction and challenge process

### Purpose

To allow users to challenge content and request corrections.

### Template

```markdown
# Correction Request

**Requester:**
**Date:**

## Page and section

- Page name and section.

## Issue

- What is wrong or unclear?

## Evidence

- What evidence supports your correction?

## Proposed change

- Suggested wording or approach.
```

Pull requests referencing this template should be labelled `correction` and reviewed by maintainers with relevant expertise.

---

## Conflict-of-interest disclosure

### Purpose

To manage vendor, consultancy or other interests that could bias contributions.[web:257]

### Template

```markdown
# Conflict-of-Interest Disclosure

**Contributor:**
**Date:**

## Relationships

- Current employment or consultancy roles.
- Financial interests in AI vendors or tools.

## Scope

- Pages or topics where conflicts may arise.

## Mitigation

- Steps to mitigate (e.g. limiting contributions to certain sections).
```

---

## Vendor contribution rules

### Principles

- Vendors may suggest corrections to factual statements about their products (e.g. retention, training policies) but not write core guidance.[web:128][web:160][web:193]
- Vendor PRs must include links to official documentation and be clearly labelled.[web:255]

### Template (README excerpt)

```markdown
## Vendor Contributions

We welcome factual corrections from vendors about their own products where supported by official documentation.

We do not accept:
- Marketing language about "safe" or "ethical" AI without independent evidence.
- Attempts to downplay known risks or remove critical analysis.
```

---

## Product-comparison update process

### Purpose

To keep tool matrices and comparisons up to date.[web:128][web:143][web:160]

### Steps

1. Create an issue describing the proposed update (e.g. “Update 06-AI-Tool-Controls-Matrix for new Copilot retention docs”).
2. Collect official vendor sources and record them in the source library.
3. Update tables and note date checked.
4. Mark changes in change log.

---

## Scheduled review process

### Purpose

To ensure periodic updates across all packs.

### Approach

- Each pack records `suggested_review_date` in YAML.
- A GitHub issue or project board tracks upcoming reviews.

### Template

```markdown
# Scheduled Review Entry

**Page:**
**Next review date:**
**Reviewer:**
**Scope:** (e.g. new regulator guidance, tool updates)
```

---

## Citation standards

### Requirements

- Inline citations with organisation, title and URL.[web:245]
- Direct links to supporting sources (not search pages).
- Evidence level recorded in source library.

### Template (per-page footer note)

```markdown
This page uses inline citations; see 12-Full-Source-Library.md for full source details and evidence levels.
```

---

## Accessibility and plain-English review

### Purpose

To make content usable for charity staff and trustees.[web:226]

### Checklist

- Avoid jargon or explain it on first use.
- Use short sentences and clear headings.
- Ensure tables and lists are scannable.

---

## Legal and specialist review flags

### Purpose

To mark content that needs or has received specialist review.

### Template (per page)

```markdown
## Review flags

- Legal review needed? (Yes/No; notes)
- Safeguarding review needed? (Yes/No; notes)
- Data-protection review needed? (Yes/No; notes)
- Cybersecurity review needed? (Yes/No; notes)
```

## Page metadata requirements

Each page must record:

- Page owner.
- Research author.
- Reviewer(s).
- Last reviewed and next review date.
- Jurisdiction.
- Evidence level(s) relied on.
- Known uncertainties.
- Change log.
- Status.

### Example metadata block (in Markdown)

```markdown
**Page owner:** Digital Lead
**Research author:** Contributor Name
**Reviewer:** DPO; Safeguarding Lead
**Last reviewed:** 2026-07-13
**Next review date:** 2027-01-13
**Jurisdiction:** United Kingdom
**Evidence levels:** A, B, C, D, E
**Known uncertainties:** Limited charity-specific incident data.
**Status:** Reviewed
```

## Sources

- GitHub contribution and guidelines documentation.[web:245][web:248][web:255][web:257]
- Evidence-hierarchy literature and introductory documents.[web:243][web:247][web:252][web:256]
- Charity and AI governance guidance stressing evidence and transparency.[web:51][web:231]
- Vendor trust and documentation pages referenced in tool matrices.[web:128][web:143][web:160][web:193]
