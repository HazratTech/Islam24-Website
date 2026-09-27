'use client';

import React, { useState } from 'react';

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

  // Compass needle points towards Kaaba relative to device heading
  const relativeAngle = (selectedCity.angle - deviceHeading + 360) % 360;

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Interactive Compass Simulator */}
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
            Live Compass Visualizer
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Find Qibla Direction in Real Time
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto' }}>
            Select your location below or adjust the simulator heading to see how Islam24 aligns with the Kaaba using real-time magnetometer sensors.
          </p>
        </div>

        {/* City Selector */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '36px' }}>
          {CITIES.map((city) => (
            <button
              key={city.name}
              onClick={() => setSelectedCity(city)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                border: selectedCity.name === city.name ? '1px solid var(--emerald)' : '1px solid var(--emerald-border)',
                background: selectedCity.name === city.name ? 'var(--emerald)' : '#FAF8F5',
                color: selectedCity.name === city.name ? '#FFFFFF' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {city.name.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Compass Visual Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 0',
          }}
        >
          {/* Compass Dial Outer Ring */}
          <div
            style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFFFFF 60%, #F5F9F6 100%)',
              border: '3px solid var(--emerald-border)',
              boxShadow: '0 12px 35px rgba(13, 105, 69, 0.12), inset 0 2px 6px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Cardinal Direction Points */}
            <span style={{ position: 'absolute', top: '10px', fontWeight: 800, fontSize: '0.9rem', color: '#DC2626' }}>N</span>
            <span style={{ position: 'absolute', right: '14px', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-muted)' }}>E</span>
            <span style={{ position: 'absolute', bottom: '10px', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-muted)' }}>S</span>
            <span style={{ position: 'absolute', left: '14px', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-muted)' }}>W</span>

            {/* Rotating Compass Needle Container */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                transform: `rotate(${relativeAngle}deg)`,
                transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Kaaba Direction Arrow (Gold / Emerald) */}
              <div
                style={{
                  position: 'absolute',
                  top: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Kaaba Icon Box */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: '#14231C',
                    borderRadius: '6px',
                    border: '2px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(184, 134, 11, 0.4)',
                    marginBottom: '4px',
                  }}
                >
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: 900 }}>كعبة</span>
                </div>
                <div
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderBottom: '14px solid var(--emerald)',
                  }}
                />
              </div>

              {/* Center Pivot Point */}
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  border: '3px solid #FFFFFF',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  zIndex: 2,
                }}
              />

              {/* Southern Needle End */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '36px',
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '16px solid #CBD5E1',
                }}
              />
            </div>
          </div>

          {/* Heading Information Box */}
          <div
            style={{
              marginTop: '28px',
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ background: 'var(--bg-card-tint)', padding: '12px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Qibla Heading
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--emerald-dark)' }}>
                {selectedCity.direction}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card-tint)', padding: '12px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Distance to Kaaba
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-dark)' }}>
                {selectedCity.distance}
              </div>
            </div>
          </div>

          {/* Phone Rotation Simulator Slider */}
          <div style={{ marginTop: '24px', width: '100%', maxWidth: '360px', textAlign: 'center' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Simulate Device Rotation: {deviceHeading}°
            </label>
            <input
              type="range"
              min="0"
              max="359"
              value={deviceHeading}
              onChange={(e) => setDeviceHeading(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--emerald)',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>0° (North)</span>
              <span>180° (South)</span>
              <span>359°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
