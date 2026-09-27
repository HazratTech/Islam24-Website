import Image from 'next/image';
import styles from './FeatureScreenshots.module.css';

export interface ScreenItem {
  src: string;
  alt: string;
  label: string;
}

interface FeatureScreenshotsProps {
  badge?: string;
  title: string;
  subtitle: string;
  screens: ScreenItem[];
}

export default function FeatureScreenshots({
  badge = 'Interface Preview',
  title,
  subtitle,
  screens,
}: FeatureScreenshotsProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge section-badge-gold">{badge}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {screens.map((screen, idx) => (
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
              <div className={styles.labelWrap}>
                <span className={styles.label}>{screen.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
