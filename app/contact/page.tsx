"use client";

import { useState } from "react";
import { User, Mail, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";
import { SERVICES } from "@/data/services";

const WHATSAPP_NUMBER = "254799550617";

export default function ContactPage() {
  const supabase = createClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("requests").insert({
      user_id: user?.id ?? null,
      name,
      email,
      message,
      service_interest: serviceInterest || null,
    });

    setLoading(false);
    if (error) {
      setError("Something went wrong sending your message — please try WhatsApp instead.");
      return;
    }
    setSent(true);
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Nyxo Solutions, I'd like to talk about a project."
  )}`;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 40px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 34, margin: "0 0 10px" }}>
        Tell us about your business
      </h1>
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 14.5,
          color: "var(--text-muted)",
          marginBottom: 34,
          lineHeight: 1.6,
        }}
      >
        A short message is enough — we'll follow up with next steps.{" "}
        {!sent && "If you have an account, we'll link this to it so you can track it from your dashboard."}
      </p>

      {sent ? (
        <GlassCard hover={false} style={{ padding: 30 }}>
          <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
            Thanks — we've got your message
          </div>
          <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>
            We'll follow up by email shortly. If it's urgent, message us on
            WhatsApp using the button below.
          </p>
        </GlassCard>
      ) : (
        <GlassCard hover={false} style={{ padding: 30 }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Field icon={<User size={16} />} type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Field icon={<Mail size={16} />} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <select
              className="nyxo-field"
              style={{ width: "100%", padding: "12px 14px" }}
              value={serviceInterest}
              onChange={(e) => setServiceInterest(e.target.value)}
            >
              <option value="">Which service is this about? (optional)</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <textarea
              placeholder="What does your business need?"
              rows={4}
              className="nyxo-field"
              style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", resize: "vertical" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {error && (
              <div style={{ color: "#FF6B6B", fontSize: 12.5, fontFamily: "Manrope, sans-serif" }}>{error}</div>
            )}
            <Button type="submit" style={{ width: "100%" }}>
              {loading ? "Sending…" : "Send message"}
            </Button>
          </form>
        </GlassCard>
      )}

      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "var(--surface-border)" }} />
        <span style={{ fontFamily: "Manrope, sans-serif", fontSize: 12, color: "var(--text-faint)" }}>
          or
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--surface-border)" }} />
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-cyan"
        style={{ width: "100%", marginTop: 20, boxSizing: "border-box" }}
      >
        <MessageCircle size={17} />
        Message us on WhatsApp
      </a>
    </div>
  );
}
