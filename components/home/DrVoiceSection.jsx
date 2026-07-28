import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const VoiceModal = dynamic(() => import("@/components/VoiceModal"));

const videos = [
  {
    yt: "JK34QPUXwIE",
    img: "th1.jpg",
    alt: "Biological Age — Dr. Kunal Sarkar",
    title: "Biological Age — How Long Will We Really Live?",
    ariaLabel: "Play video: Biological Age",
  },
  {
    yt: "CPncqkLC7OI",
    img: "th2.jpg",
    alt: "Are you measuring blood pressure correctly? — Dr. Kunal Sarkar",
    title: "Blood Pressure — Are You Measuring It Correctly?",
    ariaLabel: "Play video: Blood Pressure",
  },
  {
    yt: "5XytLnNQ8-o",
    img: "th3.jpg",
    alt: "Want to live to 100? — Dr. Kunal Sarkar",
    title: "100 বছর বাঁচতে চান? — A Cardiologist's Roadmap",
    ariaLabel: "Play video: Live to 100",
  },
];

export default function DrVoiceSection() {
  return (
    <section
      id="dr-voice"
      className="relative py-16 bg-gradient-to-b from-[#f4fafb] to-white overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-3">
              In His Own Words
            </p>
            <h2 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Dr. Sarkar&apos;s <span className="text-teal">Voice</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">
              Bite-sized, evidence-led talks on heart health — from biological
              age to blood pressure to living to 100.
            </p>
          </div>
          <Link
            href="https://www.youtube.com/channel/UCTI9L1ZnjpsTwYMS4uI4E0Q"
            target="_blank"
            rel="noopener"
            className="self-start md:self-auto btn-outline px-6 py-2.5 text-[14px]"
          >
            <img src="/assets/socials/youtube-color.svg" alt="" className="h-4 w-4" />
            Visit YouTube Channel
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {videos.map((video) => (
            <button
              type="button"
              className="voice-card group"
              data-yt={video.yt}
              aria-label={video.ariaLabel}
              key={video.yt}
            >
              <div className="voice-media">
                <Image
                  src={`/assets/dr_voice/${video.img}`}
                  alt={video.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="voice-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="voice-duration">
                  <Clock className="h-3.5 w-3.5" /> Watch now
                </span>
              </div>
              <div className="voice-body">
                <h3 className="voice-title">{video.title}</h3>
                <span className="voice-link">
                  <img src="/assets/socials/youtube-color.svg" alt="" className="h-4 w-4" /> Play on YouTube
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal (hidden until a card is clicked) */}
      <VoiceModal />
    </section>
  );
}
