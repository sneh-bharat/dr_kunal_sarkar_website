"use client";

import { useEffect, useState } from "react";

export default function LegalTOC({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-110px 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  function handleClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      {/* Mobile / tablet: collapsible "On this page" */}
      <details className="lg:hidden mb-8 rounded-xl border border-slate-200 bg-slate-50 group/toc">
        <summary className="flex cursor-pointer select-none list-none items-center justify-between px-4 py-3 font-700 text-navy text-[14px] [&::-webkit-details-marker]:hidden">
          On This Page
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform group-open/toc:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <ul className="px-4 pb-4 space-y-2 border-t border-slate-200 pt-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className="block py-1 text-[13.5px] text-ink hover:text-teal transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop: sticky left sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <p className="mb-4 font-700 text-[12px] tracking-[0.14em] uppercase text-ink/60">
            On This Page
          </p>
          <ul className="space-y-2.5 border-l border-slate-200">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  className={`-ml-px block border-l-2 pl-4 text-[13.5px] leading-snug transition-colors ${
                    activeId === s.id
                      ? "border-teal text-teal font-600"
                      : "border-transparent text-ink hover:text-navy"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
