import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/turnkey-casino/",
  label: "Turnkey Casino",
  blurb: "Your licence and payments. Our platform underneath.",
  seo: { title: "Turnkey Casino", description: "Turnkey is for operators who hold their own licence and payment setup and want the platform, games and back office ready to run." },
  hero: {
    kind: "page",
    title: "Your licence. Your brand. Our platform under it.",
    lead: "Turnkey is for operators who hold their own licence and payment setup and want the platform, games and back office ready to run. You keep control of the business. We keep the technology moving.",
    image: { src: "/brand/glass-slabs.jpg" },
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
        { icon: "briefcase", title: "You hold the licence", text: "The business is yours, start to finish. We are the technology under it." },
        { icon: "wallet", title: "You own the payments", text: "Your providers, your merchant accounts. We wire them in." },
        { icon: "bolt", title: "We move fast", text: "Requests don't queue behind a roadmap review." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Turnkey Casino", index: "01", title: "What you get" },
      items: [
        { title: "Platform and back office", text: "Accounts, wallet, bonuses, risk and reporting, configured for your brand." },
        { title: "Game library", text: "Every studio on the Aggregator, switched on per brand." },
        { title: "Front end", text: "Use ours and change everything players see, or run your own on our API." },
        { title: "Payments setup", text: "Your providers connected, routed and tested before launch day." },
        { title: "Launch support", text: "A team that has done this before, on the call when you go live." },
        { title: "After launch", text: "Real people behind your roadmap. Features built with you, not shipped at you." },
      ],
    },
    {
      type: "steps",
      heading: { eyebrow: "How it works", index: "02", title: "How a launch runs" },
      items: [
        { title: "Scoping call", text: "What you need, what you have, and a date." },
        { title: "Configuration", text: "Brand, games, bonuses and back office set up." },
        { title: "Payments and integrations", text: "Your providers and tools connected and tested." },
        { title: "Go live", text: "We are on the call. Then we keep building." },
      ],
    },
    {
      type: "callout",
      kicker: "Commercials",
      title: "One revenue share. No setup surprises.",
      text: "No fees that appear at renewal. You can model your costs on a napkin.",
      link: { label: "Talk numbers with us", href: "/contact/" },
    },
    { type: "quote", text: "We don't sign everyone. When we take a brand on, it's a strategic partnership: support across the board, our resource behind your roadmap, and loyalty that shows up when things get difficult." },
    {
      type: "faq",
      eyebrow: "Turnkey Casino",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "How long does a turnkey launch take?", answer: "It depends on your licence, payments and how much custom work you want. We give you a date on the scoping call and tell you what could move it." },
        { question: "Do we need our own licence?", answer: "For turnkey, yes. If you don't have one yet, look at White Label or our Licensing & Banking support." },
        { question: "Can we migrate from another platform?", answer: "Yes. Players, balances and history are migrated with a plan agreed up front and no downtime for players during the switch." },
      ],
    },
    { type: "related", title: "More in Solutions", all: "All Solutions" },
  ],
};

export default page;
