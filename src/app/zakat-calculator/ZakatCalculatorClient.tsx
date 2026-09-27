'use client';

import React, { useState } from 'react';

const CURRENCIES = [
  { code: 'USD', symbol: '$', goldPricePerGram: 75.0, silverPricePerGram: 0.95 },
  { code: 'GBP', symbol: '£', goldPricePerGram: 59.0, silverPricePerGram: 0.75 },
  { code: 'EUR', symbol: '€', goldPricePerGram: 69.0, silverPricePerGram: 0.88 },
  { code: 'SAR', symbol: '﷼', goldPricePerGram: 281.0, silverPricePerGram: 3.56 },
  { code: 'AED', symbol: 'د.إ', goldPricePerGram: 275.0, silverPricePerGram: 3.49 },
  { code: 'BDT', symbol: '৳', goldPricePerGram: 8850.0, silverPricePerGram: 112.0 },
  { code: 'INR', symbol: '₹', goldPricePerGram: 6250.0, silverPricePerGram: 79.0 },
  { code: 'PKR', symbol: '₨', goldPricePerGram: 20900.0, silverPricePerGram: 265.0 },
];

export default function ZakatCalculatorClient() {
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [nisabStandard, setNisabStandard] = useState<'silver' | 'gold'>('silver');

  // Input states
  const [cash, setCash] = useState<number>(6500);
  const [goldValue, setGoldValue] = useState<number>(1500);
  const [silverValue, setSilverValue] = useState<number>(0);
  const [investments, setInvestments] = useState<number>(2000);
  const [inventory, setInventory] = useState<number>(0);
  const [liabilities, setLiabilities] = useState<number>(800);

  // Nisab thresholds (Gold: 87.48g, Silver: 612.36g)
  const goldNisabValue = 87.48 * currency.goldPricePerGram;
  const silverNisabValue = 612.36 * currency.silverPricePerGram;
  const activeNisabThreshold = nisabStandard === 'gold' ? goldNisabValue : silverNisabValue;

  const totalAssets = (cash || 0) + (goldValue || 0) + (silverValue || 0) + (investments || 0) + (inventory || 0);
  const netZakatableWealth = Math.max(0, totalAssets - (liabilities || 0));
  const isAboveNisab = netZakatableWealth >= activeNisabThreshold;
  const zakatPayable = isAboveNisab ? netZakatableWealth * 0.025 : 0;

  const handleReset = () => {
    setCash(0);
    setGoldValue(0);
    setSilverValue(0);
    setInvestments(0);
    setInventory(0);
    setLiabilities(0);
  };

  const handleSampleFill = () => {
    setCash(10000);
    setGoldValue(3000);
    setSilverValue(200);
    setInvestments(4500);
    setInventory(1500);
    setLiabilities(1200);
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--gold-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '44px 32px',
          boxShadow: 'var(--shadow-lg), 0 4px 20px rgba(184, 134, 11, 0.06)',
          marginBottom: '70px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'var(--gold-dark)',
              background: '#FFF9ED',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--gold-border)',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            Live Zakat Calculator Tool
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Calculate Your 2.5% Annual Zakat
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
            Select your currency and Nisab threshold standard, enter your qualifying assets held for one lunar year, and instantly compute your obligation.
          </p>
        </div>

        {/* Currency & Nisab Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--bg-card-tint)',
            padding: '16px 20px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--emerald-border)',
            marginBottom: '32px',
          }}
        >
          {/* Currency Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Currency:</span>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    border: currency.code === c.code ? '1px solid var(--gold)' : '1px solid #CBD5E1',
                    background: currency.code === c.code ? 'var(--gold)' : '#FFFFFF',
                    color: currency.code === c.code ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  {c.code} ({c.symbol})
                </button>
              ))}
            </div>
          </div>

          {/* Nisab Standard Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Nisab Standard:</span>
            <div style={{ display: 'flex', background: '#FFFFFF', padding: '3px', borderRadius: '8px', border: '1px solid var(--emerald-border)' }}>
              <button
                onClick={() => setNisabStandard('silver')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: 'none',
                  background: nisabStandard === 'silver' ? 'var(--emerald)' : 'transparent',
                  color: nisabStandard === 'silver' ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Silver (612.36g)
              </button>
              <button
                onClick={() => setNisabStandard('gold')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: 'none',
                  background: nisabStandard === 'gold' ? 'var(--gold)' : 'transparent',
                  color: nisabStandard === 'gold' ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Gold (87.48g)
              </button>
            </div>
          </div>
        </div>

        {/* Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'start' }}>
          {/* Inputs Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--emerald-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>1. Zakatable Assets</span>
            </h3>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Cash in Hand &amp; Bank Accounts ({currency.symbol})
              </label>
              <input
                type="number"
                min="0"
                value={cash || ''}
                onChange={(e) => setCash(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--emerald-border)',
                  background: '#FAF8F5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Gold Value (Bullion, Coins, Jewelry) ({currency.symbol})
              </label>
              <input
                type="number"
                min="0"
                value={goldValue || ''}
                onChange={(e) => setGoldValue(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--emerald-border)',
                  background: '#FAF8F5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Silver Value ({currency.symbol})
              </label>
              <input
                type="number"
                min="0"
                value={silverValue || ''}
                onChange={(e) => setSilverValue(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--emerald-border)',
                  background: '#FAF8F5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Shares, Mutual Funds, Retirement &amp; Crypto ({currency.symbol})
              </label>
              <input
                type="number"
                min="0"
                value={investments || ''}
                onChange={(e) => setInvestments(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--emerald-border)',
                  background: '#FAF8F5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Business Merchandise &amp; Saleable Goods ({currency.symbol})
              </label>
              <input
                type="number"
                min="0"
                value={inventory || ''}
                onChange={(e) => setInventory(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--emerald-border)',
                  background: '#FAF8F5',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#DC2626', marginTop: '10px' }}>
              2. Deductible Liabilities
            </h3>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Immediate Debts &amp; Outstanding Bills Due Now ({currency.symbol})
              </label>
              <input
                type="number"
                min="0"
                value={liabilities || ''}
                onChange={(e) => setLiabilities(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #FECACA',
                  background: '#FEF2F2',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#991B1B',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button
                type="button"
                onClick={handleSampleFill}
                style={{
                  flex: 1,
                  padding: '10px',
                  background: '#FFFFFF',
                  border: '1px solid var(--emerald-border)',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--emerald-dark)',
                  cursor: 'pointer',
                }}
              >
                Load Sample Figures
              </button>
              <button
                type="button"
                onClick={handleReset}
                style={{
                  flex: 1,
                  padding: '10px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                Reset All
              </button>
            </div>
          </div>

          {/* Results Summary Card */}
          <div
            style={{
              background: '#FAF8F5',
              border: '2px solid var(--gold-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '32px',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '20px' }}>
              Summary &amp; Breakdown
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <span>Total Qualifying Assets:</span>
                <strong style={{ color: 'var(--text-primary)' }}>{currency.symbol}{totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#DC2626' }}>
                <span>Immediate Liabilities Deducted:</span>
                <strong>-{currency.symbol}{(liabilities || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
              </div>

              <div style={{ height: '1px', background: 'var(--emerald-border)', margin: '4px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                <span>Net Zakatable Wealth:</span>
                <span>{currency.symbol}{netZakatableWealth.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>Current Nisab Threshold ({nisabStandard}):</span>
                <span>{currency.symbol}{activeNisabThreshold.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>

            {/* Nisab Qualification Status Badge */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: isAboveNisab ? '#F0FDF4' : '#FFF9ED',
                border: isAboveNisab ? '1px solid #86EFAC' : '1px solid #FDE68A',
                color: isAboveNisab ? '#166534' : '#92400E',
                fontSize: '0.9rem',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              {isAboveNisab
                ? '✓ Wealth exceeds Nisab: Zakat is due (2.5%)'
                : '✕ Wealth is below current Nisab: No Zakat obligatory'}
            </div>

            {/* Big Payable Output */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1px solid var(--gold-border)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold-dark)', marginBottom: '6px' }}>
                Total Zakat Obligation Due (2.5%)
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: isAboveNisab ? 'var(--emerald-dark)' : 'var(--text-muted)',
                  lineHeight: 1.1,
                }}
              >
                {currency.symbol}{zakatPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', marginBottom: 0 }}>
                {currency.code} ({currency.symbol}) based on 2.5% of net zakatable assets held for one lunar year.
              </p>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              🔒 <strong>100% Private</strong>: Your numbers are calculated strictly on your browser hardware. Islam24 never logs or transmits financial amounts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
