import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { generateMatchPdf } from '../pdf/generateMatchPdf';
import { useLiveMatchEvents } from '../hooks/useLiveMatchEvents';

const StatsScreen = ({ route }: any) => {
  const { matchId } = route.params;
  const navigation = useNavigation();
  const events = useLiveMatchEvents(matchId);

  const handleExport = () => {
    generateMatchPdf(events, matchId);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Match Statistics</Text>
      {events.map((e, index) => (
        <View key={index} style={styles.eventRow}>
          <Text>{e.type} - Player {e.playerNumber}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.exportBtn} onPress={handleExport}>
        <Text style={styles.exportText}>Export PDF</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  eventRow: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  exportBtn: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  exportText: { color: '#fff', fontSize: 16 },
});

export default StatsScreen;
