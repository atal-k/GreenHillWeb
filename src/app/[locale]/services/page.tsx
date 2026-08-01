import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCategorySection } from "@/components/services/ServiceCategorySection";
import { serviceCategories } from "@/content/services";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.hero");

  return (
    <>
      <PageHero title={t("title")} description={t("description")} />
      {serviceCategories.map((category, index) => (
        <ServiceCategorySection
          key={category.id}
          category={category}
          tone={index % 2 === 0 ? "surface" : "alt"}
        />
      ))}
    </>
  );
}
