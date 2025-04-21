import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

describe('Firestore Match Data', () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  it('should write and read match data', async () => {
    const matchRef = doc(db, 'matches/testMatch');
    await setDoc(matchRef, { homeTeam: 'Team A', awayTeam: 'Team B' });

    const snapshot = await getDoc(matchRef);
    const data = snapshot.data();

    expect(data?.homeTeam).toBe('Team A');
    expect(data?.awayTeam).toBe('Team B');
  });
});
