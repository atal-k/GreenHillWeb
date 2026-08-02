import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryCategorySection } from "@/components/gallery/GalleryCategorySection";
import type { GalleryCategoryKey } from "@/types/content";

const CATEGORIES: GalleryCategoryKey[] = ["deployments", "training", "events", "clientSites"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery.hero" });
  return { title: t("title"), description: t("description") };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gallery.hero");

  return (
    <>
      <PageHero title={t("title")} description={t("description")} />
      {CATEGORIES.map((category, index) => (
        <GalleryCategorySection
          key={category}
          category={category}
          tone={index % 2 === 0 ? "surface" : "alt"}
        />
      ))}
    </>
  );
}
