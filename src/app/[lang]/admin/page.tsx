import { redirect } from "next/navigation";

export default function AdminPage({ params }: { params: { lang: string } }) {
  // Redirect to dashboard
  redirect(`/${params.lang}/admin/dashboard`);
} 