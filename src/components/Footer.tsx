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
            <Image src="/logo.svg" alt="Islam24" width={32} height={32} />
            <span>Islam<span className={styles.logoAccent}>24</span></span>
          </Link>
          <p className={styles.tagline}>
            Your reliable, ad-free Islamic companion for daily worship.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.linkTitle}>Islam24</h4>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about-us" className={styles.link}>About Us</Link>
          <Link href="/features" className={styles.link}>Features</Link>
          <a href="https://github.com/ihazratummar/Islam24" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.linkTitle}>Legal</h4>
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms-of-service" className={styles.link}>Terms of Service</Link>
          <Link href="/delete-account" className={styles.link}>Delete Account</Link>
          <Link href="/acknowledgements" className={styles.link}>Acknowledgements</Link>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.linkTitle}>Connect</h4>
          <a href="https://github.com/ihazratummar/Islam24" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Islam24 by Hazrat Ummar Shaikh</p>
          <p className={styles.madeWith}>Made with ☪ for the Ummah</p>
        </div>
      </div>
    </footer>
  );
}
