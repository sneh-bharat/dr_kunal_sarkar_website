export default function Loader({ fullScreen = true, label }) {
  const content = (
    <div className="loader-box z-50">
      <video
        className="loader-video"
        src="/assets/loader/loader.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      {label && <span className="loader-label">{label}</span>}
    </div>
  );

  if (!fullScreen) {
    return (
      <div className="loader-inline" role="status" aria-live="polite">
        {content}
      </div>
    );
  }

  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      {content}
    </div>
  );
}
