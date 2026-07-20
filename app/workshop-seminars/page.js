import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import WorkshopGallery from "@/components/WorkshopGallery";

export const metadata = {
  title: "Workshops & Seminars — Dr. Kunal Sarkar",
  description:
    "Medical education workshops, training programs, and public seminars led by Dr. Kunal Sarkar.",
};

const programs = [
  {
    image: "/assets/gallery/free-camp-pictures/rk-4.webp",
    title: "CME Workshops for Doctors",
    category: "Medical Education",
  },
  {
    image: "/assets/gallery/free-camp-pictures/gc-3.webp",
    title: "Nursing & Paramedical Training",
    category: "Clinical Training",
  },
  {
    image: "/assets/gallery/event-programs/euthanasia.webp",
    title: "Public Health Seminars",
    category: "Community Seminar",
  },
  {
    image: "/assets/gallery/free-camp-pictures/gc-2.webp",
    title: "Student Outreach Programs",
    category: "Student Outreach",
  },
  {
    image: "/assets/gallery/free-camp-pictures/rk-3.webp",
    title: "Basic Life Support (BLS) Training",
    category: "Emergency Training",
  },
  {
    image: "/assets/gallery/free-camp-pictures/gc-1.webp",
    title: "Heart Health Awareness Talks",
    category: "Awareness Talk",
  },
];

export default function WorkshopSeminarsPage() {
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
              Workshops &amp; <span className="text-teal">Seminars</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Medical education workshops, hands-on training, and public
              seminars led by Dr. Kunal Sarkar.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== PROGRAMS MOSAIC ===================== */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <WorkshopGallery programs={programs} />
        </div>
      </section>

   

      <Footer />

      <SiteScripts />
    </>
  );
}
