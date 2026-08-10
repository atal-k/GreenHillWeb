import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getServiceCoverImages } from "@/lib/serviceCovers";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyChooseUsTeaser } from "@/components/home/WhyChooseUsTeaser";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { ClientsStrip } from "@/components/home/ClientsStrip";
import { CTABand } from "@/components/home/CTABand";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const heroImages = ["/images/hero/hero-home.webp", ...getServiceCoverImages()];

  return (
    <>
      <Hero images={heroImages} />
      <StatsBar />
      <RevealOnScroll>
        <WhatWeDo />
      </RevealOnScroll>
      <RevealOnScroll>
        <WhyChooseUsTeaser />
      </RevealOnScroll>
      <TestimonialsCarousel />
      <RevealOnScroll>
        <ClientsStrip />
      </RevealOnScroll>
      <CTABand />
    </>
  );
}
