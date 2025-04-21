// types/MatchStats.ts
export interface Heatmap {
  [row: number]: number[];
}

export interface HeatmapPoint {
  row: number;
  column: number;
  intensity: number;
}
