import { Metadata } from 'next';
import styles from './AboutUs.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | Islam24 App',
  description: 'Learn more about Islam24, your comprehensive Islamic companion app for accurate prayer times, Quran reading, and spiritual growth.',
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Islam24</h1>
          <p className={styles.subtitle}>Empowering your spiritual journey through technology.</p>
          
          <div className={styles.content}>
            <section className={styles.section}>
              <h2>Our Mission</h2>
              <p>
                At Islam24, our mission is to provide Muslims around the world with a reliable, elegant, and comprehensive digital companion to support their daily spiritual practices. We believe that technology should serve to enhance faith, making it easier to stay connected with the Quran, accurate prayer times, and community, no matter where you are in the world.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Why We Built Islam24</h2>
              <p>
                In today's fast-paced digital world, finding moments for spiritual reflection can be challenging. We built Islam24 to bridge this gap. By combining beautiful design with essential Islamic tools—such as a highly accurate Qibla compass, customizable Adhan notifications, and a complete digital Quran—we strive to bring peace and focus into your daily life.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Our Values</h2>
              <ul className={styles.list}>
                <li><strong>Accuracy:</strong> We utilize state-of-the-art calculation methods to ensure our prayer times and Qibla directions are always precise.</li>
                <li><strong>Privacy:</strong> We deeply respect your privacy. Your personal data is secure, and we never compromise on user trust.</li>
                <li><strong>Simplicity:</strong> A clean, ad-free, and intuitive interface designed so you can focus entirely on your worship without distractions.</li>
                <li><strong>Community:</strong> Built by Muslims, for Muslims. We constantly listen to user feedback to improve and grow the app.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Join Our Journey</h2>
              <p>
                Islam24 is more than just an app; it's a growing community of believers striving to improve their Deen. Whether you are reading the Quran, tracking your daily prayers, or finding the Qibla while traveling, we are honored to be part of your spiritual routine.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
