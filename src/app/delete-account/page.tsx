'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import styles from './DeleteAccount.module.css';

interface GoogleIdAccounts {
  initialize: (config: { client_id: string; callback: (res: { credential?: string }) => void }) => void;
  renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
}

interface CustomWindow extends Window {
  google?: {
    accounts?: {
      id?: GoogleIdAccounts;
    };
  };
}

export default function DeleteAccountPage() {
  const { user, loading, error, loginWithGoogleIdToken, logout, deleteAccount, clearError } = useAuth();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const googleBtnRef = useRef<HTMLDivElement>(null);
  const gsiInitializedRef = useRef(false);

  const googleClientId =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    '137257860022-fc99sltg4vgbg9i0l3lsugb22ltcv3hn.apps.googleusercontent.com';

  // Initialize Google Identity Services
  useEffect(() => {
    if (user || !googleClientId || gsiInitializedRef.current) return;

    const initGoogle = () => {
      const winGoogle = (window as unknown as CustomWindow).google;
      if (winGoogle?.accounts?.id && googleBtnRef.current) {
        try {
          if (!gsiInitializedRef.current) {
            winGoogle.accounts.id.initialize({
              client_id: googleClientId,
              callback: async (response: { credential?: string }) => {
                if (response.credential) {
                  setLocalError(null);
                  clearError();
                  try {
                    await loginWithGoogleIdToken(response.credential);
                  } catch (err: unknown) {
                    const msg = err instanceof Error ? err.message : 'Failed to authenticate with Google';
                    setLocalError(msg);
                  }
                }
              },
            });
            gsiInitializedRef.current = true;
          }

          googleBtnRef.current.innerHTML = '';
          winGoogle.accounts.id.renderButton(googleBtnRef.current, {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            shape: 'rectangular',
            width: 300,
            logo_alignment: 'left',
          });
        } catch (e: unknown) {
          console.error('Error rendering Google Sign-In button:', e);
        }
      }
    };

    const winGoogle = (window as unknown as CustomWindow).google;
    if (winGoogle?.accounts?.id) {
      initGoogle();
    } else {
      const interval = setInterval(() => {
        const checkGoogle = (window as unknown as CustomWindow).google;
        if (checkGoogle?.accounts?.id) {
          initGoogle();
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [user, googleClientId, loginWithGoogleIdToken, clearError]);

  const handleDelete = async () => {
    if (!user) return;

    const confirmDelete = window.confirm(
      "Are you absolutely certain you want to delete your Islam24 account? This will immediately and permanently erase all cloud-synced bookmarks, tasbih counts, and preferences. This action cannot be undone."
    );
    if (!confirmDelete) return;

    setIsDeleting(true);
    setLocalError(null);
    clearError();

    try {
      await deleteAccount();
      setDeleteSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred while deleting your account';
      setLocalError(msg);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleLogout = async () => {
    setLocalError(null);
    clearError();
    gsiInitializedRef.current = false;
    await logout();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayError = localError || error;

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Active Member';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="layout-wrapper">
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.container}`}>
          {/* Page Header */}
          <div className={styles.header}>
            <span className="section-badge section-badge-gold">Data Privacy &amp; Ownership</span>
            <h1 className={styles.title}>
              Manage Account &amp; <span className="highlight">Data Deletion</span>
            </h1>
            <p className={styles.subtitle}>
              At Islam24, you maintain absolute ownership over your spiritual data. Authenticate below to manage your synchronized profile or permanently erase your account and all stored records.
            </p>
          </div>

          {/* Success or Error Notice */}
          {deleteSuccess && (
            <div className={styles.successMessage}>
              <h3 style={{ fontSize: '1.15rem', margin: '0 0 6px 0' }}>✓ Account Permanently Deleted</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Your account, profile record, and all cloud-synchronized bookmarks and tasbih records have been permanently purged from Islam24 systems in accordance with Google Play Data Safety policies.
              </p>
            </div>
          )}

          {displayError && (
            <div className={styles.errorMessage}>
              {displayError}
            </div>
          )}

          {/* Two-Column Portal Grid */}
          <div className={styles.portalGrid}>
            {/* Left Column: Interactive Account / Deletion Card */}
            <div className={styles.card}>
              {loading ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
                  Loading account credentials...
                </div>
              ) : !user ? (
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Step 1: Authenticate Ownership
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    To safeguard against unauthorized data loss, please authenticate with the Google account connected to your Islam24 mobile app.
                  </p>

                  <div className={styles.loginSection}>
                    <div className={styles.loginPromptIcon}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Sign In with Google
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '380px', margin: '0 auto 18px auto' }}>
                      Uses Google OAuth 2.0 Identity Services. Once authenticated, your profile details and one-click deletion will be available below.
                    </p>

                    <div className={styles.googleBtnWrapper}>
                      <div ref={googleBtnRef} />
                    </div>
                  </div>

                  <div style={{ marginTop: '28px', padding: '18px 20px', background: '#FAF8F5', borderRadius: 'var(--radius-md)', border: '1px solid var(--emerald-border)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong>Alternative Request Method:</strong> If your browser blocks external Google scripts, you may submit a manual data erasure request by emailing <a href="mailto:support@islam24.app" style={{ color: 'var(--emerald)', fontWeight: 700 }}>support@islam24.app</a> with your registered email address. Manual requests are processed within 24 hours.
                  </div>
                </div>
              ) : (
                /* Authenticated Profile View */
                <div className={styles.profileSection}>
                  <div className={styles.profileCardHeader}>
                    <div className={styles.verifiedBadge}>
                      <span>✓ Authenticated Islam24 Account</span>
                    </div>

                    <div className={styles.avatarRing}>
                      <div className={styles.avatar}>
                        {user.picture && !imgError ? (
                          <img
                            src={user.picture}
                            alt=""
                            referrerPolicy="no-referrer"
                            onError={() => setImgError(true)}
                          />
                        ) : (
                          (user.name || user.email || 'U').charAt(0).toUpperCase()
                        )}
                      </div>
                    </div>

                    <h2 className={styles.userName}>{user.name || 'Islam24 User'}</h2>
                    <p className={styles.userEmail}>{user.email}</p>

                    <div className={styles.metaGrid}>
                      <div className={styles.metaItem}>
                        <div className={styles.metaLabel}>Account Status</div>
                        <div className={styles.metaValue}>
                          <span className={styles.statusIndicator}>
                            <span className={styles.statusDot}></span> Active
                          </span>
                        </div>
                      </div>

                      <div className={styles.metaItem}>
                        <div className={styles.metaLabel}>Member Since</div>
                        <div className={styles.metaValue}>
                          {formatDate(user.createdAt)}
                        </div>
                      </div>

                      <div className={styles.metaItem} style={{ gridColumn: '1 / -1' }}>
                        <div className={styles.metaLabel}>User ID</div>
                        <div className={styles.metaValue}>
                          <span style={{ fontFamily: 'monospace', fontSize: '0.78rem' }}>{user.id}</span>
                          <button
                            onClick={() => copyToClipboard(user.id)}
                            className={styles.copyBtn}
                            title="Copy User ID"
                          >
                            {copied ? 'Copied ✓' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.actionsBar}>
                    <button onClick={handleLogout} className={styles.signOutBtn}>
                      Sign Out
                    </button>
                  </div>

                  {/* Danger Zone: Permanent Account Deletion */}
                  <div className={styles.dangerZoneCard}>
                    <div className={styles.dangerHeader}>
                      <span className={styles.dangerTitle}>Permanent Account Deletion</span>
                      <span className={styles.dangerBadge}>Irreversible</span>
                    </div>
                    <p className={styles.dangerText}>
                      Deleting your account will immediately and permanently erase all associated cloud data from our production database:
                    </p>
                    <ul className={styles.dangerList}>
                      <li>Quran bookmarks, last read Surah, and reading milestones</li>
                      <li>Custom Tasbih counter targets and historical counts</li>
                      <li>Authentication session credentials and user profile</li>
                    </ul>

                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className={styles.deleteBtn}
                    >
                      {isDeleting ? 'Deleting All Account Data...' : 'Permanently Delete My Account & Data'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (Sidebar): Data Breakdown & Deletion Guarantee */}
            <div className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  What Happens Upon Deletion
                </h3>
                <ul className={styles.checklist}>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconRed}>✕</span>
                    <div>
                      <strong>Immediate Cloud Wipe:</strong> Your account record is instantly purged from our servers within seconds.
                    </div>
                  </li>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconRed}>✕</span>
                    <div>
                      <strong>Zero Retention Grace Period:</strong> We do not retain &ldquo;soft-deleted&rdquo; user records or archive backups of deleted accounts.
                    </div>
                  </li>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconRed}>✕</span>
                    <div>
                      <strong>OAuth Tokens Revoked:</strong> Your Google authentication session token is immediately invalidated.
                    </div>
                  </li>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconGreen}>✓</span>
                    <div>
                      <strong>Physical Phone Data:</strong> To clear offline cached Quran recitations on your device, simply uninstall the app or clear App Storage.
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Data We NEVER Collect
                </h3>
                <ul className={styles.checklist}>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconGreen}>✓</span>
                    <div>
                      <strong>GPS Location:</strong> Prayer times and Qibla math are computed 100% on your device hardware. Coordinates are never uploaded.
                    </div>
                  </li>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconGreen}>✓</span>
                    <div>
                      <strong>Search &amp; Audio Telemetry:</strong> We do not track what Surahs you recite or your private Dhikr frequency.
                    </div>
                  </li>
                  <li className={styles.checklistItem}>
                    <span className={styles.checkIconGreen}>✓</span>
                    <div>
                      <strong>Ad Identifiers:</strong> Islam24 contains zero advertising SDKs or third-party marketing trackers.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Google Play Compliance & FAQ Accordion */}
          <div className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions &amp; Data Safety</h2>
            <p className={styles.faqSubtitle}>
              Transparency regarding our compliance with Google Play Store User Data policies and user privacy rights.
            </p>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>How long does account deletion take to complete?</h4>
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
