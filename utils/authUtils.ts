import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

export async function generateToken() {
  const token = uuidv4();
  await SecureStore.setItemAsync('userToken', token);
  return token;
}

export async function clearToken() {
  await SecureStore.deleteItemAsync('userToken');
}

export async function getToken() {
  return await SecureStore.getItemAsync('userToken');
}
