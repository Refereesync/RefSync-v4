// firebase/matchUtils.ts

import { getFirestore, doc, updateDoc, arrayUnion, setDoc, getDoc } from 'firebase/firestore';
import { getApp } from 'firebase/app';

const db = getFirestore(getApp());

/**
 * Logs a match event with timestamp, device (ref/assistant), and user UID if available.
 */
export const logMatchEvent = async (
  matchId: string,
  event: {
    type: string;
    team?: 'home' | 'away';
    playerNumber?: number;
    description?: string;
    source?: 'referee' | 'assistant';
    uid?: string;
  }
) => {
  try {
    const matchRef = doc(db, 'matches', matchId);
    const eventWithMeta = {
      ...event,
      timestamp: new Date().toISOString(),
    };
    await updateDoc(matchRef, {
      events: arrayUnion(eventWithMeta),
    });
  } catch (err) {
    console.error('Error logging event:', err);
  }
};

/**
 * Creates a new match document in Firestore.
 */
export const createMatch = async (
  matchId: string,
  matchData: {
    homeTeam: string;
    awayTeam: string;
    refereeUID: string;
    competition?: string;
    level?: string;
  }
) => {
  try {
    const matchRef = doc(db, 'matches', matchId);
    await setDoc(matchRef, {
      ...matchData,
      events: [],
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Error creating match:', err);
  }
};

/**
 * Retrieves an existing match.
 */
export const fetchMatch = async (matchId: string) => {
  try {
    const matchRef = doc(db, 'matches', matchId);
    const snap = await getDoc(matchRef);
    return snap.exists() ? snap.data() : null;
  } catch (err) {
    console.error('Error fetching match:', err);
    return null;
  }
};
