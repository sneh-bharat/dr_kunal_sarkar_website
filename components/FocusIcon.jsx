const icons = {
  "heart-pulse": (
    <path d="M2.5 12h3.5l2-5 4 10 2.5-8 1.5 3h5.5" />
  ),
  bypass: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M6 8.2V11a4 4 0 0 0 4 4h1a4 4 0 0 1 4 4v-.8" />
    </>
  ),
  microscope: (
    <>
      <path d="M9 4v3a3 3 0 0 0 0 6" />
      <path d="M9 13l6 6" />
      <circle cx="16.5" cy="16.5" r="3.2" />
      <path d="M5 21h9" />
    </>
  ),
  "valve-repair": (
    <>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="M7 7l2.2 2.2M17 7l-2.2 2.2M7 17l2.2-2.2M17 17l-2.2-2.2" />
    </>
  ),
  lungs: (
    <path d="M12 3v7M12 10c-1 1.5-1.5 2.5-1.5 4.5 0 3-1.5 6.5-3.75 6.5S3 18 3 14.5c0-3 1.5-4 3.75-5L9 8.3M12 10c1 1.5 1.5 2.5 1.5 4.5 0 3 1.5 6.5 3.75 6.5S21 18 21 14.5c0-3-1.5-4-3.75-5L15 8.3" />
  ),
  "lvad-ecmo": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
    </>
  ),
  "redo-surgery": (
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" />
  ),
  "aortic-surgery": (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 15v1.5a5 5 0 0 0 10 0V14" />
      <circle cx="20" cy="10.5" r="2" />
    </>
  ),
};

export default function FocusIcon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}
