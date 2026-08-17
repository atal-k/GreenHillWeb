import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Badge } from "@/components/ui/Badge";
import { brand } from "@/content/brand";

export async function ContactInfo() {
  const t = await getTranslations("contact");
  const primaryBranch = brand.branches.find((b) => b.isPrimary) ?? brand.branches[0];

  const cards = [
    { icon: Phone, label: t("callNow"), value: brand.phone.display, href: brand.phone.href },
    { icon: Mail, label: t("emailUs"), value: brand.email.display, href: brand.email.href },
  ];

  return (
    <Section tone="surface">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <a key={card.label} href={card.href} className="block h-full">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <IconBadge icon={card.icon} />
                <p className="mt-4 text-xs font-semibold tracking-wide text-brand-700 uppercase">
                  {card.label}
                </p>
                <p className="mt-1 text-base font-medium text-ink-900">{card.value}</p>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow={t("ourOffices")} title={t("visitUs")} />

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {brand.branches.map((branchItem) => (
              <a key={branchItem.id} href={branchItem.mapUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <div className="flex items-start justify-between gap-2">
                    <IconBadge icon={MapPin} />
                    {branchItem.isPrimary && (
                      <Badge className="mt-1">{t("headOffice")}</Badge>
                    )}
                  </div>
                  <p className="mt-4 text-base font-semibold text-ink-900">{branchItem.name}</p>
                  <p className="mt-1 text-sm text-ink-700">{branchItem.full}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-ink-900/8">
          <iframe
            title={`Green Hill Facilities – ${primaryBranch.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(primaryBranch.full)}&output=embed`}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-4 text-center text-sm font-medium text-brand-700">
          {t("businessHours")}
        </p>
      </Container>
    </Section>
  );
}
