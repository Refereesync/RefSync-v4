import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Heatmap } from '../types/MatchStats';

interface Props {
  heatmap: Heatmap;
  label: string;
}

const HeatmapView: React.FC<Props> = ({ heatmap, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.grid}>
        {heatmap.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <View
                key={colIndex}
                style={[
                  styles.cell,
                  {
                    backgroundColor: `rgba(255, 69, 0, ${Math.min(cell / 10, 1)})`,
                  },
                ]}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default HeatmapView;

const { width } = Dimensions.get('window');
const CELL_SIZE = width / 15;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  grid: {
    borderWidth: 1,
    borderColor: '#333',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
});
