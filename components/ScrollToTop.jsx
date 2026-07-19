"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("[ScrollToTop] pathname changed ->", pathname, "scrollY before:", window.scrollY);
    window.scrollTo(0, 0);
    console.log("[ScrollToTop] scrollY after:", window.scrollY);
  }, [pathname]);

  return null;
}
