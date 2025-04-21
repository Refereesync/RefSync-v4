import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MatchStats, HeatmapPoint } from '../types/MatchStats';
import { RootStackParamList } from '../navigation/types';

type Props = {
  route: RouteProp<RootStackParamList, 'HeatmapViewer'>;
};

const HeatmapViewer: React.FC<Props> = ({ route }) => {
  const data = route.params.data as MatchStats[];

  return (
    <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
      {data.map((match, idx) => (
        <View key={idx} style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontWeight: 'bold' }}>Match {idx + 1}</Text>
          {match.heatmap.map((point: HeatmapPoint, i: number) => (
            <Text key={i}>
              ({point.x}, {point.y}) - {point.intensity}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default HeatmapViewer;
