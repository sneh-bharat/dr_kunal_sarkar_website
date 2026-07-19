"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import OpdIcon from "./OpdIcon";

export default function EventGallery({ events }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i - 1 + events.length) % events.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % events.length);

  const lightboxItems = events.map((event) => ({
    image: event.image,
    title: event.title,
    subtitle: `${event.location ? `${event.location} · ` : ""}${event.date}`,
  }));

  return (
    <>
      <div className="grid gap-6 lg:gap-7">
        {events.map((event, i) => (
          <div
            key={event.title + event.date}
            className={`reveal reveal-up delay-${
              i + 1
            } bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative w-full sm:w-72 md:w-80 shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors"></div>
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

            <div className="p-6 sm:p-7 flex-1 min-w-0">
              <div className="flex items-center gap-2 text-[11px] text-ink uppercase tracking-wide">
                <OpdIcon name="calendar" className="h-3.5 w-3.5 text-teal" />
                {event.date}
                {event.location && (
                  <>
                    <span className="text-slate-300">•</span>
                    {event.location}
                  </>
                )}
              </div>
              <h2 className="mt-1.5 font-heading font-700 text-navy text-[19px] sm:text-[21px] leading-snug">
                {event.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink">{event.description}</p>
            </div>
          </div>
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
