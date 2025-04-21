import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EventLogItemProps {
  time: string;
  player: string;
  eventType: string;
  team: 'Home' | 'Away';
}

export default function EventLogItem({ time, player, eventType, team }: EventLogItemProps) {
  return (
    <View style={[styles.container, team === 'Home' ? styles.home : styles.away]}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.details}>
        {eventType} - #{player}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2d',
  },
  home: {
    backgroundColor: '#1c1c1e',
  },
  away: {
    backgroundColor: '#262629',
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  details: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
  },
});
