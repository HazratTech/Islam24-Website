import { Metadata } from 'next';
import styles from './AboutUs.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Islam24 — Sacred Purpose & 100% Ad-Free Commitment',
  description: 'Learn about Islam24’s mission to provide the global Muslim Ummah with a completely free, ad-free, and privacy-respecting digital Islamic companion.',
  keywords: ['about islam24', 'free islamic app mission', 'ad free muslim app', 'islamic app without ads', 'halal app privacy'],
};

export default function AboutUsPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <span className="section-badge section-badge-gold">Our Sacred Purpose</span>
            <h1 className={styles.title}>About <span className="highlight">Islam24</span></h1>
            <p className={styles.subtitle}>
              Empowering your daily spiritual devotion with authentic, verified Islamic tools — strictly ad-free, tracker-free, and accessible to everyone.
            </p>
          </div>

          <div className={styles.contentCard}>
            <section className={styles.section}>
              <h2>Our Mission</h2>
              <p>
                At Islam24, our sacred mission is to provide Muslims worldwide with an authentic, elegant, and uncompromised digital companion. We believe that acts of worship — reciting the Holy Quran, observing daily Salat, calculating Zakat, and engaging in Dhikr — should never be commercialized, monetized with intrusive popups, or compromised by digital tracking.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Why We Built Islam24</h2>
              <p>
                In today&apos;s digital ecosystem, many popular Islamic applications have become cluttered with third-party advertising banners, full-screen video ads before prayer times, and aggressive location telemetry. We built Islam24 as an oasis of digital serenity: an application built with deep reverence, where every feature functions seamlessly offline and respects your sacred time with Allah.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Our Four Foundational Pillars</h2>
              <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                  </div>
                  <h4>100% Ad-Free Forever</h4>
                  <p>Zero banner ads, zero interstitial video popups, and zero commercial sponsorships interrupting your prayer or recitation.</p>
                </div>

                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h4>Sacred Data Privacy</h4>
                  <p>All GPS coordinates for prayer times and Qibla compass are computed 100% on your device. We never harvest or sell your data.</p>
                </div>

                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <h4>Astronomical Precision</h4>
                  <p>Standardized calculations vetted against Muslim World League, ISNA, Umm Al-Qura, and Karachi astronomical algorithms.</p>
                </div>

                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                  <h4>Built for the Ummah</h4>
                  <p>Developed with love and continuous feedback from Muslims across 120+ countries striving to elevate their daily Deen.</p>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.statsRibbon}>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>Free for Life</p>
            </div>
            <div className={styles.statItem}>
              <h3>0</h3>
              <p>Commercial Ads</p>
            </div>
            <div className={styles.statItem}>
              <h3>114</h3>
              <p>Surahs Offline</p>
            </div>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>On-Device Privacy</p>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
