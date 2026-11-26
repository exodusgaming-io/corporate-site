import type { Page } from "../../types";

const page: Page = {
  path: "/sportsbook/",
  label: "Sportsbook",
  seo: {
    title: "Sportsbook",
    description: "A sportsbook that shares one account, one balance and one back office with your casino. Pre-match, live, bet builder, cash out and risk controls.",
  },
  hero: {
    kind: "page",
    bright: true,
    titleWidth: 15,
    title: "A sportsbook that shares a wallet with your casino.",
    lead: "One account, one balance, one back office. Players move between a match and a slot without a transfer screen, and your team sees one player instead of two.",
    actions: [{ label: "Book a demo", href: "#demo" }],
    shot: "PRODUCT SCREENSHOT — sportsbook front end, live match + bet slip",
  },
  sections: [
    {
      type: "cards",
      card: "feature",
      heading: { eyebrow: "What's in it", index: "01", title: "The bets players expect. The controls you need." },
      pb: "lg",
      items: [
        { icon: "clock", title: "Pre-match and live", text: "Markets before kick-off and in play, with prices that move when the game does." },
        { icon: "puzzle", title: "Bet builder", text: "Several outcomes from one match in a single bet." },
        { icon: "exchange", title: "Cash out", text: "Full and partial, with rules you set per market." },
        { icon: "shieldalert", title: "Risk management", text: "Limits by player, market and event. Traders see liability in real time." },
        { icon: "chart", title: "Odds and feeds", text: "Managed odds, or your own margins on top of the feed." },
        { icon: "gift", title: "Shared promotions", text: "Free bets and boosts from the same bonus engine as your casino." },
      ],
    },
    {
      type: "wallet",
      eyebrow: "Cross-sell",
      index: "02",
      title: "One player. One wallet. Two products.",
      lead: "A sports bettor who tries a slot at half-time is the same player in your reports, your CRM and your risk queue. No reconciling two systems at month end.",
      left: "Casino",
      middle: "One wallet",
      right: "Sportsbook",
    },
    {
      type: "faq",
      eyebrow: "Sportsbook",
      title: "Questions operators ask",
      items: [
        {
          question: "Can we launch sportsbook on its own?",
          answer: "Yes. Sportsbook-only brands run on the same platform, and you can add casino later without a migration.",
        },
        { question: "Who manages the odds?", answer: "Managed trading, or your own team adjusting margins and limits. Your call, per sport." },
        {
          question: "Do casino bonuses and free bets share rules?",
          answer: "They come from the same bonus engine, so wagering, caps and eligibility work the same way.",
        },
        { question: "Can we use our own sportsbook front end?", answer: "Yes, through the API. Or use ours and change everything players see." },
      ],
    },
  ],
};

export default page;
