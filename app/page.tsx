import { ConstellationField } from "@/components/ConstellationField";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import Image from "next/image";
import { NxHero } from "@/components/nx/NxHero";
import { NxStats } from "@/components/nx/NxStats";
import { NxProblem } from "@/components/nx/NxProblem";
import { NxProcess } from "@/components/nx/NxProcess";
import { NxFaq } from "@/components/nx/NxFaq";
import { NxFinalCta } from "@/components/nx/NxFinalCta";

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

const CLIENTS = [
  {
    name: "Mwas Knit Wear Limited",
    logo: "/mwas-knit-logo.jpeg",
    alt: "Mwas Knit Wear logo",
    href: "https://www.mwasknitwear.co.ke",
    description: "A Kenyan knitwear manufacturer and exporter, Mwas Knit Wear Limited needed a website to showcase its products and services to potential clients worldwide.",
  },
  {
    name: "Accquest Training Institute",
    logo: "/accquest-training-institute-logo.jpeg",
    alt: "Accquest Training Institute logo",
    href: "https://accquest-ivory.vercel.app",
    description: "Accquest Training Institute provides training and development programmes designed to equip learners with practical skills and professional knowledge.",
  },
  {
    name: "Terratidy (Under development)",
    logo: "/terratidy-logo.jpeg",
    alt: "Terratidy logo",
    href: "https://terratidy.vercel.app",
    description: "TerraTidy is a smart waste management system designed to simplify waste reporting, improve collection coordination and promote responsible waste disposal.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* hero (new): keeps your particle background and light beam */}
      <NxHero
        background={
          <>
            <ConstellationField
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            />
            <div className="hero-beam" aria-hidden="true" />
          </>
        }
      />

      {/* services marquee (yours, unchanged) */}
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

      {/* new: proof numbers and before / after */}
      <NxStats />
      <NxProblem />

      {/* tiers preview (yours, unchanged) */}
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {t.name === "Presence" && (
                    <Image
                      src="/slideshare-brands-solid-full.svg"
                      alt=""
                      width={20}
                      height={20}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  )}
                  {t.name === "Growth" && (
                    <Image
                      src="/arrow-trend-up-solid-full.svg"
                      alt=""
                      width={20}
                      height={20}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  )}
                  {t.name === "Systems" && (
                    <Image
                      src="/gears-solid-full.svg"
                      alt=""
                      width={20}
                      height={20}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  )}
                </div>
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

      {/* new: how it works */}
      <NxProcess />

      {/* client case studies (yours, unchanged except one colour variable) */}
      <div style={{ maxWidth: 1120, margin: "70px auto 0", padding: "0 24px" }}>
        <Reveal>
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
              Our Clients
            </div>
            <h2 style={{ fontWeight: 700, fontSize: 24, margin: "0 0 24px" }}>
              Businesses we work with
            </h2>
            <div className="tier-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
              {CLIENTS.map((client, i) => (
                <Reveal key={client.name} delay={i * 110}>
                  <GlassCard style={{ padding: 24, height: "100%" }}>
                    <a
                      href={client.href}
                      target={client.href ? "_blank" : undefined}
                      rel={client.href ? "noopener noreferrer" : undefined}
                      aria-label={client.href ? `Visit ${client.name} website (opens in a new tab)` : undefined}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {client.logo ? (
                        <div
                          style={{
                            width: 112,
                            height: 112,
                            borderRadius: 12,
                            overflow: "hidden",
                            background: "#fff",
                            marginBottom: 16,
                          }}
                        >
                          <Image
                            src={client.logo}
                            alt={client.alt!}
                            width={112}
                            height={112}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          />
                        </div>
                      ) : (
                        <div
                          aria-hidden="true"
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 9,
                            background: "linear-gradient(135deg, var(--violet), var(--cyan))",
                            marginBottom: 16,
                          }}
                        />
                      )}
                      <div style={{ fontWeight: 700, fontSize: 17 }}>{client.name}</div>

                      <p
                        style={{
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: "var(--text-muted)",
                          marginTop: 10,
                        }}
                      >
                        {client.description}
                      </p>
                    </a>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* new: questions and closing call to action */}
      <NxFaq />
      <NxFinalCta />
    </div>
  );
}
