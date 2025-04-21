import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface MatchEvent {
  time: string;
  team: 'Home' | 'Away';
  type: string;
  player: string;
}

interface WatchMatchSummaryProps {
  events: MatchEvent[];
}

const WatchMatchSummary: React.FC<WatchMatchSummaryProps> = ({ events }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Match Summary</Text>
      {events.map((event, index) => (
        <View key={index} style={styles.eventItem}>
          <Text style={styles.time}>{event.time}</Text>
          <Text style={styles.text}>
            {event.team} - {event.type} - #{event.player}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default WatchMatchSummary;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 18,
    color: '#FF6600',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  eventItem: {
    marginBottom: 8,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
  },
});
