"use client";

import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { GlassCard } from "@/components/GlassCard";

export default function ServicesPage() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px 40px" }}>
      <h1 className="fade-up" style={{ fontWeight: 800, fontSize: 36, margin: "0 0 12px" }}>
        What we do
      </h1>
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 15,
          color: "var(--text-muted)",
          maxWidth: 520,
          lineHeight: 1.6,
          marginBottom: 40,
        }}
      >
        Every service is packaged in tiers, so you can see exactly what's
        included before you ask. Tap a service to open it.
      </p>

  
    <div
        className="services-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
      >
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.id} service={s} defaultOpen={i === 0} />
        ))}
      </div>
   
      <GlassCard hover={false} spotlight={false} style={{ padding: 28, marginTop: 30 }}>
        <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
          Every build includes an ongoing plan
        </div>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 13.5,
            color: "var(--text-muted)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: 0,
          }}
        >
          Hosting, updates, and support so your site keeps working after
          launch — not just on the day it goes live.
        </p>
      </GlassCard>
    </div>
  );
}
