import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/content/brand";

export async function ServiceAreas() {
  const t = await getTranslations("about.serviceAreas");

  return (
    <Section tone="white">
      <Container className="text-center">
        <SectionHeading title={t("sectionTitle")} subtitle={t("description")} align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {brand.serviceAreas.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800"
            >
              <MapPin className="h-4 w-4" />
              {city}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
