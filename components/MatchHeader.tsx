import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MatchHeaderProps {
  matchTitle: string;
  avatarUrl?: string;
}

const MatchHeader = ({ matchTitle, avatarUrl }: MatchHeaderProps) => {
  return (
    <View style={styles.container}>
      {avatarUrl && <Image source={{ uri: avatarUrl }} style={styles.avatar} />}
      <Text style={styles.title}>{matchTitle}</Text>
    </View>
  );
};

export default MatchHeader;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
