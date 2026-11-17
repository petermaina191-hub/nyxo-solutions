import type { Metadata } from "next";
import "./globals.css";
import "./nx-premium.css";
import { NavBar } from "@/components/NavBar";
import { NxFooter } from "@/components/nx/NxFooter";
import { NxMobileBar } from "@/components/nx/NxMobileBar";
import { TechBackdrop } from "@/components/TechBackdrop";
import { CinematicOverlay } from "@/components/CinematicOverlay";

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
        <CinematicOverlay />
        <div className="grain" />
        <NavBar />
        <main>{children}</main>
        <NxFooter />
        <NxMobileBar/>
      </body>
    </html>
  );
}
