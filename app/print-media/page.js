import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

const PrintMediaGallery = dynamic(() => import("@/components/PrintMediaGallery"));

export const metadata = {
  title: "Print Media — Dr. Kunal Sarkar",
  description:
    "Press coverage and print media features on Dr. Kunal Sarkar across leading Bengali and English publications.",
};

const pressItems = [
  {
    publication: "The Telegraph",
    date: "09 Feb 2025",
    image: "/assets/print_media/telegraph_0902025.webp",
  },
  {
    publication: "The Telegraph",
    date: "14 Jan 2025",
    image: "/assets/print_media/telegraph_14012025.webp",
  },
  {
    publication: "Apanjan",
    date: "14 Mar 2025",
    image: "/assets/print_media/apanjan_14032025.webp",
  },
  {
    publication: "Apanjan",
    date: "09 Mar 2025",
    image: "/assets/print_media/apanjan_09032025.webp",
  },
  {
    publication: "Sthaniya Sangbad",
    date: "15 Apr 2025",
    image: "/assets/print_media/sthaniya_sanbad_15042025.webp",
  },
  {
    publication: "Amar Uttarbanga",
    date: "15 Jul 2025",
    image: "/assets/print_media/amar-uttar-bangla.webp",
  },
];

export default function PrintMediaPage() {
  return (
    <>
      <Header active="news" />

      <main>

      {/* ===================== HEADER ===================== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              News &amp; Update
            </p>
            <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Print <span className="text-teal">Media</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Press coverage and feature mentions of Dr. Kunal Sarkar across
              leading Bengali and English publications. Click any clipping to
              read it in full.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== PRESS GALLERY ===================== */}
      <section className="relative bg-white py-6 overflow-hidden">

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <PrintMediaGallery items={pressItems} />

        </div>
      </section>

      </main>

      <Footer />

      <SiteScripts />
    </>
  );
}
