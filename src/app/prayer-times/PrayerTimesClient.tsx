'use client';

import React, { useState } from 'react';

interface CityTimes {
  name: string;
  country: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  nextPrayer: string;
  countdown: string;
}

const SAMPLE_CITIES: CityTimes[] = [
  {
    name: 'London',
    country: 'United Kingdom',
    fajr: '04:18 AM',
    sunrise: '05:54 AM',
    dhuhr: '01:04 PM',
    asr: '04:42 PM',
    maghrib: '08:12 PM',
    isha: '09:44 PM',
    nextPrayer: 'Asr',
    countdown: '01h 38m',
  },
  {
    name: 'Makkah',
    country: 'Saudi Arabia',
    fajr: '04:48 AM',
    sunrise: '06:06 AM',
    dhuhr: '12:22 PM',
    asr: '03:46 PM',
    maghrib: '06:37 PM',
    isha: '08:07 PM',
    nextPrayer: 'Maghrib',
    countdown: '00h 42m',
  },
  {
    name: 'New York',
    country: 'United States',
    fajr: '05:12 AM',
    sunrise: '06:42 AM',
    dhuhr: '12:56 PM',
    asr: '04:28 PM',
    maghrib: '07:08 PM',
    isha: '08:36 PM',
    nextPrayer: 'Dhuhr',
    countdown: '02h 10m',
  },
  {
    name: 'Istanbul',
    country: 'Turkey',
    fajr: '04:54 AM',
    sunrise: '06:24 AM',
    dhuhr: '01:02 PM',
    asr: '04:36 PM',
    maghrib: '07:38 PM',
    isha: '09:02 PM',
    nextPrayer: 'Asr',
    countdown: '01h 15m',
  },
  {
    name: 'Dhaka',
    country: 'Bangladesh',
    fajr: '04:32 AM',
    sunrise: '05:48 AM',
    dhuhr: '11:54 AM',
    asr: '03:22 PM',
    maghrib: '05:58 PM',
    isha: '07:14 PM',
    nextPrayer: 'Isha',
    countdown: '01h 05m',
  },
  {
    name: 'Dubai',
    country: 'UAE',
    fajr: '04:44 AM',
    sunrise: '06:02 AM',
    dhuhr: '12:18 PM',
    asr: '03:42 PM',
    maghrib: '06:32 PM',
    isha: '07:58 PM',
    nextPrayer: 'Maghrib',
    countdown: '00h 55m',
  },
];

const CALC_METHODS = [
  'Muslim World League (MWL)',
  'ISNA (North America)',
  'Umm Al-Qura (Makkah)',
  'Univ. of Islamic Sciences (Karachi)',
  'Egyptian General Authority',
];

export default function PrayerTimesClient() {
  const [selectedCity, setSelectedCity] = useState(SAMPLE_CITIES[0]);
  const [selectedMethod, setSelectedMethod] = useState(CALC_METHODS[0]);
  const [asrSchool, setAsrSchool] = useState<'standard' | 'hanafi'>('standard');
  const [isPlayingAthan, setIsPlayingAthan] = useState(false);

  const toggleAthanAudio = () => {
    setIsPlayingAthan(!isPlayingAthan);
  };

  const prayers = [
    { name: 'Fajr', time: selectedCity.fajr, icon: '🌅', desc: 'Dawn Prayer' },
    { name: 'Sunrise', time: selectedCity.sunrise, icon: '☀️', desc: 'Shuruk' },
    { name: 'Dhuhr', time: selectedCity.dhuhr, icon: '☀️', desc: 'Noon Prayer' },
    {
      name: 'Asr',
      time: asrSchool === 'hanafi' ? '05:22 PM' : selectedCity.asr,
      icon: '⛅',
      desc: 'Afternoon Prayer',
    },
    { name: 'Maghrib', time: selectedCity.maghrib, icon: '🌇', desc: 'Sunset Prayer' },
    { name: 'Isha', time: selectedCity.isha, icon: '🌙', desc: 'Night Prayer' },
  ];

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto' }}>
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--emerald-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '44px 32px',
          boxShadow: 'var(--shadow-lg), 0 4px 20px rgba(13, 105, 69, 0.04)',
          marginBottom: '70px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'var(--emerald-dark)',
              background: 'var(--bg-card-tint)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--emerald-border)',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            Live Timetable Preview
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Astronomical Daily Prayer Timetable
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto' }}>
            Switch calculation standards, choose your city, and test customizable Athan alert notifications with high-accuracy solar calculations.
          </p>
        </div>

        {/* Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--bg-card-tint)',
            padding: '16px 20px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--emerald-border)',
            marginBottom: '32px',
          }}
        >
          {/* City Selection */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>City:</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {SAMPLE_CITIES.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCity(c)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    border: selectedCity.name === c.name ? '1px solid var(--emerald)' : '1px solid var(--emerald-border)',
                    background: selectedCity.name === c.name ? 'var(--emerald)' : '#FFFFFF',
                    color: selectedCity.name === c.name ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Asr Juristic School */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Asr Method:</span>
            <div style={{ display: 'flex', background: '#FFFFFF', padding: '3px', borderRadius: '8px', border: '1px solid var(--emerald-border)' }}>
              <button
                onClick={() => setAsrSchool('standard')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: 'none',
                  background: asrSchool === 'standard' ? 'var(--emerald)' : 'transparent',
                  color: asrSchool === 'standard' ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Standard (Shafi/Hanbali/Maliki)
              </button>
              <button
                onClick={() => setAsrSchool('hanafi')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: 'none',
                  background: asrSchool === 'hanafi' ? 'var(--emerald)' : 'transparent',
                  color: asrSchool === 'hanafi' ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Hanafi (2x shadow)
              </button>
            </div>
          </div>
        </div>

        {/* Next Prayer Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0D6945 0%, #08432B 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px 28px',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFDF80', fontWeight: 700 }}>
              Current Status in {selectedCity.name}, {selectedCity.country}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800 }}>
              Next Prayer: <span style={{ color: '#FFDF80' }}>{selectedCity.nextPrayer}</span> in {selectedCity.countdown}
            </div>
          </div>

          {/* Audio Preview Button */}
          <button
            onClick={toggleAthanAudio}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: 'var(--radius-pill)',
              background: isPlayingAthan ? '#D4AF37' : 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: isPlayingAthan ? '#14231C' : '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {isPlayingAthan ? (
              <>
                <span>🔊</span> Athan Playing (Makkah Reciter)
              </>
            ) : (
              <>
                <span>▶</span> Test Athan Alert
              </>
            )}
          </button>
        </div>

        {/* 6 Prayer Timetable Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {prayers.map((p) => {
            const isNext = p.name === selectedCity.nextPrayer;
            return (
              <div
                key={p.name}
                style={{
                  background: isNext ? '#F2F8F4' : '#FFFFFF',
                  border: isNext ? '2px solid var(--emerald)' : '1px solid var(--emerald-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 16px',
                  textAlign: 'center',
                  boxShadow: isNext ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {isNext && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      height: '4px',
                      background: 'var(--emerald)',
                    }}
                  />
                )}
                <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: isNext ? 'var(--emerald-dark)' : 'var(--text-secondary)',
                    marginBottom: '4px',
                  }}
                >
                  {p.time}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {p.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Calculation Standard Dropdown Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div>
            Standard Method: <strong>{selectedMethod}</strong>
          </div>
          <div>
            📍 Coordinates computed 100% on-device (Zero data logging)
          </div>
        </div>
      </div>
    </div>
  );
}
