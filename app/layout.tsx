import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { TechBackdrop } from "@/components/TechBackdrop";

export const metadata: Metadata = {
  title: "Nyxo Solutions",
  description: "Technology and digital systems for Kenyan SMEs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
