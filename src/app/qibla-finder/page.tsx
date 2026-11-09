import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import QiblaFinderClient from './QiblaFinderClient';
import styles from './QiblaFinderPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Accurate Qibla Compass Finder Online & Offline | Islam24',
  description: 'Find the 100% accurate direction of the Holy Kaaba in Makkah with real-time magnetometer sensor orientation, degree angle, and distance — Free & Ad-Free.',
  keywords: [
    'qibla finder',
    'qibla direction',
    'qibla compass',
    'kaaba direction online',
    'find qibla offline',
    'makkah compass',
    'qibla angle',
    'qibla locator android',
    'accurate qibla',
  ],
  alternates: {
    canonical: '/qibla-finder',
  },
  openGraph: {
    title: 'Accurate Qibla Compass Finder Online & Offline | Islam24',
    description: 'Find the 100% accurate direction of the Holy Kaaba in Makkah with real-time magnetometer sensor orientation, degree angle, and distance — Free & Ad-Free.',
    url: '/qibla-finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accurate Qibla Compass Finder Online & Offline | Islam24',
    description: 'Find the 100% accurate direction of the Holy Kaaba in Makkah with real-time compass sensors.',
  },
};

const qiblaSchema = {
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
          "name": "Qibla Finder",
          "item": `${siteUrl}/qibla-finder`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Islam24 determine the Qibla direction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Islam24 calculates the great-circle geodesic bearing between your current geographic coordinates and the Holy Kaaba in Makkah (21.4225° N, 39.8262° E), combined with your phone magnetometer sensors."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Qibla compass work without internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Once your location is established or cached, the compass works 100% offline using your phone built-in hardware sensors."
          }
        },
        {
          "@type": "Question",
          "name": "Why does the compass ask to calibrate by moving the phone in a figure-8?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The figure-8 motion recalibrates the mobile magnetometer to eliminate local magnetic interference from nearby metal objects or electronics."
          }
        }
      ]
    }
  ]
};

export default function QiblaFinderPage() {
  return (
    <div className={`layout-wrapper ${styles.pageWrapper}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qiblaSchema) }}
      />
      <Header />
      <main className={`page-content ${styles.mainContent}`}>
        <div className="container">
          {/* Header Title */}
          <div className={styles.header}>
            <div className={styles.bismillah}>
              فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ
            </div>
            <span className="section-badge section-badge-gold">Sacred Orientation</span>
            <h1 className={styles.title}>
              Precision <span className="highlight">Qibla Compass Finder</span>
            </h1>
            <p className={styles.subtitle}>
              Turn your heart and prayer towards the Holy Kaaba with real-time magnetometer guidance, degree headings, and exact distance from any point on Earth.
            </p>
          </div>

          {/* Interactive Qibla Client Micro-Tool */}
          <QiblaFinderClient />

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Real-Time Magnetometer Sync
              </h3>
              <p className={styles.featureDesc}>
                Smooth fluid compass movement with continuous magnetic calibration for dependable alignment anywhere on Earth.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Geodesic Kaaba Mathematics
              </h3>
              <p className={styles.featureDesc}>
                Calculates the great-circle navigation formula directly to the coordinates of the Holy Kaaba with sub-degree precision.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                100% Ad-Free &amp; Offline
              </h3>
              <p className={styles.featureDesc}>
                Never interrupted by commercial ads or subscriptions while preparing for your sacred Salah in unfamiliar locations.
              </p>
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Qibla Interface"
          title="Engineered for Swift Orientation"
          subtitle="See how Islam24 makes finding the Qibla effortless during travel, work, and pilgrimage."
          screens={[
            {
              src: '/screenshot/qibla-compass.webp',
              alt: 'Real-Time Precision Kaaba Compass with Degrees and Distance',
              label: 'Live Compass',
            },
            {
              src: '/screenshot/home-main.webp',
              alt: 'Quick Access to Qibla Finder from Home Screen',
              label: 'Fast Access',
            },
            {
              src: '/screenshot/prayer-timetable.webp',
              alt: 'Connected with Daily Prayer Times',
              label: 'Salat Timing',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
