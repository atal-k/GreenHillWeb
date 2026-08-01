import { ChevronDown } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import faqData from "@/content/faq.json";
import type { FaqItem } from "@/types/content";

const faqItems = faqData as FaqItem[];

export async function FaqAccordion() {
  const t = await getTranslations("contact.faq");
  const locale = (await getLocale()) as "en" | "hi";

  return (
    <Section tone="alt">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          align="center"
        />
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group list-none rounded-2xl border border-ink-900/8 bg-surface-white px-5 py-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900">
                {item.question[locale]}
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-700 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.answer[locale]}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
