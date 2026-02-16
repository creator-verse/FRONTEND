import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creatorverse 2026 | Shaping The Future Of The Creator Economy",
  description: "Join 1000+ creators, investors, and brands in Enugu for Creatorverse 2026. The premier event for the creator economy.",
  keywords: ["Creatorverse", "Creator Economy", "Enugu", "Nigeria", "Conference", "Tech"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
