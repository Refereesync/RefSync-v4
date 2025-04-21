import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WatchSyncIndicatorProps {
  isConnected: boolean;
  syncing?: boolean;
}

const WatchSyncIndicator = ({ isConnected, syncing = false }: WatchSyncIndicatorProps) => {
  return (
    <View style={styles.container}>
      {syncing ? (
        <ActivityIndicator size="small" color="#FFA500" />
      ) : (
        <Ionicons
          name={isConnected ? 'watch' : 'watch-outline'}
          size={24}
          color={isConnected ? '#0f0' : '#f00'}
        />
      )}
      <Text style={styles.label}>{isConnected ? 'Watch Connected' : 'Watch Disconnected'}</Text>
    </View>
  );
};

export default WatchSyncIndicator;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 10,
  },
  label: {
    fontSize: 14,
    color: '#ccc',
  },
});
