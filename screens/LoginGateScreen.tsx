// screens/LoginGateScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { authenticateUser } from '../utils/biometricAuth';
import { getPin } from '../utils/pinStorage';

export default function LoginGateScreen({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState('');
  const [storedPin, setStoredPin] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const result = await authenticateUser();
      if (result) return onSuccess();
      const saved = await getPin();
      setStoredPin(saved);
    })();
  }, []);

  const handlePin = () => {
    if (pin === storedPin) {
      onSuccess();
    } else {
      Alert.alert('Incorrect PIN');
    }
  };

  return (
    <View style={{ padding: 24 }}>
      <Text>Enter PIN</Text>
      <TextInput
        secureTextEntry
        keyboardType="number-pad"
        value={pin}
        onChangeText={setPin}
        style={{ borderBottomWidth: 1, marginBottom: 24 }}
      />
      <Button title="Login" onPress={handlePin} />
    </View>
  );
}
