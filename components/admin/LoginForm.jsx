"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/app/actions/auth-actions";

const initialState = { ok: false, error: null };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <p className="text-[13.5px] text-red-600">{state.error}</p>
      )}
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] focus:outline-none focus:border-teal"
      />
      <input
        type="password"
        name="password"
        required
        placeholder="Password"
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] focus:outline-none focus:border-teal"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full justify-center py-2.5 text-[14px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
