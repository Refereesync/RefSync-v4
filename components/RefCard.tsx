import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Props = {
  label: string;
  value: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function RefCard({ label, value, style, textStyle }: Props) {
  return (
    <View style={[styles.card, style]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <Text style={[styles.value, textStyle]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

// --- RefHeader.tsx ---

export function RefHeader({ title, style, textStyle }: {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}) {
  return (
    <View style={[headerStyles.container, style]}>
      <Text style={[headerStyles.text, textStyle]}>{title}</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
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
