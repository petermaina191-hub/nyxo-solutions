"use client";

import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <AuthShell
        title="Check your email"
        subtitle="We've sent a confirmation link to finish setting up your account."
        switchText="Already confirmed?"
        switchLabel="Log in"
        switchHref="/login"
      >
        <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--text-muted)" }}>
          Click the link in the email from Nyxo Solutions, then come back and log in.
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Track your project and stay in touch with the team — no more digging through WhatsApp for updates."
      switchText="Already have an account?"
      switchLabel="Log in"
      switchHref="/login"
    >
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Field icon={<User size={16} />} type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <Field icon={<Mail size={16} />} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Field icon={<Lock size={16} />} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
        {error && (
          <div style={{ color: "#FF6B6B", fontSize: 12.5, fontFamily: "Manrope, sans-serif" }}>{error}</div>
        )}
        <Button type="submit" style={{ width: "100%", marginTop: 4 }}>
          {loading ? "Creating account…" : "Create account"}
        </Button>
      </form>
    </AuthShell>
  );
}
