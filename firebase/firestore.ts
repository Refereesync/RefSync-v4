// firebase/firestore.ts
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const updateUserProfile = async (uid: string, profile: { name: string; refereeLevel: string }) => {
  await setDoc(doc(db, 'users', uid), profile, { merge: true });
};

export const getUserProfile = async (uid: string) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};
