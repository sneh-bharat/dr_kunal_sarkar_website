import React from 'react'

export default function app_consulting() {
  return (
    <> 
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
    </>

  )
}
