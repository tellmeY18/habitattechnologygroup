import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// For Cloudflare Pages
const baseUrl =
  process.env.CF_PAGES_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://habitattechnologygroup.pages.dev"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Habitat Technology Group",
  description: "People's Movement for Sustainable Architecture",
  openGraph: {
    title: "Habitat Technology Group",
    description: "People's Movement for Sustainable Architecture",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1920,
        height: 900,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitat Technology Group",
    description: "People's Movement for Sustainable Architecture",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1920,
        height: 900,
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
