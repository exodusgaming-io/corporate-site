import { Faq } from "@/components/blocks/Faq";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Band, type SectionProps } from "./shared";

// Questions on the right, the heading and an "Ask yours" link on the left. The first answer starts open.
export function FaqSection({ section, site }: SectionProps<"faq">) {
  return (
    <Band
      section={section}
      defaults={{ pt: "lg", pb: "lg" }}
      innerClassName="flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-10"
    >
      <div className="flex flex-[1_1_320px] flex-col gap-6">
        <Eyebrow index={section.index ?? site.dictionary.faq}>{section.eyebrow}</Eyebrow>
        <h2 className="font-display text-heading-lg text-balance">{section.title}</h2>
        {section.link && <ArrowLink href={site.href(section.link.href)}>{section.link.label}</ArrowLink>}
      </div>
      <div className="min-w-[min(100%,480px)] flex-[1.6_1_480px]">
        <Faq
          name={`faq-${section.eyebrow}`}
          defaultOpen={0}
          items={section.items.map((item) => ({ question: item.question, answer: item.answer }))}
        />
      </div>
    </Band>
  );
}
