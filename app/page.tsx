import { ConstellationField } from "@/components/ConstellationField";
import { Mark } from "@/components/Logo";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { SERVICES } from "@/data/services";

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
        <div className="hero-beam" aria-hidden="true" />
        <div
          className="hero-grid"
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
                maxWidth: 580,
              }}
            >
              <span className="hero-line" style={{ "--d": "100ms" } as React.CSSProperties}>
                Websites and systems
              </span>
              <span className="hero-line" style={{ "--d": "280ms" } as React.CSSProperties}>
                your business actually
              </span>
              <span className="hero-line" style={{ "--d": "460ms" } as React.CSSProperties}>
                runs on.
              </span>
            </h1>
            <p
              className="hero-in"
              style={
                {
                  "--d": "760ms",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 16,
                  color: "var(--text-muted)",
                  maxWidth: 460,
                  marginTop: 18,
                  lineHeight: 1.6,
                } as React.CSSProperties
              }
            >
              Nyxo Solutions builds practical technology for Kenyan SMEs —
              from your first website to the systems that keep stock,
              staff, and sales in sync.
            </p>
            <div
              className="hero-in"
              style={{ "--d": "960ms", display: "flex", gap: 12, marginTop: 30 } as React.CSSProperties}
            >
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
              <Parallax strength={14}>
                <div className="mark-glow">
                  <Mark size={230} />
                </div>
              </Parallax>
            </div>
            <Parallax strength={-9} style={{ position: "absolute", bottom: 10, left: 0 }}>
              <GlassCard hover={false} style={{ padding: "16px 18px", maxWidth: 230 }}>
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
            </Parallax>
          </div>
        </div>
      </div>

      {/* services marquee */}
      <div className="marquee" aria-label="Our services" style={{ marginTop: 28 }}>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className={copy === 1 ? "marquee-set marquee-dup" : "marquee-set"}
              aria-hidden={copy === 1}
            >
              {SERVICES.map((s) => (
                <span key={s.id} className="marquee-chip">
                  <i style={{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }} />
                  {s.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* tiers preview */}
      <div style={{ maxWidth: 1120, margin: "60px auto 0", padding: "0 24px" }}>
        <Reveal>
          <h2 style={{ fontWeight: 700, fontSize: 24, margin: "0 0 24px" }}>
            Three ways to work with us
          </h2>
        </Reveal>
        <div
          className="tier-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
        >
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <GlassCard style={{ padding: 24, height: "100%" }}>
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
            </Reveal>
          ))}
        </div>
      </div>

      {/* case study */}
      <div style={{ maxWidth: 1120, margin: "70px auto 0", padding: "0 24px" }}>
        <Reveal>
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
        </Reveal>
      </div>
    </div>
  );
}
