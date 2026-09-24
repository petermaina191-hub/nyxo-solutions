"use client";

import React, { useRef } from "react";

type GlassCardProps = {
  children: React.ReactNode;
  hover?: boolean;
  spotlight?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * The spotlight effect updates two CSS custom properties (--mx, --my) on
 * mousemove, which a ::before radial-gradient in globals.css reads. This is
 * event-driven (fires only when the cursor actually moves over the card),
 * not a requestAnimationFrame loop — cheap on CPU/battery by design.
 */
export function GlassCard({
  children,
  hover = true,
  spotlight = true,
  className = "",
  style,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const cls = [
    "glass",
    hover ? "glass-hover" : "",
    spotlight ? "glass-spotlight" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls} style={style} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
