import styles from './Hero.module.css';
import gplay from 'google-play-scraper';
import { unstable_cache } from 'next/cache';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

const getAppStats = unstable_cache(
  async () => {
    try {
      const appInfo = await gplay.app({ appId: 'com.hazrat.islam24' });
      return {
        scoreText: appInfo.scoreText || '4.8',
        installs: appInfo.installs || '100+',
      };
    } catch (e) {
      console.error('Failed to fetch Play Store stats:', e);
      return { scoreText: '4.8', installs: '100+' }; // fallback if API fails
    }
  },
  ['play-store-stats'],
  { revalidate: 86400 } // Cache for 24 hours to prevent rate limits
);

export default async function Hero() {
  const stats = await getAppStats();

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
              <span className={styles.statNumber}>{stats.scoreText}</span>
              <span className={styles.statLabel}>★ Rating</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{stats.installs}</span>
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
              <OptimizedVideoPlayer
                poster="/videos/poster.jpg"
                webm="/videos/app-preview.webm"
                mp4="/videos/app-preview.mp4"
                alt="Islam24 App Screen Preview Video"
                width={280}
                height={560}
                priority
                className={styles.appVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
