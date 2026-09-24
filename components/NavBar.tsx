"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderRadius: 0,
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Logo />
        </Link>

        <div className="nav-links-desktop" style={{ display: "flex", gap: 28 }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions-desktop" style={{ display: "flex", gap: 10 }}>
          <Button variant="ghost" href="/login" style={{ padding: "9px 16px" }}>
            Log in
          </Button>
          <Button href="/signup" style={{ padding: "9px 16px" }}>
            Get started
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile-panel"
          style={{ padding: "0 24px 20px", flexDirection: "column", gap: 14 }}
        >
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Button variant="ghost" href="/login" style={{ flex: 1 }}>
              Log in
            </Button>
            <Button href="/signup" style={{ flex: 1 }}>
              Get started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
