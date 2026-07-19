"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Reusable full-screen image viewer: portal-rendered (escapes any ancestor's
 * overflow/position clipping), hardened scroll-lock (works on mobile Safari),
 * caption + close button overlaid on the image itself, and prev/next paging.
 *
 * items: [{ image, title, subtitle }]
 * activeIndex: number | null — null means closed
 */
export default function ImageLightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const isOpen = activeIndex !== null && activeIndex !== undefined;
  const active = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    const onKeydown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKeydown);

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] grid place-items-center bg-navy/60 backdrop-blur-sm p-4 sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl flex flex-col">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Overlay bar: title/subtitle + close, sits on top of the image */}
          <div className="absolute top-0 inset-x-0 z-10 flex items-start justify-between gap-4 p-4 bg-gradient-to-b from-black/70 via-black/30 to-transparent">
            <div className="min-w-0 text-white">
              <div className="font-700 text-[15px] leading-tight truncate">{active.title}</div>
              {active.subtitle && (
                <div className="text-[12.5px] text-white/80">{active.subtitle}</div>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <img
            src={active.image}
            alt={active.title}
            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
        </div>

        {items.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="text-white/70 text-[13px]">
              {activeIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
