import fs from "fs";
import path from "path";
import nextDynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

const HealthAwarenessGallery = nextDynamic(() => import("@/components/HealthAwarenessGallery"));

export const metadata = {
  title: "Health Awareness Campaigns — Dr. Kunal Sarkar",
  description:
    "Public health awareness campaigns and community outreach led by Dr. Kunal Sarkar.",
};

// Scans the filesystem for images on every request, so dropping new photos
// into the campaign folders shows up without a rebuild.
export const dynamic = "force-dynamic";

const IMAGE_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

function findImages(slug) {
  const dir = path.join(process.cwd(), "public", "assets", "gallery", "health-awareness", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/assets/gallery/health-awareness/${slug}/${file}`);
  } catch {
    return [];
  }
}

const campaigns = [
  {
    id: "campaign-1",
    title: "Health Awareness Campaign",
    date: "05 Apr 2025",
    images: findImages("campaign-1"),
    description:
      "A community outreach drive raising awareness on early detection and prevention of cardiac disease, led by Dr. Kunal Sarkar.",
  },
  {
    id: "campaign-2",
    title: "Health Awareness Campaign",
    date: "09 Apr 2025",
    images: findImages("campaign-2"),
    description:
      "Continuing efforts to spread heart-health awareness and encourage regular cardiac screening across the community.",
  },
];

export default function HealthAwarenessCampaignsPage() {
  return (
    <>
      <Header active="gallery" />

      {/* ===================== HEADER ===================== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center reveal reveal-up">
            <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
              Gallery
            </p>
            <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
              Health Awareness <span className="text-teal">Campaigns</span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Public health drives and community outreach programs led by Dr.
              Kunal Sarkar. Click any photo to view it in full.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CAMPAIGNS LIST ===================== */}
      <section className="relative bg-white py-6  overflow-hidden">
      

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <HealthAwarenessGallery campaigns={campaigns} />
        </div>
      </section>

      <Footer />

      <SiteScripts />
    </>
  );
}
