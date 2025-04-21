// screens/AssistantSync.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { subscribeToMatch } from '../firebase/matchUtils';

export default function AssistantSync({ route }: any) {
  const { matchId } = route.params;
  const [match, setMatch] = useState<any>(null);

  useEffect(() => {
    const unsub = subscribeToMatch(matchId, (data) => setMatch(data));
    return () => unsub();
  }, [matchId]);

  return (
    <View style={{ padding: 16 }}>
      <Text>Assistant View</Text>
      <FlatList
        data={match?.events || []}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Text>{item.type} — {item.timestamp}</Text>
        )}
      />
    </View>
  );
}
