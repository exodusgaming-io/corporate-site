"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  children: ReactNode;
};

// Modal on native <dialog>: focus stays inside, Esc closes, the page behind is inert and doesn't scroll
// (globals.css). A click on the backdrop closes it. Focus goes back to where it was when it opened.
// The caller sets the size and the background (className); the browser default is white.
export function Dialog({ open, onClose, label, className, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  // Where the press started: a text selection dragged out onto the backdrop must not close the dialog.
  const pressedBackdrop = useRef(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={() => {
        onClose();
        returnFocus.current?.focus();
      }}
      onPointerDown={(event) => {
        pressedBackdrop.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (pressedBackdrop.current && event.target === event.currentTarget) event.currentTarget.close();
      }}
      className={cn(
        "m-0 max-h-none max-w-none p-0 text-fg backdrop:bg-onyx/66",
        "opacity-0 transition-[opacity,translate,display,overlay] transition-discrete duration-[400ms] ease-brand open:opacity-100 starting:open:opacity-0",
        className,
      )}
    >
      {children}
    </dialog>
  );
}

export function CloseButton({ onClick, label = "Close" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative flex size-11 flex-none items-center justify-center rounded-full border border-fg/30 text-fg transition-colors before:absolute before:h-px before:w-4 before:rotate-45 before:bg-current after:absolute after:h-px after:w-4 after:-rotate-45 after:bg-current hover:border-fg md:size-10"
    />
  );
}
