"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function FeedbackPage() {
  const supabase = createClient();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number | null>(null);
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

    if (!user) {
      router.push("/login");
      return;
    }

    const { error } = await supabase.from("feedback").insert({
      user_id: user.id,
      message,
      rating,
    });

    setLoading(false);
    if (error) {
      setError("Couldn't send that — please try again.");
      return;
    }
    setSent(true);
  }

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "70px 24px 60px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 28, marginBottom: 6 }}>Leave feedback</h1>
      <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--text-muted)", marginBottom: 28 }}>
        This goes straight to the Nyxo team.
      </p>

      {sent ? (
        <GlassCard hover={false} style={{ padding: 28 }}>
          <p style={{ fontFamily: "Manrope, sans-serif", fontSize: 13.5, color: "var(--cyan-soft)", margin: 0 }}>
            Thanks — we've got it.
          </p>
          <div style={{ marginTop: 16 }}>
            <Button variant="ghost" href="/dashboard">Back to dashboard</Button>
          </div>
        </GlassCard>
      ) : (
        <GlassCard hover={false} style={{ padding: 28 }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 12.5, color: "var(--text-muted)", marginBottom: 8 }}>
                How would you rate your experience? (optional)
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n === rating ? null : n)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  >
                    <Star
                      size={22}
                      fill={rating && n <= rating ? "var(--cyan)" : "none"}
                      color={rating && n <= rating ? "var(--cyan)" : "var(--text-faint)"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="What's on your mind?"
              rows={5}
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
              {loading ? "Sending…" : "Send feedback"}
            </Button>
          </form>
        </GlassCard>
      )}
    </div>
  );
}
