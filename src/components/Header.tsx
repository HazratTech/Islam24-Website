'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link href="/features" className={styles.navLink}>Features</Link>
          <Link href="/acknowledgements" className={styles.navLink}>Acknowledgements</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/privacy-policy" className={styles.navLink}>Privacy</Link>
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
        <Link href="/features" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Features</Link>
        <Link href="/acknowledgements" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Acknowledgements</Link>
        <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact</Link>
        <Link href="/privacy-policy" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Privacy</Link>
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
