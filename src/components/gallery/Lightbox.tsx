"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  caption: string;
  exists: boolean;
}

export function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const open = index !== null;
  const current = open ? images[index] : null;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
                aria-label="Next image"
                className="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              {current.exists ? (
                <Image
                  src={current.src}
                  alt={current.caption}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-brand-800 via-brand-700 to-accent-600" />
              )}
            </div>
            <p className="mt-4 text-center text-sm text-white/80">{current.caption}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
