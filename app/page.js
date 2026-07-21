import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import Link from "next/link";

const AppointmentForm = dynamic(() => import("@/components/AppointmentForm"));
const VoiceModal = dynamic(() => import("@/components/VoiceModal"));

export default function HomePage() {
  return (
    <>
      <Header active="home" />

      {/* ===================== HERO ===================== */}
      {/* Desktop background photo URL lives here (set via --hero-image) so it can be made dynamic later */}
      <section
        className="hero-image-bg relative overflow-hidden max-w-[1700px] mx-auto"
        style={{ "--hero-image": 'url("/assets/hero-banner.png")' }}
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
              <h1 className="hero-anim hero-anim-2 font-heading font-semibold leading-[1.08] tracking-tight text-[40px] sm:text-[52px] lg:text-[56px] text-navy">
                Expert Care <br />
                Passionate Heart
                <br />
                <span className="text-teal">
                  Better Lives<span className="text-teal">.</span>
                </span>
              </h1>

              <p className="hero-anim hero-anim-3 mt-6 text-[15.5px] leading-relaxed text-ink max-w-lg mx-auto lg:mx-0">
                Dr. Kunal Sarkar is a leading Cardiothoracic &amp; Vascular
                Surgeon with 25+ years of experience in complex heart and
                vascular surgeries with excellent patient outcomes.
              </p>

              <div className="hero-anim hero-anim-4 mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#book"
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
                <a
                  href="#consult"
                  className="w-full sm:w-auto btn-outline px-6 py-3.5 text-[14px]"
                >
                  Consult Now
                </a>
              </div>

              {/* Photo card — mobile/tablet only, sits between the buttons and stats */}
              <div className="lg:hidden w-full mt-10">
                <img
                  src="/assets/hero-banner-mobile.png"
                  alt="Dr. Kunal Sarkar, Chief Cardiac Surgeon"
                  className="w-full rounded-2xl shadow-lg ring-1 ring-slate-200/70"
                />
              </div>

              {/* Stats */}
              <div className="hero-anim hero-anim-5 mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-4">
                <div className="flex items-center justify-start gap-2.5 text-left">
                  <span className="text-teal shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-heading font-700 text-[20px] text-navy leading-none">
                      30+
                    </div>
                    <div className="text-[11px] text-ink mt-1">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2.5 text-left">
                  <span className="text-teal shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M20.8 5.6a4.5 4.5 0 0 0-6.4 0L12 8l-2.4-2.4a4.5 4.5 0 1 0-6.4 6.4L12 20.8l8.8-8.8a4.5 4.5 0 0 0 0-6.4Z"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-heading font-700 text-[20px] text-navy leading-none">
                      30,000+
                    </div>
                    <div className="text-[11px] text-ink mt-1">Satisfied Patients</div>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2.5 text-left">
                  <span className="text-teal shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="9" cy="8" r="3.2" />
                      <path
                        d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M17.5 19c0-2-.8-3.7-2-4.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-heading font-700 text-[20px] text-navy leading-none">
                      99%
                    </div>
                    <div className="text-[11px] text-ink mt-1">Success Rate</div>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2.5 text-left">
                  <span className="text-teal shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="12" r="3.2" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-heading font-700 text-[20px] text-navy leading-none">
                      Advanced
                    </div>
                    <div className="text-[11px] text-ink mt-1">Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating action rail (right edge) */}
        <div className="hidden lg:flex flex-col gap-1 fixed right-0 top-1/2 -translate-y-1/2 z-40">
          <Link href="/appointment" className="action-rail rounded-tl-xl">
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
          </Link>
          <Link
            href="https://wa.me/916290350200"
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
          <Link href="tel:+916290350200" className="action-rail rounded-bl-xl">
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

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-start">
            {/* Photo (left) */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden lg:sticky lg:top-24">
                <img
                  src="/assets/about-1.webp"
                  alt="Dr. Kunal Sarkar"
                  className="w-full h-full object-cover"
                />

                {/* Rotating contact spinner badge */}
                <a
                  href="tel:+916290350200"
                  className="contact-spinner"
                  aria-label="Call Dr. Kunal Sarkar"
                >
                  <svg className="spinner-ring" viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="spinnerPath"
                        d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#spinnerPath" startOffset="0">
                        CALL NOW&nbsp;&nbsp;•&nbsp;&nbsp;BOOK APPOINTMENT&nbsp;&nbsp;•&nbsp;&nbsp;
                      </textPath>
                    </text>
                  </svg>
                  <span className="spinner-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Main content (center) */}
            <div className="lg:col-span-5 reveal reveal-up">
              <p className="reveal reveal-up delay-1 text-teal font-700 text-[12.5px] tracking-[0.18em] uppercase">
                About Dr. Kunal Sarkar
              </p>
              <h2 className="reveal reveal-up delay-2 mt-3 font-800 text-navy text-[26px] sm:text-[31px] leading-[1.22] tracking-tight">
                Extensive experience over <span className="text-teal">30 years</span>,
                more than <span className="text-teal">40,000</span> heart surgeries
                with the highest success rates
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-ink">
                Dr. Kunal Sarkar is a distinguished cardiac surgeon with over
                three decades of experience — a leading authority in complex
                cardiovascular procedures and a fervent advocate for innovative
                surgical techniques. He heads the cardiac department at Manipal
                Hospital, EM Bypass, Mukundapur, Kolkata, and is renowned for
                performing more than 90% of coronary surgeries without a
                heart–lung machine, as well as for complex redo operations.
              </p>

              {/* Roles & positions checklist */}
              <ul className="mt-7 space-y-3.5">
                {[
                  "Chief Cardiac Surgeon & Director — Manipal Hospital, EM Bypass, Mukundapur, Kolkata",
                  "Past President — Indian Association of Cardiovascular & Thoracic Surgeons (IACTS)",
                  "Past President — Society of Coronary Surgeons, SCS (India)",
                  "Chairman — Kolkata Heart Foundation",
                  "Managing Trustee — Calcutta Debating Circle",
                  "President — Kolkata Sukriti Foundation",
                  "Managing Partner — Asklepia Health LLP",
                ].map((role) => (
                  <li key={role} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-teal mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
                    </svg>
                    <span className="text-[14.5px] text-navy/90 leading-snug">{role}</span>
                  </li>
                ))}
              </ul>

              <a href="/about" className="btn-outline mt-9 px-6 py-2.5 text-[14px]">
                Explore More About Dr. Kunal Sarkar
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

            {/* Sidebar (right) */}
            <div className="lg:col-span-3 space-y-5">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-6">
                <h3 className="text-navy font-700 text-[12.5px] tracking-[0.14em] uppercase">
                  Qualifications
                </h3>
                <ul className="mt-4 space-y-3">
                  {["MBBS", "DNB — Cardiothoracic Surgery", "FRCS (Edinburgh)", "FRCS (Glasgow)"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-navy/85">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0"></span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-6">
                <h3 className="text-navy font-700 text-[12.5px] tracking-[0.14em] uppercase">
                  Memberships
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "The Society of Thoracic Surgeons (STS)",
                    "European Association for Cardio-Thoracic Surgery (EACTS)",
                    "South Asian Forum of Cardiothoracic Surgeons",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-navy/85">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE STRIP ===================== */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {/* Item set A */}
          <div className="marquee-set">
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              Barasat OPD &mdash; 06.09.25 (Sat) &nbsp;12:00 pm &nbsp;&bull;&nbsp; 70444
              99839 &nbsp;|&nbsp; 90070 00505
            </span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              Bolpur OPD &mdash; 07.09.25 (Sun) &nbsp;02:00 pm &nbsp;&bull;&nbsp; 70444
              51426
            </span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              Calcutta Medical Research Institute (CMRI) &nbsp;&bull;&nbsp; Mon – Sat
              &nbsp;10:00 am – 01:00 pm
            </span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              For Appointments &nbsp;&bull;&nbsp; +91 62903 50200 &nbsp;|&nbsp;
              contactdrkunalsarkar@gmail.com
            </span>
            <span className="marquee-sep">✦</span>
          </div>
          {/* Item set B (duplicate for seamless loop) */}
          <div className="marquee-set" aria-hidden="true">
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              Barasat OPD &mdash; 06.09.25 (Sat) &nbsp;12:00 pm &nbsp;&bull;&nbsp; 70444
              99839 &nbsp;|&nbsp; 90070 00505
            </span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              Bolpur OPD &mdash; 07.09.25 (Sun) &nbsp;02:00 pm &nbsp;&bull;&nbsp; 70444
              51426
            </span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              Calcutta Medical Research Institute (CMRI) &nbsp;&bull;&nbsp; Mon – Sat
              &nbsp;10:00 am – 01:00 pm
            </span>
            <span className="marquee-sep">✦</span>
            <span className="marquee-item">
              <span className="marquee-dot"></span>
              For Appointments &nbsp;&bull;&nbsp; +91 62903 50200 &nbsp;|&nbsp;
              contactdrkunalsarkar@gmail.com
            </span>
            <span className="marquee-sep">✦</span>
          </div>
        </div>
      </div>

      {/* ===================== OUR EXPERTISE ===================== */}
      <section id="expertise" className="bg-navy py-16 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl reveal reveal-left">
              <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-4">
                Our Expertise
              </p>
              <h2 className="font-heading font-700 text-white text-[32px] sm:text-[40px] leading-tight tracking-tight">
                Comprehensive Cardiac <br className="hidden sm:block" />
                Solutions for a Healthy Heart
              </h2>
            </div>
            <div className="text-white/60 text-[15px] max-w-sm md:text-right reveal reveal-right">
              We provide Cardiac surgical solutions for the entire range of adult
              cardiac problems with precision and care.
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="swiper expertise-swiper !pb-14">
            <div className="swiper-wrapper">
              {[
                {
                  img: "services1.png",
                  alt: "Valvular Heart Disease",
                  desc: "Minimally invasive aortic valve surgery, done using one or more small cuts",
                  title: "Valvular Heart Disease",
                },
                {
                  img: "services2.png",
                  alt: "Adult Congenital Heart Disease",
                  desc: "Adult Congenital Heart Disease: birth heart defects in adults.",
                  title: "Adult Congenital Heart Disease",
                },
                {
                  img: "services3.jpg",
                  alt: "Heart Transplantation",
                  desc: "Renewing Lives Through Advanced Heart Transplants.",
                  title: "Heart Transplantation",
                },
                {
                  img: "services4.jpg",
                  alt: "Minimally Invasive Cardiac Surgery",
                  desc: "Redefining Heart Surgery with Innovation, Care, and Precision.",
                  title: "Minimally Invasive Cardiac Surgery (MICS)",
                },
                {
                  img: "services5.png",
                  alt: "Advanced Cardiac Care",
                  desc: "Utilizing state-of-the-art technology for complex cardiac procedures.",
                  title: "Advanced Cardiac Care",
                },
              ].map((service) => (
                <div className="swiper-slide" key={service.title}>
                  <div className="service-card group">
                    <div className="service-image">
                      <img
                        src={`/assets/services/${service.img}`}
                        alt={service.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="service-overlay"></div>
                    </div>
                    <div className="service-content">
                      <p className="service-description">{service.desc}</p>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination !-bottom-2"></div>

            {/* Navigation Buttons */}
            <div className="swiper-button-prev !bg-white/10 !backdrop-blur-md !w-12 !h-12 !rounded-full !text-white !after:content-[''] group transition-all hover:!bg-teal lg:!flex !hidden !left-4 border border-white/20">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="swiper-button-next !bg-white/10 !backdrop-blur-md !w-12 !h-12 !rounded-full !text-white !after:content-[''] group transition-all hover:!bg-teal lg:!flex !hidden !right-4 border border-white/20">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INNOVATIONS IN CARDIAC SURGERY ===================== */}
      <section
        id="innovations"
        className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#f4fafb] to-white"
      >
        {/* soft decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 -right-24 w-80 h-80 bg-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-12 text-center mx-auto reveal reveal-up">
            <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-3">
              Pioneering Techniques
            </p>
            <h2 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Innovations in <span className="text-teal">Cardiac Surgery</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Advanced, evidence-led techniques that push the boundaries of heart
              surgery — safer procedures, faster recovery, and better outcomes for
              every patient.
            </p>
          </div>

          {/* Coverflow Carousel */}
          <div className="swiper innovations-swiper">
            <div className="swiper-wrapper">
              {[
                {
                  img: "services1.png",
                  alt: "Beating Heart Surgery",
                  title: "Beating Heart Surgeries",
                  tag: '"Precision Healing, While the Heart Still Beats."',
                },
                {
                  img: "services2.png",
                  alt: "Complex Coronary Artery Surgery",
                  title: "Complex Coronary Artery Surgery",
                  tag: '"Advanced Surgery, Without Skipping a Beat."',
                },
                {
                  img: "services3.jpg",
                  alt: "Atrial Graft Surgery",
                  title: "Atrial Graft Surgery",
                  tag: '"Redefining Cardiac Care — Awake, Aware, Alive."',
                },
                {
                  img: "services4.jpg",
                  alt: "Surgery for Heart Failure Valves",
                  title: "Surgery for Heart Failure Valves",
                  tag: "Surgery that keeps the rhythm of life going.",
                },
                {
                  img: "services5.png",
                  alt: "Heart Transplantation",
                  title: "Heart Transplantation",
                  tag: "Replacing a failing heart with a healthy donor heart.",
                },
              ].map((innov) => (
                <div className="swiper-slide" key={innov.title}>
                  <article className="innov-card group">
                    <img
                      className="innov-img"
                      src={`/assets/services/${innov.img}`}
                      alt={innov.alt}
                      loading="lazy"
                    />
                    <div className="innov-overlay">
                      <h3 className="innov-title">{innov.title}</h3>
                      <p className="innov-tag">{innov.tag}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== APPOINTMENT & CONTACT ===================== */}
      <section id="appointment" className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left: Appointment Form */}
            <div className="appointment-card reveal reveal-left">
              <div className="mb-8">
                <span className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase block mb-3">
                  Get in Touch
                </span>
                <h2 className="font-heading font-700 text-navy text-[32px] sm:text-[36px] tracking-tight">
                  Request <span className="text-teal">Appointment</span>
                </h2>
              </div>

              <AppointmentForm />
            </div>

            {/* Right: Contact Info */}
            <div className="hidden md:flex flex-col reveal reveal-right">
              <div className="relative flex-1 rounded-3xl overflow-hidden shadow-contact border-2 border-slate-300">
                <img
                  src="/assets/appoinment.png"
                  alt="Contact Dr. Kunal Sarkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PREMIUM VIDEO CONSULTATION CTA ===================== */}
      <section id="cta-video" className="relative py-6 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card relative rounded-[40px] overflow-hidden p-8 lg:p-0 shadow-4xl border border-white/10">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 items-center">
              {/* Left: Representative Image */}
              <div className="hidden md:block lg:col-span-4 flex items-end justify-center lg:justify-start pt-12 lg:pt-0">
                <div className="relative group">
                  {/* Subtle glow behind image */}
                  <div className="absolute inset-0 bg-teal/20 blur-2xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
                  <img
                    src="/assets/drkunaravatar.webp"
                    alt="Video Consultation"
                    className="relative z-10 h-[380px] lg:h-[500px] w-auto object-contain transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Right: Information & Actions */}
              <div className="lg:col-span-8 py-10 g:pr-16 lg:pl-8 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal/10 text-teal font-700 text-xs uppercase tracking-widest border border-teal/20">
                  Anytime, Anywhere Care
                </span>
                <h2 className="font-heading font-700 text-[32px] sm:text-[42px] leading-[1.1] mb-6 text-navy">
                  Consult with Dr. Kunal Sarkar <br className="hidden lg:block" />
                  from the <span className="text-teal">Comfort of Your Home</span>
                </h2>
                <p className="text-slate-600 text-md sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                  Experience world-class healthcare without the travel. Join
                  thousands of patients who consult via our secure video platform.
                  Effortless, private, and professional.
                </p>

                {/* Download Links */}
                <div className="flex  gap-5 justify-center lg:justify-start items-center">
                  <a
                    href="https://bit.ly/3NmtKmN"
                    target="_blank"
                    className="store-button group inline-block transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src="/assets/app/playstore.png"
                      alt="Get it on Google Play"
                      className="h-14 w-auto"
                    />
                  </a>

                  <a
                    href="https://apps.apple.com/in/app/asklepiahealth/id1543956007"
                    target="_blank"
                    className="store-button group inline-block transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src="/assets/app/appstore.png"
                      alt="Download on the App Store"
                      className="h-14 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GOOGLE REVIEWS SECTION ===================== */}
      <section id="google-reviews" className="py-14 sm:py-20 bg-[#f6fafd] overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: heading + carousel */}
            <div className="min-w-0">
              {/* Header */}
              <div className="text-center lg:text-left mb-8 reveal reveal-up">
                <a
                  href="https://www.google.com/search?q=dr+kunal+sarkar"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-slate-200 px-3.5 py-1.5 text-[12.5px] font-600 text-navy/80 shadow-sm hover:ring-teal/40 transition"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="text-navy font-700">4.1</span>
                  <span className="flex text-amber-400 text-[11px]">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                  </span>
                  <span className="text-slate-400">·</span>
                  <span>515 Google reviews</span>
                </a>
                <h2 className="mt-4 font-heading font-700 text-[32px] sm:text-[44px] leading-tight tracking-tight text-navy">
                  What Our <span className="text-teal">Patients Say</span>
                </h2>
                <div className="w-16 h-1 bg-teal rounded-full mt-4 mx-auto lg:mx-0"></div>
              </div>

              {/* Reviews Swiper */}
              <div id="reviews-swiper" className="swiper w-full">
                <div className="swiper-wrapper">
                  {[
                    {
                      stars: 5,
                      text: "My father underwent a double valve replacement under Dr. Sarkar. Today he is healthy and active again. For our family, Dr. Sarkar is nothing short of God — we will be grateful to him forever.",
                      initial: "S",
                      name: "Susmita Dutta",
                      place: "Howrah",
                    },
                    {
                      stars: 5,
                      text: "My father had bypass surgery here. From the care and behaviour of the entire team to the medication and follow-up — everything was excellent. Highly recommended for any cardiac issue.",
                      initial: "D",
                      name: "Debjeet Biswas",
                      place: "Bhowanipore",
                    },
                    {
                      stars: 5,
                      text: "My brother's bypass surgery was handled with complete professionalism — from the very first consultation right through to post-operative care. Dr. Sarkar and his team were outstanding.",
                      initial: "S",
                      name: "Shampa Nandi",
                      place: "Kolkata",
                    },
                    {
                      stars: 4,
                      text: "Dr. Sarkar's excellence in cardiac surgery is matched by his kind, reassuring demeanor. He took the time to explain everything clearly and put our whole family at ease.",
                      initial: "R",
                      name: "Rupam Banik",
                      place: null,
                    },
                  ].map((review) => (
                    <div className="swiper-slide h-auto pb-1" key={review.name}>
                      <article className="review-card">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-1 text-[15px] text-amber-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i
                                key={i}
                                className={i < review.stars ? "fas fa-star" : "far fa-star"}
                              ></i>
                            ))}
                          </div>
                          <i className="fab fa-google text-lg text-slate-300"></i>
                        </div>
                        <p className="text-slate-600 text-[15px] sm:text-[16.5px] leading-relaxed break-words">
                          {review.text}
                        </p>
                        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                          <span className="grid place-items-center w-11 h-11 rounded-full bg-teal/10 text-teal font-700 shrink-0">
                            {review.initial}
                          </span>
                          <div className="min-w-0">
                            <div className="font-700 text-navy text-[15px] truncate">{review.name}</div>
                            <div className="text-[12.5px] text-slate-400 flex items-center gap-1.5">
                              <i className="fas fa-check-circle text-teal/70"></i>
                              Verified Patient{review.place ? ` · ${review.place}` : ""}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
                <button
                  type="button"
                  aria-label="Previous review"
                  className="reviews-prev group w-12 h-12 rounded-full bg-white shadow-md ring-1 ring-slate-200 grid place-items-center text-teal hover:bg-teal hover:text-white transition-colors"
                >
                  <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-0.5"></i>
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  className="reviews-next group w-12 h-12 rounded-full bg-white shadow-md ring-1 ring-slate-200 grid place-items-center text-teal hover:bg-teal hover:text-white transition-colors"
                >
                  <i className="fas fa-arrow-right transition-transform group-hover:translate-x-0.5"></i>
                </button>
              </div>
            </div>

            {/* Right: collage image (desktop only) */}
            <div className="hidden lg:block relative group">
              <div className="absolute inset-0 bg-teal/10 rounded-[36px] translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src="/assets/google-rewviews.jpg"
                alt="Dr. Kunal Sarkar with patients at free health camps"
                className="w-full h-auto rounded-[36px] shadow-2xl ring-1 ring-white/60 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LATEST BLOG ===================== */}
      <section id="latest-blog" className="relative py-16 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-3">
                From the Doctor&apos;s Desk
              </p>
              <h2 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
                Read Our <span className="text-teal">Latest Blogs</span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Expert insights on heart health, prevention, and care — straight
                from Dr. Sarkar.
              </p>
            </div>
            <a href="/read-blog" className="self-start md:self-auto btn-outline px-6 py-2.5 text-[14px]">
              View All Blogs
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

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {[
              {
                img: "blog1.png",
                alt: "Golden Minutes of Heart Attack",
                readTime: "4 min read",
                date: "15 June 2026",
                title: "হার্ট অ্যাটাকের Golden Minutes",
                excerpt:
                  "The first 10 minutes after a heart attack are critical — what to do, and what to avoid, to save a life.",
              },
              {
                img: "blog2.png",
                alt: "Morning Heart Attack Risk",
                readTime: "5 min read",
                date: "8 June 2026",
                title: "সকালেই বাড়ে হার্ট অ্যাটাকের ঝুঁকি!",
                excerpt:
                  "Why heart attacks peak in the morning — the small mistakes after waking up that quietly raise your risk.",
              },
              {
                img: "blog3.png",
                alt: "Silent Heart Attack: How to Recognise",
                readTime: "4 min read",
                date: "1 June 2026",
                title: "সাইলেন্ট হার্ট অ্যাটাক: বুঝবেন কীভাবে?",
                excerpt:
                  "Silent heart attacks often go unnoticed. Learn the subtle warning signs your body sends — long before the pain.",
              },
            ].map((blog) => (
              <a href="#" className="blog-card group" key={blog.title}>
                <div className="blog-media">
                  <img src={`/assets/blogs/${blog.img}`} alt={blog.alt} loading="lazy" />
                  <span className="blog-cat">Health</span>
                  <span className="blog-reading">
                    <i className="fas fa-clock"></i> {blog.readTime}
                  </span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="flex items-center gap-1.5">
                      <i className="far fa-calendar text-teal/70"></i> {blog.date}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <i className="far fa-user text-teal/70"></i> Dr. K. Sarkar
                    </span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <span className="blog-link">
                    Read More
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DR. SARKAR'S VOICE (videos) ===================== */}
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
            <a
              href="https://www.youtube.com/channel/UCTI9L1ZnjpsTwYMS4uI4E0Q"
              target="_blank"
              rel="noopener"
              className="self-start md:self-auto btn-outline px-6 py-2.5 text-[14px]"
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

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {[
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
            ].map((video) => (
              <button
                type="button"
                className="voice-card group"
                data-yt={video.yt}
                aria-label={video.ariaLabel}
                key={video.yt}
              >
                <div className="voice-media">
                  <img src={`/assets/dr_voice/${video.img}`} alt={video.alt} loading="lazy" />
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
        </div>

        {/* Lightbox modal (hidden until a card is clicked) */}
        <VoiceModal />
      </section>

      <Footer />

      {/* ===================== MOBILE BOTTOM NAVIGATION ===================== */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_20px_50px_rgba(22,41,74,0.25)] px-6 py-3 flex items-center justify-between">
          <a
            href="#book"
            className="flex flex-col items-center gap-1.5 text-navy hover:text-teal transition-colors"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-50 text-teal">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span className="text-[10px] font-700 uppercase tracking-wider">Book Now</span>
          </a>

          {/* Separator */}
          <div className="h-8 w-px bg-slate-200/60"></div>

          <a
            href="https://wa.me/916290350200"
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center gap-1.5 text-navy hover:text-teal transition-colors"
          >
            <span className="grid h-10 w-10 place-items-center scale-110">
              <img src="/assets/socials/whatsapp.svg" alt="" className="h-9 w-9" />
            </span>
            <span className="text-[10px] font-700 uppercase tracking-wider text-teal">WhatsApp</span>
          </a>

          {/* Separator */}
          <div className="h-8 w-px bg-slate-200/60"></div>

          <a
            href="tel:+916290350200"
            className="flex flex-col items-center gap-1.5 text-navy hover:text-teal transition-colors"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-navy">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
              </svg>
            </span>
            <span className="text-[10px] font-700 uppercase tracking-wider">Call Now</span>
          </a>
        </div>
      </div>

      <SiteScripts />
    </>
  );
}
