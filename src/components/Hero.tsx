import styles from './Hero.module.css';
import gplay from 'google-play-scraper';
import { unstable_cache } from 'next/cache';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';
import HeroActions from '@/components/HeroActions';
import { HiShieldCheck, HiStar } from 'react-icons/hi2';
import { TbBuildingMosque, TbBook2 } from 'react-icons/tb';

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
      return { scoreText: '4.8', installs: '100+' };
    }
  },
  ['play-store-stats'],
  { revalidate: 86400 }
);

export default async function Hero() {
  const stats = await getAppStats();

  return (
    <section className={styles.hero}>
      <div className={styles.bgGradient}></div>

      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.content}>
          <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>

          <div className={styles.badge}>
            <HiShieldCheck size={16} style={{ color: 'var(--emerald)' }} />
            <span>100% On-Device &bull; Zero Commercial Ads &bull; Complete Privacy</span>
          </div>

          <h1 className={styles.title}>
            Worship in{' '}
            <br />
            <span className={styles.gradientText}>Absolute Stillness.</span>
          </h1>

          <p className={styles.description}>
            The distraction-free Islamic app for Android. Precise astronomical prayer times, offline Holy Quran with verse audio, Kaaba Qibla direction, and daily Azkar — engineered with zero commercial tracking.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>
                {stats.scoreText} <HiStar size={18} style={{ color: 'var(--gold)', verticalAlign: 'middle', marginTop: '-3px' }} />
              </span>
              <span className={styles.statLabel}>Google Play</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{stats.installs}</span>
              <span className={styles.statLabel}>Downloads</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Ad Trackers</span>
            </div>
          </div>

          <HeroActions />
        </div>

        <div className={styles.mockupArea}>
          <div className={styles.mockupGlow}></div>

          {/* Floating Spiritual Badges */}
          <div className={`${styles.chip} ${styles.chipTopLeft}`}>
            <span className={styles.chipIcon}><TbBuildingMosque size={18} /></span>
            <span>Accurate Athan Alerts</span>
          </div>

          <div className={`${styles.chip} ${styles.chipBottomRight}`}>
            <span className={styles.chipIcon}><TbBook2 size={18} /></span>
            <span>100% Offline Quran</span>
          </div>

          <div className={styles.phone}>
            <div className={styles.phoneScreen}>
              <OptimizedVideoPlayer
                poster="/videos/hero-poster-v2.jpg"
                webm="/videos/hero-preview-v2.webm"
                mp4="/videos/hero-preview-v2.mp4"
                alt="Free Ad-Free Islamic App Screen Preview Video"
                width={290}
                height={580}
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
