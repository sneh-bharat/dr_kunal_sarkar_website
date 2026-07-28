import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User } from "lucide-react";

const blogs = [
  {
    img: "blog1.png",
    alt: "Golden Minutes of Heart Attack",
    readTime: "4 min read",
    date: "15 June 2026",
    title: "হার্ট অ্যাটাকের Golden Minutes",
    excerpt:
      "The first 10 minutes after a heart attack are critical — what to do, and what to avoid, to save a life.",
  },
  {
    img: "blog2.png",
    alt: "Morning Heart Attack Risk",
    readTime: "5 min read",
    date: "8 June 2026",
    title: "সকালেই বাড়ে হার্ট অ্যাটাকের ঝুঁকি!",
    excerpt:
      "Why heart attacks peak in the morning — the small mistakes after waking up that quietly raise your risk.",
  },
  {
    img: "blog3.png",
    alt: "Silent Heart Attack: How to Recognise",
    readTime: "4 min read",
    date: "1 June 2026",
    title: "সাইলেন্ট হার্ট অ্যাটাক: বুঝবেন কীভাবে?",
    excerpt:
      "Silent heart attacks often go unnoticed. Learn the subtle warning signs your body sends — long before the pain.",
  },
];

export default function LatestBlogSection() {
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
          {blogs.map((blog) => (
            <Link href="/read-blog" className="blog-card group" key={blog.title}>
              <div className="blog-media">
                <Image
                  src={`/assets/blogs/${blog.img}`}
                  alt={blog.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="blog-cat">Health</span>
                <span className="blog-reading">
                  <Clock className="h-3.5 w-3.5" /> {blog.readTime}
                </span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-teal/70" /> {blog.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-teal/70" /> Dr. K. Sarkar
                  </span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
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
