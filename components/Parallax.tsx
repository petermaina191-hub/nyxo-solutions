"use client";

import React, { useEffect, useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  strength?: number;
  style?: React.CSSProperties;
};

export function Parallax({
  children,
  strength = 12,
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const hasMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasMouse || reduceMotion) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    function onMove(e: PointerEvent) {
      pointerX = e.clientX;
      pointerY = e.clientY;

      if (frame) return;

      frame = requestAnimationFrame(() => {
        frame = 0;

        const element = ref.current;
        if (!element) return;

        const x = (pointerX / window.innerWidth - 0.5) * 2;
        const y = (pointerY / window.innerHeight - 0.5) * 2;

        element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      });
    }

    window.addEventListener("pointermove", onMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", onMove);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      style={{
        transition: "transform 0.3s ease-out",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}