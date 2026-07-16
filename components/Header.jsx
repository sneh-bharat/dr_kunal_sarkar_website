import Link from "next/link";

const navLinks = [
  { label: "OPD/Free Camp", href: "#" },
  { label: "News & Update", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Read Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Header({ active = "home" }) {
  const isHome = active === "home";

  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100"
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
              {isHome ? (
                <Link href="/about" className="text-navy/80 hover:text-teal transition">
                  About
                </Link>
              ) : (
                <Link href="/about" className="text-teal font-600 transition">
                  About
                </Link>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-navy/80 hover:text-teal transition">
                  {link.label}
                </a>
              </li>
            ))}
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
            {isHome ? (
              <Link href="/about" className="block py-2.5 text-navy/80">
                About
              </Link>
            ) : (
              <Link href="/about" className="block py-2.5 text-teal font-600">
                About
              </Link>
            )}
          </li>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="block py-2.5 text-navy/80">
                {link.label}
              </a>
            </li>
          ))}
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
