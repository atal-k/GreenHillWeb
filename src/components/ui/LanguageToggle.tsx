"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  en: "EN",
  hi: "हिं",
};

export function LanguageToggle({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <div
      role="group"
      aria-label="Select language"
      className={cn(
        "inline-flex items-center rounded-full border p-1 text-xs font-semibold",
        tone === "light" ? "border-ink-900/10 bg-white" : "border-white/20 bg-white/5",
        className,
      )}
    >
      {routing.locales.map((locale) => {
        const active = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors",
              active
                ? "bg-brand-900 text-white"
                : tone === "light"
                  ? "text-ink-700 hover:text-brand-900"
                  : "text-white/70 hover:text-white",
            )}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
