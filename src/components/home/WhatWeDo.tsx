import { ArrowRight, ShieldAlert, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Link } from "@/i18n/navigation";
import { serviceCategories } from "@/content/services";

const ICONS: Record<string, LucideIcon> = { ShieldCheck, ShieldAlert, Sparkles };

export async function WhatWeDo() {
  const t = await getTranslations("home.whatWeDo");

  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = ICONS[category.icon] ?? ShieldCheck;
            return (
              <Link key={category.id} href={`/services#${category.id}`} className="group block h-full">
                <Card padding="lg" className="h-full transition-shadow group-hover:shadow-lg">
                  <IconBadge icon={Icon} size="lg" />
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">
                    {t(`${category.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">{t(`${category.id}.description`)}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2">
                    {t("cta")}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
