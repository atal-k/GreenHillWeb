import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { brand } from "@/content/brand";

const HOME_STAT_KEYS = ["years", "personnel", "clientGroups", "response"] as const;

/**
 * Positioned to float over the Hero's bottom edge (negative top margin) —
 * a light card bridging the dark hero into the page content below.
 */
export async function StatsBar() {
  const t = await getTranslations("home.stats");
  const stats = HOME_STAT_KEYS.map((key) => ({
    key,
    value: brand.stats.find((item) => item.key === key)?.value ?? "",
    label: t(key),
  }));

  return (
    <Container className="relative z-10 -mt-14 md:-mt-16">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-900/8 shadow-xl md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.key} className="bg-surface-white px-4 py-6 text-center md:px-6 md:py-8">
            <p className="text-3xl font-bold text-brand-800 md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium text-ink-700 md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
