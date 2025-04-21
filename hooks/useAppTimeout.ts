// hooks/useAppTimeout.ts
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { clearBiometricToken } from '../auth/biometricManager';

export function useAppTimeout(logout: () => void) {
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'background') {
        clearBiometricToken();
        logout();
      }
    });
    return () => sub.remove();
  }, []);
}
