import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

export type Tone = "dark" | "surface" | "mahogany" | "light";

// data-tone switches the text, line and button colours of everything inside (globals.css).
const tones: Record<Tone, { tone: "dark" | "light"; bg: string }> = {
  dark: { tone: "dark", bg: "bg-onyx" },
  surface: { tone: "dark", bg: "bg-surface" },
  mahogany: { tone: "dark", bg: "bg-rich-mahogany" },
  light: { tone: "light", bg: "bg-platinum" },
};

export type Pad = "none" | "xs" | "sm" | "md" | "lg" | "xl";

const padTop: Record<Pad, string> = {
  none: "pt-0",
  xs: "pt-section-xs",
  sm: "pt-section-sm",
  md: "pt-section-md",
  lg: "pt-section",
  xl: "pt-section-xl",
};
const padBottom: Record<Pad, string> = {
  none: "pb-0",
  xs: "pb-section-xs",
  sm: "pb-section-sm",
  md: "pb-section-md",
  lg: "pb-section",
  xl: "pb-section-xl",
};
const spacings = { default: "lg", small: "sm", none: "none" } as const;

type SectionProps = {
  tone?: Tone;
  // Vertical padding: the mockups use one large and one smaller step; "none" for sections that set their own.
  spacing?: "default" | "small" | "none";
  // Top and bottom separately, when a section follows the mockup's own steps (overrides spacing).
  pt?: Pad;
  pb?: Pad;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
} & Omit<ComponentProps<"section">, "className" | "children">;

// Full-width band with the page gutter; content stops at max-w-page (1440px).
export function Section({
  tone = "dark",
  spacing = "default",
  pt,
  pb,
  className,
  innerClassName,
  children,
  ...rest
}: SectionProps) {
  const { tone: dataTone, bg } = tones[tone];
  return (
    <section
      data-tone={dataTone}
      className={cn(
        "relative px-gutter text-fg",
        bg,
        padTop[pt ?? spacings[spacing]],
        padBottom[pb ?? spacings[spacing]],
        className,
      )}
      {...rest}
    >
      <div className={cn("relative mx-auto max-w-page", innerClassName)}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  index?: string;
  title: ReactNode;
  // Text or a link on the right of the heading on wide screens, below it on narrow ones.
  aside?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({ eyebrow, index, title, aside, as: Heading = "h2", className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-x-12 gap-y-6", className)}>
      <div className="flex max-w-[54rem] flex-col gap-6">
        {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
        <Heading className="font-display text-heading-xl text-balance">{title}</Heading>
      </div>
      {aside && <div className="max-w-[25rem] text-body-lg text-pretty text-fg-soft">{aside}</div>}
    </div>
  );
}
