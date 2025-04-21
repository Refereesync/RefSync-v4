interface ScoreState {
  teamA: number;
  teamB: number;
}

export const initialScore: ScoreState = { teamA: 0, teamB: 0 };

export const updateScore = (current: ScoreState, team: 'A' | 'B'): ScoreState => {
  return {
    ...current,
    teamA: team === 'A' ? current.teamA + 1 : current.teamA,
    teamB: team === 'B' ? current.teamB + 1 : current.teamB,
  };
};
