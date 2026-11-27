import type { Page } from "../../types";

// TODO(#6545): the legal text from marketing. Headings are a guide only.
const page: Page = {
  path: "/terms/",
  label: "Terms",
  seo: { title: "Terms", description: "The terms for using exodusgaming.io." },
  hero: { kind: "page", title: "Terms", lead: "The terms for using exodusgaming.io." },
  sections: [
    {
      type: "richText",
      blocks: [
        {
          p: "**This is a placeholder.** The final text comes from marketing and legal before launch; until then nothing on this page applies.",
        },
        { h2: "Who we are" },
        { p: "Text to come." },
        { h2: "Using this site" },
        { p: "Text to come." },
        { h2: "Intellectual property" },
        { p: "Text to come." },
        { h2: "Liability" },
        { p: "Text to come." },
        { h2: "Governing law" },
        { p: "Text to come." },
        { h2: "Contact" },
        { p: "Text to come." },
      ],
    },
  ],
};

export default page;
