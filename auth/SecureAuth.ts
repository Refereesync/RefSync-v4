// auth/SecureAuth.ts
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

const TOKEN_KEY = 'auth_token';

export async function saveAuthToken() {
  const token = uuidv4();
  await SecureStore.setItemAsync(TOKEN_KEY, token);
  return token;
}

export async function getAuthToken() {
  return await SecureStore.getItemAsync(TOKEN_KEY);
}

export async function removeAuthToken() {
  return await SecureStore.deleteItemAsync(TOKEN_KEY);
}
