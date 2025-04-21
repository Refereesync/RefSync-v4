import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MatchContext } from '../../context/MatchContext';

const MainMatchView = () => {
  const {
    state: { matchStats, timer, notes, coinToss },
    dispatch
  } = useContext<any>(MatchContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleEvent = (team: 'home' | 'away', playerNumber: number, type: string) => {
    dispatch({ type: 'LOG_EVENT', payload: { team, playerNumber, type } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{timer}’</Text>
      <Text style={styles.score}>
        {matchStats.homeTeam.name} {matchStats.score.home} - {matchStats.score.away}{' '}
        {matchStats.awayTeam.name}
      </Text>

      <ScrollView horizontal style={styles.playersRow}>
        {[...matchStats.homeTeam.players].map((p, i) => (
          <TouchableOpacity
            key={`h-${i}`}
            style={styles.playerButton}
            onPress={() => handleEvent('home', p, 'YELLOW')}
          >
            <Text style={styles.playerText}>{p}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView horizontal style={styles.playersRow}>
        {[...matchStats.awayTeam.players].map((p, i) => (
          <TouchableOpacity
            key={`a-${i}`}
            style={styles.playerButton}
            onPress={() => handleEvent('away', p, 'YELLOW')}
          >
            <Text style={styles.playerText}>{p}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.menuToggle} onPress={() => setMenuOpen(!menuOpen)}>
        <Text style={styles.menuToggleText}>{menuOpen ? 'Close Menu' : '☰ Menu'}</Text>
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.utilityMenu}>
          <TouchableOpacity onPress={() => dispatch({ type: 'PAUSE_TIMER' })}>
            <Text style={styles.menuItem}>⏸ Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({ type: 'RESUME_TIMER' })}>
            <Text style={styles.menuItem}>▶️ Resume</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({ type: 'UNDO_LAST' })}>
            <Text style={styles.menuItem}>↩️ Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({ type: 'NAVIGATE_NOTES' })}>
            <Text style={styles.menuItem}>📝 Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({ type: 'END_MATCH' })}>
            <Text style={styles.menuItem}>🏁 End Match</Text>
          </TouchableOpacity>
        </View>
      )}

      {coinToss && (
        <View style={styles.tossSummary}>
          <Text style={styles.tossText}>
            Toss: {coinToss.team} ({coinToss.choice}), Kickoff: {coinToss.kickoffTeam}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#fff' },
  timer: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  score: { fontSize: 20, textAlign: 'center', marginVertical: 8 },
  playersRow: { flexDirection: 'row', marginVertical: 4 },
  playerButton: {
    padding: 8,
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    marginRight: 6
  },
  playerText: { fontSize: 14 },
  menuToggle: {
    marginVertical: 10,
    alignItems: 'center'
  },
  menuToggleText: { fontSize: 18 },
  utilityMenu: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10
  },
  menuItem: { fontSize: 16, marginVertical: 4 },
  tossSummary: { marginTop: 10, alignItems: 'center' },
  tossText: { fontSize: 14, fontStyle: 'italic' }
});

export default MainMatchView;
