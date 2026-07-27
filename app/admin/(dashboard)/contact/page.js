import { connectToDatabase } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import { serializeDoc } from "@/lib/serialize";
import { updateContactStatus } from "@/app/actions/admin-lead-actions";
import StatusSelect from "@/components/admin/StatusSelect";
import SearchBar from "@/components/admin/SearchBar";

export const dynamic = "force-dynamic";

async function getContacts(q) {
  await connectToDatabase();
  const filter = q
    ? {
        $or: [
          { name: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } },
          { phone: { $regex: q, $options: "i" } },
        ],
      }
    : {};
  const contacts = await ContactSubmission.find(filter).sort({ createdAt: -1 }).lean();
  return serializeDoc(contacts);
}

export default async function AdminContactPage({ searchParams }) {
  const { q } = await searchParams;
  const contacts = await getContacts(q);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-heading font-700 text-navy text-[22px]">Contact Submissions</h1>
        <SearchBar placeholder="Search name, email, phone…" />
      </div>
      <div className="bg-white rounded-2xl border border-slate-300 overflow-x-auto">
        <table className="w-full text-left text-[13px] whitespace-nowrap">
          <thead className="bg-slate-50 text-navy/70">
            <tr>
              <th className="px-4 py-3 font-600">Name</th>
              <th className="px-4 py-3 font-600">Contact</th>
              <th className="px-4 py-3 font-600">Message</th>
              <th className="px-4 py-3 font-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t border-slate-100">
                <td className="px-4 py-3 text-navy font-600">{c.name}</td>
                <td className="px-4 py-3 text-ink">
                  {c.email}
                  <br />
                  {c.phone}
                </td>
                <td className="px-4 py-3 text-ink max-w-sm truncate">{c.message}</td>
                <td className="px-4 py-3">
                  <StatusSelect id={c._id} status={c.status} updateAction={updateContactStatus} />
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-ink">
                  {q ? `No submissions match "${q}".` : "No contact submissions yet."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
