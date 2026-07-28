"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const APPOINTMENT_WHATSAPP =
  "https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

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
  { label: "Contact Us", href: "/contact", key: "contact" },
];

export default function Header({ active = "home" }) {
  const isHome = active === "home";
  const isOpd = active === "opd";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The backdrop/drawer are portal-rendered to document.body — the header
  // has backdrop-blur, which (like `filter`) creates a containing block for
  // `position: fixed` descendants, confining them to the header's own ~72px
  // box instead of the viewport. Portaling out of the header sidesteps that.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    function onKeyDown(e) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-300"
    >
      <nav className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/assets/logo.png"
              alt="Dr. Kunal Sarkar Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden xl:flex items-center gap-6 text-[14px] font-500">
            <li>
              {isHome ? (
                <Link href="/" className="text-teal font-600">
                  Home
                </Link>
              ) : (
                <Link
                  href="/"
                  className="text-navy/80 hover:text-teal transition"
                >
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
                  <Link
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
                  </Link>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 z-50">
                    <div className="w-56 rounded-2xl bg-white border border-slate-300 shadow-xl ring-1 ring-slate-200 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13.5px] font-500 text-navy/80 hover:bg-slate-50 hover:text-teal transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
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
                </li>
              ),
            )}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={APPOINTMENT_WHATSAPP}
              target="_blank"
              rel="noopener"
              className="btn-primary text-[13px] px-5 py-2.5"
            >
              Book Appointment
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
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="xl:hidden grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
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

      {/* ===================== MOBILE DRAWER (portaled) ===================== */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className={`xl:hidden fixed inset-0 z-[60] bg-navy/50 transition-opacity duration-300 ${
                drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Panel */}
            <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`xl:hidden fixed inset-y-0 right-0 z-[70] w-[86%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-4 border-b border-slate-100 shrink-0">
          <Link
            href="/"
            onClick={closeDrawer}
            className="flex items-center gap-2.5"
          >
            <img
              src="/assets/logo.png"
              alt="Dr. Kunal Sarkar Logo"
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          <ul className="flex flex-col text-[15px] font-500">
            <li>
              <Link
                href="/"
                onClick={closeDrawer}
                className={
                  isHome
                    ? "block py-2.5 text-teal font-600"
                    : "block py-2.5 text-navy/80"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeDrawer}
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
                onClick={closeDrawer}
                className={
                  isOpd
                    ? "block py-2.5 text-teal font-600"
                    : "block py-2.5 text-navy/80"
                }
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
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeDrawer}
                          className="py-2 text-[13.5px] text-navy/65"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeDrawer}
                    className={
                      active === link.key
                        ? "block py-2.5 text-teal font-600"
                        : "block py-2.5 text-navy/80"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

              <div className="shrink-0 border-t border-slate-100 p-4">
                <a
                  href={APPOINTMENT_WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary w-full justify-center text-[13px] py-2.5"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
}
