# AI Safe Use Knowledge Base for UK Charities
## System Automation and Knowledge Update Model

**Version:** 1.0.0  
**Status:** Foundation Document  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

# Purpose

This document defines the complete knowledge-to-publication system for the AI Safe Use Knowledge Base for UK Charities.

The system is designed so that new evidence can be added regularly through:

- uploaded documents
- books and permitted extracts
- regulator guidance
- charity-sector reports
- online sources
- AI provider documentation
- survey findings
- interview findings
- feedback from charities
- direct editorial notes from Matthew James Nel

Claude should then use that material to identify what has changed, determine which public pages are affected, produce updated Markdown and prepare a controlled GitHub publication.

The long-term goal is a maintainable system that can update the knowledge base as evidence changes without manually rewriting the website from scratch.

# System Vision

The system should operate as:

```text
New evidence and feedback
            ↓
Claude Project knowledge base
            ↓
Source processing and change detection
            ↓
Proposed updates to the knowledge base
            ↓
Human review by Matthew James Nel
            ↓
GitHub update or pull request
            ↓
Validation and website build
            ↓
Live public knowledge base
            ↓
New charity feedback and research
            ↺
```

# What Is Workable

The following workflow is workable:

1. Add new documents, books, reports, extracts, notes or structured findings to Claude Projects.
2. Give each source a clear name, date, organisation and source type.
3. Ask Claude to compare the new material with the current GitHub knowledge base.
4. Ask Claude to identify affected claims, pages, templates and tool reviews.
5. Ask Claude to generate complete replacement or new Markdown files.
6. Review the proposed changes.
7. Send the approved changes to GitHub.
8. Let GitHub rebuild and publish the site.
9. Record the release and next review date.

This can be managed manually at first and automated more deeply later.

# Important Limitation

Claude Projects is the research and editorial environment.

It should not be assumed to have unrestricted, unattended write access to the GitHub repository.

A connected GitHub repository can provide current repository context to Claude, but publication still needs one of the following:

- manual upload or editing in GitHub
- GitHub web editor
- VS Code or GitHub Desktop
- Claude Code
- Claude Code GitHub Actions
- another explicitly configured connector or automation

Do not describe Claude Projects alone as a fully automatic content management and deployment system.

# Recommended Automation Levels

## Level 1 — Guided Manual Publishing

Best for the initial release.

Workflow:

1. Upload new evidence to Claude Projects.
2. Ask Claude for a change-impact report.
3. Ask Claude for complete Markdown files.
4. Download or copy the files.
5. Add them to GitHub.
6. Review the GitHub diff.
7. Commit and publish.

Benefits:

- simple
- low technical overhead
- strong human control
- suitable while the site is small

Limitations:

- files must be moved manually
- navigation changes may require manual updates
- validation must be triggered manually or through GitHub Actions

## Level 2 — Repository-Assisted Publishing

Use when the GitHub repository is connected to Claude Projects.

Workflow:

1. Claude reads selected repository files as context.
2. New sources are uploaded to the Project.
3. Claude compares the evidence with the current repository.
4. Claude generates exact paths and replacement Markdown.
5. Matthew applies the files through GitHub or VS Code.
6. GitHub Actions validates and publishes.

Benefits:

- Claude understands what is already live
- fewer duplicated or conflicting pages
- better change detection
- stable audit trail

Limitations:

- GitHub context and Project uploads remain different information stores
- changes are not necessarily written back automatically
- repository context should be refreshed when required

## Level 3 — Claude Code Pull-Request Workflow

Use when the repository becomes larger.

Workflow:

1. Claude Projects produces an approved change brief.
2. The brief is saved in the repository or passed to Claude Code.
3. Claude Code reads the repository instructions.
4. Claude Code updates all affected files.
5. It runs validation and the site build.
6. It opens a pull request.
7. Matthew reviews the changes.
8. The approved pull request is merged.
9. GitHub publishes the website.

Benefits:

- multi-file updates
- consistent metadata
- automatic validation
- reviewable pull requests
- reduced repetitive work

Human approval should remain mandatory for high-risk guidance.

## Level 4 — Scheduled or Event-Driven Automation

Use only after the editorial and evidence systems are mature.

Possible triggers:

- a scheduled monthly review
- a new source added to a controlled source location
- a GitHub issue labelled for update
- a provider documentation change
- a new monthly research pack
- an urgent correction request

Possible automated actions:

- create a research-review issue
- generate a draft impact report
- create a change branch
- update low-risk metadata
- flag expired review dates
- run link and source validation
- open a draft pull request

The system should not automatically publish legal, safeguarding, GDPR or tool-safety recommendations without human review.

# Authoritative Information Stores

The project uses several information stores with different roles.

## Claude Project Knowledge

Contains:

- foundation documents
- source documents
- books and permitted extracts
- research material
- provider documentation
- survey summaries
- interview summaries
- feedback synthesis
- current project instructions

Purpose:

- research
- retrieval
- comparison
- synthesis
- drafting

## GitHub Repository

Contains:

- public guidance
- public templates
- page metadata
- evidence records
- claim records
- public aggregated research
- changelog
- release notes
- website configuration
- validation workflows

Purpose:

- permanent public source of truth
- version control
- publishing
- audit trail
- collaboration

## Controlled Research Storage

Contains:

- raw survey data
- contact details
- interview recordings
- consent records
- potentially identifying free-text responses
- restricted research notes

Purpose:

- secure research operations

Raw personal research data must not be uploaded to a public GitHub repository.

## Public Website

Contains:

- the current published version of GitHub content
- public guidance
- public templates
- evidence summaries
- research findings
- contact and feedback routes

Purpose:

- public access
- learning
- decision support
- charity participation

# Source Intake Process

Every source added to Claude should include:

- source ID
- clear filename
- title
- organisation or author
- publication date
- last updated date where available
- date accessed
- URL
- source type
- jurisdiction
- evidence tier
- purpose for adding it
- known limitations
- next review date

Recommended filename pattern:

```text
ORGANISATION_YYYY-MM_SHORT-TITLE_FILETYPE
```

Examples:

```text
ICO_2026-07_AI-DATA-PROTECTION_GUIDANCE.pdf
NCVO_2026-06_AI-SMALL-CHARITIES.html
ANTHROPIC_2026-07_CLAUDE-DATA-PRIVACY.pdf
SURVEY_2026-Q3_AGGREGATED-FINDINGS.csv
BOOK_2024_RESPONSIBLE-AI_NOTES.md
```

# Knowledge Ingestion Rules

When a new source is uploaded, Claude should:

1. Identify the source and its evidence tier.
2. Summarise the relevant material.
3. Record important claims.
4. Separate legal statements from commentary.
5. Identify the source's jurisdiction.
6. Record limitations.
7. Compare it with current sources.
8. Identify whether it supersedes older material.
9. Identify affected public pages.
10. Recommend a review date.
11. Avoid publishing claims that cannot be verified.

# Online Source Process

For online sources:

- prioritise primary and official sources
- record the full source URL
- record access and update dates
- capture a stable summary in the source register
- save permitted extracts or notes where useful
- avoid relying only on live URLs that may change
- review rapidly changing provider documentation regularly
- do not reproduce copyrighted material beyond what is permitted

Claude should not rely on generic internet commentary when a primary source exists.

# Book and Long-Document Process

Books and long reports should be used as supporting context rather than unquestioned authority.

For each book or long document:

- record bibliographic details
- record jurisdiction and publication date
- identify relevant chapters
- create a structured summary
- distinguish author opinion from evidence
- identify concepts useful to the knowledge base
- check legal or regulatory claims against current primary sources
- record copyright limitations
- do not publish large copied extracts

# Change Detection

Claude should compare each new source against:

- the source register
- the claim register
- current public Markdown
- the Before You Paste framework
- templates
- tool reviews
- glossary
- learning paths
- known limitations
- previous release notes

Every finding should be classified as:

- no change required
- clarification
- factual correction
- new evidence
- changed regulatory guidance
- changed provider documentation
- changed tool recommendation
- new workflow guidance
- template update
- navigation update
- urgent correction
- specialist review required
- monitor only

# Impact Report

Before drafting public changes, Claude should produce:

```md
# Knowledge Update Impact Report

## Review Period

## New Sources

## Existing Sources Rechecked

## Significant Findings

## Legal or Regulatory Changes

## Provider Changes

## Charity Research Findings

## Claims Affected

## Pages Affected

## Templates Affected

## Pages Confirmed as Current

## Recommended Changes

## Urgent Corrections

## Specialist Review Required

## Unresolved Questions

## Recommended Release Version
```

# Publication Pack

For every approved update, Claude should produce:

- impact report
- complete Markdown files
- exact repository paths
- source-register updates
- claim-register updates
- review-queue updates
- navigation changes
- page-version changes
- changelog entry
- release notes
- validation checklist
- publication handoff
- known limitations

Do not provide only partial paragraphs when a complete file replacement is required.

# Human Review Authority

Matthew James Nel is the original creator, editor and final publication authority.

Public attribution should use:

- **Original Creator:** Matthew James Nel
- **Maintained and edited by:** Matthew James Nel
- **LinkedIn:** https://www.linkedin.com/in/matthewjamesnel

No automated workflow should remove or change this attribution without explicit approval.

Human review should confirm:

- evidence accuracy
- editorial quality
- proportionality
- charity relevance
- legal boundaries
- safeguarding implications
- tool-review accuracy
- versioning
- release notes
- publication readiness

# Review Gates by Risk

## Low-Risk Change

Examples:

- typo correction
- broken link
- metadata update
- accessibility label
- simple navigation fix

May use a streamlined review.

## Medium-Risk Change

Examples:

- new example
- workflow clarification
- updated tool feature
- new template section
- research-informed recommendation

Requires full editorial and evidence review.

## High-Risk Change

Examples:

- GDPR interpretation
- safeguarding guidance
- automated decision-making
- special category data
- children
- HR disputes
- health information
- tool privacy recommendation
- serious incident guidance

Requires:

- full evidence review
- explicit human approval
- specialist review where appropriate
- documented limitations
- no automatic direct publication

# GitHub Update Methods

## Manual File Upload

Suitable for early-stage use.

Claude creates complete `.md` files.

Matthew uploads them to the correct GitHub paths.

## GitHub Web Editor

Suitable for small changes.

Use preview and diff before committing.

## VS Code or GitHub Desktop

Suitable for multiple coordinated changes and local previews.

## Claude Code

Suitable for large updates, validation and pull-request creation.

## GitHub Actions

Suitable for:

- site deployment
- link checks
- frontmatter validation
- source-ID validation
- review-date checks
- search indexing
- scheduled review reminders
- draft pull-request workflows

# Automatic Website Publishing

The public site should rebuild when approved changes are merged into the publishing branch.

Recommended flow:

```text
Approved Markdown
        ↓
Merge to main
        ↓
GitHub Actions
        ↓
Validation
        ↓
VitePress build
        ↓
GitHub Pages deployment
        ↓
Live website update
```

If validation fails, the site should not publish the broken update.

# Monthly Update Prompt

Use in Claude Projects:

```text
Run the monthly knowledge update for the AI Safe Use Knowledge Base for UK Charities.

Original Creator and Editor: Matthew James Nel
LinkedIn: https://www.linkedin.com/in/matthewjamesnel

Use all Project Instructions and foundation documents.

Review:
- newly uploaded documents
- books and research notes
- current online sources
- current GitHub knowledge-base content
- charity feedback
- aggregated survey findings
- open issues
- review dates

Produce:

1. A source intake summary.
2. A knowledge update impact report.
3. Claims affected.
4. Pages and templates affected.
5. Pages confirmed as current.
6. Required corrections.
7. New content recommendations.
8. Specialist review requirements.
9. A recommended release version.
10. Complete publication-ready Markdown files.
11. Exact GitHub paths.
12. Source-register changes.
13. Claim-register changes.
14. Review-queue changes.
15. Changelog entry.
16. Release notes.
17. Validation checklist.
18. Known limitations.
19. Publication handoff.

Do not rewrite unaffected pages.
Do not publish unsupported claims.
Do not remove creator attribution.
Separate legal requirements, regulator guidance, provider facts, sector evidence and playbook recommendations.
```

# GitHub Handoff Prompt

Use after the publication pack has been reviewed:

```text
Prepare the approved GitHub publication handoff.

For each approved file provide:
- repository path
- action: create, replace, rename, deprecate or archive
- complete file content
- page version
- source IDs
- claim IDs
- navigation impact
- validation requirements

Then provide:
- suggested branch name
- suggested commit message
- pull-request title
- pull-request summary
- changelog entry
- release note
- post-deployment checks

Preserve:
Original Creator: Matthew James Nel
Maintained and edited by: Matthew James Nel
LinkedIn: https://www.linkedin.com/in/matthewjamesnel
```

# Scheduled Review Opportunities

The system may eventually schedule:

- monthly source-review tasks
- quarterly assurance reviews
- provider documentation checks
- expired page-review checks
- broken-link checks
- survey-summary imports
- draft release preparation

Scheduling should create a review or draft, not publish high-risk guidance automatically.

# Failure and Recovery

If Claude produces unreliable or conflicting changes:

1. Do not publish.
2. Record the unresolved issue.
3. Return to the supporting sources.
4. check the current GitHub version.
5. seek specialist review where needed.
6. revise the impact report.
7. create a corrected publication pack.

If an incorrect update is published:

1. revert the GitHub commit
2. restore the previous release
3. publish a correction notice
4. update the changelog
5. review why the control failed
6. strengthen the workflow

# Success Criteria

The system succeeds when Matthew James Nel can:

- add new knowledge each month
- ask Claude to process it consistently
- compare new evidence with the live website
- receive complete updated Markdown
- review every material change
- publish through GitHub
- update the website without rebuilding it manually
- trace every claim and change
- keep the resource current as regulations, tools and sector needs evolve

# Definition of the System

This is not a one-off website build.

It is a living evidence and publishing system that continuously converts reliable knowledge, charity experience and regulatory change into accessible public guidance.
