import type { GalleryImageDef } from "@/types/content";

/**
 * 3 images per category, ordered as "featured + 2 supporting" — the first
 * entry per category is rendered as the large featured image in
 * GalleryCategorySection. Caption text lives in messages/{locale}.json
 * under `gallery.images.{id}.caption` (needs translation).
 */
export const galleryImages: GalleryImageDef[] = [
  {
    id: "deployment-01",
    category: "deployments",
    src: "/images/gallery/deployments/01.webp",
  },
  {
    id: "deployment-02",
    category: "deployments",
    src: "/images/gallery/deployments/02.webp",
  },
  {
    id: "deployment-03",
    category: "deployments",
    src: "/images/gallery/deployments/03.webp",
  },
  {
    id: "training-01",
    category: "training",
    src: "/images/gallery/training/01.webp",
  },
  {
    id: "training-02",
    category: "training",
    src: "/images/gallery/training/02.webp",
  },
  {
    id: "training-03",
    category: "training",
    src: "/images/gallery/training/03.webp",
  },
  {
    id: "training-04",
    category: "training",
    src: "/images/gallery/training/04.png",
  },
  {
    id: "event-01",
    category: "events",
    src: "/images/gallery/events/01.webp",
  },
  {
    id: "event-02",
    category: "events",
    src: "/images/gallery/events/02.webp",
  },
  {
    id: "event-03",
    category: "events",
    src: "/images/gallery/events/03.webp",
  },
  {
    id: "client-site-01",
    category: "clientSites",
    src: "/images/gallery/client-sites/01.webp",
  },
  {
    id: "client-site-02",
    category: "clientSites",
    src: "/images/gallery/client-sites/02.webp",
  },
  {
    id: "client-site-03",
    category: "clientSites",
    src: "/images/gallery/client-sites/03.webp",
  },
];
