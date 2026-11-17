import React from "react";
import { NxReveal } from "./NxReveal";

const BEFORE = [
  "Orders taken by phone call and notebook",
  "Stock counted by hand, outlet by outlet",
  "Project updates chased over WhatsApp",
  "A website nobody can update",
];
const AFTER = [
  "An online catalogue with WhatsApp checkout",
  "Stock and sales you can see in one place",
  "Progress tracked in your own dashboard",
  "A support plan that keeps it running",
];

export function NxProblem() {
  return (
    <section className="nx-section">
      <div className="nx-wrap">
        <NxReveal>
          <div className="nx-eyebrow">Why Nyxo</div>
          <h2 className="nx-h2">From scattered to one system.</h2>
          <p className="nx-lead">
            Most small businesses do not need more software. They need what they
            already do to work together.
          </p>
        </NxReveal>
        <div className="nx-compare">
          <NxReveal>
            <div className="nx-panel nx-panel-before">
              <h3>Before</h3>
              <ul>{BEFORE.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </NxReveal>
          <NxReveal delay={120}>
            <div className="nx-panel nx-panel-after">
              <h3>With Nyxo</h3>
              <ul>{AFTER.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </NxReveal>
        </div>
      </div>
    </section>
  );
}
