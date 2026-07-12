(function () {
  const outcomes = {
    green: {
      label: "Green",
      title: "Go ahead with normal checks",
      body: "This looks suitable for ordinary AI use if the tool is approved for this task and a person checks the output.",
      links: [
        ["Before You Paste", "before-you-paste/"],
        ["Task Guides", "everyday-charity-work/"]
      ]
    },
    amber: {
      label: "Amber",
      title: "Pause and use the documented route",
      body: "This needs an approval, policy or specialist check before you continue. Do not rely on judgement alone.",
      links: [
        ["Tool Approval", "governance/tool-approval/"],
        ["DPIA Triage", "ai-and-data-protection/dpia-triage/"],
        ["Task Guides", "everyday-charity-work/"]
      ]
    },
    red: {
      label: "Red",
      title: "Stop and use a specialist route",
      body: "This may involve sensitive information, vulnerable people, significant decisions or autonomous actions. Use your charity's data-protection, safeguarding, HR, security or senior route.",
      links: [
        ["AI Incidents", "governance/incidents/"],
        ["Special Category and Vulnerability", "ai-and-data-protection/special-category-children-and-vulnerability/"],
        ["Agents and Connectors", "governance/agents-and-connectors/"]
      ]
    }
  };

  function selected(form, name) {
    const input = form.querySelector(`input[name="${name}"]:checked`);
    return input ? input.value : "";
  }

  function score(values) {
    const redData = values.data === "safeguarding" || values.data === "sensitive" || values.data === "security";
    const redAction = values.action === "act";
    const significantWithoutHuman = values.impact === "yes" && values.human !== "yes";
    const unapprovedSensitive = values.tool === "no" && values.data !== "public";

    if (redData || redAction || significantWithoutHuman || unapprovedSensitive) {
      return "red";
    }

    const amberData = values.data === "internal" || values.data === "personal";
    const amberTool = values.tool === "not-sure" || values.tool === "no";
    const amberAction = values.action === "people" || values.action === "connect";
    const amberImpact = values.impact === "maybe" || values.impact === "yes";
    const amberHuman = values.human !== "yes";

    if (amberData || amberTool || amberAction || amberImpact || amberHuman) {
      return "amber";
    }

    return "green";
  }

  function render(form, status) {
    const result = form.querySelector("[data-check-result]");
    const label = form.querySelector("[data-check-label]");
    const title = form.querySelector("[data-check-title]");
    const body = form.querySelector("[data-check-body]");
    const links = form.querySelector("[data-check-links]");
    if (!result || !label || !title || !body || !links) return;

    if (!status) {
      result.className = "asc-check-result asc-check-neutral";
      label.textContent = "Not enough information yet";
      title.textContent = "Answer each question to get a route";
      body.textContent = "The check will show a Green, Amber or Red route and link to the next page.";
      links.replaceChildren();
      return;
    }

    const outcome = outcomes[status];
    const prefix = form.dataset.linkPrefix || "";
    result.className = `asc-check-result asc-check-${status}`;
    label.textContent = outcome.label;
    title.textContent = outcome.title;
    body.textContent = outcome.body;
    links.replaceChildren();

    outcome.links.forEach(([text, href]) => {
      const item = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = `${prefix}${href}`;
      anchor.textContent = text;
      item.append(anchor);
      links.append(item);
    });
  }

  function evaluate(form) {
    const values = {
      tool: selected(form, "tool"),
      data: selected(form, "data"),
      action: selected(form, "action"),
      impact: selected(form, "impact"),
      human: selected(form, "human")
    };

    if (Object.values(values).some((value) => !value)) {
      render(form, "");
      return;
    }

    render(form, score(values));
  }

  function init() {
    document.querySelectorAll("[data-quick-check]").forEach((form) => {
      form.addEventListener("change", () => evaluate(form));
      form.addEventListener("reset", () => window.setTimeout(() => render(form, ""), 0));
      render(form, "");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
