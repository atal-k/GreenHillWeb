import Image from "next/image";
import {
  BedDouble,
  Building2,
  ConciergeBell,
  Crown,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Moon,
  PartyPopper,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Sparkles,
  SquareParking,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceItemCard } from "./ServiceItemCard";
import type { ServiceCategoryDef } from "@/types/content";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Building2,
  Factory,
  Home,
  BedDouble,
  HeartPulse,
  GraduationCap,
  Siren,
  Moon,
  PartyPopper,
  UserCheck,
  Crown,
  ConciergeBell,
  SquareParking,
  Wrench,
};

export async function ServiceCategorySection({
  category,
  tone,
}: {
  category: ServiceCategoryDef;
  tone: "surface" | "alt";
}) {
  const t = await getTranslations(`services.categories.${category.id}`);
  const CategoryIcon = ICONS[category.icon] ?? ShieldCheck;

  return (
    <Section id={category.id} tone={tone} className="scroll-mt-20">
      <Container>
        <div className="relative flex aspect-[21/9] w-full items-end overflow-hidden rounded-3xl p-6 md:p-10">
          <Image
            src={category.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-900/45 to-transparent" />
          <div className="relative">
            <CategoryIcon className="h-8 w-8 text-accent-400" />
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{t("title")}</h2>
            <p className="mt-2 max-w-xl text-sm text-white/80 md:text-base">{t("description")}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <ServiceItemCard
                key={item.id}
                icon={Icon}
                title={t(`items.${item.id}.title`)}
                description={t(`items.${item.id}.description`)}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
