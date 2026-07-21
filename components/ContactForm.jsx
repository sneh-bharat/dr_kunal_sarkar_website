"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      e.target.reset();
    }, 1400);
  }

  return (
    <form onSubmit={handleSubmit} className="ct-form space-y-4">
      {/* Name */}
      <div className="ct-field-wrap">
        <span className="ct-field-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Your Name *"
          required
          className="ct-input"
        />
      </div>

      {/* Email + Mobile */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="ct-field-wrap">
          <span className="ct-field-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="Your E-Mail *"
            required
            className="ct-input"
          />
        </div>
        <div className="ct-field-wrap">
          <span className="ct-field-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
          </span>
          <input
            type="tel"
            placeholder="Mobile *"
            required
            className="ct-input"
          />
        </div>
      </div>

      {/* Message */}
      <div className="ct-field-wrap !items-start">
        <span className="ct-field-icon mt-[14px]" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <textarea
          placeholder="Message *"
          rows={5}
          required
          className="ct-input resize-none"
        />
      </div>

      {/* Submit */}
      <div className="pt-1">
        {sent ? (
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-green-50 border border-green-200 text-green-700 font-600 text-[14px]">
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m8.5 12 2.4 2.4 4.6-4.8" />
            </svg>
            Message sent! We&apos;ll be in touch soon.
          </div>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="btn-primary px-8 py-3.5 text-[14.5px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    strokeLinecap="round"
                  />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Submit Form
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
