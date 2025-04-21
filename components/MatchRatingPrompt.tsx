import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MatchRatingPromptProps {
  onRate: (rating: 'Easy' | 'Normal' | 'Difficult') => void;
}

export default function MatchRatingPrompt({ onRate }: MatchRatingPromptProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How was the match?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => onRate('Easy')}>
          <Text style={styles.label}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onRate('Normal')}>
          <Text style={styles.label}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onRate('Difficult')}>
          <Text style={styles.label}>Difficult</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  label: {
    color: '#ff9500',
    fontSize: 16,
    fontWeight: '500',
  },
});
