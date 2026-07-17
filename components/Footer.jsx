import Link from "next/link";
import CurrentYear from "./CurrentYear";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-navy text-white pt-14 sm:pt-16 pb-6 relative overflow-hidden"
    >
      {/* subtle decorative blob */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] bg-teal/10 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand + newsletter */}
          <div className="md:col-span-5">
            <a href="#" className="inline-flex items-center gap-3">
              <img
                src="/assets/logo-footer.png"
                alt="Dr. Kunal Sarkar Logo"
                className="h-14 sm:h-16 w-auto"
              />
            </a>

            <p className="mt-6 text-[14.5px] leading-relaxed text-white/70 max-w-md">
              You may add your Email ID to receive exclusive updates, medical
              insights, and the latest news from Dr. Kunal Sarkar and his
              network of advanced healthcare systems.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/cardiacsurgerykolkata"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="footer-social"
              >
                <img src="/assets/socials/facebook-3-logo.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1ngz4n3r02y68&utm_content=m3z1bmd"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="footer-social"
              >
                <img src="/assets/socials/instagram-2-1-logo.svg" alt="" />
              </a>
              <a
                href="https://www.twitter.com/kunalcardiac"
                target="_blank"
                rel="noopener"
                aria-label="Twitter / X"
                className="footer-social"
              >
                <img src="/assets/socials/twitter-3-logo.svg" alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTI9L1ZnjpsTwYMS4uI4E0Q"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="footer-social"
              >
                <img src="/assets/socials/youtube-color.svg" alt="" />
              </a>
            </div>

            <NewsletterForm />
          </div>

          {/* Company links */}
          <div className="md:col-span-2">
            <h3 className="font-700 text-[18px] mb-5 text-white">Company</h3>
            <ul className="space-y-3 text-[14.5px] text-white/75">
              <li>
                <a href="#" className="hover:text-teal transition-colors">
                  Home
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/opd-free-camp" className="hover:text-teal transition-colors">
                  OPD/Free Camp
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-teal transition-colors">
                  Clinical Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-2">
            <h3 className="font-700 text-[18px] mb-5 text-white">Useful Links</h3>
            <ul className="space-y-3 text-[14.5px] text-white/75">
              <li>
                <a href="#appointment" className="hover:text-teal transition-colors">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#latest-blog" className="hover:text-teal transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3">
            <h3 className="font-700 text-[18px] mb-5 text-white">Contacts</h3>
            <p className="text-[14.5px] leading-relaxed text-white/75">
              42/1A, Harish Mukherjee Road,
              <br />
              Bhowanipore, Kolkata – 700025,
              <br />
              West Bengal. (Opposite Azad Hind Dhaba)
            </p>
            <div className="mt-5">
              <div className="font-700 text-[15px] text-white mb-1">Email</div>
              <a
                href="mailto:contactdrkunalsarkar@gmail.com"
                className="text-[14px] text-white/75 hover:text-teal transition-colors break-all"
              >
                contactdrkunalsarkar@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <div className="font-700 text-[15px] text-white mb-1">Call Now</div>
              <a
                href="tel:+916290350200"
                className="text-[14px] text-white/75 hover:text-teal transition-colors"
              >
                +91 6290350200
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[13px] text-white/55 text-center sm:text-right">
            © <CurrentYear /> Dr. Kunal Sarkar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
