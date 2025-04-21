// screens/EndGamePrompt.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface EndGamePromptProps {
  matchData: {
    homeTeam: string;
    awayTeam: string;
    coinTossResult?: 'heads' | 'tails';
    kickoffWinner?: 'home' | 'away';
  };
  onClose: () => void;
}

const EndGamePrompt: React.FC<EndGamePromptProps> = ({ matchData, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Summary</Text>
      <Text style={styles.label}>Teams: {matchData.homeTeam} vs {matchData.awayTeam}</Text>
      <Text style={styles.label}>
        Coin Toss: {matchData.coinTossResult?.toUpperCase() || 'N/A'} — Winner: {matchData.kickoffWinner === 'home' ? matchData.homeTeam : matchData.awayTeam}
      </Text>
      <Text style={styles.label}>Was this match challenging?</Text>
      <View style={styles.row}>
        <Button title="Easy" onPress={onClose} />
        <Button title="Average" onPress={onClose} />
        <Button title="Challenging" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }
});

export default EndGamePrompt;
