import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MatchContext } from '../../context/MatchContext';
import  ../../components/TossResultReplay from "./components/TossResultReplayx";

const MainMatchView = () => {
  const { matchData, sanctions, handleCard, timer, tossResult } = useContext<any>(MatchContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.timer}>{timer}</Text>
      <Text style={styles.score}>{matchData.homeTeam} {matchData.homeScore} - {matchData.awayScore} {matchData.awayTeam}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Events</Text>
        {sanctions.map((s, i) => (
          <Text key={i} style={styles.event}>
            {s.type} for #{s.playerNumber} ({s.team})
          </Text>
        ))}
      </View>

      {tossResult && <TossResultReplay tossResult={tossResult} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#000', flexGrow: 1 },
  timer: { fontSize: 40, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 8 },
  score: { fontSize: 20, color: '#FFF', textAlign: 'center', marginBottom: 16 },
  section: { marginTop: 12 },
  sectionHeader: { color: '#FFA500', fontSize: 16, marginBottom: 4 },
  event: { color: '#FFF', fontSize: 14, marginBottom: 2 }
});

export default MainMatchView;
