import type { Page } from "../../../types";

const page: Page = {
  path: "/products/platform/",
  label: "Platform",
  blurb: "Accounts, wallet, bonuses, back office and reporting.",
  seo: { title: "Platform", description: "Player accounts, wallet, bonuses, back office and reporting in one place." },
  hero: {
    kind: "page",
    title: "The core everything else runs on.",
    lead: "Player accounts, wallet, bonuses, back office and reporting in one place. Built clean on purpose: most platform complexity exists for its own sake, and operators pay for it.",
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
        { icon: "database", title: "One wallet", text: "Casino and sportsbook share a balance, a player and a history." },
        { icon: "settings", title: "Your back office", text: "Limits, bonuses, segments and roles set by your team. No ticket required." },
        { icon: "chart", title: "Reporting you can read", text: "GGR, deposits, retention and bonus cost by brand and by day, without an export." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Platform", index: "01", title: "What's in it" },
      items: [
        { title: "Player account management", text: "Registration, KYC states, limits, self-exclusion and notes on one screen. Your support team stops tab-hopping." },
        { title: "Wallet and cashier", text: "Real money, bonus money and sweeps coins tracked separately, so the numbers reconcile at month end." },
        { title: "Bonus engine", text: "Free rounds, deposit matches, cashback and wagering rules your team sets up without us." },
        { title: "Multibrand", text: "Several brands from one back office, each with its own config, payments and content." },
        { title: "Roles and permissions", text: "Decide who sees player data, who approves withdrawals and who can touch bonuses." },
        { title: "Audit trail", text: "Every manual change logged with who, what and when." },
      ],
    },
    { type: "shot", label: "PRODUCT SCREENSHOT — back office, player overview" },
    {
      type: "callout",
      kicker: "Products vs. Solutions",
      title: "The platform is the technology. Turnkey and white label are how you buy it.",
      text: "Same core either way. The difference is who holds the licence, the payments and the day-to-day.",
      link: { label: "Compare launch models", href: "/solutions/" },
    },
    {
      type: "faq",
      eyebrow: "Platform",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we bring our own front end?", answer: "Yes. The platform runs headless through our API, or you use our front end and change everything your players see." },
        { question: "How do bonus rules get configured?", answer: "In the back office, by your team. Wagering, eligibility, expiry and caps are fields, not development tickets." },
        { question: "What if we need something the platform doesn't do?", answer: "Tell us. If it makes sense for your setup we build it, and we tell you honestly how long it'll take." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
