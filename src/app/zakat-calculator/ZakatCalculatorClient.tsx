'use client';

import React, { useState } from 'react';
import { HiCheck, HiLockClosed } from 'react-icons/hi2';
import styles from './ZakatCalculator.module.css';

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

  const formatCurrency = (val: number) => {
    return `${currency.symbol}${val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.calcCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardBadge}>
            Third Pillar of Islam
          </span>
          <h2 className={styles.cardTitle}>
            Instant Zakat Calculator &amp; Nisab Standard
          </h2>
          <p className={styles.cardSubtitle}>
            Determine your precise 2.5% annual Zakat liability across cash, gold, silver, shares, and business goods according to Islamic jurisprudence.
          </p>
        </div>

        {/* Controls Bar */}
        <div className={styles.controlsBar}>
          {/* Currency selection */}
          <div className={styles.currencyGroup}>
            <span className={styles.controlLabel}>Currency:</span>
            <div className={styles.currencyPills}>
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c)}
                  className={`${styles.currencyBtn} ${currency.code === c.code ? styles.currencyBtnActive : ''}`}
                >
                  {c.code} ({c.symbol})
                </button>
              ))}
            </div>
          </div>

          {/* Nisab Standard Toggle */}
          <div className={styles.nisabGroup}>
            <span className={styles.controlLabel}>Nisab Standard:</span>
            <div className={styles.nisabSegment}>
              <button
                onClick={() => setNisabStandard('silver')}
                className={`${styles.nisabBtn} ${nisabStandard === 'silver' ? styles.nisabBtnActive : ''}`}
              >
                Silver (Recommended)
              </button>
              <button
                onClick={() => setNisabStandard('gold')}
                className={`${styles.nisabBtn} ${nisabStandard === 'gold' ? styles.nisabBtnActive : ''}`}
              >
                Gold
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Calculator Body */}
        <div className={styles.calcLayout}>
          {/* Inputs Column */}
          <div className={styles.inputsCol}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                Cash &amp; Bank Balances
                <span className={styles.inputHint}>Checking, savings &amp; on-hand cash</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencyPrefix}>{currency.symbol}</span>
                <input
                  type="number"
                  value={cash || ''}
                  onChange={(e) => setCash(Number(e.target.value))}
                  className={styles.numInput}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                Gold &amp; Jewelry Market Value
                <span className={styles.inputHint}>~{formatCurrency(currency.goldPricePerGram)}/gram</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencyPrefix}>{currency.symbol}</span>
                <input
                  type="number"
                  value={goldValue || ''}
                  onChange={(e) => setGoldValue(Number(e.target.value))}
                  className={styles.numInput}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                Silver Market Value
                <span className={styles.inputHint}>~{formatCurrency(currency.silverPricePerGram)}/gram</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencyPrefix}>{currency.symbol}</span>
                <input
                  type="number"
                  value={silverValue || ''}
                  onChange={(e) => setSilverValue(Number(e.target.value))}
                  className={styles.numInput}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                Stocks, Shares &amp; Crypto
                <span className={styles.inputHint}>Liquid market valuations</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencyPrefix}>{currency.symbol}</span>
                <input
                  type="number"
                  value={investments || ''}
                  onChange={(e) => setInvestments(Number(e.target.value))}
                  className={styles.numInput}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                Business Inventory &amp; Trade Goods
                <span className={styles.inputHint}>Wholesale selling value</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencyPrefix}>{currency.symbol}</span>
                <input
                  type="number"
                  value={inventory || ''}
                  onChange={(e) => setInventory(Number(e.target.value))}
                  className={styles.numInput}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} style={{ color: '#991B1B' }}>
                Minus: Immediate Debts &amp; Liabilities
                <span className={styles.inputHint}>Due within this lunar month</span>
              </label>
              <div className={styles.inputWrapper}>
                <span className={styles.currencyPrefix}>{currency.symbol}</span>
                <input
                  type="number"
                  value={liabilities || ''}
                  onChange={(e) => setLiabilities(Number(e.target.value))}
                  className={styles.numInput}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.actionsBar}>
              <button onClick={handleSampleFill} className={styles.sampleBtn}>
                Load Example Portfolio
              </button>
              <button onClick={handleReset} className={styles.resetBtn}>
                Reset All Fields
              </button>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className={styles.resultCard}>
            <div className={styles.resultTitle}>
              Zakat Calculation Summary
            </div>

            <div className={styles.breakdownRow}>
              <span>Gross Assets</span>
              <span className={styles.breakdownVal}>{formatCurrency(totalAssets)}</span>
            </div>

            <div className={styles.breakdownRow}>
              <span>Deductible Liabilities</span>
              <span className={styles.breakdownVal}>- {formatCurrency(liabilities || 0)}</span>
            </div>

            <div className={styles.breakdownRow} style={{ borderTop: '1px dashed var(--gold-border)', paddingTop: '10px' }}>
              <span style={{ fontWeight: 700 }}>Net Zakatable Wealth</span>
              <span className={styles.breakdownVal} style={{ color: 'var(--emerald-dark)' }}>{formatCurrency(netZakatableWealth)}</span>
            </div>

            <div className={styles.breakdownRow}>
              <span>Nisab Threshold ({nisabStandard})</span>
              <span className={styles.breakdownVal}>{formatCurrency(activeNisabThreshold)}</span>
            </div>

            <div className={`${styles.nisabStatusPill} ${isAboveNisab ? styles.nisabEligible : styles.nisabExempt}`}>
              {isAboveNisab ? (
                <span><HiCheck size={14} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> Wealth Exceeds Nisab &bull; Zakat is Fard</span>
              ) : (
                <span>Below Nisab Threshold &bull; No Zakat Due</span>
              )}
            </div>

            <div className={styles.dueSection}>
              <div className={styles.dueLabel}>Total Zakat Payable (2.5%)</div>
              <div className={styles.dueAmount}>{formatCurrency(zakatPayable)}</div>
              <div className={styles.dueRate}>Based on 1 complete lunar year (Hawl) holding period</div>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <HiLockClosed size={14} style={{ color: 'var(--emerald)' }} />
              Calculations are computed strictly in your browser. No financial data is ever stored or transmitted.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
