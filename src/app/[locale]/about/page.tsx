import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StoryHighlights } from "@/components/about/StoryHighlights";
import { MissionVisionCards } from "@/components/about/MissionVisionCards";
import { CoreValuesGrid } from "@/components/about/CoreValuesGrid";
import { WhyChooseUsFull } from "@/components/about/WhyChooseUsFull";
import { SectorsGrid } from "@/components/about/SectorsGrid";
import { ServiceAreas } from "@/components/about/ServiceAreas";
import { ComplianceGrid } from "@/components/about/ComplianceGrid";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.hero" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about.hero");

  return (
    <>
      <PageHero title={t("title")} description={t("description")} />
      <StoryHighlights />
      <RevealOnScroll>
        <MissionVisionCards />
      </RevealOnScroll>
      <RevealOnScroll>
        <CoreValuesGrid />
      </RevealOnScroll>
      <RevealOnScroll>
        <WhyChooseUsFull />
      </RevealOnScroll>
      <RevealOnScroll>
        <SectorsGrid />
      </RevealOnScroll>
      <RevealOnScroll>
        <ServiceAreas />
      </RevealOnScroll>
      <RevealOnScroll>
        <ComplianceGrid />
      </RevealOnScroll>
    </>
  );
}
