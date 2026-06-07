import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase/admin';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json({ error: 'Missing ID token' }, { status: 400 });
    }

    if (!admin.apps.length) {
      return NextResponse.json({ error: 'Firebase Admin not initialized. Please contact support.' }, { status: 500 });
    }

    // 1. Verify the ID token using Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    if (!uid) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // 2. Delete user's data from Firestore
    try {
      const db = admin.firestore();

      // Try deleting by UID first
      const docRef = db.collection('user').doc(uid);
      const docSnap = await docRef.get();

      if (docSnap.exists) {
        await docRef.delete();
        console.log(`Deleted user document by UID: ${uid}`);
      } else if (decodedToken.email) {
        // If not found by UID, search by email
        const snapshot = await db.collection('user').where('email', '==', decodedToken.email).get();
        if (!snapshot.empty) {
          const batch = db.batch();
          snapshot.docs.forEach((doc) => {
            batch.delete(doc.ref);
          });
          await batch.commit();
          console.log(`Deleted user document(s) by email: ${decodedToken.email}`);
        } else {
          console.log('No user document found by UID or Email in Firestore.');
        }
      }
    } catch (dbError) {
      console.warn('Could not delete user document or no document existed:', dbError);
    }

    // 3. Delete the user from Firebase Auth
    await admin.auth().deleteUser(uid);

    return NextResponse.json({ success: true, message: 'Account and data permanently deleted.' });
  } catch (error: any) {
    console.error('Error deleting account:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
