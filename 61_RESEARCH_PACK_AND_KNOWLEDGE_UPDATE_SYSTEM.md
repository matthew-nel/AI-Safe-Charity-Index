# AI Safe Use Knowledge Base for UK Charities
# 61_RESEARCH_PACK_AND_KNOWLEDGE_UPDATE_SYSTEM.md

**Version:** 1.0.0  
**Status:** Foundation Operations Document  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** Monthly

---

# Purpose

This document defines the recurring research-pack and knowledge-update system for the AI Safe Use Knowledge Base for UK Charities.

The system is designed to support:

- deep monthly updates
- occasional weekly updates
- fast-moving AI provider changes
- regulator and government updates
- charity-sector evidence
- research papers
- books and industry eBooks
- news
- blogs
- videos
- podcasts
- case studies
- practical charity examples
- public corrections
- community suggestions
- GitHub publication

The aim is to create a repeatable system where external research tools produce structured Markdown research packs that can be uploaded into Claude Projects.

Claude Projects then compares the new material with the existing knowledge base and prepares controlled updates for GitHub.

The core workflow is:

```text
Perplexity, ChatGPT and Gemini
            ↓
Structured Markdown research packs
            ↓
Claude Projects
            ↓
Comparison with existing knowledge
            ↓
Updated guidance, claims and sources
            ↓
Human review
            ↓
GitHub
            ↓
Public wiki-style knowledge base
```

---

# Core Principle

> **Research widely, organise consistently, verify carefully and publish only what improves the guidance.**

The project should not publish everything it discovers.

It should:

- identify what changed
- decide what matters
- compare new evidence with current guidance
- update only affected content
- preserve a clear source trail
- explain uncertainty
- keep human review mandatory

---

# Research System Goals

The research system should:

- keep the knowledge base current
- identify changes quickly
- gather evidence from multiple formats
- reduce dependence on one research tool
- prevent important sources from being lost
- support monthly and weekly updates
- provide Claude with structured context
- maintain historical versions
- distinguish trusted evidence from commentary
- convert research into practical guidance
- support public corrections and contributions

---

# Research Tools

The project may use several research tools in parallel.

Each tool should produce a separate Markdown research pack.

The packs should follow a shared structure so Claude can compare and combine them reliably.

---

# Perplexity

## Primary Role

Perplexity should be used as a deep research tool for broad, source-led discovery.

It may gather:

- latest regulator updates
- government guidance
- AI provider documentation
- charity-sector reports
- academic papers
- research summaries
- news
- professional blogs
- videos
- webinars
- podcasts
- conference material
- public charity case studies
- sector commentary

## Best Use

Use Perplexity for:

- wide topic exploration
- current-source discovery
- identifying recent changes
- finding relevant primary sources
- generating an initial evidence map
- comparing different public viewpoints
- finding sector-specific examples

## Required Output

Perplexity should produce a Markdown research pack containing:

- executive summary
- search scope
- date range
- key changes
- primary sources
- supporting sources
- charity-sector relevance
- practical implications
- claims requiring verification
- conflicting evidence
- content gaps
- recommended GitHub pages to review
- source list
- known limitations

## Important Rule

Perplexity findings are research inputs, not final published guidance.

Claude and Matthew James Nel must still review:

- source quality
- source date
- jurisdiction
- claim accuracy
- whether a primary source exists
- whether the finding changes public guidance

---

# ChatGPT Research

## Primary Role

ChatGPT should be used for broad crawling, current research and cross-format synthesis.

It may review:

- official websites
- current blogs
- research papers
- news
- videos
- transcripts
- provider updates
- charity-sector commentary
- public reports
- case studies
- technical documentation

## Best Use

Use ChatGPT for:

- detailed research synthesis
- source comparison
- identifying contradictions
- summarising long source sets
- extracting practical charity implications
- drafting structured research packs
- identifying missing questions
- comparing new research with previous packs
- creating claim and page impact lists

## Required Output

ChatGPT should produce a Markdown research pack containing:

- research question
- search methodology
- sources reviewed
- latest developments
- important factual changes
- regulator and provider updates
- charity-sector implications
- practical use cases
- risks
- opportunities
- disagreements between sources
- evidence confidence
- affected claims
- affected pages
- possible new pages
- recommended actions
- source register candidates
- limitations

## Important Rule

ChatGPT must not:

- invent citations
- rely on memory for current facts
- treat blogs as equal to regulators
- treat provider marketing as independent evidence
- present recommendations as law
- recommend publication without human review

---

# Google Gemini

## Primary Role

Gemini should be used for deep search and an additional independent research view.

It may be especially useful for:

- Google ecosystem updates
- Google Workspace changes
- Gemini product changes
- current web research
- long-document analysis
- cross-source comparison
- video and YouTube material
- research papers
- public reports
- emerging topics

## Best Use

Use Gemini to:

- challenge findings from other tools
- identify sources missed by Perplexity or ChatGPT
- find Google-specific changes
- review long documents
- surface alternative interpretations
- identify additional risks or opportunities
- test whether the evidence base is complete

## Required Output

Gemini should produce a Markdown research pack containing:

- research scope
- key findings
- missed or additional sources
- important changes
- evidence strengths
- evidence weaknesses
- charity relevance
- potential page changes
- unresolved questions
- source list
- limitations

---

# Multi-Tool Research Model

The tools should complement one another.

Recommended model:

```text
Perplexity
Broad source discovery
        +
ChatGPT
Deep synthesis and crawling
        +
Gemini
Independent deep search and challenge
        ↓
Combined research pack
        ↓
Claude Projects
```

The project should not assume that three tools agreeing means a claim is true.

Agreement between tools may still reflect:

- the same underlying source
- duplicated web content
- outdated information
- provider marketing
- widely repeated errors

Always inspect the source itself where the claim is important.

---

# Research Frequency

## Weekly Monitoring

Use weekly monitoring when:

- a major AI provider changes terms
- a new product launches
- a regulator publishes new guidance
- a major security or privacy incident occurs
- a high-risk topic changes quickly
- charities are asking urgent repeated questions
- a public page is likely to become outdated quickly

Weekly research should be focused.

It should not attempt to re-research the entire knowledge base.

## Monthly Deep Research

Every month:

- run broad regulator checks
- review major AI providers
- review charity-sector publications
- review relevant research papers
- review current news and commentary
- review videos and webinars
- review user feedback
- review failed searches
- review open GitHub issues
- create structured research packs
- upload packs to Claude Projects
- update affected GitHub content

## Quarterly Deep Assurance

Every quarter:

- review all high-risk content
- audit source quality
- audit tool guidance
- review books and longform sources
- review research gaps
- review navigation and content gaps
- review community feedback
- confirm whether the knowledge base still reflects sector needs

---

# Research Pack Types

Use separate pack types to keep research organised.

## 1. Monthly General Research Pack

Covers:

- regulators
- government
- providers
- charity sector
- research
- news
- blogs
- videos
- practical implications

Suggested filename:

```text
YYYY-MM_MONTHLY_GENERAL_RESEARCH_PACK.md
```

## 2. Provider Research Pack

One provider per pack.

Examples:

```text
YYYY-MM_OPENAI_RESEARCH_PACK.md
YYYY-MM_ANTHROPIC_RESEARCH_PACK.md
YYYY-MM_GOOGLE_GEMINI_RESEARCH_PACK.md
YYYY-MM_MICROSOFT_COPILOT_RESEARCH_PACK.md
```

## 3. Regulatory Research Pack

Examples:

```text
YYYY-MM_ICO_REGULATORY_RESEARCH_PACK.md
YYYY-MM_CHARITY_COMMISSION_RESEARCH_PACK.md
```

## 4. Charity-Sector Research Pack

Covers:

- NCVO
- SCVO
- WCVA
- NICVA
- Charity Digital
- CAST
- DataKind UK
- charity case studies
- sector surveys
- practitioner commentary

Suggested filename:

```text
YYYY-MM_CHARITY_SECTOR_RESEARCH_PACK.md
```

## 5. Academic Research Pack

Covers:

- peer-reviewed papers
- preprints
- university research
- professional studies
- research methods
- evidence limitations

Suggested filename:

```text
YYYY-MM_ACADEMIC_RESEARCH_PACK.md
```

## 6. Books and eBooks Pack

Covers:

- industry books
- professional eBooks
- charity-sector libraries
- public reports
- training manuals
- longform guidance

Suggested filename:

```text
YYYY-MM_BOOKS_AND_EBOOKS_RESEARCH_PACK.md
```

## 7. News and Media Pack

Covers:

- news
- blogs
- podcasts
- webinars
- videos
- conference sessions
- expert interviews

Suggested filename:

```text
YYYY-MM_NEWS_BLOGS_AND_VIDEO_RESEARCH_PACK.md
```

## 8. Charity Feedback Pack

Covers:

- survey findings
- interview findings
- contact questions
- GitHub issues
- page feedback
- failed searches
- repeated misunderstandings

Suggested filename:

```text
YYYY-MM_CHARITY_FEEDBACK_AND_RESEARCH_PACK.md
```

## 9. Urgent Change Pack

Use for:

- major regulator changes
- serious provider changes
- security incidents
- urgent corrections
- high-risk misinformation

Suggested filename:

```text
YYYY-MM-DD_URGENT_CHANGE_RESEARCH_PACK.md
```

---

# Standard Research Pack Structure

Every research pack should use this structure.

```md
# Research Pack Title

## Pack Metadata

- Pack ID:
- Research tool:
- Researcher:
- Date created:
- Date range reviewed:
- Topic:
- Jurisdiction:
- Status:
- Version:

## Research Question

## Executive Summary

## What Changed

## Why It Matters for Charities

## Primary Sources

## Supporting Sources

## Research Papers

## News and Commentary

## Blogs and Practitioner Sources

## Videos, Webinars and Podcasts

## Charity-Sector Examples

## Key Claims

## Conflicting Evidence

## Evidence Confidence

## Risks

## Opportunities

## Small Charity Implications

## Medium-Sized Charity Implications

## Large and Complex Charity Implications

## Pages That May Need Updating

## Claims That May Need Updating

## New Pages or Templates Suggested

## Sources to Add to the Source Register

## Questions Requiring Human Review

## Questions Requiring Specialist Review

## Known Limitations

## Recommended Next Actions

## Full Source List
```

---

# Research Pack Metadata

Use YAML frontmatter.

Example:

```yaml
---
pack_id: "RP-2026-08-001"
title: "August 2026 General AI and Charity Research Pack"
research_tool: "Perplexity"
created_by: "Matthew James Nel"
created_date: "2026-08-15"
date_range_start: "2026-07-01"
date_range_end: "2026-08-15"
topic: "AI safety and responsible AI use in UK charities"
jurisdiction:
  - UK
status: "ready-for-claude-review"
version: "1.0.0"
source_count: 42
primary_source_count: 12
review_priority: "high"
---
```

---

# Source Classification

Every source should be classified.

## Tier 1 — Primary Authority

Examples:

- legislation
- ICO
- Charity Commission
- UK Government
- official regulator guidance

## Tier 2 — Official Provider

Examples:

- OpenAI
- Anthropic
- Google
- Microsoft
- Notion

Provider sources are authoritative for their own product statements but not independent evidence.

## Tier 3 — Trusted Sector Source

Examples:

- NCVO
- SCVO
- WCVA
- NICVA
- Charity Digital
- CAST
- DataKind UK
- recognised safeguarding organisations

## Tier 4 — Academic or Professional Research

Examples:

- peer-reviewed papers
- university studies
- recognised professional bodies
- research institutes

## Tier 5 — Supporting Commentary

Examples:

- blogs
- news
- practitioner articles
- videos
- webinars
- podcasts

Tier 5 sources may provide context, examples or emerging signals.

They should not normally support important legal or safety claims on their own.

---

# Source Record Template

```yaml
source_id:
title:
author_or_organisation:
source_type:
evidence_tier:
url:
publication_date:
last_updated:
date_accessed:
jurisdiction:
summary:
relevant_claims:
affected_pages:
limitations:
status:
supersedes:
superseded_by:
```

---

# Video, Webinar and Podcast Research

Videos and audio may contain valuable practitioner knowledge.

For each item record:

- title
- speaker
- organisation
- date
- platform
- URL
- transcript availability
- key points
- claims made
- evidence cited
- practical examples
- limitations
- whether the content is promotional

Do not treat a speaker's confidence as evidence.

Where possible:

- use official transcripts
- verify claims against written sources
- distinguish experience from general evidence
- avoid quoting long copyrighted passages

---

# Blog and News Research

Blogs and news may identify:

- emerging concerns
- product changes
- sector reaction
- practical case studies
- unresolved questions

Use them to:

- identify topics
- find primary sources
- understand real-world concerns
- surface examples

Do not rely on them alone for:

- legal interpretation
- regulator requirements
- provider privacy claims
- safeguarding guidance
- significant safety classifications

---

# Books and Industry eBooks

Claude Projects should contain a strong foundation of longform knowledge.

This may include:

- legally obtained books
- public eBooks
- charity-sector guides
- professional manuals
- public libraries
- research reports
- course materials with appropriate rights
- internal reading notes

For each book or eBook:

- record title
- author
- publisher
- date
- edition
- relevant chapters
- key concepts
- useful frameworks
- limitations
- whether legal or technical claims need current verification
- copyright status
- whether the full file can be stored or only notes

Books should support depth.

They should not override current primary guidance.

---

# Versioned Claude Project Foundation

Claude Projects should maintain versioned foundation files.

Recommended structure:

```text
Claude Project Knowledge/
├── 00_Foundation/
├── 01_Editorial_Standards/
├── 02_Evidence_and_Claims/
├── 03_Regulation/
├── 04_Charity_Sector_Knowledge/
├── 05_AI_Provider_Knowledge/
├── 06_Books_and_eBooks/
├── 07_Research_Packs/
├── 08_Charity_Feedback/
├── 09_Current_GitHub_Export/
├── 10_Release_Candidates/
└── 11_Archive/
```

Each important file should include:

- version
- created date
- last reviewed
- next review
- owner
- status
- supersedes
- superseded by

---

# Versioning of Research Packs

Use:

```text
MAJOR.MINOR.PATCH
```

Examples:

- `1.0.0` — first complete pack
- `1.1.0` — substantial new evidence added
- `1.1.1` — citation or wording correction
- `2.0.0` — research scope or method changes materially

Do not overwrite older research packs without preserving history.

---

# Claude Projects Intake Workflow

When a new research pack is created:

1. Verify the pack is complete.
2. Check that sources are linked.
3. Check that the research tool is named.
4. Check that limitations are included.
5. Upload the pack to Claude Projects.
6. Upload important source files where permitted.
7. Add the pack to the monthly update folder.
8. Ask Claude to compare it with the current foundation and GitHub export.
9. Create a content-impact report.
10. Prepare publication-ready Markdown.
11. Complete human review.
12. publish approved changes through GitHub.

---

# Claude Comparison Prompt

Use:

```text
You are maintaining the AI Safe Use Knowledge Base for UK Charities.

Use the Project Instructions and all current foundation documents.

Review the newly uploaded research packs from:

- Perplexity
- ChatGPT
- Gemini
- books and eBooks
- charity-sector research
- feedback
- news, blogs and videos

Compare them with:

- the current Claude Project foundation
- the current Source Register
- the current Claim Register
- the current Regulatory Watchlist
- the current GitHub export
- the current public page versions

Produce:

1. Executive summary.
2. New sources found.
3. Duplicate sources.
4. Superseded sources.
5. Material factual changes.
6. Regulator changes.
7. Provider changes.
8. Charity-sector evidence.
9. Research-paper findings.
10. Relevant news, blogs and video insights.
11. Conflicting evidence.
12. Claims requiring updates.
13. Pages requiring updates.
14. Pages confirmed as current.
15. New pages or templates suggested.
16. Source Register updates.
17. Claim Register updates.
18. Regulatory Watchlist updates.
19. Exact publication-ready Markdown.
20. Recommended page versions.
21. Changelog entry.
22. Release notes.
23. Known limitations.
24. Specialist review requirements.
25. Publication handoff.

Rules:

- Do not rewrite unaffected pages.
- Do not invent citations.
- Do not treat repeated commentary as primary evidence.
- Do not publish provider marketing as independent guidance.
- Do not present recommendations as law.
- Preserve creator attribution.
- Flag uncertainty.
- Require human approval.
```

---

# Combined Research Pack

After reviewing separate tool packs, create one combined monthly pack.

Suggested filename:

```text
YYYY-MM_COMBINED_MASTER_RESEARCH_PACK.md
```

The combined pack should:

- merge unique findings
- remove duplicates
- identify shared underlying sources
- separate strong evidence from weak signals
- explain disagreements
- identify the practical charity impact
- recommend page-level changes
- preserve links to each original tool pack

---

# Duplicate Source Handling

Multiple tools may find the same source.

Do not count the same source several times.

Record:

- canonical source
- tools that found it
- date accessed
- whether each tool interpreted it differently
- final evidence tier

---

# Conflicting Research

When tools or sources disagree:

1. identify the exact disagreement
2. inspect the underlying sources
3. prefer primary authority
4. check dates
5. check jurisdiction
6. check whether products or plans differ
7. record uncertainty
8. avoid forced conclusions
9. seek specialist review where needed

---

# Weekly Update Pack

Use a lighter structure for weekly monitoring.

```md
# Weekly Research Update

## Week

## Material Changes

## Regulator Updates

## Provider Updates

## Charity-Sector Updates

## Research and News Signals

## Pages at Risk of Becoming Outdated

## Urgent Actions

## No-Change Confirmations

## Sources

## Limitations
```

Only create a public release if the weekly findings require one.

---

# Monthly Deep Research Checklist

## Perplexity

- [ ] Regulator research complete
- [ ] Provider research complete
- [ ] Charity-sector research complete
- [ ] Academic research complete
- [ ] Blogs and news reviewed
- [ ] Videos and webinars reviewed
- [ ] Research pack created

## ChatGPT

- [ ] Current web research complete
- [ ] Long-source synthesis complete
- [ ] Contradictions identified
- [ ] Practical implications identified
- [ ] Research pack created

## Gemini

- [ ] Independent deep search complete
- [ ] Google-specific changes reviewed
- [ ] Missed sources identified
- [ ] Contradictions identified
- [ ] Research pack created

## Claude Projects

- [ ] All packs uploaded
- [ ] Foundation context current
- [ ] GitHub export current
- [ ] Comparison complete
- [ ] Source Register updated
- [ ] Claim Register updated
- [ ] Content impact report complete
- [ ] Publication pack complete

---

# Wiki-Style Public Resource

The public website should behave like a trustworthy, maintained wiki.

This means:

- clear page histories
- visible review dates
- public changelog
- public correction routes
- public contribution routes
- stable URLs
- related pages
- evidence links
- regular updates
- transparent limitations
- clear ownership

The project should feel alive without appearing unstable.

---

# Public Feedback and Revisions

Every public page should invite people to:

- report an error
- flag outdated guidance
- suggest a revision
- suggest a source
- suggest a new page
- share a charity workflow
- join research
- contact Matthew James Nel

Suggested wording:

> Spotted something outdated, unclear or incomplete? Contact Matthew James Nel or suggest an update through the project feedback route.

Feedback should capture:

- page title
- page URL
- page version
- suggested change
- source
- organisation or role where relevant
- permission to follow up

Do not ask users to submit sensitive personal or safeguarding information.

---

# Public Revision Workflow

```text
Public feedback
      ↓
Triage
      ↓
Evidence check
      ↓
Decision
      ↓
Draft revision
      ↓
Human review
      ↓
GitHub pull request
      ↓
Release
      ↓
Changelog
```

---

# Feedback Categories

Use:

- factual correction
- outdated source
- unclear wording
- missing example
- missing workflow
- tool change
- accessibility issue
- safeguarding concern
- GDPR concern
- technical issue
- new research
- contributor suggestion

---

# Solid Free Resource Commitment

The core knowledge base should remain a strong free resource for all charities.

Free core content should include:

- Before You Paste
- GDPR basics
- safeguarding guidance
- trustee guidance
- charity workflows
- core templates
- AI tool guidance
- research summaries
- changelog
- roadmap
- correction routes

Possible paid services must remain separate from core public safety guidance.

The project may later offer:

- workshops
- consultancy
- implementation support
- premium packs
- bespoke reviews

These must not weaken or restrict the free resource.

---

# Editorial Independence

Research tools and providers must not control the project's conclusions.

The project should:

- disclose commercial relationships
- separate affiliate links from evidence
- use the same evaluation standard for every provider
- preserve negative findings where supported
- correct errors publicly
- avoid vendor-led rankings

---

# Copyright and File Handling

When uploading research packs and sources to Claude Projects:

- use lawfully obtained materials
- do not upload pirated books
- do not reproduce large copyrighted extracts
- use structured notes where full-text storage is not permitted
- record copyright status
- preserve attribution
- keep restricted materials out of GitHub

---

# Privacy and Safeguarding

Research packs must not include:

- identifiable beneficiary data
- raw safeguarding case details
- donor records
- employee case files
- confidential charity information
- private contact details
- raw interview transcripts containing identifiers

Use:

- aggregated findings
- anonymised summaries
- fictional examples
- synthetic data
- public information

---

# Quality Standards for Research Packs

Every pack should:

- state the tool used
- state the date range
- identify the jurisdiction
- link sources
- distinguish primary and supporting evidence
- identify uncertainty
- explain limitations
- identify practical charity impact
- avoid unsupported recommendations
- name pages and claims affected
- include a human-review section

---

# Research Pack Acceptance Checklist

Before uploading to Claude Projects:

- [ ] Filename follows the standard.
- [ ] Version is included.
- [ ] Research tool is named.
- [ ] Date range is included.
- [ ] Research question is clear.
- [ ] Sources are linked.
- [ ] Primary sources are separated.
- [ ] Blogs and news are labelled correctly.
- [ ] Videos and podcasts are documented.
- [ ] Charity relevance is explained.
- [ ] Conflicting evidence is recorded.
- [ ] Limitations are included.
- [ ] Affected pages are listed.
- [ ] Affected claims are listed.
- [ ] No sensitive data is included.
- [ ] Copyright has been considered.
- [ ] Human review is required.

---

# Research Pack Archive

Preserve older packs.

Suggested structure:

```text
research-packs/
├── 2026/
│   ├── 2026-08/
│   ├── 2026-09/
│   └── 2026-10/
├── archive/
└── index.md
```

Each monthly folder should contain:

- Perplexity pack
- ChatGPT pack
- Gemini pack
- specialist packs
- combined master pack
- content-impact report
- publication pack
- release notes
- handoff

---

# Research Pack Index

Maintain an index with:

| Pack ID | Month | Tool | Topic | Status | Sources | Pages Affected |
|---|---|---|---|---|---:|---|
| RP-2026-08-001 | Aug 2026 | Perplexity | General update | Reviewed | 42 | 7 |
| RP-2026-08-002 | Aug 2026 | ChatGPT | General update | Reviewed | 37 | 5 |
| RP-2026-08-003 | Aug 2026 | Gemini | General update | Reviewed | 29 | 4 |

---

# Success Measures

Track:

- research packs completed
- sources discovered
- primary sources added
- claims updated
- pages updated
- pages confirmed current
- corrections received
- corrections completed
- average time from change to publication
- research-pack duplication
- outdated pages identified
- charity feedback received
- contributor participation

Do not measure success only by volume.

A smaller pack that identifies one critical change may be more valuable than a large pack with no practical impact.

---

# Monthly Research-Pack Prompt for Perplexity

```text
Create a comprehensive monthly research pack for the AI Safe Use Knowledge Base for UK Charities.

Research:

- UK regulators
- UK Government
- AI provider documentation
- charity-sector bodies
- research papers
- news
- blogs
- videos
- webinars
- podcasts
- public charity case studies

Focus on:

- AI safety
- UK GDPR
- safeguarding
- charity governance
- tool changes
- responsible AI
- accessibility
- procurement
- charity workflows
- small and medium-sized charities

Produce a structured Markdown pack using the project research-pack template.

Prioritise primary sources.
Separate primary evidence from commentary.
Identify pages and claims that may need updating.
Include full links and dates.
State limitations.
```

---

# Monthly Research-Pack Prompt for ChatGPT

```text
Conduct a deep, current research review for the AI Safe Use Knowledge Base for UK Charities.

Search and synthesise:

- official regulator guidance
- government publications
- AI provider documentation
- academic research
- charity-sector reports
- current news
- professional blogs
- videos
- webinars
- podcasts
- public case studies

Compare sources and identify contradictions.

Produce a structured Markdown research pack containing:

- executive summary
- latest developments
- primary sources
- supporting sources
- evidence confidence
- charity implications
- risks
- opportunities
- affected claims
- affected pages
- content gaps
- required specialist review
- full source list
- known limitations

Do not invent citations.
Do not treat provider marketing as independent evidence.
```

---

# Monthly Research-Pack Prompt for Gemini

```text
Create an independent deep-search research pack for the AI Safe Use Knowledge Base for UK Charities.

Review:

- current Google and Gemini changes
- broader AI provider changes
- regulator guidance
- charity-sector evidence
- research papers
- news
- blogs
- videos
- webinars
- podcasts

Identify sources or interpretations that Perplexity and ChatGPT may have missed.

Produce:

- key findings
- additional sources
- conflicting evidence
- evidence strengths and weaknesses
- charity implications
- affected pages
- affected claims
- unresolved questions
- known limitations
- full source list

Use Markdown and follow the standard research-pack format.
```

---

# Claude Projects Master Intake Prompt

```text
You are the permanent research and editorial system for the AI Safe Use Knowledge Base for UK Charities.

Original Creator: Matthew James Nel
Maintained and edited by: Matthew James Nel
LinkedIn: https://www.linkedin.com/in/matthewjamesnel

You will regularly receive versioned Markdown research packs created through:

- Perplexity
- ChatGPT
- Google Gemini
- books and industry eBooks
- charity libraries
- regulator sources
- research papers
- news
- blogs
- videos
- webinars
- podcasts
- charity feedback

Treat these packs as new research inputs.

Do not treat them as automatically correct.

For every new pack:

1. verify source quality
2. identify duplicate sources
3. identify primary sources
4. identify outdated sources
5. compare with the current Project foundation
6. compare with the current GitHub export
7. identify affected claims
8. identify affected pages
9. identify pages confirmed as current
10. update Source Register
11. update Claim Register
12. update Regulatory Watchlist
13. produce publication-ready Markdown
14. recommend versions
15. prepare changelog and release notes
16. flag specialist review
17. preserve creator attribution
18. require human approval

The public knowledge base should operate like a maintained wiki.

Expect regular corrections, public suggestions and charity feedback.

The core resource must remain free, practical, evidence-led and useful for charities of all sizes, with the main experience prioritising small and medium-sized charities.
```

---

# Definition of Done

A research cycle is complete when:

- Perplexity pack exists
- ChatGPT pack exists
- Gemini pack exists
- specialist packs exist where needed
- combined master pack exists
- packs are uploaded to Claude Projects
- sources are reviewed
- Source Register is updated
- Claim Register is updated
- affected pages are identified
- publication Markdown is complete
- human review is complete
- GitHub release is published where needed
- changelog is updated
- public feedback routes remain visible
- the next review date is set

---

# Success Criteria

This research-pack and update system succeeds when:

- the knowledge base responds quickly to important changes
- research from several tools is structured consistently
- Claude Projects receives reliable monthly context
- books and longform knowledge deepen the foundation
- public feedback improves the guidance
- the GitHub site behaves like a trusted maintained wiki
- evidence remains traceable
- the resource remains free and useful for all charities
- small and medium-sized charities remain the primary audience
- human review remains central
