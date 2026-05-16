import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const plexSans = localFont({
  variable: "--font-plex-sans",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/ibm-plex-sans/IBMPlexSans-Variable.ttf",
      style: "normal",
      weight: "100 700",
    },
    {
      path: "../assets/fonts/ibm-plex-sans/IBMPlexSans-Italic-Variable.ttf",
      style: "italic",
      weight: "100 700",
    },
  ],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WD Group",
  description: "WD Group website powered by Vercel and Sanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexArabic.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
