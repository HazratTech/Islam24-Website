import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Acknowledgements & Credits — Open Source & Community | Islam24',
  description: 'Credits and acknowledgements for the open-source projects, fonts, APIs, and community datasets that made Islam24 possible.',
};

export default function AcknowledgementsPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          {/* Hero Header */}
          <div className={styles.heroHeader}>
            <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <span className="section-badge section-badge-gold">Community Gratitude</span>
            <h1 className={styles.title}>
              Acknowledgements &amp; <span className="highlight">Credits</span>
            </h1>
            <p className={styles.subtitle}>
              Islam24 stands on the shoulders of dedicated developers, scholars, and open-source contributors who have made authentic Islamic datasets freely available for the Ummah.
            </p>
            <div className={styles.metaBadge}>
              <span>Honoring Open Source &amp; Islamic Knowledge</span>
            </div>
          </div>

          {/* At a Glance Key Takeaway Grid */}
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Quranic Datasets</h3>
              <p className={styles.summaryDesc}>
                High-precision Uthmani script and translations from AlQuran Cloud and Risan&apos;s Quran JSON.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Prayer Algorithms</h3>
              <p className={styles.summaryDesc}>
                Astronomical sun declination math based on MWL, ISNA, and PrayTimes library calculations.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Arabic Typography</h3>
              <p className={styles.summaryDesc}>
                Classic Naskh Arabic calligraphy provided by the open-source Amiri and Quran Android projects.
              </p>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className={styles.summaryTitle}>Open Source Waqf</h3>
              <p className={styles.summaryDesc}>
                Deep gratitude to the countless maintainers sharing their code to benefit believers globally.
              </p>
            </div>
          </div>

          {/* Two-Column Reading Layout */}
          <div className={styles.contentLayout}>
            {/* Table of Contents Sticky Sidebar */}
            <aside className={styles.sidebarNav}>
              <div className={styles.navTitle}>Table of Contents</div>
              <ul className={styles.navList}>
                <li><a href="#section-1" className={styles.navLink}>1. Quran Data &amp; Texts</a></li>
                <li><a href="#section-2" className={styles.navLink}>2. Astronomical Algorithms</a></li>
                <li><a href="#section-3" className={styles.navLink}>3. Fonts &amp; Calligraphy</a></li>
                <li><a href="#section-4" className={styles.navLink}>4. Vector Iconography</a></li>
                <li><a href="#section-5" className={styles.navLink}>5. Audio Reciters</a></li>
                <li><a href="#section-6" className={styles.navLink}>6. Continuous Community Waqf</a></li>
              </ul>
            </aside>

            {/* Main Document Section Cards */}
            <div className={styles.documentBody}>
              <section id="section-1" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>1</span>
                  <h2 className={styles.sectionTitle}>Quran Data, Texts, &amp; Translations</h2>
                </div>
                <p>
                  We are indebted to the digital scholars and engineers who have made the Holy Quran accessible in structured formats:
                </p>
                <ul>
                  <li><strong>AlQuran Cloud API:</strong> High-performance infrastructure providing authenticated Uthmani verse texts and audio recitation CDN endpoints (<a href="https://alquran.cloud" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--emerald)', fontWeight: 700 }}>alquran.cloud</a>).</li>
                  <li><strong>Risan&apos;s Quran JSON:</strong> Structured JSON representations of verse-by-verse translations in English, Bengali, and phonetic transliterations (<a href="https://github.com/risan/quran-json" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--emerald)', fontWeight: 700 }}>github.com/risan/quran-json</a>).</li>
                  <li><strong>Tanzil Project:</strong> International reference for verified Quranic text, pause mark rules, and Surah metadata (<a href="https://tanzil.net" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--emerald)', fontWeight: 700 }}>tanzil.net</a>).</li>
                </ul>
              </section>

              <section id="section-2" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>2</span>
                  <h2 className={styles.sectionTitle}>Astronomical Algorithms &amp; Prayer Times</h2>
                </div>
                <p>
                  Accurately calculating daily Salat times and Qibla bearings around the globe is made possible by standard computational libraries:
                </p>
                <ul>
                  <li><strong>PrayTimes / Adhan Algorithms:</strong> Open-source spherical trigonometry calculations for sun declination, equation of time, and Fajr/Isha twilight angles.</li>
                  <li><strong>World Magnetic Model (WMM):</strong> Used to calculate magnetic declination, ensuring true geographic Kaaba heading alignment on device magnetometers.</li>
                  <li><strong>Islamic Calculation Standards:</strong> The established methodologies of the Muslim World League, ISNA (North America), Umm Al-Qura (Makkah), Egyptian General Authority, and University of Islamic Sciences (Karachi).</li>
                </ul>
              </section>

              <section id="section-3" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>3</span>
                  <h2 className={styles.sectionTitle}>Typefaces &amp; Calligraphy</h2>
                </div>
                <p>
                  The serene visual presence of Islam24 relies on beautiful, open-source typography designed with reverence:
                </p>
                <ul>
                  <li><strong>Amiri Font:</strong> A classical Arabic Naskh typeface designed by Khaled Hosny, reviving the aesthetic tradition of the historic Bulaq Press.</li>
                  <li><strong>Quran Android Project:</strong> Authentic Arabic typographic assets and glyph shaping datasets (<a href="https://github.com/quran/quran_android" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--emerald)', fontWeight: 700 }}>github.com/quran/quran_android</a>).</li>
                  <li><strong>Outfit &amp; Plus Jakarta Sans:</strong> Clean, highly legible contemporary geometric display and body typefaces via Google Fonts.</li>
                </ul>
              </section>

              <section id="section-4" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>4</span>
                  <h2 className={styles.sectionTitle}>Vector Iconography &amp; Design Assets</h2>
                </div>
                <p>
                  Our vector iconography and visual accents are built using open, community-curated design systems:
                </p>
                <ul>
                  <li><strong>Stratis UI Icons:</strong> Curated free vector icon library for modern interfaces.</li>
                  <li><strong>Lucide Icons:</strong> Community-driven, crystal-clear vector glyphs used for navigation and controls.</li>
                  <li><strong>Islamic Geometric Art:</strong> Classic 8-point geometric star patterns inspired by traditional Islamic architecture in Andalusia, Cairo, and Madinah.</li>
                </ul>
              </section>

              <section id="section-5" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>5</span>
                  <h2 className={styles.sectionTitle}>Audio Reciters &amp; Sacred Tilawah</h2>
                </div>
                <p>
                  We express our heartfelt gratitude to the venerable Qaris whose heartfelt Quranic recitations enrich the hearts of listeners worldwide:
                </p>
                <ul>
                  <li><strong>Sheikh Mishary Rashid Alafasy</strong></li>
                  <li><strong>Sheikh Abdul Basit Abdul Samad</strong></li>
                  <li><strong>Sheikh Saad Al-Ghamdi</strong></li>
                </ul>
              </section>

              <section id="section-6" className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>6</span>
                  <h2 className={styles.sectionTitle}>Continuous Community Waqf</h2>
                </div>
                <p>
                  Islam24 will always remain 100% free and ad-free. Every line of code, dataset, and algorithm we incorporate is dedicated to serving the global Ummah with dignity and honor.
                </p>
                <div className={styles.calloutBox} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--emerald-dark)', marginBottom: '8px' }}>
                    جَزَاكُمُ اللَّهُ خَيْرًا وَبَارَكَ فِيكُمْ
                  </div>
                  <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>
                    May Allah accept all efforts, forgive any shortcomings, and reward every contributor who aided in spreading beneficial knowledge.
                  </p>
                </div>
              </section>

              {/* Help & Support Reassurance Card */}
              <div className={styles.helpCard}>
                <div className={styles.helpText}>
                  <h3>Are you an open-source contributor or scholar?</h3>
                  <p>We welcome collaboration, suggestions, and corrections from across the Ummah.</p>
                </div>
                <Link href="/contact" className={styles.helpActionBtn}>
                  Connect With Us &rarr;
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
