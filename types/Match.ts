export interface MatchStats {
  id: string;
  distance: number;
  sprints: number;
  cautions: {
    time: number;
    location: [number, number];
  }[];
  heatmap: number[][];
}
