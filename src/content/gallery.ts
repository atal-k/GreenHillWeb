import type { GalleryImageDef } from "@/types/content";

/**
 * Placeholder manifest — swap `src` with real Squoosh-optimized WebP assets
 * in the polish stage. Adding an image is: drop the file in the matching
 * /public/images/gallery/{category}/ folder and add one entry here.
 */
export const galleryImages: GalleryImageDef[] = [
  {
    id: "deployment-01",
    category: "deployments",
    src: "/images/gallery/deployments/placeholder-01.webp",
    altKey: "deployments",
  },
  {
    id: "training-01",
    category: "training",
    src: "/images/gallery/training/placeholder-01.webp",
    altKey: "training",
  },
  {
    id: "event-01",
    category: "events",
    src: "/images/gallery/events/placeholder-01.webp",
    altKey: "events",
  },
  {
    id: "client-site-01",
    category: "clientSites",
    src: "/images/gallery/client-sites/placeholder-01.webp",
    altKey: "clientSites",
  },
];
