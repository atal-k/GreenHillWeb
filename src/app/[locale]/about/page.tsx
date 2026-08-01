import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about.hero");

  return (
    <div className="mx-auto min-h-[50vh] max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold text-ink-900">{t("title")}</h1>
      <p className="mt-4 text-ink-700">{t("description")}</p>
    </div>
  );
}
