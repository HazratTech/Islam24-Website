import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Features - Islam24',
  description: 'Explore the features of Islam24, including accurate prayer times, Qibla compass, complete Quran, and more.',
};

const allFeatures = [
  { title: "Prayer Times", desc: "Highly accurate prayer times based on your location and calculation method.", icon: "🕌" },
  { title: "Athan Alerts", desc: "Customizable audio notifications for each prayer time.", icon: "🔔" },
  { title: "Qibla Direction", desc: "Precise digital compass to point you toward Mecca from anywhere in the world.", icon: "🧭" },
  { title: "Complete Offline Quran", desc: "Read the Quran anytime with Uthmani script, English, and Bengali translations.", icon: "📖" },
  { title: "Azkar & Duas", desc: "Authentic supplications from the Quran and Sunnah for morning, evening, and various occasions.", icon: "🤲" },
  { title: "Zakat Calculator", desc: "Easily calculate your Zakat obligations based on your assets and the current Nisab.", icon: "🧮" },
  { title: "99 Names of Allah", desc: "Learn and reflect upon Asma ul Husna with their beautiful meanings.", icon: "✨" },
  { title: "Islamic Calendar", desc: "Keep track of the Hijri calendar alongside the Gregorian calendar.", icon: "📅" },
  { title: "Tasbih Counter", desc: "A simple and effective digital counter for your Dhikr.", icon: "📿" },
  { title: "Ad-Free Experience", desc: "A clean, distraction-free interface to keep you focused on your worship.", icon: "🚫" },
  { title: "Privacy Focused", desc: "No tracking, no data selling. Your location stays on your device.", icon: "🔒" },
  { title: "Offline Support", desc: "Most features work without an internet connection after initial setup.", icon: "📱" },
];

export default function FeaturesPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>All Features</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Discover everything Islam24 has to offer for your daily Islamic lifestyle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            {allFeatures.map((f, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
