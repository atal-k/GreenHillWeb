import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { brand } from "@/content/brand";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
] as const;

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const;

export async function Footer() {
  const t = await getTranslations();
  const socialEntries = Object.entries(brand.social).filter(([, url]) => Boolean(url));
  const primaryBranch = brand.branches.find((b) => b.isPrimary) ?? brand.branches[0];

  return (
    <footer className="bg-brand-900 text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo/badge.png"
              alt=""
              width={100}
              height={100}
              className="h-10 w-10"
            />
            <span className="text-xl font-extrabold tracking-tight text-[#1C7A43]">
              GREEN HILL
            </span>
          </div>
          <p className="mt-4 text-sm text-brand-100">{t("footer.tagline")}</p>

          {socialEntries.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">
                {t("footer.followUs")}
              </p>
              <div className="mt-3 flex gap-3">
                {socialEntries.map(([key, url]) => {
                  const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS];
                  if (!Icon || !url) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                      aria-label={key}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">
            {t("footer.quickLinks")}
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link href={href} className="text-white/85 transition-colors hover:text-white">
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">
            {t("footer.getInTouch")}
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                href={brand.phone.href}
                className="flex items-start gap-2 text-white/85 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                {brand.phone.display}
              </a>
            </li>
            <li>
              <a
                href={brand.email.href}
                className="flex items-start gap-2 text-white/85 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {brand.email.display}
              </a>
            </li>
            <li>
              <a
                href={primaryBranch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/85 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {primaryBranch.full}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">
            {t("about.compliance.sectionTitle")}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {brand.compliance.map((item) => (
              <Badge key={item} variant="onDark">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-brand-100 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. {t("footer.rightsReserved")}
          </p>
          <p>CIN: {brand.cin}</p>
        </Container>
      </div>
    </footer>
  );
}
