// screens/PenaltyScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

type Penalty = {
  player: string;
  team: 'home' | 'away';
  outcome: 'goal' | 'miss' | 'save';
};

const PenaltyScreen = () => {
  const [penalties, setPenalties] = useState<Penalty[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<'home' | 'away'>('home');
  const [currentPlayer, setCurrentPlayer] = useState('');

  const handleOutcome = (outcome: Penalty['outcome']) => {
    if (!currentPlayer) return;
    const newPenalty: Penalty = {
      player: currentPlayer,
      team: selectedTeam,
      outcome
    };
    setPenalties([...penalties, newPenalty]);
    setCurrentPlayer('');
  };

  const countGoals = (team: 'home' | 'away') =>
    penalties.filter((p) => p.team === team && p.outcome === 'goal').length;

  const renderPenaltyLog = () =>
    penalties.map((p, i) => (
      <Text key={i} style={styles.log}>
        {p.team.toUpperCase()} - #{p.player} - {p.outcome.toUpperCase()}
      </Text>
    ));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Penalty Shootout</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.teamBtn, selectedTeam === 'home' && styles.selectedBtn]}
          onPress={() => setSelectedTeam('home')}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.teamBtn, selectedTeam === 'away' && styles.selectedBtn]}
          onPress={() => setSelectedTeam('away')}
        >
          <Text>Away</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Enter Player Number</Text>
      <View style={styles.row}>
        {[...Array(11)].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.playerBtn,
              currentPlayer === (i + 1).toString() && styles.selectedBtn
            ]}
            onPress={() => setCurrentPlayer((i + 1).toString())}
          >
            <Text>{i + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Select Outcome</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.outcomeBtn} onPress={() => handleOutcome('goal')}>
          <Text style={{ color: 'green' }}>✅ Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outcomeBtn} onPress={() => handleOutcome('miss')}>
          <Text style={{ color: 'red' }}>❌ Miss</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outcomeBtn} onPress={() => handleOutcome('save')}>
          <Text style={{ color: 'orange' }}>🧤 Save</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Current Scores</Text>
      <Text>🏠 Home: {countGoals('home')} goals</Text>
      <Text>🛫 Away: {countGoals('away')} goals</Text>

      <Text style={styles.label}>Log</Text>
      {renderPenaltyLog()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16, marginTop: 10 },
  row: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  teamBtn: { backgroundColor: '#ccc', padding: 10, marginRight: 10, borderRadius: 5 },
  selectedBtn: { backgroundColor: '#aaf' },
  playerBtn: {
    backgroundColor: '#eee',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 4
  },
  outcomeBtn: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginRight: 10,
    borderRadius: 6
  },
  log: { marginVertical: 2, fontSize: 14 }
});

export default PenaltyScreen;
