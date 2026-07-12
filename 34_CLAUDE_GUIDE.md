# AI Safe Use Knowledge Base for UK Charities
# 34_CLAUDE_GUIDE.md

**Version:** 1.0.0  
**Status:** Foundation Document  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** Monthly

# Purpose

This guide helps UK charities use Claude safely, confidently and proportionately.

It also explains how Claude supports the maintenance of the AI Safe Use Knowledge Base for UK Charities.

This document should be read alongside:

- `06_BEFORE_YOU_PASTE_FRAMEWORK.md`
- `28_GDPR_DECISION_RULES.md`
- `29_SAFEGUARDING_GUIDANCE.md`
- `32_AI_TOOL_EVALUATION_FRAMEWORK.md`

This guidance is not legal advice.

# What Is Claude?

Claude is a conversational AI assistant that can support tasks such as:

- writing
- editing
- summarising
- planning
- research support
- coding
- document review
- data analysis
- project-based knowledge work

Claude should support human judgement, not replace it.

# Best Uses for Charities

Suitable examples include:

- drafting website copy
- rewriting content in plain English
- summarising public reports
- planning campaigns
- structuring funding applications
- preparing meeting agendas
- drafting policy first versions
- creating training materials
- reviewing long documents
- analysing non-sensitive research summaries
- organising project knowledge
- preparing GitHub Markdown

# Green Uses

Usually suitable with normal human review:

- public information
- fictional examples
- generic templates
- published reports
- brainstorming
- grammar and editing
- content structure
- plain-English rewrites
- first-draft code using no secrets
- summarising approved public sources

# Amber Uses

Pause and check before continuing:

- anonymised internal reports
- unpublished strategy
- internal planning
- aggregated survey findings
- internal meeting notes
- draft policies
- project knowledge bases
- connected repositories
- uploaded documents containing internal information

Amber uses may require:

- an approved organisational account
- manager approval
- data-protection review
- safeguarding review
- clear retention and access rules
- meaningful human review

# Red Uses

Do not place into a general-purpose AI workspace without a formally approved arrangement:

- safeguarding records
- identifiable beneficiary information
- donor databases
- payroll
- HR case files
- grievance or disciplinary records
- passwords
- API keys
- confidential contracts
- privileged legal advice
- medical information
- identifiable interview transcripts
- raw research data containing personal information

# Claude Projects

Claude Projects can be useful for sustained work involving:

- project instructions
- uploaded documents
- recurring research
- editorial guidance
- source comparison
- long-term content development
- current website context
- monthly update packs

For this project, Claude Projects is used as the research and editorial environment.

It should contain:

- foundation documents
- regulator guidance
- charity-sector knowledge
- provider documentation
- books and permitted extracts
- research summaries
- aggregated survey findings
- current website exports
- monthly update material

Claude Projects should not be treated as the final public source of truth.

Approved public content belongs in GitHub.

# Claude and GitHub

Claude may be used to:

- review the current repository
- compare new evidence with live content
- draft updated Markdown
- prepare change-impact reports
- update release notes
- prepare changelog entries
- identify affected pages
- generate exact file paths
- prepare publication handoffs

The controlled workflow is:

```text
New evidence
    ↓
Claude Project review
    ↓
Publication-ready Markdown
    ↓
Human review
    ↓
GitHub
    ↓
Automated site deployment
```

Claude should not publish high-risk guidance without human approval.

# Claude Code

Claude Code may be introduced when the repository becomes larger.

Useful tasks may include:

- updating many Markdown files
- checking links
- validating metadata
- updating navigation
- running site builds
- preparing pull requests
- implementing approved change briefs

Claude Code is optional for the first version.

The core workflow can still operate through:

- Claude Projects
- GitHub web editor
- VS Code
- GitHub Desktop

# Good Prompt Structure

A useful prompt should explain:

- the role
- the audience
- the task
- the source material
- the constraints
- the required output
- the review standard

Example:

> Review the attached public report for a small UK charity audience. Summarise the key findings in plain English, separate facts from recommendations, identify any GDPR implications and produce a Markdown draft with sources and review notes.

# Good Project Prompt

For recurring work:

> Use the Project Instructions and foundation documents. Compare the new source with the current GitHub knowledge base. Identify affected claims and pages. Produce complete updated Markdown, version changes, changelog wording and unresolved questions. Do not rewrite unaffected pages.

# Human Review

Always check:

- factual accuracy
- source support
- legal wording
- charity relevance
- tone
- accessibility
- bias
- safeguarding
- confidentiality
- copyright
- metadata
- links
- versioning

Claude output is a draft until reviewed.

# Common Mistakes

Avoid:

- trusting an answer without checking
- treating Claude as a legal adviser
- uploading sensitive case information
- assuming uploaded files are automatically safe
- relying on memory instead of current sources
- allowing Claude to rewrite unaffected content
- publishing without source review
- assuming all account types have the same controls
- confusing a connected repository with automatic publication
- using one conversation as the permanent record

# Governance Requirements

Charities using Claude should define:

- approved account types
- approved use cases
- prohibited data
- who owns the workspace
- who can upload documents
- how access is managed
- how outputs are reviewed
- how incidents are reported
- how tools are reassessed
- how staff and volunteers are trained

# Document Upload Rules

Before uploading a document, ask:

- Does it contain personal data?
- Does it contain special category data?
- Does it contain safeguarding information?
- Is it confidential?
- Is the account approved?
- Is the upload necessary?
- Can a public or fictional version be used?
- Who will review the output?

# Research Use

Claude can help with:

- literature review support
- source summaries
- research synthesis
- survey theme analysis
- question design
- content gap analysis
- evidence mapping
- claim checking

Do not use Claude to:

- fabricate findings
- invent citations
- treat a small sample as representative
- replace research ethics
- publish raw identifiable data
- make unsupported legal conclusions

# Coding and Website Work

Claude can assist with:

- Markdown
- HTML
- CSS
- JavaScript
- documentation
- navigation
- accessibility suggestions
- VitePress configuration
- GitHub workflow drafts

Always:

- test generated code
- review security
- remove secrets
- validate accessibility
- preview before publishing
- preserve version control

# Charity Size Guidance

## Small Charities

Use Claude for:

- low-risk drafting
- public-content summaries
- simple project knowledge
- basic Markdown
- first policy drafts

Keep controls simple:

- one approved account
- one named owner
- clear do-not-paste rules
- human review

## Medium-Sized Charities

Add:

- team-level ownership
- approved workspaces
- role-based guidance
- document-upload rules
- use registers
- quarterly review

## Large or Complex Charities

Add:

- enterprise controls
- formal procurement
- system inventory
- technical assurance
- DPIAs
- audit
- specialist review
- integration governance

# Monthly Review Triggers

Review this guide when:

- Anthropic changes privacy documentation
- plan differences change
- Project features change
- connector behaviour changes
- Claude Code changes
- data retention statements change
- regulator guidance changes
- charity feedback identifies confusion
- new high-risk use cases emerge

# Tool Review Record

Every review should record:

- product
- plan
- account type
- region where relevant
- documentation reviewed
- access date
- material changes
- affected pages
- next review date

# Monthly Claude Review Prompt

Use:

```text
Review the Claude Guide for the AI Safe Use Knowledge Base for UK Charities.

Check:

- current Anthropic documentation
- account and plan differences
- privacy and retention statements
- Project capabilities
- GitHub integration
- Claude Code workflow
- connector changes
- charity feedback
- regulator guidance

Produce:

1. Confirmed current information.
2. Material changes.
3. Unsupported or outdated claims.
4. Pages affected.
5. Required updates.
6. Source Register changes.
7. Claim Register changes.
8. Recommended page version.
9. Complete updated Markdown.
10. Known limitations.

Do not rely on marketing language.
Do not publish without human review.
```

# Success

This guide succeeds when charity staff:

- understand what Claude is useful for
- know what not to upload
- recognise the difference between Projects, GitHub and Claude Code
- keep human judgement central
- use Claude as a practical assistant rather than an authority
- apply proportionate governance for their organisation size

It also succeeds when Matthew James Nel can use Claude to maintain the knowledge base consistently, transparently and safely.
