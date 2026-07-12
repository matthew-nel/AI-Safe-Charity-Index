# AI Safe Use Knowledge Base for UK Charities
## Monthly Research Process

**Version:** 1.0.0  
**Status:** Foundation Document  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

# Purpose

This document defines the complete monthly research and update process for the AI Safe Use Knowledge Base for UK Charities.

The process is designed to turn new evidence, charity feedback, survey findings, provider changes and regulatory updates into reviewed, versioned and publication-ready changes for the GitHub knowledge base.

The monthly process should make the knowledge base:

- current
- evidence-led
- practical
- transparent
- responsive to charity needs
- safe to maintain
- scalable over time

# Core Principle

> Review what changed, decide what matters, update only what needs changing, and record every decision.

The monthly process is not a requirement to publish something every month.

A valid outcome may be:

- no public change needed
- monitoring only
- a patch release
- a minor release
- an urgent correction
- a larger update deferred to quarterly review

# Monthly Objectives

Each monthly cycle should aim to:

1. review new regulator and government guidance
2. review AI provider changes
3. review new charity-sector research
4. process new books, reports and professional sources
5. review charity feedback and research findings
6. identify outdated or unclear public guidance
7. update Source and Claim Registers
8. identify pages and templates that need changes
9. prepare publication-ready Markdown
10. publish only after human review
11. create release notes and a changelog
12. record unresolved questions
13. identify priorities for the next month or quarter

# Monthly Inputs

The monthly process may include:

- ICO updates
- Charity Commission updates
- UK government updates
- legislation
- NCVO guidance
- Charity Digital reports
- CAST resources
- DataKind UK material
- SCVO, WCVA or NICVA guidance
- safeguarding guidance
- AI provider documentation
- privacy and product updates
- books and reading notes
- academic papers
- professional reports
- survey exports
- interview summaries
- page feedback
- GitHub issues
- contact-form questions
- analytics summaries
- internal search terms
- accessibility findings
- broken-link reports
- current website export
- editorial notes from Matthew James Nel

# Monthly Folder Structure

Use a consistent monthly working pack.

Example:

```text
monthly-update-packs/
└── 2026-08/
    ├── 00_README.md
    ├── 01_SOURCE_INTAKE.md
    ├── 02_REGULATORY_WATCH_REVIEW.md
    ├── 03_PROVIDER_REVIEW.md
    ├── 04_CHARITY_SECTOR_REVIEW.md
    ├── 05_RESEARCH_AND_FEEDBACK_SUMMARY.md
    ├── 06_CLAIM_IMPACT_REPORT.md
    ├── 07_CONTENT_IMPACT_REPORT.md
    ├── 08_PUBLICATION_PACK.md
    ├── 09_RELEASE_NOTES.md
    ├── 10_CHANGELOG_ENTRY.md
    ├── 11_VALIDATION_CHECKLIST.md
    └── 12_MONTHLY_HANDOFF.md
```

# Monthly Timeline

A monthly cycle can be completed in one focused session or split across several days.

Recommended sequence:

## Week 1 — Intake

- gather new sources
- upload documents to Claude Projects
- refresh current website context
- review open issues
- review survey and feedback summaries
- confirm pages due for review

## Week 2 — Analysis

- process new sources
- update Source Register
- update Claim Register
- run Regulatory Watchlist
- compare new evidence with live guidance
- identify material changes

## Week 3 — Drafting

- draft updated Markdown
- draft new pages if needed
- update templates
- update metadata
- prepare changelog and release notes
- identify specialist-review needs

## Week 4 — Review and Publish

- complete human review
- complete specialist review where needed
- validate files
- publish to GitHub
- confirm site deployment
- announce the release
- close the monthly review

# Step 1: Prepare the Monthly Review

Before reviewing new sources:

- confirm the current site version
- confirm the previous release date
- confirm open review items
- load the current Source Register
- load the current Claim Register
- load the Regulatory Watchlist
- load the latest GitHub content
- load current known limitations
- load open GitHub issues
- load current survey and feedback summaries

Create a monthly review record.

Suggested heading:

```md
# Monthly Review — August 2026

## Current Site Version

## Previous Release

## Open High-Risk Issues

## Pages Due for Review

## New Sources Added

## Feedback Received

## Research Added

## Known Limitations
```

# Step 2: Source Intake

For each new source:

1. identify it
2. assign or confirm a Source ID
3. record organisation or author
4. record publication and update dates
5. record jurisdiction
6. classify source type
7. assign evidence tier
8. record status
9. summarise the relevant content
10. extract material claims
11. record limitations
12. identify affected pages
13. identify whether it supersedes older material
14. set the next review date
15. record copyright and access notes

Source intake should use:

- `19_KNOWLEDGE_LIBRARY_GUIDE.md`
- `20_SOURCE_REGISTER.md`
- `22_RESEARCH_METHOD.md`

# Step 3: Regulatory Watchlist Review

Run the watchlist against Critical and High sources.

Review:

- ICO
- Charity Commission
- UK Government
- legislation
- NCVO
- Charity Digital
- relevant safeguarding sources
- major provider documentation

For each source:

- record date checked
- record whether anything changed
- identify material changes
- identify no-change confirmations
- identify affected claims
- identify affected pages
- identify urgency
- set next check date

Use:

- `23_REGULATORY_WATCHLIST.md`

# Step 4: AI Provider Review

Review provider changes relevant to:

- Claude
- ChatGPT
- Microsoft Copilot
- Google Gemini
- Notion AI
- Canva AI
- Adobe AI tools
- meeting assistants
- automation tools

Check:

- privacy documentation
- training-data statements
- retention
- account type
- plan differences
- security controls
- connectors
- international processing
- product changes
- discontinued features
- new risks
- new admin controls

Do not rely on provider marketing pages alone.

Record:

- product
- plan
- region
- documentation reviewed
- access date
- material changes
- pages affected
- next review date

# Step 5: Charity-Sector Review

Review new charity-sector knowledge.

Sources may include:

- NCVO
- SCVO
- WCVA
- NICVA
- Charity Digital
- CAST
- DataKind UK
- ACEVO
- charity case studies
- public charity policies
- safeguarding organisations
- fundraising bodies
- accessibility bodies

Identify:

- new adoption evidence
- new confidence gaps
- policy adoption trends
- workflow-specific concerns
- training needs
- governance patterns
- differences by charity size
- subsector-specific risks
- practical examples
- content gaps

# Step 6: Books and Longform Review

For any new book or long report:

- create structured notes
- record relevant chapters
- extract useful concepts
- separate author opinion from evidence
- verify legal claims against primary sources
- record limitations
- identify possible content improvements
- avoid reproducing copyrighted material

Books should inform depth and judgement, not replace current UK authority.

# Step 7: Original Research and Feedback Review

Review:

- survey findings
- interview summaries
- usability findings
- page feedback
- GitHub issues
- contact-form questions
- analytics summaries
- failed searches
- internal search terms

Produce:

## What Charities Told Us

Include:

- repeated questions
- recurring concerns
- confusing pages
- unmet needs
- differences by charity size
- differences by role
- isolated reports
- validated patterns
- unresolved research questions

Do not treat one comment as representative of the sector.

# Step 8: Claim Review

Use the Claim Register to identify:

- claims linked to updated sources
- claims due for review
- unsupported claims
- conflicting claims
- low-confidence claims
- claims needing better primary evidence
- claims that should be withdrawn

For each affected claim:

- confirm wording
- confirm source support
- confirm confidence
- confirm status
- confirm affected pages
- set next review date

Use:

- `21_CLAIM_REGISTER.md`

# Step 9: Content Impact Assessment

Compare new evidence and feedback with:

- Start Here pages
- Before You Paste
- AI and Data Protection
- Everyday Charity Work
- Governance
- Tools
- Templates
- Learning Paths
- Research and Community
- Updates
- Large and Complex Charities
- glossary
- FAQ
- navigation
- contact routes

Classify each impact as:

- no change
- wording clarification
- factual correction
- new example
- new page
- template update
- tool-review update
- navigation change
- urgent correction
- specialist review
- defer to quarterly review
- archive or deprecate

# Step 10: Prioritisation

Prioritise updates by:

## Critical

- unsafe guidance
- incorrect legal claim
- safeguarding risk
- incorrect tool recommendation
- personal-data exposure
- broken core decision tool

## High

- material regulator change
- significant provider change
- repeated charity confusion
- major claim unsupported
- important template error

## Medium

- useful new page
- clearer example
- workflow improvement
- research-informed update

## Low

- cosmetic edit
- minor wording
- non-urgent navigation improvement
- optional content idea

# Step 11: Drafting Rules

When drafting updates:

- change only affected content
- preserve stable URLs
- keep page structure consistent
- use plain English
- include charity-specific examples
- update page metadata
- update Source IDs
- update Claim IDs
- update related links
- update version
- update last-reviewed and next-review dates
- include known limitations
- separate small-charity guidance from advanced guidance

Do not rewrite unaffected pages simply for style.

# Step 12: Publication Pack

The monthly publication pack should contain:

1. executive summary
2. sources reviewed
3. regulatory changes
4. provider changes
5. charity-sector findings
6. What Charities Told Us
7. claims affected
8. pages affected
9. pages confirmed as current
10. complete Markdown files
11. exact GitHub paths
12. Source Register updates
13. Claim Register updates
14. Review Queue updates
15. navigation changes
16. changelog entry
17. release notes
18. validation checklist
19. known limitations
20. publication handoff

# Step 13: Human Review

Matthew James Nel is the final editorial and publication authority.

Review:

- evidence quality
- legal wording
- safeguarding implications
- charity relevance
- small-charity proportionality
- tone
- plain English
- factual accuracy
- source links
- metadata
- versioning
- release notes
- attribution

# Step 14: Specialist Review

Seek specialist review where needed for:

- safeguarding
- children
- health and care data
- criminal-offence data
- automated decision-making
- profiling
- employment disputes
- legal privilege
- DPIAs
- high-risk procurement
- data breaches
- serious incidents
- complex international transfers

Record:

- reviewer role
- scope
- date
- outcome
- unresolved concerns

# Step 15: Validation

Before publishing:

- build the site
- validate Markdown
- validate frontmatter
- validate Source IDs
- validate Claim IDs
- check broken links
- check duplicate titles
- check expired review dates
- check navigation
- check search index
- check mobile display
- check accessibility
- check print layout
- check attribution
- confirm no raw research data is published
- confirm no confidential source documents are committed

# Step 16: Release Decision

Choose:

## No Public Release

Use when review is complete but no public change is needed.

## Patch Release

Use for:

- corrections
- clarifications
- citations
- metadata
- broken links
- small tool updates

## Minor Release

Use for:

- new pages
- new templates
- new workflows
- meaningful provider changes
- material research additions

## Major Release

Use for:

- core framework changes
- broad legal changes
- major navigation redesign
- substantial user-action changes

# Step 17: GitHub Publication

Recommended early-stage workflow:

1. create a branch
2. add Claude-generated Markdown
3. review the diff
4. run validation
5. create a pull request
6. approve changes
7. merge into `main`
8. let GitHub Actions deploy
9. check the live site
10. tag the release

# Step 18: Release Notes

Use:

```md
# Release X.Y.Z

Published: YYYY-MM-DD

## Summary

## Important Changes

## Added

## Updated

## Corrected

## Deprecated

## Evidence Reviewed

## What Charities Told Us

## Known Limitations

## What Charities Should Do

## Next Review
```

# Step 19: Changelog

Update:

- Added
- Changed
- Corrected
- Deprecated
- Removed
- Security
- Research
- Accessibility

# Step 20: Communication Outputs

Prepare:

## Website Update

A concise summary for the Updates section.

## Newsletter

Include:

- what changed
- why it matters
- what charities should do
- one practical takeaway
- research participation link

## LinkedIn

Include:

- one useful insight
- one change
- one practical example
- link to the release
- invitation to share charity experience

## Internal Project Note

Record:

- work completed
- deferred items
- unresolved questions
- next-month priorities

# Monthly Metrics

Track:

- sources reviewed
- sources added
- claims reviewed
- pages reviewed
- pages changed
- pages confirmed current
- templates updated
- tool reviews updated
- feedback items received
- feedback items resolved
- research participants
- failed searches
- page usefulness ratings
- GitHub issues opened
- GitHub issues closed
- release published
- time spent

Metrics should support improvement, not create unnecessary administration.

# Monthly Checklist

## Preparation

- [ ] Current site version confirmed
- [ ] Current GitHub content available
- [ ] Source Register loaded
- [ ] Claim Register loaded
- [ ] Watchlist loaded
- [ ] Review Queue loaded
- [ ] Feedback summary prepared
- [ ] Survey summary prepared

## Research

- [ ] New sources processed
- [ ] Regulator sources checked
- [ ] Provider sources checked
- [ ] Charity-sector sources checked
- [ ] Books and reports reviewed
- [ ] Original research reviewed
- [ ] Feedback themes reviewed

## Impact

- [ ] Claims affected identified
- [ ] Pages affected identified
- [ ] Pages confirmed current identified
- [ ] Urgent corrections identified
- [ ] Specialist review needs identified
- [ ] Release type recommended

## Drafting

- [ ] Markdown files complete
- [ ] Source IDs updated
- [ ] Claim IDs updated
- [ ] Metadata updated
- [ ] Page versions updated
- [ ] Review dates updated
- [ ] Changelog drafted
- [ ] Release notes drafted

## Review

- [ ] Human review complete
- [ ] Specialist review complete where needed
- [ ] Plain English checked
- [ ] Accessibility checked
- [ ] Attribution checked

## Publication

- [ ] GitHub branch created
- [ ] Files added
- [ ] Validation passed
- [ ] Pull request reviewed
- [ ] Release merged
- [ ] Website deployed
- [ ] Live site checked
- [ ] Release tagged

## Communication

- [ ] Website update published
- [ ] Newsletter draft prepared
- [ ] LinkedIn draft prepared
- [ ] Next review scheduled

# Monthly Claude Prompt

Use:

```text
Run the monthly research and content update for the AI Safe Use Knowledge Base for UK Charities.

Original Creator: Matthew James Nel
Maintained and edited by: Matthew James Nel
LinkedIn: https://www.linkedin.com/in/matthewjamesnel

Use all Project Instructions and foundation documents.

Review:

- new regulator and government sources
- new charity-sector sources
- new provider documentation
- books and longform notes
- academic and professional research
- aggregated survey findings
- anonymised interview findings
- page feedback
- GitHub issues
- contact-form questions
- analytics and search summaries
- current GitHub content
- Source Register
- Claim Register
- Regulatory Watchlist
- Review Queue
- known limitations

Produce:

1. Monthly executive summary.
2. Source intake summary.
3. Regulatory Watchlist review.
4. Provider change review.
5. Charity-sector research review.
6. What Charities Told Us.
7. Claim impact report.
8. Content impact report.
9. Pages confirmed as current.
10. Urgent corrections.
11. Specialist review requirements.
12. Recommended release type and version.
13. Complete publication-ready Markdown files.
14. Exact GitHub paths.
15. Source Register updates.
16. Claim Register updates.
17. Review Queue updates.
18. Navigation changes.
19. Changelog entry.
20. Release notes.
21. Validation checklist.
22. Known limitations.
23. Newsletter draft.
24. LinkedIn draft.
25. Publication handoff.

Rules:

- Do not rewrite unaffected pages.
- Do not publish unsupported claims.
- Do not treat provider marketing as independent evidence.
- Do not present recommendations as law.
- Do not remove creator attribution.
- Do not publish raw personal research data.
- Flag uncertainty.
- Require human review for high-risk changes.
```

# Monthly Handoff Template

Use:

```md
# Monthly Handoff

## Review Period

## Release Recommendation

## Files Created

## Files Updated

## Files Deprecated

## Source Register Changes

## Claim Register Changes

## Specialist Review

## Validation Completed

## Known Limitations

## Deferred Work

## Next Month Priorities

## Suggested Branch Name

## Suggested Commit Message

## Suggested Pull Request Title
```

# Carry-Over to Quarterly Review

Move an item to quarterly review when it involves:

- major information architecture change
- broad policy redesign
- large template overhaul
- deep accessibility review
- full tool-library audit
- research-method change
- major learning-path redesign
- strategic positioning
- contributor governance
- licence review
- large backlog themes

# Failure Conditions

Do not complete the monthly review if:

- high-risk claims remain unresolved
- the current website was not available for comparison
- Source Register updates are missing
- Claim Register updates are missing
- validation did not run
- raw personal data is included
- creator attribution is removed
- provider information is unverified
- legal claims rely only on commentary
- release notes are incomplete

# Definition of Done

A monthly cycle is complete only when:

- all new sources are processed
- Watchlist checks are recorded
- claims are reviewed
- affected content is identified
- publication files are complete
- human review is complete
- specialist review is complete where needed
- validation passes
- GitHub records the release
- the live site is checked
- release notes are public
- unresolved limitations are recorded
- next-month priorities are set

# Definition of Success

The monthly research process succeeds when Matthew James Nel can:

- add new knowledge to Claude Projects
- understand what changed
- identify what matters
- update the public knowledge base safely
- preserve a full audit trail
- respond to charity feedback
- keep guidance current
- publish without manually rewriting the entire site

The process should be repeatable, proportionate and reliable enough to run every month.
