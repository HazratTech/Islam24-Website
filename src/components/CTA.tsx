import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          Start Your Journey with <span className={styles.highlight}>Islam24</span>
        </h2>
        <p className={styles.description}>
          Join thousands of Muslims who trust Islam24 for their daily worship. Download free today.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.hazrat.islam24"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.cta}`}
        >
          Download on Google Play
        </a>
      </div>
    </section>
  );
}
