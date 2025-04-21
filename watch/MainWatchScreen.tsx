import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainWatchScreen = () => {
  const [time, setTime] = useState('00:00');
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => setIsRunning((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RefSync Watch</Text>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.score}>
        {homeScore} - {awayScore}
      </Text>

      <TouchableOpacity style={styles.timerBtn} onPress={toggleTimer}>
        <Text style={styles.btnText}>{isRunning ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainWatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    color: '#FF6600',
    fontSize: 20,
    marginBottom: 10,
  },
  time: {
    fontSize: 48,
    color: '#FFF',
    marginVertical: 16,
  },
  score: {
    fontSize: 28,
    color: '#DDD',
    marginBottom: 24,
  },
  timerBtn: {
    backgroundColor: '#FF6600',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
