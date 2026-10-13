import React from "react";

export type LegalBlock = string | string[]; // string = paragraph, string[] = bullet list
export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
};

// Shared layout for long-form legal pages (Terms of Use, Service Agreement).
export function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 40px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 34, margin: "0 0 8px" }}>{title}</h1>
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 12.5,
          color: "var(--text-faint)",
          marginBottom: intro ? 20 : 28,
        }}
      >
        Last updated: {lastUpdated}
      </p>

      {intro && (
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 14.5,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          {intro}
        </p>
      )}

      <nav
        aria-label="Sections"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 18px",
          marginBottom: 40,
          paddingBottom: 24,
          borderBottom: "1px solid var(--surface-border)",
        }}
      >
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="nav-link"
            style={{ fontSize: 12.5 }}
          >
            {i + 1}. {s.title}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} style={{ scrollMarginTop: 90 }}>
            <h2 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>
              {i + 1}. {s.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {s.blocks.map((b, j) =>
                Array.isArray(b) ? (
                  <ul
                    key={j}
                    style={{
                      margin: 0,
                      paddingLeft: 20,
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {b.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p
                    key={j}
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {b}
                  </p>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
