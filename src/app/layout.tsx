import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creatorverse 2026 | Creating The Future Of The Creator Economy",
  description: "Join 500+ creators, investors, and brands in Enugu for Creatorverse 2026. The premier event for the creator economy.",
  keywords: ["Creatorverse", "Creator Economy", "Enugu", "Nigeria", "Conference", "Tech"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
