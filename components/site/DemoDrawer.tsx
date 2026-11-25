"use client";

import { useEffect, useState } from "react";
import { CloseButton, Dialog } from "@/components/ui/Dialog";

// Panel from the right that every "Book a demo" button opens: any link to #demo works, from anywhere on the page.
// The scheduler itself (Calendly) comes with the forms milestone, #6543; until then it holds a placeholder.
export function DemoDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash !== "#demo") return;
      setOpen(true);
      // Drop the hash so the next click on #demo fires hashchange again.
      history.replaceState(history.state, "", window.location.pathname + window.location.search);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      label="Book a demo"
      className="ml-auto h-dvh w-[min(480px,100%)] translate-x-full bg-surface open:translate-x-0 starting:open:translate-x-full"
    >
      <div className="flex min-h-full flex-col gap-7 overflow-y-auto border-l border-line bg-surface px-[clamp(20px,4vw,40px)] pt-6 pb-10">
        <div className="flex items-center justify-end">
          <CloseButton onClick={() => setOpen(false)} />
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="font-display text-[2.5rem] leading-none font-semibold tracking-[-0.025em]">Book a demo</h2>
          <p className="text-body text-pretty text-fg-soft">
            Thirty minutes with someone who can make decisions. Bring your roadmap, your questions and your doubts.
          </p>
        </div>
        <div className="flex min-h-80 flex-1 items-center justify-center rounded-lg border border-line bg-stripes p-6">
          <span className="text-center font-mono text-eyebrow tracking-[0.04em] text-fg-muted uppercase">
            Scheduler goes here (Calendly, #6543)
          </span>
        </div>
      </div>
    </Dialog>
  );
}
