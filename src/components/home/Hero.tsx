"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { brand } from "@/content/brand";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      <Image
        src="/images/hero/hero-home.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/60 to-brand-900/30" />
      <Container className="relative flex min-h-[85svh] flex-col justify-center gap-5 py-20 md:py-28">
        <FadeIn>
          <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-400 uppercase">
            {t("eyebrow")}
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-semibold text-white md:text-6xl">
            {t("title")}
          </h1>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="max-w-2xl text-xl font-medium text-accent-400 md:text-2xl">
            {t("subtitle")}
          </p>
        </FadeIn>
        <FadeIn delay={0.26}>
          <p className="max-w-xl text-base text-white/80 md:text-lg">{t("description")}</p>
        </FadeIn>
        <FadeIn delay={0.34}>
          <div className="flex flex-wrap gap-4 pt-3">
            <Button href={brand.phone.href} size="lg">
              <Phone className="h-5 w-5" />
              {t("ctaPrimary")}
            </Button>
            <Button href="/services" size="lg" variant="onDark">
              {t("ctaSecondary")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
