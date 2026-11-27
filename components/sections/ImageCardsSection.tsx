import Image from "next/image";
import Link from "next/link";
import { Band, SectionHeading, type SectionProps } from "./shared";

// Large cards over a picture, the text at the bottom on a dark fade (Solutions: verticals).
export function ImageCardsSection({ section, site }: SectionProps<"imageCards">) {
  return (
    <Band section={section} defaults={{ pt: "none", pb: "lg" }} innerClassName="flex flex-col gap-[clamp(40px,5vw,64px)]">
      {section.heading && <SectionHeading heading={section.heading} site={site} />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
        {section.items.map((item) => (
          <Link
            key={item.page}
            href={site.href(item.page)}
            className="group relative flex min-h-[clamp(380px,36vw,520px)] flex-col justify-end gap-3 overflow-hidden rounded-xl bg-rich-mahogany p-[clamp(28px,3vw,44px)]"
          >
            <Image
              src={item.image.src}
              alt={item.image.alt ?? ""}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.03]"
              style={item.image.position ? { objectPosition: item.image.position } : undefined}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(11_10_10/0.95)_10%,rgb(11_10_10/0.2)_70%)]" />
            <h3 className="relative font-display text-[clamp(2rem,3.6vw,3.25rem)] leading-none font-semibold tracking-[-0.03em]">
              {site.page(item.page).label}
            </h3>
            <p className="relative max-w-[26rem] text-body-lg leading-[1.5]">{item.text}</p>
            <span className="relative mt-2 text-body leading-none font-medium">{item.cta} →</span>
          </Link>
        ))}
      </div>
    </Band>
  );
}
