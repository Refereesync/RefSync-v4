// types/index.ts
export interface MatchEvent {
    id: string;
    type: 'goal' | 'foul' | 'offside' | 'yellowCard' | 'redCard' | string;
    timestamp: number;
    team?: string;
    player?: string;
    note?: string;
  }
  
  export interface TossResult {
    winner: string;
    decision: 'kickoff' | 'receive';
  }
  
  export interface MatchStats {
    matchId: string;
    events: MatchEvent[];
    tossResult?: TossResult;
    createdAt: number;
    updatedAt?: number;
  }
  