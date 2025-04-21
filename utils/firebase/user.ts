// utils/firebase/user.ts
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export async function createUserProfile(uid: string, email: string | null) {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      email,
      createdAt: new Date().toISOString(),
      role: 'referee',
      language: 'en',
    });
  }
}
