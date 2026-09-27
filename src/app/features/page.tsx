'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';

interface FeatureItem {
  title: string;
  desc: string;
  link: string;
  tag: string;
  category: 'worship' | 'quran' | 'tools' | 'privacy';
  icon: React.ReactNode;
}

const ALL_FEATURES: FeatureItem[] = [
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

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'worship' | 'quran' | 'tools' | 'privacy'>('all');

  const filteredFeatures =
    selectedCategory === 'all'
      ? ALL_FEATURES
      : ALL_FEATURES.filter((f) => f.category === selectedCategory);

  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </div>
            <span className="section-badge section-badge-gold">Sanctuary of Features</span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.2rem',
                fontWeight: 800,
                marginBottom: '18px',
                color: 'var(--text-primary)',
                letterSpacing: '-1px',
              }}
            >
              Everything for Your <span className="highlight">Daily Worship</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Engineered for Muslims who seek clarity, spiritual tranquility, and verified sources without commercial distractions. Explore our complete suite of Islamic tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '44px' }}>
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
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  border: selectedCategory === tab.id ? '1px solid var(--emerald)' : '1px solid var(--emerald-border)',
                  background: selectedCategory === tab.id ? 'var(--emerald)' : '#FFFFFF',
                  color: selectedCategory === tab.id ? '#FFFFFF' : 'var(--text-primary)',
                  cursor: 'pointer',
                  boxShadow: selectedCategory === tab.id ? '0 4px 14px rgba(13, 105, 69, 0.25)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Features Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px', marginBottom: '90px' }}>
            {filteredFeatures.map((f, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  padding: '36px 30px',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--emerald-border)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-card-tint)',
                      border: '1px solid var(--emerald-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--emerald)',
                    }}
                  >
                    {f.icon}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'var(--emerald-dark)',
                      background: 'var(--bg-card-tint)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--emerald-border)',
                    }}
                  >
                    {f.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '24px', flex: 1 }}>
                  {f.desc}
                </p>

                <Link
                  href={f.link}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    color: 'var(--emerald)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  Explore Feature &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
