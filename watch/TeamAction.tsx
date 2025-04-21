import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TeamActionsProps {
  team: 'Home' | 'Away';
  onAction: (type: string) => void;
}

const actions = ['Goal', 'Yellow', 'Red', 'SinBin', 'Sub'];

const TeamActions: React.FC<TeamActionsProps> = ({ team, onAction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{team} Team</Text>
      <View style={styles.actions}>
        {actions.map((label) => (
          <TouchableOpacity
            key={label}
            style={styles.button}
            onPress={() => onAction(label)}
          >
            <Text style={styles.text}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TeamActions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 22,
    color: '#FF6600',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: '40%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
