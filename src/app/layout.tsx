import type { Metadata } from "next";
import Script from "next/script";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Islam24 — Accurate, Ad-Free Islamic App",
  description: "Your reliable, distraction-free companion for daily Islamic practices. Accurate prayer times, Qibla, complete offline Quran, Azkar, and Zakat calculator.",
  keywords: ["islam", "quran", "prayer times", "qibla", "azkar", "athan", "islamic app", "muslim", "salat", "zakat"],
  authors: [{ name: "Hazrat Ummar Shaikh" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Islam24 — Accurate, Ad-Free Islamic App",
    description: "Accurate prayer times, Qibla, complete offline Quran, and daily Azkar — all in one beautiful, distraction-free app.",
    type: "website",
    locale: "en_US",
    siteName: "Islam24",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam24 — Accurate, Ad-Free Islamic App",
    description: "Accurate prayer times, Qibla, complete offline Quran, and daily Azkar — all in one beautiful, distraction-free app.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

