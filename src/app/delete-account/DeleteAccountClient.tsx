'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
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

export default function DeleteAccountClient() {
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
            text: 'continue_with',
            logo_alignment: 'left',
          });
        } catch (e) {
          console.error('Error rendering Google button:', e);
        }
      }
    };

    const winGoogle = (window as unknown as CustomWindow).google;
    if (winGoogle?.accounts?.id) {
      initGoogle();
    } else {
      const timer = setInterval(() => {
        const checkGoogle = (window as unknown as CustomWindow).google;
        if (checkGoogle?.accounts?.id) {
          clearInterval(timer);
          initGoogle();
        }
      }, 200);
      return () => clearInterval(timer);
    }
  }, [user, googleClientId, loginWithGoogleIdToken, clearError]);

  const handleDelete = async () => {
    if (!confirm('Are you absolutely sure you want to permanently delete your account and all associated data? This action cannot be undone.')) {
      return;
    }
    setLocalError(null);
    clearError();
    setIsDeleting(true);
    try {
      await deleteAccount();
      setDeleteSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to delete account. Please try again.';
      setLocalError(msg);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@islam24.app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
      <div className={styles.card}>
        {/* Step Indicator */}
        <div className={styles.stepBadge}>
          <span className={styles.stepNum}>{user ? 'Step 2 of 2' : 'Step 1 of 2'}</span>
          <span className={styles.stepText}>
            {user ? 'Verify & Confirm Permanent Deletion' : 'Sign in with your Google Account'}
          </span>
        </div>

        {/* Global Error Banner */}
        {(localError || error) && (
          <div className={styles.errorAlert} role="alert">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>{localError || error}</span>
          </div>
        )}

        {/* Success State */}
        {deleteSuccess ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h2 className={styles.successTitle}>Account Successfully Deleted</h2>
            <p className={styles.successDesc}>
              Your Islam24 account and all associated cloud-synced data have been permanently removed from our production databases.
            </p>
            <div className={styles.deletedDetails}>
              <div className={styles.deletedItem}>
                <span className={styles.deletedCheck}>✓</span>
                <span>User identity record permanently deleted</span>
              </div>
              <div className={styles.deletedItem}>
                <span className={styles.deletedCheck}>✓</span>
                <span>All synchronized bookmarks purged</span>
              </div>
              <div className={styles.deletedItem}>
                <span className={styles.deletedCheck}>✓</span>
                <span>Authentication tokens and sessions invalidated</span>
              </div>
              <div className={styles.deletedItem}>
                <span className={styles.deletedCheck}>✓</span>
                <span>Zero archived backups retained</span>
              </div>
            </div>
            <p className={styles.successNote}>
              You can still use Islam24 completely anonymously on your Android device at any time.
            </p>
          </div>
        ) : loading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Authenticating with Google Identity Services...</p>
          </div>
        ) : user ? (
          /* Logged In: Show Account Details and Deletion Controls */
          <div className={styles.authenticatedState}>
            <div className={styles.userProfile}>
              <div className={styles.avatarWrap}>
                {user.picture && !imgError ? (
                  <img
                    src={user.picture}
                    alt={user.name || 'User'}
                    className={styles.avatar}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className={styles.avatarFallback}>
                    {(user.name || user.email || 'U')[0].toUpperCase()}
                  </div>
                )}
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name || 'Google User'}</div>
                <div className={styles.userEmail}>{user.email}</div>
                <div className={styles.badgeVerified}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Google Account Verified</span>
                </div>
              </div>
              <button onClick={logout} className={styles.btnSwitchAccount} title="Sign out and use a different account">
                Switch Account
              </button>
            </div>

            <div className={styles.warningBox}>
              <div className={styles.warningHeader}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <strong>Permanent &amp; Irreversible Action</strong>
              </div>
              <p>
                By proceeding, your account and all data associated with <strong>{user.email}</strong> will be immediately deleted:
              </p>
              <ul className={styles.warningList}>
                <li>Your user profile record in our database will be permanently deleted.</li>
                <li>All cloud-synchronized bookmarks (Ayahs, Surahs, Duas) will be permanently deleted.</li>
                <li>Your authentication tokens will be immediately invalidated.</li>
                <li><strong>This action cannot be undone.</strong> You will not be able to recover your synchronized bookmarks.</li>
              </ul>
            </div>

            <div className={styles.actionButtons}>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={styles.btnDelete}
              >
                {isDeleting ? (
                  <>
                    <span className={styles.btnSpinner}></span>
                    <span>Deleting Account in Real-Time...</span>
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    <span>Permanently Delete My Account &amp; All Data</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Not Logged In: Show Google Sign-In */
          <div className={styles.loginState}>
            <p className={styles.loginInstruction}>
              Sign in with the Google Account you used in the Islam24 app to verify ownership and process immediate deletion:
            </p>
            <div className={styles.googleBtnContainer}>
              <div ref={googleBtnRef} className={styles.googleBtnWrapper}></div>
            </div>
            <p className={styles.loginHint}>
              We use Google Sign-In solely to verify that you are the rightful owner of the account before deletion.
            </p>
          </div>
        )}
      </div>

      {/* Alternative Deletion Method via Email (Google Play Compliance Requirement) */}
      <div className={styles.manualSection}>
        <h3 className={styles.manualTitle}>Alternative Deletion Method: Email Request</h3>
        <p className={styles.manualDesc}>
          If you are unable to sign in via Google above, you may request manual deletion of your account and data by emailing our support team directly. We process manual deletion requests within <strong>48 hours</strong>.
        </p>
        <div className={styles.emailBox}>
          <div className={styles.emailText}>
            <span className={styles.emailLabel}>Support Email:</span>
            <code className={styles.emailAddress}>support@islam24.app</code>
          </div>
          <div className={styles.emailActions}>
            <button onClick={handleCopyEmail} className={styles.btnCopy}>
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
            <a
              href="mailto:support@islam24.app?subject=Account%20and%20Data%20Deletion%20Request%20-%20Islam24&body=Hello%20Islam24%20Team%2C%0A%0AI%20am%20requesting%20the%20permanent%20deletion%20of%20my%20Islam24%20account%20and%20all%20associated%20data.%0A%0AMy%20registered%20email%3A%20%5BYour%20Google%20Account%20Email%5D%0A%0AThank%20you."
              className={styles.btnEmail}
            >
              Send Deletion Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
