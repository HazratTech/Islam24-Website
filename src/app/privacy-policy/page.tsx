import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Strict Zero-Tracking Commitment | Islam24',
  description: 'Privacy Policy for Islam24. Learn how your location and usage data remain 100% private and processed on-device without third-party trackers.',
  keywords: ['islam24 privacy policy', 'ad free islamic app privacy', 'no tracking muslim app', 'local location prayer times'],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          {/* Hero Header */}
          <div className={styles.heroHeader}>
            <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <span className="section-badge section-badge-gold">Trust &amp; Transparency</span>
            <h1 className={styles.title}>
              Privacy <span className="highlight">Policy</span>
            </h1>
            <p className={styles.subtitle}>
              We believe that acts of worship should never be monitored, monetized, or tracked. Read our sacred commitment to zero advertising and on-device data processing.
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>100% Local Location</h3>
              <p className={styles.summaryDesc}>
                GPS coordinates are used solely on your phone processor to compute Prayer Times &amp; Qibla. Never uploaded.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Zero Ads &amp; Trackers</h3>
              <p className={styles.summaryDesc}>
                No Facebook Pixel, Google AdSense, or analytics SDKs harvesting your devotional habits.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>No Data Selling</h3>
              <p className={styles.summaryDesc}>
                We do not sell, rent, or monetize your personal information to data brokers or advertising networks.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Self-Service Erasure</h3>
              <p className={styles.summaryDesc}>
                Erase your account and all synchronized bookmarks instantly through our self-service deletion portal.
              </p>
            </div>
          </div>

          {/* Two-Column Reading Layout */}
          <div className={styles.contentLayout}>
            {/* Table of Contents Sticky Sidebar */}
            <aside className={styles.sidebarNav}>
              <div className={styles.navTitle}>Table of Contents</div>
              <ul className={styles.navList}>
                <li><a href="#section-1" className={styles.navLink}>1. Sacred Privacy Pledge</a></li>
                <li><a href="#section-2" className={styles.navLink}>2. Location Data Handling</a></li>
                <li><a href="#section-3" className={styles.navLink}>3. Account &amp; Sync Data</a></li>
                <li><a href="#section-4" className={styles.navLink}>4. Third-Party Services &amp; Ads</a></li>
                <li><a href="#section-5" className={styles.navLink}>5. Local Device Security</a></li>
                <li><a href="#section-6" className={styles.navLink}>6. Account &amp; Data Erasure</a></li>
                <li><a href="#section-7" className={styles.navLink}>7. Contacting Developers</a></li>
              </ul>
            </aside>

            {/* Main Document Section Cards */}
            <div className={styles.documentBody}>
              <section id="section-1" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>1</span>
                  <h2 className={styles.sectionTitle}>Our Sacred Privacy Pledge</h2>
                </div>
                <p>
                  Islam24 was conceived and built with a singular guiding philosophy: <strong>your spiritual worship belongs exclusively between you and Allah</strong>. Unlike commercial applications that monetize religion through tracking pixels and user behavioral profiling, Islam24 operates as an authentic digital waqf for the Ummah.
                </p>
                <div className={styles.calloutBox}>
                  <strong>Core Commitment:</strong> We do not collect, monetize, broker, or share any personal data with third-party advertisers, data aggregators, or surveillance brokers under any circumstances.
                </div>
              </section>

              <section id="section-2" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>2</span>
                  <h2 className={styles.sectionTitle}>Location Data Handling (Salat &amp; Qibla)</h2>
                </div>
                <p>
                  The Islam24 Android application requests device location permission exclusively to determine:
                </p>
                <ul>
                  <li><strong>Astronomical Prayer Times:</strong> Solar declination and twilight angles for Fajr, Dhuhr, Asr, Maghrib, and Isha.</li>
                  <li><strong>Qibla Direction:</strong> Real-time great-circle bearing from your position to the Holy Kaaba in Makkah (21.4225° N, 39.8262° E).</li>
                </ul>
                <p>
                  <strong>How Location is Processed:</strong> All spherical trigonometric calculations are executed <em>locally on your smartphone processor</em>. Your precise GPS coordinates never leave your device, are never logged on our servers, and are never transmitted across the network.
                </p>
              </section>

              <section id="section-3" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>3</span>
                  <h2 className={styles.sectionTitle}>Optional Account &amp; Synchronized Data</h2>
                </div>
                <p>
                  You are never required to create an account or sign in to use Islam24. All core features — reciting the Quran, checking prayer times, using the Qibla compass, and calculating Zakat — work 100% anonymously.
                </p>
                <p>
                  If you choose to sign in (via Google Sign-In), we store only:
                </p>
                <ul>
                  <li>Your Google User ID and verified email address for authentication</li>
                  <li>Saved Quranic verse bookmarks and reading milestones</li>
                  <li>Custom digital Tasbih counter presets</li>
                </ul>
              </section>

              <section id="section-4" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>4</span>
                  <h2 className={styles.sectionTitle}>Zero Third-Party Advertising &amp; Trackers</h2>
                </div>
                <p>
                  Islam24 contains <strong>zero third-party advertising SDKs</strong>, commercial banner networks, or behavioral tracking libraries (such as Facebook Audience Network, AdMob, Unity, or AppsFlyer).
                </p>
                <div className={`${styles.calloutBox} ${styles.calloutGold}`}>
                  <strong>Commercial-Free Sanctuary:</strong> You will never experience full-screen interstitial video advertisements before prayer, banner ads beneath Quranic verses, or commercial interruptions during your Dhikr.
                </div>
              </section>

              <section id="section-5" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>5</span>
                  <h2 className={styles.sectionTitle}>Local Device Security &amp; Offline Storage</h2>
                </div>
                <p>
                  Downloaded Quranic audio recitations, translations, and personal application settings are stored securely within your device&apos;s sandboxed internal storage. We recommend keeping your Android OS updated and utilizing device screen locks to protect all local application data.
                </p>
              </section>

              <section id="section-6" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>6</span>
                  <h2 className={styles.sectionTitle}>Self-Service Account &amp; Data Erasure</h2>
                </div>
                <p>
                  In full compliance with Google Play Store User Data policies, users have the right to permanently purge their account and all associated cloud data at any time.
                </p>
                <p>
                  You can execute immediate data erasure through our self-service <Link href="/delete-account" style={{ color: 'var(--emerald)', fontWeight: 700 }}>Account &amp; Data Deletion Portal</Link>. Deletion is instantaneous and permanently removes your profile record, OAuth credentials, and bookmarks from our databases.
                </p>
              </section>

              <section id="section-7" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>7</span>
                  <h2 className={styles.sectionTitle}>Changes &amp; Contacting the Engineering Team</h2>
                </div>
                <p>
                  Any administrative updates to this Privacy Policy will be published directly on this page with an updated revision date. If you have questions, feedback, or security inquiries, please contact our development team.
                </p>
              </section>

              {/* Help & Support Reassurance Card */}
              <div className={styles.helpCard}>
                <div className={styles.helpText}>
                  <h3>Have questions regarding our privacy practices?</h3>
                  <p>Reach out directly to the Islam24 engineering team or join our community.</p>
                </div>
                <Link href="/contact" className={styles.helpActionBtn}>
                  Contact Engineering Team &rarr;
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
