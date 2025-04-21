import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MatchContext } from '../../context/MatchContext';

const TossSummaryScreen = () => {
  const { coinTossResult } = useContext<any>(MatchContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🪙 Coin Toss</Text>
      <Text style={styles.result}>
        Result: {coinTossResult || 'Not Recorded'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffa500',
    marginBottom: 20
  },
  result: {
    fontSize: 20,
    color: '#fff'
  }
});

export default TossSummaryScreen;
