import type { Page } from "../../../types";

const page: Page = {
  path: "/integrations/crm/",
  label: "CRM",
  blurb: "Player data, segments and lifecycle triggers.",
  seo: { title: "CRM", description: "We stream player events, segments and lifecycle triggers into the CRM you already use. This page is about data and logic." },
  hero: {
    kind: "page",
    title: "Your CRM gets the data it needs, when it needs it.",
    lead: "We stream player events, segments and lifecycle triggers into the CRM you already use. This page is about data and logic. Sending the actual messages is covered under Communication.",
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
        { icon: "nodes", title: "Real-time events", text: "Registrations, deposits, bets and logins as they happen." },
        { icon: "filter", title: "Segments both ways", text: "Build segments in your CRM or ours and sync them." },
        { icon: "gift", title: "Bonus triggers", text: "Your CRM awards bonuses through the platform directly." },
      ],
    },
    {
      type: "cards",
      card: "numbered",
      heading: { eyebrow: "CRM", index: "01", title: "What's connected" },
      items: [
        { title: "Event stream", text: "A documented event for every player action that matters." },
        { title: "Player attributes", text: "Value, status, preferences and limits, kept in sync." },
        { title: "Segment sync", text: "Segments flow both ways on a schedule or in real time." },
        { title: "Lifecycle triggers", text: "First deposit, inactivity, VIP thresholds, as events your CRM can act on." },
        { title: "Bonus API", text: "Award free rounds and bonuses from a CRM journey." },
        { title: "Consent flags", text: "Marketing preferences respected everywhere they apply." },
      ],
    },
    {
      type: "code",
      title: "Documented, versioned, boring in the best way.",
      text: "Sandbox access and full API docs from the first call. Your developers talk to ours directly.",
      code: "{\n  \"event\": \"player.deposit.completed\",\n  \"player_id\": \"p_29481\",\n  \"brand\": \"yourbrand\",\n  \"amount\": 150.00,\n  \"currency\": \"EUR\",\n  \"deposit_count\": 3,\n  \"ts\": \"2026-11-24T10:42:07Z\"\n}",
    },
    {
      type: "callout",
      kicker: "CRM vs. Communication",
      title: "CRM decides who and when. Communication handles how it gets delivered.",
      text: "Email, SMS and push infrastructure lives on the Communication page.",
      link: { label: "Communication", href: "/integrations/communication/" },
    },
    {
      type: "faq",
      eyebrow: "CRM",
      title: "Questions operators ask",
      link: { label: "Ask yours", href: "/contact/" },
      items: [
        { question: "Which CRMs do you connect to?", answer: "Most of the ones operators use. If yours isn't connected yet, we build it." },
        { question: "Real time or batch?", answer: "Both. Events stream in real time; attribute syncs run on a schedule you set." },
        { question: "Can our CRM award bonuses?", answer: "Yes, through the bonus API, with the same caps and rules as the back office." },
      ],
    },
    { type: "related", title: "More in Integrations", all: "All Integrations" },
  ],
};

export default page;
