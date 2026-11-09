import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import AzkarDuaClient from './AzkarDuaClient';
import styles from './AzkarDuaPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Authentic Hisnul Muslim Azkar & Digital Tasbih Counter | Islam24',
  description: 'Authentic daily morning and evening supplications from Hisnul Muslim with transliteration, translation, and tactile digital Tasbih counter with haptic feedback — 100% Free & Ad-Free.',
  keywords: [
    'azkar and dua',
    'hisnul muslim app',
    'morning azkar',
    'evening azkar',
    'digital tasbih online',
    'tasbeeh counter android',
    'subhanallah alhamdulillah allahuakbar',
    'daily islamic supplications',
    'dua after prayer',
  ],
  alternates: {
    canonical: '/azkar-dua',
  },
  openGraph: {
    title: 'Authentic Hisnul Muslim Azkar & Digital Tasbih Counter | Islam24',
    description: 'Authentic daily morning and evening supplications from Hisnul Muslim with transliteration, translation, and tactile digital Tasbih counter with haptic feedback — 100% Free & Ad-Free.',
    url: '/azkar-dua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authentic Hisnul Muslim Azkar & Digital Tasbih Counter | Islam24',
    description: 'Authentic daily supplications from Hisnul Muslim with digital Tasbih clicker.',
  },
};

const azkarSchema = {
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
          "name": "Azkar & Dua",
          "item": `${siteUrl}/azkar-dua`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are the supplications in Islam24 authenticated from the Sunnah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every single Dua and Dhikr included in Islam24 is verified and referenced directly from the classic compilation Hisnul Muslim (Fortress of the Muslim) with citations from Sahih Al-Bukhari, Sahih Muslim, Abu Dawood, and At-Tirmidhi."
          }
        },
        {
          "@type": "Question",
          "name": "How does the digital Tasbih counter work offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Tasbih counter operates 100% offline on your device with native haptic vibration feedback at every tap and target completion alerts."
          }
        },
        {
          "@type": "Question",
          "name": "Can I save custom Dhikr phrases and counts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In the Islam24 mobile app, you can create custom Dhikr targets, track your daily consistency, and sync progress across your devices."
          }
        }
      ]
    }
  ]
};

export default function AzkarDuaPage() {
  return (
    <div className={`layout-wrapper ${styles.pageWrapper}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(azkarSchema) }}
      />
      <Header />
      <main className={`page-content ${styles.mainContent}`}>
        <div className="container">
          {/* Header Title */}
          <div className={styles.header}>
            <div className={styles.bismillah}>
              أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
            </div>
            <span className="section-badge section-badge-gold">Daily Remembrance</span>
            <h1 className={styles.title}>
              Authentic <span className="highlight">Hisnul Muslim Azkar &amp; Tasbih</span>
            </h1>
            <p className={styles.subtitle}>
              Find tranquility in the remembrance of Allah. Daily morning, evening, and post-Salat supplications paired with an intuitive digital Tasbih clicker.
            </p>
          </div>

          {/* Interactive Azkar & Tasbih Client Micro-Tool */}
          <AzkarDuaClient />

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Verified Hadith Citations
              </h3>
              <p className={styles.featureDesc}>
                Direct references to Bukhari, Muslim, and Abu Dawood so you recite with complete certainty and scholarly peace of mind.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Tactile Haptic Tasbih
              </h3>
              <p className={styles.featureDesc}>
                Engaging physical click feedback with target milestones (33, 100) to keep your focus on Allah during your commute or downtime.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                100% Free &amp; Ad-Free
              </h3>
              <p className={styles.featureDesc}>
                Remembrance of Allah is a sacred trust. Never subjected to third-party commercials, banners, or tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Azkar & Tasbih"
          title="Engineered for Daily Remembrance"
          subtitle="Explore the morning and evening Azkar categories, transliterations, and audio pronunciation in Islam24."
          screens={[
            {
              src: '/screenshot/azkar-dua.webp',
              alt: 'Hisnul Muslim Daily Categories in Islam24',
              label: 'Hisnul Muslim',
            },
            {
              src: '/screenshot/tasbih-counter.webp',
              alt: 'Digital Tasbih Counter with Custom Targets',
              label: 'Digital Tasbih',
            },
            {
              src: '/screenshot/home-main.webp',
              alt: 'Daily Hadith and Dhikr on Home Screen',
              label: 'Daily Hadith',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
