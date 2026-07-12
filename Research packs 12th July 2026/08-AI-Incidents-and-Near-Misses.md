---
title: AI Incidents and Near Misses
description: Evidence-led review of AI-related incidents and near misses relevant to charities, public services and social-sector organisations.
research_date: 2026-07-13
last_updated: 2026-07-13
suggested_review_date: 2027-01-13
jurisdiction: United Kingdom
audience: All UK charity sizes
status: Research pack
---

# AI Incidents and Near Misses

## Executive summary

Documented AI-related incidents and near misses across healthcare, public services and commercial applications reveal recurring risks: hallucinated advice leading to harm, fabricated citations, biased or discriminatory automated decisions, and systems amplifying misinformation.[web:205][web:213][web:215][web:214][web:211][web:212][web:216][web:219] Evidence shows that large language models can produce convincing but false information, repeat and expand on user-fed misinformation, and embed structural biases from historical data.[web:213][web:214][web:205][web:206][web:212]

While relatively few incidents are documented directly in the charity sector, lessons from healthcare, public-sector decision-making and digital mental health tools are clearly transferable: charities should not rely on general-purpose AI for clinical or safeguarding decisions, should treat AI-assisted outputs as drafts requiring human review, and must assess bias and fairness in any AI influencing decisions about people.[web:91][web:88][web:205][web:211][web:212]

## Scope

This pack examines AI incidents and near misses relevant to:

- Privacy and confidentiality.
- Safeguarding and beneficiary safety.
- Misinformation and hallucinations.
- Fraud, impersonation and deepfakes.
- Bias, discrimination and algorithmic decision-making.
- Cybersecurity, copyright and reputational harm.

It includes incidents from healthcare, public services, education and commercial organisations where lessons are transferable to charities.[web:205][web:213][web:214][web:211][web:212][web:216]

## Research questions

1. What kinds of AI-related incidents and near misses have been documented in sectors relevant to charity work?[web:205][web:213][web:214][web:211][web:212]
2. How are these incidents categorised (e.g. hallucination, bias, privacy breach, safeguarding failure)?
3. What root causes recur across incidents, and what prevention controls are recommended?[web:205][web:214][web:211][web:212]
4. How transferable are lessons from healthcare, public services and digital mental health tools to charity operations and safeguarding?[web:91][web:88]

## Method

### Source identification

Sources include:

- Academic and medical case studies of AI hallucinations and misinformation, including JAMA reports and healthcare analyses.[web:213][web:215][web:205][web:219][web:218]
- Studies on AI chatbots misinterpreting prompts and expanding on false medical information.[web:214][web:208]
- Reviews and reports on bias and discrimination in algorithmic decision-making, including UK CDEI review, law and public-management research.[web:211][web:210][web:206][web:212][web:216]
- Parliamentary and sector analyses of AI in mental healthcare and digital tools.[web:91][web:84][web:88]

### Evidence hierarchy and limitations

Peer-reviewed studies and official reviews are treated as primary; media case reports are included as “credible reported incidents” where details are consistent with cited studies.[web:213][web:215][web:214][web:211][web:212] There is limited direct evidence of charity-specific AI incidents; lessons are inferred by analogy and clearly labelled.[web:88][web:91]

## Incident table

| Organisation or sector | Country | Date | Status of evidence | What happened | People affected | Root cause | Consequences | Organisational response | Lesson for charities | Sources |
|---|---|---|---|---|---|---|---|---|---|---|
| Healthcare chatbot case study (JAMA Otolaryngology) | USA | 2024 | Research demonstration / case report | Google’s Bard chatbot generated fabricated citations for medical information, including non-existent journal articles and DOIs, when asked for references.[web:213][web:215] | Clinicians using chatbots for medical research and continuing education. | LLM hallucination and citation fabrication; lack of built-in verification and overreliance on AI-generated references. | Potential for misinformation in clinical decision-making and education if fabricated citations are not verified.[web:213][web:215] | Authors published a case report urging human oversight and verification of AI outputs and citations.[web:215] | AI-generated evidence and references must be checked against trusted databases; charities should never rely on AI-generated citations for policy, safeguarding or clinical guidance without verification. | JAMA case report and plain-language summary.[web:213][web:215] |
| AI chatbot hallucination in clinical scenario | USA | 2024 | Research demonstration | Study of six LLMs found hallucination rates of 50–83% when models were tested against clinical vignettes containing fictional medical terms; chatbots often repeated and elaborated on misinformation.[web:214] | Patients and clinicians relying on AI chatbots for medical information. | Models lacked skepticism; prompts seeded with false information led to hallucinated outputs; default settings did not mitigate misinformation.[web:214] | High risk of incorrect medical advice; potential harm if AI recommendations are followed without professional review.[web:214] | Researchers recommended mitigation prompts, human oversight, stress-testing models before deployment and caution around clinical use.[web:214] | Charities should treat AI advice for health or safeguarding as high risk, use mitigation prompts, and require qualified human review before using outputs to inform advice or services. | Medscape summary of Mount Sinai study.[web:214] |
| Unexpected harms of AI in healthcare (Whisper, WHO S.A.R.A.H.) | Global | 2023 | Academic review | Review of AI in healthcare reported harmful hallucinations from Whisper transcription and inaccurate health information from WHO’s S.A.R.A.H. chatbot.[web:205] | Patients and healthcare users relying on AI tools for information or triage. | Hallucinations and inaccuracies from general-purpose AI; limited oversight and testing prior to deployment; lack of clear boundaries. | Risk of misdiagnosis, inappropriate self-treatment and undermined trust in digital health tools.[web:205] | Recommendation for rigorous evaluation, transparency about AI limitations and safeguards in deployment.[web:205] | Charities using transcription or health-information chatbots must test accuracy, limit AI use to non-clinical contexts and ensure clear signposting to human professionals. | Academic review of AI harms in healthcare.[web:205] |
| AI hallucination leading to bromide toxicity (media case) | USA | 2025 | Credible reported incident | News report of a 60-year-old man hospitalised with bromide toxicity and psychiatric symptoms after following ChatGPT advice to replace table salt (sodium chloride) with sodium bromide in his diet.[web:207] | Individual seeking dietary advice from AI; healthcare providers treating resulting toxicity. | AI hallucination in chemical advice; user overreliance on AI; lack of human medical input; failure of AI to flag risk. | Severe physical and psychiatric harm (toxicity, hallucinations, hospitalisation).[web:207] | Case study published in clinical journal; authors warned about AI inaccuracies and need for skepticism.[web:207] | AI outputs can be dangerously wrong; charities must avoid using general-purpose AI to give medical, dietary or crisis advice and must warn staff and beneficiaries about this risk. | Media and clinical case report.[web:207] |
| Bias in algorithmic decision-making in public services | UK | 2020 | Regulatory review | UK CDEI review found evidence of bias risks in algorithmic decision-making across policing, welfare and other public services; algorithms could replicate and reinforce structural inequalities.[web:211][web:210] | People subject to public-service decisions (welfare, policing, etc.). | Historical bias in data; lack of transparency; inadequate impact assessments and fairness testing.[web:211][web:210] | Discriminatory outcomes; erosion of trust in public institutions; potential human-rights infringements.[web:206][web:211] | CDEI recommended bias audits, impact assessments, transparency and inclusive governance.[web:211] | Charities using AI for profiling or triage must consider fairness and discrimination, conduct DPIAs and avoid opaque automated decision-making about beneficiaries or donors. | CDEI review and academic analysis.[web:211][web:210][web:206] |
| Algorithmic discrimination in public service provision | International | 2025 | Academic study | Public-management research showed that AI-based public-service systems can embed and magnify discrimination across groups, with subtle mechanisms of harm.[web:212] | Service users in sectors such as healthcare, welfare and migration. | Structural bias in training data; lack of explainability; automation bias among decision-makers.[web:212][web:216] | Discriminatory service provision and inequality of access or recognition.[web:212] | Recommendations for governance frameworks, bias audits and meaningful human oversight.[web:212] | Charities should treat any AI influencing access to services or support as high risk and ensure human decision-making and bias checks. | Academic public-management article.[web:212][web:216] |

## Common root causes

Across these incidents, root causes include:

- Lack of human oversight and verification.
- Overreliance on AI for specialised advice (health, clinical, safeguarding).
- Hallucination and misinformation, especially when AI is seeded with false details.[web:213][web:214][web:205][web:219]
- Historical bias and structural inequalities embedded in training data.[web:211][web:212][web:206]
- Automation bias: humans deferring to AI recommendations without critical evaluation.[web:216][web:212]

## Lessons for charities

- AI outputs must be treated as drafts or starting points, not authoritative advice, especially in health, mental-health, safeguarding or legal contexts.[web:91][web:88][web:214][web:213]
- Beneficiary-facing advice should never rely solely on general-purpose AI; human professionals must review and own decisions.[web:90][web:205]
- Algorithmic profiling and triage must be subject to DPIAs, fairness testing and human oversight, particularly where decisions affect access to services or support.[web:211][web:212][web:216]

## Practical prevention controls

- Human review: require qualified staff to check AI outputs before they inform decisions or communications.[web:213][web:214]
- Verification: verify AI-generated references and factual claims against trusted sources.[web:215][web:211]
- Governance: embed AI risk into existing governance, safeguarding and data-protection frameworks.[web:51][web:196]
- Bias audits: evaluate AI-assisted profiling or triage for discriminatory impact.[web:211][web:212]

## Evidence gaps

- Limited charity-specific AI incident reporting; near misses may be underreported.[web:88][web:197]
- Emerging digital mental-health and safeguarding tools require ongoing evaluation and governance.

## Conclusions

AI incidents and near misses across healthcare and public services show clear patterns of hallucination, misinformation and bias that are directly relevant to charity operations. Charities should treat AI as a high-risk tool in beneficiary-facing, health-related or decision-making contexts, relying on human oversight, verification and bias audits to prevent harm.[web:205][web:213][web:214][web:211][web:212][web:91][web:88]

## Sources

- Healthcare hallucination case studies and reviews.[web:205][web:213][web:215][web:214][web:219][web:218]
- CDEI and academic work on algorithmic bias and public-service decision-making.[web:211][web:210][web:206][web:212][web:216]
- Parliamentary and sector analyses of AI in mental healthcare and digital tools.[web:91][web:84][web:88]
