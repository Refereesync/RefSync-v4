import * as SpeechRecognition from 'expo-speech-recognition';

type VoiceCallback = (text: string) => void;

let active = false;

export const startVoiceToText = async (onText: VoiceCallback) => {
  if (!await SpeechRecognition.isAvailableAsync()) return;
  active = true;

  await SpeechRecognition.startAsync({
    onSpeechResult: (data) => {
      if (active && data.transcripts.length > 0) {
        onText(data.transcripts[0]);
      }
    },
    onSpeechError: (error) => {
      console.warn('Speech recognition error:', error);
    }
  });
};

export const stopVoiceToText = async () => {
  active = false;
  await SpeechRecognition.stopAsync();
};