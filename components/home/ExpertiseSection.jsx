import Image from "next/image";

const services = [
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
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-navy py-16 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl reveal reveal-left">
            <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="font-heading font-700 text-white text-[32px] sm:text-[40px] leading-tight tracking-tight">
              Surgical care for the full spectrum of Adult Cardiac Conditions
            </h2>
          </div>
          <div className="text-white/60 text-[15px] max-w-sm md:text-right reveal reveal-right">
            Performed with precision, compassion, and the most advanced techniques available.
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="swiper expertise-swiper !pb-14">
          <div className="swiper-wrapper">
            {services.map((service) => (
              <div className="swiper-slide" key={service.title}>
                <div className="service-card group">
                  <div className="service-image">
                    <Image
                      src={`/assets/services/${service.img}`}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      className="object-cover"
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
  );
}
