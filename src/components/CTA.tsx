'use client';

import { useState } from 'react';
import styles from './CTA.module.css';
import QRCodeModal from '@/components/QRCodeModal';
import { HiCheck } from 'react-icons/hi2';
import { TbQrcode } from 'react-icons/tb';

interface CTAProps {
  onOpenQR?: () => void;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.hazrat.islam24';

export default function CTA({ onOpenQR }: CTAProps) {
  const [localModalOpen, setLocalModalOpen] = useState(false);

  const handleQRClick = () => {
    if (onOpenQR) {
      onOpenQR();
    } else {
      setLocalModalOpen(true);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.arabicAyah}>
            وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ
          </div>

          <h2 className={styles.title}>
            Begin Your <span className={styles.highlight}>Distraction-Free</span> Worship
          </h2>

          <p className={styles.description}>
            Join Muslims worldwide who have returned peace, focus, and purity to their daily Salah, Quran recitation, and Dhikr. Download free today.
          </p>

          <div className={styles.trustPills}>
            <span className={styles.trustPill}><HiCheck size={16} /> 100% Free Forever</span>
            <span className={styles.trustPill}><HiCheck size={16} /> 0 Commercial Ads</span>
            <span className={styles.trustPill}><HiCheck size={16} /> Zero Data Tracking</span>
          </div>

          <div className={styles.buttonGroup}>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeBtn}
            >
              <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <span>Download on Google Play</span>
            </a>

            <button
              type="button"
              onClick={handleQRClick}
              className={styles.qrBtn}
              aria-label="Scan QR code with your phone"
            >
              <TbQrcode size={18} />
              <span>Scan QR to Install</span>
            </button>
          </div>
        </div>
      </section>

      {/* Local fallback modal if parent doesn't provide onOpenQR */}
      {!onOpenQR && (
        <QRCodeModal
          isOpen={localModalOpen}
          onClose={() => setLocalModalOpen(false)}
        />
      )}
    </>
  );
}
