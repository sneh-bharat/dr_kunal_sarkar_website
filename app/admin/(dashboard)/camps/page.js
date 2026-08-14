import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import FreeCamp from "@/models/FreeCamp";
import { deleteFreeCamp, toggleFreeCampPublished } from "@/app/actions/admin-camp-actions";

export const dynamic = "force-dynamic";

async function getCamps() {
  await connectToDatabase();
  return FreeCamp.find({}).sort({ date: 1 }).lean();
}

export default async function AdminCampsPage() {
  const camps = await getCamps();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-heading font-700 text-navy text-[22px]">Free Health Camps</h1>
        <Link href="/admin/camps/new" className="btn-primary px-5 py-2 text-[13.5px] shrink-0">
          + New Camp
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-300 overflow-hidden">
        <table className="w-full text-left text-[13.5px]">
          <thead className="bg-slate-50 text-navy/70">
            <tr>
              <th className="px-4 py-3 font-600">Name</th>
              <th className="px-4 py-3 font-600">Venue</th>
              <th className="px-4 py-3 font-600">Date</th>
              <th className="px-4 py-3 font-600">Status</th>
              <th className="px-4 py-3 font-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp) => (
              <tr key={camp._id.toString()} className="border-t border-slate-100">
                <td className="px-4 py-3 text-navy font-600 max-w-xs truncate">{camp.name}</td>
                <td className="px-4 py-3 text-ink">{camp.venue}</td>
                <td className="px-4 py-3 text-ink">
                  {new Date(camp.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3">
                  <form
                    action={toggleFreeCampPublished.bind(
                      null,
                      camp._id.toString(),
                      !camp.published,
                    )}
                  >
                    <button
                      type="submit"
                      className={
                        camp.published
                          ? "rounded-full bg-teal-50 text-teal px-2.5 py-1 text-[11.5px] font-600 hover:bg-teal-100"
                          : "rounded-full bg-slate-100 text-ink px-2.5 py-1 text-[11.5px] font-600 hover:bg-slate-200"
                      }
                      title={camp.published ? "Click to disable" : "Click to enable"}
                    >
                      {camp.published ? "Published" : "Disabled"}
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3 text-right space-x-3 whitespace-nowrap">
                  <Link
                    href={`/admin/camps/${camp._id}/edit`}
                    className="text-teal font-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <form
                    action={deleteFreeCamp.bind(null, camp._id.toString())}
                    className="inline"
                  >
                    <button type="submit" className="text-red-600 font-600 hover:underline">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {camps.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-ink">
                  No camps yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
