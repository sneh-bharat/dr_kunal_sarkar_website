import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

const EventGallery = dynamic(() => import("@/components/EventGallery"));

export const metadata = {
  title: "Event Programs — Dr. Kunal Sarkar",
  description:
    "Public talks, debates, and community event programs featuring Dr. Kunal Sarkar.",
};

const events = [
  {
    title: "Legalisation of Euthanasia",
    date: "05 Feb 2025",
    location: "Agartala",
    image: "/assets/gallery/event-programs/euthanasia.webp",
    description:
      "Despite Mahalaya and an India–Pakistan match the same evening, a packed house of 400+ turned out in Agartala for this widely discussed debate on the legalisation of euthanasia, with Tripura Chief Minister Dr. Manik Saha among the audience — one of the most memorable debates of recent times.",
  },
  {
    title: "Event Programs",
    date: "09 Apr 2025",
    location: "",
    image: "/assets/gallery/event-programs/ksv250411231639.webp",
    description:
      "Highlights from Dr. Kunal Sarkar's ongoing programme of public talks, debates, and community events.",
  },
];

export default function EventProgramsPage() {
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
              Event <span className="text-teal">Programs</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Public talks, debates, and community programs featuring Dr.
              Kunal Sarkar. Click any photo to view it in full.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== EVENTS LIST ===================== */}
      <section className="relative bg-white py-6 overflow-hidden">

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <EventGallery events={events} />
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
