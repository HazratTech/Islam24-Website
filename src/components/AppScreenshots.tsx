import Image from 'next/image';
import styles from './AppScreenshots.module.css';

const screenshots = [
  { src: '/screenshot/Home.png', alt: 'Home Screen' },
  { src: '/screenshot/PrayerTime.png', alt: 'Prayer Times' },
  { src: '/screenshot/Quran.png', alt: 'Quran Reading' },
  { src: '/screenshot/SurahScreen.png', alt: 'Surah Details' },
];

export default function AppScreenshots() {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <div className={styles.header}>
          <span className="section-badge">App Preview</span>
          <h2 className={styles.title}>
            Beautiful & <span className="highlight">Intuitive</span>
          </h2>
          <p className={styles.subtitle}>
            A clean, dark-mode interface designed to keep you focused.
          </p>
        </div>

        <div className={styles.grid}>
          {screenshots.map((screen, idx) => (
            <div key={idx} className={styles.mockupContainer}>
              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={280}
                    height={560}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
