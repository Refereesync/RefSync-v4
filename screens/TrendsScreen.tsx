import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
import { loadMatchStats } from '../utils/statUtils';
import { MatchStats } from '../types/MatchStats';

const screenWidth = Dimensions.get('window').width;

const TrendsScreen = () => {
  const [stats, setStats] = useState<MatchStats[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const stored = await loadMatchStats(); // assume returns MatchStats[]
      setStats(stored || []);
    };
    fetchStats();
  }, []);

  const formatData = (field: keyof MatchStats) => {
    return stats.map((s, i) => ({ x: i + 1, y: s[field] || 0 }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Referee Trends</Text>

      <Text style={styles.subtitle}>Distance Run</Text>
      <VictoryChart width={screenWidth - 10} theme={VictoryTheme.material}>
        <VictoryLine data={formatData('distance')} />
      </VictoryChart>

      <Text style={styles.subtitle}>Sprints</Text>
      <VictoryChart width={screenWidth - 10} theme={VictoryTheme.material}>
        <VictoryLine data={formatData('sprints')} />
      </VictoryChart>

      <Text style={styles.subtitle}>Cautions</Text>
      <VictoryChart width={screenWidth - 10} theme={VictoryTheme.material}>
        <VictoryLine data={stats.map((s, i) => ({ x: i + 1, y: s.cautions?.length || 0 }))} />
      </VictoryChart>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { marginTop: 20, fontSize: 18, fontWeight: '600' },
});

export default TrendsScreen;
