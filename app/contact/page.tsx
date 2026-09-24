import { User, Mail, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";

export default function ContactPage() {
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
        A short message is enough — we'll follow up with next steps.
      </p>

      <GlassCard hover={false} style={{ padding: 30 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Field icon={<User size={16} />} type="text" placeholder="Your name" />
          <Field icon={<Mail size={16} />} type="email" placeholder="Email" />
          <textarea
            placeholder="What does your business need?"
            rows={4}
            className="nyxo-field"
            style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", resize: "vertical" }}
          />
          <Button type="submit" style={{ width: "100%" }}>
            Send message
          </Button>
        </div>
      </GlassCard>

      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: "var(--surface-border)" }} />
        <span style={{ fontFamily: "Manrope, sans-serif", fontSize: 12, color: "var(--text-faint)" }}>
          or
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--surface-border)" }} />
      </div>

      <Button variant="cyan" style={{ width: "100%", marginTop: 20 }}>
        <MessageCircle size={17} />
        Message us on WhatsApp
      </Button>
    </div>
  );
}
