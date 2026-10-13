import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES } from "@/data/services";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <div style={{ borderTop: "1px solid var(--surface-border)", marginTop: 100 }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "56px 24px 32px",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr 1.2fr",
          gap: 32,
        }}
      >
        <div>
          <Logo size={26} />
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 14,
              lineHeight: 1.6,
              maxWidth: 260,
            }}
          >
            Practical technology for Kenyan SMEs — websites, systems, and the
            support to keep them running.
          </p>
        </div>

        <div>
          <div
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              marginBottom: 14,
            }}
          >
            Services
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href="/services"
                className="nav-link"
                style={{ fontSize: 12.5, color: "var(--text-muted)" }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              marginBottom: 14,
            }}
          >
            Quick links
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ fontSize: 12.5, color: "var(--text-muted)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              marginBottom: 14,
            }}
          >
            Contact
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 11,
              fontFamily: "Manrope, sans-serif",
              fontSize: 12.5,
              color: "var(--text-muted)",
            }}
          >
            <a
              href="mailto:nyxosolutions@gmail.com"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
              className="nav-link"
            >
              <Mail size={14} style={{ flexShrink: 0 }} />
              nyxosolutions@gmail.com
            </a>
            <a
              href="tel:+254799550617"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
              className="nav-link"
            >
              <Phone size={14} style={{ flexShrink: 0 }} />
              +254 799 550 617
            </a>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <MapPin size={14} style={{ marginTop: 2, flexShrink: 0 }} />
              <span>
                P.O. Box 00300-00100, Nairobi, Kenya
                <br />
                Operating virtually — no physical office yet
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--surface-border)" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "20px 24px",
            fontFamily: "Manrope, sans-serif",
            fontSize: 12,
            color: "var(--text-faint)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Nyxo Solutions</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
            <Link href="/privacy" className="nav-link" style={{ fontSize: 12 }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="nav-link" style={{ fontSize: 12 }}>
              Terms of Use
            </Link>
            <Link href="/service-agreement" className="nav-link" style={{ fontSize: 12 }}>
              Service Agreement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
