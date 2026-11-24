"use client";

import { lazy, Suspense, useSyncExternalStore } from "react";

// The preview code loads only when the site is framed, i.e. inside the Studio's
// Presentation tool; visitors never download it.
const LiveMode = lazy(() => import("./live-mode"));

const noSubscribe = () => () => {};
const isFramed = () => window.self !== window.top;
const notFramed = () => false;

export function Preview() {
  const framed = useSyncExternalStore(noSubscribe, isFramed, notFramed);
  return framed ? (
    <Suspense fallback={null}>
      <LiveMode />
    </Suspense>
  ) : null;
}
