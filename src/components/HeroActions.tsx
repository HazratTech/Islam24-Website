'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import QRCodeModal from '@/components/QRCodeModal';

export default function HeroActions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={styles.actions}>
        <a
          href="https://play.google.com/store/apps/details?id=com.hazrat.islam24"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.storeBtn}`}
        >
          <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
          </svg>
          <div className={styles.storeBtnText}>
            <small>DOWNLOAD FREE</small>
            <strong>Google Play</strong>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={styles.qrBtn}
          aria-label="Scan QR code to install Islam24 on Android"
        >
          <span>📱 Scan QR to Install</span>
        </button>

        <Link href="/features" className="btn btn-dark">
          <span>Explore Features</span>
        </Link>
      </div>

      <QRCodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
