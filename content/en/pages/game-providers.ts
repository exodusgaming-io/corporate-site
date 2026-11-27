import type { Page } from "../../types";

// TODO(#6545): the real studio list, counts and logos from marketing. Placeholder data, as in the mockup.
const categories = ["Slots", "Live casino", "Crash & instant", "Table", "Slots", "Slots"];
const studios = Array.from({ length: 24 }, (_, i) => ({
  name: `Studio ${String(i + 1).padStart(2, "0")}`,
  category: categories[i % categories.length],
  sweeps: i % 3 === 0,
}));

const page: Page = {
  path: "/game-providers/",
  label: "Game Providers",
  seo: {
    title: "Game Providers",
    description: "Slots, live casino, crash, table and instant games from the studios players know, live on your brand through one integration.",
  },
  hero: {
    kind: "page",
    title: "The games your players already look for.",
    lead: "Slots, live casino, crash, table and instant games from the studios players know, live on your brand through one integration.",
    stats: [
      { value: "000+", label: "Studios", note: "To confirm" },
      { value: "00,000+", label: "Games", note: "To confirm" },
      { value: "1", label: "Integration to get all of them" },
    ],
  },
  sections: [
    {
      type: "studios",
      filterLabel: "Filter studios",
      all: "All",
      categories: ["Slots", "Live casino", "Crash & instant", "Table"],
      sweepsFilter: "Sweeps-ready",
      search: "Search studios",
      count: "Showing {shown} of {total} studios · placeholder data",
      studios,
      sweepsLabel: "Sweeps",
      logo: "STUDIO LOGO",
      empty: { text: "No studio by that name yet. Want it?", action: { label: "Ask for a studio", href: "/contact/" } },
    },
    {
      type: "steps",
      tone: "light",
      pt: "lg",
      pb: "lg",
      heading: {
        eyebrow: "Missing a studio?",
        index: "01",
        title: "Ask. We'll tell you how long, honestly.",
        action: { label: "Request a studio →", href: "/contact/" },
      },
      items: [
        { title: "You name the studio", text: "And the titles your players keep asking for." },
        { title: "We check and quote", text: "Terms, certification and a realistic date." },
        { title: "We integrate", text: "Once, through the Aggregator. You change nothing." },
        { title: "Games go live", text: "On every brand you switch them on for." },
      ],
    },
    {
      type: "crossLinks",
      pt: "lg",
      items: [
        { kicker: "The technology", page: "/products/aggregator/" },
        { kicker: "The deal", page: "/solutions/game-aggregation/" },
      ],
    },
  ],
};

export default page;
