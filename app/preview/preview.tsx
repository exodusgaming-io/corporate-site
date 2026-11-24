"use client";

import { lazy, Suspense } from "react";
import { useInStudio } from "./in-studio";

// The preview bridge loads only inside the Studio; visitors never download it.
const LiveMode = lazy(() => import("./live-mode"));

export function Preview() {
  return useInStudio() ? (
    <Suspense fallback={null}>
      <LiveMode />
    </Suspense>
  ) : null;
}
