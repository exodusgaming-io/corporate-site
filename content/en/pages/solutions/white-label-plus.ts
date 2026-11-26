import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/white-label-plus/",
  label: "White Label Plus",
  blurb: "White label, with a team building for you.",
  seo: { title: "White Label Plus", description: "White Label Plus is our white label foundation with custom development, a dedicated team and more control over the stack." },
  hero: {
    kind: "page",
    title: "White label, with a team building for you.",
    lead: "White Label Plus is our white label foundation with custom development, a dedicated team and more control over the stack. For operators who want to launch fast and still have features built for their setup.",
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
        { icon: "tools", title: "Custom features", text: "Built for your brand, on your timeline." },
        { icon: "handshake", title: "Dedicated team", text: "Named people who know your brand and answer the phone." },
        { icon: "settings", title: "More control", text: "Bring your own providers and tools where it matters to you." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "White Label Plus", index: "01", title: "On top of White Label" },
      items: [
        { title: "Dedicated product owner", text: "One person who owns your roadmap on our side." },
        { title: "Custom front end", text: "Built from your designs, not adapted from a template." },
        { title: "Features on request", text: "Your requests go into development, not a feedback form." },
        { title: "Priority roadmap", text: "Your priorities shape what we ship next." },
        { title: "Your own providers", text: "Add payment, CRM or risk providers you already have contracts with." },
        { title: "A path to turnkey", text: "When your licence lands, move across without rebuilding." },
      ],
    },
    {
      type: "callout",
      kicker: "White Label vs. White Label Plus",
      title: "Same licence and payments. Plus adds our team building for your brand.",
      text: "If the standard setup covers you, White Label is the simpler choice. We'll tell you which one fits.",
      link: { label: "See White Label", href: "/solutions/white-label/" },
    },
    {
      type: "faq",
      eyebrow: "White Label Plus",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "How much custom work is included?", answer: "We agree the scope and the team up front, so nothing appears on an invoice later." },
        { question: "Can we start on White Label and upgrade?", answer: "Yes. Same platform, same brand, no migration." },
        { question: "Who owns the custom features?", answer: "We talk about it before we build, and write down what's agreed." },
      ],
    },
    { type: "related", title: "More in Solutions", all: "All Solutions" },
  ],
};

export default page;
