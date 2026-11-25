import Image from "next/image";
import type { ReactNode } from "react";
import { Gradient } from "./Gradient";

type CtaBandProps = { title: ReactNode; text?: ReactNode; actions: ReactNode };

// Closing call to action above the footer: big headline on the ember gradient with the outlined X.
export function CtaBand({ title, text, actions }: CtaBandProps) {
  return (
    <section
      data-tone="dark"
      className="relative overflow-hidden bg-ember px-gutter py-[clamp(96px,12vw,184px)] text-fg"
    >
      <Gradient variant="ember" />
      <Image
        src="/brand/x-outline.svg"
        alt=""
        width={640}
        height={640}
        className="pointer-events-none absolute top-1/2 -right-[6%] w-[clamp(280px,42vw,640px)] -translate-y-1/2 opacity-50"
      />
      <div className="relative mx-auto flex max-w-page flex-col items-start gap-7">
        <h2 className="max-w-[12ch] font-display text-display-sm">{title}</h2>
        {text && <p className="max-w-[32.5rem] text-lead text-pretty">{text}</p>}
        <div className="flex flex-wrap gap-3">{actions}</div>
      </div>
    </section>
  );
}
