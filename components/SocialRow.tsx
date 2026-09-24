import React from "react";
import { Github, Facebook, Linkedin, Instagram } from "lucide-react";

function GoogleIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.4 0 6.4 1.2 8.8 3.5l6.5-6.5C35.3 2.5 30 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.6 5.9C12.1 13 17.5 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-17.4z"
      />
      <path
        fill="#FBBC05"
        d="M10.2 19.1a14.4 14.4 0 0 0 0 9.8l-7.6 5.9a24 24 0 0 1 0-21.6l7.6 5.9z"
      />
      <path
        fill="#34A853"
        d="M24 48c6 0 11.3-2 15.1-5.4l-7.4-5.7c-2 1.4-4.6 2.2-7.7 2.2-6.5 0-11.9-3.5-13.8-8.6l-7.6 5.9C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  );
}

const PROVIDERS = [
  { icon: <GoogleIcon />, label: "Google" },
  { icon: <Github size={17} />, label: "GitHub" },
  { icon: <Facebook size={17} />, label: "Facebook" },
  { icon: <Linkedin size={17} />, label: "LinkedIn" },
  { icon: <Instagram size={17} />, label: "Instagram" },
];

// Decorative for now — wire each button's onClick to your Supabase OAuth
// call (supabase.auth.signInWithOAuth({ provider: 'google' }), etc.)
// once auth is connected.
export function SocialRow() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {PROVIDERS.map((p) => (
        <button key={p.label} type="button" className="social-btn">
          {p.icon}
          {p.label}
        </button>
      ))}
    </div>
  );
}
