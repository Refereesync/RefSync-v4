// firebase/syncService.ts
import firestore from '@react-native-firebase/firestore';

export const syncEventToFirestore = async (matchId: string, event: any) => {
  try {
    await firestore()
      .collection('matches')
      .doc(matchId)
      .collection('events')
      .add(event);
  } catch (error) {
    console.error('Error syncing event:', error);
    throw error;
  }
};
