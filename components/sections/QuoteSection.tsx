import { Quote } from "@/components/blocks/Quote";
import type { SectionProps } from "./shared";

// Company statement: over a picture, centred next to the outlined X, or left-aligned with an eyebrow.
export function QuoteSection({ section, site }: SectionProps<"quote">) {
  return (
    <Quote
      id={section.id}
      image={section.image?.src}
      link={section.link && { label: section.link.label, href: site.href(section.link.href) }}
      eyebrow={section.eyebrow}
      index={section.index}
    >
      {section.text}
    </Quote>
  );
}
