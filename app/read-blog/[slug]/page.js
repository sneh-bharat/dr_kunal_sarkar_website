import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import OpdIcon from "@/components/OpdIcon";
import CommentForm from "@/components/CommentForm";
import ViewTracker from "@/components/ViewTracker";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import Comment from "@/models/Comment";
import { serializeDoc } from "@/lib/serialize";

// Posts/comments change via admin edits and comment approval, not on every
// request — cache the rendered page for up to 60s instead of re-querying
// every visit (force-dynamic was making blog navigation feel slow). Admin
// actions and comment approval already call revalidatePath() to bust this
// cache immediately when content actually changes. View counting is handled
// separately by <ViewTracker>, client-side, so it still fires per real
// visitor rather than once per cache window.
export const revalidate = 60;

function formatViews(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 >= 100 ? 1 : 0)}k`;
  return String(n);
}

function formatCommentDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  await connectToDatabase();
  const post = await BlogPost.findOne({ slug, published: true }).lean();
  if (!post) return {};
  return {
    title: `${post.title} — Dr. Kunal Sarkar`,
    description: post.excerpt,
  };
}

async function getPageData(slug) {
  await connectToDatabase();

  const post = await BlogPost.findOne({ slug, published: true }).lean();
  if (!post) return null;

  const [related, fillerCandidates, trending, comments] = await Promise.all([
    BlogPost.find({ slug: { $ne: slug }, category: post.category, published: true })
      .sort({ publishedAt: -1 })
      .limit(3)
      .lean(),
    BlogPost.find({ slug: { $ne: slug }, category: { $ne: post.category }, published: true })
      .sort({ publishedAt: -1 })
      .limit(3)
      .lean(),
    BlogPost.find({ slug: { $ne: slug }, published: true })
      .sort({ views: -1 })
      .limit(5)
      .lean(),
    Comment.find({ postSlug: slug, approved: true }).sort({ createdAt: -1 }).lean(),
  ]);

  const relatedPosts = [...related, ...fillerCandidates].slice(0, 3);

  return serializeDoc({ post, relatedPosts, trending, comments });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const data = await getPageData(slug);
  if (!data) notFound();

  const { post, relatedPosts, trending, comments } = data;

  return (
    <>
      <ViewTracker slug={post.slug} />
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
              {post.image?.url && (
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
                  {comments.length} Comment{comments.length === 1 ? "" : "s"}
                </h3>

                {comments.length > 0 && (
                  <ul className="space-y-5 mb-8">
                    {comments.map((c) => (
                      <li key={c._id} className="rounded-2xl border border-slate-200 p-5">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="font-700 text-navy text-[14.5px]">{c.name}</span>
                          <span className="text-[12.5px] text-ink">
                            {formatCommentDate(c.createdAt)}
                          </span>
                        </div>
                        <p className="text-[14px] text-ink leading-relaxed">{c.message}</p>
                      </li>
                    ))}
                  </ul>
                )}

                <CommentForm slug={post.slug} />
              </div>

              {/* ===================== RELATED POSTS ===================== */}
              {relatedPosts.length > 0 && (
                <section className="bg-slate-50 py-14 sm:py-16 mt-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
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
                            className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
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
                            className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
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
              <a
                href="https://wa.me/9831030908?text=Hi%20Dr.%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
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
                  <img src="/assets/socials/youtube-color.svg" alt="" className="h-[18px] w-[18px]" />
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
                href="https://wa.me/9831030908?text=Hi%20Dr.%20Sarkar%2C%20I%27d%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots."
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
