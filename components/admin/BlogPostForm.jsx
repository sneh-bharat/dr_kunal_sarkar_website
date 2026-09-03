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

  // A single ordered list of body blocks (paragraphs and sections mixed
  // freely) so admins can insert a paragraph after a section, etc. Existing
  // posts saved before `blocks` existed are migrated on load: paragraphs
  // first, then sections, in their old relative order — from there the
  // admin can rearrange them however they like.
  const [blocks, setBlocks] = useState(
    post?.blocks?.length
      ? post.blocks
      : [
          ...(post?.content?.length ? post.content : [""]).map((text) => ({
            type: "paragraph",
            text,
          })),
          ...(post?.sections || []).map((s) => ({
            type: "section",
            heading: s.heading,
            body: s.body,
          })),
        ],
  );
  const [keyPoints, setKeyPoints] = useState(
    post?.keyPoints?.length ? post.keyPoints : [],
  );

  function moveItem(list, setList, index, direction) {
    const target = index + direction;
    if (target < 0 || target >= list.length) return;
    const next = [...list];
    [next[index], next[target]] = [next[target], next[index]];
    setList(next);
  }

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

      {/* Body: paragraphs and sections, freely reorderable and interleaved */}
      <div>
        <label className={labelClass}>Body Content</label>
        <p className="mb-2 text-[12px] text-ink">
          Add paragraphs and sections in any order, then use the arrows to move a
          block — e.g. drop a paragraph in right after a section.
        </p>
        <div className="space-y-3">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={
                block.type === "section"
                  ? "rounded-lg border border-teal/30 bg-teal-50/40 p-3 space-y-2"
                  : "rounded-lg border border-slate-200 p-3 space-y-2"
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveItem(blocks, setBlocks, i, -1)}
                    disabled={i === 0}
                    aria-label="Move block up"
                    className="h-7 w-7 rounded border border-slate-300 text-[13px] text-navy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveItem(blocks, setBlocks, i, 1)}
                    disabled={i === blocks.length - 1}
                    aria-label="Move block down"
                    className="h-7 w-7 rounded border border-slate-300 text-[13px] text-navy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
                  >
                    ↓
                  </button>
                  <span className="ml-1 text-[12px] font-600 uppercase tracking-wide text-ink">
                    {block.type === "section" ? `Section ${i + 1}` : `Paragraph ${i + 1}`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setBlocks(blocks.filter((_, idx) => idx !== i))}
                  className="text-[13px] text-red-600"
                >
                  Remove
                </button>
              </div>

              {block.type === "paragraph" ? (
                <textarea
                  rows={2}
                  value={block.text}
                  onChange={(e) => {
                    const next = [...blocks];
                    next[i] = { ...next[i], text: e.target.value };
                    setBlocks(next);
                  }}
                  className={inputClass}
                />
              ) : (
                <>
                  <input
                    placeholder="Heading"
                    value={block.heading}
                    onChange={(e) => {
                      const next = [...blocks];
                      next[i] = { ...next[i], heading: e.target.value };
                      setBlocks(next);
                    }}
                    className={inputClass}
                  />
                  <textarea
                    placeholder="Body"
                    rows={2}
                    value={block.body}
                    onChange={(e) => {
                      const next = [...blocks];
                      next[i] = { ...next[i], body: e.target.value };
                      setBlocks(next);
                    }}
                    className={inputClass}
                  />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-4">
          <button
            type="button"
            onClick={() => setBlocks([...blocks, { type: "paragraph", text: "" }])}
            className="text-[13px] font-600 text-teal"
          >
            + Add paragraph
          </button>
          <button
            type="button"
            onClick={() => setBlocks([...blocks, { type: "section", heading: "", body: "" }])}
            className="text-[13px] font-600 text-teal"
          >
            + Add section
          </button>
        </div>
        <input
          type="hidden"
          name="blocks"
          value={JSON.stringify(
            blocks.filter((b) =>
              b.type === "paragraph" ? b.text?.trim() : b.heading?.trim() && b.body?.trim(),
            ),
          )}
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
