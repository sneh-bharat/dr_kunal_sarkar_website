"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import OpdIcon from "./OpdIcon";

export default function HealthAwarenessGallery({ campaigns }) {
  const [active, setActive] = useState(null); // { campaignId, index } | null

  const activeCampaign = active ? campaigns.find((c) => c.id === active.campaignId) : null;

  const close = () => setActive(null);
  const showPrev = () =>
    setActive((a) => ({
      ...a,
      index: (a.index - 1 + activeCampaign.images.length) % activeCampaign.images.length,
    }));
  const showNext = () =>
    setActive((a) => ({
      ...a,
      index: (a.index + 1) % activeCampaign.images.length,
    }));

  const lightboxItems = activeCampaign
    ? activeCampaign.images.map((image, i) => ({
        image,
        title: activeCampaign.title,
        subtitle: `${activeCampaign.date} · Photo ${i + 1} of ${activeCampaign.images.length}`,
      }))
    : [];

  return (
    <>
      <div className="flex flex-col gap-14">
        {campaigns.map((campaign, i) => (
          <div key={campaign.id} className={`reveal reveal-up delay-${i + 1}`}>
            <div className="mb-5">
              <div className="flex items-center gap-2 text-[11px] text-ink uppercase tracking-wide">
                <OpdIcon name="calendar" className="h-3.5 w-3.5 text-teal" />
                {campaign.date}
              </div>
              <h2 className="mt-1.5 font-heading font-700 text-navy text-[21px] sm:text-[24px] leading-snug">
                {campaign.title}
              </h2>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink">
                {campaign.description}
              </p>
            </div>

            {campaign.images.length > 0 ? (
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
                {campaign.images.map((image, imgIndex) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setActive({ campaignId: campaign.id, index: imgIndex })}
                    className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 hover:border-teal/40 hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={image}
                      alt={`${campaign.title} — photo ${imgIndex + 1}`}
                      className="w-full h-auto object-fill transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors"></div>
                    <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy shadow-lg">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4.5 w-4.5"
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
            ) : (
              <div className="grid place-items-center rounded-2xl border border-dashed border-teal/30 bg-teal-50 py-14 text-teal/70">
                <div className="text-center px-6">
                  <OpdIcon name="heart" className="h-8 w-8 mx-auto" />
                  <div className="mt-2 text-[12px] font-600 uppercase tracking-wide">
                    Photos coming soon
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <ImageLightbox
        items={lightboxItems}
        activeIndex={active ? active.index : null}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
      />
    </>
  );
}
