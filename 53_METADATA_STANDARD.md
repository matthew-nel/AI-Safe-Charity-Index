# AI Safe Use Knowledge Base for UK Charities
# 53_METADATA_STANDARD.md

**Version:** 1.0.0  
**Status:** Website and Publishing Standard  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

---

# Purpose

This document defines the metadata standard for all public pages, templates, research outputs, releases and evidence records in the AI Safe Use Knowledge Base for UK Charities.

Metadata helps the project:

- organise content
- power navigation
- improve search
- track review dates
- connect pages to evidence
- support versioning
- identify audiences
- identify charity-size relevance
- identify risk level
- support automation
- support future APIs and dashboards

Metadata should be useful, consistent and maintainable.

---

# Core Principle

> **Every important page should explain what it is, who it is for, how risky the topic is, when it was reviewed and which evidence supports it.**

---

# Metadata Format

Use YAML frontmatter at the top of Markdown files.

Example:

```yaml
---
title: "Can I upload meeting notes to AI?"
description: "A practical guide for UK charities deciding whether meeting notes are safe to use with AI tools."
section: "charity-workflows"
subsection: "meetings"
page_type: "workflow"
audience:
  - staff
  - managers
charity_size:
  - small
  - medium
risk_level: "amber"
status: "current"
version: "1.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-10-01"
evidence_level: "high"
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags:
  - meetings
  - personal-data
  - transcription
related_pages:
  - "/before-you-paste/"
  - "/ai-and-data-protection/personal-data/"
source_ids:
  - "ICO-AI-001"
claim_ids:
  - "CLAIM-0042"
feedback_enabled: true
---
```

---

# Required Fields

Every substantive public page should include:

- `title`
- `description`
- `section`
- `page_type`
- `audience`
- `charity_size`
- `risk_level`
- `status`
- `version`
- `last_reviewed`
- `next_review`
- `evidence_level`
- `owner`
- `maintainer`
- `tags`
- `source_ids`
- `claim_ids`

---

# Optional Fields

Use where relevant:

- `subsection`
- `summary`
- `featured`
- `priority`
- `review_frequency`
- `related_pages`
- `related_templates`
- `download_url`
- `research_status`
- `accessibility_reviewed`
- `accessibility_review_date`
- `known_accessibility_issues`
- `contributors`
- `supersedes`
- `superseded_by`
- `deprecated_date`
- `archive_date`
- `feedback_enabled`
- `translation_status`
- `jurisdiction`
- `tool_name`
- `tool_plan`
- `tool_account_type`
- `release_id`
- `research_id`

---

# Field Definitions

## title

The public page title.

Rules:

- plain English
- specific
- useful out of context
- no internal numbering
- no unnecessary punctuation

Good:

```yaml
title: "Can volunteers use ChatGPT?"
```

Poor:

```yaml
title: "AI Use Case 4"
```

## description

A short summary used in:

- search results
- page listings
- social previews
- metadata

Recommended length:

- approximately 120 to 180 characters

## section

The top-level site section.

Allowed values:

```text
start-here
before-you-paste
ai-and-data-protection
charity-workflows
governance
tools
templates
learning-paths
research-and-community
evidence
updates
large-and-complex-charities
about
```

## subsection

The second-level category.

Examples:

```text
meetings
fundraising
communications
trustees
personal-data
```

## page_type

Allowed values:

```text
guidance
workflow
explainer
tool-review
template
research
release
faq
glossary
policy
governance
landing-page
about
contact
standard
```

## audience

Allowed values may include:

```text
staff
managers
trustees
volunteers
fundraisers
communications
service-delivery
hr
digital
data-protection
safeguarding
researchers
developers
contributors
```

A page may have multiple audiences.

## charity_size

Allowed values:

```text
micro
small
medium
large
complex
all
```

Use `small` and `medium` wherever the guidance is primarily designed for those audiences.

## risk_level

Allowed values:

```text
green
amber
red
mixed
not-applicable
```

Use `mixed` when the page includes multiple scenarios.

## status

Allowed values:

```text
draft
in-review
current
review-due
deprecated
archived
withdrawn
```

Only `current` content should appear as normal public guidance.

## version

Use semantic-style page versioning.

Example:

```yaml
version: "1.2.0"
```

## last_reviewed

Use ISO format:

```yaml
last_reviewed: "2026-07-12"
```

## next_review

Use ISO format:

```yaml
next_review: "2026-10-01"
```

## review_frequency

Allowed values:

```text
monthly
quarterly
six-monthly
annual
event-driven
```

## evidence_level

Allowed values:

```text
high
moderate
low
unverified
not-applicable
```

## owner

The person accountable for the page.

Current default:

```yaml
owner: "Matthew James Nel"
```

## maintainer

The person responsible for keeping the page current.

Current default:

```yaml
maintainer: "Matthew James Nel"
```

## tags

Use lowercase, hyphenated terms.

Examples:

```yaml
tags:
  - safeguarding
  - meeting-notes
  - personal-data
```

Avoid excessive tags.

Recommended:

- three to eight tags

## source_ids

List Source IDs supporting the page.

Example:

```yaml
source_ids:
  - "ICO-AI-001"
  - "CHARITY-COMMISSION-AI-001"
```

## claim_ids

List important Claim IDs used on the page.

Example:

```yaml
claim_ids:
  - "CLAIM-0007"
  - "CLAIM-0042"
```

---

# Metadata by Page Type

## Guidance Page

Required:

- title
- description
- audience
- charity_size
- risk_level
- version
- review dates
- source_ids
- claim_ids

## Workflow Page

Also include:

- subsection
- department or workflow tag
- related_templates
- escalation route where relevant

## Tool Review

Also include:

- tool_name
- tool_plan
- tool_account_type
- review_frequency
- jurisdiction where relevant

## Template

Also include:

- template_type
- download_url
- related_guidance
- version
- review date

## Research Page

Also include:

- research_id
- research_status
- methodology link
- publication date
- sample information
- limitations

## Release Page

Also include:

- release_id
- release_date
- release_type
- previous_version
- next_version

---

# Standard Frontmatter Templates

## Guidance

```yaml
---
title: ""
description: ""
section: ""
page_type: "guidance"
audience: []
charity_size: []
risk_level: ""
status: "draft"
version: "0.1.0"
last_reviewed: ""
next_review: ""
review_frequency: "quarterly"
evidence_level: ""
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags: []
related_pages: []
source_ids: []
claim_ids: []
feedback_enabled: true
---
```

## Tool Review

```yaml
---
title: ""
description: ""
section: "tools"
page_type: "tool-review"
tool_name: ""
tool_plan: ""
tool_account_type: ""
audience:
  - staff
  - managers
charity_size:
  - small
  - medium
risk_level: "mixed"
status: "draft"
version: "0.1.0"
last_reviewed: ""
next_review: ""
review_frequency: "monthly"
evidence_level: "moderate"
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags: []
source_ids: []
claim_ids: []
feedback_enabled: true
---
```

## Research

```yaml
---
title: ""
description: ""
section: "research-and-community"
page_type: "research"
research_id: ""
research_status: "draft"
audience:
  - all
charity_size:
  - all
risk_level: "not-applicable"
status: "draft"
version: "0.1.0"
last_reviewed: ""
next_review: ""
evidence_level: "moderate"
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags: []
source_ids: []
claim_ids: []
feedback_enabled: true
---
```

---

# Review-Date Rules

## Monthly Review

Use for:

- major AI tool guides
- provider privacy pages
- Regulatory Watchlist
- current releases

## Quarterly Review

Use for:

- GDPR guidance
- safeguarding guidance
- core templates
- trustee guidance
- workflows
- metadata standards

## Annual Review

Use for:

- about pages
- broad glossary content
- long-term strategy pages

## Event-Driven Review

Use when:

- legislation changes
- regulator guidance changes
- a provider changes data use
- a serious incident occurs
- a page is reported as unsafe
- a tool is withdrawn

---

# Expired Review Dates

When `next_review` passes:

- change status to `review-due`
- flag the page in the review queue
- show a public notice where appropriate
- avoid silently treating the page as current
- prioritise high-risk pages

---

# Risk-Level Rules

Do not label a whole tool as Green, Amber or Red.

Risk should describe:

- the use case
- the data
- the context
- the controls

Use `mixed` for tool overview pages.

---

# Evidence-Level Rules

## High

Use when:

- current primary authority exists
- strong evidence directly supports the page
- multiple reliable sources agree

## Moderate

Use when:

- evidence is reliable but incomplete
- practice is evolving
- provider information is current but independent evidence is limited

## Low

Use when:

- evidence is sparse
- guidance is largely interpretive
- only supporting practice examples exist

## Unverified

Use when:

- the claim is not yet checked
- the source is missing
- the information may be outdated

Unverified pages should not be published as normal current guidance.

---

# Metadata Validation

Validation should check:

- required fields exist
- allowed values are used
- dates use ISO format
- version format is valid
- Source IDs exist
- Claim IDs exist
- status is valid
- review dates are logical
- title is not duplicated
- URLs are stable
- deprecated pages name a replacement where relevant

---

# Automation

Metadata should support:

- automatic sidebars
- search indexing
- review dashboards
- stale-page reports
- tool-review lists
- learning paths
- charity-size filters
- release pages
- source and claim validation

---

# Central Vocabulary

Maintain allowed metadata values in one configuration file.

Example:

```yaml
allowed:
  page_types:
    - guidance
    - workflow
    - explainer
    - tool-review
    - template
    - research
    - release
    - faq
    - glossary
    - policy
    - governance
    - landing-page
    - about
    - contact
    - standard

  risk_levels:
    - green
    - amber
    - red
    - mixed
    - not-applicable

  statuses:
    - draft
    - in-review
    - current
    - review-due
    - deprecated
    - archived
    - withdrawn
```

---

# Metadata and Accessibility

Metadata should not create accessibility barriers.

Do not expose raw metadata values to users without readable labels.

Example:

Display:

> Last reviewed: 12 July 2026

Not:

> last_reviewed: 2026-07-12

---

# Metadata and Search

Search may use:

- title
- description
- tags
- audience
- charity_size
- tool_name
- section
- subsection

Do not allow weak or inaccurate tags to distort search results.

---

# Metadata Governance

Changes to allowed values should be:

- documented
- versioned
- validated
- reflected in scripts
- reflected in navigation
- reflected in search

Do not create new metadata fields casually.

---

# Metadata Change Checklist

Before adding or changing a field:

- [ ] The user or maintenance need is clear.
- [ ] Existing fields were reviewed.
- [ ] The field has a defined format.
- [ ] Allowed values are documented.
- [ ] Validation is updated.
- [ ] Search impact is reviewed.
- [ ] Navigation impact is reviewed.
- [ ] Migration of existing pages is planned.
- [ ] Release notes explain the change.

---

# Monthly Metadata Review

Review:

- missing fields
- invalid values
- overdue reviews
- orphaned Source IDs
- orphaned Claim IDs
- duplicate titles
- inconsistent tags
- stale tool plans
- deprecated pages without replacements

---

# Quarterly Metadata Review

Review:

- whether fields remain useful
- whether automation uses them
- whether vocabulary is too complex
- whether pages are consistently classified
- whether new audience or charity-size values are needed

---

# Claude Prompt

Use:

```text
Review the metadata across the AI Safe Use Knowledge Base for UK Charities.

Check:

- required fields
- allowed values
- dates
- versions
- statuses
- review frequency
- audience
- charity size
- risk level
- evidence level
- Source IDs
- Claim IDs
- tags
- related pages
- ownership

Produce:

1. Missing metadata.
2. Invalid metadata.
3. Expired review dates.
4. Duplicate titles.
5. Orphaned Source IDs.
6. Orphaned Claim IDs.
7. Inconsistent tags.
8. Recommended fixes.
9. Pages requiring status changes.
10. Complete corrected frontmatter where needed.

Do not change metadata fields without documenting the reason.
```

---

# Success Criteria

The metadata standard succeeds when:

- every important page can be classified consistently
- review dates are visible and actionable
- evidence can be traced
- search results improve
- navigation can be generated reliably
- stale content can be identified
- future automation remains possible
- the system stays understandable to human maintainers
