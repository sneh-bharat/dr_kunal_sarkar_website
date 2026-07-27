"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { submitAppointment } from "@/app/actions/lead-actions";

const initialState = { ok: false, error: null };

export default function AppointmentForm() {
  const [state, formAction, pending] = useActionState(submitAppointment, initialState);
  const formRef = useRef(null);

  useEffect(() => {
    if (state === initialState) return;
    if (state.ok) {
      toast.success(
        "Thank you — your appointment request has been received. We'll reach out shortly to confirm.",
      );
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Your Name */}
      <div className="relative">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name*"
          className="appointment-input w-full"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Your E-Mail */}
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder="Your E-Mail*"
            className="appointment-input w-full"
          />
        </div>
        {/* Preferred Date */}
        <div className="relative">
          <input
            type="text"
            name="preferredDate"
            required
            placeholder="Preferred Date*"
            onFocus={(e) => (e.target.type = "date")}
            className="appointment-input w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Mobile */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            required
            placeholder="Mobile *"
            className="appointment-input w-full"
          />
        </div>
        {/* Gender */}
        <div className="relative">
          <select
            name="gender"
            required
            className="appointment-input w-full appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Gender *
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Age */}
        <div className="relative">
          <input
            type="number"
            name="age"
            required
            placeholder="Age *"
            className="appointment-input w-full"
          />
        </div>
        {/* District */}
        <div className="relative">
          <input
            type="text"
            name="district"
            required
            placeholder="District*"
            className="appointment-input w-full"
          />
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          placeholder="Type Your Message"
          rows="4"
          className="appointment-input w-full resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full sm:w-auto px-12 py-2.5 text-[15px] mt-2 shadow-lg shadow-teal/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? "Submitting…" : "Submit Request"}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
