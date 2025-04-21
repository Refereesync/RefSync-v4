import { db } from './firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export const syncTossResult = async (
  matchId: string,
  tossResult: {
    winningTeam: string;
    choice: string;
    kickoffTeam: string;
  }
) => {
  try {
    const matchRef = doc(db, 'matches', matchId);
    await updateDoc(matchRef, { tossResult });
    console.log('Toss result synced to Firestore.');
  } catch (error) {
    console.error('Error syncing toss result:', error);
  }
};
