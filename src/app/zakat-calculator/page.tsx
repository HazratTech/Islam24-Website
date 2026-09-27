import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Free Zakat Calculator App & Online Tool | Islam24',
  description: 'Accurately calculate your annual Zakat obligation (2.5%) based on cash savings, gold, silver, and investments with the current Nisab threshold.',
  keywords: ['zakat calculator app', 'zakat calculator online', 'nisab calculator', 'calculate zakat 2.5', 'islamic zakat tool'],
};

export default function ZakatCalculatorPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
            <span className="section-badge section-badge-gold">Zakat &amp; Wealth</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>
              Free <span className="highlight-gold">Zakat Calculator App</span> &amp; Tool
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              Fulfil your third pillar of Islam with confidence. Calculate exact 2.5% Zakat obligations across cash, gold, silver, and business assets easily.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gold-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💰</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Automatic 2.5% Calculation</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Input cash savings, bank balances, and asset values to instantly compute your exact Zakat liability with 100% mathematical precision.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gold-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🪙</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Gold &amp; Silver Nisab Evaluator</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Evaluates your gold and silver weight in grams against standard Nisab thresholds (87.48g gold / 612.36g silver).
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gold-border)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>100% Private Financial Data</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your financial numbers stay strictly on your local device. Islam24 never stores or transmits your personal wealth calculations.
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
