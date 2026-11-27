import type { Page } from "../../../types";

const page: Page = {
  path: "/solutions/licensing-and-banking/",
  label: "Licensing & Banking",
  blurb: "Sorted before launch day, not after.",
  seo: { title: "Licensing & Banking", description: "Most launches don't slip on technology. They slip on a licence application stuck in review or a bank account that won't open." },
  hero: {
    kind: "page",
    title: "Licence and banking, sorted before launch day.",
    lead: "Most launches don't slip on technology. They slip on a licence application stuck in review or a bank account that won't open. We help with both, with people who have done it before.",
    image: { src: "/brand/glass-x.jpg" },
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
        { icon: "clipboard", title: "Licence applications", text: "The platform side of every application prepared by us." },
        { icon: "bank", title: "Banking introductions", text: "Introductions to banks that work with operators." },
        { icon: "card", title: "Payment provider setup", text: "Onboarding with providers that suit your model." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Licensing & Banking", index: "01", title: "Where we help" },
      items: [
        { title: "Licence guidance", text: "Which licence fits your model, and what each one asks of you." },
        { title: "Corporate structure", text: "Introductions to advisers who set these up every week." },
        { title: "Technical documentation", text: "Platform, RNG and security documents prepared for your application." },
        { title: "Banking partners", text: "Banks that understand the business, introduced by people they know." },
        { title: "Payment onboarding", text: "Provider applications prepared alongside your licence." },
        { title: "Ongoing compliance", text: "Reporting and audits supported by the platform after launch." },
      ],
    },
    {
      type: "callout",
      kicker: "Honest note",
      title: "We are a platform provider, not a law firm.",
      text: "We introduce you to the right advisers and handle the platform side of every application. Legal advice comes from lawyers.",
    },
    {
      type: "faq",
      eyebrow: "Licensing & Banking",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we launch while the licence is in progress?", answer: "Yes, on White Label. Move to turnkey when your licence lands." },
        { question: "Will this be split into separate licensing and banking pages?", answer: "Possibly, as the content grows. For now both live here." },
        { question: "Is there a fee for introductions?", answer: "We tell you up front if anything costs money and who it goes to." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
