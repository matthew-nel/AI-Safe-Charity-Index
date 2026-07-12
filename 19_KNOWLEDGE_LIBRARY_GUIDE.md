# AI Safe Use Knowledge Base for UK Charities
## Knowledge Library Guide

**Version:** 1.0.0  
**Status:** Foundation Document  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

# Purpose

This document defines how the Claude Project knowledge library should be organised, maintained and used.

The knowledge library is the research and editorial foundation behind the public GitHub knowledge base.

It should contain the evidence, context, research and operational knowledge Claude needs to:

- understand UK charities
- understand AI and data protection
- compare new and existing guidance
- identify outdated content
- draft new public pages
- update templates
- support monthly releases
- improve the knowledge base over time

The library should remain useful as it grows from dozens of files to hundreds or thousands of sources.

# Core Principle

> Add knowledge in a structured way so Claude can understand what it is, why it matters, how reliable it is and which public guidance it may affect.

# Role of the Knowledge Library

The knowledge library is used for:

- source analysis
- research synthesis
- charity-sector context
- evidence comparison
- monthly monitoring
- drafting
- editorial memory
- change detection
- release preparation
- long-term project learning

The library is not the public website.

The public GitHub repository remains the source of truth for current published guidance.

# Recommended Library Structure

Use the following logical structure.

```text
01_Project_Foundation/
02_Regulators_and_Government/
03_Charity_Sector/
04_Charity_Business_Knowledge/
05_AI_Providers/
06_Academic_and_Professional_Research/
07_Books_and_Longform/
08_Policies_and_Templates/
09_Research_and_Feedback/
10_Current_Website/
11_Monthly_Update_Packs/
12_Archive/
```

If the Claude interface does not support literal folders, use consistent filename prefixes and upload groups.

# Library Sections

## 01 Project Foundation

Contains:

- Project Instructions
- Product vision
- Audience pathways
- Editorial standards
- Evidence standards
- Information architecture
- Before You Paste framework
- Publishing workflow
- Versioning system
- Brand and tone documents
- Knowledge map
- Decision log

These files tell Claude how to work.

They should be reviewed before major changes to the project.

## 02 Regulators and Government

Contains authoritative UK sources.

Examples:

- Information Commissioner's Office
- Charity Commission
- UK Government
- legislation
- Fundraising Regulator
- Office of the Scottish Charity Regulator
- other relevant regulators

Use this section for:

- legal requirements
- regulatory guidance
- official interpretations
- formal responsibilities
- current public-sector standards

## 03 Charity Sector

Contains guidance and research from recognised charity-sector bodies.

Examples:

- NCVO
- SCVO
- WCVA
- NICVA
- Charity Digital
- CAST
- DataKind UK
- ACEVO
- Association of Chairs
- sector-specific networks
- recognised safeguarding organisations

Use this section for:

- practical charity context
- sector trends
- digital maturity
- governance practice
- training needs
- operational guidance
- case studies

## 04 Charity Business Knowledge

Contains broader knowledge about how charities operate.

Possible topics:

- governance
- trusteeship
- fundraising
- communications
- service delivery
- safeguarding
- volunteers
- finance
- HR
- partnerships
- commissioning
- digital strategy
- accessibility
- monitoring and evaluation
- research
- impact measurement
- data protection
- procurement

This section helps Claude avoid generic commercial advice.

## 05 AI Providers

Contains official documentation from AI and software providers.

Examples:

- Anthropic
- OpenAI
- Microsoft
- Google
- Notion
- Adobe
- Canva
- meeting transcription providers
- automation tools

Include:

- privacy documentation
- terms
- product documentation
- security information
- retention settings
- training-data statements
- business and enterprise controls
- data-processing documentation
- release notes

Provider documentation should be reviewed regularly because it changes quickly.

## 06 Academic and Professional Research

Contains:

- peer-reviewed research
- university reports
- professional guidance
- legal analysis
- data-protection research
- responsible AI research
- nonprofit technology research
- safeguarding research
- human-computer interaction research
- learning-design research

Use academic material to support deeper understanding.

Do not treat one paper as conclusive evidence without context.

## 07 Books and Longform

Contains:

- books
- permitted extracts
- reading notes
- chapter summaries
- professional manuals
- longform reports

For each book, record:

- title
- author
- publisher
- date
- edition
- relevant chapters
- summary
- useful concepts
- limitations
- copyright status

Do not reproduce copyrighted books or substantial extracts in public content.

## 08 Policies and Templates

Contains:

- public charity AI policies
- sector templates
- governance templates
- tool-assessment forms
- risk registers
- DPIA templates
- procurement guides
- trustee briefings
- staff guidance
- incident forms

Use these as comparative examples.

Do not copy them without permission.

Record what is useful, missing, outdated or unsuitable for small charities.

## 09 Research and Feedback

Contains controlled research outputs such as:

- aggregated survey findings
- anonymised interview summaries
- usability findings
- page feedback themes
- GitHub issue summaries
- analytics summaries
- open research questions
- insight registers
- content requests

Do not upload raw sensitive research data unless the storage arrangement is appropriate and access is controlled.

Do not place raw personal research data in public GitHub.

## 10 Current Website

Contains the latest exported or connected version of:

- current public Markdown
- current templates
- current release notes
- current navigation
- current glossary
- current tool reviews
- current metadata

This section allows Claude to compare new evidence with what is actually live.

It should be refreshed whenever major changes are published.

## 11 Monthly Update Packs

Each month should have a structured pack.

Example:

```text
2026-08_Monthly_Update_Pack/
```

Contents may include:

- new sources
- source intake summary
- charity feedback summary
- survey findings
- provider updates
- current review queue
- known issues
- previous release notes
- monthly update instructions

## 12 Archive

Contains:

- superseded sources
- obsolete provider documentation
- historic policies
- withdrawn guidance
- earlier versions of longform documents
- completed monthly packs
- old research summaries

Archive files should remain available for traceability but should not be treated as current.

# Accepted File Types

The library may include:

- Markdown
- PDF
- DOCX
- TXT
- CSV
- JSON
- HTML
- EPUB
- spreadsheets
- slide decks
- interview summaries
- research notes
- exported web pages
- structured source records

Prefer formats that Claude can search and interpret reliably.

Where a scanned or image-heavy PDF is difficult to read, create a structured summary or text version.

# Source Naming Standard

Use:

```text
ORGANISATION_YYYY-MM_SHORT-TITLE.TYPE
```

Examples:

```text
ICO_2026-07_AI-AND-DATA-PROTECTION.pdf
NCVO_2026-06_AI-AND-SMALL-CHARITIES.html
CHARITY-DIGITAL_2025_CHARITY-DIGITAL-SKILLS-REPORT.pdf
ANTHROPIC_2026-07_CLAUDE-PRIVACY-DOCUMENTATION.pdf
BOOK_2024_RESPONSIBLE-AI_READING-NOTES.md
SURVEY_2026-Q3_AGGREGATED-FINDINGS.csv
INTERVIEWS_2026-08_ANONYMISED-THEMES.md
WEBSITE_2026-08_CURRENT-CONTENT-EXPORT.zip
```

Avoid filenames such as:

- final.pdf
- new-document.pdf
- notes2.md
- latest.docx
- source.pdf

# Required Source Metadata

Every important source should have:

- source ID
- title
- organisation or author
- publication date
- updated date where available
- access date
- URL
- file name
- jurisdiction
- source type
- evidence tier
- status
- topic tags
- summary
- key claims
- limitations
- affected pages
- next review date

# Evidence Tiers

## Tier 1 — Primary Authority

Examples:

- ICO
- legislation
- government
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
- professional bodies
- recognised legal or data-protection specialists

## Tier 4 — Supporting Practice

Examples:

- case studies
- consultancy reports
- charity policies
- conference material
- expert commentary

## Tier 5 — Low Confidence or Discovery Only

Examples:

- unsourced blogs
- social posts
- generic opinion
- marketing claims
- search-result snippets

Tier 5 sources may help identify a topic, but they should not support material public claims without verification.

# Source Statuses

Use:

- Current
- Current but awaiting review
- Needs verification
- Partially superseded
- Superseded
- Archived
- Conflicting evidence
- Draft source
- Do not cite

# Source Intake Workflow

When a new source is added, Claude should:

1. Identify the source.
2. Assign a source ID.
3. Classify its evidence tier.
4. Record its jurisdiction.
5. Summarise its purpose.
6. Extract relevant claims.
7. Separate fact from commentary.
8. Record limitations.
9. Compare it with existing sources.
10. Identify whether it supersedes older material.
11. Identify affected pages.
12. Recommend a review date.
13. Add it to the source register.
14. Flag any copyright concerns.
15. Avoid updating public content until the impact has been assessed.

# Knowledge Processing Workflow

Claude should process new material in five stages.

## Stage 1 — Understand

- What is this source?
- Who produced it?
- Why was it produced?
- Which audience is it for?
- Which jurisdiction applies?

## Stage 2 — Assess

- How authoritative is it?
- Is it current?
- Is it independent?
- Is it evidence or opinion?
- Are there commercial interests?
- Are there important limitations?

## Stage 3 — Compare

- Does it confirm existing guidance?
- Does it contradict current guidance?
- Does it add nuance?
- Does it supersede a source?
- Does it create a new content need?

## Stage 4 — Map

Map the source to:

- claims
- public pages
- templates
- tool reviews
- charity workflows
- audience pathways
- learning paths
- research questions

## Stage 5 — Act

Classify the action:

- No change
- Monitor
- Clarify
- Correct
- Add new guidance
- Update template
- Update tool review
- Seek specialist review
- Archive old evidence
- Prepare urgent correction

# Books and Long Documents

For books and long reports:

- do not treat the whole work as one source claim
- identify relevant chapters
- create chapter-level notes
- distinguish the author's framework from established evidence
- verify legal claims against current primary sources
- record publication age
- note jurisdiction
- avoid public reproduction of copyrighted passages

Recommended notes format:

```md
# Source Notes

## Bibliographic Details

## Relevant Chapters

## Key Concepts

## Claims Requiring Verification

## Charity Relevance

## Public Pages Potentially Affected

## Limitations

## Copyright Notes
```

# Online Sources

For online sources:

- prefer official pages
- record the full URL
- record access date
- record last-updated date
- save a summary
- capture provider plan details
- note if the page may change
- schedule review for fast-changing sources

Do not rely on search-result snippets.

# Current Website Synchronisation

Claude must know what is live.

Use one or more of:

- connected GitHub repository
- current Markdown export
- current site map
- current source and claim registers
- latest release notes
- current review queue

Before recommending updates, Claude should compare new knowledge with the current published version.

# Duplication Control

Before adding a new source or summary:

- check whether it already exists
- check for an earlier edition
- check whether the same source has a new URL
- check whether a secondary article merely repeats a primary source
- avoid storing multiple unlabelled copies

# Contradictory Sources

When sources disagree:

1. record the disagreement
2. compare evidence tiers
3. compare dates
4. compare jurisdiction
5. identify whether they address different contexts
6. avoid silently selecting one
7. flag the issue for review
8. publish uncertainty where relevant

# Copyright and Permissions

The library may contain copyrighted material for research where lawfully available, but public outputs must not reproduce protected works improperly.

Rules:

- do not upload pirated material
- do not publish full books or reports
- do not reproduce long extracts
- use summaries and short quotations where lawful
- link to original sources
- record permission where obtained
- keep restricted material out of the public repository
- respect licence terms

# Sensitive and Confidential Material

Do not add to the knowledge library unless there is a clear, approved need:

- identifiable safeguarding records
- beneficiary case data
- donor records
- employee records
- passwords or secrets
- confidential employer information
- privileged legal advice
- raw survey exports with unnecessary identifiers

Use anonymised or aggregated summaries wherever possible.

# Review Frequency

## Monthly

Review:

- ICO
- Charity Commission
- key provider documentation
- current website
- open issues
- survey and feedback summaries

## Quarterly

Review:

- major sector bodies
- core templates
- academic updates
- tool reviews
- charity workflow knowledge

## Annually

Review:

- library structure
- source categories
- archive
- duplication
- strategic gaps
- long-term research priorities

# Library Maintenance

Regularly:

- archive superseded files
- update review dates
- remove duplicates
- identify missing metadata
- refresh the current website section
- update the source register
- check broken URLs
- identify stale provider documentation
- document unresolved conflicts

# Knowledge Map

The library should connect:

```text
Source
  ↓
Claim
  ↓
Public Page
  ↓
Template or Workflow
  ↓
Release
  ↓
Feedback
  ↓
New Research
```

Claude should understand these relationships rather than treating files independently.

# Monthly Library Prompt

Use:

```text
Review all new material added to the Claude Project knowledge library.

For each source:

1. Identify and classify it.
2. Assign or confirm its source ID.
3. Record evidence tier and status.
4. Summarise the relevant content.
5. Extract important claims.
6. Record limitations.
7. Compare it with current sources.
8. Identify affected claims and public pages.
9. Identify whether it supersedes older material.
10. Recommend a review date.
11. Flag copyright, privacy or confidentiality concerns.
12. Recommend no change, monitoring, update, correction or specialist review.

Then produce:

- source-register updates
- claim-register updates
- library maintenance actions
- public content impact report
- archive actions
- unresolved questions

Do not publish directly.
Do not treat secondary commentary as law.
Do not reproduce copyrighted material beyond what is permitted.
```

# Success Criteria

The knowledge library succeeds when:

- Claude understands what every important source is
- new evidence can be processed consistently
- charity knowledge and AI knowledge remain connected
- public guidance can be traced back to evidence
- outdated sources are identified
- duplicate material is controlled
- confidential material is protected
- monthly reviews remain manageable
- the system can scale to hundreds or thousands of files

The knowledge library should function as the long-term research memory of the project.
