import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import ZakatCalculatorClient from './ZakatCalculatorClient';
import styles from './ZakatCalculatorPage.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Instant Zakat Calculator with Live Nisab Guidance | Islam24',
  description: 'Calculate your annual 2.5% Zakat obligation accurately with live gold and silver Nisab thresholds, multiple currencies, and immediate deduction calculations — Free and Private.',
  keywords: [
    'zakat calculator',
    'calculate zakat online',
    'nisab calculator',
    'gold nisab rate',
    'silver nisab value',
    'zakat al mal',
    'how to calculate zakat',
    'islamic charity calculator',
    'free zakat app',
  ],
  alternates: {
    canonical: '/zakat-calculator',
  },
  openGraph: {
    title: 'Instant Zakat Calculator with Live Nisab Guidance | Islam24',
    description: 'Calculate your annual 2.5% Zakat obligation accurately with live gold and silver Nisab thresholds, multiple currencies, and immediate deduction calculations.',
    url: '/zakat-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Zakat Calculator with Live Nisab Guidance | Islam24',
    description: 'Calculate your annual 2.5% Zakat obligation accurately with live gold and silver Nisab values.',
  },
};

const zakatSchema = {
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
          "name": "Zakat Calculator",
          "item": `${siteUrl}/zakat-calculator`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Nisab and how is it determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nisab is the minimum threshold of net wealth a Muslim must possess for one full lunar year (Hawl) before Zakat becomes obligatory. By prophetic standard, it is equivalent to 87.48 grams of gold or 612.36 grams of silver."
          }
        },
        {
          "@type": "Question",
          "name": "Should I use the Gold or Silver Nisab standard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most classical scholars and contemporary Islamic councils recommend using the silver standard for cash and financial assets because its lower monetary value allows more Muslims to participate and provides greater benefit to the poor and needy."
          }
        },
        {
          "@type": "Question",
          "name": "Does Islam24 store my financial data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never. All calculations are executed completely client-side in your device memory. No financial numbers or balances are ever uploaded, logged, or saved."
          }
        }
      ]
    }
  ]
};

export default function ZakatCalculatorPage() {
  return (
    <div className={`layout-wrapper ${styles.pageWrapper}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zakatSchema) }}
      />
      <Header />
      <main className={`page-content ${styles.mainContent}`}>
        <div className="container">
          {/* Header Title */}
          <div className={styles.header}>
            <div className={styles.bismillah}>
              وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ
            </div>
            <span className="section-badge section-badge-gold">Third Pillar of Islam</span>
            <h1 className={styles.title}>
              Instant <span className="highlight">Zakat Calculator &amp; Nisab Guide</span>
            </h1>
            <p className={styles.subtitle}>
              Fulfill your sacred duty of Zakat with precision. Compute your 2.5% obligation across cash, precious metals, and investments in complete privacy.
            </p>
          </div>

          {/* Interactive Zakat Calculator Micro-Tool */}
          <ZakatCalculatorClient />

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Dual Nisab Standards
              </h3>
              <p className={styles.featureDesc}>
                Toggle seamlessly between the Silver standard (612.36g) and Gold standard (87.48g) to adhere to your preferred Islamic school of thought.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Multi-Asset Coverage
              </h3>
              <p className={styles.featureDesc}>
                Handles personal bank balances, gold jewelry, silver items, share portfolios, trade inventory, and deducts short-term liabilities.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className={styles.featureTitle}>
                Zero Financial Tracking
              </h3>
              <p className={styles.featureDesc}>
                Your financial numbers remain strictly confidential. Calculations execute 100% on your device without leaving browser memory.
              </p>
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Zakat App Feature"
          title="Fulfill the Third Pillar with Ease"
          subtitle="Explore the intuitive Zakat tool, Hawl calendar tracker, and receipt export inside Islam24."
          screens={[
            {
              src: '/screenshot/home-main.webp',
              alt: 'Islam24 Home Screen with Instant Zakat Tool Access',
              label: 'Fast Access',
            },
            {
              src: '/screenshot/azkar-dua.webp',
              alt: 'Duas for Giving Charity and Purification of Wealth',
              label: 'Charity Duas',
            },
            {
              src: '/screenshot/prayer-timetable.webp',
              alt: 'Connected Devotional Companion',
              label: 'Daily Worship',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
