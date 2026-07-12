# Research Prompt Pack

Use these prompts to produce large Markdown research packs in Perplexity, ChatGPT, Gemini or other research tools.

The goal is not to publish the raw output. The goal is to create structured research files that Codex can compare with the specification corpus and turn into reviewed GitHub page updates.

Recommended workflow:

1. Run the Perplexity discovery prompt for a topic.
2. Run the ChatGPT synthesis prompt using the Perplexity output and any extra source links.
3. Save each output as Markdown in `monthly-update-packs/YYYY-MM/`.
4. Ask Codex to process those files into `docs/` page updates, navigation updates, source notes and changelog entries.

Do not paste personal data, safeguarding information, confidential charity material, passwords, API keys or private research responses into public AI tools.

## File Naming

Use names like:

```text
monthly-update-packs/2026-08/
├── 01_perplexity_before-you-paste.md
├── 02_chatgpt_before-you-paste_synthesis.md
├── 03_perplexity_gdpr-ai-charities.md
├── 04_chatgpt_gdpr-ai-charities_synthesis.md
└── 99_codex_handoff.md
```

## Prompt 1: Perplexity Deep Research Pack

Use this for broad discovery with current references.

```md
You are producing a large Markdown research pack for AI Safe Charity Index, a public MkDocs knowledge base helping UK charities use AI safely, confidently and responsibly.

Research topic:

[INSERT TOPIC]

Audience:

- UK charities
- small and medium charities
- charity staff
- trustees
- volunteers
- charity managers
- data-protection leads
- safeguarding leads

Research priorities:

1. UK charity relevance
2. current regulator guidance
3. GDPR and data-protection implications
4. safeguarding implications
5. trustee and governance duties
6. practical workflows
7. tool/provider terms where relevant
8. risks, limitations and uncertainty
9. examples that can be safely generalised

Prioritise primary and high-quality sources:

- Information Commissioner's Office
- Charity Commission
- UK Government
- legislation and statutory guidance
- Fundraising Regulator where relevant
- NCVO
- Charity Digital
- CAST
- DataKind UK
- SCVO, WCVA, NICVA
- recognised safeguarding bodies
- official AI provider documentation
- peer-reviewed or professional research
- reputable charity-sector case studies

Avoid relying on:

- unsourced claims
- vendor marketing alone
- social media posts
- old AI product information
- generic US-only guidance unless clearly labelled
- AI-generated citations

Output a comprehensive Markdown file with this exact structure:

# Perplexity Research Pack: [Topic]

## 1. Executive Summary

Write 8-12 bullet points summarising the most important findings.

## 2. Search Scope

Include:

- date searched
- date range considered
- jurisdictions covered
- source types searched
- known exclusions

## 3. Key Questions Answered

List the practical questions UK charities need answered.

## 4. Current Position

Summarise the current state of guidance and practice.

Separate:

- law or regulation
- regulator guidance
- charity-sector good practice
- provider documentation
- expert commentary
- unresolved uncertainty

## 5. Recent Changes

Identify changes from the last 12 months where possible.

For each change include:

- what changed
- when it changed
- source
- why it matters for charities
- whether public guidance may need updating

## 6. Primary Sources

For every primary source, include:

- source ID candidate
- title
- organisation or author
- URL
- publication date
- last updated date
- accessed date
- jurisdiction
- source type
- evidence tier
- key relevant points
- exact claims it supports
- limitations

## 7. Supporting Sources

Use the same structure as primary sources, but explain why each source is supporting rather than primary.

## 8. Practical Implications for Charities

Group by:

- small charities
- medium charities
- large or complex charities
- trustees
- staff and volunteers
- safeguarding leads
- data-protection leads

## 9. Green / Amber / Red Guidance Implications

Suggest how this topic affects the Before You Paste model.

Use:

### Green
### Amber
### Red

Explain why each example belongs there.

## 10. Risks and Failure Modes

List practical ways charities could get this wrong.

Include:

- privacy risks
- safeguarding risks
- governance risks
- accuracy risks
- bias risks
- procurement risks
- reputational risks

## 11. Claims Requiring Verification

List claims that should not be published until checked.

For each claim include:

- claim
- source
- why verification is needed
- recommended verification route

## 12. Conflicting Evidence or Uncertainty

Identify contradictions, unclear areas, outdated guidance or provider ambiguity.

## 13. Recommended Public Pages to Update

Map findings to this site structure:

- docs/before-you-paste/
- docs/ai-and-data-protection/
- docs/everyday-charity-work/
- docs/governance/
- docs/tools/
- docs/templates.md
- docs/research-and-community/
- docs/about/
- docs/updates/

For each page include:

- page path
- change needed
- priority: high / medium / low
- risk level: Green / Amber / Red
- evidence confidence: high / medium / low

## 14. Recommended New Pages

For each suggested page include:

- proposed title
- proposed URL path
- target audience
- page purpose
- outline
- required sources
- priority

## 15. Navigation Recommendations

Recommend whether the topic needs:

- a new nav item
- a child page under an existing nav item
- a related guidance block
- a glossary entry
- a FAQ entry
- no nav change

Explain your reasoning.

## 16. Source Register Candidates

Return a Markdown table with:

| source_id_candidate | title | organisation | url | date | accessed | jurisdiction | evidence_tier | affected_pages |

## 17. Claim Register Candidates

Return a Markdown table with:

| claim_id_candidate | claim | source_id_candidate | confidence | risk_level | affected_pages | review_needed |

## 18. Draft Page Outline

Create a practical page outline for the highest-priority public page.

Do not write final approved guidance.

## 19. Known Limitations

Explain what this research could not confirm.

## 20. Full References

List every referenced source with URL.

Important rules:

- Include references throughout, not only at the end.
- Do not invent citations.
- If you cannot verify something, say so.
- Do not present legal advice as certainty.
- Do not recommend publication without human review.
```

## Prompt 2: ChatGPT Large Synthesis and GitHub Impact Pack

Use this after Perplexity has produced a source-led research pack.

```md
You are producing a large Markdown synthesis and GitHub impact pack for AI Safe Charity Index.

The project is a MkDocs + Material public knowledge base for UK charities.

Your job is to turn research into a structured implementation plan for Codex.

Topic:

[INSERT TOPIC]

Inputs:

[PASTE PERPLEXITY RESEARCH PACK]

[PASTE EXTRA SOURCES OR NOTES]

Existing site sections:

- Home: docs/index.md
- Start Here: docs/start-here/index.md
- Before You Paste: docs/before-you-paste/index.md
- AI and Data Protection: docs/ai-and-data-protection/index.md
- Everyday Charity Work: docs/everyday-charity-work/index.md
- Governance: docs/governance/index.md
- Tools: docs/tools/index.md
- Templates: docs/templates.md
- Learning Paths: docs/learning-paths/index.md
- Research and Community: docs/research-and-community/index.md
- Updates: docs/updates/index.md
- About: docs/about/index.md
- FAQ: docs/about/faq.md
- Glossary: docs/about/glossary.md
- Contact: docs/about/contact.md
- Accessibility: docs/accessibility/index.md
- Privacy: docs/privacy/index.md

Root specification files to align with:

- 05_KNOWLEDGE_BASE_INFORMATION_ARCHITECTURE.md
- 06_BEFORE_YOU_PASTE_FRAMEWORK.md
- 07_CONTENT_AND_TEMPLATE_SPECIFICATIONS.md
- 24_MONTHLY_RESEARCH_PROCESS.md
- 28_GDPR_DECISION_RULES.md
- 29_SAFEGUARDING_GUIDANCE.md
- 30_TRUSTEE_GUIDANCE.md
- 32_AI_TOOL_EVALUATION_FRAMEWORK.md
- 50_NAVIGATION_RULES.md
- 52_ACCESSIBILITY_STANDARD.md
- 53_METADATA_STANDARD.md
- 54_LINKING_STANDARD.md
- 55_RELEASE_CHECKLIST.md
- 61_RESEARCH_PACK_AND_KNOWLEDGE_UPDATE_SYSTEM.md

Output a comprehensive Markdown file with this exact structure:

# ChatGPT Synthesis and GitHub Impact Pack: [Topic]

## 1. Executive Summary

Summarise what should change on the public site.

## 2. Evidence Quality Review

Assess:

- source quality
- source currentness
- jurisdiction fit
- charity-sector fit
- provider-documentation reliability
- uncertainty

## 3. What Is Safe to Publish Now

List guidance that appears well-supported.

For each item include:

- proposed wording
- source support
- confidence
- affected page

## 4. What Needs Human or Specialist Review

Group by:

- GDPR / data protection
- safeguarding
- employment / HR
- legal
- procurement / contracts
- vulnerable people
- automated or significant decisions

## 5. Page-by-Page Update Plan

For each affected page include:

### [Page title]

- current path
- status: update existing / create new / leave unchanged
- reason
- target audience
- risk level
- evidence confidence
- key messages to add
- text to avoid
- sources to cite
- related pages
- frontmatter changes needed

## 6. New Page Specifications

For each proposed new page include:

- title
- description
- proposed path
- section
- page_type
- audience
- charity_size
- risk_level
- status
- evidence_level
- tags
- source_ids
- claim_ids
- outline
- related pages

## 7. Navigation Update Recommendations

Recommend exact MkDocs nav changes.

Use this format:

```yaml
nav:
  - Section:
      - Page title: path/to/page.md
```

Explain why each change belongs in the nav.

## 8. Related Guidance Blocks

Suggest related-page blocks for affected pages.

Use:

- See also
- Before you continue
- Related templates
- When to ask for help

## 9. Source Register Draft Entries

Return a Markdown table:

| source_id | title | organisation | url | publication_date | updated_date | accessed_date | jurisdiction | source_type | evidence_tier | summary | limitations | affected_pages |

## 10. Claim Register Draft Entries

Return a Markdown table:

| claim_id | claim | source_id | confidence | risk_level | page | review_date | reviewer_needed |

## 11. Glossary Additions

Suggest glossary terms with plain-English definitions.

## 12. FAQ Additions

Suggest FAQ questions and short answers.

## 13. Template Opportunities

Identify whether this topic needs:

- checklist
- policy template
- trustee briefing
- staff rule
- approval form
- risk register item
- AI-use register item
- DPIA triage question
- incident form update

## 14. Accessibility Notes

Flag any content that needs:

- plain-text equivalent
- non-colour labels
- table simplification
- short summaries
- warning/admonition blocks
- glossary support

## 15. Changelog Entry Draft

Write a draft changelog entry:

### Added
### Changed
### Evidence
### Known Limitations

## 16. Release Note Draft

Write short release notes suitable for GitHub.

## 17. Codex Implementation Instructions

Write a precise instruction block I can paste into Codex.

Include:

- files to create
- files to update
- nav changes
- validation command
- human review flags

## 18. References

List all references with URLs.

Important rules:

- Do not invent citations.
- Do not hide uncertainty.
- Do not present recommendations as law.
- Do not publish final legal, safeguarding or employment guidance without human review.
- Keep language plain-English and charity-specific.
```

## Prompt 3: Perplexity Tool Review Pack

Use for ChatGPT, Claude, Gemini, Microsoft Copilot, Notion AI, Perplexity, Canva, Adobe Firefly and other tools.

```md
You are producing a large Markdown tool review research pack for AI Safe Charity Index.

Tool:

[INSERT TOOL NAME]

Audience:

UK charities, especially small and medium charities.

Research only current official documentation where possible. Use independent sources only to add context, not as a substitute for official terms.

Compare account and plan types carefully. Do not assume free, personal, team, business, charity, education and enterprise plans have the same privacy, security or admin controls.

Output:

# Tool Review Research Pack: [Tool Name]

## 1. Executive Summary

## 2. What the Tool Does

## 3. Account and Plan Types

Include a table:

| plan/account type | intended users | admin controls | data controls | suitable charity uses | caution |

## 4. Data Protection and Privacy

Cover:

- prompt/input retention
- output retention
- whether inputs may be used to train or improve models
- opt-out controls
- business or enterprise data controls
- data processing agreements
- subprocessors
- international transfers
- deletion controls
- audit/admin visibility

## 5. Security and Admin Controls

Cover:

- SSO
- MFA
- access controls
- audit logs
- workspace controls
- permissions
- integrations
- connected apps

## 6. Charity Use Cases

Group by:

- communications
- fundraising
- governance
- HR
- volunteering
- service delivery
- research
- finance
- digital and website work

## 7. Green Uses

## 8. Amber Uses

## 9. Red Uses

## 10. Not Suitable For

## 11. Human Review Requirements

## 12. Safeguarding Considerations

## 13. GDPR and Data Protection Considerations

## 14. Accessibility and Usability

## 15. Pricing and Charity Discounts

## 16. Official Sources

For each source:

- source_id_candidate
- title
- organisation
- URL
- publication/update date
- accessed date
- relevant claim
- limitation

## 17. Unclear or Fast-Changing Areas

## 18. Recommended Public Tool Guide

Provide a draft outline only.

## 19. Recommended Navigation Updates

## 20. References

Important rules:

- Cite official documentation for product claims.
- Do not copy vendor marketing.
- Flag uncertainty.
- Separate law, regulator guidance, project recommendation and provider claim.
```

## Prompt 4: ChatGPT Tool Synthesis Pack

Use after the Perplexity tool review.

```md
You are producing a GitHub implementation pack for a public AI tool guide on AI Safe Charity Index.

Tool:

[INSERT TOOL NAME]

Input research:

[PASTE TOOL REVIEW RESEARCH PACK]

Create a Markdown implementation pack with:

# Tool Guide Implementation Pack: [Tool Name]

## 1. Public Page Recommendation

- create new page or update existing page
- proposed path
- nav location
- priority

## 2. YAML Frontmatter

Return complete YAML frontmatter matching this pattern:

```yaml
title: ""
description: ""
section: "tools"
page_type: "tool-review"
audience: []
charity_size: []
risk_level: ""
status: "draft"
version: "0.1.0"
last_reviewed: "YYYY-MM-DD"
next_review: "YYYY-MM-DD"
evidence_level: ""
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags: []
source_ids: []
claim_ids: []
feedback_enabled: true
```

## 3. Draft Public Guide

Write a plain-English draft with:

- What it is
- Best uses for charities
- Green uses
- Amber uses
- Red uses
- Account and plan cautions
- GDPR notes
- Safeguarding notes
- Human review checklist
- Governance checklist
- Sources
- Known limitations

## 4. Source Register Entries

## 5. Claim Register Entries

## 6. Related Pages

## 7. Navigation Change

## 8. Human Review Flags

## 9. Changelog Draft

## 10. References

Do not invent citations. Keep claims cautious where provider documentation is unclear.
```

## Prompt 5: Monthly Research Batch Prompt

Use when you want a broad monthly update across all topics.

```md
You are creating a monthly research pack for AI Safe Charity Index.

Month:

[YYYY-MM]

Review current developments relevant to UK charities using AI safely.

Cover:

1. ICO and UK data-protection updates
2. Charity Commission updates
3. UK Government AI or data guidance
4. safeguarding guidance relevant to AI or digital systems
5. NCVO / Charity Digital / CAST / DataKind UK / SCVO / WCVA / NICVA updates
6. AI provider changes:
   - OpenAI / ChatGPT
   - Anthropic / Claude
   - Google Gemini / Workspace
   - Microsoft Copilot / Microsoft 365
   - Notion AI
   - Perplexity
   - Canva / Adobe where relevant
7. academic or professional research
8. charity-sector case studies
9. practical risks or incidents
10. content gaps for the site

Return:

# Monthly Research Pack: [YYYY-MM]

## Executive Summary

## Major Changes This Month

## Regulatory and Government Updates

## Charity-Sector Updates

## Provider Updates

## Research and Reports

## Practical Implications for Charities

## Affected Public Pages

## Recommended New Pages

## Navigation Recommendations

## Source Register Candidates

## Claim Register Candidates

## High-Risk Items Requiring Human Review

## Recommended Release Type

Choose one:

- no public change
- patch
- minor
- major
- urgent correction

## Draft Changelog Entry

## Full References

Use references throughout. Do not invent sources.
```

## Prompt 6: Codex Handoff Prompt

After saving the research packs locally, paste this into Codex.

```md
Use the local AI-Safe-Charity-Index repository.

I have added these research packs:

[LIST FILE PATHS]

Task:

1. Read the research packs.
2. Compare them against the root specification files.
3. Identify affected public pages.
4. Create or update Markdown files in `docs/`.
5. Update `mkdocs.yml` navigation if needed.
6. Add or update YAML frontmatter.
7. Keep language plain-English, practical and charity-specific.
8. Add source notes and claim notes where appropriate.
9. Flag any GDPR, safeguarding, legal, employment or vulnerable-person claims requiring human review.
10. Update `CHANGELOG.md`.
11. Run `python3 -m mkdocs build --strict`.
12. Summarise changed files and remaining review risks.

Do not publish unsupported claims. Do not treat AI research output as final authority.
```

