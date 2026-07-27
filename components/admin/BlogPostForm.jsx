"use client";

import { useActionState, useState } from "react";

const initialState = { ok: false, error: null };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-teal";
const labelClass = "block text-[13px] font-600 text-navy mb-1.5";

function toDateInputValue(value) {
  if (!value) return "";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

export default function BlogPostForm({ action, post }) {
  const [state, formAction, pending] = useActionState(action, initialState);

  const [content, setContent] = useState(post?.content?.length ? post.content : [""]);
  const [sections, setSections] = useState(
    post?.sections?.length ? post.sections : [],
  );
  const [keyPoints, setKeyPoints] = useState(
    post?.keyPoints?.length ? post.keyPoints : [],
  );

  return (
    <form action={formAction} className="space-y-6 max-w-3xl">
      {state.error && <p className="text-[13.5px] text-red-600">{state.error}</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Title</label>
          <input
            name="title"
            required
            defaultValue={post?.title}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug</label>
          <input
            name="slug"
            required
            defaultValue={post?.slug}
            placeholder="five-spices-for-heart-health"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Category</label>
          <input name="category" required defaultValue={post?.category} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Display Date</label>
          <input
            name="date"
            required
            defaultValue={post?.date}
            placeholder="July 20, 2026"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Published At</label>
          <input
            type="date"
            name="publishedAt"
            required
            defaultValue={toDateInputValue(post?.publishedAt) || new Date().toISOString().slice(0, 10)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Excerpt</label>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Featured Image {post?.image?.url && "(leave empty to keep current)"}</label>
        {post?.image?.url && (
          <img src={post.image.url} alt="" className="h-24 w-auto rounded-lg mb-2 border border-slate-200" />
        )}
        <input
          type="file"
          name="image"
          accept="image/*"
          className={inputClass}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file && file.size > 10 * 1024 * 1024) {
              alert("That image is over 10MB — please choose a smaller file.");
              e.target.value = "";
            }
          }}
        />
        <p className="mt-1 text-[12px] text-ink">Max 10MB.</p>
      </div>

      {/* Content paragraphs */}
      <div>
        <label className={labelClass}>Intro Paragraphs</label>
        <div className="space-y-2">
          {content.map((para, i) => (
            <div key={i} className="flex gap-2">
              <textarea
                rows={2}
                value={para}
                onChange={(e) => {
                  const next = [...content];
                  next[i] = e.target.value;
                  setContent(next);
                }}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => setContent(content.filter((_, idx) => idx !== i))}
                className="shrink-0 text-[13px] text-red-600 px-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setContent([...content, ""])}
          className="mt-2 text-[13px] font-600 text-teal"
        >
          + Add paragraph
        </button>
        <input type="hidden" name="content" value={JSON.stringify(content.filter(Boolean))} />
      </div>

      {/* Sections */}
      <div>
        <label className={labelClass}>Sections (optional subheadings)</label>
        <div className="space-y-3">
          {sections.map((s, i) => (
            <div key={i} className="rounded-lg border border-slate-200 p-3 space-y-2">
              <input
                placeholder="Heading"
                value={s.heading}
                onChange={(e) => {
                  const next = [...sections];
                  next[i] = { ...next[i], heading: e.target.value };
                  setSections(next);
                }}
                className={inputClass}
              />
              <textarea
                placeholder="Body"
                rows={2}
                value={s.body}
                onChange={(e) => {
                  const next = [...sections];
                  next[i] = { ...next[i], body: e.target.value };
                  setSections(next);
                }}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => setSections(sections.filter((_, idx) => idx !== i))}
                className="text-[13px] text-red-600"
              >
                Remove section
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setSections([...sections, { heading: "", body: "" }])}
          className="mt-2 text-[13px] font-600 text-teal"
        >
          + Add section
        </button>
        <input
          type="hidden"
          name="sections"
          value={JSON.stringify(sections.filter((s) => s.heading && s.body))}
        />
      </div>

      <div>
        <label className={labelClass}>Conclusion (optional)</label>
        <textarea name="conclusion" rows={2} defaultValue={post?.conclusion} className={inputClass} />
      </div>

      {/* Key points */}
      <div>
        <label className={labelClass}>Key Points (optional callout list)</label>
        <div className="space-y-2">
          {keyPoints.map((point, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={point}
                onChange={(e) => {
                  const next = [...keyPoints];
                  next[i] = e.target.value;
                  setKeyPoints(next);
                }}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => setKeyPoints(keyPoints.filter((_, idx) => idx !== i))}
                className="shrink-0 text-[13px] text-red-600 px-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setKeyPoints([...keyPoints, ""])}
          className="mt-2 text-[13px] font-600 text-teal"
        >
          + Add key point
        </button>
        <input type="hidden" name="keyPoints" value={JSON.stringify(keyPoints.filter(Boolean))} />
      </div>

      <label className="flex items-center gap-2 text-[14px] text-navy">
        <input
          type="checkbox"
          name="published"
          value="true"
          defaultChecked={post?.published ?? true}
        />
        Published (visible on the public site)
      </label>

      <button
        type="submit"
        disabled={pending}
        className="btn-primary px-8 py-2.5 text-[14px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? "Saving…" : post ? "Save Changes" : "Create Post"}
      </button>
    </form>
  );
}
