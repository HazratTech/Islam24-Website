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
            <span className="section-badge section-badge-gold">Account Management</span>
            <h1 className={styles.title}>
              Delete Account &amp; <span className="highlight">Associated Data</span>
            </h1>
            <p className={styles.subtitle}>
              In accordance with Google Play Developer Data Safety policies and our strict commitment to user privacy, you have full control over your data. Use this self-service portal to permanently delete your Islam24 account and all associated cloud-stored data.
            </p>
          </div>

          {/* Interactive Deletion Client Component */}
          <DeleteAccountClient />

          {/* Detailed Data Deletion Policy (Google Play Policy Compliance) */}
          <div className={styles.policySection}>
            <h3 className={styles.policyTitle}>Data Deletion &amp; Retention Policy</h3>
            <div className={styles.policyGrid}>
              <div className={styles.policyCard}>
                <div className={styles.policyIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </div>
                <h4>What Data Is Permanently Deleted</h4>
                <p>
                  When you delete your account, our systems immediately and permanently purge:
                </p>
                <ul>
                  <li>Your user account record and unique internal ID</li>
                  <li>Your email address and associated Google profile information</li>
                  <li>All synchronized Quran bookmarks, last-read positions, and saved Ayahs</li>
                  <li>All saved favorite Duas and Azkar counter data</li>
                  <li>Active authentication sessions and refresh tokens</li>
                </ul>
              </div>

              <div className={styles.policyCard}>
                <div className={styles.policyIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h4>Data That Never Leaves Your Device</h4>
                <p>
                  Islam24 was engineered with on-device computing by default:
                </p>
                <ul>
                  <li><strong>Location Data:</strong> Your GPS coordinates for prayer times and Qibla direction are calculated strictly on your phone hardware. Location data is never sent to our servers.</li>
                  <li><strong>Zakat Calculations:</strong> All asset entries and calculations stay on your device and are never transmitted.</li>
                  <li><strong>Offline Audio:</strong> Downloaded Quran audio files are stored in your device storage and deleted upon uninstall.</li>
                </ul>
              </div>

              <div className={styles.policyCard}>
                <div className={styles.policyIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h4>Retention Timelines</h4>
                <p>
                  We adhere to strict minimal retention principles:
                </p>
                <ul>
                  <li><strong>Immediate Deletion:</strong> Self-service deletion via this page purges records in real-time.</li>
                  <li><strong>Email Requests:</strong> Deletion requests sent to support@islam24.app are processed within 48 hours.</li>
                  <li><strong>Zero Retention Grace Period:</strong> We do not retain &ldquo;soft-deleted&rdquo; user records or archive backups of deleted accounts.</li>
                </ul>
              </div>

              <div className={styles.policyCard}>
                <div className={styles.policyIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h4>Anonymous App Usage</h4>
                <p>
                  Islam24 does not require an account. You can use all core features — Quran reading and recitation, prayer times, Qibla compass, Azkar, and Zakat calculator — completely anonymously without any account creation or personal data sharing.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>How long does it take for my data to be deleted?</h4>
                <p className={styles.faqAnswer}>
                  Self-service deletion through this portal executes immediately in real-time. Your account record, tokens, and synchronized bookmarks are permanently removed from production databases within seconds.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>Can I recover my bookmarks after deleting my account?</h4>
                <p className={styles.faqAnswer}>
                  No. Account deletion is permanent and irreversible. If you decide to use Islam24 again in the future, you will start with a fresh, clean slate.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>Do I need an account to use Islam24?</h4>
                <p className={styles.faqAnswer}>
                  No! Islam24 can be used 100% anonymously without creating an account or logging in. Accounts are strictly optional for users who wish to sync bookmarks across multiple Android devices.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>How do I delete data without signing into Google?</h4>
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
