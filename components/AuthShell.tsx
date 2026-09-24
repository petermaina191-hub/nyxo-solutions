import React from "react";
import Link from "next/link";
import { GlassCard } from "./GlassCard";
import { SocialRow } from "./SocialRow";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  switchText: string;
  switchLabel: string;
  switchHref: string;
};

export function AuthShell({
  title,
  subtitle,
  children,
  switchText,
  switchLabel,
  switchHref,
}: AuthShellProps) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 66px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
      }}
    >
      <GlassCard hover={false} style={{ padding: 36, width: 380 }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontWeight: 700, fontSize: 22 }}>{title}</h1>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 6,
            }}
          >
            {subtitle}
          </p>
        </div>

        {children}

        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--surface-border)" }} />
          <span style={{ fontFamily: "Manrope, sans-serif", fontSize: 11.5, color: "var(--text-faint)" }}>
            or continue with
          </span>
          <div style={{ flex: 1, height: 1, background: "var(--surface-border)" }} />
        </div>

        <SocialRow />

        <div
          style={{
            marginTop: 22,
            textAlign: "center",
            fontFamily: "Manrope, sans-serif",
            fontSize: 13,
            color: "var(--text-muted)",
          }}
        >
          {switchText}{" "}
          <Link href={switchHref} style={{ color: "var(--cyan-soft)", fontWeight: 700 }}>
            {switchLabel}
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
