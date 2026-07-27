import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import OpdIcon from "@/components/OpdIcon";

export const metadata = {
  title: "OPD / Free Camp — Dr. Kunal Sarkar",
  description:
    "Regular OPD consultation schedule and upcoming free health camps by Dr. Kunal Sarkar, Chief Cardiac Surgeon, across Kolkata and beyond.",
};

const regularOpds = [
  {
    name: "Kolkata Heart Foundation",
    image: "/assets/free-opd/kolkata-heart-foundation.webp",
    address: "42/1A, Harish Mukherjee Road, Bhowanipore, Kolkata – 700025",
    days: "Mon, Wed, Fri",
    hours: "6:00 pm onwards",
    note: "Prior appointment required",
    phones: ["+919831030908"],
  },
  {
    name: "Manipal Hospital, Mukundapur",
    image: "/assets/free-opd/manipal-hospital.webp",
    address: "127, Eastern Metropolitan Bypass, Nitai Nagar, Mukundapur, Kolkata",
    days: "Mon – Sat",
    hours: "10:00 am – 3:00 pm",
    note: "Prior appointment required",
    phones: ["+919831000191"],
  },
];

const freeCamp = {
  name: "Bardhaman OPD",
  venue: "Burdwan Apollo Hospital, 41 R. B. Ghosh Road",
  day: "28",
  month: "JUN",
  weekday: "Saturday",
  time: "9:30 am",
  phones: ["70444 99827", "74777 14447", "86095 51589"],
};

export default function OpdFreeCampPage() {
  return (
    <>
      <Header active="opd" />

      {/* ===================== REGULAR OPD SCHEDULE ===================== */}
      <section className="bg-white py-16 ">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              Weekly Schedule
            </p>
            <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              OPD &amp; <span className="text-teal">Free Camp</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Regular outpatient consultation hours and upcoming free health
              camps with Dr. Kunal Sarkar.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-7">
            {regularOpds.map((opd, i) => (
              <div
                key={opd.name}
                className={`reveal reveal-up delay-${
                  i + 1
                } group bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row`}
              >
                {/* Photo */}
                <div className="relative w-full sm:w-64 md:w-72 shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden">
                  <img
                    src={opd.image}
                    alt={opd.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
                    <OpdIcon name="building" className="h-3.5 w-3.5 text-teal" />
                    Regular OPD
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 min-w-0">
                  <h2 className="font-heading font-700 text-navy text-[19px] sm:text-[24px] leading-snug">
                    {opd.name}
                  </h2>
                  <p className="mt-1.5 flex items-start gap-1.5 text-[13px] sm:text-[15px] text-ink leading-snug">
                    <OpdIcon name="map-pin" className="h-3.5 w-3.5 shrink-0 mt-0.5 text-teal/60" />
                    {opd.address}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                    <div>
                      <div className="text-[13px] sm:text-[15px] text-ink uppercase tracking-wide">Days</div>
                      <div className="mt-1 flex items-center gap-1.5 text-[14px] font-600 text-navy">
                        <OpdIcon name="calendar" className="h-4 w-4 text-teal" />
                        {opd.days}
                      </div>
                    </div>
                    <div>
                      <div className="text-[13px] sm:text-[15px] text-ink uppercase tracking-wide">Hours</div>
                      <div className="mt-1 flex items-center gap-1.5 text-[14px] font-600 text-navy">
                        <OpdIcon name="clock" className="h-4 w-4 text-teal" />
                        {opd.hours}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <div className="min-w-0">
                      <div className="text-[14px] text-ink">{opd.note}</div>
                      <Link
                        href={`tel:${opd.phones[0]}`}
                        className="mt-0.5 block text-[15px] font-700 text-navy hover:text-teal transition-colors truncate"
                      >
                        {opd.phones[0]}
                      </Link>
                    </div>
                    <Link
                      href={`tel:${opd.phones[0]}`}
                      className="btn-primary shrink-0 h-10 w-10 !p-0"
                      aria-label={`Call ${opd.name}`}
                    >
                      <OpdIcon name="phone" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== UPCOMING FREE CAMP ===================== */}
      <section className="bg-teal-50 py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              Outstation Camp
            </p>
            <h2 className="font-heading font-700 text-navy text-[26px] sm:text-[34px] leading-tight tracking-tight">
              Upcoming Free <span className="text-teal">Health Camp</span>
            </h2>
          </div>

          <div className="reveal reveal-up delay-1 max-w-3xl mx-auto bg-white rounded-2xl border border-teal/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8">
            {/* Date badge */}
            <div className="shrink-0 flex sm:flex-col items-center justify-center gap-2 sm:gap-0 bg-teal-50 text-teal rounded-xl px-7 py-4 sm:py-5 text-center">
              <div className="text-[36px] sm:text-[40px] font-800 leading-none">
                {freeCamp.day}
              </div>
              <div className="text-[12px] font-700 tracking-[0.2em] uppercase sm:mt-1">
                {freeCamp.month}
              </div>
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h3 className="font-heading font-700 text-navy text-[19px] sm:text-[21px]">
                {freeCamp.name}
              </h3>
              <p className="mt-1.5 flex items-start justify-center sm:justify-start gap-1.5 text-[13.5px] text-ink leading-snug">
                <OpdIcon name="map-pin" className="h-3.5 w-3.5 shrink-0 mt-0.5 text-teal/60" />
                {freeCamp.venue}
              </p>
              <div className="mt-3.5 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[13.5px] text-navy font-600">
                <span className="inline-flex items-center gap-1.5">
                  <OpdIcon name="calendar" className="h-4 w-4 text-teal" />
                  {freeCamp.weekday}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <OpdIcon name="clock" className="h-4 w-4 text-teal" />
                  {freeCamp.time}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-1.5">
                {freeCamp.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-700 text-navy hover:text-teal transition-colors"
                  >
                    <OpdIcon name="phone" className="h-3.5 w-3.5" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="reveal reveal-up rounded-[32px] bg-teal-50 px-8 py-12 sm:py-14 text-center">
            <h2 className="font-heading font-700 text-navy text-[24px] sm:text-[30px] leading-tight tracking-tight">
              Can&apos;t make it to an OPD or camp?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-[15px] text-ink leading-relaxed">
              Book a private appointment or consult with Dr. Kunal Sarkar
              online from anywhere.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/appointment" className="btn-primary px-6 py-3 text-[14px]">
                Request Appointment
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
                href="https://wa.me/916290350200"
                target="_blank"
                rel="noopener"
                className="btn-outline px-6 py-3 text-[14px]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
