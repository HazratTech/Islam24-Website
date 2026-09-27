import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Daily Azkar & Dua App with Audio & Tasbih | Islam24',
  description: 'Access authentic daily Azkar, morning and evening supplications, Quranic Duas, and a digital Tasbih counter — 100% Free and Ad-Free.',
  keywords: ['azkar and dua app', 'morning evening azkar app', 'daily dua app', 'digital tasbih counter', 'hisnul muslim dua'],
};

export default function AzkarDuaPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
            <span className="section-badge">Azkar &amp; Supplications</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>
              Daily <span className="highlight">Azkar &amp; Dua App</span> with Digital Tasbih
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Strengthen your daily Dhikr with authentic supplications from the Quran and Sunnah, categorized for morning, evening, after prayer, and daily routines.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🤲</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Morning &amp; Evening Remembrance</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Complete authentic Azkar from Hisnul Muslim with Arabic text, transliteration, English meanings, and recommended recitation counts.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📿</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Digital Tasbih Clicker</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Keep track of your SubhanAllah, Alhamdulillah, and Allahu Akbar recitations with an intuitive digital counter and haptic feedback.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✨</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>99 Names of Allah (Asma ul Husna)</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Learn and reflect upon the 99 beautiful Names of Allah with clear audio pronunciations and deep spiritual meanings.
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
