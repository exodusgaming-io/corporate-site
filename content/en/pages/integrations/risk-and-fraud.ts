import type { Page } from "../../../types";

const page: Page = {
  path: "/integrations/risk-and-fraud/",
  label: "Risk & Fraud",
  blurb: "KYC, fraud and AML tools in one review queue.",
  seo: { title: "Risk & Fraud", description: "Connect the KYC, fraud and AML tools you already use, or start with ours. Rules, scores and manual reviews end up in one queue." },
  hero: {
    kind: "page",
    title: "Catch the bonus hunters before they cash out.",
    lead: "Connect the KYC, fraud and AML tools you already use, or start with ours. Rules, scores and manual reviews end up in one queue.",
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
        { icon: "userscan", title: "KYC", text: "Identity checks triggered by the rules you set." },
        { icon: "shieldalert", title: "Fraud signals", text: "Device, payment and behaviour signals scored together." },
        { icon: "inbox", title: "One review queue", text: "Every flag in one place for your risk team." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "Risk & Fraud", index: "01", title: "What's connected" },
      items: [
        { title: "KYC providers", text: "Document, selfie and database checks through the provider you choose." },
        { title: "Device fingerprinting", text: "Multi-accounting caught across brands." },
        { title: "Bonus abuse rules", text: "Patterns that cost you money, flagged before payout." },
        { title: "Withdrawal review", text: "Automatic below limits you set, reviewed by a person above them." },
        { title: "AML monitoring", text: "Transaction monitoring and reporting support." },
        { title: "Responsible gambling", text: "Limits, cool-offs and triggers your safer gambling team defines." },
      ],
    },
    {
      type: "faq",
      eyebrow: "Risk & Fraud",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Can we use our own KYC provider?", answer: "Yes. Most operators do." },
        { question: "Who reviews flagged players?", answer: "Your risk team, in the back office. We can help if you need cover." },
        { question: "Does Exodus AI plug into this?", answer: "Yes. AI risk scores appear in the same queue as everything else." },
      ],
    },
    { type: "related" },
  ],
};

export default page;
