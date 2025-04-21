// screens/FingerprintLoginScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, Platform } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { saveBiometricToken, isBiometricTokenValid } from '../auth/biometricManager';

const FingerprintLoginScreen = ({ navigation }: any) => {
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    handleAuth();
  }, []);

  const handleAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to unlock',
      fallbackLabel: 'Use PIN',
      disableDeviceFallback: false,
    });

    if (result.success) {
      await saveBiometricToken();
      navigation.replace('Home');
    } else {
      setFallback(true);
    }
  };

  return (
    <View>
      {fallback ? (
        <>
          <Text>Biometric failed. Please enter your PIN.</Text>
          <Button title="Enter PIN" onPress={() => navigation.navigate('PINLogin')} />
        </>
      ) : (
        <Text>Authenticating...</Text>
      )}
    </View>
  );
};

export default FingerprintLoginScreen;
