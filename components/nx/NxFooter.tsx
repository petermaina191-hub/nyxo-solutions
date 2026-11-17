import React from "react";
import Link from "next/link";

const SERVICES = [
  "Website Development", "IT Support", "Networking",
   "Systems", "See all services",
];
const COMPANY = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const ACCOUNT = [
  { href: "/login", label: "Log in" },
  { href: "/signup", label: "Create account" },
];

const icon = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

// Footer pattern: large closing statement, dark grid of links, contact block
// and an oversized wordmark. All current links and contact details are kept.
export function NxFooter() {
  return (
    <footer className="nx-foot">
      <div className="nx-wrap">
        <div className="nx-foot-cta">
          <p className="nx-foot-big">Let&apos;s build what your business runs on.</p>
          <Link href="/contact" className="nx-btn nx-btn-primary">Start a project</Link>
        </div>

        <div className="nx-foot-grid">
          <div className="nx-foot-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="28" height="28" viewBox="0 0 100 100" aria-hidden="true">
                <rect x="50" y="6" width="62" height="62" rx="6" transform="rotate(45 50 37)" fill="var(--violet-deep)" />
                <rect x="42" y="14" width="46" height="46" rx="5" transform="rotate(45 42 37)" fill="var(--violet)" />
                <rect x="46" y="42" width="30" height="30" rx="4" transform="rotate(45 46 57)" fill="var(--cyan)" />
              </svg>
              <span style={{ font: "800 20px 'Sora', sans-serif", letterSpacing: "-0.02em", color: "var(--text)" }}>nyxo</span>
              <span style={{ font: "500 11px 'Manrope', sans-serif", letterSpacing: "0.24em", color: "var(--text-faint)" }}>solutions</span>
            </div>
            <p>Practical technology solutions for businesses: websites, systems, and the support to keep them running.</p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="nx-foot-two">
              {SERVICES.map((s) => (
                <li key={s}><Link href="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>{COMPANY.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>

          <div>
            <h4>Account</h4>
            <ul>{ACCOUNT.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="nx-contact">
              <a href="mailto:nyxosolutions@gmail.com">
                <svg {...icon} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                nyxosolutions@gmail.com
              </a>
              <a href="tel:+254799550617">
                <svg {...icon} aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
                +254 799 550 617
              </a>
              <div style={{ display: "flex", gap: 9 }}>
                <svg {...icon} aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>P.O. Box 00300-00100, Nairobi, Kenya<br />Remote Office</span>
              </div>
            </div>
          </div>
        </div>

        <div className="nx-foot-bottom">
          <span>&copy; {new Date().getFullYear()} Nyxo Solutions</span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/service-agreement">Service Agreement</Link>
            <a href="#">Back to top &uarr;</a>
          </nav>
        </div>
      </div>
      <div className="nx-wordmark" aria-hidden="true">nyxo</div>
    </footer>
  );
}
