import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <div style={{ borderTop: "1px solid var(--surface-border)", marginTop: 100 }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Logo size={24} />
        <div style={{ display: "flex", gap: 24 }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: 13 }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 12, color: "var(--text-faint)" }}>
          © {new Date().getFullYear()} Nyxo Solutions
        </div>
      </div>
    </div>
  );
}
