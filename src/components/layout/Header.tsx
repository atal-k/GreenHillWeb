"use client";

import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { brand } from "@/content/brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-30 border-b border-ink-900/5 bg-surface-white/95 backdrop-blur supports-[backdrop-filter]:bg-surface-white/80">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex shrink-0 items-center" aria-label={brand.shortName}>
          {/* eslint-disable-next-line @next/next/no-img-element -- vector logo: next/image adds no benefit and local SVGs need dangerouslyAllowSVG */}
          <img
            src="/images/logo/logo-light.svg"
            alt={`${brand.legalName} logo`}
            width={176}
            height={44}
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <Navbar orientation="horizontal" className="hidden lg:flex" />

        <div className="flex items-center gap-3">
          <LanguageToggle tone="light" className="hidden sm:inline-flex" />

          <Button href={brand.phone.href} size="md" className="hidden lg:inline-flex">
            <Phone className="h-4 w-4" />
            {t("nav.callNow")}
          </Button>

          <Button
            href={brand.phone.href}
            size="icon"
            variant="primary"
            aria-label={t("nav.callNow")}
            className="lg:hidden"
          >
            <Phone className="h-5 w-5" />
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-brand-50 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
