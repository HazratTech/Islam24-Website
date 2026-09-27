import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — Clear & Transparent Guidelines | Islam24',
  description: 'Terms of Service for Islam24. Read our guidelines on permitted personal use, open Quranic licensing, and data deletion rights.',
};

export default function TermsOfServicePage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          {/* Hero Header */}
          <div className={styles.heroHeader}>
            <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <span className="section-badge section-badge-gold">Service Guidelines</span>
            <h1 className={styles.title}>
              Terms of <span className="highlight">Service</span>
            </h1>
            <p className={styles.subtitle}>
              Clear, transparent, and fair guidelines governing your use of the Islam24 mobile application, tools, and digital platforms.
            </p>
            <div className={styles.metaBadge}>
              <span>Last Revised: September 2026</span>
              <span>•</span>
              <span>Applies to Android App &amp; Website</span>
            </div>
          </div>

          {/* At a Glance Key Takeaway Grid */}
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>100% Free Access</h3>
              <p className={styles.summaryDesc}>
                All digital worship tools are provided completely free of charge for personal, non-commercial use.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Quranic Open License</h3>
              <p className={styles.summaryDesc}>
                The sacred Quranic text and translations remain public domain or under vetted community open licenses.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Verified Astronomical Math</h3>
              <p className={styles.summaryDesc}>
                Prayer times follow standard calculations; we recommend verifying times with your local mosque when in doubt.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Complete Erasure Rights</h3>
              <p className={styles.summaryDesc}>
                You retain permanent rights to delete your account, synced bookmarks, and profile at any time.
              </p>
            </div>
          </div>

          {/* Two-Column Reading Layout */}
          <div className={styles.contentLayout}>
            {/* Table of Contents Sticky Sidebar */}
            <aside className={styles.sidebarNav}>
              <div className={styles.navTitle}>Table of Contents</div>
              <ul className={styles.navList}>
                <li><a href="#section-1" className={styles.navLink}>1. Agreement to Terms</a></li>
                <li><a href="#section-2" className={styles.navLink}>2. Permitted Use</a></li>
                <li><a href="#section-3" className={styles.navLink}>3. Intellectual Property</a></li>
                <li><a href="#section-4" className={styles.navLink}>4. Astronomical Accuracy</a></li>
                <li><a href="#section-5" className={styles.navLink}>5. Accounts &amp; Data Deletion</a></li>
                <li><a href="#section-6" className={styles.navLink}>6. Limitation of Liability</a></li>
                <li><a href="#section-7" className={styles.navLink}>7. Contact &amp; Questions</a></li>
              </ul>
            </aside>

            {/* Main Document Section Cards */}
            <div className={styles.documentBody}>
              <section id="section-1" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>1</span>
                  <h2 className={styles.sectionTitle}>Agreement to Terms</h2>
                </div>
                <p>
                  By downloading, accessing, or using the Islam24 mobile application or accessing our website (https://islam24.app), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, you should discontinue using the application.
                </p>
              </section>

              <section id="section-2" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>2</span>
                  <h2 className={styles.sectionTitle}>Permitted Personal &amp; Spiritual Use</h2>
                </div>
                <p>
                  Islam24 provides digital Islamic companion services — including prayer calculation, Qibla compass alignment, Quran reading, audio streaming, and Zakat estimation — strictly for personal, educational, and devotional purposes.
                </p>
                <div className={styles.calloutBox}>
                  <strong>Usage Restrictions:</strong> You agree not to reverse engineer, disrupt the app APIs, scrape Quranic audio bandwidth excessively, or use Islam24 for any unlawful commercial redistribution.
                </div>
              </section>

              <section id="section-3" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>3</span>
                  <h2 className={styles.sectionTitle}>Intellectual Property &amp; Quranic Licensing</h2>
                </div>
                <p>
                  The Islam24 software codebase, branding, custom UI components, vector iconography, and original documentation are the intellectual property of Islam24.
                </p>
                <p>
                  The sacred Quranic Arabic text, translations (such as Sahih International and Muhiuddin Khan), and public domain recitations remain under their respective open-source Islamic licenses or the public domain. We do not claim ownership of the Words of Allah.
                </p>
              </section>

              <section id="section-4" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>4</span>
                  <h2 className={styles.sectionTitle}>Accuracy of Astronomical Information</h2>
                </div>
                <p>
                  Islam24 computes daily prayer schedules (Salat) and Qibla orientation using standardized spherical trigonometry algorithms recognized by major astronomical observatories and Islamic scholars (including MWL, ISNA, Umm Al-Qura, and Univ. of Karachi).
                </p>
                <div className={`${styles.calloutBox} ${styles.calloutGold}`}>
                  <strong>Recommendation:</strong> Variations may occur due to localized elevation, atmospheric refraction, or local mosque timetable conventions. We encourage believers to cross-reference prayer timings with their local mosque committee when necessary.
                </div>
              </section>

              <section id="section-5" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>5</span>
                  <h2 className={styles.sectionTitle}>User Accounts &amp; Permanent Deletion Rights</h2>
                </div>
                <p>
                  If you optionally sign in with your Google account to sync your bookmarks across devices, you remain responsible for maintaining the confidentiality of your device.
                </p>
                <p>
                  You hold the absolute right to terminate your account and erase all synchronized cloud records at any moment using our self-service <Link href="/delete-account" style={{ color: 'var(--emerald)', fontWeight: 700 }}>Account Deletion Portal</Link>. All data is permanently destroyed with zero retention.
                </p>
              </section>

              <section id="section-6" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>6</span>
                  <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
                </div>
                <p>
                  Islam24 is provided &ldquo;as is&rdquo; without warranties of any kind. While we rigorously test all astronomical calculations and financial formulas in our Zakat tool, Islam24 shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                </p>
              </section>

              <section id="section-7" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>7</span>
                  <h2 className={styles.sectionTitle}>Changes to Terms &amp; Support Contact</h2>
                </div>
                <p>
                  We reserve the right to refine these Terms to accommodate new Islamic features or regulatory standards. If you have questions regarding these terms, please contact our team via Discord or our contact portal.
                </p>
              </section>

              {/* Help & Support Reassurance Card */}
              <div className={styles.helpCard}>
                <div className={styles.helpText}>
                  <h3>Questions regarding our service terms?</h3>
                  <p>Our team is available to assist you with any clarifications or inquiries.</p>
                </div>
                <Link href="/contact" className={styles.helpActionBtn}>
                  Contact Support Team &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
