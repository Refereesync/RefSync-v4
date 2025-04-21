// firebase/logEvents.ts

import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const logUserEvent = async (
  uid: string,
  type: 'LOGIN' | 'LOGOUT' | 'MATCH_CREATED' | 'MATCH_ENDED',
  details?: Record<string, any>
) => {
  try {
    await addDoc(collection(db, 'userLogs'), {
      uid,
      type,
      timestamp: Timestamp.now(),
      details: details || {}
    });
  } catch (err) {
    console.error('Error logging event:', err);
  }
};
