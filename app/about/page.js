import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import FocusIcon from "@/components/FocusIcon";
import Link from "next/link";
import { Mic, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Dr. Kunal Sarkar — Distinguished Chief Cardiac Surgeon",
  description:
    "Biography and professional profile of Dr. Kunal Sarkar, a world-renowned Cardiothoracic & Vascular Surgeon with 30+ years of clinical excellence.",
};

const focusAreas = [
  {
    icon: "heart-pulse",
    title: "Off-Pump CABG",
    desc: "Expertise in 90%+ coronary surgeries without heart-lung machines.",
  },
  {
    icon: "bypass",
    title: "Total Arterial Bypass",
    desc: "Advanced grafting surgery using LIMA RIMA Y techniques.",
  },
  {
    icon: "microscope",
    title: "Minimally Invasive",
    desc: "Keyhole heart surgery for faster recovery and minimal scarring.",
  },
  {
    icon: "valve-repair",
    title: "Complex Valve Repair",
    desc: "Replacement and repair services for complex valve pathologies.",
  },
  {
    icon: "lungs",
    title: "Heart & Lung Transplant",
    desc: "Pioneering surgeries for end-stage heart and lung failure.",
  },
  {
    icon: "lvad-ecmo",
    title: "LVAD & ECMO",
    desc: "Advanced artificial heart support and lung oxygenation services.",
  },
  {
    icon: "redo-surgery",
    title: "Complex Redo Surgery",
    desc: "Specialized care for patients requiring multiple heart operations.",
  },
  {
    icon: "aortic-surgery",
    title: "Aortic Surgery",
    desc: "Treatment of aneurysms and complex aortic dissections.",
  },
];

const leadershipRoles = [
  {
    title: "Chief Cardiac Surgeon & Director",
    desc: "Manipal Hospital, EM Bypass, Mukundapur, Kolkata.",
  },
  {
    title: "Past President — IACTS",
    desc: "Indian Association of Cardiavascular and Thoracic Surgeons.",
  },
  {
    title: "Faculty Member",
    desc: "Imperial College London.",
  },
  {
    title: "Chairman — Kolkata Heart Foundation",
    desc: "Focused on public health education and accessibility.",
  },
  {
    title: "Managing Partner",
    desc: "Asklepia Health LLP — India's fastest growing digital health platform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header active="about" />

      {/* ===================== PROFESSIONAL PROFILE HERO ===================== */}
      <section className="bg-[#f0f7ff] py-12 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Floating Layout Container */}
          <div className="block">
            {/* Profile Image - Floated Left on larger screens, centered on small */}
            <div className="float-none sm:float-left w-full sm:w-[50%] lg:w-[45%] xl:w-[40%] sm:mr-10 lg:mr-16 mb-10 sm:mb-8 reveal reveal-left">
              <div className="relative group">
                {/* Background Accent */}
                <div className="absolute -inset-4 bg-teal/5 rounded-[40px] blur-2xl group-hover:bg-teal/10 transition-colors"></div>

                <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden  border-4 border-white">
                  <img
                    src="/assets/about-page.png"
                    alt="Dr. Kunal Sarkar"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="reveal reveal-right">
              <div className="space-y-4">
                <h1 className="font-heading font-700 text-navy text-[42px] sm:text-[55px] leading-[1.05] tracking-tight">
                  Dr. <span className="text-teal">Kunal Sarkar</span>
                </h1>

                <div className="text-[#ff4d4d] font-700 text-[14px] sm:text-[15px] tracking-widest uppercase">
                  MBBS, DNB, FRCS(ED), FRCS(GLASG)
                </div>

                <div className="text-[#ff4d4d] font-800 text-[13px] sm:text-[15px] leading-relaxed uppercase">
                  CHIEF CARDIAC SURGEON AND DIRECTOR, MANIPAL HOSPITAL, EM BYPASS,
                  MUKUNDAPUR, KOLKATA.
                </div>

                <div className="pt-6 space-y-6 text-navy/80 text-[16px] sm:text-[18px] leading-relaxed font-400">
                  <p>
                    Dr. Kunal Sarkar is a distinguished cardiac surgeon,
                    passionate about advancing the field of coronary surgery. With
                    over three decades of experience, he is a leading authority in
                    complex cardiovascular procedures and a fervent advocate for
                    innovative surgical techniques.
                  </p>

                  <p>
                    He is the <strong>Chief Cardiac Surgeon and Director</strong>,
                    Manipal Hospital, EM Bypass, Mukundapur, Kolkata, where he
                    heads the hospital&apos;s cardiac department, overseeing numerous
                    pioneering surgeries and patient care initiatives.
                  </p>

                  <p>
                    Dr. Sarkar&rsquo;s expertise spans a broad range of areas, including
                    off-pump coronary artery bypass grafting (CABG), bloodless
                    heart surgery, total arterial bypass grafting, combined
                    surgeries (CABG + Valve Surgery), and complex aortic
                    surgeries.
                  </p>

                  <p>
                    His commitment to minimally invasive techniques and advanced
                    surgery has made him a recognized figure in the global cardiac
                    community. He is especially known for his expertise in
                    performing more than 90% of coronary surgeries without the aid
                    of a heart-lung machine and in performing complex redo
                    surgeries.
                  </p>

                  <p>
                    His academic background is equally impressive. Dr. Sarkar
                    graduated with a <strong>Gold Medal in Surgery</strong> from
                    the prestigious Medical College, Calcutta, where he also
                    received 12 other awards in surgery. A National Scholar, he
                    further honed his skills in the UK, training at renowned
                    institutions such as the Cardiothoracic Centre Liverpool and
                    St. Mary&rsquo;s Hospital.
                  </p>

                  <p>
                    He is a Fellow of the Royal College of Surgeons in both
                    Edinburgh and Glasgow and serves as a faculty member at
                    Imperial College London.
                  </p>

                  <p>
                    Dr. Sarkar is a key contributor to the academic world, being
                    intimately involved with major associations like the European
                    Association for Cardio-Thoracic Surgery (EACTS) and the Indian
                    Association of Cardiovascular and Thoracic Surgeons (IACTS),
                    where he has served as President. He is also an active member
                    of the South Asian Forum of Cardiothoracic Surgeons, where he
                    seeks to foster collaboration and knowledge-sharing among
                    surgeons in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOCUS AREAS / UNIQUE LAYOUT ===================== */}
      <section className="py-10 bg-[#f8fafc] overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16 reveal reveal-up">
            <div className="max-w-2xl">
              <span className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase block mb-3">
                Clinical Specializations
              </span>
              <h2 className="font-heading font-700 text-navy text-[32px] sm:text-[40px]">
                Key Clinical <span className="text-teal">Focus Areas</span>
              </h2>
            </div>
            <p className="text-ink text-[15px] max-w-sm mb-1">
              Utilizing evidence-led techniques to deliver precision-based
              outcomes in cardiovascular medicine.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className={`bg-white p-6 rounded-3xl border border-teal/25 hover:border-teal/50 hover:shadow-lg transition-all group reveal reveal-up delay-${
                  (i % 4) + 1
                }`}
              >
                <div className="h-14 w-14 bg-slate-50 text-teal group-hover:bg-teal group-hover:text-white rounded-2xl grid place-items-center mb-6 transition-colors">
                  <FocusIcon name={area.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-700 text-navy mb-2">{area.title}</h3>
                <p className="text-ink text-[13px] leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POSITIONS & AFFILIATIONS ===================== */}
      <section className="py-10 bg-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full opacity-50 pointer-events-none"></div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Academic & Clinical Leadership */}
            <div className="reveal reveal-left">
              <h2 className="font-heading font-700 text-navy text-[32px] sm:text-[40px] leading-tight mb-6">
                Academic & Clinical <br />
                <span className="text-teal">Leadership Roles</span>
              </h2>
              <div className="space-y-1">
                {leadershipRoles.map((role) => (
                  <div
                    key={role.title}
                    className="flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-teal mt-2.5 shrink-0"></div>
                    <div>
                      <div className="text-navy font-700 leading-tight">{role.title}</div>
                      <div className="text-ink text-sm mt-1">{role.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Social Impact & Oratory */}
            <div className="reveal reveal-right pt-6 lg:pt-0">
              <div className="bg-navy p-10 lg:p-14 rounded-[48px] text-white overflow-hidden relative">
                {/* Background texture */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 border-8 border-teal rounded-full rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                  <h2 className="font-heading font-700 text-white text-[32px] leading-tight mb-8">
                    Social Impact & <br />
                    <span className="text-teal">The Spoken Word</span>
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
                    Outside of his surgical expertise, Dr. Sarkar is a passionate
                    debater, orator, and writer. He is the **President of the
                    Calcutta Debating Circle (CDC)**, organizing India&rsquo;s largest
                    live debate events.
                  </p>

                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <span className="h-10 w-10 bg-white/10 rounded-full grid place-items-center text-teal">
                        <Mic className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-white/90 font-600">
                        President, Calcutta Debating Circle (CDC)
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="h-10 w-10 bg-white/10 rounded-full grid place-items-center text-teal">
                        <HeartHandshake className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-white/90 font-600">
                        President, Kolkata Sukriti Foundation
                      </span>
                    </li>
                  </ul>

                  <Link
                    href="https://calcuttabatingcircle.org/"
                    target="_blank"
                    className="inline-flex items-center gap-3 mt-12 text-teal font-700 hover:text-white transition-colors"
                  >
                    Learn about CDC Events <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE AUTHOR SECTION ===================== */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[48px] overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left: Text */}
              <div className="order-1 lg:order-2 flex justify-center bg-navy relative reveal reveal-right">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-teal rounded-full blur-3xl"></div>
                </div>
                <img
                  src="/assets/bookimage.jpg"
                  alt="The Sickness of Health Book"
                  className="h-full w-auto drop-shadow-2xl transform hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Right: */}
              <div className="p-10 lg:p-20 order-2 lg:order-1 reveal reveal-left">
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal/10 text-teal font-700 text-xs uppercase tracking-widest border border-teal/10">
                  The Author
                </span>
                <h2 className="font-heading font-700 text-navy text-[32px] sm:text-[44px] leading-[1.1] mb-8">
                  The Sickness <br />
                  of <span className="text-teal">Health</span>
                </h2>
                <p className="text-ink text-lg leading-relaxed mb-10 max-w-lg">
                  In his compelling book, Dr. Kunal Sarkar traces medical
                  evolution from Hippocrates to contemporary science, addressing
                  the afflictions of modern healthcare in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
