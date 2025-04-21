import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  ./MainTimer from "./watch/MainTimerx";
import TeamActions from './TeamActions';
import  ./WatchUtilities from "./watch/WatchUtilitiesx";
import  ./SinBinTracker from "./watch/SinBinTrackerx";

const Tab = createMaterialTopTabNavigator();

export default function WatchSwipeNav() {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarStyle: { display: 'none' },
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="HomeTeam" children={() => <TeamActions team="Home" />} />
        <Tab.Screen name="Main" component={MainTimer} />
        <Tab.Screen name="AwayTeam" children={() => <TeamActions team="Away" />} />
        <Tab.Screen name="Utilities" component={WatchUtilitiesScreen} />
        <Tab.Screen name="SinBin" component={SinBinTracker} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const WatchUtilitiesScreen = () => (
  <WatchUtilities
    onEndHalf={() => console.log('Half Ended')}
    onNotes={() => console.log('Notes')}
    onSync={() => console.log('Sync')}
  />
);
