import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import InnovationsSection from "@/components/home/InnovationsSection";
import AppointmentSection from "@/components/home/AppointmentSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";
import DrVoiceSection from "@/components/home/DrVoiceSection";
import MobileBottomNav from "@/components/home/MobileBottomNav";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { serializeDoc } from "@/lib/serialize";

// The homepage's "Latest Blogs" preview reads from MongoDB (admin-managed
// content), so it must not be statically cached.
export const dynamic = "force-dynamic";

async function getLatestPosts() {
  await connectToDatabase();
  const posts = await BlogPost.find({ published: true })
    .sort({ publishedAt: -1 })
    .limit(3)
    .lean();
  return serializeDoc(posts);
}

export default async function HomePage() {
  const latestPosts = await getLatestPosts();

  return (
    <>
      {/* Preload the hero background (LCP element on desktop) — it's a CSS
          background-image, so Next.js can't auto-detect/preload it the way
          it does for <Image priority>. */}
      <link
        rel="preload"
        as="image"
        href="/assets/hero-banner.webp"
        media="(min-width: 1024px)"
      />
      <Header active="home" />
      <HomeHero />
      <HomeAbout />
      <MarqueeStrip />
      <ExpertiseSection />
      <InnovationsSection />
      <AppointmentSection />
      <GoogleReviewsSection />
      <LatestBlogSection posts={latestPosts} />
      <DrVoiceSection />
      <Footer />
      <MobileBottomNav />
      <SiteScripts />
    </>
  );
}
