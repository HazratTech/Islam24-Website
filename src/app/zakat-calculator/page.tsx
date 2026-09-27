import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ZakatCalculatorClient from './ZakatCalculatorClient';

export const metadata = {
  title: 'Free Zakat Calculator App & Nisab Estimator | Islam24',
  description: 'Accurately calculate your annual 2.5% Zakat obligation based on cash savings, gold, silver, investments, and business inventory with live Nisab thresholds.',
  keywords: [
    'zakat calculator app',
    'zakat calculator online',
    'nisab calculator',
    'calculate zakat 2.5',
    'islamic zakat tool',
    'gold nisab calculator',
    'silver nisab threshold',
    'free zakat app android',
  ],
};

const zakatFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Nisab threshold for Zakat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Nisab is the minimum qualifying wealth a Muslim must possess before Zakat becomes obligatory. In Classical Islamic jurisprudence, it is defined as 87.48 grams of gold or 612.36 grams of pure silver."
      }
    },
    {
      "@type": "Question",
      "name": "What is Hawl in Zakat calculation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hawl refers to the completion of one full Islamic lunar year (approximately 354 days) during which the wealth remains continuously above the Nisab threshold."
      }
    },
    {
      "@type": "Question",
      "name": "Does Islam24 store my financial calculations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Islam24 never logs, stores, or transmits your financial numbers to any server. All calculations happen strictly in your device's memory."
      }
    }
  ]
};

export default function ZakatCalculatorPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zakatFaqSchema) }}
      />
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Header Title */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '10px', direction: 'rtl' }}>
              وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَقْرِضُوا اللَّهَ قَرْضًا حَسَنًا
            </div>
            <span className="section-badge section-badge-gold">Third Pillar of Islam</span>
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
              Free <span className="highlight-gold">Zakat Calculator App</span> &amp; Tool
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Fulfil your third pillar of Islam with certainty. Compute your exact 2.5% annual Zakat liability across savings, gold, silver, investments, and business inventory with live Nisab guidance.
            </p>
          </div>

          {/* Interactive Zakat Calculator Micro-Tool */}
          <ZakatCalculatorClient />

          {/* Features Grid with SVG Icons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px', marginBottom: '80px' }}>
            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gold-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: '#FFF9ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-dark)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Exact 2.5% Mathematical Precision
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Computes the precise 1/40th (2.5%) obligation of your surplus Zakatable assets after factoring in valid deductible immediate debts.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gold-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: '#FFF9ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-dark)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Gold &amp; Silver Nisab Evaluator
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Toggle effortlessly between the Gold standard (87.48g) and Silver standard (612.36g) recommended by scholars for broader charitable benefit.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gold-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: '#FFF9ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-dark)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Sacred Financial Confidentiality
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Your private wealth balance is between you and the Almighty. Islam24 executes all math client-side with zero telemetry or backend storage.
              </p>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                padding: '34px 28px',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--gold-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: '#FFF9ED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-dark)',
                  marginBottom: '18px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)' }}>
                Zero Commercial Monetization
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                No loan ads, credit card promotions, or financial product affiliate links. A pure Islamic tool dedicated solely to helping you fulfil your worship.
              </p>
            </div>
          </div>

          {/* Theological Context on Zakat Beneficiaries */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--emerald-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              maxWidth: '860px',
              margin: '0 auto 80px auto',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <span className="section-badge">Quranic Beneficiaries</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
              The 8 Categories of Zakat (Surah At-Tawbah 9:60)
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '16px' }}>
              In the Holy Quran, Allah Azza wa Jal has explicitly designated the eight categories of people eligible to receive Zakat:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginTop: '16px' }}>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>1. Al-Fuqara</strong>: The destitute in extreme poverty
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>2. Al-Masakin</strong>: The needy without sufficient means
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>3. Al-Amilina Alayha</strong>: Appointed Zakat administrators
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>4. Al-Mu&apos;allafati Qulubuhum</strong>: Reconciling hearts towards Islam
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>5. Fir-Riqab</strong>: Freeing captives and bonded persons
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>6. Al-Gharimin</strong>: Those burdened with overwhelming debt
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>7. Fi Sabilillah</strong>: In the direct cause of Allah
              </div>
              <div style={{ background: 'var(--bg-card-tint)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)' }}>
                <strong>8. Ibnus-Sabil</strong>: Stranded travelers in urgent need
              </div>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
