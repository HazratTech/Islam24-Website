import React from 'react';
import { HiStar } from 'react-icons/hi2';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: "No more 30-second casino or game ads after the Athan. Islam24 gives me the stillness and focus I actually need for daily Salah.",
    name: "Dr. Tariq Mansoor",
    role: "Practicing Muslim & Physician • London, UK",
    initial: "T",
  },
  {
    quote: "The offline Quran reading and audio recitations are pure craftsmanship. Crystal clear Uthmani text, zero lag, and it doesn't drain my phone battery.",
    name: "Maryam Siddiqui",
    role: "Hifz Student & Educator • Toronto, Canada",
    initial: "M",
  },
  {
    quote: "Knowing my GPS location stays strictly on my phone hardware instead of being sold to ad brokers made Islam24 an immediate switch for our family.",
    name: "Farhan Akhtar",
    role: "Software Engineer • Dubai, UAE",
    initial: "F",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="community">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge section-badge-gold">Voices of the Ummah</span>
          <h2 className={styles.title}>
            Why Muslims are Switching to <span className="highlight">Islam24</span>
          </h2>
          <p className={styles.subtitle}>
            From doctors to students and engineers worldwide, discover how Muslims reclaimed serenity in their daily worship.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} size={18} />
                ))}
              </div>

              <div className={styles.quoteText}>
                &ldquo;{t.quote}&rdquo;
              </div>

              <div className={styles.authorRow}>
                <div className={styles.authorAvatar}>
                  {t.initial}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
