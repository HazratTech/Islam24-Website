import Image from 'next/image';
import styles from './AppScreenshots.module.css';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

const screenshots = [
  { src: '/screenshot/home-main.webp', alt: 'Islam24 Android Home Screen with Prayer Timetable and Daily Hadith', label: 'Home & Prayer Times' },
  { src: '/screenshot/prayer-times.webp', alt: 'Accurate Islamic Prayer Times and Live Athan Notifications', label: 'Salat Timetable' },
  { src: '/screenshot/quran-ayah.webp', alt: 'Holy Quran Uthmani Script with Verse Audio Recitation', label: 'Offline Quran' },
  { src: '/screenshot/qibla-compass.webp', alt: 'Precision Real-Time Qibla Compass to Kaaba in Makkah', label: 'Qibla Finder' },
  { src: '/screenshot/tasbih-counter.webp', alt: 'Digital Tasbih Counter with Haptic Touch for Dhikr', label: 'Digital Tasbih' },
  { src: '/screenshot/azkar-dua.webp', alt: 'Authentic Hisnul Muslim Daily Morning and Evening Azkar', label: 'Hisnul Muslim & Dua' },
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
            A serene, distraction-free interface thoughtfully crafted for sacred Quran recitations, daily Salat, and continuous devotion.
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
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={styles.screenLabelWrap}>
                  <span className={styles.screenLabel}>{screen.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
