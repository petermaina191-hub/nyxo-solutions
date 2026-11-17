import React from "react";
import Link from "next/link";
import { NxReveal } from "./NxReveal";

export function NxFinalCta() {
  return (
    <section className="nx-section" style={{ paddingTop: 24 }}>
      <div className="nx-wrap">
        <NxReveal>
          <div className="nx-cta">
            <h2 className="nx-h2">Ready to move your business online?</h2>
            <p className="nx-lead">Tell us what you need. A short message is enough, and we will follow up with next steps.</p>
            <div className="nx-cta-row">
              <Link href="/contact" className="nx-btn nx-btn-primary">Start a project</Link>
              <a
                className="nx-btn nx-btn-cyan"
                href="https://wa.me/254799550617?text=Hi%20Nyxo%2C%20I'd%20like%20to%20talk%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </NxReveal>
      </div>
    </section>
  );
}
