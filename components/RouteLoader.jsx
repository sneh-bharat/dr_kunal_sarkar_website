"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

function isNavigableInternalLink(anchor) {
  if (!anchor || anchor.target === "_blank") return false;
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }
  if (url.origin !== window.location.origin) return false;

  return url.pathname !== window.location.pathname;
}

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const lastPathname = useRef(pathname);

  // Hide as soon as the pathname actually changes — the real signal that the
  // new route has finished rendering, instead of a made-up duration.
  useEffect(() => {
    if (pathname !== lastPathname.current) {
      lastPathname.current = pathname;
      setVisible(false);
    }
  }, [pathname]);

  // Show the instant a real internal navigation starts.
  useEffect(() => {
    function handleClick(e) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest("a");
      if (isNavigableInternalLink(anchor)) {
        setVisible(true);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!visible) return null;

  return <Loader />;
}
