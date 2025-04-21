// services/watchSync.ts

import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';

const MATCHES_COLLECTION = 'matches';

/**
 * Subscribe to a match ID for sync from Firebase
 */
export function subscribeToMatch(matchId: string, onUpdate: (data: any) => void) {
  const ref = doc(db, MATCHES_COLLECTION, matchId);
  return onSnapshot(ref, (snapshot) => {
    if (snapshot.exists()) {
      onUpdate(snapshot.data());
    }
  });
}

/**
 * Update match sync fields (used by referee phone or assistant)
 */
export async function updateMatchField(matchId: string, update: any) {
  const ref = doc(db, MATCHES_COLLECTION, matchId);
  await updateDoc(ref, update);
}
