"use client";

import { useEffect, useRef } from "react";
import { incrementViews } from "@/app/actions/blog-actions";

/** Fires the view-count increment once per real page visit, client-side —
 * needed because the page itself is now ISR-cached (see revalidate export
 * in the page file), so re-running this on the server would only count
 * once per cache window instead of once per visitor. */
export default function ViewTracker({ slug }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    incrementViews(slug).catch(() => {});
  }, [slug]);

  return null;
}
