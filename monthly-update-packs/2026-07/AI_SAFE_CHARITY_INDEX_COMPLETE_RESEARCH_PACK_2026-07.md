---
title: "AI Safe Charity Index: Complete Research and GitHub Implementation Pack"
description: "Current UK charity AI-safety, data-protection, safeguarding, governance and AI-tool research, with a page-by-page implementation plan."
section: "research-and-community"
page_type: "research-pack"
audience:
  - trustees
  - charity managers
  - staff
  - volunteers
  - data-protection leads
  - safeguarding leads
charity_size:
  - small
  - medium
risk_level: "amber"
status: "research-draft"
version: "0.1.0"
last_reviewed: "2026-07-12"
next_review: "2026-08-12"
evidence_level: "mixed-primary-and-sector"
owner: "Matthew James Nel"
maintainer: "Matthew James Nel"
tags:
  - artificial-intelligence
  - data-protection
  - safeguarding
  - governance
  - tool-review
  - uk-charities
feedback_enabled: true
---

# AI Safe Charity Index: Complete Research and GitHub Implementation Pack

**Research date:** 12 July 2026  
**Primary jurisdiction:** United Kingdom, with Charity Commission material applying mainly to England and Wales  
**Purpose:** Research and implementation planning, not legal advice  
**Intended project:** MkDocs + Material public knowledge base for UK charities

> This pack is not approved public guidance. It converts current official and high-quality sources into a cautious implementation plan. Any legal, data-protection, safeguarding, employment, vulnerable-person or significant automated-decision guidance must receive appropriate human review before publication.

## How to use this pack

This document combines the work requested by the supplied Research Prompt Pack:

1. a broad Perplexity-style discovery pack;
2. a ChatGPT-style evidence synthesis and GitHub impact pack;
3. a July 2026 monthly update;
4. current reviews of ChatGPT, Claude, Google Gemini, Microsoft Copilot, Notion AI, Perplexity, Canva AI and Adobe Firefly;
5. source-register and claim-register candidates;
6. a page, navigation, template and release plan for Codex.

It intentionally does not turn vendor claims into independent assurances. Product controls, prices and terms change quickly and must be rechecked at the point of procurement and at each scheduled review.

---

# Part I — Combined UK Charity AI-Safety Research Pack

## 1. Executive summary

- UK charities can use AI, but trustees remain responsible for decisions, risk management and furthering the charity's purposes. Responsibility cannot be delegated to an AI system.
- The safest public rule is not “never paste personal data”. It is: do not put personal, confidential, safeguarding or restricted information into an AI tool unless the use is authorised, necessary, lawful, minimised and covered by an assessed organisational account and controls.
- Consumer and organisational plans must be treated differently. A personal paid account is not automatically a suitable work account and may lack a suitable contract, DPA, administrative controls, retention settings and auditability.
- A proportionate AI-use register, tool approval process, written staff rules and named ownership are high-value controls for small and medium charities.
- A DPIA is required where processing is likely to result in a high risk to people. It should take place before deployment and be revisited when the tool, model, data, integration or purpose changes.
- Special-category data, criminal-offence data, safeguarding records and information about children require particularly careful treatment. Most routine public chatbot use involving such data should be treated as Red unless specialist approval and appropriate systems are in place.
- The Data (Use and Access) Act 2025 changed UK data-protection law. Major provisions came into force on 5 February 2026. The framework for significant automated decisions is more permissive in some circumstances, but meaningful safeguards, transparency, human challenge and stronger rules for special-category data remain essential.
- Final updated ICO automated-decision-making guidance is expected in winter 2026. Pages on ADM should therefore be published as cautious interim guidance with an explicit review flag.
- The Fundraising Regulator's December 2025 AI guidance is directly relevant. It calls for trustee oversight, proportionate risk assessment, an AI policy, testing, transparency, human review, secure data handling and records of important checks and decisions.
- AI meeting transcription is not merely an admin shortcut. It can capture personal data, special-category data, confidential discussions and third-party voices. The use case needs advance notice, a valid data-protection analysis, access controls, retention rules and an appropriate approach to consent or another lawful basis.
- Agentic AI creates additional risk because it can act through connected systems. Least privilege, restricted connectors, testing, approval gates, monitoring and an effective kill switch should be required.
- AI-generated material must be checked for accuracy, bias, copyright, confidentiality, misleading representations and accessibility before publication or operational use.
- The public knowledge base should teach a repeatable decision process rather than offer blanket approval of particular brands.

## 2. Search scope

### Date searched

12 July 2026.

### Date range considered

The research prioritised sources current on the search date, with special attention to changes from July 2025 to July 2026. Older sources were included where they remain the principal official guidance.

### Jurisdictions covered

- United Kingdom data-protection and cyber-security guidance;
- England and Wales charity regulation;
- UK-wide sector practice where the source is applicable;
- international provider documentation where it governs UK customers.

Charities in Scotland and Northern Ireland should also check OSCR, SCVO and NICVA/Charity Commission for Northern Ireland requirements relevant to their legal structure and activities.

### Source types searched

- legislation and GOV.UK guidance;
- Information Commissioner's Office guidance and strategy;
- Charity Commission guidance;
- Fundraising Regulator guidance;
- National Cyber Security Centre and DSIT material;
- Charity Governance Code and Charity Digital Code of Practice;
- NCVO and Charity Digital sector material;
- official provider privacy, security, plan and nonprofit documentation.

### Known exclusions

- no contract, order form or private security document specific to an individual charity was reviewed;
- no independent penetration testing or provider audit reports were examined;
- no assessment was made of a charity's own lawful bases, privacy notices, records of processing, safeguarding policies or IT environment;
- pricing displayed in currencies other than GBP has not been converted;
- final ICO ADM guidance was not available on the research date;
- provider features in beta, preview or regional rollout may differ.

## 3. Key questions answered

1. What may staff safely use generative AI for without entering personal or confidential data?
2. When does an AI use require approval, a tool assessment or a DPIA?
3. How should a charity distinguish personal, consumer, team, business and enterprise accounts?
4. What should never be pasted into a public or unapproved AI tool?
5. What responsibilities remain with trustees and senior managers?
6. How should human oversight work in writing, research, fundraising, recruitment and service delivery?
7. What changes introduced by the DUAA matter in 2026?
8. What special rules or cautions apply to children, beneficiaries and people in vulnerable circumstances?
9. How should charities assess AI meeting notes, connected apps and agentic systems?
10. Which current provider claims can be stated, and which need recurring verification?
11. What pages, templates, registers and navigation changes should the GitHub knowledge base receive?

## 4. Current position

### 4.1 Law and regulation

UK data-protection law is technology-neutral. If an AI use processes personal data, the charity must comply with applicable principles and obligations, including lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, security and accountability.

The [Data (Use and Access) Act 2025](https://www.legislation.gov.uk/ukpga/2025/18/contents) amended the UK GDPR, Data Protection Act 2018 and PECR. The majority of the main data-protection changes commenced on 5 February 2026. Relevant changes include:

- a revised framework for solely automated decisions with legal or similarly significant effects;
- clarification of reasonable and proportionate searches for subject-access requests;
- additional consideration of children in online-service design;
- changes to recognised legitimate interests and international transfers;
- a new charitable-purposes soft opt-in for some electronic fundraising marketing, subject to conditions;
- a data-protection complaints process requirement.

The DUAA does not remove the need for a lawful basis, fairness, transparency, security, data minimisation or safeguards. It must not be summarised publicly as “AI decisions are now allowed”.

### 4.2 Regulator guidance

The ICO's [Guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/) remains the main detailed source. It covers governance, DPIAs, lawfulness, fairness, transparency, security, minimisation, accuracy and individual rights.

The ICO is updating its ADM guidance after the DUAA. Its [technology guidance plan](https://ico.org.uk/about-the-ico/what-we-do/our-plans-for-new-and-updated-guidance/technology/) lists final ADM and profiling guidance for winter 2026. Until then, public wording should be conservative and reviewed by a data-protection specialist.

### 4.3 Charity regulation and trustee duties

The Charity Commission's [Charities and Artificial Intelligence](https://charitycommission.blog.gov.uk/2024/04/02/charities-and-artificial-intelligence/) states that AI should further the charity's purposes, trustees remain responsible for decisions, material decisions should not rely on AI output alone, human oversight is expected, and charities holding sensitive information or serving people at higher risk need particular caution.

The Commission's [safeguarding guidance](https://www.gov.uk/guidance/safeguarding-and-protecting-people-for-charities-and-trustees) makes trustees accountable for taking reasonable steps to protect beneficiaries, staff, volunteers and others who come into contact with the charity.

The [Charity Governance Code 2025](https://www.charitygovernancecode.org/wp-content/uploads/2025/10/CCG_English_FINAL_highres.pdf) is voluntary rather than regulatory, but it now explicitly identifies a policy for the use of technology and AI tools as potential evidence of sound management of resources and risks.

### 4.4 Fundraising

The Fundraising Regulator's [Guidance for using artificial intelligence in fundraising](https://www.fundraisingregulator.org.uk/about-fundraising/resources/guidance-using-artificial-intelligence-fundraising) says that fundraising organisations remain accountable for AI-assisted outputs and should:

- involve trustees in strategic decisions and continuing oversight;
- conduct a proportionate risk assessment before use;
- agree an AI policy;
- test or pilot tools before wider implementation;
- understand how material is used, stored and shared;
- provide transparency proportionate to the risk of misleading donors;
- use human checking and record important checks;
- avoid placing non-public information into public/open AI;
- obtain specialist advice where required.

Fundraising-specific pages should also reflect the regulator's current [data privacy and fundraising guidance](https://www.fundraisingregulator.org.uk/about-fundraising/resources/data-privacy-and-fundraising) and the charitable-purposes soft opt-in. AI does not change the conditions of that soft opt-in.

### 4.5 Cyber security

The NCSC warns that prompt injection can cause systems to reveal confidential information or take unintended actions. Its [AI and cyber security guidance](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know), [secure AI development guidance](https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development) and May 2026 [agentic AI caution](https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai) support:

- least-privilege access;
- secure configuration and procurement;
- strong authentication;
- restricted connectors;
- monitoring and logging;
- testing of failure modes;
- incident and rollback plans;
- treating model output and retrieved external content as untrusted.

The [AI Cyber Security Code of Practice](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai) provides a useful voluntary baseline for organisations that operate or deploy AI systems.

### 4.6 Charity-sector good practice

[NCVO guidance for small charities](https://www.ncvo.org.uk/help-and-guidance/digital-technology/technology-tools-and-software/how-ai-can-help-small-charities/) supports responsible experimentation while pointing to data-protection and cyber-security responsibilities.

The [Charity Digital Code of Practice 2025](https://charitydigital.org.uk/topics/the-charity-digital-code-of-practice-2025-12116) makes responsible AI part of digital risk, values, inclusion, accountability, fairness and transparency.

### 4.7 Provider documentation

Provider documentation consistently shows that account type matters. Organisational plans more often provide no-training defaults, contractual terms, admin controls, SSO, auditability and configurable retention. Consumer plans often rely on individual settings and consumer terms. A charity must verify the current position rather than assume that paying for a personal subscription creates organisational protection.

### 4.8 Expert commentary

Sector commentary is useful for examples and adoption context but should not override legislation, regulators, contracts or provider documentation. Statistics about adoption and policy maturity should be separately verified before publication.

### 4.9 Unresolved uncertainty

- final ICO ADM guidance is pending;
- provider retention and safety-review exceptions can be complex;
- connected apps, web search, partner models and agents may introduce different data flows from the core product;
- “GDPR compliant” provider marketing is not a substitute for the charity's own compliance assessment;
- there is no universal legal requirement to label every AI-assisted output, but transparency may be legally, ethically or regulatorily necessary depending on context;
- the correct lawful basis for meeting transcription, beneficiary analysis or donor profiling depends on the specific facts.

## 5. Recent changes: July 2025 to July 2026

| Change | Date | Why it matters | Public guidance impact |
| --- | --- | --- | --- |
| DUAA 2025 received Royal Assent and major data-protection provisions commenced | Royal Assent 19 Jun 2025; major commencement 5 Feb 2026 | Changes ADM, SARs, children, complaints, transfers and marketing rules | High: update all data-protection and ADM pages |
| Charitable-purposes soft opt-in became operational with new ICO/Fundraising Regulator guidance | 2026 | Some charities can market electronically without prior consent if all conditions are met | High for fundraising; do not overgeneralise |
| Fundraising Regulator published AI-specific fundraising guidance | 8 Dec 2025 | Establishes direct sector expectations for policy, risk assessment, trustees and human oversight | High: create a fundraising AI page |
| Charity Governance Code 2025 published | 2025 | Explicitly identifies a technology/AI policy as evidence of risk governance | High: update trustee and policy pages |
| NCSC warned about adoption of agentic AI | 15 May 2026 | Connected systems can act, not merely generate text | High: create agent and connector guidance |
| ICO consulted on new ADM guidance | Consultation closed 29 May 2026; final due winter 2026 | Current public wording may change | High: interim warning and scheduled review |
| ICO March 2026 AI and biometrics strategy update | Mar 2026 | Signals regulatory attention to ADM, recruitment, foundation models and agentic AI | Medium–high |
| Provider nonprofit programmes expanded | 2025–26 | Safer organisational plans may be more affordable | Medium; verify prices at review |
| Anthropic clarified consumer and commercial retention/training differences | Updated Mar–Jul 2026 | Personal Claude and Claude for Work must not be conflated | High for tool guide |
| Google refreshed the Gemini Apps Privacy Hub | 29 Jun 2026 | Personal-account practices need current wording | High for Gemini guide |
| Perplexity refreshed Enterprise retention, audit and nonprofit documentation | 1 May 2026 | Enterprise use differs materially from consumer use | High for tool guide |
| Adobe clarified partner-model behaviour in Firefly Enterprise | 2026 | Prompts/input files may pass to selected partner models under Adobe's enterprise terms | Medium–high |

## 6. Evidence hierarchy

Use this hierarchy in public pages:

1. **Tier 1 — Law and regulator:** legislation, ICO, Charity Commission, Fundraising Regulator, statutory safeguarding guidance.
2. **Tier 2 — Government and national cyber guidance:** GOV.UK, NCSC, DSIT, public-sector ethics/procurement frameworks.
3. **Tier 3 — Provider primary documentation:** current terms, DPA, privacy/security documentation, admin documentation and pricing.
4. **Tier 4 — Established sector practice:** NCVO, Charity Digital, Charity Governance Code and comparable bodies.
5. **Tier 5 — Commentary and case studies:** useful context only; do not use alone for a legal or product-control claim.

## 7. Practical implications by audience

### Small charities

- Adopt one page of clear staff rules before attempting a large policy.
- Approve a small number of organisational tools; discourage work through personal accounts.
- Appoint a named AI/data owner even if this is a combined role.
- Record tools, use cases, owners, data categories, decisions and review dates.
- Begin with public information and low-impact drafting.
- Escalate personal-data or beneficiary-facing uses.

### Medium charities

- Add a formal tool/vendor assessment, DPA review and role-based access.
- Maintain AI, data-protection, safeguarding and cyber risks in existing registers.
- Use SSO/MFA, offboarding, audit logs and retention policies where available.
- Require DPIA screening and Equality Impact Assessment screening for consequential uses.
- Test tools against representative failure cases and protected groups.

### Trustees

- Set risk appetite and approve strategic or high-risk uses.
- Ensure AI supports charitable purposes and values.
- Ask what staff already use, including personal accounts and unofficial browser extensions.
- Require evidence of risk assessment, testing, human oversight and incident response.
- Do not accept an AI-generated board paper, legal analysis or risk conclusion without accountable human review.

### Staff and volunteers

- Use only approved accounts for work.
- Apply the Before You Paste check every time.
- Remove names, contact details, case details and unique combinations that could identify someone.
- Check every factual, legal, financial, safeguarding and public claim.
- Report accidental disclosure or harmful output immediately.

### Safeguarding leads

- Treat safeguarding disclosures and case records as Red for general-purpose AI tools.
- Review any beneficiary-facing chatbot, crisis triage or automated moderation.
- Require a safe route to a human and clear emergency/limitations messaging.
- Examine risks of harmful advice, grooming, impersonation, deepfakes and hidden automation.

### Data-protection leads

- Determine controller/processor roles and whether a DPA applies.
- document purposes, lawful bases, categories, recipients, transfers, retention and data-subject rights;
- screen for DPIA and special-category/criminal-offence conditions;
- review connectors, web grounding, subprocessors and safety-retention exceptions;
- confirm whether user/admin deletion actually triggers back-end deletion and when.

## 8. The Before You Paste model

The public model should be a short pause, not a legal questionnaire.

### Step 1: Is the tool approved for work?

- **No:** stop. Use a sanctioned alternative or seek approval.
- **Yes:** continue.

### Step 2: What information are you entering?

- public, non-personal and non-confidential information;
- internal but non-personal information;
- personal data;
- special-category, criminal-offence, safeguarding, child or highly confidential data.

### Step 3: Is the information genuinely necessary?

Remove or generalise anything the task does not require. Pseudonymisation reduces risk but does not necessarily take data outside UK GDPR.

### Step 4: What will the AI do?

- assist a human with a draft;
- analyse or infer information about people;
- recommend or make a decision;
- communicate directly with a beneficiary or donor;
- access connected systems or take actions.

Risk rises down this list.

### Step 5: Who checks the result and what happens if it is wrong?

There must be a named, competent human reviewer. “A human looked at it” is not meaningful oversight if the person cannot understand, challenge or change the result.

## 9. Green / Amber / Red guidance

### Green

Normally suitable in an approved tool, with ordinary human checking:

- brainstorming headings from public information;
- simplifying public website copy;
- creating a first draft of a generic social post;
- turning public guidance into a checklist, followed by source verification;
- generating dummy data, fictional scenarios or placeholder copy;
- reformatting non-confidential text;
- summarising material that the charity owns and has already published;
- creating design ideas that do not depict a real beneficiary or claim a fictional story is real.

Green does not mean “publish without checking”.

### Amber

Requires an approved organisational tool, a defined purpose, minimisation, an accountable reviewer and sometimes specialist approval:

- using internal documents that contain no personal data but are confidential;
- analysing pseudonymised survey comments where re-identification remains possible;
- drafting a funding bid from approved internal evidence;
- transcribing or summarising meetings after appropriate notice and governance;
- using donor or supporter data for segmentation;
- drafting HR material, performance guidance or recruitment content;
- connecting the AI to SharePoint, Google Drive, Slack, Notion or a CRM;
- using AI-generated images in public fundraising or beneficiary communications;
- research that may influence policy, public claims or expenditure;
- summarising contracts or legal guidance for a qualified person to review.

### Red

Do not use a general-purpose or unapproved AI tool. Specialist assessment and a purpose-built controlled system may be required:

- live safeguarding disclosures, case files or risk assessments;
- identifiable health, disability, sexual-life, ethnicity, religion or political data;
- information about children or adults at risk where the person could be identified;
- passwords, API keys, security configurations or unreleased vulnerability information;
- deciding who receives a service, grant, job, disciplinary action or other significant outcome without meaningful human involvement and safeguards;
- generating legal, medical, mental-health or crisis advice for direct delivery as if authoritative;
- impersonating a real beneficiary, donor, colleague or public figure;
- fabricating testimonials, impact evidence, research findings or donor stories;
- autonomous agents that can send money, publish, delete records or message people without approval gates;
- uploading material the charity has no right or permission to use;
- using a personal consumer account to process work personal data.

## 10. Risks and failure modes

| Risk | Example failure | Core control |
| --- | --- | --- |
| Privacy | A caseworker pastes a beneficiary email into a personal chatbot | Approved-account rule, minimisation, training and incident process |
| Safeguarding | A chatbot gives unsafe crisis advice | No autonomous crisis advice; human route and specialist review |
| Governance | Trustees accept AI-generated legal advice | Independent verification and recorded decision owner |
| Accuracy | Fabricated citation appears in a policy | Open and verify every source |
| Bias | Screening disadvantages a protected group | Equality testing, representative data, challenge and redress |
| Procurement | Charity buys a plan without a DPA or deletion controls | Vendor assessment and contract review |
| Security | Connected agent follows malicious prompt in an external document | Least privilege, isolation, approvals and monitoring |
| Reputational | Synthetic image is presented as a real beneficiary | Transparent labelling and content provenance |
| Intellectual property | Output reproduces protected material | Rights checks and documented editorial review |
| Confidentiality | AI connector exposes broadly shared internal content | Permission audit before enabling AI search |
| Employment | AI score becomes a de facto recruitment decision | DPIA, transparency, validation, human challenge and legal review |
| Over-retention | Meeting transcripts persist indefinitely | Defined retention and tested deletion workflow |

## 11. Claims requiring verification before publication

| Claim | Why verification is needed | Route |
| --- | --- | --- |
| “The DUAA is fully in force” | Different provisions commenced at different times | Confirm relevant provision on legislation.gov.uk and ICO |
| “A charity can now email any supporter without consent” | Soft opt-in has specific conditions and opt-out duties | ICO and Fundraising Regulator review |
| “This tool is GDPR compliant” | Compliance depends on the charity's use and contract | Replace with specific provider control plus charity duty |
| “Business data is never retained” | Safety, legal, feature and contract exceptions may apply | Current retention documentation/order form |
| “No training” | Plan, feedback, settings or partner models may alter position | Current official provider documentation |
| “Consent is required to record every meeting” | Lawful basis depends on facts; consent may not be the correct UK GDPR basis | DPO/legal review |
| “Pseudonymised data is anonymous” | Pseudonymised data can remain personal data | ICO anonymisation guidance |
| “Human review makes automated decisions lawful” | Human involvement must be meaningful | ICO final ADM guidance when published |
| Exact prices and discounts | Volatile and region-dependent | Provider pricing page on review date |
| Data residency availability | Often plan- and region-specific | Contract and current admin documentation |

## 12. Conflicting evidence and uncertainty

- Some older ICO Article 22 pages predate the DUAA amendments. Prefer the DUAA summary and forthcoming updated guidance for the new legal framework, while retaining older pages for enduring principles only.
- Provider pages sometimes use “not used to train” while retaining data for product history, safety or legal reasons. Training and retention are separate questions.
- Marketing statements such as “enterprise-grade” or “GDPR compliant” do not disclose all contractual limitations. Convert them into specific, attributable provider claims.
- Product search features may send generated web queries through a separate service or controller arrangement. The core workspace DPA may not cover every web-grounding flow.
- AI transcription guidance often uses the word consent in a product-interface sense. That does not automatically determine the lawful basis under UK GDPR.
- Tool outputs may include citations but still misrepresent the underlying page. Citation presence is not verification.

## 13. Recommended public pages to update

| Page path | Change | Priority | Risk | Confidence |
| --- | --- | --- | --- | --- |
| `docs/before-you-paste/index.md` | Replace blanket rules with the five-step decision | High | Amber | High |
| `docs/ai-and-data-protection/index.md` | Add DUAA 2025 position, controller/processor, minimisation and plan distinction | High | Amber | High |
| `docs/ai-and-data-protection/automated-decisions.md` | Create cautious interim ADM page | High | Red | Medium pending final ICO guidance |
| `docs/ai-and-data-protection/dpia-triage.md` | Add AI-specific screening | High | Amber | High |
| `docs/everyday-charity-work/fundraising.md` | Add Fundraising Regulator AI guidance and soft-opt-in caution | High | Amber | High |
| `docs/everyday-charity-work/meetings-and-transcription.md` | Create meeting-notes decision page | High | Amber | Medium-high |
| `docs/everyday-charity-work/research.md` | Add citation verification and confidential-source rules | High | Amber | High |
| `docs/everyday-charity-work/recruitment-and-hr.md` | Add ADM, fairness, transparency and human challenge | High | Red | High at principle level |
| `docs/governance/index.md` | Add board ownership and 2025 Governance Code | High | Amber | High |
| `docs/governance/ai-policy.md` | Create minimum viable and expanded policy routes | High | Amber | High |
| `docs/governance/tool-approval.md` | Create vendor/use-case approval workflow | High | Amber | High |
| `docs/governance/agents-and-connectors.md` | Create least-privilege and approval guidance | High | Red | High |
| `docs/governance/incidents.md` | Add AI incident route | Medium | Red | High |
| `docs/tools/index.md` | Explain tool guide methodology and plan differences | High | Amber | High |
| `docs/templates.md` | Add registers, checklists and forms | High | Amber | High |
| `docs/about/faq.md` | Add practical questions | Medium | Green | High |
| `docs/about/glossary.md` | Add AI governance terms | Medium | Green | High |
| `docs/updates/2026-07.md` | Publish the regulator/legal change summary after review | High | Amber | High |

## 14. Recommended new pages

### Automated decisions, profiling and AI

- **Path:** `docs/ai-and-data-protection/automated-decisions.md`
- **Audience:** trustees, HR, fundraisers, service managers, DPOs
- **Purpose:** distinguish assistance, recommendation and solely automated significant decisions.
- **Outline:** definitions; DUAA change; meaningful involvement; special-category data; safeguards; challenge/redress; DPIA; examples; review notice.
- **Required review:** data-protection/legal.

### AI meeting notes and transcription

- **Path:** `docs/everyday-charity-work/meetings-and-transcription.md`
- **Purpose:** make recording, notice, lawful-basis, access and retention decisions practical.
- **Required review:** DPO and safeguarding lead where relevant.

### Agents, connectors and permissions

- **Path:** `docs/governance/agents-and-connectors.md`
- **Purpose:** cover tools that search internal systems or take actions.
- **Required sources:** NCSC agentic AI, provider admin documentation, AI Cyber Security Code.

### AI in fundraising

- **Path:** `docs/everyday-charity-work/ai-in-fundraising.md`
- **Purpose:** translate the Fundraising Regulator's guidance into practical checks.

### Choosing the right account plan

- **Path:** `docs/tools/account-plans-and-data-controls.md`
- **Purpose:** stop staff treating personal paid accounts as work-approved plans.

## 15. Navigation recommendations

No new top-level navigation section is required. Add child pages within existing sections.

```yaml
nav:
  - AI and Data Protection:
      - Overview: ai-and-data-protection/index.md
      - DPIA triage for AI: ai-and-data-protection/dpia-triage.md
      - Automated decisions and profiling: ai-and-data-protection/automated-decisions.md
  - Everyday Charity Work:
      - Overview: everyday-charity-work/index.md
      - AI in fundraising: everyday-charity-work/ai-in-fundraising.md
      - Meetings and transcription: everyday-charity-work/meetings-and-transcription.md
      - Recruitment and HR: everyday-charity-work/recruitment-and-hr.md
      - Research and evidence: everyday-charity-work/research.md
  - Governance:
      - Overview: governance/index.md
      - AI policy: governance/ai-policy.md
      - Tool approval: governance/tool-approval.md
      - Agents and connectors: governance/agents-and-connectors.md
      - AI incidents: governance/incidents.md
  - Tools:
      - Overview: tools/index.md
      - Account plans and data controls: tools/account-plans-and-data-controls.md
      - ChatGPT: tools/chatgpt.md
      - Claude: tools/claude.md
      - Google Gemini: tools/google-gemini.md
      - Microsoft Copilot: tools/microsoft-copilot.md
      - Notion AI: tools/notion-ai.md
      - Perplexity: tools/perplexity.md
      - Canva AI: tools/canva-ai.md
      - Adobe Firefly: tools/adobe-firefly.md
```

## 16. Draft outline for the highest-priority page

### Before You Paste

1. One-sentence promise: pause before sharing information with AI.
2. Five-step decision.
3. Green/Amber/Red examples.
4. “Public does not always mean harmless” note.
5. “Personal account is not a work account” warning.
6. Pseudonymisation example.
7. Special-category and safeguarding stop box.
8. Connected-app and agent warning.
9. What meaningful human review looks like.
10. What to do after an accidental paste.
11. Links to data protection, safeguarding, tools and incident guidance.

## 17. Known limitations

- This is desk research, not a legal opinion or DPIA.
- The project specification corpus was listed in the prompt but was not supplied for line-by-line comparison.
- The existing repository was not available, so file paths are recommendations rather than applied changes.
- Provider control claims are based on public official documentation rather than negotiated contracts.
- Tool reviews do not cover every model, region, connector, API or embedded third-party feature.

---

# Part II — July 2026 Monthly Research Pack

## Executive summary

The recommended July 2026 release type is **minor**, with one high-priority interim correction: update any existing page that still presents the pre-DUAA Article 22 position as the complete current law.

## Major changes this month

1. Anthropic, Google and other providers refreshed privacy/retention documentation in late June and early July 2026.
2. The Fundraising Regulator's charitable-purposes soft-opt-in guide was published on 24 June 2026 and should be reflected in July updates.
3. ICO final ADM guidance remains in drafting and is expected in winter 2026.
4. Government AI cyber-security collections were updated on 10 July 2026.
5. Current tool reviews need plan-specific language, especially around consumer versus organisational accounts.

## Regulatory and government updates

- Major DUAA data-protection provisions are now operational.
- The statutory framework for an AI and ADM code of practice has advanced, but final practical guidance is still forthcoming.
- The new charitable-purposes soft opt-in must be described as conditional, not blanket permission.
- NCSC guidance makes agentic AI an immediate governance topic rather than a future issue.

## Charity-sector updates

- Fundraising-specific AI guidance is now strong enough to support a dedicated page.
- The 2025 Charity Governance Code supports a board-approved technology and AI policy.
- Sector adoption claims suggest widespread use, but numerical claims should be traced to the original Charity Digital Skills Report before publication.

## Provider updates

- **OpenAI:** nonprofit discounts and business-data commitments remain available; consumer controls and temporary chat remain distinct from Business/Enterprise defaults.
- **Anthropic:** commercial no-training default, consumer settings and retention, Enterprise retention controls and nonprofit discounts are now more clearly documented.
- **Google:** the Gemini Apps Privacy Hub was updated 29 June 2026. Personal and Workspace use must be separated.
- **Microsoft:** Microsoft 365 Copilot and Copilot Chat continue to carry enterprise-data-protection commitments; web search needs separate attention.
- **Notion:** AI is integrated with workspace and connected-app permissions; Meeting Notes raises recording and retention issues.
- **Perplexity:** Enterprise documents no-training, retention, SSO/audit and nonprofit pricing more clearly than consumer plans.
- **Canva:** current AI terms emphasise input rights and user responsibility; privacy controls determine whether content may help improve AI features.
- **Adobe:** Firefly now exposes multiple partner models in some enterprise contexts, making model selection part of the data-flow assessment.

## Affected public pages

Highest priority:

1. `before-you-paste/index.md`
2. `ai-and-data-protection/index.md`
3. new `ai-and-data-protection/automated-decisions.md`
4. new `everyday-charity-work/ai-in-fundraising.md`
5. `governance/index.md`
6. `tools/index.md`

## High-risk items requiring human review

- exact ADM wording after DUAA;
- lawful basis for meeting recording/transcription;
- special-category data in AI;
- beneficiary-facing or crisis chatbots;
- recruitment and service eligibility decisions;
- donor profiling and soft opt-in interaction;
- international transfers and provider-controller/processor roles.

## Draft monthly changelog

### Added

- Interim guidance on the DUAA automated-decision framework.
- AI fundraising, meeting transcription and agentic AI update specifications.
- Plan-specific reviews of eight commonly used AI products.

### Changed

- Before You Paste model now separates tool approval, data sensitivity, purpose, automation and human review.
- Governance recommendations now reflect the Charity Governance Code 2025.

### Evidence

- ICO, Charity Commission, Fundraising Regulator, NCSC, DSIT and official provider documentation accessed 12 July 2026.

### Known limitations

- Final ICO ADM guidance is expected in winter 2026.
- Product prices and controls must be rechecked before publication and procurement.

---

# Part III — AI Tool Review Pack

## 1. Cross-tool conclusions

1. The tool brand alone does not determine suitability.
2. Consumer accounts should be limited to public, non-confidential Green work unless the charity has explicitly assessed and authorised them.
3. Organisational accounts still require a use-case assessment. “No training” does not remove risks involving retention, permissions, subprocessors, transfers, user error or harmful output.
4. Connectors materially expand risk because the AI may retrieve information the user can technically access but should not use for the task.
5. Admin logs can themselves contain sensitive prompts and outputs, so access and retention must be governed.
6. Feedback buttons can create a separate data use. Staff should not submit sensitive conversations as feedback.

## 2. Comparative plan and control table

| Tool | Consumer/personal position | Organisational position | Key admin controls | Nonprofit position | Main caution |
| --- | --- | --- | --- | --- | --- |
| ChatGPT | Content may be used to improve models depending on settings; opt-out and Temporary Chat available | Business/Enterprise data not used for training by default; Enterprise offers stronger retention/authentication controls | Workspace admin, SSO and fine-grained controls vary by plan | Up to 75% stated for Business/Enterprise | Personal paid account is not Business; apps/actions send data to third parties |
| Claude | Consumer training depends on user choice; retention differs if improvement enabled | Claude for Work not used for training by default; Enterprise adds retention, logs and stronger controls | SSO on Team/Enterprise; SCIM/logs/custom retention stronger on Enterprise | Up to 75% on Team/Enterprise | Deleted chats may remain in back end for a period; safety exceptions apply |
| Google Gemini | Personal Gemini governed by Gemini Apps settings and Privacy Hub | Workspace Gemini receives organisational protections; admin controls activity and availability | Workspace admin, access controls and audit capabilities vary by edition | Workspace for Nonprofits has no-cost/discounted editions | Do not confuse Google AI consumer subscriptions with Workspace protections |
| Microsoft Copilot | Consumer Copilot has different terms and controls | Microsoft 365 Copilot/Copilot Chat use enterprise data protection; prompts/responses not used to train foundation models | Entra, Purview, tenant permissions, web-search policy | Discounted Copilot for eligible nonprofits | Existing overshared SharePoint/OneDrive permissions become AI-discoverable |
| Notion AI | Limited AI on lower plans; workspace data remains central risk | Business/Enterprise AI uses workspace and connector context; no training on customer data by default | Permissions, SSO/SCIM/audit/retention vary by plan | 50% off Plus, while full AI is mainly Business/Enterprise | The nonprofit-discounted plan may not include the needed AI/admin features |
| Perplexity | Consumer data settings differ from Enterprise; research output needs source checks | Enterprise states no training, limited/configurable retention, SSO/SCIM and audit features | SSO, SCIM, audit, file/sharing controls | 50% or listed nonprofit Enterprise price | Citations can still be wrong or incomplete; uploaded files create a separate risk |
| Canva AI | AI use governed by privacy settings and AI Product Terms | Team/Enterprise permissions and AI controls improve governance | AI feature permissions, design sharing and privacy controls | Canva Pro features free for up to 50 users | User needs rights to inputs; synthetic people/stories can mislead donors |
| Adobe Firefly | Account and plan determine credits and admin options | Teams/Enterprise add central admin; partner models can create different data flows | Admin Console and enterprise model governance | Express free and other products discounted for eligible nonprofits | “Commercially safe” is not a guarantee; publicity, privacy and trademark rights remain |

## 3. ChatGPT

### What it does

General-purpose writing, analysis, research, coding, image and workflow assistance, with optional apps and connected organisational data.

### Data and privacy

- [Consumer data controls](https://help.openai.com/en/articles/7730893-data-controls-faq) allow a user to turn off “Improve the model for everyone”.
- [Temporary Chat](https://help.openai.com/en/articles/8914046-temporary-chat-faq) is not used for training and may be retained for up to 30 days for safety.
- [Business data](https://openai.com/enterprise-privacy/) is not used to train models by default.
- The current [Data Processing Addendum](https://openai.com/policies/data-processing-addendum/) should be reviewed for the purchased service.

### Green uses

- public-copy drafting;
- summarising published research with source checks;
- code or formula help using dummy data;
- creating templates and checklists.

### Amber uses

- internal documents only through an approved Business/Enterprise workspace;
- connected apps after permission review;
- analysis of minimised/pseudonymised data with documented approval;
- custom GPTs/agents with controlled knowledge and actions.

### Red uses

- case records or safeguarding disclosures in personal accounts;
- autonomous beneficiary advice;
- significant decisions without safeguards;
- secrets, credentials or sensitive source code;
- assuming Temporary Chat makes an otherwise unlawful disclosure acceptable.

### Nonprofit offer

[OpenAI for Nonprofits](https://help.openai.com/en/articles/9359041-openai-for-nonprofits) states that discounts are available for ChatGPT Business and Enterprise. Verify current UK eligibility and price at purchase.

### Recommendation

Create the guide, but describe ChatGPT Business as a potentially suitable managed workspace, not a blanket approval for personal data.

## 4. Claude

### What it does

General writing, document analysis, research and coding, with projects, connectors and coding/agent capabilities.

### Data and privacy

- Anthropic says [commercial inputs and outputs are not used for training by default](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).
- For Claude for Work, Anthropic describes the customer as controller and Anthropic as processor in its [controller/processor explanation](https://privacy.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller).
- [Commercial retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data) differs by product; saved chats remain until deletion, with back-end deletion and safety exceptions.
- Enterprise provides [custom retention](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans) and [audit logs](https://support.claude.com/en/articles/9970975-access-audit-logs).
- SSO is documented for Team and Enterprise, while SCIM and stronger controls vary.

### Green uses

- public writing and editing;
- analysis of public reports;
- coding against non-sensitive repositories;
- policy outline creation without confidential inputs.

### Amber uses

- internal documents in Claude for Work under an assessed contract;
- connectors and Claude Code after repository/permission controls;
- Enterprise use where retention is configured.

### Red uses

- consumer accounts for beneficiary or HR personal data;
- feedback submission on sensitive conversations;
- broad agent permissions to local files or systems;
- assuming deletion is immediate in every back-end system.

### Nonprofit offer

[Claude for Nonprofits](https://www.anthropic.com/news/claude-for-nonprofits) states discounts of up to 75% on Team and Enterprise.

## 5. Google Gemini

### What it does

General AI assistant with deep integration into Google Workspace applications and services.

### Data and privacy

- Personal use is governed by the [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961).
- Work/school behaviour depends on the Workspace edition; Google's [work-account guide](https://support.google.com/gemini/answer/14620100) distinguishes protected Workspace use from consumer-style use.
- Workspace customer data is covered by the applicable Workspace agreement and DPA.
- Admins may control access, activity and retention; users may not control these individually.

### Green uses

- drafting from public information;
- summarising non-sensitive Workspace material in an approved tenant;
- producing internal templates with no personal data.

### Amber uses

- Gmail/Drive/Meet integration after access and retention review;
- meeting transcription and summaries;
- sensitive internal documents only where the Workspace edition and policy permit.

### Red uses

- work data through a personal Gemini/Google AI subscription;
- broad Drive access without a permission audit;
- beneficiary decisions based on Gemini output;
- uploading case or safeguarding records to an unapproved account.

### Nonprofit offer

[Google Workspace for Nonprofits](https://support.google.com/nonprofits/answer/15503706) offers eligible organisations a no-cost edition and discounted paid editions. Confirm which Gemini features and controls are included in the chosen edition.

## 6. Microsoft Copilot

### What it does

AI chat and assistance across Microsoft 365, Teams, Word, Excel, PowerPoint, Outlook, SharePoint and agents.

### Data and privacy

- Microsoft says [prompts, responses and Microsoft Graph data are not used to train foundation LLMs](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy).
- [Copilot Chat protections](https://learn.microsoft.com/en-us/copilot/privacy-and-protections) include enterprise data protection.
- Prompts and responses can be logged and available for audit/eDiscovery depending on the subscription.
- [Web search](https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access) creates separate considerations; generated web queries can follow different controller/DPA arrangements.

### Green uses

- summarising approved internal documents the user already needs for their role;
- drafting ordinary documents;
- meeting/action summaries in an approved tenant and process.

### Amber uses

- agents grounded in SharePoint or connected data;
- analysis of HR, donor or beneficiary information;
- Copilot in Teams meetings;
- web grounding for confidential topics.

### Red uses

- using Copilot as a substitute for fixing overshared Microsoft 365 permissions;
- autonomous sending, deletion or external publication without approval;
- significant employment/service decisions without safeguards.

### Nonprofit offer

Microsoft's [AI for nonprofits](https://www.microsoft.com/en-us/nonprofits/empower-your-nonprofit-with-ai) page lists discounted Microsoft 365 Copilot pricing for eligible organisations. Pricing and qualifying base licences must be rechecked.

## 7. Notion AI

### What it does

AI writing, enterprise search, research, meeting notes and agents embedded in a workspace and connected apps.

### Data and privacy

- Notion states that [customer data is not used to train Notion or AI-subprocessor models by default](https://www.notion.com/help/notion-ai-security-practices).
- Existing workspace permissions are central to what Notion AI can retrieve.
- [Security practices](https://www.notion.com/help/security-and-privacy) describe audit, SCIM and other controls that vary by plan.
- [AI Meeting Notes](https://www.notion.com/help/ai-meeting-notes) records and transcribes audio; the product instructs users to confirm participants have agreed, but the charity must still determine its own lawful and fair process.

### Green uses

- drafting from public or non-sensitive workspace pages;
- knowledge-base search where permissions are already sound;
- project summaries without personal information.

### Amber uses

- meeting transcription;
- connected Google Drive/Slack search;
- agents that edit pages or databases;
- confidential strategy and governance material.

### Red uses

- using AI to expose pages that were accidentally over-shared;
- safeguarding/case information without specific approval;
- silently recording participants;
- autonomous edits to critical registers without review.

### Nonprofit offer

[Notion for Nonprofits](https://www.notion.com/nonprofits) offers 50% off Plus. Notion AI is mainly available on Business and Enterprise, so charities must not assume the discounted Plus plan provides the organisational AI controls they need.

## 8. Perplexity

### What it does

Web research and answer generation with cited sources, file uploads and enterprise knowledge features.

### Data and privacy

- Perplexity's [data collection guide](https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity.html) distinguishes Enterprise protections.
- Enterprise documentation describes no training on enterprise query data and limited/configurable uploaded-file retention.
- [Enterprise Pro](https://www.perplexity.ai/help-center/en/articles/10352973-what-is-enterprise-pro.html) includes SSO and private knowledge features.
- [Audit logs](https://www.perplexity.ai/help-center/en/articles/11652747-audit-logs.html) can capture user queries, agent steps and answers, which means the log is itself sensitive.
- The [Sonar API](https://docs.perplexity.ai/docs/resources/privacy-security) states zero data retention; API deployment still needs a contract and security assessment.

### Green uses

- discovering current public sources;
- producing search maps and reading lists;
- comparing public guidance, followed by opening each source.

### Amber uses

- uploading internal documents only in approved Enterprise use;
- policy research where citations influence public guidance;
- enterprise knowledge connectors;
- research on sensitive organisational topics.

### Red uses

- treating generated citations as verified evidence;
- uploading personal data to consumer plans;
- copying long copyrighted passages;
- publishing unverified legal/safeguarding conclusions.

### Nonprofit offer

[Perplexity Enterprise onboarding](https://www.perplexity.ai/help-center/en/articles/12742827-perplexity-enterprise-onboarding-guide.html) describes a nonprofit discount. Recheck UK price and eligibility.

## 9. Canva AI

### What it does

Text, image, video, presentation and design generation through Canva AI and Magic features.

### Data and privacy

- The [AI Product Terms](https://www.canva.com/policies/ai-product-terms/) make the user responsible for having rights, licences and permissions for inputs and using outputs appropriately.
- [Privacy settings](https://www.canva.com/help/manage-privacy-settings/) can control whether content/usage helps improve AI-powered features.
- Team administrators can [control access to Magic and AI features](https://www.canva.com/help/magic-features-admin-controls/).
- Sharing permissions remain a separate source of risk.

### Green uses

- public campaign concepting;
- generic backgrounds and illustrative assets;
- accessible social templates with human editing;
- resizing and adapting approved public content.

### Amber uses

- synthetic people in fundraising or service communications;
- uploading brand, partner or licensed assets;
- depictions of sensitive experiences;
- AI voice, video or translation intended for public use.

### Red uses

- creating a fictional beneficiary story and presenting it as real;
- uploading identifiable case images without rights and approval;
- impersonating a real person;
- relying on AI output for medical, crisis or safeguarding messaging.

### Nonprofit offer

[Canva for Nonprofits](https://www.canva.com/nonprofits/) provides eligible organisations free access to Canva Pro features and collaboration for a stated number of users. Recheck account limits and Enterprise add-on terms.

## 10. Adobe Firefly

### What it does

Generates and edits images, vectors, video, audio and designs, both directly and through Creative Cloud/Adobe Express.

### Data, provenance and rights

- Adobe's [Firefly FAQ](https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/adobe-firefly-faq.html) explains features and Content Credentials.
- Some exports receive Content Credentials indicating AI use.
- [Partner models in Firefly Enterprise](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/partner-models-in-firefly-creative-production-for-enterprise.html) may receive the prompt and required input files; Adobe says covered partners are contractually restricted from training on that content.
- Partner-model indemnification is limited and does not eliminate privacy, publicity, trademark or input-rights risks.

### Green uses

- generic illustrations and textures;
- background extension/removal on assets the charity owns;
- concept development and layout exploration;
- non-personal campaign assets reviewed by a designer.

### Amber uses

- synthetic people or emotionally sensitive scenes;
- editing images of real beneficiaries;
- using third-party/partner models;
- commercial campaign assets where rights matter.

### Red uses

- false documentary imagery presented as an actual event;
- removing or changing evidence in a safeguarding/incident image;
- uploading material without rights;
- deepfake audio/video of a real person.

### Nonprofit offer

[Adobe for Nonprofits](https://www.adobe.com/nonprofits.html) lists Adobe Express at no charge and discounts on other products for eligible organisations. Verify the exact Firefly features and admin model included.

## 11. Human review checklist for every tool guide

- Is the source material permitted and necessary?
- Has personal/confidential information been minimised?
- Is the account approved and correctly configured?
- Are connectors and actions limited to the task?
- Has every factual claim been verified against a primary source?
- Has bias, tone, accessibility and potential harm been checked?
- Is the output misleading about whether a person, quotation, story or image is real?
- Is a competent person accountable for the final decision?
- Is the use and review recorded where the risk warrants it?

---

# Part IV — GitHub Synthesis and Implementation Pack

## 1. What is safe to publish now

### Supported wording 1

> Trustees remain responsible for decisions made by their charity. AI can support research and drafting, but it should not be the sole basis for a material decision.

- **Support:** Charity Commission AI guidance.
- **Confidence:** High.
- **Pages:** governance, Before You Paste.

### Supported wording 2

> If an AI use is likely to create a high risk to people's rights and freedoms, complete a DPIA before the processing begins.

- **Support:** ICO DPIA guidance.
- **Confidence:** High.
- **Pages:** data protection, DPIA triage.

### Supported wording 3

> Do not assume that a paid personal AI account has the same contractual, privacy or administrative controls as a business or enterprise workspace.

- **Support:** official provider plan/privacy documentation.
- **Confidence:** High.
- **Pages:** tools, Before You Paste.

### Supported wording 4

> Use a human reviewer who has the authority, information and competence to challenge and change the AI-assisted result.

- **Support:** ICO/Charity Commission/Fundraising Regulator principles.
- **Confidence:** High.
- **Pages:** all operational guidance.

### Supported wording 5

> Treat AI systems connected to internal files, email, CRM or publishing tools as higher risk than a standalone drafting tool.

- **Support:** NCSC agentic/prompt-injection guidance and provider connector documentation.
- **Confidence:** High.
- **Pages:** agents and connectors.

## 2. What needs specialist review

### GDPR/data protection

- lawful bases and Article 9/10 conditions;
- new DUAA ADM wording and safeguards;
- controller/processor relationships;
- international transfers;
- DPIA conclusions;
- privacy-notice wording;
- meeting recording/transcription.

### Safeguarding

- beneficiary-facing chatbots;
- crisis or emotional-support systems;
- moderation involving children or adults at risk;
- synthetic depictions of abuse, disability, illness or trauma;
- escalation and human-response routes.

### Employment/HR

- recruitment ranking, scoring or filtering;
- performance monitoring;
- disciplinary and redundancy decisions;
- employee meeting transcription and monitoring.

### Procurement/contracts

- DPA, subprocessor and transfer terms;
- security schedules and audit evidence;
- retention/deletion and breach notice;
- output ownership and indemnity;
- service changes and termination/export.

## 3. Page specifications

### `docs/before-you-paste/index.md`

- **Status:** update existing.
- **Key messages:** five-step pause, account approval, data categories, automation level and meaningful review.
- **Avoid:** “Never use personal data with AI” as the only rule; “approved tools are safe”.
- **Frontmatter:** review date, evidence level, risk level Amber, source IDs.

### `docs/ai-and-data-protection/automated-decisions.md`

- **Status:** create.
- **Risk:** Red.
- **Evidence confidence:** Medium until final ICO guidance.
- **Key messages:** DUAA changed framework; legal/significant decisions need safeguards; special-category data remains more restricted; human involvement must be meaningful; provide information, intervention and challenge.
- **Banner:** “Interim guidance — scheduled for review when the ICO publishes final guidance, expected winter 2026.”

### `docs/everyday-charity-work/ai-in-fundraising.md`

- **Status:** create.
- **Risk:** Amber.
- **Key messages:** board oversight, risk assessment, AI policy, testing, transparency, human checking, records, data protection, donor vulnerability and content authenticity.

### `docs/everyday-charity-work/meetings-and-transcription.md`

- **Status:** create.
- **Risk:** Amber/Red depending on meeting.
- **Key messages:** do not record by default; explain purpose; choose lawful basis; provide notice; consider power imbalance; restrict access; define retention; avoid sensitive meetings unless specifically approved.

### `docs/governance/tool-approval.md`

- **Status:** create.
- **Risk:** Amber.
- **Key messages:** approve use case and plan, not only brand; contract, DPA, retention, transfers, access, connectors, logs, deletion, incidents, exit.

### `docs/governance/agents-and-connectors.md`

- **Status:** create.
- **Risk:** Red.
- **Key messages:** least privilege, read-only pilot, allowlists, approval for external actions, secrets management, logging, test/monitor, kill switch.

## 4. Related guidance blocks

Use consistent blocks:

### See also

- Before You Paste
- Choosing an AI account plan
- AI tool approval checklist

### Before you continue

- Stop if the information includes safeguarding details, special-category data or credentials.
- Check whether the account is organisationally approved.

### When to ask for help

- the output affects someone's access to work, money, housing, support or another important outcome;
- the data concerns children or adults at risk;
- the lawful basis or contract is unclear;
- the tool can act in another system.

## 5. Template opportunities

Create:

1. `docs/assets/templates/ai-policy-starter.md`
2. `docs/assets/templates/before-you-paste-checklist.md`
3. `docs/assets/templates/ai-use-register.csv`
4. `docs/assets/templates/tool-assessment.md`
5. `docs/assets/templates/dpia-triage.md`
6. `docs/assets/templates/trustee-ai-briefing.md`
7. `docs/assets/templates/human-review-record.md`
8. `docs/assets/templates/ai-incident-form.md`
9. `docs/assets/templates/meeting-transcription-check.md`
10. `docs/assets/templates/agent-permission-review.md`

### Minimum AI-use register fields

| Field | Purpose |
| --- | --- |
| Use ID | Stable reference |
| Tool and plan | Distinguish brand/account controls |
| Owner | Accountability |
| Purpose | Prevent function creep |
| People affected | Identify risk and consultation needs |
| Data categories | Screen personal/special-category data |
| Lawful basis/condition | Record where applicable |
| Connectors/actions | Show expanded access |
| Human review | Identify reviewer and authority |
| Risk rating | Green/Amber/Red |
| DPIA/EQIA status | Evidence governance |
| Approval and review date | Lifecycle control |
| Incident/complaint link | Learning and redress |

## 6. Glossary additions

| Term | Plain-English definition |
| --- | --- |
| Agentic AI | AI that can plan steps and act through tools or connected systems, not only produce an answer |
| Automated decision | A decision produced by automated processing; legal rules become especially important where there is no meaningful human involvement and the effect is significant |
| Connector | A link that lets an AI retrieve information from or act in another service |
| Controller | The organisation that decides why and how personal data is processed |
| Data minimisation | Using only the personal data genuinely needed for the purpose |
| DPIA | A structured assessment required before processing likely to create high risk to people |
| Human oversight | Competent human involvement that can identify problems and change the result |
| Prompt injection | Instructions hidden in content that try to make an AI system reveal information or act unexpectedly |
| Pseudonymisation | Replacing identifiers while keeping separate information that could reconnect the data to a person; it can remain personal data |
| Synthetic media | AI-generated or altered image, audio or video |

## 7. FAQ additions

### Can I paste personal data into an approved business AI account?

Not automatically. Approval of the tool is only one condition. The specific use must also be necessary, lawful, minimised, transparent, secure and within the charity's policy and contract.

### Is a paid personal account safe for charity work?

Payment alone does not create business terms, a DPA or admin controls. Use the charity's approved organisational account.

### Does anonymising a name make the information anonymous?

Not necessarily. A unique story or combination of details may still identify someone, and pseudonymised data can remain personal data.

### Can AI take meeting notes?

Sometimes, but recording/transcription changes the data-processing risk. Give appropriate notice, determine the lawful and fair basis, restrict access and retention, and avoid sensitive meetings unless specifically approved.

### Can trustees use AI to make decisions?

AI can assist, but trustees remain responsible and should not rely on AI output alone for material decisions.

### Are AI citations reliable?

No citation should be trusted without opening the source and confirming that it supports the exact claim.

## 8. Accessibility notes

- Never communicate Green/Amber/Red through colour alone; include the words and icons/text labels.
- Give every checklist a plain-text version.
- Avoid wide comparison tables on key public pages; provide stacked summaries for mobile.
- Put a short “What to do now” summary before legal detail.
- Use warning/admonition blocks sparingly and consistently.
- Explain legal terms in place and link to the glossary.
- Add alt text that states when an image is illustrative or AI-generated if this is relevant to trust.
- Avoid synthetic imagery that reinforces stereotypes or implies a real beneficiary story.

## 9. Release note draft

### AI Safe Charity Index — July 2026 research update

This update adds a current UK legal and regulator review, introduces plan-specific guidance for eight common AI tools, and proposes new pages for automated decisions, AI fundraising, meeting transcription and agentic AI. It also updates the Before You Paste model so staff consider the tool account, data, purpose, automation and human review together.

The automated-decision page remains interim pending final ICO guidance expected in winter 2026.

## 10. Codex implementation instructions

```text
Use the local AI-Safe-Charity-Index repository.

Research input:
- monthly-update-packs/2026-07/AI_SAFE_CHARITY_INDEX_COMPLETE_RESEARCH_PACK_2026-07.md

Before editing:
1. Read the full research pack.
2. Read the root specification files listed in 61_RESEARCH_PACK_AND_KNOWLEDGE_UPDATE_SYSTEM.md.
3. Inspect existing docs and mkdocs.yml.
4. Preserve established frontmatter, style, warning and source conventions.

High-priority implementation:
1. Update docs/before-you-paste/index.md with the five-step decision and plan distinction.
2. Update docs/ai-and-data-protection/index.md for DUAA 2025.
3. Create docs/ai-and-data-protection/automated-decisions.md with an interim-review banner.
4. Create docs/everyday-charity-work/ai-in-fundraising.md.
5. Create docs/everyday-charity-work/meetings-and-transcription.md.
6. Update docs/governance/index.md and create tool-approval and agents-and-connectors pages.
7. Update docs/tools/index.md and create eight draft tool guides.
8. Add glossary, FAQ, template, source-register, claim-register and changelog entries.
9. Update mkdocs.yml only where navigation rules permit.

Human review flags:
- DUAA/ADM wording: data-protection or legal reviewer.
- Special-category and safeguarding examples: safeguarding and DPO review.
- Recruitment/HR: employment and data-protection review.
- Fundraising: fundraising lead and DPO review.
- Meeting transcription: DPO and HR/safeguarding as applicable.

Validation:
- python3 -m mkdocs build --strict
- run any repository link, metadata, spelling and accessibility checks
- confirm every source URL resolves
- confirm no unsupported provider safety claim is presented as an independent fact

Do not publish research-pack wording automatically. Convert it into plain-English, scoped guidance and retain uncertainty.
```

---

# Part V — Source Register Candidates

Accessed dates are 2026-07-12 unless stated otherwise.

| source_id | Title | Organisation | URL | Date/updated | Jurisdiction | Tier | Affected pages |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ICO-AI-001 | Guidance on AI and data protection | ICO | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/ | Updated 2023-03-15 | UK | 1 | data protection, governance |
| ICO-DPIA-001 | When do we need to do a DPIA? | ICO | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/ | Current | UK | 1 | DPIA triage |
| ICO-SPECIAL-001 | Special category data | ICO | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/special-category-data/ | Current | UK | 1 | data protection, Before You Paste |
| ICO-DUAA-001 | What the DUAA means for organisations | ICO | https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/ | Current | UK | 1 | data protection, updates |
| ICO-ADM-PLAN-001 | Technology guidance plan | ICO | https://ico.org.uk/about-the-ico/what-we-do/our-plans-for-new-and-updated-guidance/technology/ | Current | UK | 1 | ADM |
| ICO-STRATEGY-001 | AI and biometrics strategy update — March 2026 | ICO | https://ico.org.uk/about-the-ico/our-information/our-strategies-and-plans/artificial-intelligence-and-biometrics-strategy/ai-and-biometrics-strategy-update-march-2026/ | 2026-03 | UK | 1 | governance, ADM |
| LEG-DUAA-001 | Data (Use and Access) Act 2025 | UK Parliament | https://www.legislation.gov.uk/ukpga/2025/18/contents | 2025; current to Jul 2026 | UK | 1 | data protection |
| GOV-DUAA-COMMENCE-001 | DUAA plans for commencement | DSIT | https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement | Updated 2026-02-05 | UK | 1 | updates |
| CC-AI-001 | Charities and Artificial Intelligence | Charity Commission | https://charitycommission.blog.gov.uk/2024/04/02/charities-and-artificial-intelligence/ | 2024-04-02 | England/Wales | 1 | governance |
| CC-SAFE-001 | Safeguarding and protecting people for charities and trustees | Charity Commission | https://www.gov.uk/guidance/safeguarding-and-protecting-people-for-charities-and-trustees | Current | England/Wales | 1 | safeguarding |
| FR-AI-001 | Guidance for using AI in fundraising | Fundraising Regulator | https://www.fundraisingregulator.org.uk/about-fundraising/resources/guidance-using-artificial-intelligence-fundraising | 2025-12-08 | UK sector | 1 | fundraising |
| FR-DATA-001 | Data privacy and fundraising | Fundraising Regulator | https://www.fundraisingregulator.org.uk/about-fundraising/resources/data-privacy-and-fundraising | 2026-05/06 | UK sector | 1 | fundraising |
| FR-SOFT-001 | Charitable purposes soft opt-in and fundraising marketing | Fundraising Regulator | https://www.fundraisingregulator.org.uk/about-fundraising/resources/charitable-purposes-soft-opt-and-fundraising-marketing | 2026-06-24 | UK sector | 1 | fundraising |
| NCSC-AI-001 | AI and cyber security: what you need to know | NCSC | https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know | 2024-02-13 | UK | 2 | security |
| NCSC-AGENT-001 | Thinking carefully before adopting agentic AI | NCSC | https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai | 2026-05-15 | UK | 2 | agents/connectors |
| DSIT-AI-CYBER-001 | Code of Practice for the Cyber Security of AI | DSIT | https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai | 2025-01-31 | UK | 2 | security, procurement |
| GOV-AI-PLAY-001 | AI Playbook for the UK Government | GDS | https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html | 2025-02-10 | UK public sector | 2 | governance, learning |
| GOV-AI-ETHICS-001 | Data and AI Ethics Framework | UK Government | https://www.gov.uk/government/publications/data-ethics-framework/data-and-ai-ethics-framework | Updated 2025-12-18 | UK public sector | 2 | governance, procurement |
| GOV-CODE-001 | Charity Governance Code 2025 | Good Governance Steering Group | https://www.charitygovernancecode.org/wp-content/uploads/2025/10/CCG_English_FINAL_highres.pdf | 2025 | UK sector | 4 | trustee guidance |
| NCVO-AI-001 | How AI can help small charities | NCVO | https://www.ncvo.org.uk/help-and-guidance/digital-technology/technology-tools-and-software/how-ai-can-help-small-charities/ | 2025-01-29 | UK sector | 4 | everyday work |
| CDCODE-2025-001 | Charity Digital Code of Practice 2025 | Charity Digital | https://charitydigital.org.uk/topics/the-charity-digital-code-of-practice-2025-12116 | 2025-06-09 | UK sector | 4 | governance |
| OAI-ENT-001 | Enterprise privacy at OpenAI | OpenAI | https://openai.com/enterprise-privacy/ | Updated 2026 | International/provider | 3 | ChatGPT |
| OAI-CONS-001 | Data Controls FAQ | OpenAI | https://help.openai.com/en/articles/7730893-data-controls-faq | Current | International/provider | 3 | ChatGPT |
| OAI-TEMP-001 | Temporary Chat FAQ | OpenAI | https://help.openai.com/en/articles/8914046-temporary-chat-faq | Current | International/provider | 3 | ChatGPT |
| OAI-NP-001 | OpenAI for Nonprofits | OpenAI | https://help.openai.com/en/articles/9359041-openai-for-nonprofits | Current | International/provider | 3 | ChatGPT |
| ANT-TRAIN-001 | Is commercial data used for model training? | Anthropic | https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training | 2026-03-16 | International/provider | 3 | Claude |
| ANT-RET-001 | How long do you store my organisation's data? | Anthropic | https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data | 2026-07-01 | International/provider | 3 | Claude |
| ANT-ADMIN-001 | Team and Enterprise plan documentation | Anthropic | https://support.claude.com/en/collections/9387370-team-and-enterprise-plans | Current | International/provider | 3 | Claude |
| ANT-NP-001 | Claude for Nonprofits | Anthropic | https://www.anthropic.com/news/claude-for-nonprofits | 2025-12-02 | International/provider | 3 | Claude |
| GOOG-PRIV-001 | Gemini Apps Privacy Hub | Google | https://support.google.com/gemini/answer/13594961 | Updated 2026-06-29 | International/provider | 3 | Gemini |
| GOOG-WORK-001 | Use Gemini Apps with a work or school account | Google | https://support.google.com/gemini/answer/14620100 | Current | International/provider | 3 | Gemini |
| GOOG-NP-001 | Workspace features for nonprofits | Google | https://support.google.com/nonprofits/answer/15503706 | Current | International/provider | 3 | Gemini |
| MS-COP-PRIV-001 | Data, Privacy, and Security for Microsoft 365 Copilot | Microsoft | https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy | Updated 2026 | International/provider | 3 | Copilot |
| MS-COP-WEB-001 | Data, privacy and security for web search in Microsoft 365 Copilot | Microsoft | https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access | Updated 2026 | International/provider | 3 | Copilot |
| MS-NP-001 | AI for nonprofits | Microsoft | https://www.microsoft.com/en-us/nonprofits/empower-your-nonprofit-with-ai | Current | International/provider | 3 | Copilot |
| NOTION-AI-001 | Notion AI security and privacy practices | Notion | https://www.notion.com/help/notion-ai-security-practices | Current | International/provider | 3 | Notion AI |
| NOTION-MEET-001 | AI Meeting Notes | Notion | https://www.notion.com/help/ai-meeting-notes | Current/beta | International/provider | 3 | meetings, Notion AI |
| NOTION-NP-001 | Notion for nonprofits | Notion | https://www.notion.com/nonprofits | Current | International/provider | 3 | Notion AI |
| PERP-DATA-001 | Data Collection at Perplexity | Perplexity | https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity.html | 2026-05-01 | International/provider | 3 | Perplexity |
| PERP-AUDIT-001 | Audit Logs | Perplexity | https://www.perplexity.ai/help-center/en/articles/11652747-audit-logs.html | 2026-05-01 | International/provider | 3 | Perplexity |
| PERP-NP-001 | Enterprise onboarding guide | Perplexity | https://www.perplexity.ai/help-center/en/articles/12742827-perplexity-enterprise-onboarding-guide.html | 2026-05-01 | International/provider | 3 | Perplexity |
| CANVA-AI-001 | AI Product Terms | Canva | https://www.canva.com/policies/ai-product-terms/ | Current | International/provider | 3 | Canva AI |
| CANVA-PRIV-001 | Manage privacy settings | Canva | https://www.canva.com/help/manage-privacy-settings/ | Current | International/provider | 3 | Canva AI |
| CANVA-NP-001 | Canva for Nonprofits | Canva | https://www.canva.com/nonprofits/ | Current | International/provider | 3 | Canva AI |
| ADB-FIRE-001 | Adobe Firefly FAQ | Adobe | https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/adobe-firefly-faq.html | Updated 2026-05-13 | International/provider | 3 | Firefly |
| ADB-PARTNER-001 | Partner models in Firefly Enterprise | Adobe | https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/partner-models-in-firefly-creative-production-for-enterprise.html | 2026 | International/provider | 3 | Firefly |
| ADB-NP-001 | Adobe for Nonprofits | Adobe | https://www.adobe.com/nonprofits.html | Current | International/provider | 3 | Firefly/Adobe Express |

---

# Part VI — Claim Register Candidates

| claim_id | Claim | Source | Confidence | Risk | Page | Review needed |
| --- | --- | --- | --- | --- | --- | --- |
| CLM-001 | Trustees remain responsible for material decisions and should not rely solely on AI output | CC-AI-001 | High | Amber | governance | Charity governance editor |
| CLM-002 | A DPIA is required before processing likely to result in high risk | ICO-DPIA-001 | High | Red | DPIA triage | DPO |
| CLM-003 | Special-category data needs an Article 6 basis and Article 9 condition | ICO-SPECIAL-001 | High | Red | data protection | DPO/legal |
| CLM-004 | Major DUAA data-protection provisions commenced on 5 Feb 2026 | GOV-DUAA-COMMENCE-001 | High | Amber | updates | Legal/data protection |
| CLM-005 | Final ICO ADM guidance is expected in winter 2026 | ICO-ADM-PLAN-001 | High | Amber | ADM | Review on publication |
| CLM-006 | Fundraisers should assess risk before using AI and maintain trustee oversight | FR-AI-001 | High | Amber | fundraising | Fundraising lead |
| CLM-007 | Prompt injection can lead to disclosure or unintended action | NCSC-AI-001 | High | Red | agents/connectors | Security lead |
| CLM-008 | ChatGPT Business/Enterprise content is not used for training by default | OAI-ENT-001 | High as provider claim | Amber | ChatGPT | Recheck quarterly |
| CLM-009 | Claude for Work data is not used for training by default | ANT-TRAIN-001 | High as provider claim | Amber | Claude | Recheck quarterly |
| CLM-010 | Microsoft 365 Copilot prompts/responses/Graph data are not used to train foundation LLMs | MS-COP-PRIV-001 | High as provider claim | Amber | Copilot | Recheck quarterly |
| CLM-011 | Notion and AI subprocessors do not use customer data to train models by default | NOTION-AI-001 | High as provider claim | Amber | Notion AI | Recheck quarterly |
| CLM-012 | Perplexity Enterprise query data is not used for AI training | PERP-DATA-001 | High as provider claim | Amber | Perplexity | Recheck quarterly |
| CLM-013 | Canva users must have necessary rights and permissions for AI inputs | CANVA-AI-001 | High | Amber | Canva AI | Editorial/legal |
| CLM-014 | Firefly Enterprise may send prompt/input data required by a selected partner model | ADB-PARTNER-001 | High as provider claim | Amber | Firefly | Recheck by model |
| CLM-015 | A personal paid subscription is not equivalent to an organisational plan | Multiple provider sources | High | Amber | tools index | None after editorial check |
| CLM-016 | Pseudonymised information can remain personal data | ICO guidance; add anonymisation source | High | Amber | Before You Paste | Add exact source before publication |

---

# Part VII — Publication Gate

## Safe to move into editorial drafting

- trustee accountability;
- five-step Before You Paste model;
- plan/account distinction;
- high-level DPIA and minimisation rules;
- source verification;
- risk assessment and human review;
- agent/connector least privilege;
- plan-specific provider claims with attribution and review dates.

## Must remain draft pending named review

- automated-decision legal explanation;
- detailed lawful-basis examples;
- special-category and criminal-offence examples;
- meeting recording/transcription rules;
- beneficiary and crisis chatbot guidance;
- recruitment screening;
- donor profiling and soft-opt-in scenarios;
- international-transfer conclusions;
- “suitable for personal data” conclusions about any tool.

## Final principle

The most useful public promise is:

> Use AI to save time without risking people's data, trust or safety.

The site should deliver that promise through short decisions, concrete examples, reusable controls and honest uncertainty—not through fear, blanket bans or vendor endorsements.

