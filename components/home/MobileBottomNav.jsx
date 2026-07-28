const APPOINTMENT_WHATSAPP =
  "https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

export default function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md">
      <div className="bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_20px_50px_rgba(22,41,74,0.25)] px-6 py-3 flex items-center justify-between">
        <a
          href={APPOINTMENT_WHATSAPP}
          target="_blank"
          rel="noopener"
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
          <span className="text-[10px] font-700 uppercase tracking-wider">
            Book Now
          </span>
        </a>

        {/* Separator */}
        <div className="h-8 w-px bg-slate-200/60"></div>

        <a
          href={APPOINTMENT_WHATSAPP}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-1.5 text-navy hover:text-teal transition-colors"
        >
          <span className="grid h-10 w-10 place-items-center scale-110">
            <img
              src="/assets/socials/whatsapp.svg"
              alt=""
              className="h-9 w-9"
            />
          </span>
          <span className="text-[10px] font-700 uppercase tracking-wider text-teal">
            WhatsApp
          </span>
        </a>

        {/* Separator */}
        <div className="h-8 w-px bg-slate-200/60"></div>

        <a
          href="tel:+919831030908"
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
          <span className="text-[10px] font-700 uppercase tracking-wider">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
}
