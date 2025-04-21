import { MatchStats } from '../types/MatchStats';

export const calculateWinPercentages = (matches: MatchStats[]) => {
  const teamWins: Record<string, number> = {};
  const teamGames: Record<string, number> = {};

  matches.forEach((match) => {
    const { teamA, teamB, scoreA, scoreB } = match;

    // Count wins
    if (scoreA > scoreB) {
      teamWins[teamA] = (teamWins[teamA] || 0) + 1;
    } else if (scoreB > scoreA) {
      teamWins[teamB] = (teamWins[teamB] || 0) + 1;
    }

    // Count games played
    teamGames[teamA] = (teamGames[teamA] || 0) + 1;
    teamGames[teamB] = (teamGames[teamB] || 0) + 1;
  });

  const percentages: Record<string, number> = {};
  for (const team in teamGames) {
    percentages[team] = ((teamWins[team] || 0) / teamGames[team]) * 100;
  }

  return percentages;
};
