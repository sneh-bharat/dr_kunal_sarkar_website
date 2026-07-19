export default function VoiceModal() {
  return (
    <div id="voice-modal" className="voice-modal" hidden>
      <button type="button" className="voice-modal-close" aria-label="Close video">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <div className="voice-modal-frame">
        <iframe
          id="voice-modal-iframe"
          title="Dr. Sarkar video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
