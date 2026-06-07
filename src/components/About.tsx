import styles from './About.module.css';

const pillars = [
  {
    emoji: '🚫',
    title: 'No Ads, Ever',
    description: 'No banners, no popups, no interruptions — just pure, focused Islamic content.',
  },
  {
    emoji: '🔒',
    title: 'Privacy First',
    description: 'Only essential permissions. No third-party analytics or trackers are used.',
  },
  {
    emoji: '✅',
    title: 'Trusted Sources',
    description: 'Verified Quranic text from AlQuran Cloud and Risan\'s Quran JSON. Content stored locally.',
  },
];

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.bgLine}></div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="section-badge">Why Islam24</span>
          <h2 className={styles.title}>
            Built for Muslims,
            <br />
            <span className={styles.highlight}>by a Muslim.</span>
          </h2>
          <p className={styles.description}>
            Islam24 was born out of the need for an Islamic app that respects your privacy,
            doesn&apos;t bombard you with ads, and provides accurate, verified content from trusted sources.
          </p>
        </div>

        <div className={styles.right}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <div className={styles.pillarEmoji}>{pillar.emoji}</div>
              <div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
