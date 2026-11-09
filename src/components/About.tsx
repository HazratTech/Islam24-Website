import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="mission">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="section-badge section-badge-gold">A Sacred Amanah (Trust)</span>
          <h2 className={styles.title}>
            Built as a Waqf &amp; Gift for <span className={styles.highlight}>The Global Ummah</span>
          </h2>
          <p className={styles.description}>
            Islam24 was born out of deep personal conviction. As practicing Muslims, we grew weary of mainstream prayer apps that compromised user privacy to data brokers, tracked daily habits, or interrupted sacred moments after Athan with commercial video advertisements.
          </p>
          <p className={styles.description}>
            This application is engineered by Hazrat Ummar Shaikh as a continuous charitable dedication (Sadaqah Jariyah). Every astronomical calculation, Quranic script, and Azkar collection is verified, lightweight, and designed to function completely on your local device.
          </p>
          
          <div style={{ marginTop: '12px', display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/ihazratummar/Islam24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
              style={{ fontSize: '0.88rem', padding: '10px 22px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>Inspect Source on GitHub</span>
            </a>
            <Link
              href="/about-us"
              style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--emerald)', textDecoration: 'underline' }}
            >
              Read Full Mission &amp; Story &rarr;
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.pillarCard}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>100% On-Device Processing</h3>
              <p className={styles.pillarDesc}>
                Your GPS coordinates, prayer alarms, and recitation history are processed exclusively on your phone hardware. Never logged or uploaded to remote tracking clouds.
              </p>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Auditable &amp; Open Source</h3>
              <p className={styles.pillarDesc}>
                Transparency breeds trust. Islam24&apos;s source code is public and verifiable, proving zero third-party marketing SDKs, trackers, or hidden analytics payloads.
              </p>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Zero Commercial Monetization</h3>
              <p className={styles.pillarDesc}>
                Islam24 will never be sold to advertising consortiums, bloated with video interstitials, or locked behind premium monthly paywalls. Completely free forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
