// Path: screens/NotesScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { startVoiceToText, stopVoiceToText } from '../utils/voiceToText';

const NotesScreen = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);

  const handleSaveNote = () => {
    if (note.trim()) {
      setNotes((prev) => [...prev, note.trim()]);
      setNote('');
    } else {
      Alert.alert('Note is empty');
    }
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopVoiceToText();
      setIsListening(false);
    } else {
      try {
        startVoiceToText((text) => {
          setNote(text);
          setIsListening(false);
        });
        setIsListening(true);
      } catch (err) {
        Alert.alert('Voice error', (typeof err === "object" && err && "message" in err ? err.message : "Unknown error"));
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🗒 Match Notes</Text>

      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Type or speak a note..."
        multiline
        style={styles.input}
      />

      <View style={styles.actions}>
        <TouchableOpacity onPress={handleVoiceToggle} style={styles.voiceBtn}>
          <Text style={styles.voiceText}>{isListening ? '🛑 Stop' : '🎙 Start Voice'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSaveNote} style={styles.saveBtn}>
          <Text style={styles.saveText}>💾 Save Note</Text>
        </TouchableOpacity>
      </View>

      {notes.length > 0 && (
        <View style={styles.list}>
          <Text style={styles.subTitle}>Saved Notes:</Text>
          {notes.map((n, i) => (
            <Text key={i} style={styles.noteItem}>• {n}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    minHeight: 80,
    fontSize: 16
  },
  actions: { flexDirection: 'row', marginTop: 12, justifyContent: 'space-between' },
  voiceBtn: { backgroundColor: '#ffa500', padding: 12, borderRadius: 8 },
  saveBtn: { backgroundColor: '#4CAF50', padding: 12, borderRadius: 8 },
  voiceText: { color: '#fff', fontWeight: 'bold' },
  saveText: { color: '#fff', fontWeight: 'bold' },
  list: { marginTop: 20 },
  subTitle: { fontSize: 18, marginBottom: 8 },
  noteItem: { fontSize: 16, marginBottom: 6 }
});

export default NotesScreen;
