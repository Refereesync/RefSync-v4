import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MatchContext } from '../context/MatchContext';

const TossReplayScreen = () => {
  const { match } = useContext<any>(MatchContext);

  if (!match?.tossResult) {
    return (
      <View style={styles.container}>
        <Text style={(typeof styles === "object" && styles && "message" in styles ? styles.message : "Unknown error")}>No toss result recorded yet.</Text>
      </View>
    );
  }

  const { winningTeam, choice, kickoffTeam } = match.tossResult;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Coin Toss Result</Text>
      <Text style={styles.detail}>Winning Team: {winningTeam}</Text>
      <Text style={styles.detail}>Choice: {choice}</Text>
      <Text style={styles.detail}>Kick-off Team: {kickoffTeam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  detail: { fontSize: 18, marginBottom: 10 },
  message: { fontSize: 18, color: '#888' }
});

export default TossReplayScreen;
