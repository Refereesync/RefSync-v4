// Path: utils/statTrends.ts

type Match = {
    date: string;
    stats: {
      distanceKm: number;
      yellowCards: number;
      sprints: number;
    };
  };
  
  type TrendData = {
    labels: string[];
    distance: number[];
    yellowCards: number[];
    sprints: number[];
  };
  
  export default function statTrends(matches: Match[]): TrendData {
    const sorted = [...matches].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  
    const labels: string[] = [];
    const distance: number[] = [];
    const yellowCards: number[] = [];
    const sprints: number[] = [];
  
    for (const match of sorted) {
      const label = new Date(match.date).toLocaleDateString('en-GB', {
        month: 'short',
        day: 'numeric'
      });
  
      labels.push(label);
      distance.push(match.stats.distanceKm);
      yellowCards.push(match.stats.yellowCards);
      sprints.push(match.stats.sprints);
    }
  
    return {
      labels,
      distance,
      yellowCards,
      sprints
    };
  }
  