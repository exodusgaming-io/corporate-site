import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/sweepstakes/",
  label: "Sweepstakes",
  blurb: "Two currencies, kept apart properly.",
  seo: { title: "Sweepstakes", description: "Dual-currency wallets, redemptions and free entry handled at platform level." },
  hero: {
    kind: "page",
    title: "Sweepstakes, with the coin logic done properly.",
    lead: "Dual-currency wallets, redemptions and free entry handled at platform level. You set the economy; the platform keeps the two currencies apart and the paperwork in order.",
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
        { icon: "coins", title: "Two currencies", text: "Play coins and sweeps coins tracked separately from the first purchase." },
        { icon: "gift", title: "Free entry", text: "Daily bonuses and mail-in requests handled inside the flow." },
        { icon: "exchange", title: "Redemptions", text: "Checks, KYC and payout in one queue your team can work through." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Sweepstakes", index: "01", title: "What you get" },
      items: [
        { title: "Dual-coin wallet", text: "Purchase, bonus and redemption balances that reconcile." },
        { title: "Coin packages", text: "Bundles, pricing and promotions set in the back office." },
        { title: "Redemption flow", text: "Eligibility, KYC triggers and payout approvals in one place." },
        { title: "Free entry methods", text: "Every free entry route logged and auditable." },
        { title: "Sweeps-ready games", text: "Studios that support sweepstakes, already filtered in the Aggregator." },
        { title: "Compliance reporting", text: "The reports you need, without building them in a spreadsheet." },
      ],
    },
    {
      type: "steps",
      heading: { eyebrow: "How it works", index: "02", title: "How it fits together" },
      items: [
        { title: "Purchase", text: "Player buys a play-coin package." },
        { title: "Bonus coins", text: "Sweeps coins credited by your rules." },
        { title: "Play", text: "Sweeps-ready games, one lobby." },
        { title: "Redeem", text: "KYC, approval, payout." },
      ],
    },
    {
      type: "faq",
      eyebrow: "Sweepstakes",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we run sweepstakes and real-money brands from one back office?", answer: "Yes. Separate brands, separate wallets, one login for your team." },
        { question: "Which games can we offer?", answer: "Titles from studios that support sweepstakes. The Aggregator filters them for you." },
        { question: "Who handles KYC on redemption?", answer: "The platform triggers it at redemption, through your KYC provider." },
      ],
    },
    { type: "related", title: "More in Solutions", all: "All Solutions" },
  ],
};

export default page;
