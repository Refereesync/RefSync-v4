import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface UtilityActions {
  onEndHalf: () => void;
  onEndMatch: () => void;
  onNote: () => void;
  onResync: () => void;
}

const WatchUtilities: React.FC<UtilityActions> = ({
  onEndHalf,
  onEndMatch,
  onNote,
  onResync,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Utilities</Text>
      <TouchableOpacity style={styles.button} onPress={onEndHalf}>
        <Text style={styles.text}>End Half</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onEndMatch}>
        <Text style={styles.text}>End Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onNote}>
        <Text style={styles.text}>Add Note</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onResync}>
        <Text style={styles.text}>Re-Sync</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchUtilities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 20,
    color: '#FF6600',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});
