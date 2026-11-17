"use client";

import React, { useEffect, useRef, useState } from "react";

// Fades and lifts its children into place the first time they scroll into
// view. Uses IntersectionObserver (no scroll listener) and stops watching
// once shown, so it costs almost nothing on phones.
export function NxReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
      className={`nx-reveal ${seen ? "nx-in" : ""} ${className}`.trim()}
      style={{ "--nx-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
