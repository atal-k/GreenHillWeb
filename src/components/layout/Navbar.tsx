"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
] as const;

export function Navbar({
  orientation = "horizontal",
  onNavigate,
  className,
}: {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
  className?: string;
}) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        orientation === "horizontal" ? "flex items-center gap-8" : "flex flex-col gap-1",
        className,
      )}
    >
      {NAV_ITEMS.map(({ key, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={key}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "font-medium transition-colors",
              orientation === "horizontal"
                ? "text-sm text-ink-700 hover:text-brand-900"
                : "rounded-xl px-4 py-3 text-base text-ink-900 hover:bg-brand-50",
              active &&
                (orientation === "horizontal" ? "text-brand-900" : "bg-brand-50 text-brand-900"),
            )}
          >
            {t(key)}
          </Link>
        );
      })}
    </nav>
  );
}
