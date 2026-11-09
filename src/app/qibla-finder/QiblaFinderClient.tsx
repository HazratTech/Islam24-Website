'use client';

import React, { useState } from 'react';
import styles from './QiblaFinder.module.css';

const CITIES = [
  { name: 'London, United Kingdom', angle: 118.8, direction: '118.8° ESE', distance: '4,780 km' },
  { name: 'Makkah Al-Mukarramah, KSA', angle: 0, direction: '0.0° North', distance: '0 km (Directly at Kaaba)' },
  { name: 'New York, United States', angle: 58.5, direction: '58.5° ENE', distance: '10,250 km' },
  { name: 'Istanbul, Turkey', angle: 152.1, direction: '152.1° SSE', distance: '2,410 km' },
  { name: 'Cairo, Egypt', angle: 136.2, direction: '136.2° SE', distance: '1,290 km' },
  { name: 'Dubai, UAE', angle: 258.4, direction: '258.4° WSW', distance: '1,640 km' },
  { name: 'Jakarta, Indonesia', angle: 295.2, direction: '295.2° WNW', distance: '7,920 km' },
  { name: 'Dhaka, Bangladesh', angle: 278.3, direction: '278.3° W', distance: '5,180 km' },
  { name: 'Kuala Lumpur, Malaysia', angle: 292.3, direction: '292.3° WNW', distance: '7,040 km' },
  { name: 'Toronto, Canada', angle: 55.4, direction: '55.4° NE', distance: '9,980 km' },
];

export default function QiblaFinderClient() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [deviceHeading, setDeviceHeading] = useState(0);

  // Needle points towards Kaaba relative to device heading
  const relativeAngle = (selectedCity.angle - deviceHeading + 360) % 360;

  return (
    <div className={styles.container}>
      <div className={styles.compassCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardBadge}>
            Live Magnetometer Visualizer
          </span>
          <h2 className={styles.cardTitle}>
            Find Kaaba Direction in Real Time
          </h2>
          <p className={styles.cardSubtitle}>
            Select your city or test device heading rotation to experience how Islam24 aligns with the Holy Kaaba in Makkah with sensor accuracy.
          </p>
        </div>

        {/* City Selector */}
        <div className={styles.cityGrid}>
          {CITIES.map((city) => (
            <button
              key={city.name}
              onClick={() => setSelectedCity(city)}
              className={`${styles.cityBtn} ${selectedCity.name === city.name ? styles.cityBtnActive : ''}`}
            >
              {city.name.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Compass Dial Stage */}
        <div className={styles.compassStage}>
          <div className={styles.dialWrap}>
            <span className={`${styles.cardinalLabel} ${styles.cardinalN}`}>N</span>
            <span className={`${styles.cardinalLabel} ${styles.cardinalE}`}>E</span>
            <span className={`${styles.cardinalLabel} ${styles.cardinalS}`}>S</span>
            <span className={`${styles.cardinalLabel} ${styles.cardinalW}`}>W</span>

            {/* Compass Needle */}
            <div
              className={styles.compassNeedleWrap}
              style={{ transform: `rotate(${relativeAngle}deg)` }}
            >
              <div className={styles.kaabaMarker}>
                <div className={styles.kaabaBox}>
                  <div className={styles.kaabaGoldBand} />
                </div>
              </div>
              <div className={styles.needleStem}>
                <div className={styles.needleCenterPin} />
              </div>
            </div>
          </div>

          {/* Metrics Readout */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricBox}>
              <div className={styles.metricLabel}>Qibla Heading</div>
              <div className={styles.metricValue}>{selectedCity.direction}</div>
            </div>
            <div className={styles.metricBox}>
              <div className={styles.metricLabel}>Distance to Kaaba</div>
              <div className={styles.metricValue}>{selectedCity.distance}</div>
            </div>
            <div className={styles.metricBox}>
              <div className={styles.metricLabel}>Sensor Status</div>
              <div className={styles.metricValue} style={{ color: '#166534' }}>Calibrated</div>
            </div>
          </div>

          {/* Device Heading Slider */}
          <div className={styles.simulatorBar}>
            <span className={styles.sliderLabel}>Device Heading: {deviceHeading}°</span>
            <input
              type="range"
              min="0"
              max="359"
              value={deviceHeading}
              onChange={(e) => setDeviceHeading(Number(e.target.value))}
              className={styles.sliderInput}
              aria-label="Device Heading Simulator Slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
