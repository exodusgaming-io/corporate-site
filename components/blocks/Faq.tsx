import type { ReactNode } from "react";

export type FaqItem = { question: string; answer: ReactNode };

// Accordion on native <details>: works without JavaScript, keyboard and screen readers included.
// Items sharing `name` close each other, so one answer is open at a time.
export function Faq({ items, name }: { items: FaqItem[]; name: string }) {
  return (
    <div className="flex flex-col border-b border-line">
      {items.map((item) => (
        <details key={item.question} name={name} className="group border-t border-line">
          <summary className="flex list-none items-center justify-between gap-6 py-6.5 text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[clamp(1.1875rem,1.6vw,1.375rem)] leading-[1.3] font-semibold tracking-[-0.01em]">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="relative flex size-9 flex-none items-center justify-center rounded-full border border-fg/25 before:absolute before:h-px before:w-3.5 before:bg-current after:absolute after:h-3.5 after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
            />
          </summary>
          <div className="pr-14 pb-7 text-body-lg text-pretty text-fg-soft">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
