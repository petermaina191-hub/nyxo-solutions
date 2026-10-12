import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminPanel } from "@/components/AdminPanel";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const [{ data: requests }, { data: projects }, { data: feedback }] = await Promise.all([
    supabase.from("requests").select("*, profiles(full_name)").order("created_at", { ascending: false }),
    supabase
      .from("projects")
      .select("*, profiles(full_name), project_updates(id, note, created_at)")
      .order("created_at", { ascending: false }),
    supabase.from("feedback").select("*, profiles(full_name)").order("created_at", { ascending: false }),
  ]);

  return (
    <AdminPanel
      initialRequests={requests ?? []}
      initialProjects={projects ?? []}
      initialFeedback={feedback ?? []}
    />
  );
}
