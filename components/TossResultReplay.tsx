import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TossResultReplayProps = {
  tossResult: {
    winningTeam: string;
    choice: string;
    kickoffTeam: string;
  };
};

const TossResultReplay: React.FC<TossResultReplayProps> = ({ tossResult }) => {
  if (!tossResult) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Toss Result</Text>
      <Text style={styles.line}>Coin Toss Won By: {tossResult.winningTeam}</Text>
      <Text style={styles.line}>Decision: {tossResult.choice}</Text>
      <Text style={styles.line}>Kicking Off: {tossResult.kickoffTeam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 10
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 6
  },
  line: {
    fontSize: 14,
    color: '#eee',
    marginBottom: 2
  }
});

export default TossResultReplay;
