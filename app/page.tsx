import { ConstellationField } from "@/components/ConstellationField";
import { Mark } from "@/components/Logo";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

const TIERS = [
  {
    name: "Presence",
    desc: "Get your business online and taking orders on WhatsApp within days.",
  },
  {
    name: "Growth",
    desc: "A full catalogue site with cart, checkout, and admin tools.",
  },
  {
    name: "Systems",
    desc: "Connect stock, sales, and payments so nothing runs on guesswork.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* hero */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ConstellationField
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
        <div
          className="hero-grid fade-up"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "88px 24px 40px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <h1
              style={{
                fontWeight: 800,
                fontSize: 46,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                maxWidth: 520,
              }}
            >
              Websites and systems your business actually runs on.
            </h1>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 16,
                color: "var(--text-muted)",
                maxWidth: 460,
                marginTop: 18,
                lineHeight: 1.6,
              }}
            >
              Nyxo Solutions builds practical technology for Kenyan SMEs —
              from your first website to the systems that keep stock,
              staff, and sales in sync.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
              <Button href="/contact">Start a project</Button>
              <Button variant="ghost" href="/services">
                See how we work
              </Button>
            </div>
          </div>

          <div style={{ position: "relative", height: 320 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Mark size={230} />
            </div>
            <GlassCard
              hover={false}
              style={{ position: "absolute", bottom: 10, left: 0, padding: "16px 18px", maxWidth: 230 }}
            >
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 12,
                  color: "var(--text-faint)",
                  marginBottom: 4,
                }}
              >
                Live build
              </div>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>
                Multi-outlet retailer, WhatsApp checkout live
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* tiers preview */}
      <div style={{ maxWidth: 1120, margin: "60px auto 0", padding: "0 24px" }}>
        <h2 style={{ fontWeight: 700, fontSize: 24, margin: "0 0 24px" }}>
          Three ways to work with us
        </h2>
        <div className="tier-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {TIERS.map((t) => (
            <GlassCard key={t.name} style={{ padding: 24 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, var(--violet), var(--cyan))",
                  marginBottom: 16,
                }}
              />
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{t.name}</div>
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 13.5,
                  color: "var(--text-muted)",
                  lineHeight: 1.55,
                }}
              >
                {t.desc}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* case study */}
      <div style={{ maxWidth: 1120, margin: "70px auto 0", padding: "0 24px" }}>
        <GlassCard
          hover={false}
          className="case-grid"
          style={{
            padding: 36,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 12,
                color: "var(--cyan-soft)",
                marginBottom: 10,
                fontWeight: 700,
              }}
            >
              Case study
            </div>
            <h3 style={{ fontWeight: 700, fontSize: 22, margin: "0 0 12px" }}>
              Built for how retail actually runs
            </h3>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.6,
                maxWidth: 420,
              }}
            >
              A multi-outlet clothing retailer needed customers to browse,
              customise, and order without calling the shop. We built a
              catalogue site with WhatsApp checkout built in — live today,
              taking real orders.
            </p>
          </div>
          <div
            style={{
              height: 160,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, var(--violet-deep), var(--violet) 60%, var(--cyan))",
              opacity: 0.85,
            }}
          />
        </GlassCard>
      </div>
    </div>
  );
}
