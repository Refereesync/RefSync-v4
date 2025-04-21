import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

interface EventInputModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (event: string, player: string) => void;
  eventLabel?: string;
}

const EventInputModal = ({
  visible,
  onClose,
  onSave,
  eventLabel = 'Event',
}: EventInputModalProps) => {
  const [event, setEvent] = React.useState('');
  const [player, setPlayer] = React.useState('');

  const handleSave = () => {
    if (event.trim()) {
      onSave(event, player);
      setEvent('');
      setPlayer('');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{eventLabel}</Text>
          <TextInput
            placeholder="Event (Goal, Card, etc)"
            style={styles.input}
            value={event}
            onChangeText={setEvent}
            placeholderTextColor="#888"
          />
          <TextInput
            placeholder="Player Number"
            style={styles.input}
            value={player}
            onChangeText={setPlayer}
            keyboardType="numeric"
            placeholderTextColor="#888"
          />
          <View style={styles.actions}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onClose}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EventInputModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    width: '85%',
  },
  title: {
    fontSize: 18,
    color: '#FFA500',
    marginBottom: 12,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  cancel: {
    backgroundColor: '#555',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
