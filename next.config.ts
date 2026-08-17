import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"],
    // Defining localPatterns switches next/image from "allow all local
    // images" to an allowlist, so every plain local image (no query
    // string) needs its own entry here too, not just the gallery one.
    //
    // Gallery photos are static files replaced in place by the site admin
    // (same filename, new content). GalleryCategorySection appends a
    // `?v=<mtime>` cache buster to the src so a replaced photo gets a new
    // URL immediately instead of being served stale from the browser's
    // (or the optimizer's, default 4h) cache. Next 16 requires local image
    // query strings to be explicitly allow-listed; scoped to this one
    // public, non-sensitive folder.
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
      {
        pathname: "/images/gallery/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
