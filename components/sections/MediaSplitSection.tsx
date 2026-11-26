import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { rich } from "@/lib/rich";
import { Band, type SectionProps } from "./shared";

// Square picture on the left, heading and paragraphs on the right (About: why we exist).
export function MediaSplitSection({ section }: SectionProps<"mediaSplit">) {
  return (
    <Band
      section={section}
      defaults={{ pt: "lg", pb: "lg" }}
      innerClassName="flex flex-wrap items-center gap-x-[clamp(40px,6vw,96px)] gap-y-12"
    >
      <div className="relative aspect-square max-h-[640px] min-w-[min(100%,380px)] flex-[1_1_380px] overflow-hidden rounded-xl bg-rich-mahogany">
        <Image
          src={section.image.src}
          alt={section.image.alt ?? ""}
          fill
          sizes="(min-width: 900px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-[1.1_1_420px] flex-col gap-7">
        <Eyebrow index={section.index}>{section.eyebrow}</Eyebrow>
        <h2 className="font-display text-heading-lg text-balance">{section.title}</h2>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[1.125rem] leading-[1.6] text-pretty text-fg-soft">
            {rich(paragraph)}
          </p>
        ))}
      </div>
    </Band>
  );
}
