import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface SinBinEntry {
  player: number;
  remaining: number;
}

const SinBinTracker: React.FC = () => {
  const [entries, setEntries] = useState<SinBinEntry[]>([
    { player: 7, remaining: 600 },
    { player: 12, remaining: 420 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntries((prev) =>
        prev
          .map((entry) => ({
            ...entry,
            remaining: entry.remaining > 0 ? entry.remaining - 1 : 0,
          }))
          .filter((entry) => entry.remaining > 0)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sin Bin</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.player.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}># {item.player}</Text>
            <Text style={styles.text}>{formatTime(item.remaining)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SinBinTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  header: {
    fontSize: 22,
    color: '#FF6600',
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
