import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UtilitiesPanel = () => {
  const handleHalfTime = () => {
    console.log('Half-time started');
  };

  const handleFullTime = () => {
    console.log('Match ended');
  };

  const handleNote = () => {
    console.log('Open voice/quick notes');
  };

  const handleSync = () => {
    console.log('Sync status triggered');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Utilities</Text>

      <TouchableOpacity style={styles.button} onPress={handleHalfTime}>
        <Text style={styles.buttonText}>⏱ Start Half-Time</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFullTime}>
        <Text style={styles.buttonText}>🏁 End Match</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNote}>
        <Text style={styles.buttonText}>🗣 Match Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSync}>
        <Text style={styles.buttonText}>🔁 Sync Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UtilitiesPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    color: '#FF6600',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 14,
    borderRadius: 8,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
