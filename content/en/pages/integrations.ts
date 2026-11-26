import type { Page } from "../../types";

const page: Page = {
  path: "/integrations/",
  label: "Integrations",
  seo: {
    title: "Integrations",
    description: "CRM, affiliate systems, analytics, risk and messaging connected to the platform with documented events. If yours isn't listed, we build it.",
  },
  hero: {
    kind: "page",
    title: "Plug in what you already run.",
    titleWidth: 13,
    lead: "CRM, affiliates, analytics, risk and messaging, connected to the platform with documented events. If yours isn't on the list, we build it.",
  },
  sections: [
    {
      type: "cards",
      card: "integration",
      pt: "xs",
      pb: "lg",
      minWidth: 340,
      items: [
        {
          page: "/integrations/crm/",
          icon: "nodes",
          text: "Player events, segments and lifecycle triggers, streamed to the CRM you already use.",
          tags: ["Events", "Segments", "Bonus API"],
        },
        {
          page: "/integrations/affiliate-systems/",
          icon: "chartup",
          text: "Tracking from first click to first deposit, and post-backs your partners can reconcile.",
          tags: ["Tracking", "Post-backs", "NGR feeds"],
        },
        {
          page: "/integrations/analytics-and-tracking/",
          icon: "pie",
          text: "Tag managers, product analytics and your warehouse, fed with clean, documented events.",
          tags: ["Data layer", "Server-side", "Warehouse"],
        },
        {
          page: "/integrations/risk-and-fraud/",
          icon: "shield",
          text: "KYC, fraud and AML tools in one review queue. Catch the bonus hunters before they cash out.",
          tags: ["KYC", "Fraud signals", "AML"],
        },
        {
          page: "/integrations/communication/",
          icon: "mail",
          text: "Email, SMS, push and on-site messages delivered through the providers you choose.",
          tags: ["Email", "SMS", "Push"],
        },
      ],
      extra: {
        icon: "puzzle",
        title: "Don't see yours?",
        text: "Tell us what you use. We build integrations on request and tell you honestly how long it'll take.",
        link: { label: "Ask for an integration", href: "/contact/" },
      },
    },
    {
      type: "codeSplit",
      eyebrow: "For your developers",
      index: "01",
      title: "One event stream. Documented.",
      lead: "Every integration on this page runs off the same events and the same API. Your developers get sandbox access, docs and a direct line to ours.",
      checks: ["Webhooks with retries and signatures", "REST API, versioned", "Sandbox with test players and test money"],
      code: {
        caption: "webhook · player.deposit.completed",
        text: `POST https://yourcrm.example/hooks/exodus
{
  "event": "player.deposit.completed",
  "player_id": "p_29481",
  "brand": "yourbrand",
  "amount": 150.00,
  "currency": "EUR",
  "deposit_count": 3,
  "segment": ["new", "slots"],
  "ts": "2026-11-24T10:42:07Z"
}`,
      },
    },
  ],
};

export default page;
