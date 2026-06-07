import * as admin from 'firebase-admin';
import * as fs from 'fs';

if (!admin.apps.length) {
  try {
    let serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

    if (serviceAccountPath) {
      if (fs.existsSync(serviceAccountPath)) {
        serviceAccountJson = fs.readFileSync(serviceAccountPath, 'utf8');
      } else {
        console.warn(`[Firebase Admin] FIREBASE_SERVICE_ACCOUNT_PATH is set to "${serviceAccountPath}" but that file does not exist in the Docker container.`);
      }
    }

    if (!serviceAccountJson) {
      console.warn('[Firebase Admin] Initialization skipped: No service account JSON or Path found.');
    } else {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(serviceAccountJson)),
      });
      console.log('[Firebase Admin] Successfully initialized.');
    }
  } catch (error) {
    console.error('Firebase Admin Initialization Error:', error);
  }
}

export { admin };
