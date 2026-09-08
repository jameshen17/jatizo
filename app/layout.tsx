import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "JATIZO | Women’s Woven Development & Production",
  description:
    "California-based women’s woven apparel development and production partner, supporting fashion teams from first sample through shipment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-canvas text-ink antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-1HVGEFJHZH" />
    </html>
  );
}
