"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

export default function FreeCampGallery({ groups }) {
  const flatItems = groups.flatMap((group) =>
    group.images.map((image) => ({ image, group: group.title, location: group.location }))
  );

  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i - 1 + flatItems.length) % flatItems.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % flatItems.length);

  const lightboxItems = flatItems.map((item) => ({
    image: item.image,
    title: item.group,
    subtitle: item.location,
  }));

  let runningIndex = 0;

  return (
    <>
      {groups.map((group) => {
        const startIndex = runningIndex;
        runningIndex += group.images.length;

        return (
          <div key={group.title} className="mb-14 last:mb-0">
            <div className="mb-6 reveal reveal-up">
              <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-1">
                {group.location}
              </p>
              <h2 className="font-heading font-700 text-navy text-[22px] sm:text-[26px] leading-snug">
                {group.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {group.images.map((image, i) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveIndex(startIndex + i)}
                  className={`reveal reveal-up delay-${
                    (i % 4) + 1
                  } group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 hover:border-teal/40 hover:shadow-xl transition-all duration-500`}
                >
                  <img
                    src={image}
                    alt={`${group.title} — photo ${i + 1}`}
                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/0 to-transparent"></div>
                  <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-navy shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m21 21-4.3-4.3M11 8v6M8 11h6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      })}

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
