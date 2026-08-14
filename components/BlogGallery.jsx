"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import OpdIcon from "./OpdIcon";

function formatViews(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 >= 100 ? 1 : 0)}k`;
  return String(n);
}

function PostImage({ post, className }) {
  if (post.image?.url) {
    return <img src={post.image.url} alt={post.title} className={className} />;
  }
  return (
    <div
      className={`${className} bg-gradient-to-br from-navy to-teal-dark grid place-items-center`}
    >
      <OpdIcon name="heart" className="h-10 w-10 text-white/25" />
    </div>
  );
}

export default function BlogGallery({ posts }) {
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const featured = posts[0];
  const rest = posts.slice(1);

  const trending = useMemo(
    () => [...posts].sort((a, b) => b.views - a.views).slice(0, 5),
    [posts],
  );

  const filtered =
    activeCategory === "All"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
      {/* ===================== MAIN COLUMN ===================== */}
      <div className="lg:col-span-2">
        {/* Featured post */}
        <Link
          href={`/read-blog/${featured.slug}`}
          className="group relative block overflow-hidden rounded-3xl border border-slate-300 hover:shadow-2xl transition-all duration-500 mb-10"
        >
          <PostImage
            post={featured}
            className="w-full h-[320px] sm:h-[420px] object-fill transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <span className="rounded-full bg-teal px-3 py-1 text-[11px] font-700 text-white uppercase tracking-wide">
              Featured
            </span>
            <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
              {featured.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h2 className="font-heading font-700 text-white text-[22px] sm:text-[30px] leading-snug mb-3">
              {featured.title}
            </h2>
            <p className="hidden sm:block text-white/75 text-[14.5px] leading-relaxed max-w-2xl mb-3">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-[12.5px] text-white/70">
              <span className="flex items-center gap-1.5">
                <OpdIcon name="calendar" className="h-3.5 w-3.5" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <OpdIcon name="eye" className="h-3.5 w-3.5" />
                {formatViews(featured.views)}
              </span>
            </div>
          </div>
        </Link>

        {/* Category filter */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(9);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-600 transition-colors ${
                activeCategory === cat
                  ? "bg-teal text-white"
                  : "bg-slate-100 text-navy/70 hover:bg-teal-50 hover:text-teal"
              }`}
            >
              {cat !== "All" && <OpdIcon name="tag" className="h-3.5 w-3.5" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
          {visible.map((post) => (
            <Link
              key={post.title}
              href={`/read-blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <PostImage
                  post={post}
                  className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 text-[12px] text-ink mb-2">
                  <span className="flex items-center gap-1.5">
                    <OpdIcon
                      name="calendar"
                      className="h-3.5 w-3.5 text-teal/70"
                    />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <OpdIcon name="eye" className="h-3.5 w-3.5 text-teal/70" />
                    {formatViews(post.views)}
                  </span>
                </div>
                <h3 className="font-heading font-700 text-navy text-[16.5px] leading-snug mb-2 line-clamp-2 group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13.5px] text-ink leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-600 text-teal">
                  Read More
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 9)}
              className="btn-outline px-7 py-2.5 text-[14px]"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>

      {/* ===================== SIDEBAR (full right column) ===================== */}
      <div className="flex flex-col gap-6">
        {/* Trending Now */}
        <div className="rounded-3xl border border-slate-300 p-6">
          <div className="flex items-center gap-2 mb-5">
            <OpdIcon name="flame" className="h-4.5 w-4.5 text-teal" />
            <h3 className="font-heading font-700 text-navy text-[15px] uppercase tracking-wide">
              Trending Now
            </h3>
          </div>
          <ul className="space-y-4">
            {trending.map((post, i) => (
              <li key={post.title}>
                <Link
                  href={`/read-blog/${post.slug}`}
                  className="group flex items-center gap-3"
                >
                  <span className="shrink-0 grid h-6 w-6 place-items-center rounded-full bg-teal-50 text-teal font-700 text-[12px]">
                    {i + 1}
                  </span>
                  <div className="relative shrink-0 h-14 w-14 rounded-lg overflow-hidden">
                    <PostImage
                      post={post}
                      className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[13.5px] font-600 text-navy leading-snug line-clamp-2 group-hover:text-teal transition-colors">
                      {post.title}
                    </h4>
                    <div className="mt-1 flex items-center gap-1.5 text-[11.5px] text-ink">
                      <OpdIcon name="eye" className="h-3 w-3" />
                      {formatViews(post.views)} views
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now banner */}
        <a
          href="https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
          target="_blank"
          rel="noopener"
          className="block overflow-hidden rounded-2xl border border-slate-300 hover:shadow-xl transition-all duration-500"
        >
          <img
            src="/assets/promos/promo_new.png"
            alt="Get expert cardiac care with Dr. Kunal Sarkar"
            className="w-full h-auto"
          />
        </a>

        {/* Featured Video */}
        <div className="rounded-3xl border border-slate-300 p-6">
          <div className="flex items-center gap-2 mb-5">
            <img
              src="/assets/socials/youtube-color.svg"
              alt=""
              className="h-[18px] w-[18px]"
            />
            <h3 className="font-heading font-700 text-navy text-[15px] uppercase tracking-wide">
              Featured Video
            </h3>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-navy">
            <iframe
              src="https://www.youtube.com/embed/JK34QPUXwIE"
              title="Dr. Kunal Sarkar — Featured Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Kolkata Heart Foundation banner */}
        <Link
          href="/about"
          className="block overflow-hidden rounded-2xl border border-slate-300 hover:shadow-xl transition-all duration-500"
        >
          <img
            src="/assets/promos/promo-kolkata-heart.png"
            alt="Kolkata Heart Foundation"
            className="w-full h-auto"
          />
        </Link>

      

        {/* WhatsApp channel banner */}
        <Link
          href="https://wa.me/9831030908?text=Hi%20Dr.%20Kunal%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
          target="_blank"
          rel="noopener"
          className="block overflow-hidden rounded-2xl border border-slate-300 hover:shadow-xl transition-all duration-500"
        >
          <img
            src="/assets/promos/whatsapp-channel.jpg"
            alt="Join Dr. Kunal Sarkar's WhatsApp channel for daily heart health tips"
            className="w-full h-auto"
          />
        </Link>
      </div>
    </div>
  );
}
