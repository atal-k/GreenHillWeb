"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox, type LightboxImage } from "./Lightbox";

export function GalleryGrid({ images }: { images: LightboxImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [featured, ...rest] = images;

  function close() {
    setIndex(null);
  }
  function prev() {
    setIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }
  function next() {
    setIndex((current) => (current === null ? null : (current + 1) % images.length));
  }

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl"
        >
          {featured.exists ? (
            <Image
              src={featured.src}
              alt={featured.caption}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-brand-800 via-brand-700 to-accent-600" />
          )}
        </button>

        <div className="grid grid-cols-2 gap-4">
          {rest.map((image, i) => {
            const isTrailingOdd = rest.length % 2 === 1 && i === rest.length - 1;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(i + 1)}
                className={`group relative overflow-hidden rounded-2xl ${
                  isTrailingOdd ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                {image.exists ? (
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    sizes={isTrailingOdd ? "100vw" : "50vw"}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand-700 via-brand-800 to-accent-500" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <Lightbox images={images} index={index} onClose={close} onPrev={prev} onNext={next} />
    </>
  );
}
