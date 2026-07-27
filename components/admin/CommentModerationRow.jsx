"use client";

import { useTransition } from "react";
import { approveComment, deleteComment } from "@/app/actions/admin-comment-actions";

export default function CommentModerationRow({ comment }) {
  const [pending, startTransition] = useTransition();

  return (
    <li className="rounded-2xl border border-slate-300 p-5">
      <div className="flex items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="font-700 text-navy text-[14px]">{comment.name}</span>
          <span className="text-[12.5px] text-ink">on {comment.postSlug}</span>
          <span
            className={
              comment.approved
                ? "rounded-full bg-teal-50 text-teal px-2.5 py-0.5 text-[11px] font-600"
                : "rounded-full bg-slate-100 text-ink px-2.5 py-0.5 text-[11px] font-600"
            }
          >
            {comment.approved ? "Approved" : "Pending"}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {!comment.approved && (
            <button
              type="button"
              disabled={pending}
              onClick={() => startTransition(() => approveComment(comment._id))}
              className="text-[13px] font-600 text-teal disabled:opacity-60"
            >
              Approve
            </button>
          )}
          <button
            type="button"
            disabled={pending}
            onClick={() => startTransition(() => deleteComment(comment._id))}
            className="text-[13px] font-600 text-red-600 disabled:opacity-60"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-[13.5px] text-ink leading-relaxed">{comment.message}</p>
    </li>
  );
}
