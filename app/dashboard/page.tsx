import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const [{ data: profile }, { data: requests }, { data: projects }] = await Promise.all([
    supabase.from("profiles").select("full_name").eq("id", user.id).single(),
    supabase
      .from("requests")
      .select("id, service_interest, message, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }),
    supabase
      .from("projects")
      .select("id, title, status, created_at, project_updates(id, note, created_at)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }),
  ]);

  const firstName = profile?.full_name?.split(" ")[0] || "there";

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "70px 24px 60px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ fontWeight: 800, fontSize: 30 }}>Hi, {firstName}</h1>
          <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--text-muted)", marginTop: 6 }}>
            Track your requests and projects with Nyxo Solutions here.
          </p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="ghost" href="/dashboard/profile">Edit profile</Button>
          <Button href="/contact">New request</Button>
        </div>
      </div>

      {/* Projects */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Your projects</h2>
        {!projects || projects.length === 0 ? (
          <GlassCard hover={false} style={{ padding: 22 }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
              No active projects yet — once a request moves into active work,
              it'll show up here with progress updates.
            </p>
          </GlassCard>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {projects.map((p: any) => (
              <GlassCard key={p.id} hover={false} style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15 }}>{p.title}</div>
                  <span className={`status-badge status-${p.status}`}>{p.status.replace("_", " ")}</span>
                </div>
                {p.project_updates?.length > 0 && (
                  <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.project_updates
                      .sort((a: any, b: any) => (a.created_at < b.created_at ? 1 : -1))
                      .map((u: any) => (
                        <div
                          key={u.id}
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontSize: 12.5,
                            color: "var(--text-muted)",
                            borderLeft: "2px solid var(--surface-border)",
                            paddingLeft: 10,
                          }}
                        >
                          {u.note}
                          <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>
                            {new Date(u.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        )}
      </section>

      {/* Requests */}
      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Your requests</h2>
        {!requests || requests.length === 0 ? (
          <GlassCard hover={false} style={{ padding: 22 }}>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
              You haven't sent a request yet.
            </p>
          </GlassCard>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {requests.map((r: any) => (
              <GlassCard key={r.id} hover={false} style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13.5 }}>
                    {r.service_interest || "General enquiry"}
                  </div>
                  <span className={`status-badge status-${r.status}`}>{r.status.replace("_", " ")}</span>
                </div>
                <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 12.5, color: "var(--text-muted)", marginTop: 8, marginBottom: 0 }}>
                  {r.message}
                </p>
              </GlassCard>
            ))}
          </div>
        )}
      </section>

      <GlassCard hover={false} style={{ padding: 22 }}>
        <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>
          Have feedback?
        </div>
        <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>
          Tell us how a project went, or suggest something we could do better.
        </p>
        <Button variant="ghost" href="/dashboard/feedback">Leave feedback</Button>
      </GlassCard>
    </div>
  );
}
