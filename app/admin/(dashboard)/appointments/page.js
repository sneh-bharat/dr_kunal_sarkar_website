import { connectToDatabase } from "@/lib/mongodb";
import AppointmentRequest from "@/models/AppointmentRequest";
import { serializeDoc } from "@/lib/serialize";
import { updateAppointmentStatus } from "@/app/actions/admin-lead-actions";
import StatusSelect from "@/components/admin/StatusSelect";
import SearchBar from "@/components/admin/SearchBar";

export const dynamic = "force-dynamic";

async function getAppointments(q) {
  await connectToDatabase();
  const filter = q
    ? {
        $or: [
          { name: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } },
          { phone: { $regex: q, $options: "i" } },
          { district: { $regex: q, $options: "i" } },
        ],
      }
    : {};
  const appointments = await AppointmentRequest.find(filter).sort({ createdAt: -1 }).lean();
  return serializeDoc(appointments);
}

export default async function AdminAppointmentsPage({ searchParams }) {
  const { q } = await searchParams;
  const appointments = await getAppointments(q);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="font-heading font-700 text-navy text-[22px]">Appointment Requests</h1>
        <SearchBar placeholder="Search name, email, phone, district…" />
      </div>
      <div className="bg-white rounded-2xl border border-slate-300 overflow-x-auto">
        <table className="w-full text-left text-[13px] whitespace-nowrap">
          <thead className="bg-slate-50 text-navy/70">
            <tr>
              <th className="px-4 py-3 font-600">Name</th>
              <th className="px-4 py-3 font-600">Contact</th>
              <th className="px-4 py-3 font-600">Preferred Date</th>
              <th className="px-4 py-3 font-600">District</th>
              <th className="px-4 py-3 font-600">Message</th>
              <th className="px-4 py-3 font-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a._id} className="border-t border-slate-100">
                <td className="px-4 py-3 text-navy font-600">{a.name}</td>
                <td className="px-4 py-3 text-ink">
                  {a.email}
                  <br />
                  {a.phone}
                </td>
                <td className="px-4 py-3 text-ink">{a.preferredDate}</td>
                <td className="px-4 py-3 text-ink">{a.district}</td>
                <td className="px-4 py-3 text-ink max-w-xs truncate">{a.message}</td>
                <td className="px-4 py-3">
                  <StatusSelect id={a._id} status={a.status} updateAction={updateAppointmentStatus} />
                </td>
              </tr>
            ))}
            {appointments.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-ink">
                  {q ? `No appointments match "${q}".` : "No appointment requests yet."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
