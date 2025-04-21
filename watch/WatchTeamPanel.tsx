import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WatchTeamPanelProps {
  teamName: string;
  onAction: (action: string) => void;
}

const actions = ['Goal', 'Yellow', 'Red', 'Sin Bin', 'Sub'];

const WatchTeamPanel: React.FC<WatchTeamPanelProps> = ({ teamName, onAction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{teamName} Actions</Text>
      {actions.map((action) => (
        <TouchableOpacity key={action} style={styles.btn} onPress={() => onAction(action)}>
          <Text style={styles.btnText}>{action}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WatchTeamPanel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#FF6600',
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#1A1A1A',
    borderColor: '#FF6600',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
  },
});
