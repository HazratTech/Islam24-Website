import type { Metadata } from "next";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Islam24 — Free & Ad-Free Islamic App | Offline Quran & Prayer Times App",
  description: "The #1 100% Free & Ad-Free Islamic App for Android. Accurate prayer times, Qibla compass, complete offline Quran with verse audio recitations, daily Azkar, and instant Zakat calculator with zero data tracking.",
  keywords: [
    "free islamic app",
    "ads free islamic app",
    "no tracking islamic app",
    "quran islamic app",
    "quran app",
    "prayer time app",
    "offline quran app",
    "qibla direction online",
    "qibla finder app",
    "zakat calculator app",
    "azkar and dua app",
    "salat times app",
    "athan notification app",
    "islam24"
  ],
  authors: [{ name: "Islam24 Team", url: siteUrl }],
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
    title: "Islam24 — Free & Ad-Free Islamic App | Offline Quran & Prayer Times",
    description: "100% Free & Ad-Free Islamic app for Android. Accurate prayer times, Qibla compass, complete offline Quran, and daily Azkar — distraction-free.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Islam24",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Islam24 — Free & Ad-Free Islamic App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam24 — Free & Ad-Free Islamic App",
    description: "100% Free, Ad-Free, & Privacy-First Islamic App with Offline Quran, Accurate Prayer Times, and Qibla Finder.",
    images: [`${siteUrl}/og-image.png`],
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
      "description": "100% Free and Ad-free Islamic app featuring accurate prayer times, Athan notifications, Qibla compass, complete offline Quran with verse audio, daily Azkar, and Zakat calculator.",
      "featureList": [
        "100% Free and Ad-Free",
        "Zero Data Tracking & 100% Privacy Focused",
        "Accurate Prayer Times & Athan Notifications",
        "Offline Quran with Verse Audio & Translations",
        "Qibla Compass & Mecca Direction Finder",
        "Daily Azkar, Duas & Digital Tasbih",
        "Instant Zakat Calculator"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Islam24",
      "url": siteUrl,
      "description": "Official website for Islam24 — 100% Free, Ad-Free, & Privacy-First Islamic App."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Features",
          "item": `${siteUrl}/features`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Offline Quran App",
          "item": `${siteUrl}/quran`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Prayer Times App",
          "item": `${siteUrl}/prayer-times`
        }
      ]
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
