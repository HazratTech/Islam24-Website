import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import PrayerTimesClient from './PrayerTimesClient';
import styles from './PrayerTimesPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Accurate Prayer Times with Athan Audio Alerts | Islam24',
  description: 'Astronomical calculation of accurate Islamic prayer times (Salat / Namaz) worldwide. Custom Athan audio notifications, offline computation, and verified methods.',
  keywords: [
    'prayer times',
    'salat times',
    'namaz timetable',
    'accurate prayer times',
    'athan audio app',
    'adhan notifications',
    'offline prayer times',
    'fajr time',
    'dhuhr time',
    'asr time',
    'maghrib time',
    'isha time',
  ],
  alternates: {
    canonical: '/prayer-times',
  },
  openGraph: {
    title: 'Accurate Prayer Times with Athan Audio Alerts | Islam24',
    description: 'Astronomical calculation of accurate Islamic prayer times (Salat / Namaz) worldwide. Custom Athan audio notifications, offline computation, and verified methods.',
    url: '/prayer-times',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accurate Prayer Times with Athan Audio Alerts | Islam24',
    description: 'Astronomical calculation of accurate Islamic prayer times (Salat / Namaz) worldwide with customizable Athan alerts.',
  },
};

const prayerTimesSchema = {
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
          "name": "Prayer Times",
          "item": `${siteUrl}/prayer-times`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Islam24 calculate accurate prayer times?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Islam24 uses astronomical solar position algorithms calibrated to your exact GPS coordinates. You can choose from standard methods including Muslim World League, ISNA, Umm Al-Qura, Karachi, and Egyptian Authority."
          }
        },
        {
          "@type": "Question",
          "name": "Does Islam24 track or upload my GPS location to servers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never. Your latitude and longitude are processed strictly on your local phone hardware. We never transmit, store, or sell your location coordinates."
          }
        },
        {
          "@type": "Question",
          "name": "Can I receive Athan audio alerts when my phone is locked or offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Islam24 uses native Android precise alarm managers to trigger authentic Athan recitations on schedule, even when offline or in battery saver mode."
          }
        }
      ]
    }
  ]
};

export default function PrayerTimesPage() {
  return (
    <div className={`layout-wrapper ${styles.pageWrapper}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prayerTimesSchema) }}
      />
      <Header />
      <main className={`page-content ${styles.mainContent}`}>
        <div className="container">
          {/* Header Title */}
          <div className={styles.header}>
            <div className={styles.bismillah}>
              حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ
            </div>
            <span className="section-badge section-badge-gold">Daily Devotion</span>
            <h1 className={styles.title}>
              Accurate <span className="highlight">Prayer Times &amp; Athan Alerts</span>
            </h1>
            <p className={styles.subtitle}>
              Calibrated to precise solar zenith algorithms with authentic Athan voices from Makkah and Madinah — 100% computed on-device with zero location tracking.
            </p>
          </div>

          {/* Interactive Prayer Times Client Micro-Tool */}
          <PrayerTimesClient />

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                High-Accuracy Solar Algorithms
              </h3>
              <p className={styles.featureDesc}>
                Supports all 5 major global calculation methods (MWL, ISNA, Umm Al-Qura, Karachi, Egyptian) plus Hanafi &amp; Shafi Asr jurisprudence.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Customizable Athan Voices
              </h3>
              <p className={styles.featureDesc}>
                Choose your favorite Muazzin, set custom pre-prayer reminders, or enable gentle vibration modes during meetings and quiet hours.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                100% On-Device Privacy
              </h3>
              <p className={styles.featureDesc}>
                Unlike other apps that sell your GPS data to data brokers, Islam24 calculates prayer times strictly on your phone processor.
              </p>
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Timetable Interface"
          title="Designed for Never Missing a Prayer"
          subtitle="Explore the monthly prayer calendar, lock screen widgets, and silent mode toggles crafted inside Islam24."
          screens={[
            {
              src: '/screenshot/prayer-timetable.webp',
              alt: 'Daily Salat Timetable with Athan Audio Toggles',
              label: 'Daily Timetable',
            },
            {
              src: '/screenshot/home-main.webp',
              alt: 'Upcoming Prayer Countdown on Home Screen',
              label: 'Live Countdown',
            },
            {
              src: '/screenshot/azkar-dua.webp',
              alt: 'Post-Prayer Supplications and Dhikr',
              label: 'Post-Prayer Azkar',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
