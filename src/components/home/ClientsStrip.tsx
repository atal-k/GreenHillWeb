import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/content/clients";

export async function ClientsStrip() {
  const t = await getTranslations("home.clients");

  return (
    <Section tone="white">
      <Container>
        <SectionHeading title={t("sectionTitle")} align="center" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {clients.map((client) => (
            <span
              key={client.id}
              className="text-sm font-semibold tracking-wide text-ink-500 uppercase md:text-base"
            >
              {client.name}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
