import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

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
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-sans text-navy bg-white antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
