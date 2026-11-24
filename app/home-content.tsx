"use client";

import type { QueryResponseInitial } from "@sanity/react-loader";
import { lazy, Suspense } from "react";
import type { SiteSettings } from "@/lib/queries";
import { HomeView } from "./home-view";
import { useInStudio } from "./preview/in-studio";

// Visitors get the build-time data and no Sanity code. Inside the Studio's Preview the
// live version loads and shows the draft the editor is typing.
const HomeLive = lazy(() => import("./home-live"));

export function HomeContent({ initial }: { initial: QueryResponseInitial<SiteSettings | null> }) {
  const view = <HomeView data={initial.data} />;
  return useInStudio() ? (
    <Suspense fallback={view}>
      <HomeLive initial={initial} />
    </Suspense>
  ) : (
    view
  );
}
