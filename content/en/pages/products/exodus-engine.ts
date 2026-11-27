import type { Page } from "../../../types";

const page: Page = {
  path: "/products/exodus-engine/",
  label: "Exodus Engine",
  blurb: "Tournaments, missions and loyalty your team runs.",
  seo: { title: "Exodus Engine", description: "Exodus Engine is the engagement layer on top of the platform. Your CRM team builds the campaign, sets the rules and launches it." },
  hero: {
    kind: "page",
    title: "Tournaments, missions and loyalty your team runs without us.",
    lead: "Exodus Engine is the engagement layer on top of the platform. Your CRM team builds the campaign, sets the rules and launches it. Nobody waits for a release.",
    image: { src: "/brand/glass-ridges.jpg" },
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
        { icon: "trophy", title: "Tournaments", text: "Leaderboards by wins, multipliers or turnover, across any games you pick." },
        { icon: "award", title: "Missions", text: "Chains of tasks with rewards at each step. Daily, weekly or one-off." },
        { icon: "crown", title: "Loyalty levels", text: "Points, tiers and perks you define, tied to real activity." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Exodus Engine", index: "01", title: "Built for the CRM team" },
      items: [
        { title: "Rule builder", text: "Conditions, games, dates and rewards as fields. If you can describe it, you can build it." },
        { title: "Live leaderboards", text: "Updated in real time on site, in app and in the back office." },
        { title: "Reward shop", text: "Players spend points on free rounds, bonuses or anything else you list." },
        { title: "Segment targeting", text: "Run a campaign for VIPs, new depositors or a list you upload." },
        { title: "Cost caps", text: "Set the maximum a campaign can pay out before it goes live." },
        { title: "Results you can trust", text: "Participation, cost and incremental deposits per campaign, by brand." },
      ],
    },
    { type: "shot", label: "PRODUCT SCREENSHOT — tournament builder" },
    {
      type: "steps",
      heading: { eyebrow: "How it works", index: "02", title: "From idea to live" },
      items: [
        { title: "Pick a mechanic", text: "Tournament, mission, level or shop item." },
        { title: "Set rules and rewards", text: "Games, conditions, prizes and a cost cap." },
        { title: "Choose the audience", text: "A segment, a brand or everyone." },
        { title: "Launch and watch", text: "Live numbers from the first minute." },
      ],
    },
    {
      type: "faq",
      eyebrow: "Exodus Engine",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Do campaigns need a developer?", answer: "No. Everything is configured in the back office by your team." },
        { question: "Can players see campaigns in our own front end?", answer: "Yes. Widgets for our front end, or API endpoints if you run your own." },
        { question: "How do you stop campaigns from being abused?", answer: "Eligibility rules, cost caps and the same risk checks the rest of the platform uses." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
