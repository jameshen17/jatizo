import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "JATIZO | Woven apparel development and production support",
  description:
    "Fashion-led woven apparel development and production support for retail-facing teams, from product direction to shipment readiness."
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
    </html>
  );
}
