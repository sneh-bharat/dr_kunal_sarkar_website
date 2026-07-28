function MarqueeSet({ ariaHidden }) {
  return (
    <div className="marquee-set" aria-hidden={ariaHidden || undefined}>
      <span className="marquee-item">
        <span className="marquee-dot"></span>
        Barasat OPD &mdash; 06.09.25 (Sat) &nbsp;12:00 pm &nbsp;&bull;&nbsp; 70444
        99839 &nbsp;|&nbsp; 90070 00505
      </span>
      <span className="marquee-sep">✦</span>
      <span className="marquee-item">
        <span className="marquee-dot"></span>
        Bolpur OPD &mdash; 07.09.25 (Sun) &nbsp;02:00 pm &nbsp;&bull;&nbsp; 70444
        51426
      </span>
      <span className="marquee-sep">✦</span>
      <span className="marquee-item">
        <span className="marquee-dot"></span>
        Calcutta Medical Research Institute (CMRI) &nbsp;&bull;&nbsp; Mon – Sat
        &nbsp;10:00 am – 01:00 pm
      </span>
      <span className="marquee-sep">✦</span>
      <span className="marquee-item">
        <span className="marquee-dot"></span>
        For Appointments &nbsp;&bull;&nbsp; +91 98310 30908 &nbsp;|&nbsp;
        contactdrkunalsarkar@gmail.com
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
