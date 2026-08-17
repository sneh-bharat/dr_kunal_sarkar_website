import Image from "next/image";
import Link from "next/link";

const APPOINTMENT_WHATSAPP =
  "https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

const stats = [
  {
    value: "30+",
    label: "Years Experience",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </>
    ),
  },
  {
    value: "30,000+",
    label: "Satisfied Patients",
    icon: (
      <path
        d="M20.8 5.6a4.5 4.5 0 0 0-6.4 0L12 8l-2.4-2.4a4.5 4.5 0 1 0-6.4 6.4L12 20.8l8.8-8.8a4.5 4.5 0 0 0 0-6.4Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    value: "99%",
    label: "Success Rate",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path
          d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M17.5 19c0-2-.8-3.7-2-4.8"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    value: "Advanced",
    label: "Technology",
    icon: (
      <>
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),
  },
];

export default function HomeHero() {
  return (
    <section
      className="hero-image-bg relative overflow-hidden max-w-[1700px] mx-auto"
      style={{ "--hero-image": 'url("/assets/hero-banner.webp")' }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center lg:min-h-[620px] gap-9 lg:gap-0 py-10 lg:py-0">
          {/* Left: copy */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 relative z-10 text-center lg:text-left">
            <span className="hero-badge hero-anim hero-anim-1 inline-flex items-center gap-2 rounded-full bg-teal-50 ring-1 ring-teal/15 pl-2 pr-4 py-1.5 mb-5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-teal text-white shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
                  <path d="M4.5 3h-1.2M13.5 3h1.2" />
                  <path d="M9 17v1.5a4.5 4.5 0 0 0 9 0V16" />
                  <circle cx="18" cy="13.5" r="2.5" />
                </svg>
              </span>
              <span className="font-heading font-600 text-[13.5px] tracking-wide text-teal">
                Dr. Kunal Sarkar
              </span>
            </span>
            <h1 className="hero-anim hero-anim-2 font-heading font-semibold leading-[1.08] tracking-tight text-[52px] lg:text-[56px] text-navy">
              Expert Care <br />
              Passionate Heart
              <br />
              <span className="text-teal">
                Better Lives<span className="text-teal">.</span>
              </span>
            </h1>

            <p className="hero-anim hero-anim-3 mt-6 text-[15.5px] leading-relaxed text-ink max-w-lg mx-auto lg:mx-0">
              Dr. Kunal Sarkar is a leading Cardiothoracic &amp; Vascular
              Surgeon with 30+ years of experience in complex heart and vascular
              surgeries with excellent patient outcomes.
            </p>

            <div className="hero-anim hero-anim-4 mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={APPOINTMENT_WHATSAPP}
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto btn-primary px-6 py-3.5 text-[14px]"
              >
                Book Appointment
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
              <Link
                href="/contact"
                className="w-full sm:w-auto btn-outline px-6 py-3.5 text-[14px]"
              >
                Contact Us
              </Link>
            </div>

            {/* Photo card — mobile/tablet only, sits between the buttons and stats */}
            <div className="lg:hidden w-full mt-10">
              <Image
                src="/assets/hero-banner-mobile.webp"
                alt="Dr. Kunal Sarkar, Chief Cardiac Surgeon"
                width={1128}
                height={941}
                sizes="(max-width: 1024px) 100vw"
                priority
                fetchPriority="high"
                className="w-full h-auto rounded-2xl shadow-lg ring-1 ring-slate-200/70"
              />
            </div>

            {/* Stats */}
            <div className="hero-anim hero-anim-5 mt-6 border border-slate-300 grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2 sm:gap-x-0 sm:divide-x sm:divide-slate-200 rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-slate-200/70 shadow-sm p-2.5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 sm:px-3 first:pl-0 last:pr-0"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      {stat.icon}
                    </svg>
                  </span>
                  <div>
                    <div className="text-start font-body font-semibold text-[14px] text-navy leading-none">
                      {stat.value}
                    </div>
                    <div className="text-start text-[10px] text-ink mt-1.5 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating action rail (right edge) */}
      <div className="hidden lg:flex flex-col gap-1 fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <a
          href={APPOINTMENT_WHATSAPP}
          target="_blank"
          rel="noopener"
          className="action-rail rounded-tl-xl"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>
            Book <br />
            Now
          </span>
        </a>
        <Link
          href={APPOINTMENT_WHATSAPP}
          target="_blank"
          rel="noopener"
          className="action-rail"
        >
          <img src="/assets/socials/whatsapp.svg" alt="" className="h-5 w-5" />
          <span>
            Chat on
            <br />
            WhatsApp
          </span>
        </Link>
        <Link href="tel:+919831030908" className="action-rail rounded-bl-xl">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          <span>
            Call
            <br />
            Now
          </span>
        </Link>
      </div>
    </section>
  );
}
