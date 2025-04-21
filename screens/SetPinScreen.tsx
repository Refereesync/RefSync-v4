// screens/SetPinScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { savePin } from '../utils/pinStorage';

export default function SetPinScreen({ onPinSet }: { onPinSet: () => void }) {
  const [pin, setPin] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSave = async () => {
    if (pin.length !== 4 || pin !== confirm) {
      Alert.alert('Error', 'PINs must match and be 4 digits.');
      return;
    }
    await savePin(pin);
    onPinSet();
  };

  return (
    <View style={{ padding: 24 }}>
      <Text>Enter new 4-digit PIN</Text>
      <TextInput
        keyboardType="number-pad"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />
      <Text>Confirm PIN</Text>
      <TextInput
        keyboardType="number-pad"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
        style={{ borderBottomWidth: 1, marginBottom: 24 }}
      />
      <Button title="Set PIN" onPress={handleSave} />
    </View>
  );
}
