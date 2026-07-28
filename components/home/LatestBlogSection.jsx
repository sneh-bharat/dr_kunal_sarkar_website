import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User } from "lucide-react";
import OpdIcon from "@/components/OpdIcon";

function estimateReadTime(post) {
  const words = [...(post.content || []), post.excerpt || ""].join(" ").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function BlogImage({ post }) {
  if (post.image?.url) {
    return (
      <Image
        src={post.image.url}
        alt={post.title}
        fill
        // sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-fill"
      />
    );
  }
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-navy to-teal-dark grid place-items-center">
      <OpdIcon name="heart" className="h-10 w-10 text-white/25" />
    </div>
  );
}

export default function LatestBlogSection({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="latest-blog" className="relative py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-teal font-600 text-[13px] tracking-[0.2em] uppercase mb-3">
              From the Doctor&apos;s Desk
            </p>
            <h2 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Read Our <span className="text-teal">Latest Blogs</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">
              Expert insights on heart health, prevention, and care — straight
              from Dr. Sarkar.
            </p>
          </div>
          <Link href="/read-blog" className="self-start md:self-auto btn-outline px-6 py-2.5 text-[14px]">
            View All Blogs
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
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {posts.map((post) => (
            <Link href={`/read-blog/${post.slug}`} className="blog-card group" key={post.slug}>
              <div className="blog-media">
                <BlogImage post={post} />
                <span className="blog-cat">{post.category}</span>
                <span className="blog-reading">
                  <Clock className="h-3.5 w-3.5" /> {estimateReadTime(post)}
                </span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-teal/70" /> {post.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-teal/70" /> Dr. K. Sarkar
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-link">
                  Read More
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
