"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Navbar } from "./Navbar";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content/brand";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslations();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink-900/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col gap-6 overflow-y-auto bg-white px-6 py-6 shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <LanguageToggle tone="light" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-brand-50 hover:text-brand-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <Navbar orientation="vertical" onNavigate={onClose} />

            <div className="mt-auto flex flex-col gap-3 border-t border-ink-900/10 pt-6">
              <Button href={brand.phone.href} size="lg">
                {t("nav.callNow")}
              </Button>
              <Button href={brand.email.href} variant="outline" size="lg">
                {t("common.emailUs")}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
