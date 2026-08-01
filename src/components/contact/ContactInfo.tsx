import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { brand } from "@/content/brand";

export async function ContactInfo() {
  const t = await getTranslations("contact");

  const cards = [
    { icon: Phone, label: t("callNow"), value: brand.phone.display, href: brand.phone.href },
    { icon: Mail, label: t("emailUs"), value: brand.email.display, href: brand.email.href },
    { icon: MapPin, label: t("addressLabel"), value: brand.address.full, href: brand.address.mapUrl },
  ];

  return (
    <Section tone="surface">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const isExternal = card.href.startsWith("http");
            return (
              <a
                key={card.label}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <IconBadge icon={card.icon} />
                  <p className="mt-4 text-xs font-semibold tracking-wide text-brand-700 uppercase">
                    {card.label}
                  </p>
                  <p className="mt-1 text-base font-medium text-ink-900">{card.value}</p>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-ink-900/8">
          <iframe
            title="Green Hill Facilities location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address.full)}&output=embed`}
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
