"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Not in the mockups; built from the same parts (surface card, Shadow Grey border, small pill buttons).
// The site sets no tracking cookies yet, so the choice is only remembered. Analytics will read it (#6544).

export const CONSENT_KEY = "exodus-cookie-consent";
export type Consent = "accepted" | "rejected";
// Dispatch on window to show the banner again, e.g. from a "Cookie settings" link.
export const OPEN_CONSENT_EVENT = "exodus:cookie-consent";

const CHANGE_EVENT = "exodus:cookie-consent-change";

function readConsent(): Consent | "unset" {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : "unset";
  } catch {
    return "unset";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// The choice stored in this browser; "pending" while rendering on the server, so the banner never flashes.
export function useConsent(): Consent | "unset" | "pending" {
  return useSyncExternalStore(subscribe, readConsent, () => "pending");
}

type ViewProps = { onAccept?: () => void; onReject?: () => void; className?: string };

// The card on its own, for the style guide.
export function CookieBannerView({ onAccept, onReject, className }: ViewProps) {
  return (
    <section
      aria-label="Cookie consent"
      data-tone="dark"
      className={cn(
        "flex w-full max-w-[28rem] flex-col gap-5 rounded-lg border border-line bg-surface p-6 text-fg",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-title">Cookies</h2>
        <p className="text-small text-pretty text-fg-soft">
          We&apos;d like to measure how the site is used. Nothing is set until you say yes. Details in the{" "}
          <Link href="/cookie-policy/" className="text-fg underline decoration-pure-red underline-offset-4 hover:text-accent">
            cookie policy
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={onAccept}>
          Accept
        </Button>
        <Button size="sm" variant="outline" onClick={onReject}>
          Reject
        </Button>
      </div>
    </section>
  );
}

export function CookieBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choose = (choice: Consent) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Private mode: the banner comes back next visit, nothing else breaks.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
    setReopened(false);
  };

  if (consent === "pending" || (consent !== "unset" && !reopened)) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-start p-4 md:p-6">
      <CookieBannerView
        onAccept={() => choose("accepted")}
        onReject={() => choose("rejected")}
        className="shadow-[0_24px_64px_rgb(0_0_0/0.5)]"
      />
    </div>
  );
}

export function ShowCookieBannerButton() {
  return (
    <Button size="sm" variant="outline" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
      Show the cookie banner
    </Button>
  );
}
