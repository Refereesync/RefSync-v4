// watch/WatchMain.tsx
import React, { useEffect, useState } from 'react';
import { Text, Button, View } from 'react-native';
import { subscribeToMatch, addEventToMatch } from '../firebase/matchUtils';

export default function WatchMain({ matchId }: any) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsub = subscribeToMatch(matchId, (data) => {
      setEvents(data.events || []);
    });
    return () => unsub();
  }, []);

  const handleCard = () => {
    addEventToMatch(matchId, {
      type: 'yellow_card',
      player: 7,
      timestamp: Date.now(),
    });
  };

  return (
    <View style={{ padding: 10 }}>
      <Text>Events: {events.length}</Text>
      <Button title="Yellow Card" onPress={handleCard} />
    </View>
  );
}
