import { Band, SectionHeading, type SectionProps } from "./shared";

// Full-width numbered rows: a big number and a title on the left, the explanation on the right.
export function NumberedRowsSection({ section, site }: SectionProps<"numberedRows">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      <SectionHeading heading={section.heading} site={site} />
      <ol className="flex flex-col border-b border-line">
        {section.items.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-12 gap-y-3 border-t border-line py-9"
          >
            <div className="flex items-baseline gap-6">
              <span className="font-display text-[clamp(2.5rem,4vw,4rem)] leading-none font-light text-fg-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.125rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
            </div>
            <p className="text-body-lg text-pretty text-fg-soft">{item.text}</p>
          </li>
        ))}
      </ol>
    </Band>
  );
}
