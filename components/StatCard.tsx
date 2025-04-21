import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

const StatsCard = ({ title, value, icon, color = '#333' }: StatsCardProps) => {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={styles.header}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    borderWidth: 2,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
