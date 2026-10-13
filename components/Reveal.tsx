"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

// Fades and lifts its children into place the first time they scroll into
// view. Uses IntersectionObserver (no scroll listener), so it costs almost
// nothing, and it stops watching once the element has appeared.
export function Reveal({ children, delay = 0, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "in-view" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
