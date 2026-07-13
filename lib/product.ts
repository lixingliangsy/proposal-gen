export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "ProposalKit",
  slug: "proposal-gen",
  tagline: "A clean freelance proposal, fast",
  description: "Enter the client, the project, and your price; get a structured proposal (summary, scope, timeline, investment, next step). For freelancers who hate writing proposals from scratch.",
  toolTitle: "Draft proposal",
  resultLabel: "Your proposal",
  ctaLabel: "Generate",
  features: [
  "5-section structure",
  "Copy-ready",
  "Save time",
  "No templates to hunt"
],
  inputs: [
  {
    "key": "client",
    "label": "Client name",
    "type": "input",
    "placeholder": "e.g. Acme Co"
  },
  {
    "key": "project",
    "label": "What you will deliver",
    "type": "textarea",
    "placeholder": "A 5-page marketing site with CMS and contact form"
  },
  {
    "key": "price",
    "label": "Your price",
    "type": "input",
    "placeholder": "e.g. $1,500"
  }
] as InputField[],
  systemPrompt: "You are a freelance proposal writer. Given client, project description, and price, produce a tight 5-section proposal: Summary, Scope, Timeline, Investment, Next step.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Save drafts, brand"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "Templates, API"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const client = inputs['client'] || 'Client'
  const project = (inputs['project'] || '').trim() || 'the project'
  const price = inputs['price'] || '$X'
  let out = 'PROPOSAL - ' + client + '\n'
  out += '\n1. Summary\n   We will deliver ' + project + '.\n'
  out += '\n2. Scope\n   - Discovery & plan\n   - Core build\n   - Review & handoff\n'
  out += '\n3. Timeline\n   ~2-3 weeks, weekly check-ins.\n'
  out += '\n4. Investment\n   ' + price + ' (fixed).\n'
  out += '\n5. Next step\n   Reply to schedule kickoff.\n'
  return out + '\n\n--- (Mock template. Add OPENAI_API_KEY for tailored proposal.)'
}
}
