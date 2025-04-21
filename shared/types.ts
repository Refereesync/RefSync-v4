export interface MatchEvent {
    type: 'Goal' | 'Foul' | 'Sub';
    time: string;
    team?: 'A' | 'B';
  }
  // Placeholder content for types.ts