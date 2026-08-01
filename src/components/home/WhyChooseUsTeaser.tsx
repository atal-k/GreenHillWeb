import { ArrowRight, FileCheck2, Headset, SearchCheck, UserCheck, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { differentiators } from "@/content/about";

const ICONS: Record<string, LucideIcon> = { UserCheck, SearchCheck, Headset, FileCheck2 };

export async function WhyChooseUsTeaser() {
  const t = await getTranslations("home.whyChooseUs");

  return (
    <Section tone="alt">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />
          <Button href="/about" variant="outline" className="shrink-0">
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = ICONS[item.icon] ?? UserCheck;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-full bg-surface-white px-5 py-4 shadow-sm"
              >
                <IconBadge icon={Icon} size="sm" />
                <span className="text-sm font-semibold text-ink-900">
                  {t(`chips.${item.id}`)}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
