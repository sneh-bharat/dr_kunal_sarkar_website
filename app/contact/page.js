import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

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

      {/* ===== Hero Banner ===== */}
      <section className="ct-hero">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-teal font-700 text-[12px] tracking-[0.22em] uppercase mb-3">
            We&apos;d love to hear from you
          </p>
          <h1 className="font-heading font-700 text-navy text-[36px] sm:text-[54px] leading-[1.08] tracking-tight">
            Get In <span className="text-teal">Touch</span>
          </h1>
          <p className="mt-4 text-ink text-[16px] leading-relaxed max-w-lg">
            Have a question, need an appointment, or want to know more? Reach
            out — we&apos;re here to help.
          </p>
        </div>

        {/* Decorative wave divider */}
        <div className="ct-hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32 C360,0 1080,64 1440,32 L1440,48 L0,48 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="py-6 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* ── Left: Info Cards ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Email */}
              <div className="ct-info-card group">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="ct-info-label">Email Address</p>
                  <a
                    href="mailto:contactdrkunalsarkar@gmail.com"
                    className="ct-info-value break-all hover:text-teal transition-colors"
                  >
                    contactdrkunalsarkar@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="ct-info-card group">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="ct-info-label">Phone Number</p>
                  <a
                    href="tel:+916290350200"
                    className="ct-info-value hover:text-teal transition-colors"
                  >
                    +91 6290350200
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="ct-info-card group">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="ct-info-label">Our Location</p>
                  <p className="ct-info-value">
                    42/1A, Harish Mukherjee Road, Bhowanipore,
                    Kolkata–700025, West Bengal.
                    <span className="block text-[12.5px] mt-1 text-ink/60">
                      (Opposite Azad Hind Dhaba)
                    </span>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916290350200"
                target="_blank"
                rel="noopener"
                className="ct-whatsapp"
              >
                <img
                  src="/assets/socials/whatsapp.svg"
                  alt="WhatsApp"
                  className="h-5 w-5 shrink-0"
                />
                Chat on WhatsApp
                <svg viewBox="0 0 24 24" className="h-4 w-4 ml-auto shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

            </div>

            {/* ── Right: Contact Form ── */}
            <div className="lg:col-span-3 ct-form-card">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

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

      <Footer />
      <SiteScripts />
    </>
  );
}
