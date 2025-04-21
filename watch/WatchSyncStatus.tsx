import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WatchSyncStatusProps {
  connected: boolean;
  lastSync: string;
}

const WatchSyncStatus: React.FC<WatchSyncStatusProps> = ({ connected, lastSync }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sync Status</Text>
      <Text style={[styles.status, { color: connected ? 'lime' : 'red' }]}>
        {connected ? 'Connected' : 'Disconnected'}
      </Text>
      <Text style={styles.syncTime}>Last Sync: {lastSync}</Text>
    </View>
  );
};

export default WatchSyncStatus;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
  },
  label: {
    color: '#FF6600',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    fontSize: 20,
    marginVertical: 6,
  },
  syncTime: {
    color: '#AAA',
    fontSize: 12,
  },
});
