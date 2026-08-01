import Image from "next/image";
import { FileCheck2, MapPin, Users, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { storyHighlights } from "@/content/about";

const ICONS: Record<string, LucideIcon> = { FileCheck2, MapPin, Users };

export async function StoryHighlights() {
  const t = await getTranslations("about.story");

  return (
    <Section tone="surface">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="About Us" title={t("sectionTitle")} />
          <p className="mt-5 text-base leading-relaxed text-ink-700">{t("description")}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {storyHighlights.map((item) => {
              const Icon = ICONS[item.icon] ?? FileCheck2;
              return (
                <div key={item.id} className="rounded-2xl bg-surface-white p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-brand-700" />
                  <p className="mt-2 text-xl font-bold text-ink-900">{item.value}</p>
                  <p className="text-xs font-medium text-ink-500">
                    {t(`highlights.${item.id}.title`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <Card
          variant="geometric"
          padding="none"
          className="relative aspect-[4/5] w-full overflow-hidden"
        >
          <Image
            src="/images/about/our-story.webp"
            alt="Green Hill security supervisor mentoring a trainee guard"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Card>
      </Container>
    </Section>
  );
}
