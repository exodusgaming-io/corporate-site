import type { Page } from "../../types";

// TODO(#6545): the legal text from marketing. Headings are a guide only.
const page: Page = {
  path: "/cookie-policy/",
  label: "Cookie Policy",
  seo: { title: "Cookie Policy", description: "Which cookies exodusgaming.io sets, what they do and how to change your choice." },
  hero: { kind: "page", title: "Cookie Policy", lead: "Which cookies exodusgaming.io sets, what they do and how to change your choice." },
  sections: [
    {
      type: "richText",
      blocks: [
        {
          p: "**This is a placeholder.** The final text comes from marketing and legal before launch; until then nothing on this page applies.",
        },
        { h2: "What cookies are" },
        { p: "Text to come." },
        { h2: "Cookies we use" },
        { p: "Text to come." },
        { h2: "Analytics cookies" },
        { p: "Text to come." },
        { h2: "Changing your choice" },
        { p: "Text to come." },
        { h2: "Contact" },
        { p: "Text to come." },
      ],
    },
  ],
};

export default page;
