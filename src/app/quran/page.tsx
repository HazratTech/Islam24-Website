import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import FeatureScreenshots from '@/components/FeatureScreenshots';
import QuranReaderClient from './QuranReaderClient';

export const metadata = {
  title: 'Free Offline Quran App with Audio Recitations | Islam24',
  description: 'Read and listen to the complete Holy Quran offline with verse-by-verse audio recitations, authentic Uthmani script, English and Bengali translations — 100% Free and Ad-Free.',
  keywords: [
    'quran app',
    'offline quran app',
    'quran islamic app',
    'free quran app android',
    'quran audio offline',
    'uthmani script quran',
    'quran with english translation',
    'quran with bangla translation',
    'ad free quran app',
  ],
};

const quranFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I read the Quran completely offline in Islam24?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All 114 Surahs and 6,236 verses in authentic Uthmani calligraphy with full English and Bengali translations are stored locally for 100% offline access."
      }
    },
    {
      "@type": "Question",
      "name": "Which reciters are available for verse-by-verse audio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Islam24 includes world-renowned Qaris including Mishary Rashid Alafasy, Abdul Basit Abdul Samad, and Saad Al-Ghamdi with offline download capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "Are there banner ads or commercial interruptions during recitation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never. Islam24 is strictly 100% ad-free forever. The Holy Quran is sacred and will never be monetized with commercial advertisements."
      }
    }
  ]
};

export default function QuranPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quranFaqSchema) }}
      />
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
            </div>
            <span className="section-badge section-badge-gold">The Divine Revelation</span>
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
              Free &amp; <span className="highlight">Offline Quran App</span> for Android
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Experience the divine revelation with crystal-clear Uthmani calligraphy, verse-by-verse audio recitations, and multi-language translations — zero ads, zero distractions.
            </p>
          </div>

          {/* Interactive Quran Reader Client Micro-Tool */}
          <QuranReaderClient />

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Complete 114 Surahs Offline
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Read the entire Holy Quran anytime, anywhere without cellular connection or WiFi. High-speed local indexing for instant search.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Verse-by-Verse Audio Recitations
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Listen to master Qaris with synchronized verse highlighting to perfect your Tajweed and pronunciation during your daily tilawah.
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
                Multi-Language Translations
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Deepen your comprehension with authentic Sahih International English and Muhiuddin Khan Bengali verse translations.
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
                100% Ad-Free Sacred Reading
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Never have commercial banners, gaming popups, or auto-playing videos disrupt your sacred connection with the Words of Allah.
              </p>
            </div>
          </div>
        </div>

        {/* Real App Screenshots Showcase */}
        <FeatureScreenshots
          badge="Sacred Interface"
          title="Designed for Tranquil Recitation"
          subtitle="Explore the serene Quran reader, authenticated Arabic typography, and intuitive Khatam planner inside Islam24."
          screens={[
            {
              src: '/screenshot/quran-ayah.webp',
              alt: 'Holy Quran Ayah Recitation with Verse Audio Player and English Translation',
              label: 'Ayah Recitation & Audio',
            },
            {
              src: '/screenshot/quran-surah.webp',
              alt: 'Complete 114 Surahs Index with Revelation Info and Quick Search',
              label: 'Surah Catalog',
            },
            {
              src: '/screenshot/quran-khatam.webp',
              alt: 'Personalized Quran Khatam Tracker and Daily Reading Streak',
              label: 'Khatam Planner & Streak',
            },
          ]}
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
