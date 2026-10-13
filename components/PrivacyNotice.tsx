import React from "react";
import Link from "next/link";

type PrivacyNoticeProps = {
  purpose: string;
};

export function PrivacyNotice({ purpose }: PrivacyNoticeProps) {
  return (
    <p
      style={{
        fontFamily: "Manrope, sans-serif",
        fontSize: 11.5,
        lineHeight: 1.7,
        color: "var(--text-faint)",
        margin: 0,
      }}
    >
      {purpose} Read our{" "}
      <Link
        href="/privacy"
        style={{
          color: "var(--cyan-soft)",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Privacy Policy
      </Link>{" "}
      to learn how we handle your personal information.
    </p>
  );
}