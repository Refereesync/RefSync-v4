// ✅ hooks/useLiveMatchEvents.ts
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export function useLiveMatchEvents(matchId: string) {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (!matchId) return;

    const q = query(
      collection(db, 'matches', matchId, 'events'),
      orderBy('timestamp')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      setEvents(items);
    });

    return unsubscribe;
  }, [matchId]);

  return events;
}
