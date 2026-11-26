import { cn } from "@/lib/cn";
import { Band, SectionHeading, type SectionProps } from "./shared";

// Numbered steps in a row, a line above each. On dark a red diamond marks the line; on light the
// numbers carry the colour.
export function StepsSection({ section, site }: SectionProps<"steps">) {
  const light = section.tone === "light";
  return (
    <Band section={section} defaults={{ pt: "sm", pb: "sm" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      <SectionHeading heading={section.heading} site={site} />
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-6">
        {section.items.map((step, i) => (
          <li
            key={step.title}
            className={cn("relative flex flex-col gap-3.5 border-t py-7", light ? "border-onyx" : "border-line")}
          >
            {!light && <span aria-hidden="true" className="absolute -top-[5px] left-0 size-[9px] rotate-45 bg-pure-red" />}
            <span
              className={cn(
                "font-display leading-none font-light tracking-[-0.02em]",
                light ? "text-[3rem] text-accent" : "text-[clamp(2.5rem,4vw,3.5rem)] text-fg-muted",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-title">{step.title}</h3>
            <p className="text-body text-pretty text-fg-soft">{step.text}</p>
          </li>
        ))}
      </ol>
    </Band>
  );
}
