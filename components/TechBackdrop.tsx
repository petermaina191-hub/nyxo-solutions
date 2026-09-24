import React from "react";

/**
 * Site-wide ambient background: a faint blurred circuit/graph-paper grid
 * plus two slow-drifting glow orbs. Everything here is plain CSS
 * (background-image + a `transform`-only keyframe animation), so it's
 * GPU-composited and costs effectively nothing on CPU or battery —
 * deliberately chosen over a video background for that reason.
 */
export function TechBackdrop() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      <div className="tech-grid" />
      <div
        className="orb orb-slow"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--violet-deep) 0%, transparent 70%)",
          filter: "blur(10px)",
          opacity: 0.8,
        }}
      />
      <div
        className="orb"
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--cyan) 0%, transparent 70%)",
          filter: "blur(40px)",
          opacity: 0.12,
        }}
      />
    </div>
  );
}
