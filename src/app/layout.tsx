import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSiteConfig } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Proton Solutions | Engineering Intelligence. Empowering Tomorrow.",
    template: "%s | Proton Solutions",
  },
  description:
    "Proton Solutions is an artificial intelligence, software engineering, and automation technology company building intelligent solutions for a smarter future.",
  keywords: [
    "Proton Solutions",
    "Artificial Intelligence",
    "Agentic AI",
    "Multi-Agent Systems",
    "AI Automation",
    "Custom Software Engineering",
    "Digital Transformation",
  ],
  openGraph: {
    title: "Proton Solutions | Engineering Intelligence. Empowering Tomorrow.",
    description:
      "Building Intelligent Solutions for a Smarter Future through artificial intelligence, automation, and innovative software engineering.",
    type: "website",
    siteName: "Proton Solutions",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = await getSiteConfig();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer siteConfig={siteConfig} />
      </body>
    </html>
  );
}
