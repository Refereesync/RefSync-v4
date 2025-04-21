import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WatchEventButtonsProps {
  onGoal: () => void;
  onCard: (type: 'yellow' | 'red') => void;
  onSub: () => void;
  onSinBin: () => void;
  onUndo: () => void;
}

const WatchEventButtons: React.FC<WatchEventButtonsProps> = ({
  onGoal,
  onCard,
  onSub,
  onSinBin,
  onUndo,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Events</Text>

      <TouchableOpacity style={styles.button} onPress={onGoal}>
        <Text style={styles.text}>⚽ Goal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onCard('yellow')}>
        <Text style={styles.text}>🟨 Yellow Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onCard('red')}>
        <Text style={styles.text}>🟥 Red Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onSub}>
        <Text style={styles.text}>🔁 Substitution</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onSinBin}>
        <Text style={styles.text}>🚫 Sin Bin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.undo]} onPress={onUndo}>
        <Text style={styles.text}>↩️ Undo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchEventButtons;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#111',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    color: '#FF6600',
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 15,
  },
  undo: {
    backgroundColor: '#550000',
  },
});
