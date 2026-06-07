import styles from './Features.module.css';

const features = [
  {
    title: 'Accurate Prayer Times',
    description: 'Location-based prayer times with optional Athan alerts and Hijri calendar integration.',
    emoji: '🕋',
  },
  {
    title: 'Qibla Direction',
    description: 'Precise compass to find the Qibla from anywhere. Works offline after initial setup.',
    emoji: '🧭',
  },
  {
    title: 'Complete Quran',
    description: 'Arabic Uthmani script with English & Bengali translations. 100% offline access.',
    emoji: '📖',
  },
  {
    title: 'Azkar & Duas',
    description: 'Morning and evening azkar with daily duas — properly organized and sourced.',
    emoji: '📿',
  },
  {
    title: 'Zakat Calculator',
    description: 'Quick and accurate Zakat calculation based on current Nisab values.',
    emoji: '🧮',
  },
  {
    title: '99 Names of Allah',
    description: 'Beautiful presentation of Asma ul Husna with meanings.',
    emoji: '✨',
  },
  {
    title: 'Islamic Calendar',
    description: 'Track important Islamic dates and Hijri calendar events.',
    emoji: '📅',
  },
  {
    title: 'Tasbih Counter',
    description: 'Digital counter for your Tasbih and Dhikr needs.',
    emoji: '🤲',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <div className={styles.header}>
          <span className="section-badge">Features</span>
          <h2 className={styles.title}>
            Everything for Your <span className={styles.highlight}>Daily Worship</span>
          </h2>
          <p className={styles.subtitle}>
            Designed for Muslims who want a clean, focused, and reliable app without distractions.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.emoji}>{feature.emoji}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
