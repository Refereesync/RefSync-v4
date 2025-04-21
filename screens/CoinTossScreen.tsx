import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CoinTossScreen = () => {
  const [result, setResult] = useState<string | null>(null);
  const [tossing, setTossing] = useState(false);

  const tossCoin = () => {
    setTossing(true);
    setResult(null);

    setTimeout(() => {
      const flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(flip);
      setTossing(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coin Toss</Text>
      <TouchableOpacity style={styles.button} onPress={tossCoin} disabled={tossing}>
        <Text style={styles.buttonText}>{tossing ? 'Tossing...' : 'Toss Coin'}</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#FF6F00',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 18 },
  result: { fontSize: 20, marginTop: 20 }
});

export default CoinTossScreen;
