"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlassCard } from "./GlassCard";
import { createClient } from "@/lib/supabase/client";

const REQUEST_STATUSES = ["new", "in_review", "in_progress", "completed", "declined"];
const PROJECT_STATUSES = ["in_progress", "review", "completed", "on_hold"];

type AdminPanelProps = {
  initialRequests: any[];
  initialProjects: any[];
  initialFeedback: any[];
};

export function AdminPanel({ initialRequests, initialProjects, initialFeedback }: AdminPanelProps) {
  const supabase = createClient();
  const router = useRouter();
  const [tab, setTab] = useState<"requests" | "projects" | "feedback">("requests");
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState<string | null>(null);

  async function updateRequestStatus(id: string, status: string) {
    setBusy(id);
    await supabase.from("requests").update({ status }).eq("id", id);
    setBusy(null);
    router.refresh();
  }

  async function startProject(request: any) {
    if (!request.user_id) return;
    setBusy(request.id);
    await supabase.from("projects").insert({
      request_id: request.id,
      user_id: request.user_id,
      title: request.service_interest || "New project",
      status: "in_progress",
    });
    await supabase.from("requests").update({ status: "in_progress" }).eq("id", request.id);
    setBusy(null);
    router.refresh();
  }

  async function updateProjectStatus(id: string, status: string) {
    setBusy(id);
    await supabase.from("projects").update({ status }).eq("id", id);
    setBusy(null);
    router.refresh();
  }

  async function addProjectNote(projectId: string) {
    const note = noteDrafts[projectId];
    if (!note) return;
    setBusy(projectId);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    await supabase.from("project_updates").insert({ project_id: projectId, author_id: user?.id, note });
    setNoteDrafts((d) => ({ ...d, [projectId]: "" }));
    setBusy(null);
    router.refresh();
  }

  const TABS = [
    { id: "requests" as const, label: `Requests (${initialRequests.length})` },
    { id: "projects" as const, label: `Projects (${initialProjects.length})` },
    { id: "feedback" as const, label: `Feedback (${initialFeedback.length})` },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "70px 24px 60px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 30, marginBottom: 24 }}>Admin</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className="btn btn-ghost"
            style={{
              padding: "8px 16px",
              fontSize: 13,
              background: tab === t.id ? "var(--surface)" : "transparent",
              borderColor: tab === t.id ? "var(--surface-border-hover)" : "var(--surface-border)",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "requests" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {initialRequests.length === 0 && (
            <p style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-muted)" }}>No requests yet.</p>
          )}
          {initialRequests.map((r) => (
            <div key={r.id} className="admin-row">
              <div>
                <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14 }}>
                  {r.name}{" "}
                  {r.profiles?.full_name && (
                    <span style={{ color: "var(--text-faint)", fontWeight: 500 }}>({r.profiles.full_name})</span>
                  )}
                </div>
                <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                  {r.email} · {r.service_interest || "General enquiry"}
                </div>
                <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 12.5, color: "var(--text-muted)", marginTop: 8, marginBottom: 0 }}>
                  {r.message}
                </p>
              </div>
              <select
                className="nyxo-select"
                value={r.status}
                disabled={busy === r.id}
                onChange={(e) => updateRequestStatus(r.id, e.target.value)}
              >
                {REQUEST_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s.replace("_", " ")}
                  </option>
                ))}
              </select>
              {r.user_id && r.status !== "completed" && (
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ padding: "7px 12px", fontSize: 12 }}
                  disabled={busy === r.id}
                  onClick={() => startProject(r)}
                >
                  Start project
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === "projects" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {initialProjects.length === 0 && (
            <p style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-muted)" }}>No projects yet.</p>
          )}
          {initialProjects.map((p) => (
            <GlassCard key={p.id} hover={false} style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15 }}>{p.title}</div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 12, color: "var(--text-faint)" }}>
                    {p.profiles?.full_name || "Client"}
                  </div>
                </div>
                <select
                  className="nyxo-select"
                  value={p.status}
                  disabled={busy === p.id}
                  onChange={(e) => updateProjectStatus(p.id, e.target.value)}
                >
                  {PROJECT_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s.replace("_", " ")}
                    </option>
                  ))}
                </select>
              </div>

              {p.project_updates?.length > 0 && (
                <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.project_updates.map((u: any) => (
                    <div
                      key={u.id}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: 12,
                        color: "var(--text-muted)",
                        borderLeft: "2px solid var(--surface-border)",
                        paddingLeft: 10,
                      }}
                    >
                      {u.note}
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                <input
                  className="nyxo-field"
                  style={{ flex: 1, padding: "9px 12px", fontSize: 12.5 }}
                  placeholder="Add a progress note…"
                  value={noteDrafts[p.id] || ""}
                  onChange={(e) => setNoteDrafts((d) => ({ ...d, [p.id]: e.target.value }))}
                />
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ padding: "8px 14px", fontSize: 12.5 }}
                  disabled={busy === p.id}
                  onClick={() => addProjectNote(p.id)}
                >
                  Post
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {tab === "feedback" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {initialFeedback.length === 0 && (
            <p style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-muted)" }}>No feedback yet.</p>
          )}
          {initialFeedback.map((f) => (
            <GlassCard key={f.id} hover={false} style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13.5 }}>
                  {f.profiles?.full_name || "Client"}
                </div>
                {f.rating && <div style={{ color: "var(--cyan-soft)", fontSize: 12.5 }}>{"★".repeat(f.rating)}</div>}
              </div>
              <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 12.5, color: "var(--text-muted)", marginTop: 8, marginBottom: 0 }}>
                {f.message}
              </p>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
