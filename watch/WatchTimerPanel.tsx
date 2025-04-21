import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WatchTimerPanelProps {
  mainTime: string;
  extraTime: string;
  sinBins: { [player: string]: number };
}

const WatchTimerPanel: React.FC<WatchTimerPanelProps> = ({ mainTime, extraTime, sinBins }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Time</Text>
      <Text style={styles.mainTimer}>{mainTime}</Text>
      <Text style={styles.extraTimer}>+{extraTime}</Text>

      <Text style={styles.subTitle}>Sin Bins</Text>
      {Object.entries(sinBins).map(([player, seconds]) => (
        <Text key={player} style={styles.sinText}>
          {player}: {seconds}s
        </Text>
      ))}
    </View>
  );
};

export default WatchTimerPanel;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FF6600',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainTimer: {
    fontSize: 48,
    color: '#FFF',
    marginTop: 10,
  },
  extraTimer: {
    fontSize: 18,
    color: '#AAA',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 16,
    color: '#FF6600',
    marginTop: 10,
  },
  sinText: {
    color: '#FFF',
    fontSize: 14,
  },
});
