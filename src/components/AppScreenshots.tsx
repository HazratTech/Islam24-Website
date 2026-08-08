import Image from 'next/image';
import styles from './AppScreenshots.module.css';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

const screenshots = [
  { src: '/screenshot/Home.png', alt: 'Home Screen' },
  { src: '/screenshot/PrayerTime.png', alt: 'Prayer Times' },
  { src: '/screenshot/Quran.png', alt: 'Quran Reading' },
  { src: '/screenshot/SurahScreen.png', alt: 'Surah Details' },
];

export default function AppScreenshots() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.showcaseLayout}`}>
        <div className={styles.header}>
          <span className="section-badge">Full Showcase</span>
          <h2 className={styles.title}>
            Experience <span className="highlight">Islam24</span>
          </h2>
          <p className={styles.subtitle}>
            A complete, ad-free Islamic app designed with precision and beauty. Watch the full app walkthrough in action.
          </p>
        </div>

        {/* Featured Video Showcase */}
        <div className={styles.featuredVideoContainer}>
          <div className={styles.featuredContent}>
            <span className={styles.featuredBadge}>▶ Full App Recording</span>
            <h3 className={styles.featuredTitle}>
              Complete Distraction-Free Walkthrough
            </h3>
            <p className={styles.featuredDesc}>
              Watch how seamless it is to navigate accurate prayer times, Qibla direction, offline Quran recitations, and daily Azkar without any ads or popups.
            </p>
          </div>

          <div className={styles.featuredPhone}>
            <div className={styles.featuredPhoneScreen}>
              <OptimizedVideoPlayer
                poster="/videos/full-app-poster.jpg"
                webm="/videos/full-app-walkthrough.webm"
                mp4="/videos/full-app-walkthrough.mp4"
                alt="Islam24 Full App Walkthrough Video"
                width={270}
                height={540}
                className={styles.walkthroughVideo}
              />
            </div>
          </div>
        </div>

        {/* Static Screenshots Sub-Grid */}
        <div className={styles.screenshotsSection}>
          <h4 className={styles.subTitle}>App Screen Highlights</h4>
          <div className={styles.grid}>
            {screenshots.map((screen, idx) => (
              <div key={idx} className={styles.mockupContainer}>
                <div className={styles.phone}>
                  <div className={styles.phoneScreen}>
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={220}
                      height={440}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
