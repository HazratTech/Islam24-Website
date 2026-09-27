import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import PrayerTimesClient from './PrayerTimesClient';

export const metadata = {
  title: 'Accurate Prayer Time App & Athan Notifications | Islam24',
  description: 'Get precise daily prayer times (Salat) and custom Athan notifications based on your exact location. Supports MWL, ISNA, Umm Al-Qura & Karachi algorithms — 100% Free & Ad-Free.',
  keywords: [
    'prayer time app',
    'salat times app',
    'athan app',
    'accurate prayer times',
    'fajr dhuhr asr maghrib isha times',
    'athan notification app',
    'free prayer times android',
    'muslim prayer time no ads',
  ],
};

const prayerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Islam24 ensure accurate prayer times worldwide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Islam24 calculates solar declination angles using standard astronomical algorithms vetted by major global organizations including the Muslim World League, ISNA, and Umm Al-Qura (Makkah)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose between Shafi and Hanafi for Asr prayer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can toggle between Standard (Shafi, Maliki, Hanbali - shadow length = object height) and Hanafi (shadow length = 2x object height) with a single tap."
      }
    },
    {
      "@type": "Question",
      "name": "Does Islam24 track my location for prayer times?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your device GPS coordinates are processed solely on-device. Islam24 never logs, tracks, or uploads your location to remote servers."
      }
    }
  ]
};

export default function PrayerTimesPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prayerFaqSchema) }}
      />
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
            </div>
            <span className="section-badge section-badge-gold">Second Pillar of Islam</span>
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
              Accurate <span className="highlight">Prayer Time App</span> &amp; Athan Alerts
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Never miss a prayer again. Islam24 computes exact daily Salat timings for Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha with custom Athan notifications — zero commercial interruptions.
            </p>
          </div>

          {/* Interactive Prayer Times Client Micro-Tool */}
          <PrayerTimesClient />

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Global Astronomical Accuracy
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Supports all major calculation methods: Muslim World League (MWL), ISNA, Umm Al-Qura (Makkah), Egyptian Authority, and Karachi University.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Customizable Athan Sounds
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Wake up to beautiful authentic Athan recitations from Makkah, Madinah, Al-Aqsa, or set gentle vibration notifications for quiet environments.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                100% On-Device Location Math
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Your GPS coordinates are computed purely on your smartphone processor. Islam24 never tracks, logs, or sells your movement history.
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
                Zero Banner Ads or Popups
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Open the app when rushing to the Masjid without ever being blocked by full-screen commercial video advertisements or promotional popups.
              </p>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
