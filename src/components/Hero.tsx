import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGradient}></div>

      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            Ad-Free &bull; Privacy First
          </div>

          <h1 className={styles.title}>
            Your Companion for
            <br />
            <span className={styles.gradientText}>Daily Islamic</span>
            <br />
            Practices
          </h1>

          <p className={styles.description}>
            Accurate prayer times, Qibla direction, complete offline Quran,
            and daily Azkar — all in one beautiful, distraction-free app.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.8</span>
              <span className={styles.statLabel}>★ Rating</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Downloads</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Ads</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="https://play.google.com/store/apps/details?id=com.hazrat.islam24"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-dark ${styles.storeBtn}`}
            >
              <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <div className={styles.storeBtnText}>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.mockupArea}>
          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <Image
                src="/screenshot/Home.png"
                alt="Islam24 App"
                width={280}
                height={560}
                className={styles.appScreenshot}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
