import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import { blogPosts } from "@/data/blog-posts";

const BlogGallery = dynamic(() => import("@/components/BlogGallery"));

export const metadata = {
  title: "Read Our Blogs — Dr. Kunal Sarkar",
  description:
    "Heart health articles, patient stories, and public health updates from Dr. Kunal Sarkar.",
};

export default function ReadBlogPage() {
  return (
    <>
      <Header active="blog" />

      {/* ===================== HEADER ===================== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              From the Doctor&apos;s Desk
            </p>
            <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Read Our <span className="text-teal">Blogs</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Expert insights on heart health, prevention, and care — straight
              from Dr. Sarkar.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== BLOG CONTENT ===================== */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <BlogGallery posts={blogPosts} />
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
