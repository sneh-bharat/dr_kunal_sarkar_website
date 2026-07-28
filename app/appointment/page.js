import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

const AppointmentForm = dynamic(() => import("@/components/AppointmentForm"));

export const metadata = {
  title: "Book Appointment — Dr. Kunal Sarkar",
  description:
    "Request an appointment with Dr. Kunal Sarkar, leading Cardiothoracic & Vascular Surgeon. Available at Manipal Hospitals and Kolkata Heart Foundation.",
};

const hospitals = [
  {
    logo: "/assets/hospitals/manipal.png",
    name: "Manipal Hospitals",
    location: "127, Eastern Metropolitan Bypass, Nitai Nagar, Mukundapur, Kolkata, West Bengal 700099",
    day: "Monday – Saturday",
    timing: "10:00am – 3:00pm",
    phone: ["+91 98310 00191", "+91 98307 95997"],
  },
  {
    logo: "/assets/hospitals/kolkata-heart-fed.png",
    name: "Kolkata Heart Foundation",
    location: "42/1A, Harish Mukherjee Road, Bhowanipore, Kolkata – 700025, West Bengal. Opposite Azad Hind Dhaba, Near SSKM (PG) Hospital",
    day: "Monday, Wednesday, Friday",
    timing: "6pm onwards",
    phone: ["+91 98310 30908"],
  },
];

export default function AppointmentPage() {
  return (
    <>
      <Header active="appointment" />

      <main>

      {/* ===== Hero ===== */}
      <section className="appt-hero">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-teal font-700 text-[12px] tracking-[0.22em] uppercase mb-3">
            Schedule a Visit
          </p>
          <h1 className="font-heading font-700 text-navy text-[34px] sm:text-[50px] leading-[1.1] tracking-tight">
            Book an <span className="text-teal">Appointment</span>
          </h1>
          <p className="mt-4 text-ink text-[15px] leading-relaxed max-w-lg">
            Fill in the form and our team will confirm your appointment at the
            earliest. You can also call us directly at the numbers listed below.
          </p>
        </div>
        <div className="appt-hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C360,0 1080,64 1440,32 L1440,48 L0,48 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ===== Main Grid ===== */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* ── Left: Appointment Form ── */}
            <div className="lg:col-span-3 appt-form-card">
              <p className="text-teal font-700 text-[12px] tracking-[0.2em] uppercase mb-2">
                Request
              </p>
              <h2 className="font-heading font-700 text-navy text-[26px] sm:text-[30px] tracking-tight mb-6">
                Appointment <span className="text-teal">Form</span>
              </h2>
              <AppointmentForm />
            </div>

            {/* ── Right: Hospital Cards ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {hospitals.map((h) => (
                <div key={h.name} className="appt-hospital-card">
                  {/* Logo */}
                  <div className="appt-hospital-logo">
                    <img
                      src={h.logo}
                      alt={h.name}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="appt-hospital-body">
                    <div className="appt-detail-row">
                      <svg className="appt-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      <p className="appt-detail-text">
                        <span className="font-600 text-navy">Location:</span>{" "}
                        {h.location}
                      </p>
                    </div>

                    <div className="appt-detail-row">
                      <svg className="appt-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <p className="appt-detail-text">
                        <span className="font-600 text-navy">Day:</span>{" "}
                        {h.day}
                      </p>
                    </div>

                    <div className="appt-detail-row">
                      <svg className="appt-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" strokeLinecap="round" />
                      </svg>
                      <p className="appt-detail-text">
                        <span className="font-600 text-navy">Timing:</span>{" "}
                        {h.timing}
                      </p>
                    </div>

                    <div className="appt-detail-row">
                      <svg className="appt-detail-icon shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                      </svg>
                      <p className="appt-detail-text">
                        <span className="font-600 text-navy">For Appointment Call:</span>{" "}
                        {h.phone.map((p, i) => (
                          <span key={p}>
                            <a href={`tel:${p.replace(/\s/g, "")}`} className="text-teal font-600 hover:underline">
                              {p}
                            </a>
                            {i < h.phone.length - 1 && " / "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      </main>

      <Footer />
      <SiteScripts />
    </>
  );
}
