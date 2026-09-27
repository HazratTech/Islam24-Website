import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Acknowledgements & Credits — Open Source & Community | Islam24',
  description: 'Credits and acknowledgements for the open-source projects, fonts, APIs, and community datasets that made Islam24 possible.',
};

export default function AcknowledgementsPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="prose">
            <h1>Acknowledgements &amp; Credits</h1>
            <p>Gratitude to the Open Source &amp; Islamic Tech Community</p>

            <p>
              Islam24 stands on the shoulders of dedicated developers, scholars, and open-source contributors who have made authentic Islamic datasets and software freely available to the global Ummah. We extend our sincerest gratitude:
            </p>

            <h2>Quranic Data &amp; Audio</h2>
            <ul>
              <li><strong>AlQuran Cloud API:</strong> High-reliability Quran text engine and audio streaming infrastructure (<a href="https://alquran.cloud" target="_blank" rel="noopener noreferrer">alquran.cloud</a>).</li>
              <li><strong>Risan&apos;s Quran JSON:</strong> Structured translation datasets including Bengali, English, and transliteration (<a href="https://github.com/risan/quran-json" target="_blank" rel="noopener noreferrer">github.com/risan/quran-json</a>).</li>
              <li><strong>Tanzil Project:</strong> Verified international Uthmani Quranic text and pause mark standards.</li>
            </ul>

            <h2>Astronomical &amp; Prayer Algorithms</h2>
            <ul>
              <li><strong>Adhan / PrayTimes Astronomical Computations:</strong> Accurate sun declination algorithms for global Salat schedules.</li>
              <li><strong>Muslim World League (MWL), ISNA, Umm Al-Qura, &amp; Univ. of Karachi:</strong> Calculation standards for Fajr and Isha angle definitions.</li>
            </ul>

            <h2>Fonts &amp; Iconography</h2>
            <ul>
              <li><strong>Quran Android Project:</strong> Authentic Arabic calligraphic typography and font resources.</li>
              <li><strong>Amiri Font:</strong> Beautiful Naskh typeface designed for classic Arabic Quranic typesetting.</li>
              <li><strong>Outfit &amp; Plus Jakarta Sans:</strong> Google Fonts modern geometric sans-serif typefaces.</li>
              <li><strong>Lucide &amp; Stratis UI Icons:</strong> Clean, high-precision vector iconography.</li>
            </ul>

            <div style={{ marginTop: '48px', padding: '32px', background: 'var(--bg-card-tint)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--emerald-border)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.8rem', color: 'var(--emerald-dark)', marginBottom: '8px' }}>
                جَزَاكُمُ اللَّهُ خَيْرًا
              </div>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-secondary)' }}>
                May Allah reward everyone who contributed knowledge, code, and resources to benefit the Ummah.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
