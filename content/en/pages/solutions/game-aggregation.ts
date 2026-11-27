import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/game-aggregation/",
  label: "Game Aggregation",
  blurb: "Every studio, one contract, one conversation.",
  seo: { title: "Game Aggregation", description: "Game Aggregation is how studios go live on your brand: contracts, commercial terms, onboarding and certification handled through us." },
  hero: {
    kind: "page",
    title: "Every studio. One contract. One conversation.",
    lead: "Game Aggregation is how studios go live on your brand: contracts, commercial terms, onboarding and certification handled through us. The technology behind it is the Aggregator.",
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
        { icon: "handshake", title: "One contract", text: "One agreement with us instead of one per studio." },
        { icon: "percent", title: "Terms up front", text: "Studio fees passed through as agreed and shown up front." },
        { icon: "clock", title: "Onboarding handled", text: "Paperwork, certification and testing run by our team." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Game Aggregation", index: "01", title: "What we handle" },
      items: [
        { title: "Contracting", text: "Studio agreements negotiated and maintained by us." },
        { title: "Commercial terms", text: "Rates per studio in writing before anything goes live." },
        { title: "Certification", text: "Game certificates and documentation in one place." },
        { title: "Studio onboarding", text: "Accounts, testing and go-live dates coordinated for you." },
        { title: "Release calendar", text: "New titles flagged ahead of launch so your marketing can plan." },
        { title: "New studio requests", text: "Ask for a studio we don't carry. We'll tell you if and when." },
      ],
    },
    {
      type: "steps",
      heading: { eyebrow: "How it works", index: "02", title: "From shortlist to live" },
      items: [
        { title: "Pick your studios", text: "From our list, or tell us who you want." },
        { title: "Agree terms", text: "Rates in writing, per studio." },
        { title: "Certify and configure", text: "Paperwork and setup handled." },
        { title: "Go live", text: "Games in your lobby." },
      ],
    },
    {
      type: "callout",
      kicker: "Game Aggregation vs. Aggregator",
      title: "This page is the deal. The Aggregator is the tech.",
      text: "API, wallet modes and round data live on the Aggregator page.",
      link: { label: "Aggregator", href: "/products/aggregator/" },
    },
    {
      type: "faq",
      eyebrow: "Game Aggregation",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we add a studio you don't carry?", answer: "Ask. We'll tell you whether it's possible and how long it takes, honestly." },
        { question: "How are studio fees invoiced?", answer: "One invoice from us, broken down by studio." },
        { question: "Can we hold direct contracts with some studios?", answer: "Yes. Tell us which, and we'll connect them through the same integration." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
