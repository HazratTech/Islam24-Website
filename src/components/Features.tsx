import Link from 'next/link';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge section-badge-gold">Sanctuary of Features</span>
          <h2 className={styles.title}>
            Engineered for <span className="highlight">Spiritual Tranquility</span>
          </h2>
          <p className={styles.subtitle}>
            Every detail crafted with reverence. Verified sources, mathematical accuracy, and an unwavering commitment to your privacy.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* BENTO 1: THE HOLY QURAN (8 COLS) */}
          <div className={`${styles.card} ${styles.colSpan8} ${styles.quranCard}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrap} ${styles.iconWrapGold}`}>
                {/* Quran Book Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                  <path d="M6 6h10"/>
                  <path d="M6 10h10"/>
                </svg>
              </div>
              <span className={`${styles.cardTag} ${styles.cardTagGold}`}>100% Offline Access</span>
            </div>

            <h3 className={styles.cardTitle}>Complete Quran with Verse Audio &amp; Translations</h3>
            <p className={styles.cardDesc}>
              Read the Holy Quran in original Uthmani calligraphy with verse-by-verse audio recitations from world-renowned Qaris. Includes verified translations in English, Bengali, and Urdu.
            </p>

            <div className={styles.quranSnippet}>
              <div className={styles.arabicAyah}>
                اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
              </div>
              <div className={styles.englishAyah}>
                &ldquo;Recite in the name of your Lord who created.&rdquo; — [Surah Al-Alaq 96:1]
              </div>
            </div>
          </div>

          {/* BENTO 2: PRAYER TIMES & ATHAN (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                {/* Mosque Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M8 6h8M6 10h12v12H6zM10 22v-6h4v6M12 6c-3 0-5 2-5 4h10c0-2-2-4-5-4z"/>
                </svg>
              </div>
              <span className={styles.cardTag}>Astronomical Accuracy</span>
            </div>

            <h3 className={styles.cardTitle}>Accurate Prayer Times</h3>
            <p className={styles.cardDesc}>
              Astronomical calculation supporting MWL, ISNA, Umm Al-Qura, and Karachi standards for all 5 daily prayers with custom Adhan alerts.
            </p>

            <div className={styles.prayerWaqtContainer}>
              <div className={styles.waqtPill}>
                <span className={styles.waqtArabic}>الفجر</span>
                <span className={styles.waqtName}>Fajr</span>
              </div>
              <div className={styles.waqtPill}>
                <span className={styles.waqtArabic}>الظهر</span>
                <span className={styles.waqtName}>Dhuhr</span>
              </div>
              <div className={styles.waqtPill}>
                <span className={styles.waqtArabic}>العصر</span>
                <span className={styles.waqtName}>Asr</span>
              </div>
              <div className={styles.waqtPill}>
                <span className={styles.waqtArabic}>المغرب</span>
                <span className={styles.waqtName}>Maghrib</span>
              </div>
              <div className={styles.waqtPill}>
                <span className={styles.waqtArabic}>العشاء</span>
                <span className={styles.waqtName}>Isha</span>
              </div>
            </div>
          </div>

          {/* BENTO 3: CELESTIAL QIBLA ASTROLABE (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                {/* Compass Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <span className={styles.cardTag}>Sensors &bull; Offline</span>
            </div>

            <h3 className={styles.cardTitle}>Precision Qibla Compass</h3>
            <p className={styles.cardDesc}>
              Locate Kaaba in Makkah with real-time hardware magnetometer guidance, degree headings, and exact distance tracking globally.
            </p>
          </div>

          {/* BENTO 4: DAILY AZKAR & MISBAHA (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                {/* Tasbih Beads Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3"/>
                  <circle cx="12" cy="5" r="3"/>
                  <circle cx="18" cy="6" r="3"/>
                  <circle cx="19" cy="12" r="3"/>
                  <circle cx="16" cy="18" r="3"/>
                  <circle cx="10" cy="19" r="3"/>
                  <circle cx="5" cy="14" r="3"/>
                </svg>
              </div>
              <span className={styles.cardTag}>Hisnul Muslim</span>
            </div>

            <h3 className={styles.cardTitle}>Authentic Azkar &amp; Tasbih</h3>
            <p className={styles.cardDesc}>
              Daily morning and evening supplications, Quranic Duas, and an intuitive haptic digital Tasbih clicker for remembrance.
            </p>
          </div>

          {/* BENTO 5: ZAKAT CALCULATOR (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrap} ${styles.iconWrapGold}`}>
                {/* Scales of Justice Icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                  <path d="M7 21h10"/>
                  <path d="M12 3v18"/>
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
                </svg>
              </div>
              <span className={`${styles.cardTag} ${styles.cardTagGold}`}>Nisab Calculator</span>
            </div>

            <h3 className={styles.cardTitle}>Instant Zakat Evaluator</h3>
            <p className={styles.cardDesc}>
              Calculate 2.5% Zakat obligations with 100% mathematical precision across cash, gold, silver, and business investments.
            </p>
          </div>

          {/* BENTO 6: THE AD-FREE PLEDGE BANNER (12 COLS) */}
          <div className={`${styles.card} ${styles.colSpan12} ${styles.pledgeCard}`}>
            <div className={styles.pledgeArabic}>
              أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              &ldquo;Unquestionably, by the remembrance of Allah hearts are assured.&rdquo;
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 20px auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
              No commercial interruptions during your Sujood. No data tracking algorithms following your spiritual journey. Islam24 is built as a pure, lifelong gift for the Ummah.
            </p>
            <Link href="/features" className="btn btn-primary" style={{ padding: '12px 30px' }}>
              Explore All App Features &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
