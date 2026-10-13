"use client";

import React, { useEffect, useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  strength?: number; // pixels of movement; use a negative number to move the opposite way
  style?: React.CSSProperties;
};

// Nudges its children slightly as the mouse moves, which gives a sense of
// depth. Only runs on devices with a real mouse and when motion is allowed,
// so phones and "reduce motion" users pay nothing for it.
export function Parallax({ children, strength = 12, style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasMouse || reduceMotion) return;

    let frame = 0;
    function onMove(e: PointerEvent) {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      style={{ transition: "transform 0.3s ease-out", willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}
