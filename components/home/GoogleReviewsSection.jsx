import Image from "next/image";
import { Star, StarHalf, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

// Google's "G" mark isn't a generic pictogram, so it's not in lucide-react —
// this small inline SVG is reused wherever the Google logo is needed here.
function GoogleGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reviews = [
  {
    stars: 5,
    text: "My father underwent a double valve replacement under Dr. Sarkar. Today he is healthy and active again. For our family, Dr. Sarkar is nothing short of God — we will be grateful to him forever.",
    initial: "S",
    name: "Susmita Dutta",
    place: "Howrah",
  },
  {
    stars: 5,
    text: "My father had bypass surgery here. From the care and behaviour of the entire team to the medication and follow-up — everything was excellent. Highly recommended for any cardiac issue.",
    initial: "D",
    name: "Debjeet Biswas",
    place: "Bhowanipore",
  },
  {
    stars: 5,
    text: "My brother's bypass surgery was handled with complete professionalism — from the very first consultation right through to post-operative care. Dr. Sarkar and his team were outstanding.",
    initial: "S",
    name: "Shampa Nandi",
    place: "Kolkata",
  },
  {
    stars: 4,
    text: "Dr. Sarkar's excellence in cardiac surgery is matched by his kind, reassuring demeanor. He took the time to explain everything clearly and put our whole family at ease.",
    initial: "R",
    name: "Rupam Banik",
    place: null,
  },
];

export default function GoogleReviewsSection() {
  return (
    <section id="google-reviews" className="py-14 sm:py-20 bg-[#f6fafd] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: heading + carousel */}
          <div className="min-w-0">
            {/* Header */}
            <div className="text-center lg:text-left mb-8 reveal reveal-up">
              <a
                href="https://www.google.com/search?q=dr+kunal+sarkar"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-3.5 py-1.5 text-[12.5px] font-600 text-navy/80 shadow-sm hover:ring-teal/40 transition"
              >
                <GoogleGlyph className="w-4 h-4 shrink-0" />
                <span className="text-navy font-700">4.1</span>
                <span className="flex items-center gap-0.5 text-amber-400">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <StarHalf className="h-3 w-3 fill-current" />
                </span>
                <span className="text-slate-400">·</span>
                <span>515 Google reviews</span>
              </a>
              <h2 className="mt-4 font-heading font-700 text-[32px] sm:text-[44px] leading-tight tracking-tight text-navy">
                What Our <span className="text-teal">Patients Say</span>
              </h2>
              <div className="w-16 h-1 bg-teal rounded-full mt-4 mx-auto lg:mx-0"></div>
            </div>

            {/* Reviews Swiper */}
            <div id="reviews-swiper" className="swiper w-full ">
              <div className="swiper-wrapper">
                {reviews.map((review) => (
                  <div className="swiper-slide h-auto pb-1 " key={review.name}>
                    <article className="review-card">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={i < review.stars ? "h-4 w-4 fill-current" : "h-4 w-4"}
                            />
                          ))}
                        </div>
                        <GoogleGlyph className="w-4.5 h-4.5" />
                      </div>
                      <p className="text-slate-600 text-[15px] sm:text-[16.5px] leading-relaxed break-words">
                        {review.text}
                      </p>
                      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                        <span className="grid place-items-center w-11 h-11 rounded-full bg-teal/10 text-teal font-700 shrink-0">
                          {review.initial}
                        </span>
                        <div className="min-w-0">
                          <div className="font-700 text-navy text-[15px] truncate">{review.name}</div>
                          <div className="text-[12.5px] text-slate-400 flex items-center gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-teal/70" />
                            Verified Patient{review.place ? ` · ${review.place}` : ""}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
              <button
                type="button"
                aria-label="Previous review"
                className="reviews-prev group w-12 h-12 border border-slate-300 rounded-full bg-white shadow-md ring-1 ring-slate-200 grid place-items-center text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                className="reviews-next group w-12 h-12 rounded-full border border-slate-300 bg-white shadow-md ring-1 ring-slate-200 grid place-items-center text-teal hover:bg-teal hover:text-white transition-colors"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right: collage image (desktop only) */}
          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 bg-teal/10 rounded-[36px] translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <Image
              src="/assets/google-rewviews.webp"
              alt="Dr. Kunal Sarkar with patients at free health camps"
              width={630}
              height={600}
              sizes="(min-width: 1024px) 50vw"
              loading="lazy"
              className="w-full h-auto rounded-[36px] shadow-2xl ring-1 ring-white/60 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
