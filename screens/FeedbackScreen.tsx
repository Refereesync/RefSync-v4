import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { db } from '../utils/firebaseHelpers';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FeedbackScreen = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submitFeedback = async () => {
    if (!message) return Alert.alert('Please write feedback before submitting.');
    try {
      await addDoc(collection(db, 'feedback'), {
        email,
        message,
        createdAt: serverTimestamp()
      });
      setMessage('');
      setEmail('');
      Alert.alert('Thanks for your feedback!');
    } catch (err) {
      Alert.alert('Error submitting feedback');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your Email (optional)</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Text style={styles.label}>Feedback</Text>
      <TextInput style={[styles.input, styles.textArea]} value={message} onChangeText={setMessage} multiline numberOfLines={4} />
      <Button title="Submit Feedback" onPress={submitFeedback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: 'bold', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 12 },
  textArea: { height: 100 }
});

export default FeedbackScreen;