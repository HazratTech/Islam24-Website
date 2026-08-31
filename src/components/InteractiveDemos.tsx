'use client';

import React, { useState } from 'react';
import styles from './InteractiveDemos.module.css';

const CALC_METHODS = [
  { id: 'MWL', name: 'Muslim World League', fajr: '04:12 AM', dhuhr: '12:15 PM', asr: '03:45 PM', maghrib: '06:52 PM', isha: '08:18 PM' },
  { id: 'ISNA', name: 'ISNA (North America)', fajr: '04:20 AM', dhuhr: '12:15 PM', asr: '03:42 PM', maghrib: '06:50 PM', isha: '08:12 PM' },
  { id: 'UMM_AL_QURA', name: 'Umm Al-Qura (Makkah)', fajr: '04:05 AM', dhuhr: '12:15 PM', asr: '03:50 PM', maghrib: '06:55 PM', isha: '08:25 PM' },
  { id: 'KARACHI', name: 'Univ. of Karachi', fajr: '04:15 AM', dhuhr: '12:15 PM', asr: '03:48 PM', maghrib: '06:53 PM', isha: '08:20 PM' },
];

const CITIES = [
  { name: 'London, UK', angle: 118.8, distance: '4,780 km' },
  { name: 'Makkah, KSA', angle: 0, distance: '0 km (at Kaaba)' },
  { name: 'New York, USA', angle: 58.5, distance: '10,250 km' },
  { name: 'Istanbul, Turkey', angle: 152.1, distance: '2,410 km' },
  { name: 'Kuala Lumpur, MY', angle: 292.3, distance: '7,040 km' },
];

const TASBIH_PHRASES = [
  { phrase: 'SubhanAllah', arabic: 'سُبْحَانَ اللَّهِ', target: 33 },
  { phrase: 'Alhamdulillah', arabic: 'الْحَمْدُ لِلَّهِ', target: 33 },
  { phrase: 'Allahu Akbar', arabic: 'اللَّهُ أَكْبَرُ', target: 34 },
];

export default function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState<'prayer' | 'compass' | 'quran' | 'zakat' | 'tasbih'>('prayer');

  // Prayer State
  const [selectedMethod, setSelectedMethod] = useState(CALC_METHODS[0]);

  // Compass State
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  // Quran State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Zakat State
  const [cash, setCash] = useState<number>(5000);
  const [goldGrams, setGoldGrams] = useState<number>(20);
  const zakatDue = Math.max(0, (cash + goldGrams * 75) * 0.025);

  // Tasbih State
  const [tasbihIdx, setTasbihIdx] = useState(0);
  const [tasbihCount, setTasbihCount] = useState(0);

  const currentTasbih = TASBIH_PHRASES[tasbihIdx];

  const handleTasbihClick = () => {
    if (tasbihCount + 1 >= currentTasbih.target) {
      setTasbihCount(0);
      setTasbihIdx((prev) => (prev + 1) % TASBIH_PHRASES.length);
    } else {
      setTasbihCount((prev) => prev + 1);
    }
  };

  return (
    <section className={styles.section} id="live-demos">
      <div className={styles.bgGlow}></div>

      <div className="container">
        <div className={styles.header}>
          <span className="section-badge section-badge-gold">Interactive Preview</span>
          <h2 className={styles.title}>
            Experience <span className="highlight">Islam24 Features</span> Live
          </h2>
          <p className={styles.subtitle}>
            Test accurate prayer calculation algorithms, Qibla rotation, Zakat estimator, and offline Quran recitation right here.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsNav}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'prayer' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('prayer')}
          >
            <span>🕌</span> Prayer Timetable
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'compass' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('compass')}
          >
            <span>🧭</span> Qibla Compass
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'quran' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('quran')}
          >
            <span>📖</span> Offline Quran
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'zakat' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('zakat')}
          >
            <span>💰</span> Zakat Calculator
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'tasbih' ? styles.activeTabBtn : ''}`}
            onClick={() => setActiveTab('tasbih')}
          >
            <span>📿</span> Digital Tasbih
          </button>
        </div>

        {/* Demo Content Container */}
        <div className={styles.demoCard}>
          {/* TAB 1: PRAYER TIMETABLE */}
          {activeTab === 'prayer' && (
            <div className={styles.prayerDemoGrid}>
              <div className={styles.prayerControls}>
                <div className={styles.methodTitle}>Calculation Method</div>
                {CALC_METHODS.map((method) => (
                  <button
                    key={method.id}
                    className={`${styles.methodBtn} ${selectedMethod.id === method.id ? styles.methodBtnActive : ''}`}
                    onClick={() => setSelectedMethod(method)}
                  >
                    {method.name}
                  </button>
                ))}
              </div>

              <div>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Daily Prayer Schedule</h3>
                  <span className="section-badge" style={{ margin: 0 }}>Active: Asr</span>
                </div>

                <div className={styles.timetableGrid}>
                  <div className={styles.prayerSlot}>
                    <div className={styles.prayerName}>Fajr</div>
                    <div className={styles.prayerTime}>{selectedMethod.fajr}</div>
                  </div>
                  <div className={styles.prayerSlot}>
                    <div className={styles.prayerName}>Dhuhr</div>
                    <div className={styles.prayerTime}>{selectedMethod.dhuhr}</div>
                  </div>
                  <div className={`${styles.prayerSlot} ${styles.activeSlot}`}>
                    <div className={styles.prayerName}>Asr</div>
                    <div className={styles.prayerTime}>{selectedMethod.asr}</div>
                  </div>
                  <div className={styles.prayerSlot}>
                    <div className={styles.prayerName}>Maghrib</div>
                    <div className={styles.prayerTime}>{selectedMethod.maghrib}</div>
                  </div>
                  <div className={styles.prayerSlot}>
                    <div className={styles.prayerName}>Isha</div>
                    <div className={styles.prayerTime}>{selectedMethod.isha}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: QIBLA COMPASS */}
          {activeTab === 'compass' && (
            <div className={styles.compassLayout}>
              <div className={styles.compassWrapper}>
                <div className={styles.compassDisc}>
                  <div className={styles.kaabaIcon}>🕋</div>
                </div>
                <div
                  className={styles.compassNeedle}
                  style={{ transform: `rotate(${selectedCity.angle}deg)` }}
                >
                  <div className={styles.needleTop}></div>
                  <div className={styles.needleBottom}></div>
                </div>
              </div>

              <div className={styles.citySelectors}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Select City Preview</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Watch the compass needle automatically orient towards Kaaba in Makkah.
                </p>

                {CITIES.map((city) => (
                  <button
                    key={city.name}
                    className={`${styles.cityBtn} ${selectedCity.name === city.name ? styles.cityBtnActive : ''}`}
                    onClick={() => setSelectedCity(city)}
                  >
                    <span>{city.name}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                      {city.angle}° WNW ({city.distance})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: OFFLINE QURAN READER */}
          {activeTab === 'quran' && (
            <div className={styles.quranLayout}>
              <div className={styles.quranHeader}>
                <div>
                  <h3 className={styles.surahTitle}>Surah Al-Fatiha (The Opening)</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Surah 1 &bull; 7 Verses &bull; Meccan</p>
                </div>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="btn btn-dark"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
                </button>
              </div>

              <div className={styles.quranArabic}>
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ۝١ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ۝٢
              </div>

              <div className={styles.quranEnglish}>
                &ldquo;In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is due to Allah, Lord of the worlds.&rdquo;
              </div>

              <div className={styles.audioBar}>
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={styles.playBtn}

                >
                  {isPlayingAudio ? '⏸' : '▶'}
                </button>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '4px' }}>
                    Recitation: Mishary Rashid Alafasy
                  </div>
                  <div className={styles.equalizer}>
                    <div className={`${styles.eqBar} ${isPlayingAudio ? styles.eqBarActive : ''}`} style={{ animationDelay: '0.1s' }}></div>
                    <div className={`${styles.eqBar} ${isPlayingAudio ? styles.eqBarActive : ''}`} style={{ animationDelay: '0.3s' }}></div>
                    <div className={`${styles.eqBar} ${isPlayingAudio ? styles.eqBarActive : ''}`} style={{ animationDelay: '0.2s' }}></div>
                    <div className={`${styles.eqBar} ${isPlayingAudio ? styles.eqBarActive : ''}`} style={{ animationDelay: '0.4s' }}></div>
                    <div className={`${styles.eqBar} ${isPlayingAudio ? styles.eqBarActive : ''}`} style={{ animationDelay: '0.15s' }}></div>
                  </div>
                </div>

                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>00:14 / 00:45</span>
              </div>
            </div>
          )}

          {/* TAB 4: ZAKAT CALCULATOR */}
          {activeTab === 'zakat' && (
            <div className={styles.zakatLayout}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textAlign: 'center' }}>Instant Zakat Estimator</h3>
              
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Cash Savings & Bank Balance ($)</label>
                <input
                  type="number"
                  className={styles.numberInput}
                  value={cash}
                  onChange={(e) => setCash(Number(e.target.value) || 0)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Gold Owned (Grams)</label>
                <input
                  type="number"
                  className={styles.numberInput}
                  value={goldGrams}
                  onChange={(e) => setGoldGrams(Number(e.target.value) || 0)}
                />
              </div>

              <div className={styles.zakatResult}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                  Estimated Zakat Due (2.5%)
                </div>
                <div className={styles.zakatAmount}>
                  ${zakatDue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--emerald-light)', marginTop: '8px' }}>
                  ✓ Exceeds Nisab threshold ($5,100). Ready for calculation in app.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: DIGITAL TASBIH */}
          {activeTab === 'tasbih' && (
            <div className={styles.tasbihLayout}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{currentTasbih.phrase}</h3>
                <p className="arabic-text" style={{ fontSize: '1.8rem', color: 'var(--gold-light)', margin: '6px 0' }}>
                  {currentTasbih.arabic}
                </p>
                <span className="section-badge" style={{ margin: 0 }}>Target: {currentTasbih.target} Recitations</span>
              </div>

              <div className={styles.tasbihDisc} onClick={handleTasbihClick}>
                <div className={styles.tasbihCount}>{tasbihCount}</div>
                <div className={styles.tasbihLabel}>TAP TO COUNT</div>
              </div>

              <button
                onClick={() => setTasbihCount(0)}
                className="btn btn-dark"
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                ↻ Reset Counter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
