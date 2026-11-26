import type { Page } from "../../types";

// TODO(#6545): the legal text from marketing. Headings are a guide only.
const page: Page = {
  path: "/privacy-policy/",
  label: "Privacy Policy",
  seo: { title: "Privacy Policy", description: "How Exodus collects, uses and protects personal data." },
  hero: { kind: "page", title: "Privacy Policy", lead: "How Exodus collects, uses and protects personal data." },
  sections: [
    {
      type: "richText",
      blocks: [
        {
          p: "**This is a placeholder.** The final text comes from marketing and legal before launch; until then nothing on this page applies.",
        },
        { h2: "What we collect" },
        { p: "Text to come." },
        { h2: "How we use it" },
        { p: "Text to come." },
        { h2: "Who we share it with" },
        { p: "Text to come." },
        { h2: "How long we keep it" },
        { p: "Text to come." },
        { h2: "Your rights" },
        { p: "Text to come." },
        { h2: "Contact" },
        { p: "Text to come." },
      ],
    },
  ],
};

export default page;
