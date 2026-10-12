import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { TechBackdrop } from "@/components/TechBackdrop";

export const metadata: Metadata = {
  title: "Nyxo Solutions",
  description: "Technology and digital systems for Kenyan SMEs.",
};

// Runs before React hydrates so the saved theme applies immediately —
// without this, the page would flash dark before switching to light.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem("nyxo-theme");
    if (saved === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <TechBackdrop />
        <div className="grain" />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
