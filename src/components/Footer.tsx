import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine}></div>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="Islam24 — Free Ad-Free Islamic App" width={32} height={32} />
            <span>Islam<span className={styles.logoAccent}>24</span></span>
          </Link>
          <p className={styles.tagline}>
            A sacred, ad-free Islamic sanctuary engineered for spiritual tranquility.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.linkTitle}>Islamic Apps</h4>
          <Link href="/quran" className={styles.link}>Holy Quran App</Link>
          <Link href="/prayer-times" className={styles.link}>Prayer Times &amp; Athan</Link>
          <Link href="/qibla-finder" className={styles.link}>Qibla Compass</Link>
          <Link href="/zakat-calculator" className={styles.link}>Zakat Calculator</Link>
          <Link href="/azkar-dua" className={styles.link}>Daily Azkar &amp; Tasbih</Link>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.linkTitle}>Company &amp; Legal</h4>
          <Link href="/about-us" className={styles.link}>About Islam24</Link>
          <Link href="/features" className={styles.link}>All Features</Link>
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms-of-service" className={styles.link}>Terms of Service</Link>
          <Link href="/delete-account" className={styles.link}>User Account</Link>
          <Link href="/acknowledgements" className={styles.link}>Acknowledgements</Link>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.linkTitle}>Connect</h4>
          <a href="https://github.com/ihazratummar/Islam24" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub Repository</a>
          <Link href="/contact" className={styles.link}>Contact Support</Link>
          <a href="https://play.google.com/store/apps/details?id=com.hazrat.islam24" target="_blank" rel="noopener noreferrer" className={styles.link}>Google Play Store</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Islam24 by Hazrat Ummar Shaikh</p>
          <p className={styles.madeWith}>Crafted with sincere devotion for the global Ummah</p>
        </div>
      </div>
    </footer>
  );
}
