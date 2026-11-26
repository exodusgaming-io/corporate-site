import { Icon } from "@/components/ui/Icon";
import { Band, type SectionProps } from "./shared";

// Card with a short pitch to developers next to a code sample.
export function CodeSection({ section }: SectionProps<"code">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "sm" }}>
      <div className="flex flex-wrap items-center gap-x-[clamp(40px,6vw,96px)] gap-y-8 rounded-xl border border-line bg-surface p-[clamp(28px,4vw,56px)]">
        <div className="flex flex-[1_1_300px] flex-col gap-4">
          <Icon name={section.icon ?? "code"} size={28} />
          <h3 className="font-display text-heading-sm">{section.title}</h3>
          <p className="text-body text-pretty text-fg-soft">{section.text}</p>
        </div>
        <pre
          tabIndex={0}
          className="min-w-0 flex-[1.3_1_380px] overflow-x-auto rounded-md border border-line bg-onyx p-7 font-mono text-nav leading-[1.7] text-fg-soft"
        >
          {section.code}
        </pre>
      </div>
    </Band>
  );
}
