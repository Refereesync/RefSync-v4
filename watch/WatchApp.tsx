import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  ./WatchNavigator from "./watch/WatchNavigatorx";

const WatchApp = () => {
  return (
    <NavigationContainer>
      <WatchNavigator />
    </NavigationContainer>
  );
};

export default WatchApp;
