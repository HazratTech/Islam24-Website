import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactClient from './ContactClient';
import styles from './Contact.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Contact Islam24 Team — Support, Feedback & Community',
  description: 'Get in touch with the Islam24 engineering team. Have a feature request, calculation feedback, or inquiry? Send a direct message or join our Discord community.',
  keywords: [
    'contact islam24',
    'islamic app support',
    'islam24 feedback',
    'muslim app contact',
    'islamic app developer'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Islam24 Team — Support, Feedback & Community',
    description: 'Get in touch with the Islam24 engineering team. Have a feature request, calculation feedback, or inquiry? Send a direct message or join our Discord community.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Islam24 Team — Support & Feedback',
    description: 'Get in touch with the Islam24 engineering team. Have a feature request, calculation feedback, or inquiry? Send a direct message.',
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": `${siteUrl}/contact`
        }
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contact Islam24 Team",
      "url": `${siteUrl}/contact`,
      "description": "Direct communication channel with the Islam24 engineering team.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Islam24",
        "url": siteUrl,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": `${siteUrl}/contact`
        }
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <div className="layout-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          <div className={styles.textSection}>
            <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <span className="section-badge section-badge-gold">Get In Touch</span>
            <h1 className={styles.title}>
              Let&apos;s talk about your <span className="highlight">experience</span>.
            </h1>
            <p className={styles.subtitle}>
              Whether you have a feature suggestion, discovered a calculation variance, or simply want to say salam — we welcome your message with an open heart.
            </p>

            <div className={styles.infoCards}>
              <a href="https://discord.gg/SP3xHrENJ5" target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                </div>
                <div>
                  <h4>Community &amp; Live Chat</h4>
                  <p>Join our active Discord server for direct feedback</p>
                </div>
              </a>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h4>Developer Team Response</h4>
                  <p>Messages directly reviewed by the Islam24 engineering team</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <ContactClient />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
