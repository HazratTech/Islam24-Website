import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import QuranReaderClient from './QuranReaderClient';
import styles from './QuranPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Free Offline Quran App with Audio Recitations | Islam24',
  description: 'Read and listen to the complete Holy Quran offline with verse-by-verse audio recitations, authentic Uthmani script, English and Bengali translations — 100% Free and Ad-Free.',
  keywords: [
    'quran app',
    'offline quran app',
    'quran islamic app',
    'free quran app android',
    'quran audio offline',
    'uthmani script quran',
    'quran with english translation',
    'quran with bangla translation',
    'ad free quran app',
  ],
  alternates: {
    canonical: '/quran',
  },
  openGraph: {
    title: 'Free Offline Quran App with Audio Recitations | Islam24',
    description: 'Read and listen to the complete Holy Quran offline with verse-by-verse audio recitations, authentic Uthmani script, English and Bengali translations — 100% Free and Ad-Free.',
    url: '/quran',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Offline Quran App with Audio Recitations | Islam24',
    description: 'Read and listen to the complete Holy Quran offline with verse-by-verse audio recitations, authentic Uthmani script, English and Bengali translations.',
  },
};

const quranSchema = {
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
          "name": "Offline Quran App",
          "item": `${siteUrl}/quran`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I read the Quran completely offline in Islam24?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All 114 Surahs and 6,236 verses in authentic Uthmani calligraphy with full English and Bengali translations are stored locally for 100% offline access."
          }
        },
        {
          "@type": "Question",
          "name": "Which reciters are available for verse-by-verse audio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Islam24 includes world-renowned Qaris including Mishary Rashid Alafasy, Abdul Basit Abdul Samad, and Saad Al-Ghamdi with offline download capabilities."
          }
        },
        {
          "@type": "Question",
          "name": "Are there banner ads or commercial interruptions during recitation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never. Islam24 is strictly 100% ad-free forever. The Holy Quran is sacred and will never be monetized with commercial advertisements."
          }
        }
      ]
    }
  ]
};

export default function QuranPage() {
  return (
    <div className={`layout-wrapper ${styles.pageWrapper}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quranSchema) }}
      />
      <Header />
      <main className={`page-content ${styles.mainContent}`}>
        <div className="container">
          {/* Header Title */}
          <div className={styles.header}>
            <div className={styles.bismillah}>
              إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
            </div>
            <span className="section-badge section-badge-gold">The Divine Revelation</span>
            <h1 className={styles.title}>
              Free &amp; <span className="highlight">Offline Quran App</span> for Android
            </h1>
            <p className={styles.subtitle}>
              Experience the divine revelation with crystal-clear Uthmani calligraphy, verse-by-verse audio recitations, and multi-language translations — zero ads, zero distractions.
            </p>
          </div>

          {/* Interactive Quran Reader Client Micro-Tool */}
          <QuranReaderClient />

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Complete 114 Surahs Offline
              </h3>
              <p className={styles.featureDesc}>
                Read the entire Holy Quran anytime, anywhere without cellular connection or WiFi. High-speed local indexing for instant search.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Verse-by-Verse Audio Recitations
              </h3>
              <p className={styles.featureDesc}>
                Listen to master Qaris with synchronized verse highlighting to perfect your Tajweed and pronunciation during your daily tilawah.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                100% Ad-Free Forever
              </h3>
              <p className={styles.featureDesc}>
                Zero banner advertisements, zero full-screen interruptions. Your recitation and reflection remain purely between you and Allah.
              </p>
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Quran Interface"
          title="Designed for Deep Tilawah"
          subtitle="Explore the dark Quran reading mode, smooth font resizing, and quick verse bookmarking built into Islam24."
          screens={[
            {
              src: '/screenshot/quran-surah.webp',
              alt: 'Quran Surah Index and Reading Progress',
              label: 'Surah Index',
            },
            {
              src: '/screenshot/quran-ayah.webp',
              alt: 'Ayah Recitation with Translation and Audio',
              label: 'Ayah View',
            },
            {
              src: '/screenshot/home-main.webp',
              alt: 'Quick Quran Resume from Home Sanctuary',
              label: 'Instant Resume',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
