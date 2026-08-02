import fs from "node:fs";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "./GalleryGrid";
import { galleryImages } from "@/content/gallery";
import type { GalleryCategoryKey } from "@/types/content";

/**
 * Gallery photos are generated later via docs/image-prompts.md and dropped
 * into /public by the user — this checks the file actually exists on disk
 * (server-only) so missing assets fall back to a placeholder instead of a
 * broken next/image request.
 */
function imageExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

export async function GalleryCategorySection({
  category,
  tone,
}: {
  category: GalleryCategoryKey;
  tone: "surface" | "alt";
}) {
  const t = await getTranslations(`gallery.categories.${category}`);
  const tImages = await getTranslations("gallery.images");

  const images = galleryImages
    .filter((image) => image.category === category)
    .map((image) => ({
      src: image.src,
      caption: tImages(`${image.id}.caption`),
      exists: imageExists(image.src),
    }));

  return (
    <Section id={category} tone={tone} className="scroll-mt-20">
      <Container>
        <SectionHeading title={t("label")} subtitle={t("blurb")} />
        <div className="mt-8">
          <GalleryGrid images={images} />
        </div>
      </Container>
    </Section>
  );
}
