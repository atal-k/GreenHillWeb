import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-12 md:py-20", {
  variants: {
    tone: {
      surface: "bg-surface",
      alt: "bg-surface-alt",
      white: "bg-surface-white",
      brand: "bg-brand-900 text-white",
    },
  },
  defaultVariants: { tone: "surface" },
});

type SectionProps = VariantProps<typeof sectionVariants> & {
  as?: ElementType;
} & ComponentPropsWithoutRef<"section">;

export function Section({ as: Tag = "section", tone, className, ...props }: SectionProps) {
  return <Tag className={cn(sectionVariants({ tone }), className)} {...props} />;
}
