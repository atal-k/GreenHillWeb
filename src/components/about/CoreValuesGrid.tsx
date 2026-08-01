import {
  ClipboardCheck,
  Handshake,
  ListChecks,
  ScrollText,
  ShieldCheck,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { coreValues } from "@/content/about";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  ListChecks,
  ClipboardCheck,
  Siren,
  ScrollText,
  Handshake,
};

export async function CoreValuesGrid() {
  const t = await getTranslations("about.coreValues");

  return (
    <Section tone="white">
      <Container>
        <SectionHeading title={t("sectionTitle")} align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => {
            const Icon = ICONS[value.icon] ?? ShieldCheck;
            return (
              <Card key={value.id}>
                <IconBadge icon={Icon} />
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {t(`items.${value.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-ink-700">{t(`items.${value.id}.description`)}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
