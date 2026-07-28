import OpdIcon from "@/components/OpdIcon";

export default function AppointmentSection() {
  return (
    <section id="appointment" className="bg-white py-10">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 text-center">
        <span className="reveal reveal-up text-teal font-700 text-[13px] tracking-[0.2em] uppercase block mb-3">
          Get in Touch
        </span>
        <h2 className="reveal reveal-up delay-1 font-heading font-700 text-navy text-[30px] sm:text-[42px] tracking-tight">
          Book an <span className="text-teal">Appointment</span>
        </h2>
        <p className="reveal reveal-up delay-2 mt-4 text-[15px] leading-relaxed text-ink max-w-2xl mx-auto">
          Reach out to schedule a consultation with Dr. Sarkar at Manipal
          Hospital, Kolkata, or at one of his regular OPD camps across West
          Bengal. Choose the most convenient way to get in touch.
        </p>

        <div className="reveal reveal-up delay-3 mt-10 grid sm:grid-cols-3 gap-5">
          <a
            href="tel:+919831030908"
            className="group rounded-2xl border-t-4 border-t-red-400 border border-slate-300 bg-white px-6 py-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-500 mb-4">
              <OpdIcon name="phone" className="h-5 w-5" />
            </span>
            <div className="text-[12px] font-700 tracking-[0.15em] uppercase text-ink mb-2">
              Call Us
            </div>
            <div className="font-heading font-700 text-navy text-[16px]">
              +91 98310 30908
            </div>
            <div className="mt-1 text-[12.5px] text-ink">
              Mon–Sat, 10 AM – 1 PM
            </div>
          </a>

          <a
            href="https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
            target="_blank"
            rel="noopener"
            className="group rounded-2xl border-t-4 border-t-teal border border-slate-300 bg-white px-6 py-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal-50 mb-4">
              <img
                src="/assets/socials/whatsapp.svg"
                alt=""
                className="h-6 w-6"
              />
            </span>
            <div className="text-[12px] font-700 tracking-[0.15em] uppercase text-ink mb-2">
              WhatsApp
            </div>
            <div className="font-heading font-700 text-navy text-[16px]">
              Chat Instantly
            </div>
            <div className="mt-1 text-[12.5px] text-ink">
              Quick response guaranteed
            </div>
          </a>

          <a
            href="mailto:contactdrkunalsarkar@gmail.com"
            className="group rounded-2xl border-t-4 border-t-amber-400 border border-slate-300 bg-white px-6 py-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber-50 text-amber-500 mb-4">
              <OpdIcon name="mail" className="h-5 w-5" />
            </span>
            <div className="text-[12px] font-700 tracking-[0.15em] uppercase text-ink mb-2">
              Email
            </div>
            <div className="font-heading font-700 text-navy text-[15px] break-all">
              contactdrkunalsarkar
              <br />
              <div className="mt-1 text-[12.5px] text-ink">@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
