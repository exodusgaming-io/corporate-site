import type { Page } from "../../../types";

const page: Page = {
  path: "/integrations/analytics-and-tracking/",
  label: "Analytics & Tracking",
  blurb: "Clean events into the tools you already use.",
  seo: { title: "Analytics & Tracking", description: "Tag managers, product analytics and your data warehouse, fed from the platform with clean, documented events." },
  hero: {
    kind: "page",
    title: "See what's happening on your brand without an export.",
    lead: "Tag managers, product analytics and your data warehouse, fed from the platform with clean, documented events.",
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
        { icon: "pie", title: "Product analytics", text: "Funnels and cohorts in the tool your team already knows." },
        { icon: "database", title: "Warehouse export", text: "Raw tables in your warehouse, refreshed on a schedule." },
        { icon: "clipboard", title: "Data dictionary", text: "Every event and field documented." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Analytics & Tracking", index: "01", title: "What's connected" },
      items: [
        { title: "Tag manager support", text: "Data layer events on every page of our front end." },
        { title: "Product analytics", text: "Client and server events to the analytics tool you use." },
        { title: "Warehouse export", text: "Players, transactions, rounds and bonuses as tables." },
        { title: "Server-side events", text: "Conversions sent server to server so ad blockers don't eat them." },
        { title: "Attribution", text: "Campaign parameters kept with the player from first visit." },
        { title: "Data dictionary", text: "Names and definitions that match the back office." },
      ],
    },
    {
      type: "faq",
      eyebrow: "Analytics & Tracking",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we get raw data?", answer: "Yes, as scheduled exports to your warehouse." },
        { question: "Do numbers match the back office?", answer: "They come from the same source and use the same definitions. If they don't match, that's a bug and we fix it." },
        { question: "Do you support server-side tracking?", answer: "Yes, for conversions and key lifecycle events." },
      ],
    },
    { type: "related", title: "More in Integrations", all: "All Integrations" },
  ],
};

export default page;
