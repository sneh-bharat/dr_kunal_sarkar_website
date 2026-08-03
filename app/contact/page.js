import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import AppointmentSection from "@/components/home/AppointmentSection";

const ContactForm = dynamic(() => import("@/components/ContactForm"));

export const metadata = {
  title: "Contact Us — Dr. Kunal Sarkar",
  description:
    "Get in touch with Dr. Kunal Sarkar — leading Cardiothoracic & Vascular Surgeon. Reach us by email, phone, or visit our clinic in Bhowanipore, Kolkata.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />

      <main>
        {/* ===== Main Content ===== */}
        <AppointmentSection />

        {/* ===== Map embed ===== */}
        <section className="bg-[#f5f9ff] py-12">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <p className="text-teal font-700 text-[12px] tracking-[0.22em] uppercase mb-3 text-center">
              Find Us
            </p>
            <h2 className="font-heading font-700 text-navy text-[26px] sm:text-[34px] tracking-tight text-center mb-8">
              Our <span className="text-teal">Location</span>
            </h2>
            <div className="ct-map-wrap">
              <iframe
                title="Dr. Kunal Sarkar Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1706765305!2d88.34215107609!3d22.529804679529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271b56f374b43%3A0xe68f31e48e3a2085!2s42%2F1A%2C%20Harish%20Mukherjee%20Rd%2C%20Bhowanipore%2C%20Kolkata%2C%20West%20Bengal%20700025!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SiteScripts />
    </>
  );
}
