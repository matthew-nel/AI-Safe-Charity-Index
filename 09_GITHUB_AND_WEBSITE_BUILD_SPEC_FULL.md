# AI Safe Use Knowledge Base for UK Charities
## GitHub, Website and Publishing Architecture

**File:** `09_GITHUB_AND_WEBSITE_BUILD_SPEC.md`  
**Version:** 2.0.0  
**Status:** Foundation Architecture  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** October 2026

---

# 1. Purpose

This document defines the complete technical and publishing architecture for the AI Safe Use Knowledge Base for UK Charities.

It explains how:

- evidence enters the project
- Claude Projects supports research and drafting
- Markdown files are structured
- GitHub stores and versions the approved knowledge base
- the public documentation website is built
- updates are reviewed
- releases are deployed
- feedback is collected
- the system scales over time

The architecture must support a living, evidence-led resource that can be updated monthly and reviewed quarterly without rebuilding the website from scratch.

The core principle is:

> **Claude Projects is the research and editorial workspace. GitHub is the permanent source of truth. The documentation website is the public publishing layer.**

---

# 2. Product Vision

Build the UK's most trusted, independent and practical knowledge base for responsible AI use in the charity sector.

The website should help charities:

- understand AI in plain English
- decide what is safe to paste into AI tools
- understand GDPR and safeguarding risks
- create proportionate governance
- compare AI tools
- use AI in everyday charity workflows
- find templates and checklists
- see when guidance was last reviewed
- contribute feedback and research

The website should feel like a modern documentation platform rather than a traditional marketing website.

It should be:

- fast
- searchable
- accessible
- calm
- evidence-led
- version controlled
- easy to navigate
- easy to maintain
- easy to contribute to
- useful on desktop and mobile

---

# 3. System Architecture

The project should operate as a controlled publishing system.

```text
New evidence, research and feedback
                ↓
          Claude Project
  Research, comparison and drafting
                ↓
       Change-impact report
                ↓
     Publication-ready Markdown
                ↓
        Human editorial review
                ↓
        GitHub pull request
                ↓
   Validation, tests and preview build
                ↓
              Merge
                ↓
      Automatic site deployment
                ↓
       Public knowledge base
                ↓
     Feedback, analytics and research
                ↺
```

---

# 4. System Roles

## 4.1 Claude Projects

Claude Projects is used for:

- project instructions
- source ingestion
- regulator guidance
- charity-sector knowledge
- AI provider documentation
- books and permitted extracts
- survey summaries
- interview findings
- research synthesis
- content-gap analysis
- page drafting
- version recommendations
- changelog preparation
- release-note preparation
- publication handoff

Claude Projects is not the final source of truth.

Nothing should be considered published until it has been:

1. reviewed by a human
2. committed to GitHub
3. deployed successfully

## 4.2 GitHub

GitHub is the permanent, version-controlled source of truth.

GitHub should contain:

- public Markdown
- website configuration
- navigation configuration
- metadata
- templates
- evidence registers
- claim registers
- public research findings
- changelog
- release notes
- governance files
- contributor guidance
- deployment workflows
- validation scripts

GitHub provides:

- change history
- accountability
- rollback
- collaboration
- public transparency
- issue tracking
- pull requests
- release tags

## 4.3 Public Documentation Website

The public website is generated from GitHub content.

The website should:

- publish approved guidance
- provide search
- provide stable URLs
- display version and review metadata
- link to sources
- support mobile use
- support accessibility
- provide feedback routes
- provide role- and task-based navigation
- support future interactive tools

---

# 5. Recommended Technology Stack

## 5.1 Core Stack

Recommended:

- GitHub
- Git
- Markdown
- YAML frontmatter
- VitePress
- Node.js
- GitHub Actions
- GitHub Pages or Vercel
- Typeform or Tally
- Plausible Analytics or GA4

## 5.2 Preferred Documentation Framework

### VitePress

VitePress is the preferred framework because it offers:

- Markdown-first authoring
- fast static builds
- sidebar navigation
- local search
- built-in table of contents
- previous and next links
- easy theming
- low maintenance
- strong fit with GitHub workflows

### Alternatives

Docusaurus or another documentation framework may be used if there is a clear implementation need.

Any replacement must remain:

- Markdown-first
- searchable
- accessible
- static or mostly static
- version-controlled
- suitable for hundreds of pages
- easy for one maintainer to operate

## 5.3 Hosting

Preferred options:

### GitHub Pages

Benefits:

- native GitHub integration
- low cost
- simple deployment
- public transparency

### Vercel

Benefits:

- preview deployments
- fast builds
- easy custom-domain support
- useful branch previews

The project may begin on GitHub Pages and move to Vercel later if preview workflows or deployment needs justify it.

---

# 6. Repository Structure

Recommended repository:

```text
ai-safe-charities/
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── GOVERNANCE.md
├── EDITORIAL_POLICY.md
├── EVIDENCE_POLICY.md
├── CHANGELOG.md
├── ROADMAP.md
├── LICENSE
├── package.json
├── vite.config.*
├── docs/
│   ├── index.md
│   ├── start-here/
│   │   ├── index.md
│   │   ├── what-is-ai.md
│   │   ├── first-five-rules.md
│   │   └── choose-your-path.md
│   ├── before-you-paste/
│   │   ├── index.md
│   │   ├── decision-tree.md
│   │   ├── green-amber-red.md
│   │   ├── do-not-paste.md
│   │   └── safer-alternatives.md
│   ├── ai-and-data-protection/
│   │   ├── index.md
│   │   ├── personal-data.md
│   │   ├── special-category-data.md
│   │   ├── anonymisation.md
│   │   ├── lawful-basis.md
│   │   ├── data-minimisation.md
│   │   ├── dpias.md
│   │   ├── automated-decisions.md
│   │   └── data-breaches.md
│   ├── charity-workflows/
│   │   ├── index.md
│   │   ├── communications/
│   │   ├── fundraising/
│   │   ├── service-delivery/
│   │   ├── safeguarding/
│   │   ├── hr/
│   │   ├── volunteers/
│   │   ├── finance/
│   │   ├── governance/
│   │   ├── research/
│   │   ├── meetings/
│   │   └── digital/
│   ├── governance/
│   │   ├── index.md
│   │   ├── ai-policy.md
│   │   ├── approved-tools.md
│   │   ├── ai-use-register.md
│   │   ├── risk-register.md
│   │   ├── trustee-briefing.md
│   │   ├── maturity-model.md
│   │   └── quarterly-review.md
│   ├── tools/
│   │   ├── index.md
│   │   ├── chatgpt.md
│   │   ├── claude.md
│   │   ├── gemini.md
│   │   ├── microsoft-copilot.md
│   │   ├── notion-ai.md
│   │   └── tool-comparison.md
│   ├── templates/
│   │   ├── index.md
│   │   ├── ai-policy-template.md
│   │   ├── staff-rules.md
│   │   ├── trustee-briefing.md
│   │   ├── approved-tools-register.md
│   │   ├── ai-use-register.md
│   │   ├── tool-assessment.md
│   │   ├── output-review-checklist.md
│   │   ├── incident-form.md
│   │   └── dpia-triage.md
│   ├── learning-paths/
│   │   ├── index.md
│   │   ├── new-to-ai.md
│   │   ├── small-charity.md
│   │   ├── medium-charity.md
│   │   ├── trustees.md
│   │   ├── managers.md
│   │   ├── communications.md
│   │   ├── fundraising.md
│   │   └── service-delivery.md
│   ├── research-and-community/
│   │   ├── index.md
│   │   ├── current-research.md
│   │   ├── participate.md
│   │   ├── findings.md
│   │   ├── methodology.md
│   │   └── feedback.md
│   ├── evidence/
│   │   ├── index.md
│   │   ├── source-policy.md
│   │   ├── evidence-levels.md
│   │   ├── source-register.md
│   │   └── claim-register.md
│   ├── updates/
│   │   ├── index.md
│   │   ├── current-release.md
│   │   └── archive/
│   ├── large-and-complex-charities/
│   │   ├── index.md
│   │   ├── enterprise-governance.md
│   │   ├── procurement.md
│   │   ├── system-inventory.md
│   │   ├── assurance.md
│   │   └── monitoring.md
│   ├── glossary.md
│   ├── faq.md
│   ├── about.md
│   ├── about-the-creator.md
│   ├── contact.md
│   ├── privacy.md
│   └── accessibility.md
├── evidence/
│   ├── source-register.yml
│   ├── claim-register.yml
│   ├── review-queue.yml
│   ├── watchlist.yml
│   └── archive/
├── templates/
│   ├── policy/
│   ├── governance/
│   ├── staff/
│   ├── trustees/
│   ├── procurement/
│   └── incidents/
├── research/
│   ├── methodology/
│   ├── instruments/
│   ├── findings/
│   ├── insights/
│   └── public/
├── releases/
│   ├── current.md
│   └── archive/
├── config/
│   ├── site.yml
│   ├── links.yml
│   ├── contact.yml
│   └── navigation.yml
├── scripts/
│   ├── validate-frontmatter.*
│   ├── validate-links.*
│   ├── check-review-dates.*
│   ├── validate-source-ids.*
│   ├── validate-claim-ids.*
│   ├── check-duplicate-titles.*
│   └── build-search-index.*
└── .github/
    ├── workflows/
    ├── ISSUE_TEMPLATE/
    ├── pull_request_template.md
    └── dependabot.yml
```

---

# 7. Source of Truth

## 7.1 Public Source of Truth

The GitHub repository is the final source of truth for:

- current public guidance
- current templates
- page versions
- release notes
- public source records
- public claim records
- navigation
- website configuration
- public research outputs

## 7.2 Working Research Environment

Claude Projects may contain:

- source documents
- books
- research material
- internal drafts
- aggregated research findings
- current website exports
- monthly update packs

A file inside Claude Projects is not automatically published.

## 7.3 Raw Research Data

Raw survey or interview data should not be stored in the public repository.

Use controlled storage for:

- participant contact details
- consent records
- identifiable survey responses
- interview recordings
- sensitive free-text answers

Only aggregated or suitably anonymised findings should be published.

---

# 8. Information Architecture

The information architecture should prioritise the questions charities are trying to answer.

## 8.1 Primary Navigation

Use:

- Start Here
- Before You Paste
- AI and Data Protection
- Everyday Charity Work
- Governance
- Tools
- Templates
- Research and Community
- Updates

## 8.2 Secondary Navigation

Use:

- Choose Your Charity Path
- Learning Paths
- Large and Complex Charities
- Evidence Library
- About
- Contact
- GitHub

## 8.3 Audience Priority

The default experience should prioritise:

- small charities
- medium-sized charities
- non-technical users
- teams with limited internal support

Advanced content should be clearly separated.

---

# 9. Homepage Specification

The homepage should answer:

1. What is this?
2. Who is it for?
3. Where should I start?
4. What changed recently?
5. How can I contribute?

## 9.1 Main Message

> **Practical, evidence-led guidance for using AI safely in UK charities.**

## 9.2 Supporting Message

> Built primarily for small and medium-sized charities, with additional guidance for larger and more complex organisations.

## 9.3 Primary Calls to Action

- Check before you paste
- Choose your charity path
- Create your first AI policy
- Review an AI tool
- Share your experience
- See what changed this month

## 9.4 Trust Signals

Display:

- current site version
- last release date
- next review date
- evidence policy
- changelog
- original creator
- current primary source organisations

## 9.5 Research Panel

Include:

- current survey
- estimated completion time
- privacy information
- link to findings
- interview participation route

## 9.6 Feedback Panel

Include:

- report an error
- flag outdated guidance
- ask a question
- suggest a topic
- join research

---

# 10. Page Types

The site should support several standard page types.

## 10.1 Guidance Page

Purpose:

- answer a practical question
- explain what to do
- show examples
- link evidence

## 10.2 Workflow Page

Purpose:

- guide a real charity task
- explain Green, Amber and Red uses
- provide a safer workflow

## 10.3 Explainer

Purpose:

- explain a concept such as personal data or DPIAs
- use charity-specific examples

## 10.4 Tool Review

Purpose:

- evaluate one AI tool
- explain account and plan differences
- show appropriate and inappropriate use

## 10.5 Template Page

Purpose:

- provide a reusable policy, checklist or register
- explain when and how to use it

## 10.6 Research Page

Purpose:

- explain methodology
- publish aggregated findings
- show limitations

## 10.7 Release Page

Purpose:

- explain what changed
- show evidence reviewed
- identify action required

---

# 11. Page Metadata Standard

Every substantive page should include YAML frontmatter.

Example:

```yaml
---
title: "Can I upload meeting notes to AI?"
description: "A practical guide for UK charities."
section: "charity-workflows"
audience:
  - staff
  - managers
charity_size:
  - small
  - medium
risk_level: "amber"
status: "current"
version: "1.1.0"
last_reviewed: "2026-07-11"
next_review: "2026-10-01"
evidence_level: "high"
owners:
  - "Matthew James Nel"
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
---
```

---

# 12. File Naming Standard

Use:

- lowercase
- hyphens
- descriptive filenames
- stable names
- no dates in permanent URLs unless the page is a release or report

Examples:

```text
can-i-upload-meeting-notes.md
personal-data-and-ai.md
ai-policy-template.md
release-1-2-0.md
```

Avoid:

```text
page1.md
final-final.md
new-ai-page.md
draft2.md
```

---

# 13. URL Structure

URLs should be:

- short
- descriptive
- stable
- task-oriented

Examples:

```text
/before-you-paste/
/ai-and-data-protection/personal-data/
/charity-workflows/fundraising/funding-bids/
/tools/chatgpt/
/governance/ai-policy/
```

Avoid changing URLs after publication.

If a URL changes:

- create a redirect
- update internal links
- record the change
- preserve search value

---

# 14. Navigation Rules

Navigation should follow user tasks.

Prefer:

- Can I upload this?
- Can volunteers use AI?
- AI for trustees
- AI for fundraising
- What counts as personal data?

Avoid:

- AI capability matrix
- Large language model taxonomy
- Strategic transformation
- Innovation architecture

The navigation should not require technical knowledge.

---

# 15. Search Strategy

Search should support natural language.

Examples:

- Can I use ChatGPT?
- Can I upload meeting notes?
- AI policy for trustees
- GDPR and AI
- Can volunteers use AI?
- Can AI write a funding bid?
- Can I paste donor data?

## 15.1 Search Requirements

Search should index:

- titles
- summaries
- headings
- tags
- synonyms
- role names
- charity workflows
- AI tools

## 15.2 Synonyms

Examples:

- service user / beneficiary
- donor / supporter
- staff / employee
- board / trustees
- meeting notes / minutes
- data protection / GDPR

## 15.3 Failed Search Review

Track failed or zero-result searches.

Use them to:

- create new pages
- improve titles
- add synonyms
- improve navigation
- update FAQ

---

# 16. Content Design

Every page should:

- answer the practical question early
- use plain English
- use charity examples
- distinguish facts from recommendations
- show what to do next
- include related pages
- show sources
- display review dates
- provide feedback

## 16.1 Standard Page Flow

1. Quick answer
2. Traffic-light result
3. What to do
4. Example
5. Why it matters
6. Deeper detail
7. Larger charity considerations
8. Related templates
9. Sources
10. Feedback

---

# 17. Design System Requirements

The design should feel:

- calm
- modern
- spacious
- trustworthy
- documentation-led
- accessible

Use:

- clear type hierarchy
- readable line length
- consistent spacing
- restrained colour
- accessible callouts
- simple icons
- clear status labels
- print-friendly layouts

Avoid:

- futuristic robot imagery
- excessive gradients
- animated distractions
- dense dashboards
- decorative clutter
- visual elements that imply hype

---

# 18. Green, Amber and Red Components

The traffic-light system is a core interface pattern.

## 18.1 Green

Label:

> **Green — Go ahead with normal checks**

## 18.2 Amber

Label:

> **Amber — Pause and check**

## 18.3 Red

Label:

> **Red — Stop**

Do not rely on colour alone.

Each component should include:

- text label
- icon
- explanation
- action

---

# 19. Accessibility Requirements

Target WCAG 2.2 AA where practical.

Requirements:

- semantic HTML
- correct heading order
- descriptive links
- keyboard navigation
- visible focus styles
- alt text
- sufficient contrast
- accessible tables
- accessible forms
- captions for video
- transcripts for audio
- no information conveyed by colour alone
- responsive layouts
- plain English
- readable font sizes
- print-friendly key guidance

Accessibility should be tested manually as well as automatically.

---

# 20. Mobile Requirements

The site should work well on small screens.

Requirements:

- collapsible sidebar
- readable text
- large tap targets
- mobile-friendly tables
- no horizontal scrolling where avoidable
- sticky page actions used carefully
- simple navigation
- accessible decision trees
- downloadable checklists that remain readable

---

# 21. Analytics

Use privacy-respecting analytics where possible.

Track:

- page views
- most-viewed pages
- internal search terms
- failed searches
- template downloads
- feedback interactions
- survey referrals
- navigation exits
- release-page visits

Do not create intrusive user profiles.

Explain analytics use in the privacy notice.

---

# 22. Feedback System

Every substantive page should include:

## Was this useful?

Options:

- Yes
- Partly
- No

Optional follow-up:

- Tell us what was unclear
- Report outdated information
- Suggest an example
- Ask a question

The form should include automatically:

- page URL
- page title
- page version
- last-reviewed date

Feedback routes should include:

- Typeform or Tally
- GitHub Issues
- contact page
- research participation page
- LinkedIn

---

# 23. Contact System

Create a public contact page with separate routes for:

- general questions
- corrections
- research participation
- accessibility issues
- collaboration
- training or consultancy
- permissions and reuse

Do not use an employer email address.

Use a role-based project contact address when available.

---

# 24. Research Integration

The website should include:

- current research
- survey participation
- interview participation
- methodology
- public findings
- limitations
- what changed because of research

Do not publish:

- raw survey responses
- identifiable interview data
- consent records
- confidential research notes

---

# 25. Evidence Integration

Public pages should show:

- source names
- source links
- evidence level
- last reviewed
- known limitations

Internal repository metadata should include:

- Source IDs
- Claim IDs
- review status

The system should support:

```text
Source
  ↓
Claim
  ↓
Page
  ↓
Release
```

---

# 26. Git Branching Strategy

Recommended early-stage model:

```text
main
feature/*
fix/*
release/*
research/*
```

## 26.1 Main

`main` contains the live site.

## 26.2 Feature Branches

Use for:

- new pages
- new templates
- navigation changes
- tool reviews

## 26.3 Fix Branches

Use for:

- urgent corrections
- broken links
- safety issues
- factual errors

## 26.4 Release Branches

Use for coordinated monthly or quarterly releases.

---

# 27. Pull Request Standard

Every pull request should include:

- summary
- reason for change
- evidence reviewed
- files changed
- claims affected
- source IDs
- page versions
- screenshots if visual changes occurred
- validation results
- known limitations
- reviewer requirements

Suggested title:

```text
Update meeting transcription guidance after provider and ICO review
```

---

# 28. Commit Message Standard

Use clear commit messages.

Examples:

```text
Add trustee AI governance checklist
Update ChatGPT privacy guidance
Correct safeguarding decision rule
Fix broken ICO source links
```

Avoid:

```text
updates
changes
fix stuff
final
```

---

# 29. GitHub Actions

Recommended workflows:

## 29.1 Build

Run on pull request and merge.

Tasks:

- install dependencies
- build VitePress site
- fail on build error

## 29.2 Link Check

Check:

- internal links
- external links
- anchors
- missing pages

## 29.3 Metadata Validation

Check:

- required frontmatter
- valid status
- valid version
- review dates
- audience values
- charity-size values

## 29.4 Source Validation

Check:

- Source IDs exist
- Claim IDs exist
- no orphaned claims
- no missing evidence references

## 29.5 Review-Date Check

Flag:

- expired pages
- pages due soon
- tool reviews overdue
- regulatory pages overdue

## 29.6 Accessibility

Run automated checks against built pages.

## 29.7 Deployment

Deploy after:

- build passes
- merge to main
- required review completed

---

# 30. Validation Gates

A release must not publish when:

- build fails
- critical links fail
- frontmatter is missing
- high-risk claims are unsupported
- creator attribution is missing
- raw personal research data is included
- restricted source documents are committed
- specialist review is required but absent
- review dates are inconsistent
- release notes are incomplete

---

# 31. Security Requirements

Never commit:

- passwords
- API keys
- access tokens
- private keys
- raw personal data
- confidential employer material
- restricted research data
- privileged legal advice

Use:

- branch protection
- required reviews
- secret scanning
- dependency updates
- least privilege
- secure project accounts
- two-factor authentication

---

# 32. Privacy Requirements

The public website should have a privacy notice covering:

- analytics
- feedback forms
- research participation
- contact forms
- newsletter signup
- GitHub interactions
- data retention
- lawful basis
- contact rights

Research consent should remain separate from marketing consent.

---

# 33. SEO Requirements

The site should be discoverable without becoming search-engine-led.

Use:

- descriptive titles
- clear summaries
- structured headings
- stable URLs
- canonical links
- sitemap
- robots file
- metadata
- internal linking
- FAQ schema where appropriate

Do not:

- create thin pages for keywords
- repeat phrases unnaturally
- prioritise search traffic over clarity

---

# 34. Structured Data

Where useful, add structured data for:

- articles
- FAQs
- organisation
- breadcrumbs
- software application reviews where appropriate
- educational content

Structured data must reflect the actual content.

---

# 35. Release Architecture

Each release should include:

- version
- date
- summary
- important changes
- added content
- updated content
- corrected content
- deprecated content
- evidence reviewed
- What Charities Told Us
- known limitations
- what charities should do
- next review

Use semantic versioning.

---

# 36. Rollback

Every release should be reversible.

Requirements:

- clear commits
- release tags
- release notes
- stable `main`
- documented changed files

If a serious issue is found:

1. revert the affected commit
2. restore the previous stable version
3. publish a correction notice
4. update the changelog
5. investigate the failure
6. strengthen controls

---

# 37. Deprecation and Archiving

Deprecated content should show:

- deprecated status
- date
- reason
- replacement page
- related release

Archived content should:

- remain available where transparency matters
- disappear from primary navigation
- clearly state that it is historic

---

# 38. Contributor Experience

Contributors should be able to:

- report errors
- suggest sources
- suggest examples
- propose new pages
- improve accessibility
- submit pull requests
- join research

Contributor guidance should explain:

- evidence standards
- writing style
- privacy rules
- safeguarding rules
- attribution
- licensing
- review process

---

# 39. Creator Attribution

Use:

- **Original Creator:** Matthew James Nel
- **Maintained and edited by:** Matthew James Nel
- **LinkedIn:** https://www.linkedin.com/in/matthewjamesnel

Display prominently on:

- README
- About the Creator
- About the Project
- footer
- release pages
- citation guidance

Do not over-promote attribution inside every practical answer.

---

# 40. Editorial Independence

If the project later includes:

- affiliate links
- paid training
- consultancy
- sponsorship
- partnerships

Then:

- disclose relationships
- separate commercial and editorial content
- never alter safety ratings for commercial reasons
- apply the same evidence standard to all tools
- keep research independent
- keep correction routes separate from sales routes

---

# 41. Central Configuration

Frequently changed links should live in one configuration file.

Example:

```yaml
site:
  title: "AI Safe Use Knowledge Base for UK Charities"
  base_url: ""
  current_version: "1.0.0"
  last_release_date: ""
  next_review_date: ""

links:
  research_survey_url: ""
  feedback_form_url: ""
  general_contact_url: ""
  correction_form_url: ""
  research_contact_url: ""
  newsletter_url: ""
  github_repository_url: ""
  github_issues_url: ""

creator:
  name: "Matthew James Nel"
  linkedin: "https://www.linkedin.com/in/matthewjamesnel"
```

Do not hard-code the same external link across many pages.

---

# 42. Build Environments

Use:

## Development

Local or branch environment for:

- writing
- preview
- testing

## Preview

Automatic branch or pull-request deployment.

## Production

Live public site from `main`.

Environment differences should be minimal.

---

# 43. Local Development

Recommended commands:

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

The repository README should explain:

- prerequisites
- setup
- local preview
- build
- validation
- contribution workflow

---

# 44. Deployment Workflow

Recommended:

```text
Pull request opened
        ↓
Validation workflows run
        ↓
Preview deployment created
        ↓
Human review
        ↓
Merge to main
        ↓
Production build
        ↓
Deploy
        ↓
Post-deployment check
```

---

# 45. Post-Deployment Checks

After every release, confirm:

- homepage loads
- navigation works
- search works
- changed pages load
- feedback links work
- source links work
- mobile view works
- current version displays
- release note appears
- no obvious accessibility regression
- analytics is functioning

---

# 46. Scaling Strategy

The architecture should support:

- 20 to 40 initial pages
- hundreds of guidance pages
- multiple tool reviews
- monthly releases
- annual research reports
- public contributions
- role-based learning paths
- sector-specific extensions
- interactive decision tools
- multiple languages

The core navigation model should not need to be rebuilt as the site grows.

---

# 47. Future Interactive Features

Possible future features:

- Before You Paste interactive decision tree
- AI maturity self-assessment
- tool comparison filters
- downloadable policy generator
- role-based learning path selector
- source and claim explorer
- review-date dashboard
- sector-specific filters
- downloadable PDF packs
- multilingual versions

Interactive features must not replace the accessible Markdown version.

---

# 48. Disaster Recovery

Maintain:

- GitHub history
- release tags
- local backup
- source-library backup
- deployment documentation
- domain access records
- administrator access records

At least one recovery path should exist that does not depend on a single AI provider.

---

# 49. Ownership and Maintenance

Matthew James Nel is the original creator and primary maintainer.

Long-term maintenance should define:

- editorial ownership
- technical ownership
- research ownership
- review responsibilities
- access permissions
- handover process
- succession plan if contributors join

---

# 50. Definition of Done

A website or publishing change is complete only when:

- the evidence has been reviewed
- affected claims are identified
- complete Markdown exists
- human review is complete
- page metadata is updated
- validation passes
- GitHub records the change
- the live site updates
- release notes explain the change
- post-deployment checks pass
- unresolved limitations are recorded

---

# 51. Success Criteria

This architecture succeeds when:

- charities can find answers quickly
- non-technical readers understand the guidance
- every material claim is traceable
- new evidence can be incorporated monthly
- the website updates without manual rebuilding
- errors can be corrected quickly
- previous versions can be restored
- contributors understand how to help
- the project can scale without losing clarity
- the resource remains independent, accessible and trusted

The website should feel like a reliable public service for charity teams using AI.
