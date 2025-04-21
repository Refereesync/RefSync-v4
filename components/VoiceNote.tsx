import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface VoiceNoteProps {
  onRecordComplete: (uri: string) => void;
}

const VoiceNote = ({ onRecordComplete }: VoiceNoteProps) => {
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRecord = async () => {
    setLoading(true);
    setRecording(true);

    // Simulated delay to mimic recording
    setTimeout(() => {
      const mockUri = 'file://mock/voice-recording.m4a';
      setRecording(false);
      setLoading(false);
      onRecordComplete(mockUri);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFA500" />
      ) : (
        <TouchableOpacity style={styles.recordButton} onPress={handleRecord}>
          <Ionicons name="mic" size={24} color="#fff" />
          <Text style={styles.text}>{recording ? 'Recording...' : 'Record Voice Note'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VoiceNote;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 12,
  },
  recordButton: {
    backgroundColor: '#FFA500',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
