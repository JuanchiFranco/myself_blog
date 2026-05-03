import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://myself-blog-three.vercel.app'),
  title: {
    default: "Ecos de Tinta | Blog Colaborativo",
    template: "%s | Ecos de Tinta",
  },
  description: "Un espacio colectivo para documentar ideas, reflexiones, poesías y aprendizajes.",
  keywords: ["pensamientos", "reflexiones", "poesía", "poemas", "escribir", "blog colaborativo"],
  openGraph: {
    title: "Ecos de Tinta | Blog Colaborativo",
    description: "Un espacio colectivo para documentar ideas, reflexiones, poesías y aprendizajes.",
    url: "/",
    siteName: "Ecos de Tinta",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecos de Tinta | Blog Colaborativo",
    description: "Un espacio colectivo para documentar ideas, reflexiones, poesías y aprendizajes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
