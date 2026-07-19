import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import VoiceModal from "@/components/VoiceModal";

export const metadata = {
  title: "Electronic Media — Dr. Kunal Sarkar",
  description:
    "Dr. Kunal Sarkar's television appearances, interviews and on-air commentary across Bengali electronic media.",
};

const videos = [
  {
    yt: "qehpjr6HH0U",
    title: "মহাকাশে শরীর-স্বাস্থ্য!",
  },
  {
    yt: "92b4MIgYWbw",
    title: "গুজরাট কেন্দ্রিক উন্নয়ন নিয়ে আপত্তি আছে!",
  },
  {
    yt: "fb8raORrGJY",
    title: "বামেরা কেন প্যালেস্তাইনকে সমর্থন করে? জাতীয়তাবাদীরা কেন ইজরায়েলকে?",
  },
  {
    yt: "UBM3Z9F6pcw",
    title: "পঞ্চায়েত ভোট কি উৎসব?",
  },
  {
    yt: "UR_XQWPYQWg",
    title: "UNESCO-র দেওয়া কৃতিত্ব নিয়ে বিতর্ক",
  },
];

export default function ElectronicMediaPage() {
  return (
    <>
      <Header active="news" />

      {/* ===================== HEADER ===================== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              News &amp; Update
            </p>
            <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Electronic <span className="text-teal">Media</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Television interviews and on-air commentary featuring Dr. Kunal
              Sarkar — on health, public discourse, and current affairs.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== VIDEO GRID ===================== */}
      <section className="relative bg-white py-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {videos.map((video, i) => (
              <button
                type="button"
                className={`voice-card group reveal reveal-up delay-${(i % 3) + 1}`}
                data-yt={video.yt}
                aria-label={`Play video: ${video.title}`}
                key={video.yt}
              >
                <div className="voice-media">
                  <img
                    src={`https://i.ytimg.com/vi/${video.yt}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                  <span className="voice-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="voice-duration">
                    <i className="fas fa-clock"></i> Watch now
                  </span>
                </div>
                <div className="voice-body">
                  <h3 className="voice-title">{video.title}</h3>
                  <span className="voice-link">
                    <i className="fab fa-youtube"></i> Play on YouTube
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

          <div className="mt-12 text-center reveal reveal-up">
            <a
              href="https://www.youtube.com/channel/UCTI9L1ZnjpsTwYMS4uI4E0Q"
              target="_blank"
              rel="noopener"
              className="btn-outline px-6 py-2.5 text-[14px] inline-flex"
            >
              <i className="fab fa-youtube text-[15px]"></i>
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
            </a>
          </div>
        </div>

        <VoiceModal />
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
