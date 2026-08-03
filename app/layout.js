import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import RouteLoader from "@/components/RouteLoader";
import BackToTop from "@/components/BackToTop";
import DeferredStyles from "@/components/DeferredStyles";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "optional",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "optional",
});

export const metadata = {
  title: "Dr. Kunal Sarkar — Cardiothoracic & Vascular Surgeon",
  description:
    "Dr. Kunal Sarkar is a leading Cardiothoracic & Vascular Surgeon with 25+ years of experience in complex heart and vascular surgeries with excellent patient outcomes.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfairDisplay.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* General Sans (navbar font) — loaded non-blocking */}
        <DeferredStyles />
      </head>
      <body className="font-sans text-navy bg-white antialiased">
        <ScrollToTop />
        {/* <RouteLoader /> */}
        {children}
        <BackToTop />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
