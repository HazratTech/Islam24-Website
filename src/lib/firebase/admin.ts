import * as admin from 'firebase-admin';
import * as fs from 'fs';

if (!admin.apps.length) {
  try {
    let serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

    if (serviceAccountPath && fs.existsSync(serviceAccountPath)) {
      serviceAccountJson = fs.readFileSync(serviceAccountPath, 'utf8');
    }

    if (!serviceAccountJson) {
      console.warn('Firebase Admin is not initialized because neither FIREBASE_SERVICE_ACCOUNT_JSON nor FIREBASE_SERVICE_ACCOUNT_PATH is present.');
    } else {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(serviceAccountJson)),
      });
    }
  } catch (error) {
    console.error('Firebase Admin Initialization Error:', error);
  }
}

export { admin };
