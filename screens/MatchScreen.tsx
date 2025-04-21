import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createSanction, Sanction } from '../utils/sanctionUtils';

const MatchScreen = () => {
  const [sanctions, setSanctions] = useState<Sanction[]>([]);
  const [timer, setTimer] = useState<number>(0);
  const navigation = useNavigation();

  const handleSanction = (
    player: number,
    team: 'home' | 'away',
    type: 'YELLOW' | 'SIN_BIN'
  ) => {
    const sanction = createSanction(player, team, type, type === 'SIN_BIN' ? 10 : undefined);
    setSanctions((prev) => [...prev, sanction]);
  };

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => t + 1), 10000); // update every 10s
    return () => clearInterval(interval);
  }, []);

  const renderActiveSinBins = () => {
    const now = new Date();
    const active = sanctions.filter((s) => {
      return s.type === 'SIN_BIN' && new Date(s.sinBinEndsAt!) > now;
    });

    return active.map((s, i) => {
      const minsLeft =
        Math.ceil((new Date(s.sinBinEndsAt!).getTime() - now.getTime()) / 60000);
      return (
        <Text key={i} style={styles.sinBinText}>
          #{s.playerNumber} ({s.team}) - Sin Bin ⏱ {minsLeft} min left
        </Text>
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Match Screen</Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Home Team</Text>
        {[1, 2, 3, 4, 5].map((player) => (
          <View key={player} style={styles.buttonRow}>
            <Text style={styles.player}>#{player}</Text>
            <TouchableOpacity
              style={styles.yellowBtn}
              onPress={() => handleSanction(player, 'home', 'YELLOW')}
            >
              <Text>🟨</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sinBinBtn}
              onPress={() => handleSanction(player, 'home', 'SIN_BIN')}
            >
              <Text>⏱</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Away Team</Text>
        {[6, 7, 8, 9, 10].map((player) => (
          <View key={player} style={styles.buttonRow}>
            <Text style={styles.player}>#{player}</Text>
            <TouchableOpacity
              style={styles.yellowBtn}
              onPress={() => handleSanction(player, 'away', 'YELLOW')}
            >
              <Text>🟨</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sinBinBtn}
              onPress={() => handleSanction(player, 'away', 'SIN_BIN')}
            >
              <Text>⏱</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.title}>Active Sin Bins</Text>
      {renderActiveSinBins()}

      <View style={styles.utilityMenu}>
        <Text style={styles.utilityTitle}>Match Tools</Text>

        <TouchableOpacity
          style={styles.utilityButton}
          onPress={() => navigation.navigate('NotesScreen')}
        >
          <Text>📝 Open Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.utilityButton}
          onPress={() => console.log('TODO: Export notes')}
        >
          <Text>📤 Export Notes (soon)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.utilityButton}
          onPress={() => navigation.navigate('EndGamePrompt')}
        >
          <Text>⛔ End Match</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  subTitle: { fontSize: 16, fontWeight: '600', marginVertical: 8 },
  section: { marginVertical: 10 },
  buttonRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  player: { width: 40, fontSize: 16 },
  yellowBtn: { backgroundColor: '#ffff66', padding: 6, marginRight: 8 },
  sinBinBtn: { backgroundColor: '#66ccff', padding: 6 },
  sinBinText: { marginVertical: 4, fontSize: 14, color: '#555' },
  utilityMenu: {
    marginTop: 30,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  utilityTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12
  },
  utilityButton: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 6,
    marginVertical: 6,
    alignItems: 'center'
  }
});

export default MatchScreen;
