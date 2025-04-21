// ✅ screens/MatchEndScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLiveMatchEvents } from '../hooks/useLiveMatchEvents';
import { exportMatchPDF } from '../utils/pdfExport';
import  ../components/RateMatchPrompt from "./components/RateMatchPromptx";

export default function MatchEndScreen() {
  const { params } = useRoute();
  const matchId = params?.matchId;
  const events = useLiveMatchEvents(matchId);
  const [rating, setRating] = useState<string | null>(null);

  const matchInfo = {
    teams: { home: 'Home FC', away: 'Away United' },
    rating,
  };

  const handleExport = async () => {
    await exportMatchPDF(events, matchInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Match Complete</Text>

      {rating ? (
        <Text style={styles.rating}>Rated: {rating}</Text>
      ) : (
        <RateMatchPrompt onRate={setRating} />
      )}

      <Button title="📄 Export Full Match PDF" onPress={handleExport} disabled={!rating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  header: { fontSize: 22, marginBottom: 20 },
  rating: { fontSize: 16, marginBottom: 20 },
});
