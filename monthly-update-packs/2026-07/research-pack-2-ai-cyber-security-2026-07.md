# AI Cyber Security and Agentic Tools for UK Charities – July 2026 Research Pack

## 1. Executive Summary

UK charities increasingly use AI systems, including agentic tools and connectors that can search files, send messages or trigger workflows, creating new cyber security and data-protection risks alongside governance and safeguarding concerns.[^1][^2][^3]
The UK government’s AI Cyber Security Code of Practice sets voluntary baseline expectations for securing AI systems across their lifecycle, complementing NCSC guidance and offering a concrete reference for charity AI policies and technical controls.[^2][^4][^5][^6]
NCSC’s guidance on AI and cyber security, and its blog on agentic AI, emphasise that organisations must treat AI systems as part of their broader cyber-risk landscape, considering adversarial attacks, data exfiltration, prompt injection, misconfigured connectors and supply-chain vulnerabilities.[^7][^1]
For UK charities, safe AI adoption now requires combining GDPR/DUAA compliance with cyber security standards: protecting training data, prompts, outputs, model access and agentic actions, and ensuring that overshared repositories and weak identity controls do not become AI-amplified attack surfaces.[^8][^9][^1]
Agentic AI use cases (e.g. AI search across SharePoint, Notion, Google Drive, CRM or case systems) are high-risk for confidentiality and safeguarding; they must be governed with least privilege, read-only defaults, approval gates for external actions and clear kill-switches.[^4][^1][^2]
Charity boards and digital leads can use the AI Cyber Security Code’s lifecycle framing (design, development, deployment, operation, maintenance and retirement) to structure AI risk registers, incident processes and tool-approval criteria.[^6][^2]
AI cyber security guidance should be integrated into AI Safe Charity Index pages on Governance, Agents and Connectors, Tool Approval, AI Incidents and Tools, ensuring that cyber protections are treated as first-class requirements alongside GDPR and safeguarding rules.[^1][^4][^6][^7]

## 2. Key UK AI Cyber Security Guidance

### 2.1 AI Cyber Security Code of Practice (UK Government)

The UK government’s AI Cyber Security Code of Practice sets out baseline cyber security principles for organisations developing, deploying or operating AI systems, including generative and deep-learning models.[^2][^4]
The Code focuses on securing AI across its lifecycle (from design through operation and retirement), emphasising secure-by-design development, supply-chain security, data integrity, robust authentication and authorisation, logging and monitoring, and incident response.[^5][^4][^6]
The Code is voluntary but widely framed as a baseline expectation for responsible AI deployment; legal and sector commentary suggests regulators may use it as a yardstick when assessing organisational AI risk management.[^10][^6][^7]

### 2.2 NCSC – AI and Cyber Security and Agentic AI

NCSC’s guidance on "AI and cyber security: what you need to know" explains that AI models introduce new threat vectors (e.g. prompt injection, data poisoning, model theft) as well as new opportunities for defence.[^1]
It advises organisations to treat AI systems and data pipelines as part of their overall security architecture, applying standard principles such as least privilege, secure configuration, vulnerability management and incident response, adapted to AI-specific risks.[^11][^1]
NCSC’s blog on "Thinking carefully before adopting agentic AI" warns that agentic tools capable of searching files, executing actions and calling external systems can dramatically increase the impact of misconfigurations, overshared data and malicious instructions, and should therefore be treated as higher risk than standalone chat assistants.[^7][^1]

## 3. AI Cyber Security Risk Themes for Charities

For UK charities, AI cyber security risks combine with privacy, safeguarding and governance concerns:

- **Data exposure via connectors:** Agents that can search email, storage or CRMs may expose confidential or safeguarding data if underlying permissions are weak, or if prompts trigger broad searches.
- **Prompt injection and malicious content:** AI systems can follow hidden instructions embedded in documents, web pages or code, leading to data leakage or harmful actions unless filtered and constrained.[^11][^1]
- **Model and API access risk:** API keys and credentials for AI services can be targeted by attackers, enabling data exfiltration or abuse of paid resources.[^12][^1]
- **Supply-chain and dependency risk:** Using third-party AI components (e.g. connectors, plugins, open-source libraries) can introduce vulnerabilities or unexpected data flows.[^4][^2]

These risks are magnified in charities where digital debt, overshared repositories and limited security capacity already exist.[^13][^1]

## 4. Lifecycle Security Controls for Charity AI Systems

### 4.1 Design and Procurement

Charities should apply secure-by-design principles when procuring or configuring AI systems:

- Require vendors to demonstrate alignment with the AI Cyber Security Code and NCSC guidance, including clear documentation of threat models, security controls and incident response.[^2][^4]
- Assess data flows, training data sources, connector scopes and admin controls during tool approval, not just at brand level.[^6][^4][^7]
- Avoid default-enable connectors to email, file storage or case systems; instead, select minimal scopes that match specific, reviewed use cases.[^1][^2]

### 4.2 Deployment and Configuration

Deployment should emphasise configuration security:

- Enforce SSO, MFA and role-based access for AI tools integrated into organisational identity systems, mirroring existing security policies.[^14][^15][^16]
- Implement least privilege for agents and connectors: restrict which folders, mailboxes or databases they can access, and start with read-only modes where possible.[^4][^1]
- Enable logging and audit capabilities for AI actions, ensuring that security and governance teams can trace queries, accessed resources and external actions.[^17][^18][^14]

### 4.3 Operation and Monitoring

Operational security should include:

- Monitoring AI-related logs for unusual patterns (e.g. massive file access by agents, repeated prompts targeting sensitive folders, or outbound messages not aligned with policies).[^17][^1]
- Using anomaly detection and threat analytics (where available) to identify potential prompt-injection attacks, data exfiltration or misuse of connectors.[^19][^12]
- Including AI systems and connectors in regular security reviews, penetration tests and internal audit scopes, rather than treating them as "just tools".[^20][^11]

### 4.4 Retirement and Decommissioning

When retiring AI systems:

- Ensure associated credentials, connectors and API keys are revoked.[^1]
- Confirm that logs and stored prompts/outputs are retained or deleted according to policy, considering both security and data-protection requirements.[^9][^8]
- Update documentation, registers and training materials to reflect decommissioned tools and replaced workflows.[^6][^2]

## 5. Mapping to AI Safe Charity Index Pages

This cyber security research supports updates to several AI Safe Charity Index pages:

- **Governance – Agents and Connectors:** Add references to the AI Cyber Security Code, NCSC AI guidance and supply-chain threats; deepen the control list with explicit cyber-security principles (least privilege, logging, testing, kill-switches).[^4][^6][^1]
- **Governance – Tool Approval:** Incorporate AI-specific security questions (e.g. what security standard does the vendor follow, are logs available, how are connectors scoped, what incident response is in place?).[^7][^2][^4]
- **Governance – AI Incidents:** Clarify that AI incidents may be cyber as well as data-protection events, and should feed into wider incident management and DUAA complaints processes.[^21][^8][^1]
- **Tools – Product Pages:** Update tool guidance (ChatGPT, Claude, Gemini, Copilot, Notion AI, Perplexity) to include security features such as audit logs, admin controls, connector scopes and enterprise security certifications.[^22][^15][^16][^23][^14][^17]

## 6. High-Risk Topics Requiring Specialist Review

The following areas require specialist cyber security and data-protection review before publication as guidance:

- Technical treatment of prompt injection and data poisoning mitigation strategies.[^11][^1]
- AI-powered threat detection and incident response tooling (e.g. AI-enabled SIEM, IDS) and how charities might realistically adopt them.[^19][^12]
- Detailed mapping between AI Cyber Security Code principles, NIST AI RMF, ISO 42001 and charity governance frameworks.[^24][^25][^7]

All cyber security recommendations should be framed as practical baselines, not exhaustive standards or legal advice.

---

## References

1. [AI and cyber security: what you need to know](https://www.ncsc.gov.uk/guidance/ai-and-cyber-security-what-you-need-to-know) - For this reason, the NCSC has published AI guidelines designed to help data scientists, developers, ...

2. [AI Cyber Security Code of Practice - GOV.UK](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice) - This Code of Practice sets out baseline cyber security principles to help secure AI systems and the ...

3. [CP 1258  – Government response to the Call for Views on the Cyber Security of AI](https://assets.publishing.service.gov.uk/media/679a20abfe19800263dc7ba1/Government_Response_on_Cyber_Security_for_AI_Web_Accessible_E03283358.pdf)

4. [Code of Practice for the Cyber Security of AI - GOV.UK](https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai) - The scope of this voluntary Code of Practice is focused on AI systems. This includes systems that in...

5. [The AI Cyber Security Code of Practice - techUK](https://www.techuk.org/resource/the-ai-cyber-security-code-of-practice.html) - In a nutshell, the code is intended to provide guidelines that will secure AI systems throughout the...

6. [UK's new AI Cyber Security Code of Practice - RPC](https://www.rpclegal.com/snapshots/technology-digital/spring-2025/uks-new-ai-cyber-security-code-of-practice/) - The Code aims to protect the end-user of AI models and tools, outlining the steps businesses should ...

7. [What are the U.K. Software Security and AI Codes of Practice? - ISC2](https://www.isc2.org/Insights/2025/07/UK-Software-Security-AI-Codes-of-Practice) - Like the Software Security Code of Practice, the AI Code of Practice defines baseline expectations a...

8. [Data (Use and Access) Act 2025: data protection and privacy changes](https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes) - The Act introduces a new lawful ground for processing personal data, giving businesses more confiden...

9. [Data (Use and Access) Act 2025 | ICO](https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/) - This summarises the changes the DUAA makes to data protection law that may affect you if you’re an o...

10. [UK Publishes AI Cyber Security Code of Practice and ...](https://www.hunton.com/privacy-and-cybersecurity-law-blog/uk-publishes-ai-cyber-security-code-of-practice-and-implementation-guide) - The purpose of the Code is to provide cyber security requirements for the lifecycle of AI. Complianc...

11. [Quantifying Security Vulnerabilities: A Metric-Driven Security Analysis
  of Gaps in Current AI Standards](https://arxiv.org/html/2502.08610) - As AI systems integrate into critical infrastructure, security gaps in AI
compliance frameworks dema...

12. [Optimization of cyber security through the implementation of AI technologies](https://www.degruyterbrill.com/document/doi/10.1515/jisys-2024-0226/html) - ... the Neural Network to mimic the behaviour of the human brain is important to predict significant...

13. [Introduction](https://charitydigitalskills.co.uk/report/the-charity-digital-skills-report-introduction/) - The Charity Digital Skills Report is the annual barometer of digital skills, attitudes and support n...

14. [Enterprise data protection in Microsoft 365 Copilot and Microsoft 365 ...](https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection) - We secure your data: We help protect your data with encryption at rest and in transit, rigorous phys...

15. [Generative AI Security, Compliance and Privacy](https://workspace.google.com/security/ai-privacy/) - Learn how Google Workspace keeps your data secure with private, secure, and compliant AI. Discover o...

16. [Notion Security & Compliance | SOC 2 Certified, trusted by Enterprises](https://www.notion.com/en-gb/security) - Every Notion employee and contractor signs up to non-disclosure terms to maintain the confidentialit...

17. [Best Practices](https://www.perplexity.ai/help-center/en/articles/11652747-audit-logs) - Gain visibility into user activities with a record of every action for rapid incident response, stre...

18. [Audit Logs | Perplexity Help Center](https://www.perplexity.ai/help-center/it/articles/11652747-audit-logs) - Ottieni visibilità sulle attività degli utenti con una registrazione di ogni azione per una rapida r...

19. [AI-Enabled System for Efficient and Effective Cyber Incident Detection
  and Response in Cloud Environments](https://arxiv.org/pdf/2404.05602.pdf) - ...from this research
highlight the effectiveness of the Random Forest model, achieving an accuracy
...

20. [Robustness and Cybersecurity in the EU Artificial Intelligence Act](https://arxiv.org/pdf/2502.16184.pdf) - The EU Artificial Intelligence Act (AIA) establishes different legal
principles for different types ...

21. [One month to go: what businesses need to know to meet new data law](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/05/one-month-to-go-what-businesses-need-to-know-to-meet-new-data-law/) - Businesses across the UK have one month from today to put a data protection complaints process in pl...

22. [Enterprise privacy at OpenAI](https://openai.com/enterprise-privacy/) - Trust and privacy are at the core of our mission at OpenAI. We're committed to privacy and security ...

23. [Notion AI security & privacy practices](https://www.notion.com/help/notion-ai-security-practices) - At Notion, we want to be transparent with our customers about our products and how we use AI to enha...

24. [AI Risk Management Should Incorporate Both Safety and Security](http://arxiv.org/pdf/2405.19524.pdf) - The exposure of security vulnerabilities in safety-aligned language models,
e.g., susceptibility to ...

25. [From COBIT to ISO 42001: Evaluating Cybersecurity Frameworks for
  Opportunities, Risks, and Regulatory Compliance in Commercializing Large
  Language Models](https://arxiv.org/pdf/2402.15770.pdf) - ...in the loop, uncovered potential for
LLM integration together with inadequacies in LLM risk overs...

