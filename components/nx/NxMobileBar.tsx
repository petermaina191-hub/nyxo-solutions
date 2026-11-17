"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDE_EXACT = ["/contact", "/login", "/signup", "/forgot-password", "/reset-password"];
const HIDE_PREFIX = ["/dashboard", "/admin"];

// Phones only: a bottom bar with the two actions a visitor most often wants,
// shown after the first scroll. Hidden on forms, sign-in and account pages.
export function NxMobileBar() {
  const pathname = usePathname() || "/";
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 260);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDE_EXACT.includes(pathname) || HIDE_PREFIX.some((p) => pathname.startsWith(p))) {
    return null;
  }

  return (
    <div className={`nx-mbar ${show ? "nx-show" : ""}`} role="region" aria-label="Quick actions">
      <a
        className="nx-btn nx-btn-cyan"
        href="https://wa.me/254799550617?text=Hi%20Nyxo%2C%20I'd%20like%20to%20talk%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <Link className="nx-btn nx-btn-primary" href="/contact">Get a quote</Link>
    </div>
  );
}
