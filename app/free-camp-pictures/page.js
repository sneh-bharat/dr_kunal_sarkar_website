import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import FreeCampGallery from "@/components/FreeCampGallery";

export const metadata = {
  title: "Free Camp Pictures — Dr. Kunal Sarkar",
  description:
    "Photographs from Dr. Kunal Sarkar's free cardiac health camps across West Bengal and beyond.",
};

const groups = [
  {
    title: "Ghatal Camp — Medinipur",
    location: "West Medinipur",
    images: [
      "/assets/gallery/free-camp-pictures/gc-1.webp",
      "/assets/gallery/free-camp-pictures/gc-2.webp",
      "/assets/gallery/free-camp-pictures/gc-3.webp",
      "/assets/gallery/free-camp-pictures/gc-4.webp",
    ],
  },
  {
    title: "Cardiac Health Camp — Ramkrishna Mission",
    location: "Agartala, West Tripura",
    images: [
      "/assets/gallery/free-camp-pictures/rk-1.webp",
      "/assets/gallery/free-camp-pictures/rk-2.webp",
      "/assets/gallery/free-camp-pictures/rk-3.webp",
      "/assets/gallery/free-camp-pictures/rk-4.webp",
    ],
  },
];

export default function FreeCampPicturesPage() {
  return (
    <>
      <Header active="gallery" />

      {/* ===================== HEADER ===================== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              Gallery
            </p>
            <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Free Camp <span className="text-teal">Pictures</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Moments from Dr. Kunal Sarkar&apos;s free cardiac health camps —
              bringing expert heart care to communities across the region.
              Click any photo to view it in full.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      <section className="relative bg-white py-6  overflow-hidden">
      
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <FreeCampGallery groups={groups} />

          <div className="mt-4 text-center reveal reveal-up">
            <a href="/opd-free-camp" className="btn-outline px-6 py-2.5 text-[14px] inline-flex">
              View OPD &amp; Camp Schedule
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
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
