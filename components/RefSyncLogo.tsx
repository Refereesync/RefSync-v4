import React from 'react';
import { Image, StyleSheet } from 'react-native';

const RefSyncLogo = ({ sport = "main", size = 200 }) => {
  const source = sport === 'main'
    ? require('../assets/refsync_logo_main.png')
    : require(`../assets/refsync_logo_${sport.toLowerCase()}.png`);

  return <Image source={source} style={[styles.logo, { width: size, height: size }]} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginVertical: 20
  }
});

export default RefSyncLogo;
