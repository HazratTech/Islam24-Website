import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only if we have the config (to prevent crashing at build time if env is missing)
const app = !getApps().length && firebaseConfig.apiKey ? initializeApp(firebaseConfig) : getApps().length > 0 ? getApp() : undefined;

const auth = app ? getAuth(app) : null;
const googleProvider = app ? new GoogleAuthProvider() : null;

export { app, auth, googleProvider, signInWithPopup, signOut };
