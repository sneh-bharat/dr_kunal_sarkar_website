import nextDynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { serializeDoc } from "@/lib/serialize";

const BlogGallery = nextDynamic(() => import("@/components/BlogGallery"));

// Posts live in MongoDB and change via admin edits, not on every request —
// cache the rendered page for up to 60s instead of re-querying every visit
// (force-dynamic was making "View All Blogs" feel noticeably slow). Admin
// actions already call revalidatePath() to bust this cache immediately
// when a post is created/edited/deleted.
export const revalidate = 60;

export const metadata = {
  title: "Read Our Blogs — Dr. Kunal Sarkar",
  description:
    "Heart health articles, patient stories, and public health updates from Dr. Kunal Sarkar.",
};

async function getPosts() {
  await connectToDatabase();
  const posts = await BlogPost.find({ published: true })
    .sort({ publishedAt: -1 })
    .lean();
  return serializeDoc(posts);
}

export default async function ReadBlogPage() {
  const posts = await getPosts();

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
          <BlogGallery posts={posts} />
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
