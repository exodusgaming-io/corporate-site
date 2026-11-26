import type { ReactNode } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { type Pad, Section, SectionHeader } from "@/components/ui/Section";
import type { Action, Heading, Page, Section as SectionData, Tone } from "@/content/types";
import { cn } from "@/lib/cn";
import { rich } from "@/lib/rich";
import type { Site } from "@/lib/site";

export type SectionProps<T extends SectionData["type"]> = {
  section: Extract<SectionData, { type: T }>;
  site: Site;
  // The page the section is on.
  page: Page;
};

type Defaults = { tone?: Tone; pt?: Pad; pb?: Pad };

// The band every section sits in. Each section type brings the mockup's padding and tone; a content file
// can override them per section (tone, pt, pb) and give it an id for #anchors.
export function Band({
  section,
  defaults,
  className,
  innerClassName,
  children,
}: {
  section: SectionData;
  defaults?: Defaults;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <Section
      id={section.id}
      tone={section.tone ?? defaults?.tone ?? "dark"}
      pt={section.pt ?? defaults?.pt ?? "lg"}
      pb={section.pb ?? defaults?.pb ?? "lg"}
      className={className}
      innerClassName={innerClassName}
    >
      {children}
    </Section>
  );
}

export function ActionButton({ action, site, size = "lg" }: { action: Action; site: Site; size?: "md" | "lg" }) {
  return (
    <Button href={site.href(action.href)} variant={action.variant ?? "primary"} size={size}>
      {action.label}
    </Button>
  );
}

export function ActionList({ actions, site }: { actions?: Action[]; site: Site }) {
  if (!actions?.length) return null;
  return (
    <>
      {actions.map((action) => (
        <ActionButton key={action.label} action={action} site={site} />
      ))}
    </>
  );
}

// Section heading from content: eyebrow with number, title, and on the right a note, a link or a button.
export function SectionHeading({ heading, site, className }: { heading: Heading; site: Site; className?: string }) {
  const aside = heading.link ? (
    <ArrowLink href={site.href(heading.link.href)}>{heading.link.label}</ArrowLink>
  ) : heading.action ? (
    <ActionButton action={heading.action} site={site} />
  ) : heading.aside ? (
    rich(heading.aside)
  ) : undefined;
  return (
    <SectionHeader eyebrow={heading.eyebrow} index={heading.index} title={heading.title} aside={aside} className={className} />
  );
}

// Left column of a two-column section: eyebrow, heading and text, with the content on the right.
export function SplitIntro({
  eyebrow,
  index,
  title,
  lead,
  size = "xl",
  children,
  className,
}: {
  eyebrow?: string;
  index?: string;
  title: string;
  lead?: string;
  size?: "xl" | "lg";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
      <h2 className={cn("font-display text-pretty", size === "xl" ? "text-heading-xl" : "text-heading-lg")}>{title}</h2>
      {lead && <p className="max-w-[35rem] text-body-lg text-pretty text-fg-soft">{rich(lead)}</p>}
      {children}
    </div>
  );
}
