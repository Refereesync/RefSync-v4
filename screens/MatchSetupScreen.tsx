// File: screens/MatchSetupScreen.tsx

import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MatchContext } from '../context/MatchContext';

const MatchSetupScreen = () => {
  const navigation = useNavigation();
  const { startMatch } = useContext<any>(MatchContext);

  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [referee, setReferee] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [tossWinner, setTossWinner] = useState('');
  const [tossChoice, setTossChoice] = useState('');
  const [kickoffTeam, setKickoffTeam] = useState('');

  const handleStart = () => {
    if (!homeTeam || !awayTeam || !referee) {
      Alert.alert('Missing Info', 'Please fill all required fields.');
      return;
    }

    startMatch({
      referee,
      venue,
      date,
      homeTeam: { name: homeTeam },
      awayTeam: { name: awayTeam },
      events: [],
      tossResult: {
        team: tossWinner,
        choice: tossChoice,
        kickoffTeam
      }
    });

    navigation.navigate('MainMatchScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Match Setup</Text>

      <TextInput
        style={styles.input}
        placeholder="Home Team"
        value={homeTeam}
        onChangeText={setHomeTeam}
      />
      <TextInput
        style={styles.input}
        placeholder="Away Team"
        value={awayTeam}
        onChangeText={setAwayTeam}
      />
      <TextInput
        style={styles.input}
        placeholder="Referee Name"
        value={referee}
        onChangeText={setReferee}
      />
      <TextInput
        style={styles.input}
        placeholder="Venue"
        value={venue}
        onChangeText={setVenue}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.subHeading}>Coin Toss</Text>
      <TextInput
        style={styles.input}
        placeholder="Toss Winner (Team)"
        value={tossWinner}
        onChangeText={setTossWinner}
      />
      <TextInput
        style={styles.input}
        placeholder="Toss Choice (Ends/Receive)"
        value={tossChoice}
        onChangeText={setTossChoice}
      />
      <TextInput
        style={styles.input}
        placeholder="Kickoff Team"
        value={kickoffTeam}
        onChangeText={setKickoffTeam}
      />

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Start Match</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  subHeading: { fontSize: 18, marginTop: 20, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16
  },
  buttonText: { color: 'white', fontSize: 16 }
});

export default MatchSetupScreen;
