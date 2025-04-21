// ✅ components/TimelineItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimelineItem({ event }: { event: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{event.time}</Text>
      <Text style={styles.type}>{event.type}</Text>
      <Text style={styles.player}>#{event.player} {event.team}</Text>
      {event.source === 'assistant' && (
        <Text style={styles.assistant}>👥 Assistant Event</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  time: {
    fontWeight: 'bold',
  },
  type: {
    fontSize: 16,
  },
  player: {
    color: '#555',
  },
  assistant: {
    color: '#f90',
    fontStyle: 'italic',
    marginTop: 4,
  },
});
