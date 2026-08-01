import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content/brand";

export async function CTABand() {
  const t = await getTranslations("home.ctaBand");

  return (
    <section className="bg-gradient-to-r from-brand-900 to-brand-700 py-16 text-white md:py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">{t("title")}</h2>
        <p className="max-w-xl text-white/80">{t("description")}</p>
        <Button href={brand.phone.href} size="lg" className="mt-2">
          <Phone className="h-5 w-5" />
          {t("cta")}
        </Button>
      </Container>
    </section>
  );
}
