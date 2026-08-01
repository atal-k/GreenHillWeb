import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-500 text-ink-900 hover:bg-accent-400 focus-visible:ring-accent-500",
        secondary:
          "bg-brand-900 text-white hover:bg-brand-800 focus-visible:ring-brand-700",
        outline:
          "border-2 border-brand-900 text-brand-900 hover:bg-brand-50 focus-visible:ring-brand-700",
        ghost: "text-brand-900 hover:bg-brand-50 focus-visible:ring-brand-700",
        onDark: "bg-white text-brand-900 hover:bg-brand-50 focus-visible:ring-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariants & {
  className?: string;
  children: React.ReactNode;
} & (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">)
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
  );

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href) {
    const { href, ...rest } = props as { href: string } & Omit<
      ComponentPropsWithoutRef<"a">,
      "href"
    >;
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
