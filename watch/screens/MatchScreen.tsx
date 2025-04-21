import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMatchClock } from '../hooks/useMatchClock';
import  ../components/EventButton from "./components/EventButtonx";

export default function MatchScreen() {
  const { seconds, running, setRunning } = useMatchClock();

  return (
    <View>
      <Text>Match Time: {seconds}s</Text>
      <Button title={running ? "Pause" : "Start"} onPress={() => setRunning(!running)} />
      <EventButton label="Goal" onPress={() => console.log('Goal')} />
      <EventButton label="Foul" onPress={() => console.log('Foul')} />
      <EventButton label="Substitution" onPress={() => console.log('Sub')} />
    </View>
  );
}