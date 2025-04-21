// ✅ components/RateMatchPrompt.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RateMatchPrompt({ onRate }: { onRate: (level: string) => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How did the match feel?</Text>
      <View style={styles.row}>
        {['Easy', 'Moderate', 'Difficult'].map((level) => (
          <Button key={level} title={level} onPress={() => onRate(level)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  row: { flexDirection: 'row', gap: 8 },
});
