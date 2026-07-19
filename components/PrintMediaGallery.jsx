"use client";

import { useState } from "react";
import OpdIcon from "./OpdIcon";
import ImageLightbox from "./ImageLightbox";

export default function PrintMediaGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % items.length);

  const lightboxItems = items.map((item) => ({
    image: item.image,
    title: item.publication,
    subtitle: item.date,
  }));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {items.map((item, i) => (
          <button
            type="button"
            key={`${item.publication}-${item.date}`}
            onClick={() => setActiveIndex(i)}
            className={`reveal reveal-up delay-${
              (i % 3) + 1
            } group text-left bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={`${item.publication} — ${item.date}`}
                className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent"></div>
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
                <OpdIcon name="newspaper" className="h-3.5 w-3.5 text-teal" />
                Press
              </span>
              <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-navy shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3M11 8v6M8 11h6" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </div>

            <div className="p-5">
              <h2 className="font-heading font-700 text-navy text-[17px] leading-snug">
                {item.publication}
              </h2>
              <div className="mt-1.5 flex items-center gap-1.5 text-[13px] font-600 text-ink">
                <OpdIcon name="calendar" className="h-3.5 w-3.5 text-teal" />
                {item.date}
              </div>
            </div>
          </button>
        ))}
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
