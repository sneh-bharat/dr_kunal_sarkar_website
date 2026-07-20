import Link from "next/link";

const navLinks = [
  {
    label: "News & Update",
    href: "#",
    key: "news",
    children: [
      { label: "Electronic Media", href: "/electronic-media" },
      { label: "Print Media", href: "/print-media" },
    ],
  },
  {
    label: "Gallery",
    href: "#",
    key: "gallery",
    children: [
      { label: "Free Camp", href: "/free-camp-pictures" },
      { label: "Events", href: "/event-programs" },
      { label: "Health Awareness", href: "/health-awareness-campaigns" },
      { label: "Workshops & Seminars", href: "/workshop-seminars" },
    ],
  },
  { label: "Read Blog", href: "/read-blog", key: "blog" },
  { label: "Contact Us", href: "#" },
];

export default function Header({ active = "home" }) {
  const isHome = active === "home";
  const isOpd = active === "opd";

  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-300"
    >
      <nav className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          {isHome ? (
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/assets/logo.png"
                alt="Dr. Kunal Sarkar Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          ) : (
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/assets/logo.png"
                alt="Dr. Kunal Sarkar Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          )}

          {/* Desktop links */}
          <ul className="hidden xl:flex items-center gap-6 text-[14px] font-500">
            <li>
              {isHome ? (
                <a href="#" className="text-teal font-600">
                  Home
                </a>
              ) : (
                <Link href="/" className="text-navy/80 hover:text-teal transition">
                  Home
                </Link>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className={
                  active === "about"
                    ? "text-teal font-600 transition"
                    : "text-navy/80 hover:text-teal transition"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/opd-free-camp"
                className={
                  isOpd
                    ? "text-teal font-600 transition"
                    : "text-navy/80 hover:text-teal transition"
                }
              >
                OPD/Free Camp
              </Link>
            </li>
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="group relative">
                  <a
                    href={link.href}
                    className={
                      active === link.key
                        ? "inline-flex items-center gap-1 text-teal font-600 transition"
                        : "inline-flex items-center gap-1 text-navy/80 hover:text-teal transition"
                    }
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </a>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 z-50">
                    <div className="w-56 rounded-2xl bg-white border border-slate-300 shadow-xl ring-1 ring-slate-200 py-2">
                      {link.children.map((child) =>
                        child.href.startsWith("/") ? (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-[13.5px] font-500 text-navy/80 hover:bg-slate-50 hover:text-teal transition-colors"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-[13.5px] font-500 text-navy/80 hover:bg-slate-50 hover:text-teal transition-colors"
                          >
                            {child.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className={
                        active === link.key
                          ? "text-teal font-600 transition"
                          : "text-navy/80 hover:text-teal transition"
                      }
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-navy/80 hover:text-teal transition">
                      {link.label}
                    </a>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={isHome ? "#book" : "/#appointment"}
              className="btn-primary text-[13px] px-5 py-2.5"
            >
              Appointment Request
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
          </div>

          {/* Mobile hamburger */}
          <button
            id="menuBtn"
            className="xl:hidden grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100"
            aria-label="Menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobileMenu" className="xl:hidden hidden border-t border-slate-100 bg-white">
        <ul className="flex flex-col px-4 py-3 text-[15px] font-500">
          <li>
            {isHome ? (
              <a href="#" className="block py-2.5 text-teal font-600">
                Home
              </a>
            ) : (
              <Link href="/" className="block py-2.5 text-navy/80">
                Home
              </Link>
            )}
          </li>
          <li>
            <Link
              href="/about"
              className={
                active === "about"
                  ? "block py-2.5 text-teal font-600"
                  : "block py-2.5 text-navy/80"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/opd-free-camp"
              className={isOpd ? "block py-2.5 text-teal font-600" : "block py-2.5 text-navy/80"}
            >
              OPD/Free Camp
            </Link>
          </li>
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label}>
                <details className="group/details" open={active === link.key}>
                  <summary
                    className={
                      active === link.key
                        ? "flex items-center justify-between py-2.5 text-teal font-600 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                        : "flex items-center justify-between py-2.5 text-navy/80 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                    }
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 transition-transform group-open/details:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="pl-4 pb-2 flex flex-col">
                    {link.children.map((child) =>
                      child.href.startsWith("/") ? (
                        <Link key={child.label} href={child.href} className="py-2 text-[13.5px] text-navy/65">
                          {child.label}
                        </Link>
                      ) : (
                        <a key={child.label} href={child.href} className="py-2 text-[13.5px] text-navy/65">
                          {child.label}
                        </a>
                      )
                    )}
                  </div>
                </details>
              </li>
            ) : (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className={
                      active === link.key
                        ? "block py-2.5 text-teal font-600"
                        : "block py-2.5 text-navy/80"
                    }
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="block py-2.5 text-navy/80">
                    {link.label}
                  </a>
                )}
              </li>
            )
          )}
        </ul>
        <div className="flex items-center gap-3 px-4 pb-4">
          <a
            href={isHome ? "#book" : "/#appointment"}
            className="btn-primary flex-1 justify-center text-[13px] py-2.5"
          >
            Appointment Request
          </a>
        </div>
      </div>
    </header>
  );
}
