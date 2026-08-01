import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * `geometric` clips the bottom-right corner at 45° — a signature motif
 * echoing the shield-notch in the logo mark, used instead of generic
 * rounded rectangles across value/compliance/service cards.
 */
const cardVariants = cva("relative", {
  variants: {
    variant: {
      plain: "rounded-2xl border border-ink-900/8 bg-surface-white",
      geometric:
        "border border-ink-900/10 bg-surface-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)]",
      geometricDark:
        "border border-white/10 bg-white/5 [clip-path:polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)]",
    },
    padding: {
      none: "",
      sm: "p-5",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: { variant: "geometric", padding: "md" },
});

type CardProps = VariantProps<typeof cardVariants> & ComponentPropsWithoutRef<"div">;

export function Card({ variant, padding, className, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, padding }), className)} {...props} />;
}
