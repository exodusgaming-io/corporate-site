import type { Page } from "../../../types";

const page: Page = {
  path: "/integrations/communication/",
  label: "Communication",
  blurb: "Email, SMS and push delivery.",
  seo: { title: "Communication", description: "Delivery infrastructure for every message your CRM decides to send. Email, SMS, push and on-site messages through the providers you choose." },
  hero: {
    kind: "page",
    title: "Email, SMS and push, wired to the right moment.",
    lead: "Delivery infrastructure for every message your CRM decides to send. Email, SMS, push and on-site messages through the providers you choose.",
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
        { icon: "mail", title: "Email", text: "Transactional and marketing email through your provider." },
        { icon: "phone", title: "SMS", text: "Gateways for verification codes and campaigns." },
        { icon: "inbox", title: "Push and inbox", text: "Web push, app push and an on-site inbox." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Communication", index: "01", title: "What's connected" },
      items: [
        { title: "Email providers", text: "Transactional email from the platform, marketing email from your CRM." },
        { title: "SMS gateways", text: "Verification and campaign messages, with fallback routes." },
        { title: "Web and app push", text: "Permission prompts and delivery handled for you." },
        { title: "On-site inbox", text: "Messages players read when they log in." },
        { title: "Player data in templates", text: "Names, balances and bonuses merged at send time." },
        { title: "Delivery logs", text: "What was sent, to whom, and whether it arrived." },
      ],
    },
    {
      type: "callout",
      kicker: "Communication vs. CRM",
      title: "Communication delivers. CRM decides who and when.",
      text: "Segmentation, lifecycle logic and player data live on the CRM page.",
      link: { label: "CRM", href: "/integrations/crm/" },
    },
    {
      type: "faq",
      eyebrow: "Communication",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we keep our current email provider?", answer: "Yes. Connect it and we send through it." },
        { question: "Are transactional messages included?", answer: "Yes. Verification, deposits and withdrawals are covered by default." },
        { question: "Do you handle unsubscribes?", answer: "Consent is stored on the player and respected by every channel." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
