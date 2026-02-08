import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export const metadata: Metadata = {
  title: "Suraj Kumar | Graphic Designer & Digital Marketer",
  description:
    "Creative designer and digital marketer with 2+ years of experience driving engagement through data-driven visual storytelling.",
  keywords:
    "Graphic Design, UI/UX, Branding, Video Editing, Social Media Strategy, SEO",
  authors: [{ name: "Suraj Kumar" }],
  openGraph: {
    title: "Suraj Kumar | Graphic Designer & Digital Marketer",
    description:
      "Creative designer and digital marketer with 2+ years of experience driving engagement through data-driven visual storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased relative">

        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="267ec776-ae50-4232-8ec0-f20f41972c07"
        />

        <ErrorReporter />

        {/* Background */}
        <ParallaxBackground />

        {/* Cursor (must not block clicks) */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation />

        {/* Page content */}
        <main className="relative z-20 min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
