import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { coreKeywords, pages, seo, siteUrl } from "@/data/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digitalizer | AI Website Design, Custom Software & UX in Houston",
    template: "%s | Digitalizer",
  },
  description: pages.home.description as string,
  keywords: coreKeywords,
  applicationName: seo.name,
  authors: [{ name: seo.legalName, url: siteUrl }],
  creator: seo.name,
  publisher: seo.legalName,
  category: "technology",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: siteUrl,
    siteName: seo.name,
    title: "Digitalizer | AI Website Design, Custom Software & UX in Houston",
    description: pages.home.description as string,
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalizer | AI Website Design, Custom Software & UX in Houston",
    description: pages.home.description as string,
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7370;-95.4794",
    ICBM: "29.7370, -95.4794",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
