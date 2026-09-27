import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import QiblaFinderClient from './QiblaFinderClient';

export const metadata = {
  title: 'Precise Qibla Direction & Compass Finder App | Islam24',
  description: 'Find the exact Qibla direction towards the Kaaba in Makkah from anywhere in the world using our high-precision digital compass app — 100% Free, Offline, and Ad-Free.',
  keywords: [
    'qibla finder app',
    'qibla direction online',
    'qibla compass',
    'mecca direction finder',
    'offline qibla compass',
    'qibla direction app',
    'free qibla app android',
    'kaaba compass',
  ],
};

const qiblaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the Islam24 Qibla Compass calculate direction to the Kaaba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Islam24 calculates the Qibla using great-circle spherical trigonometry (the forward azimuth formula) based on your coordinates and the exact geographic location of the Kaaba in Makkah (21.4225° N, 39.8262° E)."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Qibla compass work without an active internet connection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Once your location is determined, Islam24 utilizes your device's built-in magnetometer and accelerometer hardware to orient towards the Kaaba completely offline."
      }
    },
    {
      "@type": "Question",
      "name": "Are there video ads or popups before showing Qibla direction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never. Islam24 is strictly 100% ad-free. The Qibla compass opens instantaneously without commercial interruptions."
      }
    }
  ]
};

export default function QiblaFinderPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qiblaFaqSchema) }}
      />
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ
            </div>
            <span className="section-badge section-badge-gold">Great-Circle Navigation</span>
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
              Precise <span className="highlight">Qibla Direction</span> &amp; Compass App
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Locate the exact direction of the Sacred Kaaba in Makkah Al-Mukarramah instantly wherever you travel in the world — 100% free, offline-ready, and commercial ad-free.
            </p>
          </div>

          {/* Interactive Qibla Simulator Micro-Tool */}
          <QiblaFinderClient />

          {/* Features Grid with SVG Icons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px', marginBottom: '80px' }}>
            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--emerald-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Real-Time Magnetometer
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Directly interfaces with your smartphone&apos;s magnetic sensor for smooth 60fps needle rotation, accurate degree indicators, and distance metrics.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--emerald-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                100% Offline Travel Mode
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                In flight, in remote wilderness, or in a hotel room with poor reception — the Qibla compass aligns reliably without requiring cellular data.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--emerald-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Magnetic Declination Auto-Correction
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Compensates for the variance between Magnetic North and True Geographic North using the World Magnetic Model (WMM) for pinpoint orientation.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--emerald-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Zero Commercial Ad Interruption
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Other apps force you to sit through 30-second commercial video ads before pointing to the Qibla. Islam24 opens immediately to your direction.
              </p>
            </div>
          </div>

          {/* Theological & Mathematical Context Box */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--gold-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              maxWidth: '860px',
              margin: '0 auto 80px auto',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <span className="section-badge section-badge-gold">Scholarly Foundation</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
              How Great-Circle Navigation Determines the Qibla
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '16px' }}>
              In Islamic jurisprudence, Muslims are commanded to turn their faces toward the Sacred Mosque (Al-Masjid Al-Haram) during prayer. For believers outside of Makkah, this direction follows the shortest geodesic path across the curvature of the Earth (the great-circle arc), connecting the observer&apos;s geographic coordinates to the Holy Kaaba (21.4225° N, 39.8262° E).
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>
              Islam24 combines this spherical trigonometry calculation with high-speed sensor fusion, ensuring your prayer direction is mathematically verified and spiritually serene.
            </p>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
