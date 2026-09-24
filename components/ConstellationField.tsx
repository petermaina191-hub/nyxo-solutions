"use client";

import React, { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

type ConstellationFieldProps = {
  style?: React.CSSProperties;
  linkColor?: string;
  dotColor?: string;
};

export function ConstellationField({
  style,
  linkColor = "124,77,255",
  dotColor = "143,242,242",
}: ConstellationFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf: number | null = null;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.max(20, Math.floor((width * height) / 9000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.3 + 0.6,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      const linkDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx!.strokeStyle = `rgba(${linkColor}, ${0.16 * (1 - dist / linkDist)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${dotColor}, 0.55)`;
        ctx!.fill();
      }

      if (!prefersReduced) {
        raf = requestAnimationFrame(step);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [linkColor, dotColor]);

  return <canvas ref={canvasRef} style={{ display: "block", ...style }} />;
}
