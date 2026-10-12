"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to manage your project with Nyxo Solutions."
      switchText="New here?"
      switchLabel="Create an account"
      switchHref="/signup"
    >
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Field icon={<Mail size={16} />} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Field icon={<Lock size={16} />} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && (
          <div style={{ color: "#FF6B6B", fontSize: 12.5, fontFamily: "Manrope, sans-serif" }}>{error}</div>
        )}
        <div style={{ textAlign: "right" }}>
          <Link href="/forgot-password" className="nav-link" style={{ fontSize: 12 }}>
            Forgot password?
          </Link>
        </div>
        <Button type="submit" style={{ width: "100%", marginTop: 4 }}>
          {loading ? "Logging in…" : "Log in"}
        </Button>
      </form>
    </AuthShell>
  );
}
