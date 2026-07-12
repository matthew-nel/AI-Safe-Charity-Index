# AI Safe Use Knowledge Base for UK Charities
## Source Register

**Version:** 1.0.0  
**Status:** Living Register  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** Monthly

# Purpose

This document is the master index of evidence used by the AI Safe Use Knowledge Base for UK Charities.

It should record every important source added to the Claude Project, reviewed for the public knowledge base or used to support a material claim.

The source register helps the project:

- trace public guidance back to evidence
- avoid duplicate sources
- identify outdated material
- compare conflicting evidence
- manage monthly reviews
- record source quality
- identify copyright or access limits
- show which public pages depend on which sources

# Core Rule

> No material public claim should rely on a source that is not recorded here or in the structured source register used by the repository.

# Source ID Format

Use durable source IDs.

Recommended pattern:

```text
ORGANISATION-TOPIC-### 
```

Examples:

```text
ICO-AI-001
ICO-DPIA-001
CHARITY-COMMISSION-AI-001
NCVO-AI-001
CHARITY-DIGITAL-SKILLS-001
ANTHROPIC-PRIVACY-001
OPENAI-BUSINESS-DATA-001
BOOK-RESPONSIBLE-AI-001
SURVEY-CHARITY-AI-2026-Q3
```

Do not change a source ID after it has been used in published content.

# Required Fields

Every source record should include:

- Source ID
- Title
- Organisation or author
- URL
- File name
- Publication date
- Last updated date
- Date accessed
- Jurisdiction
- Source type
- Evidence tier
- Status
- Topics
- Summary
- Key claims
- Limitations
- Affected pages
- Supersedes
- Superseded by
- Next review date
- Copyright or licence notes
- Internal notes

# Source Types

Use one of:

- Legislation
- Regulator guidance
- Government guidance
- Charity-sector guidance
- Provider documentation
- Academic research
- Professional report
- Book
- Policy example
- Template
- Survey
- Interview synthesis
- Case study
- Research note
- Website page
- Release note
- Other

# Evidence Tiers

## Tier 1 — Primary Authority

Examples:

- ICO
- legislation
- UK Government
- Charity Commission
- official provider documentation

## Tier 2 — Trusted Charity Sector

Examples:

- NCVO
- SCVO
- Charity Digital
- CAST
- DataKind UK
- recognised sector bodies

## Tier 3 — Academic and Professional

Examples:

- peer-reviewed research
- universities
- recognised legal or data-protection specialists
- professional bodies

## Tier 4 — Supporting Practice

Examples:

- public charity policies
- case studies
- consultancy reports
- conference material
- expert commentary

## Tier 5 — Discovery Only

Examples:

- unsourced blogs
- social posts
- marketing claims
- search-result snippets
- informal commentary

Tier 5 may help identify a topic, but should not support important public claims without verification.

# Source Statuses

Use one of:

- Current
- Current but awaiting review
- Needs verification
- Partially superseded
- Superseded
- Archived
- Conflicting evidence
- Draft source
- Do not cite

# Master Source Table

Use this table for the human-readable register.

| Source ID | Title | Organisation / Author | Date | Type | Tier | Status | Topics | Affected Pages | Next Review |
|---|---|---|---|---|---|---|---|---|---|
| ICO-AI-001 | Artificial intelligence and data protection | Information Commissioner's Office | Current | Regulator guidance | 1 | Current | AI, GDPR, accountability | AI and GDPR overview, Before You Paste | Monthly |
| CHARITY-COMMISSION-AI-001 | Charities and Artificial Intelligence | Charity Commission | 2024 | Regulator guidance | 1 | Current | Trustees, risk, safeguarding | Trustee guidance, Governance | Quarterly |
| NCVO-AI-001 | How AI can help small charities | NCVO | 2024 | Charity-sector guidance | 2 | Current | Small charities, AI use | Start Here, Use cases | Quarterly |
| CHARITY-DIGITAL-SKILLS-001 | Charity Digital Skills Report 2025 | Charity Digital Skills | 2025 | Professional report | 2 | Current | Adoption, confidence, governance | Research and market evidence | Annual |
| ANTHROPIC-PRIVACY-001 | Claude privacy and data documentation | Anthropic | Current | Provider documentation | 1 | Current but awaiting review | Claude, privacy, retention | Claude guide, Tool reviews | Monthly |
| OPENAI-BUSINESS-DATA-001 | Business data and privacy documentation | OpenAI | Current | Provider documentation | 1 | Current but awaiting review | ChatGPT, privacy, training | ChatGPT guide, Tool reviews | Monthly |

This initial table is illustrative.

Every entry must be checked, completed and replaced with precise dates, URLs, source details and review status before public use.

# Full Source Record Template

Use the following template for detailed source notes.

```yaml
id:
title:
organisation:
author:
url:
file_name:
publication_date:
updated_date:
accessed_date:
jurisdiction:
source_type:
evidence_tier:
status:
topics:
summary:
key_claims:
limitations:
affected_pages:
supersedes:
superseded_by:
next_review:
copyright_notes:
internal_notes:
```

# Source Summary Template

Use:

```md
# Source Summary

## Source ID

## Title

## Organisation or Author

## Why This Source Matters

## Key Points

## Material Claims

## Charity Relevance

## Public Pages Affected

## Limitations

## Conflicts or Questions

## Review Date
```

# Source Intake Process

When a new source is added:

1. Search for an existing record.
2. Assign or confirm the source ID.
3. Record the required metadata.
4. Classify the evidence tier.
5. Record the source status.
6. Summarise the relevant content.
7. Extract material claims.
8. Record limitations.
9. Identify affected public pages.
10. Check whether it supersedes older material.
11. Set the next review date.
12. Add it to the register.
13. Add related claims to the claim register.
14. Do not publish changes until the impact is reviewed.

# Duplicate Handling

Before adding a new record, check:

- whether the same source already exists
- whether it is a new edition
- whether the URL changed
- whether a secondary article repeats a primary source
- whether the source is already stored under another filename

If a duplicate is found:

- keep the most useful current record
- link earlier editions
- preserve old source IDs where already published
- archive redundant copies

# Superseded Sources

When a source becomes outdated:

- change status to Partially superseded or Superseded
- record the replacement source
- identify affected claims
- identify affected pages
- schedule a content review
- do not silently remove the historic record

# Conflicting Evidence

When sources conflict:

- record each source
- compare evidence tiers
- compare jurisdiction
- compare dates
- compare scope
- record the disagreement
- mark the claim as Conflicting evidence
- seek specialist review where needed
- explain uncertainty publicly where relevant

# Source Review Frequency

## Monthly

Review:

- ICO
- Charity Commission updates
- major provider documentation
- current online terms
- active survey findings
- urgent sources

## Quarterly

Review:

- NCVO
- Charity Digital
- CAST
- DataKind UK
- safeguarding bodies
- tool reviews
- major templates

## Annually

Review:

- books
- older academic sources
- long-term market evidence
- strategic sector reports
- historic policy examples

# Online Source Rules

For online sources:

- use the canonical URL
- record access date
- record last-updated date
- note if the content is dynamic
- archive or summarise important provider terms
- avoid search-result snippets
- recheck fast-changing pages regularly

# Book and Report Rules

For books and long reports:

- record edition and publication date
- identify relevant chapters
- summarise rather than reproduce
- verify legal claims against current primary sources
- note jurisdiction
- record copyright limits
- avoid using one author's opinion as settled evidence

# Research and Feedback Sources

Original research sources may include:

- aggregated survey findings
- anonymised interview themes
- usability research
- page feedback summaries
- GitHub issue patterns
- analytics summaries

Use clear IDs.

Examples:

```text
SURVEY-CHARITY-AI-2026-Q3
INTERVIEWS-SMALL-CHARITIES-2026-01
FEEDBACK-BEFORE-YOU-PASTE-2026-08
```

Do not place raw personal data in the public source register.

# Provider Documentation

Provider sources must specify:

- provider
- product
- plan
- feature
- region where relevant
- documentation reviewed
- access date
- next review date

Do not treat free, business and enterprise plans as interchangeable.

# Public Use

Public pages should reference source IDs where appropriate.

Example:

```yaml
source_ids:
  - ICO-AI-001
  - CHARITY-COMMISSION-AI-001
```

The public-facing source section should display clear names and links, not only internal IDs.

# Monthly Source Register Prompt

Use:

```text
Review all new and existing sources for the AI Safe Use Knowledge Base for UK Charities.

For each source:

1. Confirm whether a record exists.
2. Assign or preserve its source ID.
3. Complete all metadata.
4. Classify evidence tier and status.
5. Summarise the source.
6. Extract material claims.
7. Record limitations.
8. Identify affected public pages.
9. Identify superseded material.
10. Set or update the next review date.
11. Flag copyright, privacy or access issues.
12. Produce complete Source Register updates.

Do not remove source IDs already used in public content.
Do not classify commentary as primary authority.
Do not publish unsupported claims.
```

# Quality Checklist

Before accepting a source record, confirm:

- Is the source identifiable?
- Is the organisation or author clear?
- Is the date recorded?
- Is the jurisdiction clear?
- Is the evidence tier justified?
- Is the status current?
- Are limitations recorded?
- Are affected pages identified?
- Is the next review date set?
- Is copyright handled?
- Is there a duplicate?
- Does the source support the claims linked to it?

# Definition of Success

The Source Register succeeds when the project can:

- identify where every material claim came from
- distinguish current from outdated sources
- find duplicate or conflicting evidence
- review fast-changing sources on schedule
- update affected pages efficiently
- maintain a transparent evidence trail
- scale to hundreds or thousands of sources

The register should function as the evidence index for the entire knowledge system.
