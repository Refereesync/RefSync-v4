// Root file: App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { MatchProvider } from './context/MatchContext';
import AuthProvider from './context/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <MatchProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </MatchProvider>
    </AuthProvider>
  );
}
