"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return <Loader />;
}
