# AI Safe Charity Index
## Page-level deep research and content-population pack

**Research cut-off:** 12 July 2026  
**Primary jurisdiction:** England and Wales, with UK-wide data-protection and cyber guidance where applicable  
**Input audited:** `PUBLIC_SITE_CONTENT_EXPORT_2026-07-12.md` (35 public pages)  
**Purpose:** give an editor or coding agent enough verified, current material to expand every existing page, create the missing high-value pages, and keep volatile claims under review.

> This is an editorial research pack, not legal advice. It distinguishes sourced fact, practical recommendation, and unresolved judgement. High-risk content is marked for specialist review before publication.

---

# 1. Outcome of the audit

The current site has a sound organising idea and a useful core check, but it is not yet a complete charity AI-safety resource. Its strongest page is **Before You Paste**. Most other pages are short orientation notes; seven are placeholders or near-placeholders. The export does not yet cover several situations where a charity is most likely to cause serious harm: beneficiary-facing AI, safeguarding, recruitment, volunteer management, fraud and payments, research and evaluation, equality impacts, copyright, individual data rights, supplier contracts, or AI-assisted public communications.

The biggest editorial change should be this:

> Do not approve “ChatGPT”, “Gemini”, “Copilot” or any other brand in the abstract. Approve a named product, account type, plan, feature set and configuration for defined data and purposes, with an owner and review date.

This follows directly from current provider documentation. Personal and organisational accounts can have different model-training terms. Connectors and agents can extend access to email, files and third-party systems. Some products now expose multiple model providers under one interface. Retention, audit and access controls vary by plan. A provider can also change defaults or roll out features after approval.

## 1.1 Page status at a glance

| Site area | Existing state | Editorial action | Priority |
|---|---|---|---|
| Home / Start Here | Clear but thin | Add audience routes, scope, limitations and urgent incident route | High |
| Before You Paste | Strong foundation | Tighten Amber/Red logic; add lawful-use and approved-feature checks | High |
| AI and Data Protection | Useful summary | Expand into a lifecycle: purpose, roles, lawful basis, transparency, rights, retention, security, suppliers | Critical |
| DPIA Triage | Good checklist | Add screening record, consultation, residual-risk decision and ICO consultation point | Critical |
| Automated Decisions | Correct direction | Update for DUAA changes; separate Article 22 scope from wider fairness and rights | Critical |
| Everyday Charity Work | Placeholder | Turn into a task-based hub with at least nine child guides | Critical |
| Fundraising | Useful start | Add vulnerability, soft opt-in boundaries, third-party fundraisers, profiling and synthetic media | High |
| Meetings / Transcription | Sensible but unsourced | Add lawful basis, notice, objection route, recording controls, retention and safeguarding exceptions | Critical |
| Governance hub | Useful minimum set | Add risk ownership, policy, training, reporting, trustee assurance and change control | High |
| Tool Approval | Useful checklist | Add contract, controller/processor, international transfer, deletion, DSAR, model/feature and exit checks | Critical |
| Agents / Connectors | Good warning | Add permission mapping, prompt injection, test environment, transaction limits and kill switch | Critical |
| Incidents | Too short and unsourced | Build a triage route covering containment, evidence, 72-hour assessment and serious-incident reporting | Critical |
| Tools hub | Useful concept | Publish dated plan-and-feature reviews, not generic product traffic lights | High |
| Account Plans | Important but thin | Add an approval matrix and a “claims that do not prove safety” section | Critical |
| Eight tool pages | Basic traffic lights only | Add plan matrix, feature risks, admin controls, retention, sources and expiry date | High |
| Templates | Placeholder | Publish operational templates listed in section 12 | Critical |
| Learning Paths | Placeholder | Add role-based routes for all staff, managers, trustees, DPO/IG, safeguarding, fundraising/comms and IT | High |
| Research / Community | Direction only | Add evidence policy, correction process, contributor rules and research queue | Medium |
| Updates / Changelog | Functional | Add claim expiry, source-change alerts and material-change format | Medium |
| Roadmap | Basic | Reprioritise around missing risk domains and publication gates | Medium |
| FAQ / Glossary | Useful but small | Add operational questions and missing legal/technical terms | Medium |
| Accessibility | Near-placeholder | Add content, testing, AI-output and alternative-format commitments | High |
| Privacy | Placeholder | Do not invent; populate only from the site's real data inventory | Critical |

## 1.2 Immediate corrections and qualifications

1. **DUAA commencement.** Avoid a loose claim that every provision of the Data (Use and Access) Act 2025 took effect at once. Use: “The main DUAA data-protection and PECR changes relevant to most charities are now in force, but commencement was staged and current ICO guidance should be checked for the provision in question.”

2. **Amber is not automatic permission.** The current site sometimes suggests that a manager check is enough for personal data. Replace this with: “Amber data may be used only for an authorised purpose in an approved plan and feature, where the charity has confirmed its lawful basis, necessity, safeguards and review.” A manager cannot waive data-protection or safeguarding duties.

3. **Consent for transcription is context-specific.** Do not say consent is always legally required. A charity must identify a lawful basis and, where applicable, an Article 9 condition. It should still give clear advance notice, offer a workable alternative where appropriate, and respect power imbalance and safeguarding context.

4. **Human review must be real.** “A person looked at it” is not enough. The reviewer must have authority, competence, time, relevant source information and freedom to change the outcome.

5. **Pseudonymised is not anonymous.** Removing names rarely takes information outside UK GDPR if a person can still be identified from context or a separately held key.

6. **No blanket UK AI-labelling rule.** As of the research cut-off, there is no general UK obligation to label all AI-generated content. Fundraising, advertising, consumer-protection, intellectual-property and sector rules still require content not to mislead. Proportionate disclosure is good practice, especially where a synthetic person, testimony or event could be mistaken for real.

7. **Commercially safe is not risk-free.** Provider language about commercially safe outputs or indemnity does not settle trade-mark, privacy, publicity, data-protection, defamation, accuracy or ethical questions, and may apply only to specified plans or models.

8. **A paid personal plan is not an organisational control.** Payment alone does not establish an appropriate contract, administrator control, offboarding, auditability, retention or processor terms.

9. **Incident does not always mean reportable breach.** Every suspected disclosure should be contained and assessed. Only personal-data breaches meeting the legal risk threshold are reportable to the ICO, normally within 72 hours of awareness; reasons for the decision should be recorded.

10. **Privacy copy needs facts, not boilerplate.** The privacy page cannot be completed responsibly until the operator confirms hosting logs, analytics, cookies, search, forms, email, mailing lists, embedded media, contribution workflow, processors, retention and rights contacts.

---

# 2. Evidence method

## 2.1 Source hierarchy

Use sources in this order:

1. Legislation and official statutory guidance.
2. Regulators: ICO, Charity Commission, Fundraising Regulator, EHRC, ASA/CAP.
3. NCSC and central-government security, data and AI guidance.
4. Provider contracts, DPAs, privacy/security documentation and administrator help.
5. Established charity-sector bodies and research-integrity organisations.
6. Credible case studies and secondary commentary, clearly labelled.

Provider marketing may establish what a provider claims, but it is not independent evidence that a deployment is safe or compliant.

## 2.2 Claim labels for the site repository

Every substantive page should use an internal claim record with:

- `claim_id`
- exact or paraphrased claim
- source URL
- source owner
- source type
- jurisdiction
- publication or last-updated date, if shown
- date checked
- confidence: high / medium / low
- volatility: low / medium / high
- affected pages
- next review date
- reviewer or specialist gate

Recommended review rhythm:

| Claim type | Normal review |
|---|---:|
| Law, regulator guidance, safeguarding framework | 6 months and on announced change |
| Product training, retention, connectors and admin controls | 3 months |
| Price, discount, eligibility and feature availability | Monthly or avoid exact figures |
| Site privacy/accessibility implementation facts | On every deployment change, plus annual audit |
| General operational good practice | Annual |

## 2.3 Publication labels

- **Publishable:** directly supported and unlikely to mislead in context.
- **Publish with qualification:** accurate only for a plan, feature, jurisdiction or date.
- **Specialist review:** legal, safeguarding, employment, clinical or procurement judgement.
- **Local decision required:** depends on the charity's systems, risk appetite or operating model.

---

# 3. The content model the site should teach

The current five-step pause should remain the front door, but the full model should be:

1. **Purpose** — What job is being done, for whom, and is AI necessary or proportionate?
2. **Authority** — Is the use permitted by policy and owned by a named person?
3. **Tool and feature** — Is this exact plan, account, model, connector or agent approved?
4. **Information** — What data, confidentiality, safeguarding, intellectual-property or security constraints apply?
5. **Lawful use** — What lawful basis, Article 9 condition, notice, rights and contractual roles apply?
6. **Action and impact** — Does the output inform, recommend, rank, communicate or act? Who could be harmed?
7. **Human control** — Who verifies, decides, communicates and can stop or reverse the result?
8. **Record and review** — What is logged, retained, deleted, audited and reassessed when the service changes?

The public shorthand can stay “Before You Paste”. Governance pages should show the complete lifecycle.

## 3.1 Revised Green / Amber / Red logic

Traffic lights should classify a **use case**, not a product.

### Green: routine, low-impact and non-sensitive

All of these should be true:

- the exact account and feature are approved;
- the input is public, synthetic or genuinely non-confidential;
- the task does not make or materially influence a decision about a person;
- the output is checked before use;
- no connector gives the tool wider access than the task requires;
- ordinary copyright, accessibility, accuracy and brand checks still happen.

Examples: brainstorm headings from public information; simplify already-published copy; create a fictional training scenario; draft a meeting agenda without attendee details.

### Amber: authorised assessment and safeguards required

One or more of these applies:

- personal, confidential, unpublished or special-context information;
- content about a real service user, donor, employee, volunteer or applicant;
- transcription, translation or summarisation where errors could matter;
- fundraising profiling, audience targeting or personalised communications;
- content affecting access to services, employment, grants or safeguarding;
- a connector, retrieval system or agent accesses organisational data;
- synthetic media could be mistaken for a real person or event.

Amber means pause for the documented route—not “proceed carefully”. Depending on the facts, it may require the DPO/IG lead, safeguarding lead, HR, fundraising lead, IT/security, procurement or a DPIA.

### Red: prohibited unless a formal specialist deployment changes the conditions

Examples for a general-purpose public or unapproved tool:

- beneficiary case files, health information, allegations, criminal-offence data or safeguarding records;
- passwords, API keys, recovery codes, bank details or live vulnerability information;
- legally privileged material or confidential board/HR investigations;
- autonomous eligibility, recruitment, disciplinary, grant, safeguarding or payment decisions;
- unsupervised contact presented as professional, medical, legal, crisis or safeguarding advice;
- impersonation, fabricated testimonials or undisclosed synthetic evidence;
- an agent able to send money, delete records, publish externally or message people without limits and approval.

The wording must acknowledge that a specialist, contracted and assessed system may process sensitive data lawfully. The public rule is a safe default, not a claim that such processing is impossible.

---

# 4. UK data protection research for the site

## 4.1 What every AI page should explain

UK data protection law is technology-neutral. If an AI system processes personal data, the charity must meet the ordinary principles and any AI-specific risks: lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; security; and accountability.

AI creates recurring complications:

- development and deployment can have different purposes and lawful bases;
- inputs, retrieved context, generated outputs, logs and feedback can all contain personal data;
- a provider may be a processor for some activity and a controller for other activity;
- model outputs can infer sensitive information or create new personal data;
- statistical accuracy is not the same as factual truth about a person;
- individual rights must be operationally possible across prompts, files, logs and outputs;
- deployment risk changes when a model, connector, retention term or default changes.

Primary source: [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/).

## 4.2 Purpose and lawful basis

Recommended site copy:

> Define the purpose before choosing the tool or lawful basis. “Using AI” is not a purpose. A purpose is something like “produce a first draft of a public event description” or “transcribe an advisory-group meeting so an authorised employee can prepare agreed minutes”. If personal data is involved, record the Article 6 basis. If special-category or criminal-offence data is involved, identify the additional legal condition and safeguards. Do this before processing; do not choose a basis afterwards to justify a preferred tool.

The ICO specifically distinguishes development and deployment and warns that the basis must fit each purpose. Consent is appropriate only where people have a genuine choice and can refuse or withdraw without detriment. This matters for employees, service users and people dependent on a charity's support.

Sources: [ICO: lawfulness in AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-lawfulness-in-ai/), [ICO: when consent is appropriate](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/when-is-consent-appropriate/), [ICO: special-category data](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/special-category-data/).

## 4.3 Controller, processor and contracts

A contract calling the provider a processor is important but not conclusive. Roles depend on who determines purposes and essential means. The site should tell approvers to map every party and feature, including subprocessors, plugins, connected apps, web search, hosted partner models, feedback and safety monitoring.

Minimum contract review:

- controller/processor role for each processing activity;
- documented instructions and purpose limits;
- confidentiality and staff access;
- security measures;
- subprocessor notice and objection route;
- assistance with individual rights, DPIAs and incidents;
- international transfers and safeguards;
- retention, deletion, backups and termination;
- audit or assurance evidence;
- restrictions on training, product improvement and human review;
- ownership/licence for inputs and outputs;
- change notification and exit/export arrangements.

Sources: [ICO: determining controller and processor roles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/controllers-and-processors/controllers-and-processors/how-do-you-determine-whether-you-are-a-controller-or-processor/), [ICO AI audit framework: contracts and third parties](https://ico.org.uk/for-organisations/advice-and-services/audits/data-protection-audit-framework/toolkits/artificial-intelligence/contracts-and-third-parties/), [ICO: data-sharing agreements](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/data-sharing-a-code-of-practice/data-sharing-agreements/).

## 4.4 Transparency and individual rights

People should receive information that is concise, accessible and meaningful for the use. Depending on the system, explain:

- what the charity is doing and why;
- the categories and sources of information;
- the role of the provider and relevant recipients;
- retention;
- whether profiling or automated decision-making is involved;
- the likely effect on the person;
- how to exercise rights, object, request human involvement or complain;
- meaningful information about the logic where legally required.

Do not bury AI processing in a generic line such as “we may use technology to improve our services”. The charity must also be able to find and act on relevant prompts, files, outputs and logs when responding to a rights request.

Sources: [ICO: transparency in AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-transparency-in-ai/), [ICO: right to be informed](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/).

## 4.5 Children and people at greater risk

For children's data, the best interests of the child are a primary consideration. Content should cover age-appropriate notices, high privacy by default, profiling and marketing, consultation with children/parents where appropriate, and the interaction with safeguarding. An AI service being available to children does not make it suitable for a charity's service delivery.

Source: [ICO: children and the UK GDPR](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/).

## 4.6 Data protection by design and default

The site should frame this as ongoing work, not a launch document. Limit data and permissions by default; use test or synthetic data; separate environments; restrict access; document models and changes; test foreseeable misuse; provide fallback and challenge routes; reassess after material updates.

Source: [ICO: data protection by design and default, updated February 2026](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/data-protection-by-design-and-by-default/).

## 4.7 Accuracy, fairness and discrimination

Add a clear distinction:

- **factual accuracy:** whether a statement about a person or event is correct;
- **statistical accuracy:** performance of a model against a defined measure;
- **fairness:** whether data and outcomes are used in ways people could reasonably expect and that avoid unjustified harm or discrimination.

Average model performance can hide poor outcomes for smaller groups. Testing should use relevant measures and break down results where lawful and feasible. The Equality Act 2010 can apply even where Article 22 UK GDPR does not.

Sources: [ICO: accuracy and statistical accuracy](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-do-we-need-to-know-about-accuracy-and-statistical-accuracy/), [ICO: fairness, bias and discrimination](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-fairness-in-ai/what-about-fairness-bias-and-discrimination/), [EHRC: assessing equality impact of AI](https://www.equalityhumanrights.com/guidance/assessing-equality-impact-ai-based-technology-six-discussion-points).

## 4.8 Automated decisions after the DUAA

The DUAA changed the UK framework. The site should avoid copying pre-2025 explanations of Article 22 without qualification. The safest editorial structure is:

1. Is there a decision about a person?
2. Is it based solely on automated processing, including profiling?
3. Does it have a legal or similarly significant effect?
4. Does special-category data affect the applicable restrictions?
5. What safeguards, information, representation, challenge and human reconsideration exist?
6. Even if Article 22 is not engaged, are the processing, recommendation and human use still lawful, fair, accurate, secure and non-discriminatory?

The ICO's final updated ADM guidance was still scheduled for winter 2026 at the research cut-off. Mark the page **interim** and include an update trigger.

Sources: [ICO: rights related to automated decision-making](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/rights-related-to-automated-decision-making-including-profiling/), [UK government: DUAA data-protection changes](https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes), [ICO technology guidance plan](https://ico.org.uk/about-the-ico/what-we-do/our-plans-for-new-and-updated-guidance/technology/).

## 4.9 DPIA content

A DPIA is required before processing likely to result in high risk. The public triage should flag:

- systematic and extensive evaluation or scoring of people;
- significant automated decisions;
- large-scale special-category or criminal-offence data;
- systematic monitoring;
- children or vulnerable people;
- innovative technology combined with other high-risk criteria;
- data matching, invisible processing, denial of a service or a new use of existing data;
- agents or connectors with broad access and external actions.

The full DPIA should describe purpose, data flows, roles, necessity and proportionality; consult relevant people; assess likelihood and severity to people; choose measures; record residual risk; identify owner and approval; and set review triggers. If high residual risk cannot be reduced, consult the ICO before starting.

Sources: [ICO: when a DPIA is needed](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/), [ICO: how to do a DPIA](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/how-do-we-do-a-dpia/).

## 4.10 Breaches and complaints

Incident guidance should say:

- contain the disclosure without destroying evidence;
- tell the named incident contact immediately;
- record what was entered, when, by whom, into which exact account/feature, and what connectors or sharing were active;
- revoke links/tokens, delete where possible and preserve provider confirmation;
- assess confidentiality, integrity and availability impacts;
- decide whether it is a personal-data breach and whether it is likely to risk people's rights and freedoms;
- notify the ICO within 72 hours of awareness where required, and affected people without undue delay where high risk applies;
- consider safeguarding, fraud, cyber, contractual, insurer and Charity Commission routes separately;
- document the decision even where notification is not required.

The DUAA also introduced a structured data-protection complaints requirement. The site should add a complaint route and record-keeping reminder.

Sources: [ICO: personal-data breaches](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/), [ICO: 72 hours—small-organisation guide](https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/), [ICO: what the DUAA means for organisations](https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/).

---

# 5. Charity governance, safeguarding and cyber research

## 5.1 Trustee responsibility

Trustees remain responsible for decisions and cannot outsource judgement to an AI system or provider. The site should connect AI governance to the Charity Commission's ordinary decision-making principles: act within powers, in good faith, be sufficiently informed, consider relevant factors, manage conflicts and reach a decision within the range a reasonable trustee body could make. Record important decisions and dissent or uncertainty proportionately.

Sources: [Charity Commission: charities and artificial intelligence](https://charitycommission.blog.gov.uk/2024/04/02/charities-and-artificial-intelligence/), [The essential trustee (CC3)](https://www.gov.uk/government/publications/the-essential-trustee-what-you-need-to-know-what-you-need-to-do-cc3/the-essential-trustee-what-you-need-to-know-what-you-need-to-do), [Decision-making for charity trustees (CC27)](https://www.gov.uk/government/publications/decision-making-for-charity-trustees-cc27/decision-making-for-charity-trustees).

## 5.2 Minimum proportionate governance

Even a small charity should have:

- a board-approved or board-visible AI position and risk owner;
- an approved-tools and approved-use register;
- a short staff/volunteer rule linked to Before You Paste;
- training and a no-blame route for mistakes;
- a DPIA and specialist escalation route;
- procurement and contract questions;
- an incident route linked to data, cyber and safeguarding plans;
- periodic usage, incident and change reporting to trustees;
- offboarding and deletion controls;
- a review date and trigger for material provider changes.

The 2025 Charity Governance Code includes technology and AI policies as possible evidence of risk governance. The Charity Digital Code of Practice 2025 frames good practice around leadership, user need, culture, strategy, data, skills, risk/ethics and adaptability.

Sources: [Charity Governance Code 2025](https://www.charitygovernancecode.org/wp-content/uploads/2025/10/CCG_English_FINAL_highres.pdf), [Charity Digital Code of Practice 2025](https://charitydigital.org.uk/topics/the-charity-digital-code-of-practice-2025-12116).

## 5.3 Safeguarding

AI must sit inside the charity's safeguarding system, not alongside it. Trustee duties cover online activity, children and adults at risk, staff, volunteers, partners and work overseas. A beneficiary-facing chatbot, automated translation, transcription or risk flag can create safeguarding information and should have an accountable human route.

Minimum rules for a public page:

- do not present a general-purpose model as a counsellor, crisis service, medical professional or safeguarding lead;
- do not allow it to close or downgrade a concern without a trained person;
- make emergency and human-contact routes prominent;
- test harmful advice, dependency, self-harm, abuse, grooming, hallucination and evasion scenarios;
- preserve an appropriate record and handoff where a disclosure occurs;
- explain limits in language suitable for the audience;
- give staff a route to override or stop the service;
- involve safeguarding, service users and relevant specialists before launch and during review.

Current UK evidence about children's interaction with AI chatbots is still developing and mixed. Avoid confident health or safety claims unsupported by robust evidence.

Sources: [Charity Commission: safeguarding and protecting people](https://www.gov.uk/guidance/safeguarding-and-protecting-people-for-charities-and-trustees), [Charity Commission: safeguarding for charities and trustees](https://www.gov.uk/guidance/safeguarding-for-charities-and-trustees), [Working Together to Safeguard Children 2026](https://assets.publishing.service.gov.uk/media/69fb1c28d0e316a40f269a5b/Working_together_to_safeguard_children_2026_a_guide_to_multi_agency_working.pdf), [Growing up in the online world consultation](https://www.gov.uk/government/consultations/growing-up-in-the-online-world-a-national-consultation/growing-up-in-the-online-world-a-national-conversation).

## 5.4 Cyber, connectors and agents

The threat model changes when AI can retrieve or act. A connector can expose whatever the user's existing permissions expose; that is risky where file sharing is already over-broad. An agent can be manipulated by malicious instructions in emails, web pages or documents—prompt injection—and may take action based on untrusted content.

Approval should map:

- identities, roles and least privilege;
- every data source and write permission;
- external content the system treats as instructions;
- allowed actions and transaction limits;
- confirmation before sending, publishing, deleting, changing access or spending;
- sandbox/test environment and synthetic test data;
- logging and alerting;
- secrets and credential handling;
- supplier and model-provider boundaries;
- revocation, kill switch and rollback;
- incident owner and recovery exercise.

No charity should enable a broad agent merely because it inherits existing user permissions. Clean up underlying access first.

Sources: [NCSC: thinking carefully before adopting agentic AI](https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai), [NCSC: AI and cyber security](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know), [UK AI Cyber Security Code of Practice](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai), [NCSC Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit).

## 5.5 Serious incidents and financial controls

An AI incident may trigger several routes. A serious loss of data, funds, reputation, service continuity or safeguarding control may require a prompt, full and frank Charity Commission report. A serious personal-data breach may need both ICO and Charity Commission consideration. Fraudulent AI-generated messages, deepfakes and compromised email can be used to redirect payments.

The site should pair AI controls with CC8 financial controls: segregation of duties, independent verification of bank-detail changes, approval limits and an out-of-band check for unusual requests. AI must never be the sole approver of a payment.

Sources: [Charity Commission: how to report a serious incident](https://www.gov.uk/guidance/how-to-report-a-serious-incident-in-your-charity), [CC47: raising a concern with the Charity Commission](https://www.gov.uk/government/publications/raising-a-concern-with-the-charity-commission-cc47/raising-a-concern-with-the-charity-commission-cc47), [CC8: internal financial controls](https://www.gov.uk/government/publications/internal-financial-controls-for-charities-cc8), [Cyber Security Breaches Survey 2025/26](https://www.gov.uk/government/statistics/cyber-security-breaches-survey-20252026/cyber-security-breaches-survey-20252026).

---

# 6. Everyday charity work: researched content modules

The current hub needs to answer “Can I use AI for this task?” The modules below can each become a page. They follow a common pattern: useful tasks, risk boundary, minimum controls, examples and escalation.

## 6.1 Communications, campaigns and public content

### Lower-risk uses

- brainstorm campaign concepts from public information;
- turn approved source text into format variants;
- suggest headings, alt-text drafts or plain-language alternatives;
- create clearly fictional early-stage visual concepts;
- check tone or structure, followed by human editorial review.

### Material risks

- fabricated facts, quotations, statistics, case studies or citations;
- disclosure of unpublished campaigns, supporter lists or beneficiary stories;
- synthetic people or events mistaken for real evidence;
- copyright, trade-mark, privacy, publicity or defamation issues;
- stereotyped or exclusionary imagery and language;
- inaccessible generated copy, captions, audio or graphics;
- targeting or personalisation that becomes opaque profiling.

### Minimum publication check

1. Trace every factual claim to a reliable source.
2. Confirm permission for every real person's story, image and quotation; do not ask a model to invent consent.
3. Search for close resemblance to real people, logos and protected characters where relevant.
4. Label synthetic content where omission could materially mislead the audience, even if no general labelling rule applies.
5. Test accessibility in the delivered format, not just in the prompt.
6. Keep a record of material AI use for higher-risk public content.
7. A named editor owns the final message.

The ASA/CAP Codes apply to AI-generated advertising in the same way as other advertising: it must not mislead or cause prohibited harm. The UK government's March 2026 report confirms that the copyright/AI framework remains unsettled and that there is no blanket labelling duty for all AI content.

Sources: [ASA: disclosure of AI in advertising](https://www.asa.org.uk/news/disclosure-of-ai-in-advertising-striking-the-balance-between-creativity-and-responsibility.html), [ASA: AI advertising and proactive monitoring](https://www.asa.org.uk/news/ai-advertising-and-the-policy-landscape-cap-proactive-monitoring.html), [CAP Code section 3: misleading advertising](https://www.asa.org.uk/type/non_broadcast/code_section/03.html), [UK government: report on copyright and artificial intelligence](https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence).

## 6.2 Fundraising

The existing traffic lights are a good base. Expand them around the Fundraising Regulator's full lifecycle.

### Add to the page

- board/senior oversight and a written AI position;
- risk assessment before use and a limited pilot;
- lawful data use, PECR and the boundaries of the charitable-purpose soft opt-in;
- vulnerability and reasonable adjustments;
- human review of donor-facing content and decisions;
- records of tools, prompts, checks and material outputs;
- oversight of agencies, platforms and professional fundraisers;
- controls on wealth screening, prospect research, propensity scoring and personalised asks;
- a ban on fabricated beneficiary stories or testimonials;
- proportionate disclosure of synthetic media;
- a complaint and opt-out route.

### Important soft opt-in qualification

The DUAA introduced a charitable-purpose soft opt-in under PECR, but it is not a general permission to contact anyone. The charity must meet the statutory conditions, give a clear opt-out when details are collected and in every message, and still comply with UK GDPR. Use the Fundraising Regulator's dedicated guidance rather than compressing this into a single sentence.

### Suggested case distinction

- **Drafting a generic appeal from approved public facts:** usually Green with review.
- **Tailoring an appeal using a donor's known interests:** Amber; profiling, fairness, transparency and lawful marketing rules apply.
- **Predicting vulnerability or pressuring a person based on inferred circumstances:** Red.
- **Synthetic “beneficiary” image used as if documentary:** Red unless unmistakably presented as illustration and otherwise lawful and ethical.

Sources: [Fundraising Regulator: using AI in fundraising](https://www.fundraisingregulator.org.uk/about-fundraising/resources/guidance-using-artificial-intelligence-fundraising), [data privacy and fundraising](https://www.fundraisingregulator.org.uk/about-fundraising/resources/data-privacy-and-fundraising), [charitable-purpose soft opt-in](https://www.fundraisingregulator.org.uk/about-fundraising/resources/charitable-purposes-soft-opt-and-fundraising-marketing).

## 6.3 Meetings, recording and transcription

### Replace a consent-only model with this decision route

1. Is recording or verbatim transcription necessary, or would agreed notes be enough?
2. What is the purpose and lawful basis? Is special-category or criminal-offence data likely?
3. Who is attending, what is the power relationship, and could recording inhibit disclosure or participation?
4. What exact bot, account, storage location and subprocessors are involved?
5. What notice is given before joining and again at the start?
6. Can a person participate through a reasonable alternative where appropriate?
7. Who can access, correct, share and delete the recording/transcript?
8. What is the retention period, and is the transcript actually needed after minutes are agreed?
9. Who checks names, decisions, actions, safeguarding details and quotations?

### Strong default rules

- turn automatic recording/transcription off by default;
- never allow an unapproved bot to join a meeting;
- prohibit use for safeguarding, grievance, disciplinary, legal or highly sensitive meetings unless a specific assessed process permits it;
- announce recording visibly and audibly;
- pause or stop when a sensitive discussion begins;
- do not treat the transcript as an authoritative minute;
- restrict downloading and onward sharing;
- apply a short, purposeful retention period;
- check whether the bot remains invited to future meetings or calendars.

Audio is particularly intrusive. A disclosed ICO DPIA for Microsoft Teams illustrates that transcripts may capture identity, opinions, special-category data and criminal-offence information; it is a useful worked example, not a universal lawful-basis answer. ACAS guidance also reinforces that an investigator must reach their own conclusions.

Sources: [ICO: audio and surveillance principles](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv-and-video-surveillance/guidance-on-video-surveillance-including-cctv/how-can-we-comply-with-the-data-protection-principles-when-using-surveillance-systems/), [DWP recording and transcription policy, updated June 2026](https://www.gov.uk/government/publications/dwp-procurement-security-policies-and-standards/dwp-generic-recording-and-transcription-policy), [ICO disclosed Microsoft Teams DPIA](https://ico.org.uk/media2/5pynjjs2/ic-401190-m8v9-ms-teams-record-transcribe-function-dpia-disclosed.pdf), [ACAS: what happens after an investigation](https://www.acas.org.uk/investigations-for-discipline-and-grievance-step-by-step/step-6-what-happens-after-an-investigation).

## 6.4 Recruitment, workers and HR

### Useful but bounded tasks

- draft a generic job description from approved role information;
- create interview-question ideas checked for relevance and accessibility;
- summarise anonymised, aggregate staff-survey themes in an approved environment;
- produce a training outline that HR reviews.

### High-risk tasks

- sourcing, filtering, ranking or rejecting candidates;
- analysing video, voice, facial expression, personality or “culture fit”;
- inferring health, disability, emotion, union membership or other sensitive characteristics;
- monitoring performance, communications or attendance;
- drafting disciplinary or grievance findings from case material;
- determining redundancy, promotion, pay or dismissal.

### Content the page needs

- identify controller roles among employer, recruiter and AI supplier;
- complete a DPIA early for high-risk recruitment or monitoring;
- tell candidates/workers clearly what is used and how;
- test necessity, validity, job relevance and equality impact;
- offer adjustments and a workable non-AI route where needed;
- prohibit hidden scraping or reuse beyond the stated purpose;
- define meaningful human decision and challenge;
- contract for rights support, minimisation and deletion;
- monitor outcomes across relevant groups and stop if harm appears.

The ICO's recruitment audit found recurring issues around fairness/bias monitoring, transparency, data minimisation, DPIAs and unclear controller responsibilities. Consent is especially difficult where an employee or applicant lacks a genuine free choice.

Sources: [ICO: AI tools in recruitment—outcomes report](https://ico.org.uk/media2/migrated/4031620/ai-in-recruitment-outcomes-report.pdf), [ICO: key recruitment considerations](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/11/thinking-of-using-ai-to-assist-recruitment-our-key-data-protection-considerations/), [ICO: employee monitoring](https://ico.org.uk/for-organisations/advice-for-small-organisations/news-blogs-and-events/blogs/employee-monitoring-is-it-right-for-your-business/), [EHRC: AI in public services](https://www.equalityhumanrights.com/guidance/artificial-intelligence-public-services).

## 6.5 Beneficiary services, advice and chatbots

This should be a priority new page because error consequences are not comparable to copywriting.

### Tier the use

- **Navigation:** points to published opening times, eligibility rules and human contacts. Lower risk, but still needs accuracy, accessibility and escalation.
- **Information support:** summarises or translates approved material. Amber where omissions could affect rights or wellbeing.
- **Personalised recommendation:** uses a person's circumstances to suggest an option. High risk; requires data, equality, service and professional assurance.
- **Decision or professional advice:** determines eligibility, risk, clinical/legal/safeguarding action or crisis response. Red unless deployed as a specialist governed system with qualified human control.

### Mandatory controls for any public bot

- disclose that it is AI and state material limits;
- never imply a human is responding;
- prominent human and urgent-help routes;
- approved, maintained knowledge sources with ownership and expiry;
- tests for hallucination, harmful advice, exclusion, adversarial prompts and safeguarding disclosures;
- no unnecessary collection of personal data;
- clear transcript/retention information;
- monitoring for failure, complaints and unequal outcomes;
- fallback when confidence is low or a topic is excluded;
- versioned change control and a kill switch.

Do not use engagement or user satisfaction alone as evidence of safety. Ask whether people received the right outcome, could challenge it, and were not deterred from human support.

Sources: [Charity Commission safeguarding guidance](https://www.gov.uk/guidance/safeguarding-and-protecting-people-for-charities-and-trustees), [UK government Data and AI Ethics Framework](https://www.gov.uk/government/publications/data-ethics-framework/data-and-ai-ethics-framework), [NHS England AI information-governance guidance](https://digital.nhs.uk/data-and-information/information-governance/guidance/artificial-intelligence).

## 6.6 Volunteers

Volunteer data and decisions deserve their own page, not an HR footnote. Cover recruitment, DBS-related or safeguarding information, rota and attendance data, performance/complaints, references and recognition.

Rules:

- volunteers must receive the same Before You Paste training and incident route as staff;
- do not require personal AI accounts for charity work;
- give only the minimum data and connector access needed;
- do not use AI alone to screen, discipline or remove a volunteer;
- separate genuine skills/availability criteria from inferred personality or “fit”;
- close accounts, revoke connectors and transfer records at offboarding;
- make accessible, non-AI alternatives available.

Source for wider volunteering context: [NCVO volunteering strategy, July 2026](https://www.ncvo.org.uk/news-and-insights/news-index/volunteering-what-our-strategy-means-for-ncvos-work/). Legal and data-protection claims should be supported by the ICO sources already listed.

## 6.7 Finance, grants and fraud

### Lower-risk support

- explain a public budget template;
- draft a narrative from verified aggregate figures;
- propose spreadsheet formulas for testing on a copy;
- summarise published grant criteria.

### High-risk uses

- uploading payroll, bank, donor or supplier records to an unapproved tool;
- changing payment details from an AI-generated or email-only instruction;
- autonomous payments, refunds or purchases;
- eligibility or grant scoring without a governed process;
- accepting generated financial analysis without reconciliation;
- sharing live credentials or security configuration.

### Controls

- reconcile outputs to source systems;
- preserve segregation of duties and approval limits;
- independently verify changes of bank details through a trusted channel;
- treat urgent, secret or unusual requests as potential fraud, including synthetic voice/video;
- keep payment authority outside the agent;
- log changes and retain source evidence;
- review spreadsheet code/formulas for hidden errors and injection;
- include finance and cyber owners in incident exercises.

Sources: [CC8 internal financial controls](https://www.gov.uk/government/publications/internal-financial-controls-for-charities-cc8), [NCSC small-organisation cyber guide](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security), [Charity Sector Risk Assessment 2025](https://www.gov.uk/government/publications/charity-sector-risk-assessment-2025/charity-sector-risk-assessment-2025).

## 6.8 Research, evaluation and consultation

AI can help search, screen, transcribe, code and summarise evidence, but it can also erase minority views, fabricate sources and make an opaque method impossible to reproduce.

Minimum method record:

- research question and protocol;
- tool, model, date and material configuration;
- what data was submitted and under what approval;
- prompts or reproducible instructions where appropriate;
- human screening/validation sample;
- error, disagreement and exclusion handling;
- citation verification against the original source;
- participant notice/consent where required;
- limitations and material AI assistance in the output.

A 2026 government comparative study found time savings in one AI-assisted evidence-review setting but also more revisions and similar final quality. This is useful evidence that AI may change workflow, not proof that it improves every review.

Sources: [UKRIO: AI in research](https://ukrio.org/ukrio-resources/ai-in-research/), [UKRIO Code of Practice for Research 2025](https://ukrio.org/wp-content/uploads/UKRIO-Code-of-Practice-for-Research.pdf), [UK government: AI-assisted versus human-only evidence review](https://www.gov.uk/government/publications/ai-assisted-vs-human-only-evidence-review/ai-assisted-vs-human-only-evidence-review-results-from-a-comparative-study).

## 6.9 Translation, accessibility and inclusion

AI translation and accessibility tools can widen participation, but an apparently fluent output may be wrong in ways a monolingual reviewer cannot detect.

### Page rules

- state language and audience, including dialect, literacy and specialist terms;
- use a qualified or community reviewer for safety-critical, rights, medical, legal, safeguarding or public-service content;
- never treat automated captions as final for important content;
- preserve speaker identity and non-speech information where needed;
- give a route to request another format or human interpreter;
- test with disabled people and assistive technology, not automated checkers alone;
- do not infer disability or language need from unrelated behaviour;
- review synthetic voice for intelligibility, consent and impersonation risk.

WCAG 2.2 remains the current stable W3C Recommendation; WCAG 3.0 was still a draft at the cut-off. Aim for 2.2 AA and say how the aim is tested.

Sources: [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/), [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/), [UK public-sector accessibility requirements](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps), [W3C: automated captions and translation need human validation](https://www.w3.org/community/reports/a11yedge/CG-FINAL-a11yedge-capabilities-20251104/).

## 6.10 Website, code and analytics

Recommended new page:

- never paste secrets, tokens, private repositories, vulnerability details or real production data into an unapproved assistant;
- verify licences and provenance for generated dependencies or code;
- run tests, linting, dependency/security scanning and peer review;
- treat generated commands and infrastructure changes as untrusted;
- never run destructive commands without understanding scope and recovery;
- review analytics and personalisation for lawful basis, transparency, minimisation and cookie/PECR obligations;
- isolate AI-generated experiments from production;
- preserve rollback and change records;
- require human approval for deployment and access-control changes.

Primary security sources: [NCSC AI and cyber security](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know), [AI Cyber Security Code of Practice](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai), [ICO AI security and integrity audit framework](https://ico.org.uk/for-organisations/advice-and-services/audits/data-protection-audit-framework/toolkits/artificial-intelligence/information-security-and-integrity/).

---

# 7. Tool research: how the eight current pages should change

## 7.1 Cross-tool approval matrix

The editor should put this table at the start of the Tools section.

| Approval dimension | Evidence required | Why it matters |
|---|---|---|
| Product and account | Exact service, workspace and account ownership | A personal login and an organisation workspace are not equivalent |
| Plan/licence | Named plan and current entitlement | Audit, retention, SSO and admin controls vary |
| Model/provider | Model and any partner provider | One interface may route content to different companies/terms |
| Feature | Chat, upload, search, image, meeting notes, agent, connector, API | Each creates different data flows and actions |
| Data use | Training/product improvement/human review terms | “Private” can mean several different things |
| Retention/deletion | Defaults, admin options, backups and legal exceptions | Deletion and DSAR handling must be achievable |
| Identity/access | SSO, MFA, roles, group controls and offboarding | Charity must control who can use it |
| Connectors/actions | Sources, scopes, write permissions and approval | Existing over-sharing and prompt injection can be amplified |
| Logs/assurance | Audit logs, usage reporting, certifications, DPA | Needed for accountability, detection and contracts |
| Location/transfers | Storage/inference regions and subprocessors | Relevant to transfer and risk assessment |
| Purpose/data ceiling | Approved tasks and prohibited inputs | A secure plan is not permission for every use |
| Owner/review | Named owner, decision, expiry and change triggers | Product terms and defaults move quickly |

### Claims that do not prove a deployment is safe

- “We do not train on your data.”
- “Enterprise-grade.”
- “Encrypted.”
- “GDPR compliant.”
- “SOC 2 / ISO certified.”
- “Commercially safe.”
- “Private mode.”
- “Paid plan.”

Each may be useful evidence, but none answers purpose, lawful basis, minimisation, permissions, output harm, rights, retention, human control and local configuration by itself.

## 7.2 ChatGPT page brief

### Essential distinction

Separate Free/Plus/Pro personal workspaces from Business, Enterprise/Edu and API deployments. OpenAI states that business products are not used to train models by default, while personal services have user data controls. Temporary Chat is a personal-account control, not a substitute for an approved organisation workspace or contract.

### Add these feature warnings

- Apps/connectors can access external services within the user's permissions.
- OpenAI documents different defaults: apps may be enabled by default in Business and disabled by default in Enterprise/Edu; verify the live workspace.
- Enterprise/Edu can have more granular role controls than Business.
- Data/inference residency is plan- and configuration-dependent.
- A GPT, agent, action or third-party app can introduce separate recipients and terms.
- Business subscriptions and API usage are separate products.

### Publishable recommendation

> Use only the charity's named workspace and approved features. Do not move work to a personal account because a feature is unavailable. Before enabling an app, connector or agent, approve its data sources, permissions, provider terms and actions separately.

Sources: [OpenAI enterprise privacy](https://openai.com/enterprise-privacy/), [Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq), [Temporary Chat FAQ](https://help.openai.com/en/articles/8914046-temporary-chat-faq), [Chat and file retention](https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt), [Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt), [app admin controls](https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps), [data and inference residency](https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt), [OpenAI DPA](https://openai.com/policies/data-processing-addendum/), [OpenAI for Nonprofits](https://help.openai.com/en/articles/9359041-openai-for-nonprofits).

## 7.3 Claude page brief

### Essential distinction

Anthropic states that commercial-product data is not used for model training by default. Consumer and commercial terms differ. Retention controls and audit/compliance capabilities vary, especially between Team and Enterprise.

### Add these feature warnings

- Enterprise can support custom retention and deeper controls not available in all plans.
- Connectors and enterprise search extend access to Slack, Microsoft 365 and other sources; owners control connected apps at project or organisation level depending on feature.
- New action-oriented experiences such as Cowork need their own assessment. Anthropic documented different access-control granularity for Team and Enterprise in June 2026.
- MCP servers and third-party integrations can create separate trust and prompt-injection boundaries.

Sources: [Anthropic: commercial model training](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training), [commercial retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data), [controller/processor roles](https://privacy.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller), [Enterprise custom retention](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans), [audit logs](https://support.claude.com/en/articles/9970975-access-audit-logs), [Enterprise plan](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan), [enterprise search](https://support.claude.com/en/articles/12489464-use-enterprise-search), [Claude for Nonprofits](https://www.anthropic.com/news/claude-for-nonprofits).

## 7.4 Google Gemini page brief

### Essential distinction

Personal Gemini Apps and Gemini used through an eligible work/school Google Workspace account have different data handling. Google states that chats and uploaded files in the eligible work/school experience are not human-reviewed or used to improve generative AI models. Administrators control service availability and work-account activity settings; features and models still vary by licence.

### Add these feature warnings

- Confirm the user is actually in the work account and protected experience.
- Do not infer work protection from a browser profile or paid personal Google AI subscription.
- Keep Activity and retention are administrator-controlled for work/school accounts.
- Extensions, Gems, Notebook features, Chrome context and Workspace integrations change what is accessed and stored.
- Clearly distinguish Gemini Apps from Vertex AI/API products.

Sources: [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961), [Gemini with a work or school account](https://support.google.com/gemini/answer/14620100), [Gemini activity management](https://support.google.com/gemini/answer/13278892), [Google for Nonprofits AI offer](https://support.google.com/nonprofits/answer/15503706).

## 7.5 Microsoft Copilot page brief

### Essential distinction

“Copilot” covers multiple services. The page must separate consumer Copilot, Microsoft 365 Copilot Chat, licensed Microsoft 365 Copilot, Copilot Studio/agents, GitHub Copilot and security/developer products.

Microsoft states that prompts, responses and Microsoft Graph content in Microsoft 365 Copilot are not used to train foundation LLMs. The service can access content the user already has permission to view. This makes permission hygiene a precondition: Copilot can surface existing over-sharing more quickly.

### Add these feature warnings

- web search sends generated queries to Bing under separate documented handling;
- interaction history is stored and governed within Microsoft 365 commitments;
- Graph connectors and agents bring third-party data and terms into scope;
- admins can control agents and, by 2026, access to other model providers; provider-specific terms may apply;
- Purview, labels, retention and eDiscovery controls depend on the tenant and licences.

Sources: [Microsoft 365 Copilot privacy](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy), [web-search controls](https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access), [secure governed data foundation](https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot), [Copilot admin scenarios](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-page), [Microsoft nonprofit AI](https://www.microsoft.com/en-us/nonprofits/empower-your-nonprofit-with-ai).

## 7.6 Notion AI page brief

Notion AI now spans in-workspace drafting, enterprise search, meeting notes and agents. A generic note-taking review is no longer sufficient.

### Add these feature warnings

- AI can inherit the visibility of pages and connected sources; review teamspaces and permissions first.
- Enterprise search connects external systems and requires separate connector approval.
- AI Meeting Notes creates recording/transcription, notice, accuracy and retention questions.
- Agents that can create, edit or take action need permission, testing, transaction and kill-switch controls.
- Plan, SSO, granular permissions and analytics availability differ.

Sources: [Notion AI security practices](https://www.notion.com/help/notion-ai-security-practices), [Notion security and privacy](https://www.notion.com/help/security-and-privacy), [AI Meeting Notes](https://www.notion.com/help/ai-meeting-notes), [Notion AI product and plan controls](https://www.notion.com/product/ai), [Notion for Nonprofits](https://www.notion.com/nonprofits).

## 7.7 Perplexity page brief

### Essential distinction

Consumer Perplexity and Enterprise products have different data choices and administrator controls. Do not describe a cited answer as verified research: citations can be irrelevant, misquoted, low quality or fail to support the generated sentence.

### Add these feature warnings

- require opening the original source and checking the exact claim;
- Enterprise administrators can control files, sharing, connectors, models/providers, retention/incognito enforcement and audit settings;
- Computer/agentic features can connect to services and act, requiring a separate approval;
- third-party model selection changes the provider chain;
- never upload unpublished research, case data or credentials merely to get a sourced answer.

Sources: [Perplexity data collection](https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity.html), [Enterprise Pro](https://www.perplexity.ai/help-center/en/articles/10352973-what-is-enterprise-pro.html), [organisation permissions](https://www.perplexity.ai/help-center/en/articles/12053065-enterprise-organization-permissions.html), [audit logs](https://www.perplexity.ai/help-center/en/articles/11652747-audit-logs.html), [organisation admins](https://www.perplexity.ai/help-center/en/articles/12067853-introduction-to-organization-admins.html), [Computer for Enterprise](https://www.perplexity.ai/help-center/en/articles/13901210-computer-for-enterprise.html).

## 7.8 Canva AI page brief

Canva combines design, uploads, brand assets, apps and multiple AI features. Approve the relevant Magic Studio feature and account, not “Canva”.

### Add these feature warnings

- users must have rights to uploaded images, fonts, logos and other inputs;
- generated assets still need privacy, equality, accuracy, brand and IP review;
- admin controls for AI features should be checked and documented;
- third-party apps or models may have additional terms/data flows;
- do not generate or publish fabricated beneficiary imagery or testimonials as documentary evidence;
- Canva for Nonprofits eligibility and included features can change—date the claim and link rather than hard-code a price.

Sources: [Canva AI Product Terms](https://www.canva.com/policies/ai-product-terms/), [privacy settings](https://www.canva.com/help/manage-privacy-settings/), [Magic features admin controls](https://www.canva.com/help/magic-features-admin-controls/), [Canva for Nonprofits](https://www.canva.com/nonprofits/).

## 7.9 Adobe Firefly page brief

### Essential distinction

Firefly now offers Adobe models and, in some enterprise workflows, partner models. The selected model matters. Adobe states that content in specified partner-model enterprise workflows is not used to train Adobe or partner models, but content required for generation is shared with the partner. Coverage and indemnity vary by plan, model and general-availability status.

### Add these feature warnings

- identify Adobe versus partner model on every approved workflow;
- do not generalise enterprise partner-model terms to all Firefly, Express or Creative Cloud experiences;
- indemnity does not remove trade-mark, privacy, publicity or input-rights risk and has conditions/exclusions;
- Content Credentials or provenance signals are useful but do not prove truth or permission;
- retain human brand, accuracy, accessibility and representation review.

Sources: [Adobe Firefly FAQ](https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/adobe-firefly-faq.html), [Firefly overview](https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/adobe-firefly-overview.html), [partner models in Firefly Creative Production for Enterprise](https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/partner-models-in-firefly-creative-production-for-enterprise.html), [Adobe for Nonprofits](https://www.adobe.com/nonprofits.html).

## 7.10 Common footer for every tool page

> **Checked:** 12 July 2026. Product features and terms change quickly. This page does not approve the product for your charity. Check the exact plan, account, model, feature, connectors, retention and administrator settings against your charity's approval record before use. Report a material mismatch or changed default to the tool owner.

---

# 8. Exact page-by-page population blueprint

This section maps every file in the export. “Ready” means editorial drafting can begin from the evidence in this pack; it does not waive the named review gate.

## 8.1 Entry pages

### `docs/index.md`

**Keep:** short proposition and link to the core check.  
**Add:**

- three audience routes: “I am about to use AI”, “I approve tools or manage risk”, “I am a trustee or leader”;
- an incident banner: “Already pasted or connected something? Act now”;
- scope: primarily charities in England and Wales; data/cyber content often UK-wide;
- limit: guidance supports, but does not replace, legal/safeguarding/professional advice;
- “last evidence review” and update link;
- links to beneficiary services, fundraising, meetings, HR and tools.

**Suggested hero copy:**

> Practical, researched AI safety guidance for UK charities. Start with the five-step check before you paste, upload, connect, record or let an AI system act.

**Status:** Ready.

### `docs/start-here/index.md`

Turn this into a 10-minute route:

1. Read Before You Paste.
2. Check whether the exact plan and feature are approved.
3. Pick the task guide.
4. Escalate Amber/Red uses.
5. Record a new or changed use.
6. Know the incident route.

Add audience cards for staff/volunteers, managers, trustees, DPO/IG, safeguarding and IT. Explain that “approved tool” never means “approved for every data type or task”.

**Status:** Ready.

### `docs/before-you-paste/index.md`

**Keep:** five-step pause, traffic lights, meaningful human review, incident action.  
**Change:**

- title the five steps: tool/feature; information; necessity; action/impact; human control;
- add “paste, upload, share, record, connect or grant access” so the model is not text-only;
- revise Amber so manager permission alone is never enough;
- split Red into “never in an unapproved general tool” and “formal specialist deployment required”;
- state that public information can still be confidential by compilation, copyrighted, harmful or unsuitable;
- add a one-screen decision card and a link to printable checklist;
- link directly to incidents, DPIA, tool approval, agents and task pages.

**Specialist gate:** data-protection and safeguarding review of examples.  
**Status:** Ready with gate.

## 8.2 AI and data-protection pages

### `docs/ai-and-data-protection/index.md`

Rebuild as a lifecycle hub with cards for:

- purpose, necessity and data flows;
- lawful basis and special-category conditions;
- transparency and individual rights;
- controller/processor and supplier contracts;
- DPIAs;
- automated decisions and profiling;
- retention, security and incidents;
- children and people at greater risk.

Use the wording in section 4. Replace the unqualified DUAA commencement line. Add the ICO privacy-notice generator as a practical small-charity resource, while explaining that an AI-specific processing description may still be needed.

Source: [ICO privacy-notice generator](https://ico.org.uk/create-your-own-privacy-notice).  
**Specialist gate:** DPO/data-protection lead.  
**Status:** Ready with gate.

### `docs/ai-and-data-protection/dpia-triage.md`

Add:

- a dated screening record even where the answer is “no DPIA”;
- combined-risk logic, not a mechanical score;
- consultation with affected people or representatives where appropriate;
- equality, safeguarding and security impacts alongside privacy;
- residual-risk sign-off and ICO prior-consultation point;
- review triggers: new model, new data source, connector, purpose, audience, output/action, provider term or material incident;
- link to the DPIA template in section 12.

**Status:** Ready with DPO review.

### `docs/ai-and-data-protection/automated-decisions.md`

Keep the three tiers—assistive, recommendation/scoring, significant automated decision—but make two points prominent:

1. A nominal human does not make processing non-automated if they routinely accept the output or lack power/evidence to change it.
2. Falling outside Article 22 does not remove the ordinary principles, equality law, objection rights, accuracy duties or trustee responsibility.

Add the six-question DUAA route from section 4.8, an **Interim guidance—review after final ICO update** banner, and examples for grants, services, recruitment, discipline, fraud flags and fundraising profiles.

**Specialist gate:** legal/DPO, equality and relevant service owner.  
**Status:** Ready as interim.

## 8.3 Everyday work pages

### `docs/everyday-charity-work/index.md`

Replace the placeholder with a task grid:

- communications and public content;
- fundraising;
- meetings and transcription;
- beneficiary services and chatbots;
- safeguarding;
- recruitment and HR;
- volunteers;
- finance, grants and fraud;
- research and evaluation;
- translation and accessibility;
- website, code and analytics.

Add “risk follows the task, data and impact—not the department”.

**Status:** Ready.

### `docs/everyday-charity-work/ai-in-fundraising.md`

Use section 6.2. Add a compact table spanning ideation, drafting, segmentation, prospect research, personalisation, chatbots, synthetic media and automated decisions. Link to privacy/PECR, vulnerability and complaints. Add a third-party-fundraiser question: “Can the charity evidence the same standards when an agency or platform uses AI on its behalf?”

**Specialist gate:** fundraising lead and DPO.  
**Status:** Ready with gate.

### `docs/everyday-charity-work/meetings-and-transcription.md`

Use the nine-question route and strong defaults in section 6.3. Add a meeting organiser script:

> We plan to use [tool] to [record/transcribe] this meeting so that [purpose]. The [recording/transcript] will be available to [people] and kept for [period]. Please tell [contact] before or during the meeting if you have concerns or need another way to participate. We may stop the tool if sensitive information arises.

This is a transparency prompt, not a universal consent formula. Add a link to the meeting assessment template.

**Specialist gate:** DPO; safeguarding/HR for relevant meetings.  
**Status:** Ready with gate.

## 8.4 Governance pages

### `docs/governance/index.md`

Retain the minimum-controls list but organise it as **Decide, Configure, Use, Monitor, Respond, Review**. Add board questions:

- What outcomes and harms are we measuring?
- Which uses affect beneficiaries or rights?
- Where can AI access data or act externally?
- What has changed since the last report?
- What incidents, near misses, complaints and overrides occurred?
- Can staff stop the system without fear or service pressure?
- What is the exit plan if the provider or performance changes?

Use trustee and governance sources in section 5.

**Status:** Ready.

### `docs/governance/tool-approval.md`

Expand the current questions to the full matrix in section 7.1. Add:

- approval ID, exact account/tenant and screenshots/exports of material settings;
- controller/processor and subprocessor map;
- individual-rights and deletion test;
- permitted purposes, users, data ceiling and excluded decisions;
- connector/model/agent sub-approvals;
- test evidence and acceptance criteria;
- owner, training, monitoring, expiry and rollback;
- contract end/export plan.

Approval outcomes should be **approved**, **approved with conditions**, **pilot only**, **not approved**, or **retired**. Every outcome needs reasons and a review date.

**Specialist gate:** procurement/IT/DPO proportionate to risk.  
**Status:** Ready with gate.

### `docs/governance/agents-and-connectors.md`

Use section 5.4. Add a diagram or table from identity → data source → model → action → external recipient. Require separate approval for read and write scopes. Include prompt injection, poisoned documents, excessive permissions, indirect data leakage, transaction fraud and cascading automation. Add a pre-launch adversarial test and emergency-disable rehearsal.

**Specialist gate:** security/IT and system owner; DPO where personal data.  
**Status:** Ready with gate.

### `docs/governance/incidents.md`

Create four lanes:

1. **Data/privacy:** unintended disclosure, wrong recipient, rights issue.
2. **Safeguarding/service:** harmful advice, missed disclosure, unsafe exclusion.
3. **Cyber/agent:** compromised account, prompt injection, unauthorised action.
4. **Content/decision:** fabricated publication, discriminatory score, wrongful decision.

Publish immediate containment steps and a single internal contact placeholder. Explain the ICO 72-hour clock carefully. Add separate checks for affected people, insurer, police/Action Fraud as applicable, contract notice and Charity Commission serious-incident reporting. Never advise a user to conceal a mistake or delete evidence.

**Specialist gate:** incident owner, DPO and safeguarding lead.  
**Status:** Ready with gate.

## 8.5 Tool pages

### `docs/tools/index.md`

Add the approval-unit rule and cross-tool matrix from section 7.1. Group tools by function—general assistants, search/research, workplace suites, design/media, transcription, agents—while retaining individual reviews. Add a change-warning banner and an explanation of provider claims that do not prove safety.

**Status:** Ready.

### `docs/tools/account-plans-and-data-controls.md`

This should become the canonical plan-comparison explainer. Include:

- personal vs organisation-owned identity;
- consumer vs commercial terms;
- training/product improvement/human review;
- retention and deletion;
- admin, SSO/MFA, offboarding and audit;
- connector and partner-model controls;
- DPA, subprocessor and transfer evidence;
- a worked example showing why “paid personal” is still not approved.

Avoid exact prices except in a dated, automatically reviewed data file.

**Status:** Ready.

### `docs/tools/chatgpt.md`

Use section 7.2 and the common dated footer. Replace generic Green/Amber/Red with a plan/feature matrix plus task examples. Make apps, agents and GPT actions separately approved.

### `docs/tools/claude.md`

Use section 7.3. Separate consumer, Team, Enterprise and API. Treat Cowork, connectors, enterprise search and MCP as feature approvals.

### `docs/tools/google-gemini.md`

Use section 7.4. Distinguish personal Gemini Apps, work/school protected use, Workspace-integrated features and Vertex AI/API.

### `docs/tools/microsoft-copilot.md`

Use section 7.5. Name the Copilot product on every claim. Add an “oversharing readiness” check before Microsoft Graph grounding.

### `docs/tools/notion-ai.md`

Use section 7.6. Expand beyond drafting to search, meeting notes and agents. Check workspace permissions before AI access.

### `docs/tools/perplexity.md`

Use section 7.7. Make source verification the dominant workflow. Separate consumer, enterprise and action/Computer features.

### `docs/tools/canva-ai.md`

Use section 7.8. Add synthetic beneficiary imagery, brand assets, app integrations, output rights and accessibility.

### `docs/tools/adobe-firefly.md`

Use section 7.9. Distinguish Adobe from partner models and limit any indemnity statement to the documented plan/model/terms.

**Gate for all eight:** verify every provider URL and live page within 14 days of publication; product owner reviews configuration.  
**Status:** Ready, volatile.

## 8.6 Templates, learning and research

### `docs/templates.md`

Replace the placeholder with downloads/previews for the templates in section 12. Each template should say who owns it, when to use it, what it does not replace and when to seek specialist help.

**Status:** Ready after templates are created.

### `docs/learning-paths/index.md`

Publish six paths:

| Audience | Minimum route | Completion evidence |
|---|---|---|
| All staff and volunteers | Before You Paste → incidents → relevant task page | short scenario check |
| Managers/tool owners | above + approval → DPIA triage → monitoring | assessed use case |
| Trustees/leaders | governance → ADM → safeguarding → board questions | recorded board discussion |
| DPO/IG | data lifecycle → DPIA → rights → incidents → provider contracts | reviewed assessment |
| Safeguarding/service leads | beneficiary services → meetings → incidents → human escalation | tabletop scenario |
| Fundraising/comms | fundraising → public content → synthetic media → accessibility | reviewed campaign exercise |
| IT/security | account plans → agents/connectors → cyber → incident containment | disable/restore exercise |

Training should be role-based, refreshed after material changes and reinforced by examples—not a one-off policy acknowledgement.

**Status:** Ready.

### `docs/research-and-community/index.md`

Add:

- evidence hierarchy and source-acceptance rules;
- how corrections are triaged;
- contributor declaration of interests;
- no submission of confidential or personal case material;
- reproducibility expectations for tests;
- open questions and named research priorities;
- editorial independence from vendors;
- archive and superseded-claim policy.

**Status:** Ready.

## 8.7 Updates and roadmap

### `docs/updates/index.md`

Add filters/categories: law/regulator, charity practice, security, tools, corrections. Each update should show **what changed, pages affected, action required, evidence, owner, next review**.

### `docs/updates/2026-07.md`

Add the material findings from this pack: DUAA qualification; final ADM guidance pending; tool approval unit; partner-model and agent changes; new safeguarding/service and HR priorities; 2026 accessibility and transcription sources.

### `docs/updates/changelog.md`

Separate editorial changes from risk/material changes. Link each material change to a claim ID and page.

### `docs/updates/roadmap.md`

Recommended sequence:

1. incidents, privacy/data lifecycle and tool approval;
2. safeguarding/beneficiary services, meetings, recruitment and fundraising;
3. templates and learning paths;
4. plan-specific tool reviews;
5. finance/fraud, volunteers, research, accessibility and code;
6. automated tests for stale sources and missing review dates.

**Status:** Ready.

## 8.8 About, FAQ, glossary, contact, accessibility and privacy

### `docs/about/index.md`

Add editorial governance: who owns the site, evidence policy, review cadence, conflicts/funding, scope/jurisdiction, correction route and disclaimer. Avoid claims of completeness.

### `docs/about/faq.md`

Keep the six current answers and add:

- Does “not used for training” mean safe?
- Is consent required for AI meeting notes?
- Can AI shortlist applicants or grant applications?
- Can we use AI with children's or safeguarding information?
- Must AI-generated content be labelled?
- What if a connector can see all my files?
- When do we need a DPIA?
- Does human review remove all risk?
- What should I do if an AI gives harmful advice?
- Can volunteers use their own AI accounts?
- Can we use AI-generated images of beneficiaries?
- How often should a tool approval be reviewed?

Each answer should link to the full guide, not become a mini legal page.

### `docs/about/glossary.md`

Add: Article 6 lawful basis; Article 9 condition; controller; processor; subprocessor; personal-data breach; special-category data; criminal-offence data; profiling; solely automated decision; legal or similarly significant effect; data subject; data flow; model; foundation model; retrieval-augmented generation; hallucination; grounding; training; inference; fine-tuning; system prompt; plugin/app; agent; human-in-the-loop; synthetic data; anonymisation; international transfer; retention; red teaming.

### `docs/about/contact.md`

Provide separate routes for correction, contribution, incident/security disclosure, accessibility and privacy rights. Warn users not to include personal, confidential or safeguarding details in a public issue or general contact form. Publish expected response windows only if the operator can meet them.

### `docs/accessibility/index.md`

Populate with:

- WCAG 2.2 AA aim and known scope;
- keyboard, focus, headings, landmarks, contrast, reflow, zoom, link purpose and form errors;
- transcripts/captions and text alternatives;
- plain language and cognitive accessibility;
- automated plus manual and assistive-technology testing;
- AI-specific validation: captions, translation, alt text, summaries and synthetic voice are human-checked;
- known issues, third-party limitations, request-an-alternative route and response target;
- date and method of last audit.

Do not call the site “compliant” from an automated scan alone.

### `docs/privacy/index.md`

First complete a data inventory. The page should then accurately cover:

- controller identity and contact;
- hosting/security logs;
- analytics and cookies;
- search;
- contact/correction/contribution forms and email;
- mailing lists/updates;
- embedded media and external links;
- GitHub or other contribution platform;
- purposes, lawful bases and categories;
- recipients/processors and international transfers;
- retention;
- individual rights and complaint route;
- children if relevant;
- automated decisions, if any;
- document changes.

If the public site itself has no generative-AI feature, say so plainly. If it later adds search, chat or content personalisation, reassess before launch.

**Specialist gate:** actual technical owner and DPO/privacy adviser.  
**Status:** Blocked on factual data inventory.

---

# 9. Recommended new information architecture

Do not add every page to the top navigation. Use section landing pages and keep the first-level choices small.

## 9.1 New pages to create

### AI and data protection

1. `lawful-basis-and-transparency.md`
2. `special-category-children-and-vulnerability.md`
3. `individual-rights.md`
4. `suppliers-transfers-and-contracts.md`
5. `retention-security-and-breaches.md`

### Everyday charity work

1. `communications-and-public-content.md`
2. `beneficiary-services-and-chatbots.md`
3. `safeguarding.md`
4. `recruitment-and-hr.md`
5. `volunteers.md`
6. `finance-grants-and-fraud.md`
7. `research-and-evaluation.md`
8. `translation-accessibility-and-inclusion.md`
9. `website-code-and-analytics.md`

### Governance

1. `ai-policy-and-risk-ownership.md`
2. `trustee-briefing-and-assurance.md`
3. `supplier-contracts-and-procurement.md`
4. `monitoring-audit-and-change-control.md`

### Tools

1. `meeting-notetakers.md`
2. `research-and-search-tools.md`
3. `coding-assistants.md`
4. `image-audio-and-video-tools.md`

The functional comparison pages should explain common risk across a category; provider pages should supply volatile plan evidence.

## 9.2 Suggested navigation

- **Start here**
  - Before You Paste
  - If something went wrong
- **Use AI for a task**
  - Everyday-work hub and child pages
- **Protect people and data**
  - data protection, safeguarding, ADM, DPIA
- **Approve and govern AI**
  - trustees, policy, tools, suppliers, agents, monitoring
- **Check a tool**
  - functional comparisons and provider pages
- **Put it into practice**
  - templates, learning paths, research and updates

---

# 10. Editorial pattern for every guidance page

Use the same compact anatomy:

1. **One-sentence answer.** What the reader should do.
2. **Who this is for.** Role and jurisdiction.
3. **Why it matters.** Human outcome, not just compliance.
4. **Green / Amber / Red examples.** Classify use cases.
5. **Before you start.** Exact checklist.
6. **During use.** Data, verification and human controls.
7. **Afterwards.** record, retention, monitoring and deletion.
8. **Ask for help when.** Named roles and triggers.
9. **If something goes wrong.** Direct incident link.
10. **Sources and status.** primary sources, checked date, review date, jurisdiction, interim/qualified flags.

Avoid long prose before the action. Put legal nuance in expandable detail where the publishing system permits it, without hiding the rule a person needs.

---

# 11. Ready-to-use content blocks

## 11.1 Approved tool does not mean approved use

> An approved AI service is approved only for the accounts, features, purposes and information recorded in your charity's approval. A new connector, agent, model, meeting feature or data source may need a fresh check. If the screen, plan or settings do not match the approval record, stop and ask the tool owner.

## 11.2 Meaningful human review

> Human review is meaningful only when the reviewer understands the decision and the AI's limits, can see the relevant evidence, has enough time, is authorised to disagree, and can change or stop the outcome. A quick approval click or routine acceptance is not meaningful oversight.

## 11.3 Citations

> Treat an AI citation as a lead, not proof. Open the original source; check that it exists, is authoritative and current, and supports the exact sentence. Record the source you verified—not just the generated answer.

## 11.4 Synthetic people and stories

> Do not invent a beneficiary, quotation or testimonial and present it as real. Synthetic images and composite stories can still mislead, stereotype or resemble a real person. Use them only where lawful, ethical, appropriately disclosed and consistent with the charity's safeguarding and communications standards.

## 11.5 Mistaken disclosure

> Stop using the conversation or agent. Do not hide the mistake or destroy evidence. Tell the charity's incident contact immediately, identify the exact account and feature, record what was exposed and who may have access, and follow instructions on deletion, credential changes, provider contact and notification.

## 11.6 Small-charity proportionate approach

> Proportionate does not mean informal or undocumented. A small charity can use a short approval form, one named owner, a limited tool list, simple traffic lights and a combined incident route. Apply more depth where AI affects vulnerable people, sensitive information, money, rights or access to services.

## 11.7 “Not used for training”

> A no-training commitment is useful, but it answers only one question. You still need to check retention, human access, subprocessors, security, transfers, deletion, connectors, output risk, lawful purpose and your own settings.

---

# 12. Template specifications

## 12.1 One-page AI use proposal

Fields:

- requester, owner and date;
- problem and intended outcome;
- why AI is needed;
- people affected;
- exact product/plan/model/feature;
- data sources and classification;
- output/action and human decision;
- connectors/third parties;
- Green/Amber/Red rationale;
- DPIA/safeguarding/equality/security screens;
- pilot boundaries and success/harm measures;
- decision, conditions, expiry and reviewers.

## 12.2 Tool and feature approval record

Use all fields in section 7.1 plus contract links, material settings evidence, permitted user groups, training requirement, incident contact, deletion/offboarding test, change triggers and retirement record.

## 12.3 AI-use register

Minimum columns:

| Field | Example |
|---|---|
| Use ID | AI-USE-014 |
| Owner | Fundraising Director |
| Purpose | First draft of generic appeal variants |
| Tool approval | TOOL-003 / named Business workspace / no connectors |
| Data ceiling | Public approved campaign facts only |
| Affected people | Prospective donors; beneficiaries represented in content |
| Human control | Communications editor verifies and approves |
| Screens | DPIA no; safeguarding review yes |
| Decision | Approved with conditions |
| Review trigger/date | campaign change; 2026-10-12 |

## 12.4 DPIA screening form

Include purpose, people, data, scale, systematic monitoring/evaluation, significant decision, vulnerability, innovation, matching/invisible processing, service denial, connector/action scope, existing controls, screen outcome, reasons, owner and review trigger.

## 12.5 Meeting transcription assessment

Include purpose/necessity, lawful basis, likely sensitive topics, participants/power imbalance, exact tool/data flow, notice and alternative, access, accuracy owner, sharing, retention/deletion, minutes relationship, incident route and approval.

## 12.6 Human-review record

Include decision/output, reviewer competence and authority, evidence reviewed, checks performed, changes/override, uncertainty, effect on person, communication/challenge route, final owner and date.

## 12.7 AI incident log

Include time detected/awareness, reporter, system/account/feature, data and people, connector/action, containment, evidence preserved, provider contact, privacy-risk assessment, safeguarding/cyber/fraud/content assessment, notifications and deadlines, decision reasons, remediation, affected approvals, lessons and closure.

## 12.8 Supplier questionnaire

Ask for roles, processing purposes, training/improvement, human review, retention/deletion/backups, security, incident notice, subprocessors, international transfers, rights support, model/providers, connectors/actions, logging, SSO/MFA/RBAC, certifications and test evidence, accessibility, IP terms, change notice, service continuity, export and exit.

## 12.9 Trustee assurance dashboard

Quarterly or proportionate fields:

- active and pilot uses by risk tier;
- uses affecting beneficiaries/rights;
- new models/connectors/agents;
- training completion;
- incidents, near misses, complaints and overrides;
- overdue approvals/DPIAs;
- supplier/material-term changes;
- measured benefits and harms;
- decisions required from trustees.

## 12.10 Content verification checklist

- facts and original sources;
- dates, names, calculations and quotations;
- permissions and confidentiality;
- copyright/trade marks/privacy/defamation;
- equality, stereotypes and representation;
- synthetic-content disclosure decision;
- accessibility and alternative formats;
- qualified reviewer where specialist content;
- final human owner and version.

---

# 13. Claim register: highest-priority publishable claims

| ID | Claim | Status | Source | Review |
|---|---|---|---|---:|
| LAW-01 | UK data-protection rules apply when AI processes personal data; AI does not displace the ordinary principles | Publishable | ICO AI guidance | 6 months |
| LAW-02 | Development and deployment purposes may need separate lawful-basis analysis | Publishable | ICO lawfulness in AI | 6 months |
| LAW-03 | Pseudonymised data remains personal data where re-identification is possible with additional information | Publishable | ICO guidance | 6 months |
| LAW-04 | DPIA is required before processing likely to result in high risk | Publishable | ICO DPIA guidance | 6 months |
| LAW-05 | ICO consultation is required before starting if high residual risk cannot be mitigated | Publishable | ICO DPIA guidance | 6 months |
| LAW-06 | A notifiable personal-data breach should normally be reported within 72 hours of awareness | Publishable with threshold qualification | ICO breach guidance | 6 months |
| LAW-07 | DUAA changed the UK ADM framework; wider principles/rights still apply | Publish with qualification | Government and ICO | On final ICO guide |
| LAW-08 | Final updated ICO ADM guidance was expected winter 2026 at cut-off | Volatile/interim | ICO plan | Monthly |
| LAW-09 | There is no general UK duty to label every AI-generated work at cut-off | Publish with scope/date | UK government copyright/AI report | 3 months |
| GOV-01 | Trustees remain responsible for charity decisions involving AI | Publishable | Charity Commission | 6 months |
| GOV-02 | Good trustee decisions require adequate information, relevant factors and conflict management | Publishable | CC27 | 12 months |
| SAFE-01 | Trustee safeguarding duties cover online activity and people connected with the charity | Publishable | Charity Commission | 6 months |
| FUND-01 | Charitable-purpose soft opt-in is conditional, not blanket marketing permission | Publishable with details linked | Fundraising Regulator / ICO | 6 months |
| CYB-01 | Agentic AI adds risks because it can access systems and act, including on untrusted instructions | Publishable | NCSC | 3 months |
| ACC-01 | WCAG 2.2 is the current stable W3C Recommendation; WCAG 3 remains draft | Publishable as dated | W3C | 6 months |
| TOOL-01 | Product safety depends on plan, feature, configuration, data and purpose | Editorial synthesis | Provider primary docs + ICO/NCSC | 3 months |
| OAI-01 | OpenAI says business-product data is not used to train by default | Plan-qualified | OpenAI | 3 months |
| ANT-01 | Anthropic says commercial-product data is not used for training by default | Plan-qualified | Anthropic | 3 months |
| GOO-01 | Google says eligible work/school Gemini chats/files are not human-reviewed or used to improve generative AI models | Plan-qualified | Google | 3 months |
| MS-01 | Microsoft says Microsoft 365 Copilot prompts/responses/Graph data are not used to train foundation LLMs | Product-qualified | Microsoft | 3 months |
| NOT-01 | Notion AI now includes meeting notes, enterprise search and action-capable agents | Volatile | Notion | 3 months |
| PER-01 | Perplexity Enterprise exposes admin controls for sharing, connectors, providers, retention and logs | Plan-qualified | Perplexity | 3 months |
| CAN-01 | Canva has admin controls for Magic features; exact availability must be checked | Plan-qualified | Canva | 3 months |
| ADO-01 | Some Firefly enterprise workflows expose partner models with distinct data flows and coverage | Plan/model-qualified | Adobe | 3 months |

---

# 14. Review gates before publication

## 14.1 Data-protection review

Required for lawful basis, special-category/criminal-offence data, children, ADM, DPIA, monitoring, rights, breach thresholds, supplier roles/transfers and privacy notices.

## 14.2 Safeguarding/service review

Required for beneficiary chatbots, crisis or wellbeing content, children's use, disclosures, translation of safety-critical information, eligibility and any system that may deter human contact.

## 14.3 Employment/equality review

Required for recruitment, monitoring, performance, grievance/discipline, redundancy, emotion/personality inference and workforce profiling.

## 14.4 Procurement/security review

Required for agents, write-access connectors, credentials, payment capability, public deployment, high-volume data, new subprocessors/model providers and weak exit terms.

## 14.5 Editorial and lived-experience review

Include disabled people and relevant service users when content or systems affect them. Do not treat professional/legal review as a substitute for usability, accessibility and lived experience.

---

# 15. Source register

## Regulators and law

- [ICO: Guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/)
- [ICO: Data protection by design and default](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/data-protection-by-design-and-by-default/)
- [ICO: Lawfulness in AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-lawfulness-in-ai/)
- [ICO: Transparency in AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-transparency-in-ai/)
- [ICO: Fairness in AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-fairness-in-ai/)
- [ICO: Accuracy and statistical accuracy](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-do-we-need-to-know-about-accuracy-and-statistical-accuracy/)
- [ICO: AI accountability and governance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/what-are-the-accountability-and-governance-implications-of-ai/)
- [ICO: Controllers and processors](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/controllers-and-processors/controllers-and-processors/how-do-you-determine-whether-you-are-a-controller-or-processor/)
- [ICO: Contracts and third parties audit framework](https://ico.org.uk/for-organisations/advice-and-services/audits/data-protection-audit-framework/toolkits/artificial-intelligence/contracts-and-third-parties/)
- [ICO: Security and integrity audit framework](https://ico.org.uk/for-organisations/advice-and-services/audits/data-protection-audit-framework/toolkits/artificial-intelligence/information-security-and-integrity/)
- [ICO: DPIA trigger](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/)
- [ICO: How to do a DPIA](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/how-do-we-do-a-dpia/)
- [ICO: ADM and profiling rights](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/rights-related-to-automated-decision-making-including-profiling/)
- [ICO: Technology guidance plan](https://ico.org.uk/about-the-ico/what-we-do/our-plans-for-new-and-updated-guidance/technology/)
- [ICO: Personal-data breaches](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/)
- [ICO: Children and the UK GDPR](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/)
- [ICO: Special-category data](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/special-category-data/)
- [ICO: What the DUAA means for organisations](https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/)
- [UK government: DUAA data-protection and privacy changes](https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes)
- [EHRC: equality impact of AI](https://www.equalityhumanrights.com/guidance/assessing-equality-impact-ai-based-technology-six-discussion-points)
- [ASA: AI disclosure in advertising](https://www.asa.org.uk/news/disclosure-of-ai-in-advertising-striking-the-balance-between-creativity-and-responsibility.html)

## Charity governance, fundraising and safeguarding

- [Charity Commission: charities and AI](https://charitycommission.blog.gov.uk/2024/04/02/charities-and-artificial-intelligence/)
- [CC3: The essential trustee](https://www.gov.uk/government/publications/the-essential-trustee-what-you-need-to-know-what-you-need-to-do-cc3/the-essential-trustee-what-you-need-to-know-what-you-need-to-do)
- [CC27: Decision-making for charity trustees](https://www.gov.uk/government/publications/decision-making-for-charity-trustees-cc27/decision-making-for-charity-trustees)
- [CC8: Internal financial controls](https://www.gov.uk/government/publications/internal-financial-controls-for-charities-cc8)
- [Charity Commission: safeguarding and protecting people](https://www.gov.uk/guidance/safeguarding-and-protecting-people-for-charities-and-trustees)
- [Charity Commission: reporting a serious incident](https://www.gov.uk/guidance/how-to-report-a-serious-incident-in-your-charity)
- [CC47: Raising a concern](https://www.gov.uk/government/publications/raising-a-concern-with-the-charity-commission-cc47/raising-a-concern-with-the-charity-commission-cc47)
- [Fundraising Regulator: AI in fundraising](https://www.fundraisingregulator.org.uk/about-fundraising/resources/guidance-using-artificial-intelligence-fundraising)
- [Fundraising Regulator: data privacy](https://www.fundraisingregulator.org.uk/about-fundraising/resources/data-privacy-and-fundraising)
- [Fundraising Regulator: charitable soft opt-in](https://www.fundraisingregulator.org.uk/about-fundraising/resources/charitable-purposes-soft-opt-and-fundraising-marketing)
- [Charity Governance Code 2025](https://www.charitygovernancecode.org/wp-content/uploads/2025/10/CCG_English_FINAL_highres.pdf)
- [Charity Digital Code of Practice 2025](https://charitydigital.org.uk/topics/the-charity-digital-code-of-practice-2025-12116)

## Security, accessibility and research

- [NCSC: agentic AI](https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai)
- [NCSC: AI and cyber security](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know)
- [NCSC: Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit)
- [NCSC: small-organisation guide](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security)
- [UK AI Cyber Security Code of Practice](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai)
- [UK Data and AI Ethics Framework](https://www.gov.uk/government/publications/data-ethics-framework/data-and-ai-ethics-framework)
- [W3C: WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [W3C: WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [UKRIO: AI in research](https://ukrio.org/ukrio-resources/ai-in-research/)
- [UK government: copyright and AI report](https://www.gov.uk/government/publications/report-and-impact-assessment-on-copyright-and-artificial-intelligence/report-on-copyright-and-artificial-intelligence)

Provider sources are listed directly under each tool in section 7 so that product claims remain visibly tied to the correct service.

---

# 16. Implementation handoff for Codex

Use this prompt with the site repository and this research pack:

> Update the AI Safe Charity Index from the attached page-level research pack. Preserve the concise, practical tone and the five-step Before You Paste concept. Work page by page in the priority order in section 8. Do not convert research notes into stronger legal claims. Every substantive claim must link to a primary source and have internal metadata for jurisdiction, checked date, volatility and next review. Treat product approval as plan + account + model + feature + configuration + data + purpose. Add the common tool-page footer and do not hard-code volatile prices. Mark automated-decision guidance interim until the ICO's final update. Do not invent privacy facts: create a clearly marked data-inventory task and leave unverified fields unpublished. Add review gates for data protection, safeguarding, employment/equality and security/procurement. Create templates from section 12, task pages from sections 6 and 9, and role-based learning paths from section 8. Test internal links, heading hierarchy, keyboard access, colour-independent traffic-light labels, mobile layout and source URLs. Produce a change report listing pages changed, claims added, claims qualified, review gates remaining and any source that could not be verified.

## Definition of done

- all 35 existing pages have the section 8 action applied;
- the Critical new pages in section 9 exist;
- no placeholder remains except privacy facts explicitly blocked on the real data inventory;
- every tool claim is plan/feature-qualified and dated;
- every page has a clear action, escalation and incident route;
- templates are usable, not just listed;
- accessibility is tested manually as well as automatically;
- source and claim metadata support future review;
- named specialist gates are resolved or visibly marked before publication.

---

# 17. Final editorial judgement

The site's distinctive value should not be another list of AI risks or product summaries. It should be a practical bridge between a moment of work—pasting a case summary, recording a meeting, drafting an appeal, enabling a connector—and the charity's real duties to people.

The core promise can be:

> **Know what you can do now, when to pause, who must decide, and what evidence to keep.**

That promise is supportable if the site remains task-led, plan-specific, primary-source-backed, explicit about uncertainty and disciplined about review dates.
