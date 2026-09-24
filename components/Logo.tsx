import React from "react";

export function Mark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="brand-mark">
      <rect x="50" y="6" width="62" height="62" rx="6" transform="rotate(45 50 37)" fill="var(--violet-deep)" />
      <rect x="42" y="14" width="46" height="46" rx="5" transform="rotate(45 42 37)" fill="var(--violet)" />
      <rect x="46" y="42" width="30" height="30" rx="4" transform="rotate(45 46 57)" fill="var(--cyan)" />
    </svg>
  );
}

export function Logo({ withWord = true, size = 30 }: { withWord?: boolean; size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Mark size={size} />
      {withWord && (
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>
            nyxo
          </div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 10,
              color: "var(--text-faint)",
              letterSpacing: "0.2em",
              marginTop: 1,
            }}
          >
            solutions
          </div>
        </div>
      )}
    </div>
  );
}
