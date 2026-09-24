"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";
import type { Service } from "@/data/services";

export function ServiceCard({
  service,
  defaultOpen = false,
}: {
  service: Service;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = service.icon;
  const [g1, g2] = service.gradient;

  return (
    <div
      className="glass glass-hover"
      style={{ overflow: "hidden", gridColumn: open ? "1 / -1" : "auto" }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg, ${g1}, ${g2})` }} />
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "18px 20px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${g1}, ${g2})`,
          }}
        >
          <Icon size={18} color="#0B0714" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15 }}>
            {service.name}
          </div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 12,
              color: "var(--text-muted)",
              marginTop: 2,
            }}
          >
            {service.summary}
          </div>
        </div>
        <ChevronDown
          size={18}
          color="var(--text-faint)"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
          }}
        />
      </div>

      {open && (
        <div
          className="tier-grid"
          style={{
            padding: "4px 20px 24px",
            display: "grid",
            gridTemplateColumns: `repeat(${service.tiers.length}, 1fr)`,
            gap: 16,
          }}
        >
          {service.tiers.map((t) => (
            <div
              key={t.name}
              style={{
                borderRadius: 12,
                border: "1px solid var(--surface-border)",
                background: "rgba(255,255,255,0.02)",
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 12,
                }}
              >
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13.5 }}>
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: 11.5,
                    color: g2,
                    fontWeight: 700,
                  }}
                >
                  {t.price}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {t.items.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 8,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 12.5,
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: g1, flexShrink: 0 }}>—</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {service.note && (
            <div
              style={{
                gridColumn: "1 / -1",
                fontFamily: "Manrope, sans-serif",
                fontSize: 11.5,
                color: "var(--text-faint)",
                fontStyle: "italic",
                marginTop: 2,
              }}
            >
              {service.note}
            </div>
          )}
          <div style={{ gridColumn: "1 / -1" }}>
            <Button variant="ghost" href="/contact" style={{ padding: "9px 16px" }}>
              Ask about {service.name}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
