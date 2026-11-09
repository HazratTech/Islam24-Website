'use client';

import React, { useState } from 'react';
import { HiSpeakerWave, HiPlay, HiPause } from 'react-icons/hi2';
import { TbSunrise, TbSun, TbSunHigh, TbSunLow, TbSunset, TbMoonStars } from 'react-icons/tb';
import styles from './PrayerTimes.module.css';

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

export default function PrayerTimesClient() {
  const [selectedCity, setSelectedCity] = useState(SAMPLE_CITIES[0]);
  const [asrSchool, setAsrSchool] = useState<'standard' | 'hanafi'>('standard');
  const [isPlayingAthan, setIsPlayingAthan] = useState(false);

  const toggleAthanAudio = () => {
    setIsPlayingAthan(!isPlayingAthan);
  };

  const prayers = [
    { name: 'Fajr', time: selectedCity.fajr, icon: <TbSunrise size={28} style={{ color: 'var(--gold)' }} />, desc: 'Dawn Salat' },
    { name: 'Sunrise', time: selectedCity.sunrise, icon: <TbSunHigh size={28} style={{ color: 'var(--gold-dark)' }} />, desc: 'Shuruk' },
    { name: 'Dhuhr', time: selectedCity.dhuhr, icon: <TbSun size={28} style={{ color: 'var(--gold)' }} />, desc: 'Noon Salat' },
    {
      name: 'Asr',
      time: asrSchool === 'hanafi' ? '05:22 PM' : selectedCity.asr,
      icon: <TbSunLow size={28} style={{ color: 'var(--emerald)' }} />,
      desc: 'Afternoon Salat',
    },
    { name: 'Maghrib', time: selectedCity.maghrib, icon: <TbSunset size={28} style={{ color: 'var(--gold-dark)' }} />, desc: 'Sunset Salat' },
    { name: 'Isha', time: selectedCity.isha, icon: <TbMoonStars size={28} style={{ color: 'var(--emerald-dark)' }} />, desc: 'Night Salat' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.timetableCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardBadge}>
            Live Timetable Preview
          </span>
          <h2 className={styles.cardTitle}>
            Astronomical Daily Prayer Timetable
          </h2>
          <p className={styles.cardSubtitle}>
            Select your city, adjust Asr jurisprudence, and preview customizable Athan alert notifications computed with local solar coordinates.
          </p>
        </div>

        {/* Controls Bar */}
        <div className={styles.controlsBar}>
          {/* City Selection */}
          <div className={styles.cityGroup}>
            <span className={styles.cityLabel}>City:</span>
            <div className={styles.cityPills}>
              {SAMPLE_CITIES.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCity(c)}
                  className={`${styles.cityBtn} ${selectedCity.name === c.name ? styles.cityBtnActive : ''}`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Asr School Switcher */}
          <div className={styles.schoolGroup}>
            <span className={styles.cityLabel}>Asr School:</span>
            <div className={styles.schoolSegment}>
              <button
                onClick={() => setAsrSchool('standard')}
                className={`${styles.schoolBtn} ${asrSchool === 'standard' ? styles.schoolBtnActive : ''}`}
              >
                Standard (Shafi/Maliki/Hanbali)
              </button>
              <button
                onClick={() => setAsrSchool('hanafi')}
                className={`${styles.schoolBtn} ${asrSchool === 'hanafi' ? styles.schoolBtnActive : ''}`}
              >
                Hanafi
              </button>
            </div>
          </div>
        </div>

        {/* Next Prayer Hero Banner */}
        <div className={styles.nextPrayerHero}>
          <div className={styles.nextPrayerInfo}>
            <div className={styles.pulsingDot} />
            <div>
              <div className={styles.nextPrayerTag}>Upcoming Prayer</div>
              <div className={styles.nextPrayerName}>{selectedCity.nextPrayer}</div>
            </div>
          </div>

          <div className={styles.countdownBox}>
            <div className={styles.countdownLabel}>Time Remaining</div>
            <div className={styles.countdownTime}>{selectedCity.countdown}</div>
          </div>
        </div>

        {/* 6 Daily Prayer Cards */}
        <div className={styles.prayersGrid}>
          {prayers.map((p) => {
            const isNext = p.name === selectedCity.nextPrayer;
            return (
              <div
                key={p.name}
                className={`${styles.prayerCard} ${isNext ? styles.prayerCardActive : ''}`}
              >
                {isNext && <span className={styles.activeIndicator}>Next</span>}
                <div className={styles.prayerIconWrap}>{p.icon}</div>
                <div className={styles.prayerName}>{p.name}</div>
                <div className={styles.prayerTime}>{p.time}</div>
                <div className={styles.prayerDesc}>{p.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Athan Audio Preview Bar */}
        <div className={styles.audioRow}>
          <div className={styles.audioInfo}>
            <HiSpeakerWave size={22} className={styles.speakerIcon} />
            <div>
              <div className={styles.audioTitle}>Authentic Athan Audio Notification</div>
              <div className={styles.audioSub}>Recorded in Makkah Al-Mukarramah &amp; Al-Madinah</div>
            </div>
          </div>

          <button
            onClick={toggleAthanAudio}
            className={styles.athanBtn}
            aria-label={isPlayingAthan ? 'Stop Athan' : 'Test Athan Alert'}
          >
            {isPlayingAthan ? <><HiPause size={16} /> Stop Athan</> : <><HiPlay size={16} /> Test Athan Alert</>}
          </button>
        </div>
      </div>
    </div>
  );
}
