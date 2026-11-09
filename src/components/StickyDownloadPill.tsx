'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiXMark } from 'react-icons/hi2';
import styles from './StickyDownloadPill.module.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.hazrat.islam24';

export default function StickyDownloadPill() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.pill}>
        <div className={styles.left}>
          <div className={styles.logoBox}>
            <Image
              src="/logo.svg"
              alt="Islam24 Logo"
              width={22}
              height={22}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className={styles.textWrap}>
            <span className={styles.appName}>Islam24 App</span>
            <span className={styles.appSub}>100% Free &bull; Zero Ads</span>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Install Free
          </a>
          <button
            onClick={() => setDismissed(true)}
            className={styles.dismissBtn}
            aria-label="Dismiss download banner"
          >
            <HiXMark size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

