'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './FeaturesClient.module.css';

export interface FeatureItem {
  title: string;
  desc: string;
  link: string;
  tag: string;
  category: 'worship' | 'quran' | 'tools' | 'privacy';
  icon: React.ReactNode;
}

export const ALL_FEATURES: FeatureItem[] = [
  {
    title: 'Complete Offline Quran',
    desc: 'Read the Quran in authentic Uthmani calligraphy with English and Bengali translations plus verse audio recitations.',
    link: '/quran',
    tag: 'Core Feature',
    category: 'quran',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
    ),
  },
  {
    title: 'Accurate Prayer Times',
    desc: 'Precise astronomical calculations supporting MWL, ISNA, Umm Al-Qura, and Karachi with customizable Athan alerts.',
    link: '/prayer-times',
    tag: 'Daily Salat',
    category: 'worship',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
  },
  {
    title: 'Precision Qibla Compass',
    desc: 'Locate the Kaaba in Makkah with real-time magnetometer sensor orientation, degree headings, and distance metrics.',
    link: '/qibla-finder',
    tag: 'Global Direction',
    category: 'tools',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    ),
  },
  {
    title: 'Instant Zakat Calculator',
    desc: 'Compute your exact 2.5% annual Zakat liability across cash, gold, silver, and business assets with live Nisab guidance.',
    link: '/zakat-calculator',
    tag: 'Third Pillar',
    category: 'tools',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
  {
    title: 'Daily Azkar & Duas',
    desc: 'Authentic supplications from Hisnul Muslim for morning, evening, after prayer, and daily routines with transliteration.',
    link: '/azkar-dua',
    tag: 'Daily Dhikr',
    category: 'worship',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    title: 'Digital Tasbih Clicker',
    desc: 'Tactile on-screen counter for your daily Dhikr recitations with haptic response, audio toggles, and target counters.',
    link: '/azkar-dua',
    tag: 'Remembrance',
    category: 'worship',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
  },
  {
    title: '99 Names of Allah (Asma ul Husna)',
    desc: 'Reflect upon the divine attributes of Allah with their deep spiritual meanings, transliterations, and audio pronunciation.',
    link: '/azkar-dua',
    tag: 'Knowledge',
    category: 'quran',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
  },
  {
    title: '100% Ad-Free Commitment',
    desc: 'No commercial banners, popups, or video ads ever interrupting your sacred moments of devotion and prayer.',
    link: '/about-us',
    tag: 'Sacred Pledge',
    category: 'privacy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
    ),
  },
  {
    title: 'Sacred Data Privacy',
    desc: 'Zero tracking, zero location telemetry selling. Your GPS coordinates are computed strictly on your local device.',
    link: '/privacy-policy',
    tag: 'On-Device',
    category: 'privacy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
];

export default function FeaturesClient() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'worship' | 'quran' | 'tools' | 'privacy'>('all');

  const filteredFeatures =
    selectedCategory === 'all'
      ? ALL_FEATURES
      : ALL_FEATURES.filter((f) => f.category === selectedCategory);

  return (
    <>
      {/* Category Filter Pills */}
      <div className={styles.filterContainer}>
        {[
          { id: 'all', label: 'All Features' },
          { id: 'worship', label: 'Daily Worship' },
          { id: 'quran', label: 'Holy Quran' },
          { id: 'tools', label: 'Islamic Tools' },
          { id: 'privacy', label: 'Ad-Free & Privacy' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as 'all' | 'worship' | 'quran' | 'tools' | 'privacy')}
            className={`${styles.filterBtn} ${selectedCategory === tab.id ? styles.filterBtnActive : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Features Bento Grid */}
      <div className={styles.grid}>
        {filteredFeatures.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>
                {f.icon}
              </div>
              <span className={styles.cardTag}>
                {f.tag}
              </span>
            </div>

            <h3 className={styles.cardTitle}>
              {f.title}
            </h3>
            <p className={styles.cardDesc}>
              {f.desc}
            </p>

            <Link href={f.link} className={styles.cardLink}>
              Explore Feature &rarr;
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
