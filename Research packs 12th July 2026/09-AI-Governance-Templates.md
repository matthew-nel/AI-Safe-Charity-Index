---
title: AI Governance Templates
description: Copy-ready Markdown templates for AI governance in UK charities, including registers, approval forms, DPIA screening and incident logs.
research_date: 2026-07-13
last_updated: 2026-07-13
suggested_review_date: 2027-01-13
jurisdiction: United Kingdom
audience: All UK charity sizes
status: Research pack
---

# AI Governance Templates

## Executive summary

UK charity guidance and sector resources increasingly recommend simple, practical governance tools—AI policies, registers, approval forms and incident logs—to bridge the gap between widespread AI use and limited formal oversight.[web:51][web:221][web:95][web:231][web:58] This pack provides copy-ready Markdown templates for 12 core governance artefacts sized for micro, small, medium and large charities.

Templates are aligned with Charity Commission expectations, UK GDPR principles and sector guidance from Charity Excellence, DataKind and Fundraising Regulator, but are not legal documents; organisations should adapt them and seek specialist advice for high-risk or complex uses.[web:51][web:231][web:58]

## Scope

Templates included:

1. AI use register.
2. AI tool approval form.
3. DPIA screening form.
4. Meeting transcription checklist.
5. AI incident and near-miss log.
6. Trustee AI assurance dashboard.
7. AI supplier questionnaire.
8. AI use-case risk assessment.
9. Staff/volunteer AI disclosure form.
10. AI output human-review checklist.
11. AI system review form.
12. AI policy exception request.

Each template includes purpose, when to use, who completes/reviews/approves, fields, short instructions, example entry, review frequency, relevant guidance, limitations and when to seek specialist advice.[web:231][web:226][web:58]

## Method

Templates draw on:

- Charity AI policy templates and governance packs.[web:221][web:95][web:231]
- Fundraising Regulator AI guidance on lifecycle, transparency and human oversight.[web:58]
- Sector articles on AI policy content and incident response.[web:226][web:227][web:228][web:229]

They are adapted for Markdown and proportionate use by UK charities of different sizes.

---

## 1. AI use register

### Purpose

To maintain a simple record of AI tools and use cases across the charity, supporting oversight, DPIA screening and incident response.[web:51][web:95][web:231]

### When to use

- Whenever a new AI tool or use case is proposed, approved or retired.
- Reviewed at least quarterly by the data-protection lead or equivalent.

### Who completes

- Staff proposing or managing AI use.

### Who reviews

- Data-protection lead or delegated digital/IT lead.

### Who approves

- Manager or executive responsible for the relevant area; trustees for high-risk uses.

### Template (Markdown table)

```markdown
| ID | Date added | Team | Use case name | Tool and plan | Purpose | Data types | Personal data? | Special-category data? | Children/adults at risk involved? | Internal connectors (e.g. SharePoint, Drive, CRM) | Lawful basis (if personal data) | DPIA screening needed? | Approved by | Go-live date | Review date | Status | Notes |
|----|------------|------|--------------|---------------|---------|-----------|----------------|------------------------|-----------------------------------|--------------------------------------------------|-------------------------------|------------------------|-----------|------------|------------|--------|-------|
```

### Example entry

```markdown
| AI-001 | 2026-07-10 | Fundraising | Drafting email appeals | ChatGPT Business | Draft first drafts of appeals and newsletters | Non-personal content; anonymised donor stories | No | No | No | None | Not applicable | No | Head of Fundraising | 2026-08-01 | 2027-02-01 | Active | Outputs reviewed by staff before sending. |
```

### Review frequency

- Update as new uses are added.
- Formal review at least annually; more often for larger charities.

### Relevant guidance

- Charity AI policy templates and DataKind AI use-form examples.[web:231][web:221]

### Limitations and advice

- Register does not replace DPIAs or detailed risk assessments.
- Seek DPO or legal advice for profiling, automated decision-making, or high-risk beneficiary uses.[web:111][web:88]

---

## 2. AI tool approval form

### Purpose

To document approval for new AI tools, capturing purpose, data, risks, controls and accountability.[web:226][web:58]

### When to use

- Before procuring or enabling a new AI tool or connector.

### Who completes

- Staff member sponsoring the tool.

### Who reviews

- Data-protection lead, safeguarding lead (if beneficiaries), IT/security.

### Who approves

- Senior manager or executive; trustees for high-risk systems.

### Template

```markdown
# AI Tool Approval Form

**Tool name and vendor:**
**Plan/tier (e.g. Business, Enterprise):**
**Sponsor (name, role):**
**Teams using the tool:**
**Purpose of use:**
**Activities supported (e.g. drafting, analysis, decision support):**

## Data and connectors

- Data types processed (non-personal; personal; special-category; children; adults at risk).
- Systems connected (SharePoint, Drive, CRM, case-management, email).
- Lawful basis for personal data (if applicable).

## Risks and controls

- Key privacy risks.
- Safeguarding risks.
- Accuracy/misinformation risks.
- Bias and discrimination risks.
- Security/connector risks.

## Proposed controls

- Policies and prohibitions (e.g. no case notes in general-purpose tools).
- Human review and approval steps.
- DPIA screening or full DPIA required?

## Supplier assurance

- DPA and data-processing terms checked? (Yes/No)
- Training on customer data disabled by default? (Yes/No/Not confirmed).
- Retention and deletion documented? (Yes/No).

## Decision

- Approved? (Yes/No/Conditional).
- Conditions (e.g. training, DPIA, limited pilot).
- Approver(s) and date.
```

### Example entry (excerpt)

```markdown
Tool name and vendor: Perplexity Enterprise Pro
Plan/tier: Enterprise Pro
Sponsor: Digital Lead
Purpose: Research support for policy team (non-beneficiary content).
Data: Public web pages; internal policy docs (no case notes).
Risks: Misinformation; overreliance; connector oversharing.
Controls: Training; connector permissions restricted; human review.
Decision: Approved for 6-month pilot, subject to DPIA screening.
Approver: CEO, 2026-09-01.
```

### Relevant guidance

- Charity AI policy templates and Fundraising Regulator AI lifecycle guidance.[web:58][web:95][web:231]

### Specialist advice

- Seek legal or safeguarding advice before approving tools that:
  - Influence decisions about individuals.
  - Use special-category data or involve children/adults at risk.

---

## 3. DPIA screening form

### Purpose

To decide whether a full Data Protection Impact Assessment is needed for an AI use case.[web:111][web:84]

### When to use

- For any AI use involving personal data, profiling, or automated decision-making.

### Template

```markdown
# AI DPIA Screening Form

**Project/use-case name:**
**Sponsor:**
**Date:**

## Description

- What AI tool and plan?
- What personal data is processed?
- Who is affected (beneficiaries, donors, staff, volunteers, children, adults at risk)?

## Risk triggers

- Profiling or scoring individuals? (Yes/No)
- Automated decisions with legal or significant effects? (Yes/No)
- Special-category or criminal-offence data? (Yes/No)
- Large-scale data processing? (Yes/No)
- Vulnerable individuals or children? (Yes/No)

## Screening outcome

- DPIA required? (Yes/No)
- Reasons.
- Next steps and owner.
```

### Example entry (excerpt)

```markdown
Project: Donor propensity scoring
Tool: CRM-embedded AI
Data: Donation history, engagement, postcode (no health or religion).
Triggers: Profiling individuals (Yes); vulnerable donors (Potential).
Outcome: Full DPIA required.
Owner: DPO.
```

### Limitations

- Screening is not a substitute for a full DPIA.
- Seek DPO/legal advice for borderline cases.[web:111][web:84]

---

## 4. Meeting transcription checklist

### Purpose

To decide whether AI-based meeting transcription is appropriate and to manage risks.[web:205][web:88]

### When to use

- Before enabling transcription for internal or beneficiary-related meetings.

### Template

```markdown
# Meeting Transcription Checklist

**Meeting name/date:**
**Organizer:**

## Content and participants

- Will sensitive personal data be discussed? (Yes/No)
- Will children or adults at risk be present? (Yes/No)
- Is this a safeguarding, disciplinary or clinical meeting? (Yes/No)

## Tool and settings

- Tool used (e.g. Teams, Zoom, Otter, internal AI).
- Is transcription stored in a secure organisational account? (Yes/No)
- Are retention and access controls configured? (Yes/No)

## Consent and transparency

- Have participants been informed about transcription? (Yes/No)
- Is consent required and documented? (Yes/No)

## Decision

- Transcription allowed? (Yes/No)
- Conditions (e.g. anonymisation, restricted access, shorter retention).
```

### Example decision

```markdown
Meeting: Staff planning meeting (no beneficiaries).
Tool: Microsoft Teams transcription.
Sensitive data: No.
Decision: Allowed; transcript stored in SharePoint with 1-year retention.
```

### Specialist advice

- Seek safeguarding and HR advice for meetings involving casework, investigations, or vulnerable beneficiaries.[web:88][web:91]

---

## 5. AI incident and near-miss log

### Purpose

To track AI-related incidents and near misses and support learning and reporting.[web:88][web:197]

### Template (Markdown table)

```markdown
| ID | Date | System/tool | Incident or near miss? | Description | People affected | Category (e.g. privacy, safeguarding, misinformation, bias) | Root cause | Immediate actions | Follow-up actions | Serious-incident report considered? | Owner | Status |
|----|------|------------|------------------------|-------------|-----------------|-------------------------------------------------------------|-----------|------------------|-------------------|------------------------------------|-------|--------|
```

### Example entry

```markdown
| AI-INC-001 | 2026-09-05 | ChatGPT Business | Near miss | Draft fundraising email included inaccurate statistics from AI output; caught before sending. | Donors (potential) | Misinformation | Human reviewer assumed AI was accurate; no fact-checking step. | Email paused; corrected manually. | Added fact-checking step to approval checklist. | No | Head of Fundraising | Closed |
```

### Review frequency

- Reviewed at least quarterly by senior leadership; serious incidents escalated per policy.[web:51]

---

## 6. Trustee AI assurance dashboard

### Purpose

To provide trustees with a one-page overview of AI governance status.[web:71][web:46]

### Template

```markdown
# Trustee AI Assurance Dashboard

## Overview

- AI policy: [Yes/No; date approved]
- AI use register: [Yes/No; last updated]
- High-risk AI uses identified: [Number]
- DPIAs completed for AI: [Number]

## Training

- Staff trained on AI policy: [Percentage]
- Trustees trained on AI risks: [Yes/No; date]

## Incidents

- AI incidents in last 12 months: [Number]
- Near misses logged: [Number]
- Serious incidents reported: [Number]

## Key risks

- Shadow AI (unapproved tools): [Summary]
- Beneficiary-facing AI: [Summary]
- Connectors to internal data: [Summary]

## Actions and owner

- Priority actions for next quarter.
- Named owner(s).
```

### Example (excerpt)

```markdown
AI policy: Yes (approved 2026-06-15)
AI use register: Yes (updated 2026-09-01)
High-risk AI uses: 2 (donor profiling pilot; internal chatbot).
Staff trained: 70%; Trustees training scheduled 2026-10.
Incidents: 0; Near misses: 3.
Priority actions: Complete DPIA for chatbot; review connector permissions.
Owner: Digital & Data Lead.
```

---

## 7. AI supplier questionnaire

### Purpose

To structure due diligence on AI suppliers.[web:111][web:128][web:160]

### Template

```markdown
# AI Supplier Questionnaire

**Vendor name:**
**Product and plan:**

## Data protection

- Do you provide a GDPR-compliant DPA? (Attach.)
- Is customer data used to train models? (Yes/No; by default?)
- What are default retention periods? Can they be configured?

## Security and access

- Where is data stored (regions)?
- What encryption is used?
- What admin controls, logging and identity management exist (SSO, SCIM)?

## Connectors and permissions

- Which systems can the product connect to (e.g. Drive, SharePoint, CRM)?
- How are permissions inherited? How do you prevent oversharing?

## Safeguarding and ethics

- How do you handle content related to children or adults at risk?
- Do you offer tools or guidance for preventing harmful outputs?

## Compliance and incidents

- What certifications do you hold (ISO, SOC etc.)?
- Have you had any relevant security or data incidents? (Summary.)
```

### Example use

- Completed by digital/IT lead and shared with DPO before procurement.

---

## 8. AI use-case risk assessment

### Purpose

To assess risks for a specific AI use case, beyond basic approval.[web:58][web:231]

### Template

```markdown
# AI Use-Case Risk Assessment

**Use case name:**
**Team:**
**Tool:**

## Objective

- What problem is this use case solving?

## People and data

- Who is involved and affected?
- What data is processed (including special-category, children, adults at risk)?

## Risk analysis

- Privacy risk.
- Safeguarding risk.
- Accuracy/misinformation risk.
- Bias and discrimination risk.
- Security/connector risk.

## Controls

- Minimum controls.
- Stronger controls.
- Approval and review.

## Outcome

- Classification (Green/Amber/Red).
- Conditions.
```

### Example (excerpt)

```markdown
Use case: Trustee board paper summaries.
Tool: Claude Team.
Objective: Save time preparing meeting packs.
People/data: Trustees; internal documents (no case notes).
Risks: Misinformation; confidentiality.
Controls: Use enterprise tier; no casework; human review.
Outcome: Amber (low risk with controls).
```

---

## 9. Staff or volunteer AI disclosure form

### Purpose

To surface shadow AI use and integrate it into governance.[web:201][web:113]

### Template

```markdown
# Staff/Volunteer AI Use Disclosure

**Name:**
**Role:**
**Team:**

## Tools used

- List any AI tools you currently use for charity work (including free/consumer tools).

## Activities

- What do you use AI for (e.g. drafting emails, research, translation)?

## Data

- Do you ever enter personal or sensitive data? (Yes/No).

## Support needed

- What guidance or tools would help you use AI safely?
```

### Example entry

```markdown
Name: Alex (Volunteer Coordinator)
Tools: ChatGPT Free; Canva AI.
Activities: Drafting volunteer emails; poster designs.
Data: No personal data entered.
Support: Want training on what data is safe to use.
```

---

## 10. AI output human-review checklist

### Purpose

To support meaningful human review of AI outputs before use.[web:58][web:213][web:214]

### Template

```markdown
# AI Output Review Checklist

**Use case:**
**Reviewer:**
**Date:**

## Accuracy

- Have all factual claims been checked against trusted sources? (Yes/No)

## Fairness and tone

- Could the output mislead, pressure or harm any audience (especially vulnerable people)? (Yes/No)

## Safeguarding

- Does the output include any unsafe advice or content related to self-harm, abuse or health? (Yes/No)

## Data protection

- Does the output avoid unnecessary personal or sensitive data? (Yes/No)

## Decision

- Approved as-is / Approved with changes / Rejected.
```

---

## 11. AI system review form

### Purpose

To periodically review AI systems for effectiveness, risk and control maturity.[web:196][web:201]

### Template

```markdown
# AI System Review

**System:**
**Owner:**
**Review date:**

## Usage

- How is the system used (teams, activities)?

## Benefits

- What benefits have been realised?

## Risks and incidents

- What incidents or near misses have occurred?

## Controls and changes

- Are policies, training and technical controls adequate?
- What changes are needed?

## Recommendation

- Continue / Modify / Retire.
```

---

## 12. AI policy exception request

### Purpose

To manage exceptions to the AI policy transparently.[web:113][web:221]

### Template

```markdown
# AI Policy Exception Request

**Requester:**
**Team:**
**Date:**

## Policy section

- Which part of the AI policy do you seek an exception to?

## Justification

- Why is the exception needed?
- What risks are involved?

## Controls

- What additional controls will mitigate the risk?

## Duration

- How long is the exception needed?

## Decision

- Approved / Rejected.
- Conditions.
- Approver and date.
```

## Sources

- Charity AI policy and template resources.[web:221][web:95][web:231]
- Charity Commission and Fundraising Regulator guidance on governance, AI and incident oversight.[web:51][web:58]
- Sector articles on creating AI policies and audit logs.[web:226][web:227]
