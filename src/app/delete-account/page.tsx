import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DeleteAccountClient from './DeleteAccountClient';
import styles from './DeleteAccount.module.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://islam24.app';

export const metadata: Metadata = {
  title: 'Delete Account & User Data — Google Play Compliant | Islam24',
  description: 'Request permanent deletion of your Islam24 account and associated synchronized data in full compliance with Google Play Developer policies.',
  keywords: [
    'delete islam24 account',
    'islam24 data deletion',
    'delete account and data',
    'google play data deletion compliant',
    'remove user data islam24'
  ],
  alternates: {
    canonical: '/delete-account',
  },
  openGraph: {
    title: 'Delete Account & User Data — Google Play Compliant | Islam24',
    description: 'Request permanent deletion of your Islam24 account and associated synchronized data in full compliance with Google Play Developer policies.',
    url: '/delete-account',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete Account & User Data | Islam24',
    description: 'Request permanent deletion of your Islam24 account and associated synchronized data.',
  },
};

const deleteAccountSchema = {
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
          "name": "Delete Account",
          "item": `${siteUrl}/delete-account`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What data is permanently deleted when I delete my account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your user profile, Google authentication identifier, and all synchronized bookmarks (saved Ayahs, Surahs, and Duas) are permanently removed from production databases."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for my data to be deleted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Self-service deletion through this portal executes immediately in real-time. Manual email requests are processed within 48 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an account to use Islam24?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Islam24 is 100% functional without an account. Accounts are strictly optional for cloud bookmark syncing across devices."
          }
        }
      ]
    }
  ]
};

export default function DeleteAccountPage() {
  return (
    <div className="layout-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deleteAccountSchema) }}
      />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.bismillah}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
            <span className="section-badge section-badge-gold">Data Privacy &amp; Ownership</span>
            <h1 className={styles.title}>
              Manage Account &amp; <span className="highlight">Data Deletion</span>
            </h1>
            <p className={styles.subtitle}>
              In accordance with Google Play Developer Data Safety policies and our strict commitment to user privacy, you have full control over your data. Authenticate below to manage your synchronized profile or permanently erase your account and all stored records.
            </p>
          </div>

          {/* Interactive Deletion Client Component (Portal Grid with Google Auth & Data Safety Guarantees) */}
          <DeleteAccountClient />

          {/* Bottom Section: Google Play Compliance & FAQ Accordion */}
          <div className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions &amp; Data Safety</h2>
            <p className={styles.faqSubtitle}>
              Transparency regarding our compliance with Google Play Store User Data policies and user privacy rights.
            </p>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does account deletion take to complete?</h3>
                <p className={styles.faqAnswer}>
                  Self-service deletion through this portal executes immediately in real-time. Your account record, tokens, and synchronized bookmarks are permanently removed from production databases within seconds.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can I recover my bookmarks after deleting my account?</h3>
                <p className={styles.faqAnswer}>
                  No. Account deletion is permanent and irreversible. If you decide to use Islam24 again in the future, you will start with a fresh, clean slate.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I need an account to use Islam24?</h3>
                <p className={styles.faqAnswer}>
                  No! Islam24 can be used 100% anonymously without creating an account or logging in. Accounts are strictly optional for users who wish to sync bookmarks across multiple Android devices.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do I delete data without signing into Google?</h3>
                <p className={styles.faqAnswer}>
                  If you used the app anonymously without Google Sign-In, all your data exists solely on your phone. Simply go to Android Settings &gt; Apps &gt; Islam24 &gt; Clear Storage, or uninstall the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
