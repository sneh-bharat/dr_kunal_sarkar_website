"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

export default function WorkshopGallery({ programs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const lightboxItems = programs.flatMap((program) =>
    (program.images || [program.image]).map((image) => ({
      image,
      title: program.title,
      subtitle: program.category,
    }))
  );

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + lightboxItems.length) % lightboxItems.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % lightboxItems.length);

  // Running offset into the flattened lightboxItems list for each program's first image.
  let offset = 0;
  const startIndexes = programs.map((program) => {
    const start = offset;
    offset += (program.images || [program.image]).length;
    return start;
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {programs.map((program, index) => {
          const large = index === 0;
          const thumbnail = program.images ? program.images[0] : program.image;
          return (
            <button
              type="button"
              key={program.title}
              onClick={() => setActiveIndex(startIndexes[index])}
              className={`group relative text-left overflow-hidden rounded-2xl border border-slate-200 hover:border-teal/50 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                large ? "md:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`bg-cover bg-no-repeat bg-center transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110 ${
                  large ? "h-[320px] md:h-[420px] lg:h-[620px]" : "h-[300px]"
                }`}
                style={{ backgroundImage: `url('${thumbnail}')` }}
              />

              {/* Gradient + category badge — deepens on hover/focus for a clear highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent transition-colors duration-500 group-hover:from-navy/95 group-hover:via-navy/25"></div>
              <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
                {program.category}
              </span>

              <h3
                className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 font-heading font-700 text-white leading-snug ${
                  large ? "text-[24px] sm:text-[30px]" : "text-[19px] sm:text-[21px]"
                }`}
              >
                {program.title}
              </h3>
            </button>
          );
        })}
      </div>

      <ImageLightbox
        items={lightboxItems}
        activeIndex={activeIndex}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
      />
    </>
  );
}
