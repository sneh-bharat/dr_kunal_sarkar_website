import Link from "next/link";
import { logoutAdmin } from "@/app/actions/auth-actions";
import OpdIcon from "@/components/OpdIcon";

const navLinks = [
  { href: "/admin/blogs", label: "Blog Posts", icon: "newspaper" },
  { href: "/admin/camps", label: "Free Camps", icon: "calendar" },
  { href: "/admin/appointments", label: "Appointments", icon: "calendar" },
  { href: "/admin/contact", label: "Contact", icon: "mail" },
  { href: "/admin/comments", label: "Comments", icon: "message" },
];

export const metadata = {
  title: "Admin — Dr. Kunal Sarkar",
  robots: { index: false, follow: false },
};

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* ===================== SIDEBAR (logo + nav) ===================== */}
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-navy text-white h-screen sticky top-0">
        <Link
          href="/admin/blogs"
          className="shrink-0 h-20 flex items-center gap-3 px-6 border-b border-white/10"
        >
          <img src="/assets/logo-footer.png" alt="Dr. Kunal Sarkar" className="h-12 w-auto" />
        </Link>

        <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-600 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <OpdIcon
                name={link.icon}
                className="h-4.5 w-4.5 text-white/50 group-hover:text-teal transition-colors"
              />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 p-3 border-t border-white/10">
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-600 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <OpdIcon name="logout" className="h-4.5 w-4.5 text-white/50" />
              Log Out
            </button>
          </form>
        </div>
      </aside>

      {/* ===================== MAIN ===================== */}
      <div className="flex-1 min-w-0">
        {/* Mobile top bar (sidebar is desktop-only, so the logo lives here too on mobile) */}
        <header className="md:hidden sticky top-0 z-10 bg-navy text-white h-16 flex items-center justify-between px-4">
          <span className="flex items-center gap-2.5">
            <img src="/assets/logo-footer.png" alt="Dr. Kunal Sarkar" className="h-8 w-auto" />
          </span>
          <form action={logoutAdmin}>
            <button type="submit" className="text-[13px] font-600 text-white/80">
              Log Out
            </button>
          </form>
        </header>
        <nav className="md:hidden flex items-center gap-1 overflow-x-auto bg-white border-b border-slate-200 px-3 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-[12.5px] font-600 text-navy/70 hover:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
