import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

export function ServiceItemCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Card className="group h-full transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-lg">
      <IconBadge
        icon={Icon}
        className="transition-colors group-hover:bg-brand-800 group-hover:text-white"
      />
      <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm text-ink-700">{description}</p>
    </Card>
  );
}
