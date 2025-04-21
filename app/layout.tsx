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

export const metadata: Metadata = {
  title: "WordSpark",
  generator: "Next.js",
  applicationName: "WordSpark",
  referrer: "origin-when-cross-origin",
  keywords: ["WordSpark", "AI", "Tweet Generator", "Photo Caption Generator"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "WordSpark",
    description:
      "Transform your ideas into engaging tweets or photo captions with WordSpark, an AI-powered Next.js application designed to make content creation effortless and fun.",
    type: "website",
    url: "https://captions-and-tweet-generator.vercel.app",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordSpark",
    description:
      "Transform your ideas into engaging tweets or photo captions with WordSpark, an AI-powered Next.js application designed to make content creation effortless and fun.",
    creator: "@1stgodchoco",
  },
  description:
    "Transform your ideas into engaging tweets or photo captions with WordSpark, an AI-powered Next.js application designed to make content creation effortless and fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#040506]`}
      >
        {children}
      </body>
    </html>
  );
}
