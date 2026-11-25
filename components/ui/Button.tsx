import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-sans leading-none font-medium whitespace-nowrap transition-[color,background-color,border-color,translate] duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:active:translate-y-0";

// primary: Platinum on dark, Onyx on light sections; turns red on hover with an Onyx label.
// accent: Pure Red always keeps an Onyx label — Platinum on Pure Red is 3.75:1, large text only.
const variants: Record<Variant, string> = {
  primary:
    "bg-btn text-btn-fg hover:bg-btn-hover hover:text-btn-hover-fg disabled:bg-disabled disabled:text-onyx",
  outline:
    "border border-outline text-fg hover:border-fg hover:bg-fg/6 disabled:border-disabled disabled:bg-transparent disabled:text-muted",
  accent: "bg-pure-red text-onyx hover:bg-cinnabar disabled:bg-disabled",
};

// sm is 40px in the mockup header; 44px on touch screens.
const sizes: Record<Size, string> = {
  sm: "h-11 px-[18px] text-nav md:h-10",
  md: "h-12 px-6 text-small",
  lg: "h-13 px-7 text-body",
};

// For links that must not go through the router (e.g. a page that should load fresh).
export function buttonClasses(variant: Variant = "primary", size: Size = "lg", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };
type LinkProps = Common & { href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">;
type ButtonProps = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "lg", className, children, ...rest } = props;
  const classes = buttonClasses(variant, size, className);

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as LinkProps;
    // Hash links (#demo) and other sites are plain anchors; site paths go through the router.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchor}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchor}>
        {children}
      </a>
    );
  }

  const { type = "button", ...button } = rest as ButtonProps;
  return (
    <button type={type} className={classes} {...button}>
      {children}
    </button>
  );
}
