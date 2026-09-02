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
import UpcomingCampSection from "@/components/home/UpcomingCampSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";
import DrVoiceSection from "@/components/home/DrVoiceSection";
import MobileBottomNav from "@/components/home/MobileBottomNav";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import FreeCamp from "@/models/FreeCamp";
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

// The note field stores the timing as its first sentence (e.g. "From 3:00
// PM. Bring old reports if you have them.") — split it out so it can be
// shown as its own field instead of buried in the note text.
function splitTimeFromNote(note) {
  const match = /^(.*?[AP]M[^.]*)\.\s*(.*)$/i.exec(note || "");
  if (!match) return { time: "", note: note || "" };
  return { time: match[1].trim(), note: match[2].trim() };
}

async function getUpcomingFreeCamps() {
  await connectToDatabase();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const camps = await FreeCamp.find({
    published: true,
    date: { $gte: startOfToday },
  })
    .sort({ date: 1 })
    .lean();

  return serializeDoc(camps).map((camp) => {
    const date = new Date(camp.date);
    const { time, note } = splitTimeFromNote(camp.note);
    return {
      ...camp,
      day: date.toLocaleDateString("en-IN", { day: "2-digit" }),
      month: date.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
      weekday: date.toLocaleDateString("en-IN", { weekday: "long" }),
      time,
      note,
      phones: camp.phone.split("/").map((p) => p.trim()),
    };
  });
}

export default async function HomePage() {
  const [latestPosts, upcomingCamps] = await Promise.all([
    getLatestPosts(),
    getUpcomingFreeCamps(),
  ]);

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
        fetchPriority="high"
      />
      <Header active="home" />

      <main>
      <HomeHero />
      <HomeAbout />
      <MarqueeStrip />
      <ExpertiseSection />
      <InnovationsSection />
      <AppointmentSection />
      <GoogleReviewsSection />
      <UpcomingCampSection camps={upcomingCamps} />
      <LatestBlogSection posts={latestPosts} />
      <DrVoiceSection />
      </main>

      <Footer />
      <MobileBottomNav />
      <SiteScripts />
    </>
  );
}
