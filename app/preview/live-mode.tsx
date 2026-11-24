"use client";

import { useLiveMode } from "@sanity/react-loader";
import { enableVisualEditing, type HistoryAdapterNavigate } from "@sanity/visual-editing";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { sanity } from "@/lib/sanity";

// Connects the page to the Studio's Preview: the Studio runs every useQuery with the
// editor's session (drafts included) and streams the results here. No token on the site.
export default function LiveMode() {
  const router = useRouter();
  const routerRef = useRef(router);
  const pathname = usePathname();
  const [navigate, setNavigate] = useState<HistoryAdapterNavigate>();

  useEffect(() => {
    routerRef.current = router;
  }, [router]);

  // The Studio's URL bar and locations move the page through the Next router.
  useEffect(
    () =>
      enableVisualEditing({
        history: {
          subscribe: (next) => {
            setNavigate(() => next);
            return () => setNavigate(undefined);
          },
          update: (update) => {
            if (update.type === "push") routerRef.current.push(update.url);
            else if (update.type === "replace") routerRef.current.replace(update.url);
            else if (update.type === "pop") routerRef.current.back();
          },
        },
      }),
    [],
  );

  // Clicks inside the page move the Studio's URL bar and document list along.
  useEffect(() => {
    navigate?.({ type: "push", url: pathname });
  }, [navigate, pathname]);

  useLiveMode({ client: sanity });
  return null;
}
