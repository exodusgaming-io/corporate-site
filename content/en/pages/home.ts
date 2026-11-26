import type { Page } from "../../types";

const page: Page = {
  path: "/",
  label: "Home",
  seo: {
    title: "Casino, sweepstakes and sportsbook platform",
    description: "Exodus is the platform provider behind operators who want to launch fast, grow without renegotiating every quarter and talk to the people who build the product.",
  },
  hero: {
    kind: "home",
    title: ["Launch.", "Scale.", "Repeat."],
    lead: "**Across casino, sweeps and sportsbook.** Exodus is the platform provider behind operators who want to launch fast, grow without a renegotiation every quarter, and talk to the people who build the product.",
    actions: [
      { label: "Book a demo", href: "#demo" },
      { label: "See solutions", href: "/solutions/", variant: "outline" },
    ],
    points: ["Turnkey and white label", "One revenue share", "Features built on request", "A decision-maker on every call"],
  },
  sections: [
    {
      type: "statement",
      eyebrow: "Why Exodus",
      index: "01",
      bright: "Most launches slip because the platform doesn't deliver on time.",
      muted: "Bugs left unfixed, payments not configured, features never switched on, onboarding done wrong.",
      image: { src: "/brand/glass-chevrons.jpg", position: "50% 70%" },
      paragraphs: [
        "We built Exodus to turn up on the date it gave you. There are no layers of decision makers and no corporate mess, so requests don't queue behind a roadmap review.",
        "We're a small team. We're selective about who we take on so we can actually deliver for the ones we do.",
      ],
      link: { label: "How we work", href: "/about/" },
    },
    {
      type: "linkList",
      heading: {
        eyebrow: "Solutions",
        index: "02",
        title: "Pick the model. We build the rest with you.",
        link: { label: "Compare solutions", href: "/solutions/" },
      },
      items: [
        { page: "/solutions/turnkey-casino/", text: "Your licence and payments. Our platform underneath." },
        { page: "/solutions/white-label/", text: "Launch under our licence while you build your own." },
        { page: "/solutions/white-label-plus/", text: "White label, with a team building features for you." },
        { page: "/solutions/sweepstakes/", text: "Two currencies, kept apart properly." },
        { page: "/solutions/crypto-casino/", text: "Crypto as the default, not a plugin." },
        { page: "/solutions/game-aggregation/", text: "Every studio, one contract, one conversation." },
        { page: "/solutions/licensing-and-banking/", text: "Sorted before launch day, not after." },
      ],
    },
    {
      type: "featureGrid",
      tone: "light",
      heading: { eyebrow: "How we work", index: "03", title: "Fast, transparent, and actually builds what you ask for." },
      items: [
        { icon: "bolt", title: "Fast", text: "No unnecessary layers of decision makers. Requests don't queue behind a roadmap review." },
        {
          icon: "calculator",
          title: "Transparent",
          text: "One revenue share. No setup surprises, no fees that appear at renewal. You can model your costs on a napkin.",
        },
        {
          icon: "tools",
          title: "Built with you",
          text: "We build features with our operators, not a catalogue at them. You set the direction. We build to get you there.",
        },
        {
          icon: "handshake",
          title: "Selective",
          text: "We don't sign everyone. When we take a brand on, our people go behind its roadmap and stay there.",
        },
      ],
    },
    {
      type: "productTabs",
      heading: {
        eyebrow: "Products",
        index: "04",
        title: "Five products. One clean core.",
        aside: "The industry assumes a good platform has to be complicated. Most of that complexity is there for its own sake.",
      },
      explore: "Explore",
      items: [
        {
          page: "/products/platform/",
          shot: "PRODUCT SCREENSHOT — back office, player overview",
          text: "Player accounts, wallet, bonuses, back office and reporting in one place. The core everything else runs on.",
        },
        {
          page: "/products/exodus-engine/",
          shot: "PRODUCT SCREENSHOT — tournament builder",
          text: "Tournaments, missions and loyalty your CRM team builds and launches without waiting for a release.",
        },
        {
          page: "/products/exodus-ai/",
          shot: "PRODUCT SCREENSHOT — risk alerts and suggestions",
          text: "Flags risky players, suggests the next offer by segment and drafts the reports nobody likes writing. It suggests; your team decides.",
        },
        {
          page: "/products/aggregator/",
          shot: "PRODUCT SCREENSHOT — game list management",
          text: "One API to every studio we carry. One wallet integration, one game list, one set of round data.",
        },
        {
          page: "/products/jackpots/",
          shot: "PRODUCT SCREENSHOT — jackpot tier configuration",
          text: "Brand-level jackpots you fund, tier and attach to games yourself. Players see the number move; you see what it costs.",
        },
      ],
    },
    {
      type: "cards",
      card: "status",
      pt: "md",
      pb: "md",
      minWidth: 320,
      heading: { eyebrow: "Recently shipped", index: "05", title: "Things operators asked for. And got." },
      items: [
        {
          status: "Shipped",
          meta: "Platform · Bonus engine",
          title: "Self-serve free rounds",
          text: "An operator asked for free-round campaigns they could set up without us. Now they can.",
        },
        {
          status: "Shipped",
          meta: "Payments · Cashier",
          title: "A payment method, by next week",
          text: "An operator asked for a local payment method on a Tuesday. It was live the following week.",
        },
        {
          status: "Shipped",
          meta: "Risk · Withdrawals",
          title: "Approvals by segment",
          text: "A risk team wanted VIP withdrawals checked by a person and everything under a limit approved automatically. Built, tested, switched on.",
        },
      ],
    },
    {
      type: "tiles",
      heading: {
        eyebrow: "Coverage",
        index: "06",
        title: "Plugs into what you already run.",
        lead: "Payments, studios, sportsbook and the tools your CRM, affiliate and risk teams already use. If something's missing, ask. We build integrations on request.",
      },
      items: [
        { page: "/payment-solutions/", icon: "card" },
        { page: "/game-providers/", icon: "dice" },
        { page: "/sportsbook/", icon: "trophy" },
        { page: "/integrations/crm/", icon: "nodes" },
        { page: "/integrations/affiliate-systems/", icon: "chartup" },
        { page: "/integrations/analytics-and-tracking/", icon: "pie" },
        { page: "/integrations/risk-and-fraud/", icon: "shield" },
        { page: "/integrations/communication/", icon: "mail" },
      ],
    },
    {
      type: "quote",
      image: { src: "/brand/glass-ridges.jpg" },
      text: "We don't sign everyone. When we take a brand on, it's a strategic partnership: support across the board, our resource behind your roadmap, and loyalty that shows up when things get difficult.",
      link: { label: "How we choose who we work with", href: "/about/" },
    },
  ],
};

export default page;
