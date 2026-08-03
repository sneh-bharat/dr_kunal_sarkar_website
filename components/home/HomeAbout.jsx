import Image from "next/image";
import Link from "next/link";

const roles = [
  "Chief Cardiac Surgeon & Director — Manipal Hospital, EM Bypass, Mukundapur, Kolkata",
  "Past President — Indian Association of Cardiovascular & Thoracic Surgeons (IACTS)",
  "Past President — Society of Coronary Surgeons, SCS (India)",
  "Chairman — Kolkata Heart Foundation",
  "Managing Trustee — Calcutta Debating Circle",
  "President — Kolkata Sukriti Foundation",
  "Managing Partner — Asklepia Health LLP",
];

const qualifications = ["MBBS", "DNB — Cardiothoracic Surgery", "FRCS (Edinburgh)", "FRCS (Glasgow)"];

export default function HomeAbout() {
  return (
    <section id="about" className="bg-white py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* Photo (left) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/assets/about-1.webp"
                alt="Dr. Kunal Sarkar"
                width={480}
                height={599}
                sizes="(min-width: 1024px) 33vw, 90vw"
                className="w-full h-auto object-cover"
              />

              {/* Rotating contact spinner badge */}
              <a
                href="tel:+919831030908"
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
            <h2 className="reveal reveal-up delay-2 mt-3 font-heading font-600 text-navy text-[26px] sm:text-[32px] leading-[1.22] tracking-tight">
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
              {roles.map((role) => (
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

            <Link href="/about" className="btn-outline mt-9 px-6 py-2.5 text-[14px]">
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
            </Link>
          </div>

          {/* Sidebar (right) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-6">
              <h3 className="text-navy font-700 text-[12.5px] tracking-[0.14em] uppercase">
                Qualifications
              </h3>
              <ul className="mt-4 space-y-3">
                {qualifications.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-navy/85">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-6">
              <h3 className="text-navy font-700 text-[12.5px] tracking-[0.14em] uppercase">
                Memberships
              </h3>
              <ul className="mt-4 space-y-3">
                {["Served as Faculty at Imperial College"].map((item) => (
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
  );
}
