"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
  }

  return (
    <div style={{ minHeight: "calc(100vh - 66px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>
      <GlassCard hover={false} style={{ padding: 36, width: 380 }}>
        <h1 style={{ fontWeight: 700, fontSize: 22 }}>Reset your password</h1>
        <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, color: "var(--text-muted)", marginTop: 6, marginBottom: 20, lineHeight: 1.5 }}>
          Enter the email on your account and we'll send a reset link. This
          only works for accounts created with an email and password —
          if you signed up with Google, GitHub, Facebook, or LinkedIn,
          manage your password with that provider instead.
        </p>
        {sent ? (
          <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--cyan-soft)" }}>
            Check your email for a reset link.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Field icon={<Mail size={16} />} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {error && (
              <div style={{ color: "#FF6B6B", fontSize: 12.5, fontFamily: "Manrope, sans-serif" }}>{error}</div>
            )}
            <Button type="submit" style={{ width: "100%" }}>
              Send reset link
            </Button>
          </form>
        )}
        <div style={{ marginTop: 18, textAlign: "center" }}>
          <Link href="/login" className="nav-link" style={{ fontSize: 13 }}>
            Back to log in
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
