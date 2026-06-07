import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Acknowledgements - Islam24',
  description: 'Credits and acknowledgements for the open-source projects, fonts, and data used in Islam24.',
};

export default function AcknowledgementsPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container prose">
          <h1>Acknowledgements</h1>
          <p>
            Islam24 is built upon the incredible work of the open-source community.
            We are deeply grateful to the following projects, creators, and platforms
            that made this app possible.
          </p>

          <h2>Quran Data</h2>
          <ul>
            <li><strong>AlQuran Cloud API:</strong> Used for the Arabic text of the Quran (<a href="https://alquran.cloud/api" target="_blank" rel="noopener noreferrer">alquran.cloud</a>).</li>
            <li><strong>Risan&apos;s Quran JSON:</strong> Used for English, Bengali translations, and transliteration (<a href="https://github.com/risan/quran-json" target="_blank" rel="noopener noreferrer">github.com/risan/quran-json</a>).</li>
            <li><strong>Everything in a Place:</strong> Used for Bengali meanings of Surah names (<a href="https://allzinone.blogspot.com/2011/12/bengali-meaning-of-name-of-suras-of.html" target="_blank" rel="noopener noreferrer">Blogspot</a>).</li>
          </ul>

          <h2>Fonts & Icons</h2>
          <ul>
            <li><strong>Quran Android:</strong> Arabic text fonts from the Quran Android Git Repository (<a href="https://github.com/quran/quran_android" target="_blank" rel="noopener noreferrer">github.com/quran/quran_android</a>).</li>
            <li><strong>Stratis UI Icons:</strong> 1000+ Free Figma Icons (<a href="https://www.figma.com/community/file/1150654060592965313" target="_blank" rel="noopener noreferrer">Figma Community</a>).</li>
            <li><strong>Icons8:</strong> Various icons used throughout the app design (<a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">icons8.com</a>).</li>
          </ul>

          <h2>Inspiration</h2>
          <p>
            Special thanks to other wonderful Islamic apps in the ecosystem that inspire us to build better tools for the Ummah.
          </p>

          <div style={{ marginTop: '60px', padding: '30px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 500 }}>Jazakum Allahu Khairan to all contributors.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
