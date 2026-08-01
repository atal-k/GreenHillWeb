import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export async function MissionVisionCards() {
  const t = await getTranslations("about.missionVision");

  return (
    <Section tone="alt">
      <Container>
        <SectionHeading title={t("sectionTitle")} align="center" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <Card variant="geometricDark" padding="lg" className="bg-brand-900 text-white">
            <p className="text-xs font-semibold tracking-wide text-accent-400 uppercase">
              {t("mission.title")}
            </p>
            <p className="mt-3 text-lg leading-relaxed">{t("mission.description")}</p>
          </Card>
          <Card padding="lg">
            <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
              {t("vision.title")}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink-700">{t("vision.description")}</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
