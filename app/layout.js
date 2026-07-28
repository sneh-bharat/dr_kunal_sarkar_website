import "./globals.css";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import RouteLoader from "@/components/RouteLoader";
import DeferredStyles from "@/components/DeferredStyles";

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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* General Sans (navbar font) — loaded non-blocking */}
        <DeferredStyles />
      </head>
      <body className="font-sans text-navy bg-white antialiased">
        <ScrollToTop />
        <RouteLoader />
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
