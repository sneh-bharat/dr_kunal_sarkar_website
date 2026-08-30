import Link from "next/link";
import OpdIcon from "@/components/OpdIcon";

export default function UpcomingCampSection({ camps }) {
  if (!camps || camps.length === 0) return null;

  return (
    <section id="upcoming-camp" className="py-14 sm:py-20 bg-teal-50 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-3">
              Outstation Camp
            </p>
            <h2 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Upcoming <span className="text-teal">Health Camp</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">
              Cardiac OPD camps with Dr. Kunal Sarkar, coming up near you.
            </p>
          </div>
          <Link href="/opd-free-camp" className="self-start md:self-auto btn-outline px-6 py-2.5 text-[14px]">
            View All Camps
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
          </Link>
        </div>

        <div className="grid gap-3 sm:gap-6 lg:gap-7">
          {camps.map((freeCamp) => (
            <div
              key={freeCamp._id}
              className="group bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-row"
            >
              {/* Date block (in place of photo) */}
              <div className="relative w-[72px] sm:w-64 md:w-72 shrink-0 overflow-hidden bg-sky-200 flex flex-col items-center justify-center text-teal py-2.5 sm:py-0">
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
                <h3 className="font-heading font-700 text-navy text-[14px] sm:text-[24px] leading-tight">
                  {freeCamp.name}
                </h3>
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
                      <OpdIcon name="calendar" className="h-3 w-3 sm:h-4 sm:w-4 text-teal shrink-0" />
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
                    <div className="text-[10px] sm:text-[14px] text-ink leading-snug">
                      {freeCamp.note}
                    </div>
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
  );
}
