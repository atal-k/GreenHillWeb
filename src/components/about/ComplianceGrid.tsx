import {
  BadgeCheck,
  FileText,
  HeartHandshake,
  Receipt,
  Scale,
  ScrollText,
  ShieldCheck,
  Umbrella,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";
import { complianceDetails } from "@/content/about";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  FileText,
  Wallet,
  HeartHandshake,
  Receipt,
  ScrollText,
  BadgeCheck,
  Umbrella,
  Scale,
};

export async function ComplianceGrid() {
  const t = await getTranslations("about.complianceDetail");

  return (
    <Section tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Legal & Regulatory"
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complianceDetails.map((item) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            const isHighlight = item.id === "zeroClientLiability";
            return (
              <Card
                key={item.id}
                variant={isHighlight ? "geometricDark" : "geometric"}
                className={isHighlight ? "bg-brand-900 text-white" : undefined}
              >
                <IconBadge icon={Icon} tone={isHighlight ? "onDark" : "brand"} />
                <h3
                  className={cn(
                    "mt-4 text-base font-semibold",
                    isHighlight ? "text-white" : "text-ink-900",
                  )}
                >
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className={cn("mt-2 text-sm", isHighlight ? "text-white/75" : "text-ink-700")}>
                  {t(`items.${item.id}.description`)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
