import LoginForm from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin Login — Dr. Kunal Sarkar",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 grid place-items-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-300 p-8">
        <h1 className="font-heading font-700 text-navy text-[20px] mb-6 text-center">
          Admin Sign In
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
