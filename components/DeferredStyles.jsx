"use client";

// Loads the General Sans webfont (navbar font) without blocking first
// render: the browser fetches it via <link rel="preload" as="style">
// (a non-render-blocking request), then this swaps it to a real
// stylesheet once it's loaded. <noscript> covers browsers with JS off.
function swapToStylesheet(e) {
  e.target.onload = null;
  e.target.rel = "stylesheet";
}

const GENERAL_SANS_HREF =
  "https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap";

export default function DeferredStyles() {
  return (
    <>
      <link rel="preload" as="style" href={GENERAL_SANS_HREF} onLoad={swapToStylesheet} />
      <noscript>
        <link rel="stylesheet" href={GENERAL_SANS_HREF} />
      </noscript>
    </>
  );
}
