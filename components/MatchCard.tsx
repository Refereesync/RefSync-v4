import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface MatchCardProps {
  matchId: string;
  date: string;
  teams: string;
  onPress: () => void;
}

const MatchCard = ({ matchId, date, teams, onPress }: MatchCardProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.teams}>{teams}</Text>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.id}>Match ID: {matchId}</Text>
  </TouchableOpacity>
);

export default MatchCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  teams: {
    fontSize: 18,
    color: '#FFA500',
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
  id: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});
