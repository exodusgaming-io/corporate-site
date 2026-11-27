import type { Page } from "../../types";

const page: Page = {
  path: "/products/",
  label: "Products",
  seo: {
    title: "Products",
    description: "Platform, Exodus Engine, Exodus AI, Aggregator and Jackpots: five iGaming products on one core, under your brand.",
  },
  hero: {
    kind: "page",
    title: "The technology under your brand.",
    lead: "**Five products, one core.** Use the whole stack, or the parts you need. Either way it runs under your brand, and players never see ours.",
    actions: [{ label: "Book a demo", href: "#demo" }],
  },
  sections: [
    {
      type: "productCards",
      featured: {
        page: "/products/platform/",
        icon: "database",
        kicker: "The core",
        text: "Player accounts, wallet, bonuses, back office and reporting in one place. Everything else on this page plugs into it.",
        tags: ["Player accounts", "Wallet & cashier", "Bonus engine", "Back office", "Reporting"],
        image: { src: "/brand/glass-slabs.jpg" },
        cta: "Explore Platform",
      },
      items: [
        { page: "/products/exodus-engine/", icon: "trophy", text: "Tournaments, missions and loyalty your CRM team builds and launches without waiting for a release." },
        { page: "/products/exodus-ai/", icon: "wand", text: "Risk flags, offer suggestions and plain-language reporting inside the back office. It suggests; your team decides." },
        { page: "/products/aggregator/", icon: "nodes", text: "One API to every studio we carry. One wallet integration, one game list, one set of round data." },
        { page: "/products/jackpots/", icon: "crown", text: "Brand-level jackpots you fund, tier and attach to games yourself. You see exactly what they cost." },
      ],
      cta: "Explore",
    },
    {
      type: "stack",
      heading: {
        eyebrow: "The stack",
        index: "01",
        title: "How it fits together.",
        aside: "Your brand on top, the platform in the middle, games, payments and your tools underneath. Click any block.",
      },
      brand: { title: "Your brand", text: "Front end · Domain · Players · Your team" },
      top: ["/products/exodus-engine/", "/products/exodus-ai/", "/products/jackpots/"],
      core: {
        page: "/products/platform/",
        parts: ["Player accounts", "Wallet & cashier", "Bonus engine", "Back office", "Risk", "Reporting"],
      },
      bottom: [
        { page: "/products/aggregator/", text: "Studios · Game list · Round data" },
        { page: "/payment-solutions/", title: "Payments", text: "Cards · Crypto · Bank transfer · APMs" },
        { page: "/integrations/", text: "CRM · Affiliates · Analytics · Risk · Messaging" },
      ],
    },
    {
      type: "markerList",
      eyebrow: "Simple on purpose",
      index: "02",
      title: "Complexity isn't a feature.",
      lead: "The industry assumes a good platform has to be complicated. Our view is that most of that complexity is there for its own sake, and that a clean core is what actually makes operators money.",
      label: "What we leave out",
      marker: "cross",
      items: [
        { title: "Modules you'll never switch on" },
        { title: "Fees for features you already paid for" },
        { title: "Three account managers between you and a developer" },
      ],
    },
    {
      type: "compare",
      items: [
        { eyebrow: "Products", title: "What it is.", text: "The technology: platform, engine, AI, aggregator and jackpots." },
        {
          eyebrow: "Solutions",
          title: "What it's for.",
          text: "How you buy it: turnkey, white label, sweepstakes, crypto and the services around a launch.",
          page: "/solutions/",
        },
      ],
    },
  ],
};

export default page;
