import {
  BedDouble,
  Building,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  PartyPopper,
  ShoppingBag,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { sectorsServed } from "@/content/about";

const ICONS: Record<string, LucideIcon> = {
  BedDouble,
  Building,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  PartyPopper,
  ShoppingBag,
  Warehouse,
};

export async function SectorsGrid() {
  const t = await getTranslations("about.sectors");

  return (
    <Section tone="alt">
      <Container>
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} align="center" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {sectorsServed.map((sector) => {
            const Icon = ICONS[sector.icon] ?? Building2;
            return (
              <div
                key={sector.id}
                className="flex items-center gap-2 rounded-full bg-surface-white px-4 py-2.5 shadow-sm"
              >
                <IconBadge icon={Icon} size="sm" />
                <span className="text-sm font-medium text-ink-700">{t(`items.${sector.id}`)}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
