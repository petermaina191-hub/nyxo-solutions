import React from "react";
import { NxReveal } from "./NxReveal";

const STEPS = [
  { t: "Tell us what you need", p: "Send a short message or chat on WhatsApp. No forms to fight with." },
  { t: "Get a written quote", p: "Scope, price and timeline in writing. You start with a 50% deposit." },
  { t: "We build it", p: "You review the work and ask for changes within the agreed scope." },
  { t: "Launch and support", p: "Pay the balance, go live, and get support after launch." },
];

export function NxProcess() {
  return (
    <section className="nx-section">
      <div className="nx-wrap">
        <NxReveal>
          <div className="nx-eyebrow">How it works</div>
          <h2 className="nx-h2">Four steps, no surprises.</h2>
          <p className="nx-lead">You always know what you are paying for and what happens next.</p>
        </NxReveal>
        <ol className="nx-steps" style={{ listStyle: "none", padding: 0 }}>
          {STEPS.map((s, i) => (
            <li key={s.t}>
              <NxReveal delay={i * 100}>
                <div className="nx-step">
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                </div>
              </NxReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
