function MarqueeSet({ ariaHidden }) {
  return (
    <div className="marquee-set" aria-hidden={ariaHidden || undefined}>
      <span className="marquee-item">
        <span className="marquee-dot"></span>
        Chamber at Kolkata Heart Foundation &nbsp;&bull;&nbsp; Tue 8:00 pm
        &nbsp;|&nbsp; Thu 10:00 am &nbsp;|&nbsp; Fri 8:00 pm
      </span>
      <span className="marquee-sep">✦</span>
      <span className="marquee-item">
        <span className="marquee-dot"></span>
        For Appointments &nbsp;&bull;&nbsp; +91 98310 30908
      </span>
      <span className="marquee-sep">✦</span>
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeSet />
        <MarqueeSet ariaHidden />
      </div>
    </div>
  );
}
