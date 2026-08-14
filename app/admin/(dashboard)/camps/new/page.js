import FreeCampForm from "@/components/admin/FreeCampForm";
import { createFreeCamp } from "@/app/actions/admin-camp-actions";

export default function NewFreeCampPage() {
  return (
    <div>
      <h1 className="font-heading font-700 text-navy text-[22px] mb-6">New Free Camp</h1>
      <FreeCampForm action={createFreeCamp} />
    </div>
  );
}
