import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home.hero");

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-4 px-6 py-24">
      <p className="text-sm font-medium text-brand-700">{t("eyebrow")}</p>
      <h1 className="text-4xl font-semibold text-ink-900">{t("title")}</h1>
      <p className="text-xl text-brand-800">{t("subtitle")}</p>
      <p className="text-base text-ink-700">{t("description")}</p>
    </div>
  );
}
