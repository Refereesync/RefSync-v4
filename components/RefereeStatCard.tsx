import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RefereeStatCardProps {
  name: string;
  matches: number;
  avgRating: number;
}

export default function RefereeStatCard({ name, matches, avgRating }: RefereeStatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.statsRow}>
        <Text style={styles.label}>Matches:</Text>
        <Text style={styles.value}>{matches}</Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.label}>Avg Rating:</Text>
        <Text style={styles.value}>{avgRating.toFixed(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2c2c2e',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    color: '#ccc',
  },
  value: {
    color: '#fff',
    fontWeight: '600',
  },
});
