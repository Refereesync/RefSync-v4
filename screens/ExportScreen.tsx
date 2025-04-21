import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MatchContext } from '../context/MatchContext';
import { exportMatchAsCSV, exportMatchAsJSON } from '../utils/exportUtils';
import mockMatchData from '../data/sampleMatch.json'; // Replace this with actual match data source

const ExportScreen = () => {
  const { coinTossResult } = useContext<any>(MatchContext);

  const handleJSON = () => exportMatchAsJSON(mockMatchData, coinTossResult || 'Not Recorded');
  const handleCSV = () => exportMatchAsCSV(mockMatchData, coinTossResult || 'Not Recorded');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Export Match</Text>
      <Button title="Export as JSON" onPress={handleJSON} />
      <Button title="Export as CSV" onPress={handleCSV} />
      <Text style={styles.note}>Toss Result: {coinTossResult || 'Not Recorded'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  note: { marginTop: 20, color: '#555', fontStyle: 'italic' }
});

export default ExportScreen;
