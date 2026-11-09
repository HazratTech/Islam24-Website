'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactClient() {
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
    <form onSubmit={handleSubmit} className={styles.glassForm}>
      <h3 className={styles.formTitle}>Send a Direct Message</h3>
      <p className={styles.formSubtitle}>We will get back to you as soon as possible, insha&apos;Allah.</p>

      {status === 'success' && (
        <div className={styles.successMessage}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>Jazakallahu Khair! Your message has been sent successfully.</span>
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorMessage}>
          {errorMessage}
        </div>
      )}

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>YOUR NAME</label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Abdullah Ahmad"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>EMAIL ADDRESS</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>SUBJECT</label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Feature request, Bug report, etc."
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>MESSAGE</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn btn-primary ${styles.submitBtn}`}
      >
        {status === 'loading' ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
}
