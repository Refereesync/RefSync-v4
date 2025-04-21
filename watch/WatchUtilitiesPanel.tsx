import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WatchUtilitiesPanelProps {
  onEndHalf: () => void;
  onEndMatch: () => void;
  onSync: () => void;
  onNotes: () => void;
}

const WatchUtilitiesPanel: React.FC<WatchUtilitiesPanelProps> = ({
  onEndHalf,
  onEndMatch,
  onSync,
  onNotes,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Utilities</Text>

      <TouchableOpacity style={styles.button} onPress={onEndHalf}>
        <Text style={styles.btnText}>End Half</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onEndMatch}>
        <Text style={styles.btnText}>End Match</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onSync}>
        <Text style={styles.btnText}>Sync Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onNotes}>
        <Text style={styles.btnText}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchUtilitiesPanel;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#000',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: '#FF6600',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#222',
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
