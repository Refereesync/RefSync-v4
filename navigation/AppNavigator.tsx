// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MatchScreen from '../screens/MatchScreen';
import MatchSetupScreen from '../screens/MatchSetupScreen';
import TossReplayScreen from '../screens/TossReplayScreen';
import ExportScreen from '../screens/ExportScreen';
import NotesScreen from '../screens/NotesScreen';
import TrendsScreen from '../screens/TrendsScreen';

export type RootStackParamList = {
  Home: undefined;
  Match: undefined;
  MatchSetup: undefined;
  TossReplay: undefined;
  Export: undefined;
  Notes: undefined;
  Trends: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Match" component={MatchScreen} />
        <Stack.Screen name="MatchSetup" component={MatchSetupScreen} />
        <Stack.Screen name="TossReplay" component={TossReplayScreen} />
        <Stack.Screen name="Export" component={ExportScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Trends" component={TrendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
