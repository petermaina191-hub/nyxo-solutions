import React from "react";

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
};

export function Field({ icon, ...rest }: FieldProps) {
  return (
    <div style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          left: 14,
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-faint)",
          display: "flex",
          pointerEvents: "none",
        }}
      >
        {icon}
      </span>
      <input
        {...rest}
        className="nyxo-field"
        style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px 12px 42px" }}
      />
    </div>
  );
}
