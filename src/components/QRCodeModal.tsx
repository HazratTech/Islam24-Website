'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useCallback } from 'react';
import QRCode from 'qrcode';
import styles from './QRCodeModal.module.css';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.hazrat.islam24';

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Generate QR code data URL once
  useEffect(() => {
    let isMounted = true;
    QRCode.toDataURL(PLAY_STORE_URL, {
      width: 440,
      margin: 1.5,
      color: {
        dark: '#08432B', // Deep forest emerald ink
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (isMounted) setQrDataUrl(url);
      })
      .catch((err) => {
        console.error('Failed to generate QR code:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Handle ESC key to dismiss
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PLAY_STORE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Install Islam24 on Android">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close dialog">
          ✕
        </button>

        <div className={styles.header}>
          <div className={styles.badge}>✨ Android App &bull; 100% Free</div>
          <h3 className={styles.title}>Install Islam24 on Android</h3>
          <p className={styles.subtitle}>
            Experience your daily worship with zero commercial ads or tracking interruptions.
          </p>
        </div>

        <div className={styles.qrContainer}>
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="Scan QR code to install Islam24 from Google Play Store"
              width={220}
              height={220}
              className={styles.qrImage}
            />
          ) : (
            <div style={{ width: 220, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              Generating QR Code...
            </div>
          )}
        </div>

        <div className={styles.qrInstruction}>
          <span className={styles.cameraIcon}>📷</span>
          <span>Point your phone camera here to download</span>
        </div>

        <div className={styles.actions}>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playBtn}
          >
            <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
            <span>Open Google Play Directly</span>
          </a>

          <button onClick={handleCopyLink} className={styles.copyBtn}>
            {copied ? '✓ Play Store Link Copied!' : 'Copy Direct Play Store Link'}
          </button>
        </div>
      </div>
    </div>
  );
}
