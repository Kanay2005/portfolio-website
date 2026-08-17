import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "./components/navbar";
import { site } from "./data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${site.name} | Portfolio`;

// Absolute on purpose: site.url already includes the GitHub Pages path prefix,
// so resolving a relative path against metadataBase would repeat it.
const ogImage = `${site.url}${site.profileImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    type: "profile",
    title,
    description: site.description,
    url: site.url,
    siteName: title,
    images: [{ url: ogImage, width: 640, height: 640, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
