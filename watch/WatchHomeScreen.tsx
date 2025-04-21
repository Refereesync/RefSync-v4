import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';

const WatchHomeScreen = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const toggleTimer = () => {
    setRunning(!running);
    Vibration.vibrate(100);
  };

  const incrementScore = (team: 'home' | 'away') => {
    team === 'home'
      ? setHomeScore(homeScore + 1)
      : setAwayScore(awayScore + 1);
    Vibration.vibrate(50);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{time}s</Text>
      <Text style={styles.score}>{homeScore} - {awayScore}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => incrementScore('home')}>
          <Text style={styles.buttonText}>+ Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={toggleTimer}>
          <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => incrementScore('away')}>
          <Text style={styles.buttonText}>+ Away</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WatchHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 36,
    color: '#FF6600',
    marginBottom: 10,
  },
  score: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
