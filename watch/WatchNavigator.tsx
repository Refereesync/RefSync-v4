// watch/WatchNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ./MainWatchScreen from "./watch/MainWatchScreenx";
import  ./SinBinTracker from "./watch/SinBinTrackerx";
import  ./WatchMatchSummary from "./watch/WatchMatchSummaryx";
import  ./AssistantPanel from "./watch/AssistantPanelx";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const WatchNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainWatch"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'MainWatch':
              iconName = 'timer-outline';
              break;
            case 'SinBinTracker':
              iconName = 'alert-circle-outline';
              break;
            case 'MatchSummary':
              iconName = 'document-text-outline';
              break;
            case 'AssistantPanel':
              iconName = 'people-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="MainWatch" component={MainWatchScreen} />
      <Tab.Screen name="SinBinTracker" component={SinBinTracker} />
      <Tab.Screen name="MatchSummary" component={WatchMatchSummary} />
      <Tab.Screen name="AssistantPanel" component={AssistantPanel} />
    </Tab.Navigator>
  );
};

export default WatchNavigator;
