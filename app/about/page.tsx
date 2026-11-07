import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

const VALUES = [
  {
    title: "Practical over impressive",
    body: "We build what actually moves your business forward and keeps operations simple and practical — a working WhatsApp ordering flow beats a flashy site nobody can update.",
  },
  {
    title: "We understand operations, not just code",
    body: "Our background is in the real retail business and organisational operations, not just building websites for one — that shapes how we think about stock, clients, staff, and sales.",
  },
  {
    title: "Honest about what we offer",
    body: "Where we're still building credentials — like formal IT audit or security assessments — we say so. Credibility is far better than than overselling.",
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
        Nyxo Solutions builds websites and digital systems businesses —
        clothing and retail businesses, service providers, manufacturing businesses, and more — can use to run their operations more efficiently. We focus on businesses
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
          We operate virtually while keeping our pricing realistic and affordable for businesses for smoother and better digital transformation. Every build
          includes an ongoing support plan, and clients with an account can
          track their request's status and progress directly from their
          dashboard instead of chasing updates over WhatsApp.
        </p>
        <Button href="/contact">Start a project with us today</Button>
      </GlassCard>

      <GlassCard hover={false} spotlight={false} style={{ padding: 28, marginTop: 16 }}>
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 12,
            color: "var(--cyan-soft)",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Careers
        </div>
        <h2 style={{ fontWeight: 700, fontSize: 20, margin: "0 0 10px" }}>
          Grow your skills with Nyxo
        </h2>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 13.5,
            color: "var(--text-muted)",
            lineHeight: 1.65,
            margin: "0 0 18px",
          }}
        >
          Interested in volunteering or an internship? We’d like to hear from
          people who want to learn, contribute, and help build practical digital
          solutions. Tell us what you’re interested in, what you’d like to learn,
          and how you hope to contribute. Opportunities depend on our current
          projects and capacity.
        </p>
        <Button href="mailto:nyxosolutions@gmail.com?subject=Volunteer%20or%20internship%20enquiry">
          Ask about opportunities
        </Button>
      </GlassCard>
    </div>
  );
}
