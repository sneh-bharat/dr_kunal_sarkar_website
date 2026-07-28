import Image from "next/image";

const innovations = [
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
];

export default function InnovationsSection() {
  return (
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
            {innovations.map((innov) => (
              <div className="swiper-slide" key={innov.title}>
                <article className="innov-card group">
                  <Image
                    className="innov-img"
                    src={`/assets/services/${innov.img}`}
                    alt={innov.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 80vw"
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
  );
}
