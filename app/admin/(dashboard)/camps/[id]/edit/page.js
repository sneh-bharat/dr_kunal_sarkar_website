import { notFound } from "next/navigation";
import FreeCampForm from "@/components/admin/FreeCampForm";
import { updateFreeCamp } from "@/app/actions/admin-camp-actions";
import { connectToDatabase } from "@/lib/mongodb";
import FreeCamp from "@/models/FreeCamp";
import { serializeDoc } from "@/lib/serialize";

export const dynamic = "force-dynamic";

export default async function EditFreeCampPage({ params }) {
  const { id } = await params;

  await connectToDatabase();
  const camp = await FreeCamp.findById(id).lean();
  if (!camp) notFound();

  const updateWithId = updateFreeCamp.bind(null, id);

  return (
    <div>
      <h1 className="font-heading font-700 text-navy text-[22px] mb-6">Edit Free Camp</h1>
      <FreeCampForm action={updateWithId} camp={serializeDoc(camp)} />
    </div>
  );
}
