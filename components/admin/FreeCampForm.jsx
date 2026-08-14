"use client";

import { useActionState } from "react";

const initialState = { ok: false, error: null };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-teal";
const labelClass = "block text-[13px] font-600 text-navy mb-1.5";

function toDateInputValue(value) {
  if (!value) return "";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

export default function FreeCampForm({ action, camp }) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-6 max-w-2xl">
      {state.error && <p className="text-[13.5px] text-red-600">{state.error}</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Camp Name</label>
          <input
            name="name"
            required
            defaultValue={camp?.name}
            placeholder="Upcoming OPD / Free Cardiac Camp"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Badge (optional)</label>
          <input
            name="badge"
            defaultValue={camp?.badge}
            placeholder="Cardiac OPD"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Venue</label>
        <input
          name="venue"
          required
          defaultValue={camp?.venue}
          placeholder="Behampore, Murshidabad"
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Date</label>
          <input
            type="date"
            name="date"
            required
            defaultValue={toDateInputValue(camp?.date)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Contact Phone</label>
          <input
            name="phone"
            required
            defaultValue={camp?.phone}
            placeholder="98310 00191"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Note (optional)</label>
        <input
          name="note"
          defaultValue={camp?.note}
          placeholder="Please call"
          className={inputClass}
        />
      </div>

      <label className="flex items-center gap-2 text-[14px] text-navy">
        <input
          type="checkbox"
          name="published"
          value="true"
          defaultChecked={camp?.published ?? true}
        />
        Published (visible on the public site)
      </label>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary px-8 py-2.5 text-[14px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? "Saving…" : camp ? "Save Changes" : "Create Camp"}
      </button>
    </form>
  );
}
