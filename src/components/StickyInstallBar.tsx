'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import styles from './StickyInstallBar.module.css';
import { HiStar, HiXMark } from 'react-icons/hi2';
import { TbQrcode } from 'react-icons/tb';

interface StickyInstallBarProps {
  onOpenQR: () => void;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.hazrat.islam24';

export default function StickyInstallBar({ onOpenQR }: StickyInstallBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    const handleScroll = () => {
      if (window.scrollY > 380) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed) return null;

  const handleAction = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      onOpenQR();
    }
  };

  return (
    <div
      className={`${styles.stickyBar} ${visible ? styles.visible : ''}`}
      role="complementary"
      aria-label="Quick App Download"
    >
      <div className={styles.left}>
        <img
          src="/logo-with-bg.svg"
          alt="Islam24 App Icon"
          className={styles.icon}
          width={40}
          height={40}
        />
        <div className={styles.meta}>
          <div className={styles.appName}>
            <span>Islam24</span>
            <span className={styles.rating}>
              <HiStar size={11} style={{ color: 'var(--gold)' }} /> 4.8
            </span>
          </div>
          <span className={styles.tagline}>100% Free &bull; 0 Ads &bull; Complete Privacy</span>
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href={PLAY_STORE_URL}
          target={isMobile ? '_blank' : undefined}
          rel={isMobile ? 'noopener noreferrer' : undefined}
          onClick={handleAction}
          className={styles.installBtn}
        >
          {isMobile ? (
            <>
              <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <span>Install Free</span>
            </>
          ) : (
            <>
              <TbQrcode size={15} />
              <span>Scan to Install</span>
            </>
          )}
        </a>

        <button
          onClick={() => setDismissed(true)}
          className={styles.dismissBtn}
          aria-label="Dismiss banner"
        >
          <HiXMark size={16} />
        </button>
      </div>
    </div>
  );
}

