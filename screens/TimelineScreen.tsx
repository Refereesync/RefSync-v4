// ✅ screens/TimelineScreen.tsx
import React, { useRef } from 'react';
import { View, ScrollView, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLiveMatchEvents } from '../hooks/useLiveMatchEvents';
import  ../components/TimelineItem from "./components/TimelineItemx";
import { exportMatchPDF } from '../utils/pdfExport';

export default function TimelineScreen() {
  const { params } = useRoute();
  const matchId = params?.matchId;
  const events = useLiveMatchEvents(matchId);
  const scrollRef = useRef<ScrollView>(null);

  const matchInfo = {
    teams: { home: 'Home FC', away: 'Away United' },
  };

  const replayTimeline = () => {
    events.forEach((_, i) => {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ y: i * 100, animated: true });
      }, i * 1000);
    });
  };

  const handleExport = async () => {
    await exportMatchPDF(events, matchInfo);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollRef}>
        {events.map((e, i) => (
          <TimelineItem key={i} event={e} />
        ))}
      </ScrollView>
      <Button title="Replay Timeline" onPress={replayTimeline} />
      <Button title="Export PDF" onPress={handleExport} />
    </View>
  );
}
