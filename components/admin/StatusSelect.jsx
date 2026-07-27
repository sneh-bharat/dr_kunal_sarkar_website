"use client";

import { useTransition } from "react";

const STATUSES = ["new", "contacted", "done"];

export default function StatusSelect({ id, status, updateAction }) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={pending}
      onChange={(e) => startTransition(() => updateAction(id, e.target.value))}
      className="rounded-md border border-slate-300 px-2 py-1 text-[12.5px] disabled:opacity-60"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
