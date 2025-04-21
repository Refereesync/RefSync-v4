import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WatchTimerProps {
  matchTime: string;
  extraTime?: string;
  isPaused: boolean;
}

const WatchTimer: React.FC<WatchTimerProps> = ({ matchTime, extraTime, isPaused }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Match Timer</Text>
      <Text style={[styles.timer, isPaused && styles.paused]}>{matchTime}</Text>
      {extraTime && <Text style={styles.extra}>+{extraTime}</Text>}
    </View>
  );
};

export default WatchTimer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#000',
  },
  label: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 6,
  },
  timer: {
    fontSize: 40,
    color: '#FF6600',
    fontWeight: 'bold',
  },
  paused: {
    color: '#666',
  },
  extra: {
    fontSize: 16,
    color: '#FFD700',
    marginTop: 4,
  },
});
