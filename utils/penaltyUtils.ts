// utils/penaltyUtils.ts

export type PenaltyOutcome = 'goal' | 'miss' | 'save';

export interface PenaltyAttempt {
  player: string;
  team: 'home' | 'away';
  outcome: PenaltyOutcome;
}

export interface PenaltySummary {
  homeGoals: number;
  awayGoals: number;
  result: 'home' | 'away' | 'tie' | null;
}

export const summarizePenaltyShootout = (penalties: PenaltyAttempt[]): PenaltySummary => {
  const homeGoals = penalties.filter(p => p.team === 'home' && p.outcome === 'goal').length;
  const awayGoals = penalties.filter(p => p.team === 'away' && p.outcome === 'goal').length;

  let result: 'home' | 'away' | 'tie' | null = null;

  // Auto-end rules for standard 5 penalties per team
  if (penalties.filter(p => p.team === 'home').length >= 5 &&
      penalties.filter(p => p.team === 'away').length >= 5) {
    if (homeGoals > awayGoals) result = 'home';
    else if (awayGoals > homeGoals) result = 'away';
    else if (penalties.length >= 10) result = 'tie'; // sudden death starts after 5 each
  }

  return { homeGoals, awayGoals, result };
};

export const penaltyIsComplete = (penalties: PenaltyAttempt[]): boolean => {
  const { result } = summarizePenaltyShootout(penalties);
  return result !== null;
};

export const penaltyWinner = (penalties: PenaltyAttempt[]): 'home' | 'away' | null => {
  const { result } = summarizePenaltyShootout(penalties);
  return result === 'home' || result === 'away' ? result : null;
};
