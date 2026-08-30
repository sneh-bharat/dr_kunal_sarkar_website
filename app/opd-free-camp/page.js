import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import OpdIcon from "@/components/OpdIcon";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import FreeCamp from "@/models/FreeCamp";
import { serializeDoc } from "@/lib/serialize";

// Camps are managed in the admin panel and change infrequently — cache the
// page for up to 60s instead of re-querying every visit. Admin actions call
// revalidatePath() to bust this cache immediately on create/edit/delete.
export const revalidate = 60;

export const metadata = {
  title: "OPD / Free Camp — Dr. Kunal Sarkar",
  description:
    "Regular OPD consultation schedule and upcoming free health camps by Dr. Kunal Sarkar, Chief Cardiac Surgeon, across Kolkata and beyond.",
};

async function getUpcomingFreeCamps() {
  await connectToDatabase();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const camps = await FreeCamp.find({
    published: true,
    date: { $gte: startOfToday },
  })
    .sort({ date: 1 })
    .lean();

  return serializeDoc(camps).map((camp) => {
    const date = new Date(camp.date);
    return {
      ...camp,
      day: date.toLocaleDateString("en-IN", { day: "2-digit" }),
      month: date.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
      weekday: date.toLocaleDateString("en-IN", { weekday: "long" }),
      phones: camp.phone.split("/").map((p) => p.trim()),
    };
  });
}

const regularOpds = [
  {
    name: "Kolkata Heart Foundation",
    image: "/assets/free-opd/kolkata-heart-foundation.webp",
    address: "42/1A, Harish Mukherjee Road, Bhowanipore, Kolkata – 700025",
    schedule: [
      { day: "Tuesday", time: "8:00 PM onwards" },
      { day: "Thursday", time: "10:00 AM onwards" },
      { day: "Friday", time: "8:00 PM onwards" },
    ],
    note: "Prior appointment required",
    phones: ["+919831030908"],
  },
  {
    name: "Manipal Hospital, Mukundapur",
    image: "/assets/free-opd/manipal-hospital.webp",
    address:
      "127, Eastern Metropolitan Bypass, Nitai Nagar, Mukundapur, Kolkata",
    days: "Mon – Sat",
    hours: "10:00 am – 3:00 pm",
    note: "Prior appointment required",
    phones: ["+919831000191"],
  },
];

export default async function OpdFreeCampPage() {
  const freeCamps = await getUpcomingFreeCamps();

  return (
    <>
      <Header active="opd" />

      <main>

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

          <div className="grid gap-4 sm:gap-6 lg:gap-7">
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
                    <OpdIcon
                      name="building"
                      className="h-3.5 w-3.5 text-teal"
                    />
                    Regular OPD
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-7 flex-1 min-w-0">
                  <h2 className="font-heading font-700 text-navy text-[17px] sm:text-[24px] leading-snug">
                    {opd.name}
                  </h2>
                  <p className="mt-1 flex items-start gap-1.5 text-[12.5px] sm:text-[15px] text-ink leading-snug">
                    <OpdIcon
                      name="map-pin"
                      className="h-3.5 w-3.5 shrink-0 mt-0.5 text-teal/60"
                    />
                    {opd.address}
                  </p>

                  {opd.schedule ? (
                    <div className="mt-3 sm:mt-5 border-t border-slate-100 pt-3 sm:pt-5">
                      <div className="text-[12px] sm:text-[15px] text-ink uppercase tracking-wide mb-1.5 sm:mb-2">
                        Schedule
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-3">
                        {opd.schedule.map((slot) => (
                          <div
                            key={slot.day}
                            className="flex items-center gap-1.5 text-[13px] sm:text-[14px] font-600 text-navy"
                          >
                            <OpdIcon name="calendar" className="h-4 w-4 text-teal shrink-0" />
                            <span>
                              {slot.day}
                              <span className="block text-[11.5px] sm:text-[12.5px] font-500 text-ink">
                                {slot.time}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 sm:mt-5 grid grid-cols-2 gap-3 sm:gap-4 border-t border-slate-100 pt-3 sm:pt-5">
                      <div>
                        <div className="text-[12px] sm:text-[15px] text-ink uppercase tracking-wide">
                          Days
                        </div>
                        <div className="mt-0.5 sm:mt-1 flex items-center gap-1.5 text-[13px] sm:text-[14px] font-600 text-navy">
                          <OpdIcon
                            name="calendar"
                            className="h-4 w-4 text-teal"
                          />
                          {opd.days}
                        </div>
                      </div>
                      <div>
                        <div className="text-[12px] sm:text-[15px] text-ink uppercase tracking-wide">
                          Hours
                        </div>
                        <div className="mt-0.5 sm:mt-1 flex items-center gap-1.5 text-[13px] sm:text-[14px] font-600 text-navy">
                          <OpdIcon name="clock" className="h-4 w-4 text-teal" />
                          {opd.hours}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 sm:mt-5 flex items-center justify-between gap-3 sm:gap-4 border-t border-slate-100 pt-3 sm:pt-5">
                    <div className="min-w-0">
                      <div className="text-[12.5px] sm:text-[14px] text-ink">{opd.note}</div>
                      <Link
                        href={`tel:${opd.phones[0]}`}
                        className="mt-0.5 block text-[13.5px] sm:text-[15px] font-700 text-navy hover:text-teal transition-colors truncate"
                      >
                        {opd.phones[0]}
                      </Link>
                    </div>
                    <Link
                      href={`tel:${opd.phones[0]}`}
                      className="btn-primary shrink-0 h-9 w-9 sm:h-10 sm:w-10 !p-0"
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
              Upcoming  <span className="text-teal">Health Camp</span>
            </h2>
          </div>

          {freeCamps.length === 0 && (
            <p className="text-center text-[15px] text-ink">
              No upcoming health camps scheduled right now — please check back soon.
            </p>
          )}

          <div className="grid gap-3 lg:gap-7">
            {freeCamps.map((freeCamp, i) => (
              <div
                key={freeCamp._id}
                className={`reveal reveal-up delay-${
                  i + 1
                } group bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-row sm:flex-row`}
              >
                {/* Date block (in place of photo) */}
                <div className="relative w-[72px] sm:w-64 md:w-72 shrink-0 aspect-auto overflow-hidden bg-sky-200 flex flex-col items-center justify-center text-teal py-2.5 sm:py-0">
                  <div className="text-[22px] sm:text-[48px] font-800 leading-none">
                    {freeCamp.day}
                  </div>
                  <div className="text-[8px] sm:text-[13px] font-700 tracking-[0.1em] sm:tracking-[0.2em] uppercase mt-0.5 sm:mt-1 text-center px-1">
                    {freeCamp.month} {freeCamp.year}
                  </div>
                  {freeCamp.badge && (
                    <span className="hidden sm:inline-flex absolute top-3 left-3 items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
                      <OpdIcon name="building" className="h-3.5 w-3.5 text-teal" />
                      {freeCamp.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-2.5 sm:p-7 flex-1 min-w-0">
                  {freeCamp.badge && (
                    <span className="sm:hidden inline-flex items-center gap-1 rounded-full bg-teal-50 px-1.5 py-0.5 text-[9px] font-700 text-navy uppercase tracking-wide mb-1">
                      <OpdIcon name="building" className="h-2.5 w-2.5 text-teal" />
                      {freeCamp.badge}
                    </span>
                  )}
                  <h2 className="font-heading font-700 text-navy text-[14px] sm:text-[24px] leading-tight">
                    {freeCamp.name}
                  </h2>
                  <p className="mt-0.5 flex items-start gap-1 text-[11px] sm:text-[15px] text-ink leading-snug">
                    <OpdIcon
                      name="map-pin"
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 mt-0.5 text-teal/60"
                    />
                    {freeCamp.venue}
                  </p>

                  <div className="mt-1.5 sm:mt-5 grid grid-cols-2 gap-2 sm:gap-4 border-t border-slate-100 pt-1.5 sm:pt-5">
                    <div>
                      <div className="text-[9px] sm:text-[15px] text-ink uppercase tracking-wide">
                        Date
                      </div>
                      <div className="mt-0 sm:mt-1 flex items-center gap-1 text-[11px] sm:text-[14px] font-600 text-navy">
                        <OpdIcon
                          name="calendar"
                          className="h-3 w-3 sm:h-4 sm:w-4 text-teal shrink-0"
                        />
                        {freeCamp.day} {freeCamp.month}, {freeCamp.year}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[15px] text-ink uppercase tracking-wide">
                        Day
                      </div>
                      <div className="mt-0 sm:mt-1 flex items-center gap-1 text-[11px] sm:text-[14px] font-600 text-navy">
                        <OpdIcon name="clock" className="h-3 w-3 sm:h-4 sm:w-4 text-teal shrink-0" />
                        {freeCamp.weekday}
                      </div>
                    </div>
                  </div>

                  <div className="mt-1.5 sm:mt-5 flex items-center justify-between gap-2 sm:gap-4 border-t border-slate-100 pt-1.5 sm:pt-5">
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[14px] text-ink leading-snug">{freeCamp.note}</div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-1 text-[11px] sm:text-[15px] font-700">
                        {freeCamp.phones.map((phone, idx) => (
                          <span key={phone} className="flex items-center gap-1">
                            {idx > 0 && <span className="text-ink font-500">/</span>}
                            <Link
                              href={`tel:${phone.replace(/\s+/g, "")}`}
                              className="text-navy hover:text-teal transition-colors"
                            >
                              {phone}
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`tel:${freeCamp.phones[0].replace(/\s+/g, "")}`}
                      className="btn-primary shrink-0 h-7 w-7 sm:h-10 sm:w-10 !p-0"
                      aria-label={`Call ${freeCamp.name}`}
                    >
                      <OpdIcon name="phone" className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
              Book a private appointment or consult with Dr. Kunal Sarkar online
              from anywhere.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
                target="_blank"
                rel="noopener"
                className="btn-primary px-6 py-3 text-[14px]"
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
                href="https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
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

      </main>

      <Footer />

      <SiteScripts />
    </>
  );
}
