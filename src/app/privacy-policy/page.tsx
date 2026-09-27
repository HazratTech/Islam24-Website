import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Strict Zero-Tracking Commitment | Islam24',
  description: 'Privacy Policy for Islam24. Learn how your location and usage data remain 100% private and processed on-device without third-party trackers.',
  keywords: ['islam24 privacy policy', 'ad free islamic app privacy', 'no tracking muslim app', 'local location prayer times'],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="prose">
            <h1>Privacy Policy</h1>
            <p>Last updated: June 07, 2026</p>

            <p>
              Welcome to Islam24. We are committed to protecting your personal information and your right to privacy.
              If you have any questions or concerns about our policy, or our practices with regards to your personal
              information, please contact us.
            </p>

            <h2>1. Sacred Data Privacy Pledge</h2>
            <p>
              Islam24 was created as an authentic Islamic tool, not an advertising platform or data aggregation business. We do not sell, rent, monetize, or broker your personal information to third parties, data brokers, or advertising networks under any circumstances.
            </p>

            <h2>2. Information We Collect &amp; Process</h2>
            <p>
              <strong>Location Data:</strong> The application requires location permission solely to calculate astronomical prayer times (Salat) and real-time Qibla heading toward Makkah. This data is computed <strong>strictly locally on your device hardware</strong>. Your GPS coordinates are never transmitted to our servers, logged in telemetry, or shared with third parties.
            </p>
            <p>
              <strong>Personal Data:</strong> We do not require you to create an account to use the core features of Islam24. If you optionally choose to sign in (via Google Sign-In) to synchronize your bookmarks or tasbih counters, we only store your authentication token securely.
            </p>

            <h2>3. Zero Third-Party Advertising &amp; Trackers</h2>
            <p>
              Islam24 is proudly 100% ad-free and tracker-free. We do not integrate commercial advertising SDKs, behavioral analytics (such as Facebook Pixel or ad identifiers), or invasive user-tracking scripts. Your devotional practices remain entirely between you and Allah.
            </p>

            <h2>4. Local Data Security</h2>
            <p>
              Your personal preferences, Quran bookmarks, and Tasbih counts are stored directly within your device&apos;s local storage. You maintain complete control over this data and may erase it at any time by clearing your application data or uninstalling the app.
            </p>

            <h2>5. Account &amp; Data Deletion</h2>
            <p>
              You have the right to request deletion of your account and all associated synchronized data at any time through our self-service <a href="/delete-account">Delete Account page</a>. Upon confirmation, all associated data is permanently erased.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy periodically to reflect technological improvements. Any updates will be published on this page with an updated revision date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions or feedback regarding this Privacy Policy, please contact our team via our Discord community or via the <a href="/contact">Contact page</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
