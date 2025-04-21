import * as SecureStore from 'expo-secure-store';

const PIN_KEY = 'user_pin';

export const savePin = async (pin: string): Promise<void> => {
  await SecureStore.setItemAsync(PIN_KEY, pin);
};

export const getPin = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(PIN_KEY);
};

export const clearPin = async (): Promise<void> => {
  await SecureStore.deleteItemAsync(PIN_KEY);
};
