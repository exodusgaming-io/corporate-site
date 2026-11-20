import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, published to GitHub Pages; there is no Node server.
  output: "export",
  // GitHub Pages serves /about/index.html for /about/ without a redirect.
  trailingSlash: true,
  // The default image optimizer needs a server.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
