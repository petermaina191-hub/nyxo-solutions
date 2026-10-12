"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { createClient } from "@/lib/supabase/client";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    let active = true;

    async function loadSession() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!active) return;

      setUserEmail(user?.email ?? null);

      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        if (active) setIsAdmin(profile?.role === "admin");
      } else {
        setIsAdmin(false);
      }
    }

    loadSession();
    const { data: listener } = supabase.auth.onAuthStateChange(() => loadSession());
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  const loggedIn = !!userEmail;

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
          gap: 16,
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

        <div className="nav-actions-desktop" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {loggedIn ? (
            <>
              {isAdmin && (
                <Button variant="ghost" href="/admin" style={{ padding: "9px 16px" }}>
                  Admin
                </Button>
              )}
              <Button variant="ghost" href="/dashboard" style={{ padding: "9px 16px" }}>
                Dashboard
              </Button>
              <Button variant="ghost" onClick={handleLogout} style={{ padding: "9px 16px" }}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" href="/login" style={{ padding: "9px 16px" }}>
                Log in
              </Button>
              <Button href="/signup" style={{ padding: "9px 16px" }}>
                Get started
              </Button>
            </>
          )}
          <ThemeToggle />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="nav-mobile-header-actions">
          <button
            aria-label="Toggle menu"
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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

          {loggedIn ? (
            <>
              {isAdmin && (
                <Link href="/admin" className="nav-link" onClick={() => setOpen(false)}>
                  Admin
                </Link>
              )}
              <Link href="/dashboard" className="nav-link" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
              <div style={{ display: "flex", gap: 10, marginTop: 6, alignItems: "center" }}>
                <Button variant="ghost" onClick={handleLogout} style={{ flex: 1 }}>
                  Log out
                </Button>
                <ThemeToggle />
              </div>
            </>
          ) : (
            <div style={{ display: "flex", gap: 10, marginTop: 6, alignItems: "center" }}>
              <Button variant="ghost" href="/login" style={{ flex: 1 }}>
                Log in
              </Button>
              <Button href="/signup" style={{ flex: 1 }}>
                Get started
              </Button>
              <ThemeToggle />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
