import Image from 'next/image';
import styles from './AppScreenshots.module.css';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

const screenshots = [
  { src: '/screenshot/Home.png', alt: 'Islam24 Home Screen & Daily Dua' },
  { src: '/screenshot/PrayerTime.png', alt: 'Accurate Prayer Times & Athan Timetable' },
  { src: '/screenshot/Quran.png', alt: 'Holy Quran Reading with Translations' },
  { src: '/screenshot/SurahScreen.png', alt: 'Surah Details & Audio Player' },
];

export default function AppScreenshots() {
  return (
    <section className={styles.section} id="showcase">
      <div className={`container ${styles.showcaseLayout}`}>
        <div className={styles.header}>
          <span className="section-badge section-badge-gold">Visual Sanctuary</span>
          <h2 className={styles.title}>
            Designed for <span className="highlight">Quiet Reverence</span>
          </h2>
          <p className={styles.subtitle}>
            A serene, dark-emerald interface tuned for nighttime Quran recitations, early Fajr prayers, and distraction-free devotion.
          </p>
        </div>

        {/* Featured Video Showcase */}
        <div className={styles.featuredVideoContainer}>
          <div className={styles.featuredContent}>
            <span className={styles.featuredBadge}>▶ App Walkthrough</span>
            <h3 className={styles.featuredTitle}>
              Full Distraction-Free Experience
            </h3>
            <p className={styles.featuredDesc}>
              Watch how seamless and respectful it feels to navigate accurate prayer times, Qibla direction, offline Quran recitations, and daily Azkar with zero advertisements or tracking interruptions.
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
          <h4 className={styles.subTitle}>Crafted Screen Highlights</h4>
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
