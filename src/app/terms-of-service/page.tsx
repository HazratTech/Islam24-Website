import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Islam24 App',
  description: 'Terms of Service for the Islam24 App. Please read carefully before using our application and website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <main className="page-content" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="prose">
            <h1>Terms of Service</h1>
            <p>Last updated: June 2026</p>

            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Islam24. By accessing our website (https://islam24.app) or using our mobile application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2>2. Use of Service</h2>
              <p>
                Islam24 provides digital tools including prayer times, Qibla direction, Quran reading, and community features. These services are provided &quot;as is&quot; for your personal, non-commercial use. You agree to use the services only for lawful purposes and in a way that does not infringe the rights of others.
              </p>
            </section>

            <section>
              <h2>3. Accounts and Data Deletion</h2>
              <p>
                If you choose to create an account (e.g., via Google Sign-In) to sync your bookmarks or tasbih progress, you are responsible for maintaining the confidentiality of your account. You have the right to delete your account and all associated data at any time via the &quot;Delete Account&quot; option in the app or on our website. Upon deletion, your personal data will be permanently removed from our databases.
              </p>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                The original content, features, and functionality of the Islam24 app and website are owned by Islam24 and are protected by international copyright, trademark, and other intellectual property laws. The Quranic text and translations used within the app are public domain or used under appropriate open licenses.
              </p>
            </section>

            <section>
              <h2>5. Accuracy of Information</h2>
              <p>
                While we strive to provide the most accurate prayer times and Qibla directions using standard calculation methods, local variations may occur. Islam24 shall not be held liable for any inaccuracies. It is recommended to verify times with your local mosque if you are unsure.
              </p>
            </section>

            <section>
              <h2>6. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please reach out to us via our Discord community or via the Contact page on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
