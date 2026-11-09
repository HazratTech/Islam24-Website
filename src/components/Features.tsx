import Link from 'next/link';
import styles from './Features.module.css';
import { HiSpeakerWave } from 'react-icons/hi2';
import { TbBuildingMosque, TbCompass, TbCirclesRelation, TbCalculator, TbBook2 } from 'react-icons/tb';

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
            Every capability designed with Islamic reverence. Verified sources, astronomical accuracy, and an unwavering commitment to zero commercial tracking.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* BENTO 1: THE HOLY QURAN (8 COLS) */}
          <div className={`${styles.card} ${styles.colSpan8} ${styles.quranCard}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrap} ${styles.iconWrapGold}`}>
                <TbBook2 size={26} />
              </div>
              <span className={`${styles.cardTag} ${styles.cardTagGold}`}>100% Offline Access</span>
            </div>

            <h3 className={styles.cardTitle}>Complete Quran with Verse Audio &amp; Translations</h3>
            <p className={styles.cardDesc}>
              Read the Holy Quran in original Uthmani calligraphy with verse-by-verse audio recitations from world-renowned Qaris. Includes verified translations in English, Bengali, and Urdu.
            </p>

            <div className={styles.quranSnippet}>
              <div className={styles.arabicAyah}>
                اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝١
              </div>
              <div className={styles.englishAyah}>
                &ldquo;Recite in the name of your Lord who created.&rdquo; — [Surah Al-Alaq 96:1]
              </div>
              <div className={styles.audioPill}>
                <HiSpeakerWave size={15} />
                <span>Verse Audio: Mishary Rashid Alafasy &bull; 0 KB Internet Needed</span>
              </div>
            </div>
          </div>

          {/* BENTO 2: PRAYER TIMES & ATHAN (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                <TbBuildingMosque size={26} />
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
              <div className={`${styles.waqtPill} ${styles.waqtActive}`}>
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

          {/* BENTO 3: CELESTIAL QIBLA COMPASS (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                <TbCompass size={26} />
              </div>
              <span className={styles.cardTag}>Sensors &bull; Offline</span>
            </div>

            <h3 className={styles.cardTitle}>Precision Qibla Compass</h3>
            <p className={styles.cardDesc}>
              Locate Kaaba in Makkah with real-time hardware magnetometer guidance, degree headings, and exact distance tracking globally.
            </p>

            <div className={styles.miniWidget}>
              <span>Kaaba Azimuth</span>
              <span className={styles.miniWidgetValue}>58.5° NNE &bull; Makkah</span>
            </div>
          </div>

          {/* BENTO 4: DAILY AZKAR & MISBAHA (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                <TbCirclesRelation size={26} />
              </div>
              <span className={styles.cardTag}>Hisnul Muslim</span>
            </div>

            <h3 className={styles.cardTitle}>Authentic Azkar &amp; Tasbih</h3>
            <p className={styles.cardDesc}>
              Daily morning and evening supplications, Quranic Duas, and an intuitive haptic digital Tasbih clicker for remembrance.
            </p>

            <div className={styles.miniWidget}>
              <span>SubhanAllah Target</span>
              <span className={styles.miniWidgetValue}>33 / 33 &bull; Haptic Pulse</span>
            </div>
          </div>

          {/* BENTO 5: ZAKAT CALCULATOR (4 COLS) */}
          <div className={`${styles.card} ${styles.colSpan4}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconWrap} ${styles.iconWrapGold}`}>
                <TbCalculator size={26} />
              </div>
              <span className={`${styles.cardTag} ${styles.cardTagGold}`}>Nisab Calculator</span>
            </div>

            <h3 className={styles.cardTitle}>Instant Zakat Evaluator</h3>
            <p className={styles.cardDesc}>
              Calculate 2.5% Zakat obligations with 100% mathematical precision across cash, gold, silver, and business investments.
            </p>

            <div className={styles.miniWidget}>
              <span>Silver Nisab Standard</span>
              <span className={styles.miniWidgetValue}>2.5% Net &bull; Live Calc</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/features" className="btn btn-dark" style={{ padding: '14px 34px', fontSize: '0.95rem' }}>
            <span>Explore All 10+ Features &amp; Tools &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
