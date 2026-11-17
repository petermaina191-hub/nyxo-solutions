import React from "react";
import { NxReveal } from "./NxReveal";

// Only facts that are already stated on your site.
const STATS = [
  { value: "11", label: "services, packaged in clear tiers" },
  { value: "7+", label: "projects completed" },
  { value: "50%", label: "deposit to start, balance on completion" },
  { value: "30-60", label: "days of support after launch, by package" },
];

export function NxStats() {
  return (
    <section className="nx-section" style={{ paddingTop: 56, paddingBottom: 24 }}>
      <div className="nx-wrap">
        <NxReveal>
          <div className="nx-stats">
            {STATS.map((s) => (
              <div className="nx-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </NxReveal>
      </div>
    </section>
  );
}
