import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Free Offline Quran App with Audio Recitations | Islam24',
  description: 'Read and listen to the complete Holy Quran offline with verse-by-verse audio, Uthmani script, English and Bengali translations — 100% Free and Ad-Free.',
  keywords: ['quran app', 'offline quran app', 'quran islamic app', 'free quran app android', 'quran audio offline', 'uthmani script quran'],
};

export default function QuranPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
            <span className="section-badge section-badge-gold">Quran &amp; Recitations</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>
              Free &amp; <span className="highlight">Offline Quran App</span> for Android
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Experience the Holy Quran with crystal-clear Uthmani script, multi-language translations, and offline verse audio recitations — zero ads, zero distractions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📖</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Complete Offline Quran Text</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Access all 114 Surahs offline anytime without needing an active internet connection. Designed for quick searching, verse copying, and bookmarking.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎧</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Verse-by-Verse Audio Recitations</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Listen to world-renowned Qaris including Mishary Rashid Alafasy. Download recitations once for 100% offline listening during travel.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌐</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Multiple Translations &amp; Tafsir</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Understand the divine revelation with clear English, Bengali, and Urdu verse translations alongside clear Uthmani text.
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
