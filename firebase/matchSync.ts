// firebase/matchSync.ts
import firestore from '@react-native-firebase/firestore';

export const subscribeToMatchUpdates = (matchId: string, callback: (data: any) => void) => {
  return firestore()
    .collection('matches')
    .doc(matchId)
    .onSnapshot((doc) => {
      if (doc.exists) {
        callback(doc.data());
      }
    });
};
