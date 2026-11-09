'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AppScreenshots.module.css';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';
import { HiCheck, HiPlay } from 'react-icons/hi2';
import { TbBuildingMosque, TbBook2, TbCompass, TbCirclesRelation, TbHeartHandshake } from 'react-icons/tb';

interface ShowcaseTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge: string;
  arabic: string;
  title: string;
  desc: string;
  highlights: string[];
  link: string;
  linkText: string;
  screenshot: string;
  alt: string;
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'prayer',
    label: 'Prayer Times & Athan',
    icon: <TbBuildingMosque size={18} />,
    badge: 'Astronomical Accuracy',
    arabic: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا',
    title: 'Accurate Global Prayer Times & Athan',
    desc: 'High-accuracy astronomical algorithms supporting major global calculation methods including Muslim World League (MWL), ISNA, Umm Al-Qura (Makkah), and Karachi.',
    highlights: [
      '100% on-device GPS calculation — your coordinates are never sent to remote servers',
      'Customizable Athan audio alerts with beautiful recitation options',
      'Both Hanafi and Shafi’i Asr jurisprudence calculation standards supported',
    ],
    link: '/prayer-times',
    linkText: 'Explore Prayer Times Tool &rarr;',
    screenshot: '/screenshot/prayer-times.webp',
    alt: 'Accurate Islamic Prayer Times and Live Athan Notifications',
  },
  {
    id: 'quran',
    label: 'Offline Holy Quran',
    icon: <TbBook2 size={18} />,
    badge: '100% Offline Access',
    arabic: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
    title: 'Complete Quran with Verse Audio',
    desc: 'Read the Holy Quran in original digital Uthmani calligraphy with verse-by-verse audio recitations from world-renowned Qaris. Stored locally on your phone.',
    highlights: [
      'All 114 Surahs and 6,236 Ayahs available offline without internet access',
      'Verified translations in English, Bengali, and Urdu',
      'Clean audio recitation player with auto-scroll and verse bookmarking',
    ],
    link: '/quran',
    linkText: 'Explore Quran Reader &rarr;',
    screenshot: '/screenshot/quran-ayah.webp',
    alt: 'Holy Quran Uthmani Script with Verse Audio Recitation',
  },
  {
    id: 'qibla',
    label: 'Kaaba Qibla Compass',
    icon: <TbCompass size={18} />,
    badge: 'Hardware Sensor Driven',
    arabic: 'فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ',
    title: 'Precision Kaaba Qibla Compass',
    desc: 'Orient towards the Kaaba in Makkah with real-time magnetometer hardware guidance, degree headings, and exact distance tracking globally.',
    highlights: [
      'Real-time magnetic sensor guidance with smooth needle damping',
      'Accurate degree heading and magnetic declination calculation',
      'Exact kilometer distance to Makkah from anywhere on Earth',
    ],
    link: '/qibla-finder',
    linkText: 'Explore Qibla Finder &rarr;',
    screenshot: '/screenshot/qibla-compass.webp',
    alt: 'Precision Real-Time Qibla Compass to Kaaba in Makkah',
  },
  {
    id: 'azkar',
    label: 'Hisnul Muslim & Duas',
    icon: <TbHeartHandshake size={18} />,
    badge: 'Authentic Sunnah',
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    title: 'Authentic Daily Azkar & Duas',
    desc: 'Morning, evening, after-prayer, and situational supplications compiled from Hisnul Muslim (Fortress of the Muslim) with transliteration and translation.',
    highlights: [
      'Verified authentic Hadith references for every supplication',
      'Arabic text with English transliteration and clear meanings',
      'One-tap completion tracker to maintain daily Dhikr consistency',
    ],
    link: '/azkar-dua',
    linkText: 'Explore Azkar & Duas &rarr;',
    screenshot: '/screenshot/azkar-dua.webp',
    alt: 'Authentic Hisnul Muslim Daily Morning and Evening Azkar',
  },
  {
    id: 'tasbih',
    label: 'Digital Tasbih',
    icon: <TbCirclesRelation size={18} />,
    badge: 'Haptic Remembrance',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    title: 'Haptic Digital Tasbih Clicker',
    desc: 'Tactile counter for your daily remembrance with gentle haptic vibration feedback, lap targets, and audio toggles.',
    highlights: [
      'Tactile haptic vibration on every count for effortless focus',
      'Preset targets for 33, 99, or custom daily Dhikr routines',
      'Counter memory preserves your count across sessions without an account',
    ],
    link: '/azkar-dua',
    linkText: 'Explore Digital Tasbih &rarr;',
    screenshot: '/screenshot/tasbih-counter.webp',
    alt: 'Digital Tasbih Counter with Haptic Touch for Dhikr',
  },
];

export default function AppScreenshots() {
  const [activeTab, setActiveTab] = useState<string>('prayer');
  const currentTab = SHOWCASE_TABS.find((t) => t.id === activeTab) || SHOWCASE_TABS[0];

  return (
    <section className={styles.section} id="showcase">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge section-badge-gold">Interactive App Showcase</span>
          <h2 className={styles.title}>
            Engineered for <span className="highlight">Quiet Reverence</span>
          </h2>
          <p className={styles.subtitle}>
            Explore the authentic, ad-free interface crafted specifically for daily Salat, Quran recitation, and continuous remembrance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsNav} role="tablist">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTabBtn : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Device Stage */}
        <div className={styles.stage}>
          <div className={styles.stagePhoneWrap}>
            <div className={styles.stageGlow}></div>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <Image
                  src={currentTab.screenshot}
                  alt={currentTab.alt}
                  width={260}
                  height={520}
                  className={styles.screenImage}
                  priority
                />
              </div>
            </div>
          </div>

          <div className={styles.stageContent}>
            <span className={styles.stageBadge}>{currentTab.badge}</span>
            <div className={styles.stageArabic}>{currentTab.arabic}</div>
            <h3 className={styles.stageTitle}>{currentTab.title}</h3>
            <p className={styles.stageDesc}>{currentTab.desc}</p>

            <ul className={styles.featureList}>
              {currentTab.highlights.map((h, i) => (
                <li key={i} className={styles.featureItem}>
                  <HiCheck size={18} className={styles.checkIcon} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className={styles.stageAction}>
              <Link
                href={currentTab.link}
                className="btn btn-dark"
                style={{ padding: '12px 26px', fontSize: '0.92rem' }}
                dangerouslySetInnerHTML={{ __html: currentTab.linkText }}
              />
            </div>
          </div>
        </div>

        {/* Featured Video Theater Frame */}
        <div className={styles.videoTheater}>
          <div className={styles.theaterContent}>
            <span className={styles.stageBadge}>
              <HiPlay size={13} style={{ color: 'var(--emerald)' }} />
              <span>Full App Walkthrough</span>
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Experience the Purity of Zero Advertisements
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Watch how clean and respectful daily worship feels when commercial video ads, tracking popups, and distracting banners are completely removed.
            </p>
          </div>

          <div className={styles.theaterPhoneWrap}>
            <div className={styles.phoneFrame} style={{ width: '230px', height: '460px', borderRadius: '36px' }}>
              <div className={styles.phoneScreen} style={{ borderRadius: '28px' }}>
                <OptimizedVideoPlayer
                  poster="/videos/walkthrough-poster-v2.jpg"
                  webm="/videos/walkthrough-v2.webm"
                  mp4="/videos/walkthrough-v2.mp4"
                  alt="Islam24 Full App Walkthrough Video"
                  width={230}
                  height={460}
                  className={styles.screenImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
