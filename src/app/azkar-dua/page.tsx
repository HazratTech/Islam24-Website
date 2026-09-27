import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import AzkarDuaClient from './AzkarDuaClient';

export const metadata = {
  title: 'Daily Azkar & Dua App with Digital Tasbih Counter | Islam24',
  description: 'Access authentic daily Azkar, morning and evening supplications from Hisnul Muslim, Quranic Duas, and an interactive digital Tasbih clicker — 100% Free & Ad-Free.',
  keywords: [
    'azkar and dua app',
    'morning evening azkar app',
    'daily dua app',
    'digital tasbih counter',
    'hisnul muslim dua',
    'free tasbih app android',
    'subhanallah tasbih online',
    'daily dhikr app',
  ],
};

const azkarFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the Duas and Azkar in Islam24 authentic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All morning, evening, and daily supplications in Islam24 are sourced directly from verified collections including Hisnul Muslim (Fortress of the Muslim), Sahih al-Bukhari, Sahih Muslim, and authenticated Sunan."
      }
    },
    {
      "@type": "Question",
      "name": "Does the digital Tasbih work offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the digital Tasbih clicker and complete Azkar library are fully functional offline with local device count persistence."
      }
    },
    {
      "@type": "Question",
      "name": "Are there banner ads interrupting Dhikr?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never. Islam24 is strictly 100% ad-free, popup-free, and commercial sponsor-free."
      }
    }
  ]
};

export default function AzkarDuaPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(azkarFaqSchema) }}
      />
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
            </div>
            <span className="section-badge section-badge-gold">Remembrance of Allah</span>
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
              Daily <span className="highlight">Azkar &amp; Dua App</span> with Digital Tasbih
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Strengthen your spiritual connection through authentic morning &amp; evening supplications from Hisnul Muslim and an intuitive, tactile digital Tasbih clicker — 100% ad-free forever.
            </p>
          </div>

          {/* Interactive Azkar & Tasbih Client Micro-Tool */}
          <AzkarDuaClient />

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Authenticated Hadith Sources
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Every single Dua includes exact chapter and verse citations from Sahih al-Bukhari, Sahih Muslim, and Abu Dawud as compiled in Hisnul Muslim.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Haptic &amp; Sound Feedback
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Recite without looking down at your screen using gentle vibration pulses on every count and distinct vibrations when completing sets of 33 or 100.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                99 Names of Allah (Asma ul Husna)
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Contemplate the divine attributes with clear Arabic pronunciation, English translations, and spiritual explanations for daily reflection.
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
                Zero Commercial Distractions
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Your sacred moments of Dhikr and dua will never be interrupted by loud video ads or distracting commercial popups. Pure worship, pure peace.
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
