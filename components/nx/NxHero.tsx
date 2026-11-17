import React from "react";
import Link from "next/link";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

// Hero: dark glow, large type, two clear actions, and a product-style
// "order desk" preview. The preview is an illustration built in plain
// HTML/CSS (no images, no video), so it stays light on phones.
// Pass your existing <ConstellationField /> as `background` to keep it.
export function NxHero({ background }: { background?: React.ReactNode }) {
  return (
    <section className="nx-hero">
      <div className="nx-hero-bg" aria-hidden="true" />
      <div className="nx-hero-lines" aria-hidden="true" />
      {background}
      <div className="nx-wrap nx-hero-grid">
        <div>

          <h1 className="nx-title">
            <span className="nx-line" style={d(120)}>Websites and systems</span>
            <span className="nx-line" style={d(300)}>your business</span>
            <span className="nx-line nx-grad" style={d(480)}>runs on.</span>
          </h1>

          <p className="nx-sub nx-rise" style={d(760)}>
            Nyxo Solutions builds practical technology for businesses, from your
            first website to the systems that keep stock, staff, and sales in sync.
          </p>

          <div className="nx-cta-row nx-rise" style={d(940)}>
            <Link href="/contact" className="nx-btn nx-btn-primary">Start a project</Link>
            <Link href="/services" className="nx-btn nx-btn-ghost">See how we work</Link>
          </div>

          <ul className="nx-trust nx-rise" style={d(1100)}>
            <li>Fixed-scope packages</li>
            <li>50% to start, 50% on completion</li>
            <li>Support after launch</li>
          </ul>
        </div>

        <div className="nx-stage nx-rise" style={d(500)} aria-hidden="true">
      
          <div className="nx-mock">
            <div className="nx-mock-top">
              <i /><i /><i />
              Order desk
              <span>Illustrative sample data</span>
            </div>
            <div className="nx-mock-body">
              <div className="nx-row">
                <div className="nx-ico" />
                <div><b>Item 1 &times; 2, size ?</b><small>via WhatsApp</small></div>
                <span className="nx-chip nx-chip-new">New</span>
              </div>
              <div className="nx-row">
                <div className="nx-ico" />
                <div><b>Item 2 &times; 5</b><small>Quote sent</small></div>
                <span className="nx-chip nx-chip-wait">Awaiting deposit</span>
              </div>
              <div className="nx-row">
                <div className="nx-ico" />
                <div><b>Item 3 &times; 10</b><small>Outlet pick-up</small></div>
                <span className="nx-chip nx-chip-ok">Ready</span>
              </div>
              <div className="nx-stock">
                <p>Stock across outlets: My stock</p>
                <div className="nx-bar"><em>Outlet A</em><span><i style={{ width: "78%" }} /></span></div>
                <div className="nx-bar"><em>Outlet B</em><span><i style={{ width: "46%" }} /></span></div>
                <div className="nx-bar"><em>Outlet C</em><span><i style={{ width: "88%" }} /></span></div>
              </div>
            </div>
          </div>
          <div className="nx-float nx-float-a">
            <span className="nx-ok">&#8599;</span> Project status: in progress
          </div>
        </div>
      </div>
    </section>
  );
}
