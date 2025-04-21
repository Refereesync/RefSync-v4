// firebase/firestoreSync.ts
import firestore from '@react-native-firebase/firestore';

export const syncMatchData = async (matchId: string, data: any) => {
  try {
    await firestore().collection('matches').doc(matchId).set(data);
  } catch (error) {
    console.error('Error syncing match data:', error);
    throw error;
  }
};

export const getMatchData = async (matchId: string) => {
  try {
    const doc = await firestore().collection('matches').doc(matchId).get();
    return doc.exists ? doc.data() : null;
  } catch (error) {
    console.error('Error fetching match data:', error);
    throw error;
  }
};
