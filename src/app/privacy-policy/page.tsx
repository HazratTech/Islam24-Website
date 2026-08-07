import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Islam24',
  description: 'Privacy Policy for the Islam24 application and website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="page-content" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container prose">
          <h1>Privacy Policy for Islam24</h1>
          <p>Last updated: June 07, 2026</p>

          <p>
            Welcome to Islam24. We are committed to protecting your personal information and your right to privacy.
            If you have any questions or concerns about our policy, or our practices with regards to your personal
            information, please contact us.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            <strong>Location Data:</strong> The app requires location permission solely to calculate accurate prayer
            times and Qibla direction based on your coordinates. This data is processed locally on your device and is
            <strong> never </strong> uploaded, stored, or shared with us or any third parties.
          </p>
          <p>
            <strong>Personal Data:</strong> We do not require you to create an account, and we do not collect personal
            identifiable information (PII) such as your name, email, or phone number within the app.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Since we do not collect personal data, we do not use, share, or sell it. Your location data is used
            in real-time to provide the core functionality of the app (Prayer Times and Qibla).
          </p>

          <h2>3. Third-Party Services</h2>
          <p>
            Islam24 is proudly ad-free and tracker-free. We do not use third-party analytics (like Google Analytics
            or third-party trackers) or advertising networks. Your usage remains completely private to you.
          </p>

          <h2>4. Data Security</h2>
          <p>
            Your data (such as saved bookmarks, tasbih counts, and settings) is stored locally on your device.
            We do not have access to it. We recommend using your device&apos;s built-in security features (like screen
            locks and encryption) to protect your local data.
          </p>

          <h2>5. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
            new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <strong>hazrat.ummar.sk@gmail.com</strong>
            or use our <a href="/contact">Contact Page</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
