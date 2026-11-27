import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { rich } from "@/lib/rich";
import { Band, type SectionProps } from "./shared";

// A big two-tone statement (the bright half is the claim, the muted half the reason), then a picture
// next to a few paragraphs (Home: why Exodus).
export function StatementSection({ section, site }: SectionProps<"statement">) {
  return (
    <Band section={section} defaults={{ pt: "xl", pb: "md" }} innerClassName="flex flex-col gap-[clamp(48px,6vw,88px)]">
      <Eyebrow index={section.index}>{section.eyebrow}</Eyebrow>
      <p className="max-w-[75rem] font-display text-[clamp(1.75rem,4vw,3.75rem)] leading-[1.08] font-medium tracking-[-0.025em] text-pretty">
        <span className="text-fg">{section.bright}</span> <span className="text-fg-muted">{section.muted}</span>
      </p>
      <div className="flex flex-wrap items-end gap-x-[clamp(32px,5vw,80px)] gap-y-10">
        <div className="relative aspect-video min-w-[min(100%,420px)] flex-[1.6_1_420px] overflow-hidden rounded-lg bg-rich-mahogany">
          <Image
            src={section.image.src}
            alt={section.image.alt ?? ""}
            fill
            sizes="(min-width: 900px) 60vw, 100vw"
            className="object-cover"
            style={section.image.position ? { objectPosition: section.image.position } : undefined}
          />
        </div>
        <div className="flex flex-[1_1_300px] flex-col gap-6 pb-2">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[clamp(1.0625rem,1.4vw,1.1875rem)] leading-[1.6] text-pretty text-fg-soft">
              {rich(paragraph)}
            </p>
          ))}
          {section.link && <ArrowLink href={site.href(section.link.href)}>{section.link.label}</ArrowLink>}
        </div>
      </div>
    </Band>
  );
}
