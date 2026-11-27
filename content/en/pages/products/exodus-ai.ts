import type { Page } from "../../../types";

const page: Page = {
  path: "/products/exodus-ai/",
  label: "Exodus AI",
  blurb: "Risk flags, offer suggestions and reports, inside the back office.",
  seo: { title: "Exodus AI", description: "Exodus AI sits inside the back office." },
  hero: {
    kind: "page",
    title: "Models that do the dull bits, so your team can do the rest.",
    lead: "Exodus AI sits inside the back office. It flags risky players before they cost you, suggests the next offer by segment, and drafts the reports nobody likes writing. It suggests; your team decides.",
    image: { src: "/brand/glass-x.jpg" },
    actions: [
      { label: "Book a demo", href: "#demo" },
      { label: "Ask a question", href: "/contact/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "featureGrid",
      variant: "open",
      items: [
        { icon: "eye", title: "Watches patterns", text: "Bonus abuse, multi-accounting and odd withdrawal behaviour surface as alerts, not month-end surprises." },
        { icon: "wand", title: "Suggests, doesn't act", text: "Every suggestion shows its reasoning. Nothing changes until someone on your team approves it." },
        { icon: "clock", title: "Gives hours back", text: "Daily summaries per brand are waiting before the morning call." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Exodus AI", index: "01", title: "What it does today" },
      items: [
        { title: "Churn signals", text: "Players whose session and deposit patterns are drifting, flagged with how long they have been drifting." },
        { title: "Offer suggestions", text: "Which offer, to which segment, at what cost. Based on what worked on your brand, not an industry average." },
        { title: "Risk scoring", text: "A score per player that your risk team can sort, filter and override." },
        { title: "Ask your data", text: "Ask the back office a question in plain language and get a table back, with the query it ran." },
      ],
    },
    { type: "shot", label: "PRODUCT SCREENSHOT — AI risk alerts panel" },
    {
      type: "callout",
      kicker: "Honest note",
      title: "AI is not a strategy.",
      text: "It's a set of tools that save time on work you already do. We'll tell you what it's good at on your data, and what it isn't.",
    },
    {
      type: "faq",
      eyebrow: "Exodus AI",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Is our player data used for other operators?", answer: "No. Your data trains models for your brands and stays in your setup." },
        { question: "Can we switch it off?", answer: "Per feature and per brand. It is a tool, not a dependency." },
        { question: "Does it make decisions on its own?", answer: "Only for actions you define and approve in advance. The default is suggest and wait." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
