"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
    setTimeout(() => router.push("/login"), 1500);
  }

  return (
    <div style={{ minHeight: "calc(100vh - 66px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>
      <GlassCard hover={false} style={{ padding: 36, width: 380 }}>
        <h1 style={{ fontWeight: 700, fontSize: 22 }}>Set a new password</h1>
        <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, color: "var(--text-muted)", marginTop: 6, marginBottom: 20 }}>
          Choose a new password for your account.
        </p>
        {done ? (
          <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--cyan-soft)" }}>
            Password updated — redirecting you to log in…
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Field icon={<Lock size={16} />} type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            {error && (
              <div style={{ color: "#FF6B6B", fontSize: 12.5, fontFamily: "Manrope, sans-serif" }}>{error}</div>
            )}
            <Button type="submit" style={{ width: "100%" }}>
              Update password
            </Button>
          </form>
        )}
      </GlassCard>
    </div>
  );
}
