# AI Safe Use Knowledge Base for UK Charities
# 58_PROJECT_DECISION_LOG.md

**Version:** 1.0.0  
**Status:** Living Governance Record  
**Original Creator:** Matthew James Nel  
**Maintained and edited by:** Matthew James Nel  
**LinkedIn:** https://www.linkedin.com/in/matthewjamesnel  
**Last reviewed:** July 2026  
**Next review:** Every major decision and quarterly

---

# Purpose

This document records important decisions made during the development and maintenance of the AI Safe Use Knowledge Base for UK Charities.

It exists to explain:

- what was decided
- when it was decided
- who made the decision
- why the decision was made
- which alternatives were considered
- what the consequences are
- when the decision should be reviewed

The decision log should prevent the project from repeatedly reopening settled questions without new evidence.

It should also make changes in direction visible and understandable.

---

# Core Principle

> **Record the reasoning behind important decisions, not only the final outcome.**

A decision log supports:

- transparency
- consistency
- accountability
- handover
- future governance
- contributor understanding
- long-term maintenance

---

# What Should Be Recorded

Record decisions that materially affect:

- product scope
- audience
- positioning
- information architecture
- evidence standards
- editorial style
- risk rules
- safeguarding
- GDPR guidance
- research methods
- technical architecture
- publishing
- versioning
- licensing
- commercial relationships
- attribution
- governance
- contributor rights
- roadmap priorities

Do not record every minor wording or formatting choice.

---

# Decision Categories

Use one of the following categories:

- Product
- Audience
- Editorial
- Evidence
- Research
- GDPR
- Safeguarding
- Governance
- Technical
- Publishing
- Accessibility
- Commercial
- Licensing
- Community
- Operations
- Branding

---

# Decision Statuses

Use:

- Proposed
- Accepted
- Superseded
- Rejected
- Deferred
- Under review
- Reversed

---

# Decision Record Template

Use:

```yaml
id:
title:
date:
status:
category:
decision_maker:
contributors:
context:
decision:
rationale:
alternatives_considered:
consequences:
risks:
dependencies:
affected_files:
affected_pages:
review_trigger:
review_date:
supersedes:
superseded_by:
notes:
```

---

# Human-Readable Decision Template

```md
## DEC-0001 — Decision title

**Date:** YYYY-MM-DD  
**Status:** Accepted  
**Category:** Product  
**Decision maker:** Matthew James Nel  
**Contributors:**  
**Review date:**  

### Context

Explain the problem or question.

### Decision

State the decision clearly.

### Rationale

Explain why this option was chosen.

### Alternatives considered

- Alternative
- Alternative

### Consequences

Explain what changes because of this decision.

### Risks and limitations

Explain possible drawbacks.

### Affected files and pages

- File
- Page

### Review trigger

Explain what evidence or event should cause the decision to be reviewed.
```

---

# Decision Ownership

The current primary decision maker is:

**Matthew James Nel**

The maintainer has final responsibility for:

- project scope
- editorial direction
- public releases
- evidence standards
- roadmap
- contributor acceptance
- commercial separation
- urgent corrections

As governance grows, some decision rights may be delegated.

Delegation should be recorded in this log and in the Governance document.

---

# Initial Decision Log

## DEC-0001 — Create a dedicated AI safety resource for UK charities

**Date:** July 2026  
**Status:** Accepted  
**Category:** Product  
**Decision maker:** Matthew James Nel

### Context

Small and medium-sized charities are increasingly using AI but often lack internal legal, technical, data-protection and governance support.

Existing guidance is fragmented, technical or designed for larger organisations.

### Decision

Create a dedicated, practical AI safe-use knowledge base for UK charities.

### Rationale

The project addresses a clear gap between high-level regulatory guidance and everyday charity workflows.

### Alternatives considered

- General AI consultancy website
- Prompt library
- Training course
- Generic nonprofit guide
- Notion-only template

### Consequences

The project will prioritise public guidance, evidence, decision tools, templates and charity-specific workflows.

### Review trigger

Review if another trusted sector body launches a comprehensive equivalent resource or if user research shows a different primary need.

---

## DEC-0002 — Prioritise small and medium-sized charities

**Date:** July 2026  
**Status:** Accepted  
**Category:** Audience  
**Decision maker:** Matthew James Nel

### Context

Large charities often have more specialist support and more complex governance requirements.

Small and medium-sized charities face the greatest practical gap.

### Decision

Design the main navigation, language and templates primarily for small and medium-sized charities.

Provide separate advanced guidance for larger and more complex organisations.

### Rationale

This keeps the resource useful, proportionate and distinctive.

### Consequences

The default experience must avoid enterprise-first assumptions.

### Review trigger

Review after user research across charity sizes.

---

## DEC-0003 — Use the product promise centred on data, trust and safety

**Date:** July 2026  
**Status:** Accepted  
**Category:** Branding  
**Decision maker:** Matthew James Nel

### Decision

Use:

> **Help charities save time with AI without risking people's data, trust or safety.**

### Rationale

The line balances the opportunity of AI with the project's core concern: responsible use.

### Consequences

Marketing, navigation and content should support this promise.

### Review trigger

Review after public launch and message testing.

---

## DEC-0004 — Make Before You Paste the signature framework

**Date:** July 2026  
**Status:** Accepted  
**Category:** Product  
**Decision maker:** Matthew James Nel

### Context

The most immediate risk often occurs at the moment someone is about to enter information into an AI tool.

### Decision

Create the Before You Paste framework as the main practical decision tool.

### Rationale

It gives staff a memorable action at the point of risk.

### Consequences

The framework should appear prominently on the homepage, in staff guidance, training and workflows.

### Review trigger

Review after usability testing and behaviour research.

---

## DEC-0005 — Use Green, Amber and Red classifications

**Date:** July 2026  
**Status:** Accepted  
**Category:** Editorial  
**Decision maker:** Matthew James Nel

### Decision

Use:

- Green — Go ahead with normal checks
- Amber — Pause and check
- Red — Stop

### Rationale

The model is familiar and supports quick decision-making.

### Consequences

Colour must never be the only indicator.

Classifications apply to the use case, not the tool brand as a whole.

### Review trigger

Review if user research shows misunderstanding or oversimplification.

---

## DEC-0006 — Separate safeguarding from GDPR

**Date:** July 2026  
**Status:** Accepted  
**Category:** Safeguarding  
**Decision maker:** Matthew James Nel

### Context

Safeguarding and data protection overlap but are not the same responsibility.

### Decision

Treat safeguarding as a separate first-class concern across the resource.

### Rationale

A use may appear lawful while still creating unacceptable safeguarding risk.

### Consequences

High-risk workflows must link to both GDPR and safeguarding guidance.

### Review trigger

Review after specialist safeguarding input.

---

## DEC-0007 — Build a GitHub knowledge base instead of a Notion product

**Date:** July 2026  
**Status:** Accepted  
**Category:** Technical  
**Decision maker:** Matthew James Nel

### Context

The original idea was a Notion-based playbook.

The project evolved into a larger, living knowledge system requiring versioning, public contribution and scalable navigation.

### Decision

Build the public resource as a GitHub-backed documentation website.

### Rationale

GitHub provides:

- version control
- public transparency
- contribution workflows
- release history
- automation
- long-term scalability

### Alternatives considered

- Notion
- static PDF
- traditional CMS
- private course platform

### Consequences

Notion may still be covered as a tool, but it is not the primary publishing platform.

### Review trigger

Review only if GitHub creates a major accessibility or maintenance barrier.

---

## DEC-0008 — Use Claude Projects as the research and editorial environment

**Date:** July 2026  
**Status:** Accepted  
**Category:** Operations  
**Decision maker:** Matthew James Nel

### Decision

Use Claude Projects to hold:

- project instructions
- foundation documents
- source material
- research
- monthly update packs
- editorial context

### Rationale

Claude Projects supports sustained knowledge work and recurring updates.

### Consequences

The public source of truth remains GitHub.

Claude-generated work requires human review.

### Review trigger

Review if platform limitations materially affect maintenance or portability.

---

## DEC-0009 — Keep GitHub as the permanent source of truth

**Date:** July 2026  
**Status:** Accepted  
**Category:** Publishing  
**Decision maker:** Matthew James Nel

### Decision

All approved public content, metadata, releases and website configuration live in GitHub.

### Rationale

This creates a durable audit trail and avoids dependence on one AI workspace.

### Consequences

The live website should never be edited directly.

### Review trigger

Review if technical architecture changes.

---

## DEC-0010 — Prefer VitePress for the documentation website

**Date:** July 2026  
**Status:** Accepted  
**Category:** Technical  
**Decision maker:** Matthew James Nel

### Decision

Use VitePress as the preferred documentation framework.

### Rationale

It is Markdown-first, fast and suitable for a documentation-led site.

### Alternatives considered

- Docusaurus
- Astro
- Webflow
- custom Next.js
- Notion publishing

### Consequences

The repository architecture and metadata should remain compatible with VitePress.

### Review trigger

Review during technical prototyping if accessibility, search or scale requirements are not met.

---

## DEC-0011 — Use monthly updates and quarterly assurance

**Date:** July 2026  
**Status:** Accepted  
**Category:** Operations  
**Decision maker:** Matthew James Nel

### Decision

Run:

- monthly research and update cycles
- quarterly deeper assurance reviews

### Rationale

AI provider information changes quickly, while a deeper audit is needed less frequently.

### Consequences

Pages require review dates and review frequency metadata.

### Review trigger

Review after six months of operation.

---

## DEC-0012 — Use Source and Claim Registers

**Date:** July 2026  
**Status:** Accepted  
**Category:** Evidence  
**Decision maker:** Matthew James Nel

### Decision

Maintain:

- Source Register
- Claim Register
- Regulatory Watchlist
- Review Queue

### Rationale

The project needs traceability from evidence to public guidance.

### Consequences

Material pages must include Source IDs and Claim IDs.

### Review trigger

Review when automation is implemented or if maintenance becomes disproportionate.

---

## DEC-0013 — Use plain English and a natural editorial voice

**Date:** July 2026  
**Status:** Accepted  
**Category:** Editorial  
**Decision maker:** Matthew James Nel

### Decision

Write like:

> A calm, experienced digital colleague helping a charity make a sensible decision.

### Rationale

The audience includes non-technical staff, volunteers and trustees.

### Consequences

Legal and technical accuracy must be preserved while jargon is reduced.

### Review trigger

Review through user testing and accessibility feedback.

---

## DEC-0014 — Keep human approval mandatory

**Date:** July 2026  
**Status:** Accepted  
**Category:** Governance  
**Decision maker:** Matthew James Nel

### Decision

AI may research, compare and draft.

A human must approve material public changes.

### Rationale

The project covers high-risk, fast-changing guidance.

### Consequences

Automation must stop before final publication unless explicit human approval exists.

### Review trigger

Review only if governance expands, not to remove human accountability.

---

## DEC-0015 — Keep core public guidance independent

**Date:** July 2026  
**Status:** Accepted  
**Category:** Commercial  
**Decision maker:** Matthew James Nel

### Decision

Commercial relationships must not influence:

- tool ratings
- safety decisions
- regulator summaries
- research findings
- corrections

### Rationale

Trust depends on editorial independence.

### Consequences

Affiliate links, sponsorship or paid services must be clearly disclosed and separated.

### Review trigger

Review before any commercial relationship is introduced.

---

## DEC-0016 — Retain creator attribution

**Date:** July 2026  
**Status:** Accepted  
**Category:** Governance  
**Decision maker:** Matthew James Nel

### Decision

Use:

- Original Creator: Matthew James Nel
- Maintained and edited by: Matthew James Nel
- LinkedIn: https://www.linkedin.com/in/matthewjamesnel

### Rationale

The project is independently created and maintained.

### Consequences

Attribution should appear in public project documents, citation guidance, releases and key repository pages.

### Review trigger

Review only if project ownership or governance changes formally.

---

## DEC-0017 — Develop in public but review before publishing

**Date:** July 2026  
**Status:** Accepted  
**Category:** Community  
**Decision maker:** Matthew James Nel

### Decision

Use public GitHub issues, pull requests, roadmap and changelog.

Do not allow unreviewed content to become public guidance.

### Rationale

The project benefits from transparency and community input but must protect quality.

### Consequences

Contributing and Governance standards are required.

### Review trigger

Review after contributor activity grows.

---

## DEC-0018 — Treat accessibility as a core quality requirement

**Date:** July 2026  
**Status:** Accepted  
**Category:** Accessibility  
**Decision maker:** Matthew James Nel

### Decision

Aim for WCAG 2.2 AA and include accessibility in every release review.

### Rationale

Safety guidance must be usable by disabled people and users with different levels of digital confidence.

### Consequences

Interactive tools require text alternatives.

### Review trigger

Review after accessibility audit and user testing.

---

## DEC-0019 — Do not provide case-specific legal or safeguarding advice

**Date:** July 2026  
**Status:** Accepted  
**Category:** Governance  
**Decision maker:** Matthew James Nel

### Decision

The project provides practical guidance, not case-specific professional advice.

### Rationale

The project cannot safely assess individual legal or safeguarding cases.

### Consequences

Contact and FAQ pages must state the boundary clearly.

### Review trigger

Review if specialist services are introduced separately.

---

## DEC-0020 — Start with a focused public beta

**Date:** July 2026  
**Status:** Accepted  
**Category:** Product  
**Decision maker:** Matthew James Nel

### Decision

Launch a focused set of high-value pages before building every planned feature.

### Rationale

A smaller useful resource is better than a large untested system.

### Consequences

The MVP should prioritise:

- Start Here
- Before You Paste
- GDPR basics
- safeguarding
- governance templates
- core workflows
- main tool guides
- feedback and research

### Review trigger

Review after private testing.

---

# Decision Review Process

Review a decision when:

- the review date arrives
- new evidence appears
- user research challenges the assumption
- regulation changes
- technology changes materially
- the decision creates repeated friction
- governance changes
- a serious incident occurs
- the project scope changes

---

# Superseding a Decision

Do not delete an old decision.

Instead:

1. mark it as `Superseded`
2. add the new decision ID
3. explain what changed
4. record the reason
5. update affected files
6. include the change in release notes where material

---

# Reversing a Decision

A reversed decision should explain:

- why the original choice no longer works
- what evidence changed
- what replaces it
- what must be migrated
- what risks the reversal creates

---

# Rejected Decisions

Record rejected ideas where they are likely to return.

Examples:

- building a traditional marketing website first
- publishing tool rankings based on affiliate income
- allowing automatic publication without review
- collecting raw beneficiary case studies

Recording rejection avoids repeated reconsideration without new evidence.

---

# Decision Log and Roadmap

A roadmap item may require a decision record when it affects:

- architecture
- audience
- risk
- commercial model
- governance
- public trust

The roadmap says what may happen.

The decision log explains why an important choice was made.

---

# Decision Log and Changelog

The decision log records reasoning.

The changelog records published changes.

A major decision may appear in both.

---

# Decision Log and Governance

Governance should define:

- who can make decisions
- which decisions require specialist review
- which decisions require public consultation
- which decisions require creator approval
- how conflicts of interest are handled

---

# Decision Quality Checklist

Before accepting a major decision:

- [ ] The problem is clear.
- [ ] Evidence has been reviewed.
- [ ] User needs are considered.
- [ ] Small and medium-sized charities are considered.
- [ ] Risks are identified.
- [ ] Alternatives are documented.
- [ ] Accessibility is considered.
- [ ] Privacy is considered.
- [ ] Safeguarding is considered.
- [ ] Commercial influence is disclosed.
- [ ] Consequences are understood.
- [ ] Review trigger is set.
- [ ] Affected files are identified.
- [ ] Decision maker is recorded.

---

# Monthly Decision Review

Review:

- decisions due for review
- decisions affected by new evidence
- new unresolved questions
- roadmap items requiring formal decisions
- decisions causing repeated friction

---

# Quarterly Decision Review

Review:

- core product decisions
- technical architecture
- governance
- audience assumptions
- commercial boundaries
- editorial standards
- maintenance burden
- decisions that may be obsolete

---

# Claude Prompt

Use:

```text
Review the proposed project decision for the AI Safe Use Knowledge Base for UK Charities.

Assess:

- context
- user need
- evidence
- alternatives
- risks
- accessibility
- privacy
- safeguarding
- governance
- maintenance
- commercial independence
- consequences
- review trigger

Produce:

1. Draft decision record.
2. Recommended status.
3. Rationale.
4. Alternatives considered.
5. Risks and limitations.
6. Affected files.
7. Dependencies.
8. Review date.
9. Whether the decision supersedes an earlier decision.

Do not treat a preference as a settled decision without clear rationale.
```

---

# Success Criteria

The Project Decision Log succeeds when:

- important choices remain understandable
- future maintainers know why the system works this way
- repeated debates are reduced
- reversals are transparent
- alternatives are not forgotten
- governance decisions are traceable
- the project can evolve without losing institutional memory
