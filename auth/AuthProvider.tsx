// auth/biometricManager.ts
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'biometric_token';
const EXPIRY_KEY = 'biometric_expiry';
const EXPIRY_MS = 30 * 60 * 1000; // 30 mins

export async function saveBiometricToken(): Promise<void> {
  const token = Math.random().toString(36).slice(2);
  const expiry = (Date.now() + EXPIRY_MS).toString();
  await SecureStore.setItemAsync(TOKEN_KEY, token);
  await SecureStore.setItemAsync(EXPIRY_KEY, expiry);
}

export async function isBiometricTokenValid(): Promise<boolean> {
  const expiry = await SecureStore.getItemAsync(EXPIRY_KEY);
  return expiry ? Date.now() < parseInt(expiry, 10) : false;
}

export async function clearBiometricToken(): Promise<void> {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
  await SecureStore.deleteItemAsync(EXPIRY_KEY);
}

export async function supportsBiometrics(): Promise<boolean> {
  const supported = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  return supported && enrolled;
}
