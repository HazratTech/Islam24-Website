import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import FeaturesClient from './FeaturesClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Free & Ad-Free Islamic App Features | Offline Quran, Salat & Qibla — Islam24',
  description: 'Explore the complete Islam24 feature sanctuary: offline Holy Quran with verse audio, precise prayer times with Athan alerts, Qibla compass, Azkar, and instant Zakat calculator.',
  keywords: [
    'islamic app features',
    'free islamic app features',
    'ads free islamic app',
    'offline quran app',
    'athan prayer times',
    'qibla compass online',
    'zakat calculator android',
    'hisnul muslim azkar',
    'digital tasbih app',
    'no tracking islamic app'
  ],
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'Free & Ad-Free Islamic App Features | Islam24',
    description: 'Explore the complete Islam24 feature sanctuary: offline Holy Quran with verse audio, precise prayer times with Athan alerts, Qibla compass, Azkar, and instant Zakat calculator.',
    url: '/features',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free & Ad-Free Islamic App Features | Islam24',
    description: 'Explore the complete Islam24 feature sanctuary: offline Holy Quran with verse audio, precise prayer times with Athan alerts, Qibla compass, Azkar, and instant Zakat calculator.',
  },
};

const featuresSchema = {
  "@context": "https://schema.org",
  "@graph": [
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Islam24 App Features",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "position": 1,
          "name": "Complete Offline Quran with Audio",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        },
        {
          "@type": "SoftwareApplication",
          "position": 2,
          "name": "Accurate Prayer Times & Athan Alerts",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        },
        {
          "@type": "SoftwareApplication",
          "position": 3,
          "name": "Precision Qibla Compass Finder",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        },
        {
          "@type": "SoftwareApplication",
          "position": 4,
          "name": "Hisnul Muslim Daily Azkar & Digital Tasbih",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        },
        {
          "@type": "SoftwareApplication",
          "position": 5,
          "name": "Instant Zakat Calculator & Nisab Estimator",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        }
      ]
    }
  ]
};

export default function FeaturesPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </div>
            <span className="section-badge section-badge-gold">Sanctuary of Features</span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.2rem',
                fontWeight: 800,
                marginBottom: '18px',
                color: 'var(--text-primary)',
                letterSpacing: '-1px',
              }}
            >
              Everything for Your <span className="highlight">Daily Worship</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Engineered for Muslims who seek clarity, spiritual tranquility, and verified sources without commercial distractions. Explore our complete suite of Islamic tools.
            </p>
          </div>

          {/* Interactive Category Filter & Bento Grid */}
          <FeaturesClient />
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Complete Visual Sanctuary"
          title="Designed for Reverence & Focus"
          subtitle="Explore the intuitive design language, dark aesthetic, and distraction-free workflow crafted across every feature."
          screens={[
            {
              src: '/screenshot/home-main.webp',
              alt: 'Islam24 Home Screen with Daily Hadith, Salat Times and Fast Access',
              label: 'Home Sanctuary',
            },
            {
              src: '/screenshot/prayer-timetable.webp',
              alt: 'Accurate Five Daily Prayer Timetable with Athan Alerts',
              label: 'Prayer Timetable',
            },
            {
              src: '/screenshot/quran-ayah.webp',
              alt: 'Holy Quran Uthmani Script Recitation with Verse Audio',
              label: 'Noble Quran Reader',
            },
            {
              src: '/screenshot/qibla-compass.webp',
              alt: 'Real-Time Precision Kaaba Compass for Qibla Orientation',
              label: 'Qibla Finder',
            },
            {
              src: '/screenshot/tasbih-counter.webp',
              alt: 'Digital Tasbih Counter with Haptic Vibration for Dhikr',
              label: 'Digital Tasbih',
            },
            {
              src: '/screenshot/azkar-dua.webp',
              alt: 'Authentic Hisnul Muslim Daily Morning and Evening Azkar Categories',
              label: 'Hisnul Muslim & Dua',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
