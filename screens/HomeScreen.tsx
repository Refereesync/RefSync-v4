import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RefSync Home</Text>
      <Button title="Compare Matches" onPress={() => navigation.navigate('CompareStats', { stats: [] })} />
      <Button title="View Heatmap" onPress={() => navigation.navigate('HeatmapViewer', { data: { id: '', distance: 0, sprints: 0, cautions: [], heatmap: [[]] } })} />
      <Button title="View Trends" onPress={() => navigation.navigate('Trends')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
});
