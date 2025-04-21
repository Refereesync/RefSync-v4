// screens/NotesScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import * as Speech from 'expo-speech';

interface Note {
  id: string;
  text: string;
  timestamp: number;
}

const NotesScreen = () => {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      text,
      timestamp: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setInput('');
  };

  const speakNote = () => {
    if (input) Speech.speak(input);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Notes</Text>
      <TextInput
        placeholder="Type note..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
        multiline
      />
      <View style={styles.actions}>
        <Button title="Add Note" onPress={() => addNote(input)} disabled={!input.trim()} />
        <Button title="Speak" onPress={speakNote} disabled={!input.trim()} />
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
            <Text style={styles.noteTimestamp}>
              {new Date(item.timestamp).toLocaleTimeString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    minHeight: 60,
    marginBottom: 10,
  },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  noteItem: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  noteText: { fontSize: 16 },
  noteTimestamp: { fontSize: 12, color: '#666' },
});

export default NotesScreen;
