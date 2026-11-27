import Link from "next/link";
import { cn } from "@/lib/cn";
import { Band, type SectionProps } from "./shared";

// Two boxes side by side that tell two similar things apart ("Products: what it is. Solutions: what it's
// for."). A box with a page links to it.
export function CompareSection({ section, site }: SectionProps<"compare">) {
  return (
    <Band
      section={section}
      defaults={{ pt: "lg", pb: "lg" }}
      innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-4"
    >
      {section.items.map((item) => {
        const body = (
          <>
            <span className={cn("text-eyebrow uppercase", item.page ? "text-accent" : "text-fg")}>{item.eyebrow}</span>
            <h3 className="font-display text-[clamp(1.625rem,2.6vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
              {item.title}
              {item.page && " →"}
            </h3>
            <p className="text-body text-fg-soft">{item.text}</p>
          </>
        );
        const box = "flex flex-col gap-4 rounded-xl border border-line p-[clamp(28px,3vw,44px)]";
        return item.page ? (
          <Link
            key={item.eyebrow}
            href={site.href(item.page)}
            className={`${box} bg-surface transition-colors duration-250 hover:border-pure-red`}
          >
            {body}
          </Link>
        ) : (
          <div key={item.eyebrow} className={box}>
            {body}
          </div>
        );
      })}
    </Band>
  );
}
