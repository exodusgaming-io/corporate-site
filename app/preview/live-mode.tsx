"use client";

import { useLiveMode } from "@sanity/react-loader";
import { enableVisualEditing } from "@sanity/visual-editing";
import { useEffect } from "react";
import { sanity } from "@/lib/sanity";

// Connects the page to the Presentation tool: the Studio runs every useQuery with the
// editor's session (drafts included) and streams the results here. No token on the site.
export default function LiveMode() {
  useEffect(() => enableVisualEditing(), []);
  useLiveMode({ client: sanity });
  return null;
}
