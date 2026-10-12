import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

const VALUES = [
  {
    title: "Practical over impressive",
    body: "We build what actually moves your business forward — a working WhatsApp ordering flow beats a flashy site nobody can update.",
  },
  {
    title: "We understand operations, not just code",
    body: "Our background is in running a real multi-outlet retail business, not just building websites for one — that shapes how we think about stock, staff, and sales.",
  },
  {
    title: "Honest about what we offer",
    body: "Where we're still building credentials — like formal IT audit or security assessments — we say so, rather than overselling.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "80px 24px 60px" }}>
      <h1 className="fade-up" style={{ fontWeight: 800, fontSize: 36, margin: "0 0 14px" }}>
        About Nyxo Solutions
      </h1>
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 15.5,
          color: "var(--text-muted)",
          lineHeight: 1.7,
          maxWidth: 640,
        }}
      >
        Nyxo Solutions builds websites and digital systems for Kenyan SMEs —
        clothing and retail businesses, service providers, and small teams
        that need technology to actually work for how they operate, not the
        other way around. We started by solving this for a real multi-outlet
        retailer, and we've kept that same practical, operations-first
        approach ever since.
      </p>

      <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
        {VALUES.map((v) => (
          <GlassCard key={v.title} style={{ padding: 24 }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
              {v.title}
            </div>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 13.5,
                color: "var(--text-muted)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {v.body}
            </p>
          </GlassCard>
        ))}
      </div>

      <GlassCard hover={false} style={{ padding: 28, marginTop: 40 }}>
        <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
          How we work
        </div>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 13.5,
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: 18,
          }}
        >
          We operate virtually — no office yet, which keeps our overhead low
          and our pricing realistic for small businesses. Every build
          includes an ongoing support plan, and clients with an account can
          track their request's status and progress directly from their
          dashboard instead of chasing updates over WhatsApp.
        </p>
        <Button href="/contact">Start a project</Button>
      </GlassCard>
    </div>
  );
}
