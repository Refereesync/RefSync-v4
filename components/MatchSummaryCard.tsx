import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MatchSummaryCardProps {
  title: string;
  data: string;
}

export default function MatchSummaryCard({ title, data }: MatchSummaryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2c2c2e',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 4,
  },
  data: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
