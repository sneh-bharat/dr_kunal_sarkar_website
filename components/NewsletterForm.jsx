"use client";

export default function NewsletterForm() {
  return (
    <form action="#" className="mt-7 max-w-md" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex items-center border-b border-white/25 focus-within:border-teal transition-colors">
        <input
          type="email"
          required
          placeholder="Enter your email to subscribe and stay informed"
          className="w-full bg-transparent border-0 py-3 pr-12 text-[14.5px] text-white placeholder-white/45 focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute right-0 grid h-10 w-10 place-items-center text-teal hover:text-white hover:bg-teal rounded-full transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
