'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="Islam24" width={36} height={36} />
          <span className={styles.logoText}>Islam<span className={styles.logoAccent}>24</span></span>
        </Link>

        <nav className={styles.nav}>
          <a href="#live-demos" className={styles.navLink}>Live Demos</a>
          <a href="#comparison" className={styles.navLink}>Why Us</a>
          <Link href="/features" className={styles.navLink}>Features</Link>
          <a href="#faq" className={styles.navLink}>FAQ</a>
          <Link href="/delete-account" className={styles.navLink}>
            {user ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--emerald)' }}>
                {user.picture && !imgError ? (
                  <img
                    src={user.picture}
                    alt=""
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  '👤'
                )}
                {user.name ? user.name.split(' ')[0] : 'Profile'}
              </span>
            ) : (
              'Account'
            )}
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.hazrat.islam24"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.cta}`}
          >
            Download Free
          </a>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`}></span>
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`}></span>
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="#live-demos" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Live Demos</a>
        <a href="#comparison" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Why Us</a>
        <Link href="/features" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Features</Link>
        <a href="#faq" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>FAQ</a>
        <Link href="/delete-account" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
          {user ? `Account (${user.name || user.email})` : 'Account & Delete'}
        </Link>
        <a
          href="https://play.google.com/store/apps/details?id=com.hazrat.islam24"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.mobileCta}`}
        >
          Download Free
        </a>
      </div>
    </header>
  );
}
