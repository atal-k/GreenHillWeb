import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconBadgeVariants = cva("inline-flex shrink-0 items-center justify-center rounded-full", {
  variants: {
    tone: {
      brand: "bg-brand-50 text-brand-800",
      accent: "bg-accent-100 text-accent-600",
      onDark: "bg-white/10 text-white",
    },
    size: {
      sm: "h-9 w-9",
      md: "h-12 w-12",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: { tone: "brand", size: "md" },
});

const iconSizeClass = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" } as const;

type IconBadgeProps = VariantProps<typeof iconBadgeVariants> & {
  icon: LucideIcon;
  className?: string;
};

export function IconBadge({ icon: Icon, tone, size, className }: IconBadgeProps) {
  const resolvedSize = size ?? "md";
  return (
    <span className={cn(iconBadgeVariants({ tone, size }), className)}>
      <Icon className={iconSizeClass[resolvedSize]} />
    </span>
  );
}
