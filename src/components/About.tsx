import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="mission">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="section-badge section-badge-gold">Our Sacred Mission</span>
          <h2 className={styles.title}>
            Technology in Service of <span className={styles.highlight}>Your Faith</span>
          </h2>
          <p className={styles.description}>
            We built Islam24 because worship is sacred. When you stand before your Creator in prayer or open the Holy Quran, your spiritual state should never be interrupted by commercial popups, banner ads, or tracking algorithms trying to monetize your location.
          </p>
          <p className={styles.description}>
            Islam24 is engineered as an uncompromised sanctuary — clean, privacy-respecting, and dedicated to elevating the daily worship of Muslims worldwide.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.pillarCard}>
            <div className={styles.iconBox}>
              {/* Shield / No Ads Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Absolute Purity (Zero Ads, Forever)</h3>
              <p className={styles.pillarDesc}>
                No video interruptions during Athan, no flashing banner ads beneath Quranic ayahs. 100% focused on Deen.
              </p>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconBox}>
              {/* Privacy Lock Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Sacred Data Privacy</h3>
              <p className={styles.pillarDesc}>
                Your GPS coordinates are used exclusively on your local device to calculate Qibla and prayer times. Never logged or sold.
              </p>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconBox}>
              {/* Verified Certificate Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Authentic Islamic Sources</h3>
              <p className={styles.pillarDesc}>
                Verified Quranic text from digital Uthmani manuscripts and prayer calculations based on globally trusted astronomical observatories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
