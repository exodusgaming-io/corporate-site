// Redirects, written as pages on every build by scripts/write-redirects.mts.
// from: an old path on this site (/old-page, /old.html).
// to:   a path on this site (/new-page) or a full http(s) address.
// A bad entry (invalid path, duplicate, loop, a page already at `from`) fails the build,
// so the PR check catches it before merge.
export type Redirect = { from: string; to: string };

export const redirects: Redirect[] = [];
