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

  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  // Initialize Google Identity Services safely once
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
            width: 320,
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
      "Are you absolutely sure you want to delete your account? This action is permanent and will erase all your saved data immediately from Islam24 servers."
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
    if (!dateString) return 'N/A';
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
          <div className={styles.card}>
            <div className={styles.header}>
              <span className="section-badge">User Account</span>
              <h1 className={styles.title}>
                {user ? 'My Profile' : 'Account Sign In'}
              </h1>
              <p className={styles.subtitle}>
                {user
                  ? 'Manage your Islam24 account details, connected preferences, and account privacy options.'
                  : 'Sign in to access your Islam24 account profile or manage account deletion.'}
              </p>
            </div>

            {deleteSuccess && (
              <div className={styles.successMessage}>
                <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px 0' }}>Account Successfully Deleted</h3>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  Your account and all associated data have been permanently removed from Islam24.
                </p>
              </div>
            )}

            {displayError && (
              <div className={styles.errorMessage}>
                {displayError}
              </div>
            )}

            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                Loading profile...
              </div>
            ) : !user ? (
              <div className={styles.loginSection}>
                <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Please sign in with the Google account associated with your Islam24 mobile app.
                </p>

                {googleClientId ? (
                  <div className={styles.googleBtnWrapper}>
                    <div ref={googleBtnRef} />
                  </div>
                ) : (
                  <div className={styles.errorMessage} style={{ textAlign: 'left', fontSize: '0.85rem' }}>
                    <strong>Configuration Warning:</strong> <code>NEXT_PUBLIC_GOOGLE_CLIENT_ID</code> is missing in environment variables. Please add your Google OAuth Web Client ID to <code>.env</code>.
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.profileSection}>
                {/* Profile Header Card */}
                <div className={styles.profileCardHeader}>
                  <div className={styles.verifiedBadge}>
                    <span>✓ Verified Islam24 User</span>
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
                        <span style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{user.id}</span>
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

                {/* Features & Sync Overview */}
                <div className={styles.featuresGrid}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>☁️</div>
                    <div className={styles.featureTitle}>Cloud Sync Active</div>
                    <div className={styles.featureDesc}>
                      Your Quran bookmarks, Azkar history, and settings sync automatically across your mobile devices.
                    </div>
                  </div>

                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🛡️</div>
                    <div className={styles.featureTitle}>100% Ad-Free</div>
                    <div className={styles.featureDesc}>
                      Enjoy a distraction-free Islamic experience without ads or commercial tracking.
                    </div>
                  </div>
                </div>

                {/* Account Actions & Logout */}
                <div className={styles.actionsBar}>
                  <button onClick={handleLogout} className={styles.signOutBtn} disabled={isDeleting}>
                    Sign Out
                  </button>
                </div>

                {/* Danger Zone: Account Deletion */}
                <div className={styles.dangerZoneCard}>
                  <div className={styles.dangerHeader}>
                    <span className={styles.dangerTitle}>Permanently Delete Account</span>
                    <span className={styles.dangerBadge}>Danger Zone</span>
                  </div>

                  <p className={styles.dangerText}>
                    Requesting deletion will permanently purge your Islam24 account and remove all stored data from our backend servers immediately.
                  </p>

                  <ul className={styles.dangerList}>
                    <li>All synced Quran reading progress & bookmarks</li>
                    <li>Saved Azkar & Tasbih counter histories</li>
                    <li>Account profile & OAuth authentication tokens</li>
                  </ul>

                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className={styles.deleteBtn}
                  >
                    {isDeleting ? 'Deleting Account...' : 'Delete My Islam24 Account'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
