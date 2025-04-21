import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { savePin } from '../utils/pinStorage';

type Props = {
  onReset: () => void;
};

const ResetPinScreen: React.FC<Props> = ({ onReset }) => {
  const [newPin, setNewPin] = useState('');

  const handleReset = async () => {
    if (newPin.length >= 4) {
      await savePin(newPin);
      onReset();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter New PIN</Text>
      <TextInput
        secureTextEntry
        keyboardType="numeric"
        style={styles.input}
        value={newPin}
        onChangeText={setNewPin}
      />
      <Button title="Reset PIN" onPress={handleReset} />
    </View>
  );
};

export default ResetPinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
