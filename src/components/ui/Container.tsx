import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

export function Container({
  as: Tag = "div",
  className,
  ...props
}: { as?: ElementType } & ComponentPropsWithoutRef<"div">) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />
  );
}
