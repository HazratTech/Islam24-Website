'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setErrorMessage(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="layout-wrapper">
      <Header />
      <main className={styles.main}>
        {/* Background Decorative Blobs */}
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>

        <div className={`container ${styles.container}`}>
          <div className={styles.textSection}>
            <span className="section-badge">Get In Touch</span>
            <h1 className={styles.title}>Let&apos;s talk about your <span className="highlight">experience</span>.</h1>
            <p className={styles.subtitle}>
              Whether you have a suggestion, found a bug, or just want to say salam, we&apos;d love to hear from you.
            </p>

            <div className={styles.infoCards}>
              <a href="https://discord.gg/SP3xHrENJ5" target="_blank" rel="noopener noreferrer" className={styles.infoCard} style={{ textDecoration: 'none' }}>
                <div className={styles.icon}>💬</div>
                <div>
                  <h4>Community</h4>
                  <p>Join our Discord</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.glassForm}>
              <h3 className={styles.formTitle}>Send a Message</h3>

              {status === 'success' && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  {errorMessage}
                </div>
              )}

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.input}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`btn btn-primary ${styles.submitBtn}`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
