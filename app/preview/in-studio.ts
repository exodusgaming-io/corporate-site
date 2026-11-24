import { useSyncExternalStore } from "react";

const noSubscribe = () => () => {};
// The Studio's Preview frames the page, or opens it in a tab ("Open preview") that keeps
// window.opener. Same test as isMaybePresentation() in @sanity/presentation-comlink.
const inStudio = () => window.self !== window.top || window.opener != null;
// The static HTML and hydration always render the visitor view.
const onServer = () => false;

export function useInStudio(): boolean {
  return useSyncExternalStore(noSubscribe, inStudio, onServer);
}
