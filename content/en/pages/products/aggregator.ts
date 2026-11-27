import type { Page } from "../../../types";

const page: Page = {
  path: "/products/aggregator/",
  label: "Aggregator",
  blurb: "One API to every studio we carry.",
  seo: { title: "Aggregator", description: "The Aggregator connects your brand to every studio we carry through a single API. One wallet integration, one game list, one set of round data." },
  hero: {
    kind: "page",
    title: "One integration. The whole game library.",
    lead: "The Aggregator connects your brand to every studio we carry through a single API. One wallet integration, one game list, one set of round data. This page is the technical side; the commercial side lives on Game Aggregation.",
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
        { icon: "nodes", title: "Single API", text: "Launch, wallet, round history and free rounds through one integration." },
        { icon: "dice", title: "Every vertical", text: "Slots, live casino, crash, table and instant games under one connection." },
        { icon: "filter", title: "Metadata that works", text: "RTP, volatility, features and categories tagged consistently, so lobby filters actually filter." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Aggregator", index: "01", title: "Technical spec" },
      items: [
        { title: "Wallet integration", text: "Single and transfer wallet modes. Your balance stays the source of truth." },
        { title: "Game launch and sessions", text: "Real-money, demo and sweeps launch URLs with consistent session handling across studios." },
        { title: "Round history", text: "Every round, every studio, one format. Support stops asking providers for logs." },
        { title: "Free-round API", text: "Award free rounds across studios from your bonus engine with one call." },
        { title: "Lobby feed", text: "New releases, thumbnails and metadata delivered as a feed your front end can read." },
        { title: "Provider status", text: "Know when a studio is down before your players tell you." },
      ],
    },
    {
      type: "code",
      title: "Documented, versioned, boring in the best way.",
      text: "Sandbox access and full API docs from the first call. Your developers talk to ours directly.",
      code: "POST /v1/games/launch\n{\n  \"player_id\": \"p_29481\",\n  \"game_id\": \"studio-x:fire-reels\",\n  \"currency\": \"EUR\",\n  \"mode\": \"real\",\n  \"return_url\": \"https://yourbrand.com/lobby\"\n}",
    },
    {
      type: "callout",
      kicker: "Aggregator vs. Game Aggregation",
      title: "This page is the tech. Game Aggregation is the deal.",
      text: "Contracts, onboarding, certification and commercials with studios are covered on the Game Aggregation page.",
      link: { label: "Game Aggregation", href: "/solutions/game-aggregation/" },
    },
    {
      type: "faq",
      eyebrow: "Aggregator",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "How long does integration take?", answer: "It depends on your wallet. We scope it on the first call and give you a date we intend to keep." },
        { question: "Can we choose which studios go live?", answer: "Yes, per brand. Switch studios and individual games on or off in the back office." },
        { question: "Is there a sandbox?", answer: "Yes, with test games from each studio and full API documentation." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
