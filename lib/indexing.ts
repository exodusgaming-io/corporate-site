// Search engines index the site only when the build is told to (the production
// launch); every other build, staging included, ships noindex.
export const indexable = process.env.SITE_INDEXABLE === "true";
