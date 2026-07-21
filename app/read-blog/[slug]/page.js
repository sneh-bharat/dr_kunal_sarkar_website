import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import OpdIcon from "@/components/OpdIcon";
import { blogPosts } from "@/data/blog-posts";

function formatViews(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 >= 100 ? 1 : 0)}k`;
  return String(n);
}

function PostImage({ post, className }) {
  if (post.image) {
    return <img src={post.image} alt={post.title} className={className} />;
  }
  return (
    <div
      className={`${className} bg-gradient-to-br from-navy to-teal-dark grid place-items-center`}
    >
      <OpdIcon name="heart" className="h-10 w-10 text-white/25" />
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Dr. Kunal Sarkar`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fillIns =
    related.length < 3
      ? blogPosts
          .filter((p) => p.slug !== post.slug && !related.includes(p))
          .slice(0, 3 - related.length)
      : [];
  const relatedPosts = [...related, ...fillIns];

  const trending = [...blogPosts]
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <>
      <Header active="blog" />

      {/* ===================== HEADER / BREADCRUMB ===================== */}
      <section className="bg-teal-50 py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-[13px] text-ink mb-6">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/read-blog"
              className="hover:text-teal transition-colors"
            >
              Read Blog
            </Link>
            <span>/</span>
            <span className="text-navy font-600 truncate">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-teal px-3 py-1 text-[11px] font-700 text-white uppercase tracking-wide">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-ink">
              <OpdIcon name="calendar" className="h-3.5 w-3.5 text-teal/70" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-ink">
              <OpdIcon name="eye" className="h-3.5 w-3.5 text-teal/70" />
              {formatViews(post.views)} views
            </span>
          </div>

          <h1 className="font-heading font-700 text-navy text-[26px] sm:text-[36px] leading-tight tracking-tight max-w-3xl">
            {post.title}
          </h1>
        </div>

       
      </section>

      {/* ===================== ARTICLE + SIDEBAR ===================== */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* MAIN COLUMN */}
            <div className="lg:col-span-2">
              {post.image && (
                <div className="mb-10 rounded-3xl overflow-hidden border border-slate-300">
                  <PostImage
                    post={post}
                    className="w-full h-[260px] sm:h-[420px] object-cover"
                  />
                </div>
              )}

              <div className="space-y-5">
                {post.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-ink"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {post.sections && post.sections.length > 0 && (
                <div className="mt-8 space-y-6">
                  {post.sections.map((section, i) => (
                    <div key={i}>
                      <h2 className="font-heading font-700 text-navy text-[18px] sm:text-[20px] mb-2">
                        {section.heading}
                      </h2>
                      <p className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-ink">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {post.conclusion && (
                <p className="mt-8 text-[15.5px] sm:text-[16.5px] leading-relaxed text-ink">
                  {post.conclusion}
                </p>
              )}

              {post.keyPoints && post.keyPoints.length > 0 && (
                <div className="mt-8 rounded-2xl bg-teal-50 border border-teal/30 p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <OpdIcon name="info-circle" className="h-5 w-5 text-teal" />
                    <h3 className="font-heading font-700 text-navy text-[16px] uppercase tracking-wide">
                      Key Points
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {post.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[14.5px] text-ink leading-snug"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

           

              {/* ===================== COMMENTS ===================== */}
              <div className="mt-12 pt-10 border-t border-slate-200">
                <h3 className="font-heading font-700 text-navy text-[19px] sm:text-[22px] mb-6">
                  0 Comments
                </h3>
                <form className="rounded-2xl border border-slate-300 p-6 sm:p-7">
                  <p className="text-[14px] text-ink mb-5">
                    Leave a comment — your email address will not be published.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] text-navy placeholder:text-ink/50 focus:outline-none focus:border-teal"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] text-navy placeholder:text-ink/50 focus:outline-none focus:border-teal"
                    />
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Write your comment..."
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] text-navy placeholder:text-ink/50 focus:outline-none focus:border-teal mb-5"
                  ></textarea>
                  <button
                    type="submit"
                    className="btn-primary px-6 py-2.5 text-[14px]"
                  >
                    Post Comment
                  </button>
                </form>
              </div>

               {/* ===================== RELATED POSTS ===================== */}
        {relatedPosts.length > 0 && (
          <section className="bg-slate-50 py-14 sm:py-16">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-700 text-navy text-[22px] sm:text-[26px] leading-tight tracking-tight mb-8">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/read-blog/${rp.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-300 hover:border-teal/40 hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <PostImage
                        post={rp}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-700 text-navy uppercase tracking-wide">
                        {rp.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-[12px] text-ink mb-2">
                        <span className="flex items-center gap-1.5">
                          <OpdIcon
                            name="calendar"
                            className="h-3.5 w-3.5 text-teal/70"
                          />
                          {rp.date}
                        </span>
                      </div>
                      <h3 className="font-heading font-700 text-navy text-[15.5px] leading-snug line-clamp-2 group-hover:text-teal transition-colors">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
            </div>


            {/* ===================== SIDEBAR ===================== */}
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
                  {trending.map((p, i) => (
                    <li key={p.slug}>
                      <Link
                        href={`/read-blog/${p.slug}`}
                        className="group flex items-center gap-3"
                      >
                        <span className="shrink-0 grid h-6 w-6 place-items-center rounded-full bg-teal-50 text-teal font-700 text-[12px]">
                          {i + 1}
                        </span>
                        <div className="relative shrink-0 h-14 w-14 rounded-lg overflow-hidden">
                          <PostImage
                            post={p}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[13.5px] font-600 text-navy leading-snug line-clamp-2 group-hover:text-teal transition-colors">
                            {p.title}
                          </h4>
                          <div className="mt-1 flex items-center gap-1.5 text-[11.5px] text-ink">
                            <OpdIcon name="eye" className="h-3 w-3" />
                            {formatViews(p.views)} views
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Now banner */}
              <Link
                href="/appointment"
                className="block overflow-hidden rounded-2xl border border-slate-300 hover:shadow-xl transition-all duration-500"
              >
                <img
                  src="/assets/promos/promo_new.png"
                  alt="Get expert cardiac care with Dr. Kunal Sarkar"
                  className="w-full h-auto"
                />
              </Link>

              {/* Featured Video */}
              <div className="rounded-3xl border border-slate-300 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <i className="fab fa-youtube text-teal text-[18px]"></i>
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
                href="https://wa.me/916290350200"
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
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
