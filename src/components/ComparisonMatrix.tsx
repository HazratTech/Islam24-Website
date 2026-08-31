import React from 'react';
import styles from './ComparisonMatrix.module.css';

const COMPARISONS = [
  {
    feature: '100% Ad-Free Experience',
    desc: 'No video ads, banners, or popups during prayer times',
    islam24: true,
    others: false,
  },
  {
    feature: 'Complete Data Privacy',
    desc: 'Zero tracking or selling of location/user data',
    islam24: true,
    others: false,
  },
  {
    feature: '100% Offline Quran & Recitations',
    desc: 'Full Quran text & audio available without internet connection',
    islam24: true,
    others: false,
  },
  {
    feature: 'Accurate Global Prayer Algorithms',
    desc: 'Support for MWL, ISNA, Umm Al-Qura, Karachi & custom settings',
    islam24: true,
    others: true,
  },
  {
    feature: 'Lightweight & Fast App Size',
    desc: 'Optimized footprint under 25MB with 0 bloatware',
    islam24: true,
    others: false,
  },
  {
    feature: 'Built for Ummah by Community',
    desc: 'Designed purely for spiritual focus and clarity',
    islam24: true,
    others: false,
  },
];

export default function ComparisonMatrix() {
  return (
    <section className={styles.section} id="comparison">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">Why Choose Islam24</span>
          <h2 className={styles.title}>
            Islam24 vs <span className="highlight">Ad-Heavy Apps</span>
          </h2>
          <p className={styles.subtitle}>
            We believe your acts of worship should never be interrupted by commercial advertisements or data tracking.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}>App Feature / Capability</th>
                <th className={styles.islamCol}>✨ Islam24</th>
                <th className={styles.otherCol}>Traditional Apps</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((item, idx) => (
                <tr key={idx}>
                  <td className={styles.featureCol}>
                    <div>{item.feature}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400, marginTop: '2px' }}>
                      {item.desc}
                    </div>
                  </td>
                  <td className={styles.islamCol}>
                    {item.islam24 ? (
                      <span className={styles.checkIcon}>✓</span>
                    ) : (
                      <span className={styles.crossIcon}>✕</span>
                    )}
                  </td>
                  <td className={styles.otherCol}>
                    {item.others ? (
                      <span className={styles.checkIcon} style={{ background: 'rgba(255,255,255,0.1)' }}>✓</span>
                    ) : (
                      <span className={styles.crossIcon}>✕</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
