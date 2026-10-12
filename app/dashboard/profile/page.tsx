"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Phone, Lock } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function ProfilePage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [hasPassword, setHasPassword] = useState(false);

  const [savingProfile, setSavingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState<string | null>(null);

  const [newPassword, setNewPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email ?? "");
      setHasPassword(
        (user.identities ?? []).some((i) => i.provider === "email")
      );

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, phone")
        .eq("id", user.id)
        .single();

      setFullName(profile?.full_name ?? "");
      setPhone(profile?.phone ?? "");
      setLoading(false);
    }
    load();
  }, []);

  async function handleProfileSave(e: React.FormEvent) {
    e.preventDefault();
    setSavingProfile(true);
    setProfileMsg(null);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, phone })
      .eq("id", user.id);

    setSavingProfile(false);
    setProfileMsg(error ? "Couldn't save — try again." : "Saved.");
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setSavingPassword(true);
    setPasswordMsg(null);

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    setSavingPassword(false);
    if (error) {
      setPasswordMsg(error.message);
    } else {
      setPasswordMsg("Password updated.");
      setNewPassword("");
    }
  }

  if (loading) {
    return (
      <div style={{ maxWidth: 520, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-muted)" }}>Loading…</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "70px 24px 60px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 28, marginBottom: 6 }}>Your profile</h1>
      <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--text-muted)", marginBottom: 32 }}>
        {email}
      </p>

      <GlassCard hover={false} style={{ padding: 28, marginBottom: 20 }}>
        <form onSubmit={handleProfileSave} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Field icon={<User size={16} />} type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <Field icon={<Phone size={16} />} type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {profileMsg && (
            <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 12.5, color: "var(--cyan-soft)" }}>{profileMsg}</div>
          )}
          <Button type="submit" style={{ width: "100%" }}>
            {savingProfile ? "Saving…" : "Save changes"}
          </Button>
        </form>
      </GlassCard>

      {hasPassword ? (
        <GlassCard hover={false} style={{ padding: 28 }}>
          <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>
            Change password
          </div>
          <form onSubmit={handlePasswordChange} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Field
              icon={<Lock size={16} />}
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
              required
            />
            {passwordMsg && (
              <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 12.5, color: "var(--cyan-soft)" }}>{passwordMsg}</div>
            )}
            <Button type="submit" variant="ghost" style={{ width: "100%" }}>
              {savingPassword ? "Updating…" : "Update password"}
            </Button>
          </form>
        </GlassCard>
      ) : (
        <GlassCard hover={false} style={{ padding: 28 }}>
          <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
            You signed in with a social account, so there's no Nyxo password
            to change — manage your sign-in from that provider instead.
          </p>
        </GlassCard>
      )}
    </div>
  );
}
