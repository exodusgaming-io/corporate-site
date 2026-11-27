import { Icon } from "@/components/ui/Icon";
import { Band, SplitIntro, type SectionProps } from "./shared";

// Heading and text on the left, a short list on the right: what we do (check) or leave out (cross).
export function MarkerListSection({ section }: SectionProps<"markerList">) {
  return (
    <Band
      section={section}
      defaults={{ tone: "light", pt: "lg", pb: "lg" }}
      innerClassName="flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-12"
    >
      <SplitIntro eyebrow={section.eyebrow} index={section.index} title={section.title} lead={section.lead} className="flex-[1.2_1_420px]" />
      <div className="flex flex-[1_1_360px] flex-col">
        {section.label && <p className="pb-4 text-eyebrow text-fg-soft uppercase">{section.label}</p>}
        <ul className="border-b border-line">
          {section.items.map((item) => (
            <li key={item.title} className="flex items-baseline gap-4.5 border-t border-line py-6">
              {section.marker === "cross" ? (
                <span aria-hidden="true" className="text-pure-red">
                  ×
                </span>
              ) : (
                <Icon name="check" size={20} className="flex-none translate-y-0.5 self-start" />
              )}
              <span className="flex flex-col gap-2">
                <span
                  className={
                    item.text
                      ? "font-display text-[1.375rem] leading-[1.2] font-semibold tracking-[-0.01em]"
                      : "font-display text-[clamp(1.1875rem,1.7vw,1.5rem)] leading-[1.3] font-medium"
                  }
                >
                  {item.title}
                </span>
                {item.text && <span className="text-body text-pretty text-fg-soft">{item.text}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}
