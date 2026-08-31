'use client';

import React, { useState } from 'react';
import styles from './FaqSection.module.css';

const FAQS = [
  {
    question: 'Is Islam24 100% free and ad-free?',
    answer: 'Yes! Islam24 is completely ad-free, tracker-free, and popup-free. We believe that acts of worship like Prayer, Quran reading, and Azkar should never be interrupted by commercial advertisements.',
  },
  {
    question: 'Does Islam24 track or sell my location data?',
    answer: 'No. Islam24 operates with a strict 100% privacy-first policy. Your GPS coordinates are processed locally on your phone to determine Qibla direction and prayer timings. We never upload or sell your location data to third parties.',
  },
  {
    question: 'Can I read the Quran and listen to audio offline?',
    answer: 'Yes. The complete Quran text, verse-by-verse translations, and audio recitations are available for offline access so you can recite anywhere without requiring an active internet connection.',
  },
  {
    question: 'How are prayer times calculated in Islam24?',
    answer: 'Islam24 uses high-accuracy astronomical algorithms supporting major global calculation methods including Muslim World League (MWL), ISNA, Umm Al-Qura (Makkah), Egyptian General Authority, and University of Islamic Sciences (Karachi). You can also adjust manual offsets in the app.',
  },
  {
    question: 'How can I manage or delete my profile account?',
    answer: 'You can view your profile details or delete your account data anytime by visiting our online Profile & Account Deletion page or directly within the Islam24 mobile application.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">Got Questions?</span>
          <h2 className={styles.title}>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about Islam24 features, calculation methods, and privacy commitments.
          </p>
        </div>

        <div className={styles.faqContainer}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`${styles.faqToggleIcon} ${isOpen ? styles.faqToggleIconRotated : ''}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && <div className={styles.faqAnswer}>{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
