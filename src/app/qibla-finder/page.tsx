import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Qibla Direction & Compass Finder App | Islam24',
  description: 'Find the exact Qibla direction towards Kaaba in Makkah from anywhere in the world using our high-precision digital compass app — 100% Free & Ad-Free.',
  keywords: ['qibla finder app', 'qibla direction online', 'qibla compass', 'mecca direction finder', 'offline qibla compass', 'qibla direction app'],
};

export default function QiblaFinderPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
            <span className="section-badge">Qibla Direction</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>
              Precise <span className="highlight">Qibla Finder</span> &amp; Compass App
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Locate the exact direction of Kaaba in Makkah instantly wherever you are in the world with real-time magnetometer compass tracking.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🧭</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Real-Time Magnetometer Compass</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Smooth 360-degree compass visualizer providing degree headings and exact distance in kilometers to Makkah Al-Mukarramah.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✈️</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Works Offline &amp; While Traveling</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                No active internet connection required during flight or travel. Uses hardware device sensors for instant directional alignment.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🚫</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Zero Ad Interruptions</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Unlike other compass apps that show intrusive full-screen video ads before pointing to Qibla, Islam24 opens instantly to Qibla compass.
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
