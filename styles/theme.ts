// src/styles/themes.ts

export const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#FF6600',
  secondary: '#f2f2f2',
  border: '#ddd',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
};

export const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  primary: '#FF6600',
  secondary: '#1e1e1e',
  border: '#333',
  success: '#81C784',
  warning: '#FFD54F',
  error: '#E57373',
};

export type Theme = typeof lightTheme;
