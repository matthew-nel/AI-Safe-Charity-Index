# AI Safe Use Knowledge Base for UK Charities
## Research, Feedback and Survey System

**Version:** 1.0.0  
**Status:** Foundation Document  
**Owner:** Matthew Nel  
**Last reviewed:** July 2026  
**Next review:** October 2026

# Purpose

This document defines how the knowledge base gathers feedback, conducts research and turns real charity experience into better guidance.

The knowledge base should operate as a two-way system:

> Trusted guidance goes out, and real charity experience comes back in.

The research and feedback system must be practical, ethical, transparent and proportionate.

# Research Mission

The project should learn:

- which AI tools charities are using
- which teams are using them
- what tasks AI is being used for
- whether use is formal or informal
- whether charities have an AI policy
- whether charities maintain an approved-tools list
- what information staff are entering into AI tools
- what staff believe is safe
- what worries charity teams
- where confidence is lowest
- where GDPR guidance feels unclear
- what slows responsible adoption
- what templates and guidance charities need
- what trustees and leaders want to understand
- what incidents or near misses are occurring
- what prevents charities from introducing governance
- which parts of the knowledge base are most useful
- what content needs clarification or expansion

Findings should improve:

- public guidance
- templates
- examples
- learning paths
- tool reviews
- frequently asked questions
- the Before You Paste framework
- release priorities
- future research reports

# Public Research and Community Section

The website should include a prominent section called:

# Research and Community

This section should include:

- Help improve the guidance
- Charity AI use survey
- Report a problem
- Suggest a topic
- Participate in research
- Research findings
- Research roadmap
- Contact and questions

# Help Improve the Guidance

This page should explain:

- why feedback is being collected
- who can contribute
- how feedback may be used
- whether responses may be quoted
- how anonymity will be handled
- how people can request removal where applicable
- how personal data will be handled
- that respondents must not submit personal, confidential or safeguarding case information

Suggested call to action:

> Share your experience of using AI in a charity.

# Charity AI Use Survey

Use Typeform, Tally or a similar form platform.

The survey link should be stored centrally so it can be changed without editing multiple pages.

Suggested configuration:

```yaml
research_survey_url: ""
feedback_form_url: ""
contact_url: ""
newsletter_url: ""
```

# Survey Structure

## Section 1: About the Organisation

Collect only what is necessary.

Possible questions:

- charity size
- approximate annual income band
- number of staff
- number of volunteers
- primary area of work
- UK nation or region
- respondent role
- whether the charity works directly with vulnerable people
- whether the charity processes special category data

The charity name should be optional unless there is a clear reason to collect it.

## Section 2: Current AI Use

Ask:

- Is your charity currently using AI?
- Is use formally approved, informal or both?
- Which tools are being used?
- Which teams are using them?
- Which tasks are they used for?
- Are staff using free, personal, business or enterprise accounts?
- Are AI features inside existing systems being used?
- Does the charity have an approved-tools list?
- Does the charity have an AI policy?
- Does the charity log or assess AI use cases?

## Section 3: Confidence and Knowledge

Ask how confident respondents feel about:

- recognising personal data
- recognising special category data
- anonymising information
- choosing an AI tool
- understanding privacy terms
- reviewing AI outputs
- identifying hallucinations
- recognising bias
- knowing when a DPIA may be needed
- knowing when to ask for specialist help

## Section 4: Concerns

Ask what worries them about:

- GDPR
- confidentiality
- safeguarding
- factual accuracy
- bias
- misinformation
- copyright
- job security
- staff misuse
- public trust
- procurement
- tool cost
- security
- environmental impact
- lack of skills
- lack of leadership support
- unclear regulation

## Section 5: Friction and Barriers

Ask:

- What stops the charity from using AI more confidently?
- What makes responsible use difficult?
- What takes too much time?
- What guidance is hard to understand?
- Where do internal disagreements happen?
- Which approvals are difficult to obtain?
- Which tools or processes are confusing?
- What would make safe adoption easier?

## Section 6: Guidance Needs

Ask which resources would be most useful:

- Before You Paste decision tool
- staff policy
- trustee briefing
- tool assessment checklist
- approved-tools register
- AI-use register
- DPIA triage
- output review checklist
- safe prompt examples
- training slides
- workflow-specific guidance
- tool reviews
- incident guidance
- procurement questions
- safeguarding guidance
- monthly regulatory updates

## Section 7: Open Feedback

Ask:

- What would you most like to understand about AI?
- What has been your biggest AI challenge?
- What is missing from current charity-sector guidance?
- What should this knowledge base cover next?
- Would you take part in a short interview?

Do not ask respondents to paste real beneficiary, donor, employee, safeguarding or case information.

# Research Privacy and Consent

Before launching any survey or feedback form, create:

- a clear privacy notice
- a stated research purpose
- a data-retention period
- a lawful-basis assessment
- a plan for storing and accessing responses
- a process for removing direct identifiers from analysis
- separate consent for follow-up contact
- separate consent for attributed quotations or case studies
- an incident process
- a process for reviewing free-text responses for accidentally submitted sensitive data

Participation must be optional.

Do not require an email address unless follow-up is requested.

Use separate optional fields for:

- receiving research updates
- volunteering for an interview
- being contacted about a question
- consenting to an attributed case study

Do not combine these permissions into one checkbox.

Do not publish raw survey responses.

Publish only suitably aggregated or anonymised findings.

Do not describe findings as anonymous if indirect identification remains possible.

# Feedback Routes

Visitors should be able to:

- report an error
- flag outdated information
- report a broken link
- explain unclear guidance
- suggest a source
- flag a potentially unsafe recommendation
- report a tool change
- suggest an example
- report an accessibility issue
- request new guidance
- ask a question
- volunteer for research

Provide:

- a simple public feedback form
- a GitHub issue route for users comfortable with GitHub
- a general contact route
- a research participation route

# Page-Level Feedback

Every substantive page should include:

## Was this page useful?

Options:

- Yes
- Partly
- No

Optional follow-up routes:

- Tell us what was unclear
- Report outdated information
- Suggest an example
- Ask a question

The feedback form should automatically include:

- page URL
- page title
- page version
- last-reviewed date

Avoid collecting unnecessary personal information.

# Contact and Questions

Create a public page called:

# Contact and Questions

People should be able to contact the project to:

- ask a question
- suggest an update
- report an error
- flag outdated guidance
- request a topic
- offer research participation
- suggest a source
- discuss collaboration
- enquire about training or support
- request permission to reuse material
- raise an accessibility issue

Keep guidance questions, corrections, research participation and commercial enquiries separate.

Commercial enquiries must not influence editorial decisions.

Use a role-based project email or form rather than an employer email address.

# Feedback Classification

Classify incoming feedback as:

- factual correction
- source update
- tool change
- unclear language
- navigation problem
- accessibility issue
- missing guidance
- research insight
- template request
- workflow request
- disagreement or alternative interpretation
- safeguarding concern
- data-protection concern
- commercial enquiry
- general question

Urgent safety or factual corrections should not wait for the next monthly release.

# Feedback-to-Guidance Workflow

Use this process:

1. Receive feedback.
2. Classify the issue.
3. Assess its safety impact.
4. Check existing evidence.
5. Gather additional evidence if needed.
6. Decide whether a content change is required.
7. Record the decision.
8. Draft the update.
9. Review the update independently.
10. Publish through the normal release process.
11. Credit contributors only with permission.

Research feedback should inform guidance, but it must not override authoritative legal or regulatory evidence.

# Insight Register

Maintain a structured insight register.

Suggested schema:

```yaml
id: INSIGHT-001
title:
summary:
audience:
charity_size:
source_type:
source_reference:
evidence_strength:
frequency:
severity:
affected_pages:
product_opportunity:
recommended_action:
status:
date_added:
last_reviewed:
notes:
```

Suggested statuses:

- New
- Needs more evidence
- Validated
- Planned
- In progress
- Implemented
- Declined
- Monitor
- Superseded

A single survey comment must not be treated as a validated sector insight.

Look for:

- repeated patterns
- high-risk edge cases
- differences by charity size
- differences by role
- differences by service type
- contradictions
- gaps between policy and behaviour
- recurring misunderstandings
- unmet template needs

# Research Repository Structure

Recommended structure:

```text
research/
├── methodology/
│   ├── research-principles.md
│   ├── survey-methodology.md
│   ├── interview-methodology.md
│   ├── privacy-and-consent.md
│   └── limitations.md
├── instruments/
│   ├── charity-ai-use-survey.md
│   ├── interview-guide.md
│   ├── usability-test-guide.md
│   └── feedback-categories.yml
├── findings/
│   ├── monthly/
│   ├── quarterly/
│   └── annual/
├── insights/
│   ├── insight-register.yml
│   ├── open-questions.yml
│   └── content-opportunities.yml
└── public/
    ├── research-overview.md
    ├── current-research.md
    └── findings-index.md
```

Do not commit raw personal research data to the public repository.

The repository should contain only:

- methodology
- blank research instruments
- aggregated findings
- anonymised insights
- limitations
- public reports
- content decisions resulting from research

# Research Outputs

Possible outputs include:

- monthly insight notes
- quarterly findings
- annual State of AI Use in UK Charities report
- emerging-risk updates
- common-question reports
- most-used AI tools
- policy-adoption trends
- findings by charity size
- findings by role
- confidence and skills trends

Clearly distinguish original research from external evidence.

# Research Roadmap

Possible research themes:

- AI adoption by charity size
- informal or shadow AI use
- AI policy adoption
- approved-tool practices
- AI in fundraising
- meeting transcription
- AI and safeguarding
- trustee confidence
- staff training needs
- tool procurement
- barriers to GDPR-aligned use
- AI incidents and near misses
- free versus workplace accounts
- sector-specific needs
- differences across UK nations

Show:

- current research
- planned research
- completed research
- published findings
- ways to participate

# Monthly Research Review

During each monthly update, review:

- new survey responses
- feedback submissions
- GitHub issues
- questions received
- interview notes
- usability findings
- page usefulness ratings
- failed searches
- frequently requested topics

Produce a section called:

# What Charities Told Us

Include:

- recurring questions
- new concerns
- confusing pages
- unmet needs
- differences by charity size
- proposed improvements
- areas needing more research
- areas where evidence is still insufficient

# Privacy-Respecting Analytics

Use analytics only where they help improve the site.

Track where appropriate:

- most-viewed pages
- failed searches
- internal search terms
- navigation paths
- template downloads
- feedback completion
- survey referrals
- broken links

Do not create intrusive user profiles.

Explain analytics use in the privacy notice.

# Success Criteria

The research and feedback system succeeds when:

- charities can give feedback without using GitHub
- experienced contributors can use GitHub issues
- users can easily report outdated guidance
- survey links can be changed centrally
- feedback is categorised and traceable
- raw research data is not public
- personal data collection is minimised
- respondents understand how their data will be used
- insights are separated from anecdotes
- research findings visibly influence releases
- contributors can see what changed
- commercial enquiries remain separate from editorial decisions
