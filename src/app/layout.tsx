import type { Metadata } from "next";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Islam24 — Accurate, Ad-Free Islamic App | Prayer Times & Offline Quran",
  description: "Your reliable, distraction-free companion for daily Islamic practices. Accurate prayer times, Qibla compass, complete offline Quran with translations, daily Azkar, and Zakat calculator.",
  keywords: [
    "islam24",
    "ad-free islamic app",
    "accurate prayer times",
    "athan app",
    "qibla compass",
    "offline quran",
    "azkar and dua",
    "zakat calculator",
    "salat times",
    "muslim app"
  ],
  authors: [{ name: "Hazrat Ummar Shaikh", url: siteUrl }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Islam24 — Accurate, Ad-Free Islamic App",
    description: "Accurate prayer times, Qibla compass, complete offline Quran, and daily Azkar — all in one beautiful, distraction-free app.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Islam24",
    images: [
      {
        url: `${siteUrl}/logo.svg`,
        width: 512,
        height: 512,
        alt: "Islam24 App Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam24 — Accurate, Ad-Free Islamic App",
    description: "Accurate prayer times, Qibla compass, complete offline Quran, and daily Azkar — distraction-free.",
    images: [`${siteUrl}/logo.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Islam24",
      "operatingSystem": "Android",
      "applicationCategory": "LifestyleApplication",
      "downloadUrl": "https://play.google.com/store/apps/details?id=com.hazrat.islam24",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "100"
      },
      "description": "Ad-free Islamic app with accurate prayer times, Qibla direction, complete offline Quran with translations, daily Azkar, and Zakat calculator.",
      "featureList": [
        "100% Ad-free and privacy focused",
        "Accurate prayer times & Athan notifications",
        "Qibla direction compass",
        "Complete offline Quran with translations",
        "Daily Azkar & Dua",
        "Zakat calculator"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Islam24",
      "url": siteUrl,
      "description": "Official website for Islam24 — Accurate, Ad-Free Islamic App."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
      </head>
      <body>
        <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
