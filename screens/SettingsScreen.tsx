// Path: screens/SettingsScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRole } from '../context/RoleContext';
import { logout } from '../utils/auth';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const role = useRole();

  const handleLogout = async () => {
    await logout();
    Alert.alert('Logged out');
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <Text style={styles.label}>Your Role: {role}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExportScreen')}
      >
        <Text style={styles.buttonText}>📤 Export Match Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FingerprintLogin')}
      >
        <Text style={styles.buttonText}>🔐 Change PIN / Biometric</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 24 },
  label: { fontSize: 16, marginBottom: 20 },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16
  },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#ccc',
    padding: 14,
    borderRadius: 8
  },
  logoutText: { textAlign: 'center', fontSize: 16, color: '#333' }
});

export default SettingsScreen;
