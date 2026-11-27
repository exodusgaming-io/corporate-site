import type { Page } from "../../../types";

const page: Page = {
  path: "/integrations/affiliate-systems/",
  label: "Affiliate Systems",
  blurb: "Tracking and post-backs partners can reconcile.",
  seo: { title: "Affiliate Systems", description: "We connect to your affiliate platform with tracking from first click to first deposit, and post-backs your partners can actually reconcile." },
  hero: {
    kind: "page",
    title: "Affiliates paid on numbers they can check.",
    lead: "We connect to your affiliate platform with tracking from first click to first deposit, and post-backs your partners can actually reconcile.",
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
        { icon: "nodes", title: "Click to deposit", text: "Every step tracked, from first click to first deposit." },
        { icon: "chartup", title: "Post-backs", text: "Server-to-server, in real time." },
        { icon: "calculator", title: "Commission data", text: "GGR and NGR feeds by player, brand and day." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Affiliate Systems", index: "01", title: "What's connected" },
      items: [
        { title: "Tracking links and tags", text: "Attribution parameters captured at registration and kept with the player." },
        { title: "Server-to-server post-backs", text: "Registrations, deposits and qualifying events sent as they happen." },
        { title: "Revenue feeds", text: "GGR, NGR, bonus cost and fees per player for revenue-share deals." },
        { title: "Sub-affiliates", text: "Multi-level tracking where your programme uses it." },
        { title: "Brand split", text: "One affiliate platform across several brands, reported separately." },
        { title: "Fraud filtering", text: "Suspicious traffic flagged before commission is calculated." },
      ],
    },
    {
      type: "faq",
      eyebrow: "Affiliate Systems",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Which affiliate platforms do you support?", answer: "The common ones. If yours isn't there, we build it." },
        { question: "Can affiliates see real-time data?", answer: "Yes, through post-backs and your affiliate platform's dashboards." },
        { question: "How is NGR calculated?", answer: "Using the formula you define, documented so affiliates can check it." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
