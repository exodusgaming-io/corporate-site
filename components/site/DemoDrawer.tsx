"use client";

import { useEffect, useState } from "react";
import { CloseButton, Dialog } from "@/components/ui/Dialog";
import type { Dictionary } from "@/content/types";

// Panel from the right that every "Book a demo" button opens: any link to #demo works, from anywhere on the page.
// The scheduler itself (Calendly) comes with the forms milestone, #6543; until then it holds a placeholder.
export function DemoDrawer({ dictionary: t }: { dictionary: Dictionary }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // A click on any #demo link opens the panel without touching the URL or the history.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      if (!(event.target as Element | null)?.closest?.('a[href="#demo"]')) return;
      event.preventDefault();
      setOpen(true);
    };
    // Arriving with #demo in the address (a shared link) opens it too; the hash is then dropped.
    const onHash = () => {
      if (window.location.hash !== "#demo") return;
      setOpen(true);
      history.replaceState(history.state, "", window.location.pathname + window.location.search);
    };
    onHash();
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      label={t.bookDemo}
      className="ml-auto h-dvh w-[min(480px,100%)] translate-x-full bg-surface open:translate-x-0 starting:open:translate-x-full"
    >
      <div className="flex min-h-full flex-col gap-7 overflow-y-auto border-l border-line bg-surface px-[clamp(20px,4vw,40px)] pt-6 pb-10">
        <div className="flex items-center justify-end">
          <CloseButton onClick={() => setOpen(false)} label={t.demo.close} />
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.025em]">{t.bookDemo}</h2>
          <p className="text-body text-pretty text-fg-soft">{t.demo.text}</p>
        </div>
        <div className="flex min-h-80 flex-1 items-center justify-center rounded-lg border border-line bg-stripes p-6">
          <span className="text-center font-mono text-eyebrow tracking-[0.04em] text-fg-muted uppercase">{t.demo.placeholder}</span>
        </div>
      </div>
    </Dialog>
  );
}
