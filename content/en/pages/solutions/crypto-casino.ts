import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/crypto-casino/",
  label: "Crypto Casino",
  blurb: "Crypto as the default, not a plugin.",
  seo: { title: "Crypto Casino", description: "Crypto as the default, not a plugin." },
  hero: {
    kind: "page",
    title: "A casino where crypto is the default, not a plugin.",
    lead: "Crypto Casino is the full setup: multi-coin wallets, crypto-native games, on-chain deposits and withdrawals, and a front end built for players who pay in coins. If you only need crypto as a payment method, Payment Solutions covers it.",
    image: { src: "/brand/glass-chevrons.jpg" },
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
        { icon: "coins", title: "Multi-coin wallet", text: "Players hold several coins and play in the one they choose." },
        { icon: "bolt", title: "Fast withdrawals", text: "Automatic approvals inside limits your risk team sets." },
        { icon: "shield", title: "Risk controls", text: "Address screening and velocity checks on every transaction." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Crypto Casino", index: "01", title: "What you get" },
      items: [
        { title: "Multi-currency wallet", text: "Balances per coin, with conversion shown at the rate used." },
        { title: "Display currency", text: "Players see amounts in the currency they think in." },
        { title: "Crypto-native games", text: "Crash, dice, plinko and provably fair titles next to the usual lobby." },
        { title: "Automated withdrawals", text: "Rules by amount, coin and segment. People review the rest." },
        { title: "Address screening", text: "Deposits and withdrawals checked against screening providers." },
        { title: "Fiat on-ramp", text: "Players without coins can buy them inside the cashier." },
      ],
    },
    {
      type: "callout",
      kicker: "Crypto Casino vs. Payment Solutions",
      title: "This page is the full casino. Payment Solutions lists the coins.",
      text: "If you run a fiat casino and want crypto as one more way to pay, start there.",
      link: { label: "Payment Solutions", href: "/payment-solutions/" },
    },
    {
      type: "faq",
      eyebrow: "Crypto Casino",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Which coins are supported?", answer: "The current list lives on Payment Solutions. If you need one that is not there, ask." },
        { question: "Do we need our own licence?", answer: "For turnkey, yes. White label options are available too." },
        { question: "Can players also pay in fiat?", answer: "Yes. Cards and local methods can sit next to crypto in the same cashier." },
      ],
    },
    { type: "related", title: "More in Solutions", all: "All Solutions" },
  ],
};

export default page;
