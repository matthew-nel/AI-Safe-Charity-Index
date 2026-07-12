---
title: Practical Charity AI Use Cases
description: Evidence-led scenarios illustrating practical AI use across UK charities, with risk, controls and Green/Amber/Red assessment.
research_date: 2026-07-12
last_updated: 2026-07-12
suggested_review_date: 2027-07-12
jurisdiction: United Kingdom
audience: All UK charity sizes
status: Research pack
---

# Practical Charity AI Use Cases

## Executive summary

UK charities are already using AI for a wide range of practical tasks, particularly in fundraising, administration, governance and communications, while cautiously exploring service-delivery applications such as chatbots, transcription and demand forecasting.[web:12][web:24][web:33][web:25][web:26] Documented examples and sector guides show that most current uses are decision-support and productivity tools with strong human oversight, rather than fully automated systems making consequential decisions about beneficiaries.[web:23][web:30][web:32][web:29]

This pack develops 15 detailed use cases grounded in UK charity practice and sector guidance, including fundraising copy, board-paper summaries, volunteer communications, advice chatbots, donor segmentation, recruitment support, social media content, beneficiary-feedback analysis, sensitive meeting transcription, campaign image generation, meeting assistants, CRM and shared-drive connectors, grant research, frontline AI-generated advice and translation.[web:23][web:25][web:26][web:31][web:33][web:29] Each scenario sets out objectives, data, risks, Green/Amber/Red classification, controls and approval requirements, to support proportionate decisions across different charity sizes.

## Scope

This pack focuses on practical, operational AI use cases that UK charities either already use or are actively considering, based on documented examples, sector guidance and realistic composite scenarios.[web:23][web:24][web:25][web:26][web:30][web:32][web:28][web:33] It does not attempt to catalogue all possible AI applications; instead it concentrates on 15 representative scenarios that cut across fundraising, governance, service delivery, safeguarding, HR, volunteer coordination, research and internal data connectors.

Each use case describes:

- Scenario and objective.
- Charity type and size.
- People involved and affected.
- Information being processed, including personal and special-category data.
- Potential benefits.
- Privacy, safeguarding, accuracy, bias, security, connector, IP and trust risks.
- Relevant UK law and guidance at a high level.
- Green/Amber/Red classification with justification.
- Minimum and stronger controls.
- Human-review and approval requirements.
- Whether DPIA screening may be appropriate.
- Safer alternatives.
- Conditions under which the classification could change.

## Research questions

1. What practical AI use cases are UK charities already implementing across fundraising, governance, communications and service delivery?
2. How do these use cases differ in risk profile depending on data sensitivity, beneficiary involvement, automation and decision impact?
3. Which scenarios are relatively low risk (Green) with proportionate controls, which require additional safeguards and approvals (Amber), and which are unsuitable in their proposed form (Red)?
4. What minimum and stronger controls are appropriate for each scenario, and how do they vary by charity size and context?
5. When might DPIA screening or a full DPIA be appropriate for these use cases?
6. How should trustees, safeguarding leads and data-protection leads be involved in approving and monitoring higher-risk AI uses?

## Method

### Source identification

Use cases were developed by combining:

- Documented case studies from UK charities using AI for fundraising, donor analytics, service delivery, transcription and governance.[web:23][web:25][web:26][web:30][web:32]
- Sector guides on AI use cases for charities, including Charity Digital, NCVO, CharityComms and Evolve Catalyst.[web:24][web:33][web:34][web:29]
- Practical examples from charity-focused platforms and consultancies outlining AI applications such as transcription, grant writing, reporting, donor profiling and AI agents.[web:28][web:31]
- Adoption data and use-case categories from the Charity Digital Skills Report AI section.[web:12]

Where a scenario is based directly on a published case study, it is labelled as a documented case; where it synthesises common patterns or guidance, it is labelled as a composite scenario; hypothetical teaching scenarios are used only where necessary to illustrate boundary conditions and are clearly labelled.[web:23][web:30][web:32][web:28][web:31]

### Period and jurisdiction

Sources cover 20232026, with emphasis on 20242026 when AI use in charities accelerated and sector bodies published more guidance.[web:12][web:24][web:29][web:33] The primary jurisdiction is the United Kingdom, though some case studies (e.g. international conservation) are included only where their lessons (e.g. data governance, testing, human oversight) are transferable.[web:26]

Legal references (UK GDPR, Data Protection Act 2018, Equality Act 2010, Charity law, Fundraising regulation, safeguarding duties) are handled at a high level in this pack; detailed legal analysis appears in topic-specific packs.

### Evidence hierarchy and limitations

- Sector case studies and adoption guides (Charity Digital, DSC, NCVO, Media Trust, Third Sector Lab, Evolve Catalyst, Pragmatiq, Plinth) provide most practical examples.[web:23][web:25][web:26][web:30][web:32][web:28][web:29][web:31]
- Academic and technical material on AI is referenced indirectly where it informs risk assessments (e.g. hallucinations, bias, predictive analytics).
- Vendor claims from platforms and consultancies are treated cautiously and used mainly to illustrate practical workflows, not as independent evidence of safety or effectiveness.[web:28][web:31][web:29]

Limitations include:

- Limited publicly documented AI incidents in UK charities; some risks are extrapolated from other sectors (e.g. healthcare, conservation) and general AI literature.[web:26]
- Limited formal evaluation data for many tools; impact claims are often based on early case studies.
- Few published examples explicitly detail DPIA practice or safeguarding sign-off; recommended controls here are informed by data-protection and safeguarding principles rather than direct evidence.

## Key findings

1. UK charities are already using AI across the full spectrum of back-office, fundraising, governance and some service-delivery tasks, with the safest current uses focused on internal drafting, summarisation, data extraction and grant/report support.[web:12][web:24][web:33][web:23][web:32][web:28]
2. Documented high-impact uses (e.g. donor analytics at Prostate Cancer UK, sentiment analysis at Parkinson	2s UK, habitat mapping in conservation, camera-trap analysis at WWF) show AI	2s potential for complex analysis, but these projects involve specialist partners, structured data and robust governance.[web:23][web:25][web:26][web:30][web:29]
3. Service-delivery use (chatbots, predictive risk models, triage) remains limited and cautious, with charities emphasising human oversight, clear boundaries and data-protection safeguards.[web:25][web:26][web:33]
4. Many practical use cases can be classified Green for appropriately anonymised, internal, non-sensitive data with clear human review, but the classification quickly shifts to Amber or Red where identifiable beneficiary data, safeguarding contexts or automated decisions about people are involved.
5. DPIA screening is advisable for AI uses involving systematic profiling, special-category data, children, adults at risk, or public-facing systems that influence access to services, while full DPIAs may be required for high-impact automated decisions.

## Detailed research

The following sections present 15 use cases. Each is summarised, then analysed.

---

## Use case 1: Drafting fundraising copy

### Scenario

A small health charity uses generative AI to draft fundraising emails, appeal pages and social-media posts based on existing campaign briefs, beneficiary stories (already anonymised and approved) and impact data.[web:23][web:30][web:24][web:29] Staff edit outputs before sending or publishing.

- **Charity type and size:** Small health charity (income 250k1m).
- **Objective:** Save time on drafting fundraising copy while improving clarity and consistency.
- **People involved:** Fundraising officer, communications staff, manager approving appeals.
- **People affected:** Supporters, donors, beneficiaries indirectly (through representation in stories).
- **Information processed:** Internal campaign briefs, anonymised case studies, impact statistics, non-sensitive supporter segments.
- **Personal data:** Minimal; core drafting is based on internal documents and anonymised stories.
- **Special-category data:** Not entered directly; beneficiary stories are anonymised and approved.

### Potential benefits

- Time savings on copywriting, particularly in small teams.[web:30][web:29]
- More consistent tone and structure across appeals.
- Ability to test and adapt messages quickly.

### Risks

- **Privacy:** Risk if staff paste identifiable beneficiary details into prompts (e.g. names, health information).
- **Accuracy:** AI may introduce incorrect statistics or exaggerations if prompts are vague or mix sources.
- **Bias:** Stereotyped or stigmatising representations of beneficiaries or communities.
- **Trust:** Donors may be concerned if appeals feel generic or misleading.
- **IP:** Use of copyrighted text or images in prompts needs care.

### Relevant law and guidance (high level)

- UK GDPR (lawful basis for processing supporter data, transparency in fundraising communications).
- Fundraising Regulator Code of Fundraising Practice (truthfulness, no misleading claims).
- Copyright and IP considerations for content sources.

### Classification

- **Suggested rating:** **Green** if used for drafting from anonymised and approved material with human review.

### Minimum controls

- Clear rule: no identifiable beneficiary data, special-category data or unapproved stories in AI prompts.
- Require human review and sign-off for all AI-generated fundraising copy.
- Maintain source-of-truth data (e.g. impact stats) outside AI tools and cross-check numbers.

### Stronger controls

- Maintain a log of campaigns where AI was used, noting data sources and reviewers.
- Integrate guidance on tone, bias and representation into prompting and review checklists.

### Approval and DPIA

- For small charities: manager sign-off; no DPIA needed if no personal data is processed.
- For larger, data-rich fundraising operations using segmentation: DPIA screening if AI is combined with profiling.

### Safer alternatives / conditions for change

- Classification could shift to Amber if staff regularly use donor-level data or unfiltered case notes in prompts.
- For high-stakes appeals (e.g. crisis fundraising), additional review by senior staff or trustees may be appropriate.

---

## Use case 2: Trustee summarising board papers

### Scenario

A trustee of a medium-sized social-care charity uses an AI meeting assistant or summarisation tool (e.g. Microsoft Copilot or similar) on organisation-provided accounts to summarise long board papers and Charity Commission guidance, creating a digest they can read on limited time.[web:33][web:24] The tool accesses documents already stored in the charity	2s SharePoint and Teams environment.

- **Charity type and size:** Medium-sized social-care charity.
- **Objective:** Help trustees understand complex board papers and regulatory guidance more quickly.
- **People involved:** Trustees, senior leadership team.
- **People affected:** Organisation as a whole; beneficiaries indirectly through governance quality.
- **Information processed:** Internal board papers, strategy documents, risk registers, regulator guidance.
- **Personal data:** Could include anonymised case examples and high-level staff information.
- **Special-category data:** Should not be necessary; if present in papers, extra caution needed.

### Potential benefits

- Improved trustee understanding of complex material, supporting better governance.[web:33][web:32]
- Reduced time spent manually summarising documents.
- Increased engagement from time-poor trustees.

### Risks

- **Privacy:** If confidential or sensitive data is processed by connectors without appropriate controls.
- **Accuracy:** Summaries may omit important nuance, particularly about risks and caveats.
- **Bias:** AI may over-emphasise certain themes or understate uncertainty.
- **Governance:** Trustees may over-trust summaries and miss critical detail.

### Relevant law and guidance

- Charity law and trustee duties (duty of care, decision-making based on adequate information).
- UK GDPR and data-protection obligations for internal data access.

### Classification

- **Suggested rating:** **Green**, where the tool is an approved organisational product with appropriate configuration and no new external data sharing.

### Minimum controls

- Use only organisation-approved accounts and tools; no personal consumer accounts.
- Ensure connectors respect existing access controls (least privilege).
- Explicitly treat AI summaries as aids, not replacements for reading key documents.

### Stronger controls

- Digital team or IT lead reviews configuration, logging and data-access patterns.
- Provide trustees with training on interpreting AI summaries and cross-checking key sections.

### Approval and DPIA

- Generally low-risk internal decision-support, unlikely to require DPIA beyond wider M365 deployment assessment.

### Safer alternatives / conditions for change

- Classification could shift to Amber if trustees rely on summarisation for decisions about complex safeguarding or data-protection issues, or if external tools with weaker privacy terms are used.

---

## Use case 3: Volunteer coordinator drafting rota messages

### Scenario

A micro community charity uses AI to draft rota reminders and thank-you messages to volunteers, based on a spreadsheet of volunteer names, roles and availability.[web:29][web:31] Messages are sent via email or messaging platforms after review.

- **Charity type and size:** Micro or small community organisation.
- **Objective:** Reduce time spent drafting routine communications and improve clarity.
- **People involved:** Volunteer coordinator, volunteers.
- **People affected:** Volunteers.
- **Information processed:** Volunteer names, roles, email addresses, shift details.
- **Personal data:** Yes (contact details and availability).
- **Special-category data:** Normally no.

### Potential benefits

- Time savings for staff; more consistent reminders and appreciation.
- Reduced risk of missed shifts due to clearer communication.

### Risks

- **Privacy:** Risk if volunteer data is pasted into consumer AI tools without appropriate safeguards.[web:29]
- **Accuracy:** Errors in dates or times could lead to rota confusion.
- **Trust:** Volunteers may feel communications are impersonal if not reviewed.

### Relevant law and guidance

- UK GDPR (lawful basis for processing volunteer data, transparency and secure processing).

### Classification

- **Suggested rating:** **Amber**, due to personal data usage and frequent temptation to use free consumer tools.

### Minimum controls

- Where possible, use AI tools integrated into secure organisational systems (e.g. email suite) rather than public chatbots.
- Avoid including sensitive information in prompts; only minimal schedule data.
- Maintain manual checks on dates and names before sending.

### Stronger controls

- Document AI use in volunteer management processes and explain to volunteers how their data is handled.
- For larger volunteer programmes, consider using specialised tools with clear DPAs and retention controls.

### Approval and DPIA

- DPIA screening may not be needed for basic communications, but data-protection lead should review any use of volunteer databases with third-party AI tools.

### Safer alternatives / conditions for change

- If staff regularly paste full volunteer lists into general-purpose, externally hosted AI tools, the classification should shift towards Red unless appropriate contracts and privacy controls exist.

---

## Use case 4: Advice charity considering a public chatbot

### Scenario

An advice charity considers implementing a public-facing AI chatbot on its website to answer basic questions about eligibility, opening times and how to get help, and to triage enquiries to the right service.[web:25][web:26][web:33][web:29] The chatbot would not provide detailed advice or act in emergencies.

- **Charity type and size:** Medium-sized advice charity.
- **Objective:** Improve access, reduce response times for basic queries, free staff time.
- **People involved:** Digital lead, advice managers, safeguarding lead, trustees.
- **People affected:** Service users, including potentially vulnerable people.
- **Information processed:** Visitor questions, simple eligibility criteria, signposting information; could include descriptions of personal situations.
- **Personal data:** Yes (queries may include identifiers or sensitive details).
- **Special-category data:** Likely, given advice contexts (health, financial difficulty, housing, domestic abuse).

### Potential benefits

- Improved access and responsiveness for straightforward queries.[web:25][web:33]
- Out-of-hours signposting and information.

### Risks

- **Safeguarding:** Risk that chatbot fails to recognise emergencies or high-risk situations; may give unsafe advice.
- **Privacy:** Sensitive details entered into the chatbot may be processed by third-party providers.[web:25][web:29]
- **Bias and exclusion:** Certain groups (e.g. people with low digital literacy, non-native speakers) may be poorly served.
- **Trust:** Users may assume responses are authoritative; incorrect information could cause harm.

### Relevant law and guidance

- UK GDPR and Data Protection Act 2018 (special-category data, lawful basis, DPIA requirements).
- Safeguarding law and sector guidance for advice services.
- Consumer protection and accuracy obligations for public information.

### Classification

- **Suggested rating:** **Amber** for carefully scoped chatbots limited to basic information and triage, with strong controls; **Red** if chatbot is expected to give detailed advice or replace human interactions in crisis contexts.

### Minimum controls

- Clear statement that chatbot does not provide advice, emergency support or safeguarding decisions.
- Strong escalation pathways to trained staff; prominent signposting to emergency help.
- Prohibit storage or training on chat logs without explicit data-protection review.

### Stronger controls

- Full DPIA before deployment, covering data types, risk of harm, fairness and user expectations.[web:26][web:25]
- Specialist safeguarding review and involvement in design.
- Technical and policy controls to limit information retention and access.

### Approval and DPIA

- Requires senior and trustee approval; DPIA likely mandatory given special-category data and beneficiary impact.

### Safer alternatives / conditions for change

- Consider static FAQs or guided triage forms as lower-risk alternatives.
- Classification could move towards Green if chatbot is strictly limited to non-personal questions (e.g. 	3What hours are you open?	4) and does not log conversations.

---

## Use case 5: Fundraiser using AI-assisted donor segmentation

### Scenario

A large national charity uses AI models integrated into its CRM to segment donors based on giving history, engagement and demographics, and to optimise campaign targeting and ask amounts.[web:22][web:23][web:29][web:31] Prostate Cancer UK	2s Christmas appeal and other examples show how such approaches can significantly increase ROI.[web:23][web:30][web:29]

- **Charity type and size:** Large national charity.
- **Objective:** Improve fundraising effectiveness through data-driven segmentation.
- **People involved:** Fundraising analysts, CRM team, data-protection lead.
- **People affected:** Supporters and donors.
- **Information processed:** Donation history, contact preferences, engagement metrics, potentially demographics.
- **Personal data:** Yes (supporter-level data).
- **Special-category data:** Normally no, but possible if campaigns relate to health, religion etc.

### Potential benefits

- Higher campaign ROI and improved donor retention.[web:23][web:29]
- More personalised and relevant communications.

### Risks

- **Privacy:** Risk of inappropriate profiling or intrusive targeting.
- **Discrimination:** Models may treat certain groups as more or less valuable in ways that reinforce inequality.[web:22][web:29]
- **Transparency:** Donors may be unaware of profiling and predictive analytics.

### Relevant law and guidance

- UK GDPR (profiling, transparency, right to object, fairness).
- Fundraising Regulator guidance on profiling and acceptable fundraising practice.

### Classification

- **Suggested rating:** **Amber**, due to profiling and personal data.

### Minimum controls

- Clear privacy notices explaining profiling and segmentation.
- Options for donors to opt out of profiling-based campaigns.
- Regular fairness and bias reviews of segmentation models.

### Stronger controls

- Data-protection impact assessment for large-scale profiling.[web:26][web:29]
- Involvement of ethics and equality leads in reviewing segmentation criteria.

### Approval and DPIA

- DPIA screening advisable; full DPIA if automated decisions materially influence donor treatment (e.g. exclusion from stewardship).

### Safer alternatives / conditions for change

- Classification could move closer to Green where models use aggregated, non-sensitive data, and decisions remain clearly under human control.

---

## Use case 6: HR team considering AI in recruitment or shortlisting

### Scenario

A medium-sized charity considers using AI tools to screen CVs and applications, score candidates against criteria and produce shortlists, potentially integrated into an ATS or external recruitment platform.[web:29][web:33] HR staff would then review recommendations.

- **Charity type and size:** Medium-sized multi-service charity.
- **Objective:** Reduce HR workload and improve consistency in shortlisting.
- **People involved:** HR team, hiring managers, applicants.
- **People affected:** Job applicants, existing staff indirectly.
- **Information processed:** CVs, application forms, potentially equality monitoring data.
- **Personal data:** Yes, including sensitive characteristics.
- **Special-category data:** Potentially (e.g. disability disclosed in applications).

### Potential benefits

- Faster shortlisting and more structured assessment.

### Risks

- **Bias and discrimination:** Strong risk of replicating or amplifying historical biases in recruitment.[web:29]
- **Transparency:** Applicants may not understand how AI influences decisions.
- **Legal risk:** Equality Act 2010 implications if AI contributes to discriminatory outcomes.

### Relevant law and guidance

- Equality Act 2010 (protected characteristics, discrimination).
- Employment law on fair recruitment.
- UK GDPR (automated decision-making about individuals).

### Classification

- **Suggested rating:** **Red** for fully automated shortlisting without robust fairness testing and human oversight; **Amber** for strictly decision-support tools where HR remains clearly in charge and fairness auditing is in place.

### Minimum controls

- Avoid fully automated rejection or progression decisions based purely on AI.
- Ensure all shortlisting decisions are reviewed and justified by humans.
- Document criteria and monitoring for fairness.

### Stronger controls

- Detailed fairness and impact analysis, including equality monitoring.
- Legal and specialist HR advice before deployment.

### Approval and DPIA

- Full DPIA required; trustee oversight recommended for significant AI involvement in recruitment.

### Safer alternatives / conditions for change

- Use AI only for supportive tasks (e.g. drafting job descriptions, summarising criteria) rather than scoring candidates.

---

## Use case 7: Communications officer creating social media content

### Scenario

A communications officer at a youth charity uses generative AI tools to draft social-media posts, captions and image ideas, based on programme updates, anonymised beneficiary quotes and campaign objectives.[web:24][web:33][web:29][web:28] They check tone, accuracy and safeguarding considerations before publishing.

- **Charity type and size:** Small or medium youth charity.
- **Objective:** Increase content output while maintaining quality.
- **People involved:** Communications staff, programme leads.
- **People affected:** Public audiences, supporters, beneficiaries indirectly.
- **Information processed:** Programme details, event information, anonymised stories.

### Potential benefits

- Time savings, increased posting frequency.[web:24][web:29]
- More consistent messaging aligned with campaigns.

### Risks

- **Accuracy:** Misstated numbers or promises.
- **Safeguarding and representation:** Unintended disclosure of identities or stereotypes.
- **IP:** Use of copyrighted imagery or phrases.

### Relevant law and guidance

- Charity branding and safeguarding guidance (e.g. no identifying photos of children without consent).
- Fundraising and advertising standards.

### Classification

- **Suggested rating:** **Green**, if data is anonymised and human review is robust.

### Minimum controls

- Clear rules on not entering identifying images or names into public AI tools.
- Mandatory fact-checking and safeguarding review.

### Stronger controls

- Use organisational AI tools (e.g. integrated into office suite) for drafting.
- Maintain style and safeguarding guidance for AI-assisted content.

### Approval and DPIA

- Generally low risk if no personal data is processed; no DPIA required for simple drafting.

---

## Use case 8: Service team summarising beneficiary feedback

### Scenario

A service team uses AI to summarise qualitative beneficiary feedback from surveys, feedback forms and group sessions, identifying themes and quotes for reporting and service design.[web:23][web:26][web:28][web:29] Data is anonymised before processing.

- **Charity type and size:** Medium advice or support charity.
- **Objective:** Turn large volumes of feedback into actionable insights.
- **People involved:** Service managers, evaluation staff.
- **People affected:** Beneficiaries.
- **Information processed:** Feedback text, ratings, anonymised demographics.
- **Personal data:** Removed before analysis; pseudonymised codes used if needed.

### Potential benefits

- More efficient analysis of qualitative data.[web:23][web:29]
- Better understanding of beneficiary needs and experiences.

### Risks

- **Re-identification:** Risk if data not properly anonymised.
- **Bias:** Overemphasis on frequent themes; marginalised voices underrepresented.

### Relevant law and guidance

- UK GDPR (data minimisation, anonymisation, analysis of feedback).

### Classification

- **Suggested rating:** **Green** where data is genuinely anonymised.

### Minimum controls

- Robust anonymisation; remove names, specific locations and identifiers.
- Human interpretation and challenge of AI-identified themes.

### Stronger controls

- Include beneficiary representatives in reviewing findings.
- Consider differential impacts across groups.

### Approval and DPIA

- Generally low risk; no DPIA needed if individual-level data is not processed.

---

## Use case 9: Staff member transcribing a sensitive meeting

### Scenario

A domestic-abuse service records a multi-agency safeguarding meeting (with consent) and uses an AI transcription tool to produce detailed minutes and action logs, stored in a secure case-management system.[web:28][web:26] The recording includes highly sensitive information.

- **Charity type and size:** Specialist safeguarding charity.
- **Objective:** Accurate record-keeping and action tracking.
- **People involved:** Safeguarding staff, multi-agency partners, beneficiaries discussed.
- **People affected:** Survivors, families, professionals.
- **Information processed:** Names, addresses, health and abuse details, risk assessments.
- **Personal data:** Yes, including special-category and criminal-offence data.

### Potential benefits

- More accurate records; better follow-up on actions.[web:28]
- Reduced administrative burden for staff.

### Risks

- **Privacy:** Serious risk if transcription provider retains or trains on this data.[web:29]
- **Security:** Data leakage from insecure systems.
- **Trust:** Survivors	2 confidence in confidentiality could be undermined.

### Relevant law and guidance

- UK GDPR and Data Protection Act 2018 (special-category and criminal data).
- Safeguarding and multi-agency information-sharing guidance.

### Classification

- **Suggested rating:** **Amber** if using an appropriately contracted, secure, non-training provider with strict controls; **Red** if using consumer tools without clear safeguards.

### Minimum controls

- Use only enterprise-grade transcription with clear DPAs, retention limits and no training on content.[web:29]
- Ensure recordings are stored and transmitted securely.

### Stronger controls

- DPIA before adopting transcription for safeguarding meetings.
- Explicit survivor-informed policies on recording and AI use.

### Approval and DPIA

- Full DPIA recommended; senior and trustee oversight.

### Safer alternatives / conditions for change

- Manual minute-taking, although resource-intensive, may be safer if appropriate AI tools cannot be procured.

---

## Use case 10: Charity generating or editing campaign images

### Scenario

A campaign team uses AI image-generation tools to create or edit visuals for social media and reports, based on anonymised concepts or stock-style prompts (e.g. 	3abstract illustration of community support	4).[web:24][web:34][web:29] They avoid synthetic depictions of real beneficiaries.

- **Charity type and size:** Any.
- **Objective:** Produce compelling visuals without extensive design capacity.
- **People involved:** Communications staff, designers, campaign leads.
- **People affected:** Public audiences, beneficiaries indirectly.
- **Information processed:** Prompt text; no personal images.

### Potential benefits

- Increased design capacity; more engaging visuals.[web:24][web:34]

### Risks

- **Misrepresentation:** Unrealistic images could mislead about beneficiary experiences.
- **Safeguarding:** Synthetic media of children or adults at risk may be misused.
- **IP:** Risk of breaching image licensing if real photos are uploaded.

### Relevant law and guidance

- Safeguarding and communications good practice on images and representation.
- Advertising standards, copyright.

### Classification

- **Suggested rating:** **Green** for abstract or generic imagery that does not depict identifiable individuals.

### Minimum controls

- No uploading of identifiable beneficiary photos to public image tools.
- Clear labelling of synthetic images where necessary.

### Stronger controls

- Internal design review of all AI-generated visuals for ethical representation.

### Approval and DPIA

- No DPIA needed for non-personal prompts; governance via communications policies.

---

## Use case 11: Team using an AI meeting assistant

### Scenario

A large charity uses AI meeting assistants integrated into Microsoft Teams or Zoom to produce summaries, action lists and follow-up emails after internal meetings.[web:33][web:32][web:28][web:29] Recordings are stored according to organisational policies.

- **Charity type and size:** Large multi-service charity.
- **Objective:** Reduce admin burden; improve follow-up.
- **People involved:** Staff teams, managers.
- **People affected:** Internal staff; beneficiaries indirectly where decisions relate to services.
- **Information processed:** Meeting audio, potentially including internal performance discussions and some beneficiary references.

### Potential benefits

- Time savings; clearer actions.[web:32]

### Risks

- **Privacy:** Internal sensitive information processed by vendors.[web:29]
- **Trust:** Staff discomfort if meetings are routinely recorded.

### Relevant law and guidance

- UK GDPR (employee data, internal communications).

### Classification

- **Suggested rating:** **Amber**, due to internal sensitivity and vendor processing.

### Minimum controls

- Transparent staff communication about recording and AI use.
- Vendor agreements covering retention, training and access.

### Stronger controls

- Restrict use for particularly sensitive meetings; manual minutes instead.

### Approval and DPIA

- DPIA screening advised as part of wider collaboration-tool assessments.

---

## Use case 12: Charity connecting AI to its CRM or shared drive

### Scenario

A medium charity considers deploying an AI assistant that can search across its CRM and shared drives to answer staff questions and draft documents, using connectors to systems such as SharePoint, Google Drive or a case-management platform.[web:31][web:33][web:29] This is a high-impact connector scenario.

- **Charity type and size:** Medium multi-service charity.
- **Objective:** Make internal knowledge more accessible; reduce duplication.
- **People involved:** Digital/data leads, IT, all staff.
- **People affected:** Beneficiaries, supporters and staff whose data or case records are stored.
- **Information processed:** Case notes, donor records, HR files, policies and guidance.
- **Personal data:** Yes, potentially extensive.

### Potential benefits

- Faster access to information; reduced time searching documents.[web:31]

### Risks

- **Privacy:** High risk of oversharing if connectors ignore permission boundaries.[web:31][web:29]
- **Safeguarding:** Sensitive case notes or safeguarding information may be surfaced to staff who should not see them.
- **Security:** Larger attack surface; more systems exposed.

### Relevant law and guidance

- UK GDPR, data minimisation and access control principles.

### Classification

- **Suggested rating:** **Red** in its naive form (full access to all systems); potentially **Amber** with very strong, tested access controls and scoping.

### Minimum controls

- Scope AI connectors to limited, non-sensitive repositories initially.
- Ensure connectors respect existing permissions (role-based access).

### Stronger controls

- DPIA with technical testing for connector behaviour.
- Phased roll-out starting with low-risk content (e.g. policies, guidance only).

### Approval and DPIA

- Full DPIA required; board-level oversight recommended.

---

## Use case 13: Manager researching grant opportunities

### Scenario

A manager at a small charity uses AI tools to scan public grant databases and websites, summarise criteria and produce lists of suitable opportunities.

- **Charity type and size:** Small charity.
- **Objective:** Save time on grant prospecting.[web:28][web:29]
- **People involved:** Manager, fundraiser.
- **People affected:** Organisation and beneficiaries indirectly.
- **Information processed:** Public info; internal project summaries.

### Potential benefits

- Quicker identification of relevant funds.[web:28][web:29]

### Risks

- **Accuracy:** Misinterpretation of funder criteria.

### Relevant law and guidance

- Mainly about data accuracy; limited regulatory impact.

### Classification

- **Suggested rating:** **Green**, as it uses public information and internal summaries.

### Minimum controls

- Always cross-check AI summaries against original funder documentation.

### Stronger controls

- Maintain a prospecting register documenting sources and decisions.

---

## Use case 14: Frontline worker considering AI-generated advice

### Scenario

A frontline worker in a mental-health or crisis-support charity considers using an AI tool to generate advice or responses to beneficiaries during live chat or email, perhaps to speed up replies.[web:25][web:26][web:29]

- **Charity type and size:** Advice or crisis-support charity.
- **Objective:** Speed up response while maintaining quality.
- **People involved:** Frontline workers, supervisors.
- **People affected:** Beneficiaries, many in distress.

### Potential benefits

- Hypothetical time savings.

### Risks

- **Safeguarding:** High risk of unsafe, incorrect or insensitive advice.[web:25][web:26][web:29]
- **Accountability:** Difficulty attributing responsibility.

### Relevant law and guidance

- Safeguarding obligations; duty of care.

### Classification

- **Suggested rating:** **Red** in its direct form (AI drafting live responses to vulnerable beneficiaries).

### Minimum controls

- Prohibit AI-generated advice in direct beneficiary interactions.

### Stronger controls

- If AI is used at all, restrict to internal training or scenario brainstorming, never live advice.

---

## Use case 15: Charity translating beneficiary information

### Scenario

A refugee-support charity uses AI translation tools to translate beneficiary information leaflets into multiple languages and to support staff in communicating with non-English-speaking clients, complemented by human checking.[web:29][web:28]

- **Charity type and size:** Medium refugee charity.
- **Objective:** Improve accessibility of information.
- **People involved:** Staff, volunteers, beneficiaries.
- **People affected:** Clients with limited English.

### Information processed

- Public information leaflets; possibly some non-identifiable phrases from conversations.

### Potential benefits

- Wider reach; improved understanding for non-English speakers.[web:28][web:29]

### Risks

- **Accuracy:** Mis-translations could cause confusion or harm.
- **Privacy:** Risk if identifiable case details are entered into consumer tools.

### Relevant law and guidance

- Data-protection considerations for language data; safeguarding and duty of care.

### Classification

- **Suggested rating:** **Amber** if used carefully and checked by humans; **Green** for non-personal leaflets.

### Minimum controls

- Limit use to non-identifiable text; human review of translated materials.

### Stronger controls

- Use privacy-conscious translation tools or sector-specific services.

---

## Implications by charity size

### Micro and volunteer-led charities

- Most accessible AI uses: drafting fundraising copy, rota messages, basic translation, grant prospecting and meeting summaries.[web:33][web:28][web:29]
- High-risk uses (advice chatbots, sensitive transcription, CRM connectors) should generally be avoided or handled via trusted partners.

### Small charities

- Can benefit from AI for grant writing, transcription, reporting and donor communications when tools are appropriately contracted and data-protection controls are in place.[web:12][web:28][web:29]
- Need clear policies on prohibited data types and high-risk contexts, plus straightforward DPIA screening for service-related AI.

### Medium-sized charities

- More likely to explore AI in donor segmentation, triage chatbots and internal knowledge assistants; these require governance, DPIAs and specialist input (data protection, safeguarding, HR).[web:25][web:26][web:29][web:31]

### Large and complex charities

- May pursue advanced predictive analytics, multi-agent orchestration and deep integration with CRMs and case systems; these demand robust AI strategies, technical testing and board-level oversight.[web:23][web:26][web:31][web:29]

## Practical implications

- Many practical AI uses are already feasible and reasonably low risk if limited to internal drafting, summarisation and anonymised data, with strong human review.
- Risk increases significantly when AI interacts directly with vulnerable beneficiaries, processes identifiable case notes, profiles individuals or connects to core systems.
- Proportionate governance requires simple rules for micro and small charities, and more structured DPIA, supplier and connector controls for medium and large organisations.

## Recommended controls

See Pack 01 for cross-cutting controls; key additions for practical use cases include:

- Explicit lists of prohibited data in prompts (e.g. names, health details, safeguarding content).
- Template DPIA screening questions for chatbots, transcription, connectors and profiling.
- Role-specific guidance (frontline workers, fundraisers, HR, digital teams) on AI boundaries.

## Proportionate implementation

- **Minimum practice:** limit AI to non-sensitive drafting and summarisation, prohibit high-risk uses, require human review.
- **Stronger practice:** adopt DPIA screening and supplier questionnaires for any AI involving personal data or beneficiaries.
- **High-risk contexts:** require full DPIAs, senior approval and specialist safeguarding/data-protection input.

## Questions charities should ask

- What problem are we solving and is AI necessary?
- What data will be processed and is it identifiable or sensitive?
- Who could be harmed if AI behaves unexpectedly?
- What human review and escalation routes exist?
- Have we considered DPIA screening and sought specialist advice where needed?

## Evidence gaps and uncertainties

- Limited formal evaluation of many tools and use cases in charity contexts.
- Sparse evidence on long-term effects of AI on staff workload, burnout and governance.
- Limited documented incidents in UK charities; risks often inferred from other sectors.

## Conclusions

Practical AI use in UK charities is already widespread in drafting, administration and fundraising, with emerging but cautious applications in service delivery and connectors.[web:12][web:24][web:25][web:26][web:23][web:30][web:29] Use-case analysis shows that many scenarios can be Green with basic controls, but risk rapidly escalates to Amber or Red when AI touches sensitive data, beneficiaries or automated decisions. Proportionate governance must therefore differentiate low-risk productivity tools from high-risk service and connector deployments, with appropriate controls, approvals and DPIAs.

## Sources

- Charity Digital, AI use cases for charities.[web:24]
- Charity Digital, How are charities using AI in service delivery?[web:25]
- DSC, How charities are using AI in service delivery in 2025.[web:26]
- William Joseph, How people in charities are using AI right now.[web:30]
- Third Sector Lab, 7 Charities Using AI to Deliver Impact.[web:23]
- Media Trust & NCVO, AI in Action (AI Bootcamps case studies).[web:32]
- NCVO, How AI can help small charities.[web:33]
- Plinth, 10 Ways Small Charities Are Already Using AI.[web:28]
- Evolve Catalyst, The Essential AI Guide for UK Charities.[web:29]
- Pragmatiq, AI Solutions for Charities: Practical Use Cases.[web:31]
- CharityComms AI Hub.[web:34]
- Charity Digital Skills Report AI findings.[web:12]
