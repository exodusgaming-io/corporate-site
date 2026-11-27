import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

type QuoteProps = {
  children: ReactNode;
  // Who said it; leave empty for a company statement.
  cite?: string;
  // With an image the quote sits on the left over the picture.
  image?: string;
  link?: { href: string; label: string };
  // With an eyebrow it is a left-aligned closing statement (About), the outlined X on the right.
  // Without either, it is centred next to the outlined X.
  eyebrow?: string;
  index?: string;
  id?: string;
};

export function Quote({ children, cite, image, link, eyebrow, index, id }: QuoteProps) {
  if (image) {
    return (
      <section id={id} data-tone="dark" className="relative flex min-h-[clamp(520px,58vw,760px)] items-end overflow-hidden bg-rich-mahogany text-fg">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover object-[60%_50%]" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(11_10_10/0.94)_0%,rgb(11_10_10/0.75)_45%,rgb(11_10_10/0.15)_100%)]" />
        <figure className="relative mx-auto flex w-full max-w-page flex-col gap-8 px-gutter py-[clamp(72px,8vw,120px)]">
          <Image src="/brand/exodus-mark.svg" alt="" width={40} height={40} />
          <blockquote className="max-w-[56rem] font-display text-statement text-pretty">{children}</blockquote>
          {cite && <figcaption className="text-eyebrow text-fg-soft uppercase">{cite}</figcaption>}
          {link && <ArrowLink href={link.href}>{link.label}</ArrowLink>}
        </figure>
      </section>
    );
  }
  if (eyebrow) {
    return (
      <section id={id} data-tone="dark" className="relative overflow-hidden border-t border-line bg-onyx px-gutter py-[clamp(88px,11vw,160px)] text-fg">
        <Image
          src="/brand/x-outline.svg"
          alt=""
          width={620}
          height={620}
          className="pointer-events-none absolute top-1/2 -right-[8%] w-[clamp(320px,40vw,620px)] -translate-y-1/2 opacity-35"
        />
        <div className="relative mx-auto flex max-w-page flex-col gap-7">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
          <p className="max-w-[69rem] font-display text-statement text-pretty">{children}</p>
          {link && <ArrowLink href={link.href}>{link.label}</ArrowLink>}
        </div>
      </section>
    );
  }
  return (
    <section id={id} data-tone="dark" className="relative overflow-hidden bg-onyx px-gutter py-[clamp(88px,11vw,160px)] text-fg">
      <Image
        src="/brand/x-outline.svg"
        alt=""
        width={620}
        height={620}
        className="pointer-events-none absolute top-1/2 -left-[8%] w-[clamp(320px,40vw,620px)] -translate-y-1/2 opacity-35"
      />
      <figure className="relative mx-auto flex max-w-[69rem] flex-col items-center gap-8 text-center">
        <blockquote className="font-display text-statement text-balance">{children}</blockquote>
        {cite && <figcaption className="text-eyebrow text-fg-soft uppercase">{cite}</figcaption>}
        {link && <ArrowLink href={link.href}>{link.label}</ArrowLink>}
      </figure>
    </section>
  );
}
