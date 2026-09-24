"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "cyan";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  style?: React.CSSProperties;
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  style,
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
