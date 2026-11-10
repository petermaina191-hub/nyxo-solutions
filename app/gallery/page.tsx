import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery | Nyxo Solutions",
  description: "Explore Nyxo Solutions campaign videos and posters for practical digital services.",
};

const POSTERS = [
  {
    src: "/nyxo-campaign-poster-1.jpeg",
    alt: "Nyxo Solutions promotion for businesses still taking orders by phone and notebook",
    width: 720,
    height: 1280,
  },
  {
    src: "/nyxo-campaign-poster-2.jpeg",
    alt: "Nyxo Solutions poster showing digital services including websites, online stores, IT support and networking",
    width: 1024,
    height: 1280,
  },
  {
    src: "/nyxo-campaign-poster-3.jpeg",
    alt: "Nyxo Solutions poster promoting online catalogues and WhatsApp checkout",
    width: 1024,
    height: 1280,
  },
  {
    src: "/nyxo-campaign-poster-4.jpeg",
    alt: "Nyxo Solutions poster explaining the 50 percent project deposit and payment process",
    width: 1024,
    height: 1280,
  },
];

export default function GalleryPage() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px 60px" }}>
      <div style={{ maxWidth: 700, marginBottom: 36 }}>
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 12,
            color: "var(--cyan-soft)",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Nyxo in action
        </div>
        <h1 className="fade-up" style={{ fontWeight: 800, fontSize: 36, margin: "0 0 14px" }}>
          Gallery
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
          A look at how we help businesses move their work online and make everyday operations simpler.
        </p>
      </div>

      <h2 style={{ fontWeight: 700, fontSize: 22, margin: "0 0 16px" }}>Campaign videos</h2>
      <div className="gallery-video-grid" style={{ marginBottom: 44 }}>
        <Reveal>
          <GlassCard hover={false} spotlight={false} style={{ padding: 16, height: "100%" }}>
            <video
              controls
              preload="metadata"
              playsInline
              poster="/nyxo-campaign-poster-1.jpeg"
              aria-label="Nyxo Solutions advert video"
              style={{ display: "block", width: "100%", maxHeight: 620, borderRadius: 12, background: "#090612" }}
            >
              <source src="/nyxo-advert-video.mp4" type="video/mp4" />
              Your browser does not support the video player.
            </video>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: "14px 4px 2px" }}>
              Practical websites, online stores, and digital systems for your business.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal delay={100}>
          <GlassCard hover={false} spotlight={false} style={{ padding: 16, height: "100%" }}>
            <video
              controls
              preload="none"
              playsInline
              poster="/nyxo-campaign-poster-2.jpeg"
              aria-label="Second Nyxo Solutions advert video"
              style={{ display: "block", width: "100%", maxHeight: 620, borderRadius: 12, background: "#090612" }}
            >
              <source src="/nyxo-advert-video-2.mp4" type="video/mp4" />
              Your browser does not support the video player.
            </video>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: "14px 4px 2px" }}>
              More from Nyxo Solutions.
            </p>
          </GlassCard>
        </Reveal>
      </div>

      <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
        <div>
          <h2 style={{ fontWeight: 700, fontSize: 22, margin: "0 0 6px" }}>Campaign posters</h2>
          <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
            Browse the services and project process we share with clients.
          </p>
        </div>
        <Button href="/contact" style={{ whiteSpace: "nowrap" }}>Start a project</Button>
      </div>

      <div className="gallery-grid">
        {POSTERS.map((poster, index) => (
          <Reveal key={poster.src} delay={index * 80}>
            <GlassCard hover={false} spotlight={false} style={{ padding: 10, height: "100%" }}>
              <a href={poster.src} target="_blank" rel="noopener noreferrer" aria-label={`Open poster ${index + 1} full size in a new tab`}>
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={poster.width}
                  height={poster.height}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: 10 }}
                />
              </a>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
