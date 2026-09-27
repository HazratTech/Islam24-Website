import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Accurate Prayer Time App & Athan Notifications | Islam24',
  description: 'Get precise daily prayer times (Salat) and custom Athan notifications based on your exact location. Supports MWL, ISNA, Umm Al-Qura & Karachi algorithms.',
  keywords: ['prayer time app', 'salat times app', 'athan app', 'accurate prayer times', 'fajr dhuhr asr maghrib isha times', 'athan notification app'],
};

export default function PrayerTimesPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
            <span className="section-badge">Prayer &amp; Athan</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>
              Accurate <span className="highlight">Prayer Time App</span> &amp; Athan Alerts
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Never miss a prayer again. Islam24 calculates exact Salat timings for Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha with zero commercial ad interruptions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🕌</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Global Astronomical Accuracy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Uses high-precision astronomical algorithms supporting major global calculation methods including Muslim World League (MWL), ISNA, Umm Al-Qura, and Karachi.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔔</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Customizable Athan Alerts</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Set beautiful Athan notifications for each prayer time. Choose your favorite audio reciter or silent vibrating alerts for work environments.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Local Location Processing</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your GPS position is calculated 100% locally on your phone. We never store, log, or sell your location data to advertisers.
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
