import {
  FileCheck2,
  Headset,
  IdCard,
  Receipt,
  Scale,
  SearchCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { clientBenefits, differentiators } from "@/content/about";

const DIFFERENTIATOR_ICONS: Record<string, LucideIcon> = {
  UserCheck,
  SearchCheck,
  Headset,
  FileCheck2,
};
const BENEFIT_ICONS: Record<string, LucideIcon> = { Scale, IdCard, Receipt };

export async function WhyChooseUsFull() {
  const t = await getTranslations("about.whyChooseUs");
  const tBenefits = await getTranslations("about.clientBenefits");

  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Our Competitive Edge"
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {differentiators.map((item) => {
            const Icon = DIFFERENTIATOR_ICONS[item.icon] ?? UserCheck;
            return (
              <div key={item.id} className="flex gap-4 rounded-2xl bg-brand-900 p-5 text-white">
                <IconBadge icon={Icon} tone="onDark" size="sm" className="mt-0.5" />
                <div>
                  <p className="font-semibold">{t(`items.${item.id}.title`)}</p>
                  <p className="mt-1 text-sm text-white/75">
                    {t(`items.${item.id}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <SectionHeading
            title={tBenefits("sectionTitle")}
            subtitle={tBenefits("sectionSubtitle")}
            align="center"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {clientBenefits.map((item) => {
              const Icon = BENEFIT_ICONS[item.icon] ?? Scale;
              return (
                <Card key={item.id} variant="plain" className="text-center">
                  <IconBadge icon={Icon} className="mx-auto" />
                  <h3 className="mt-4 text-base font-semibold text-ink-900">
                    {tBenefits(`items.${item.id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">
                    {tBenefits(`items.${item.id}.description`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
