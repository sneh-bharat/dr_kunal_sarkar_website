"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { submitComment } from "@/app/actions/blog-actions";

const initialState = { ok: false, error: null };

export default function CommentForm({ slug }) {
  const [state, formAction, pending] = useActionState(submitComment, initialState);
  const formRef = useRef(null);

  useEffect(() => {
    if (state === initialState) return;
    if (state.ok) {
      toast.success(
        state.held
          ? "Thanks — your comment has been submitted and will appear once reviewed."
          : "Thanks — your comment is now live.",
      );
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-2xl border border-slate-300 p-6 sm:p-7 mt-6 md:mt-8"
    >
      <input type="hidden" name="slug" value={slug} />
      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <p className="text-[14px] text-ink mb-5">
        Leave a comment — your email address will not be published.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] text-navy placeholder:text-ink/50 focus:outline-none focus:border-teal"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] text-navy placeholder:text-ink/50 focus:outline-none focus:border-teal"
        />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Write your comment..."
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[14px] text-navy placeholder:text-ink/50 focus:outline-none focus:border-teal mb-5"
      ></textarea>
      <button
        type="submit"
        disabled={pending}
        className="btn-primary px-6 py-2.5 text-[14px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? "Posting…" : "Post Comment"}
      </button>
    </form>
  );
}
