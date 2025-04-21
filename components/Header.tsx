import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Props = {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function RefHeader({ title, style, textStyle }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6600',
  },
});
