// utils/matchLog.ts

export interface MatchLogEntry {
  timestamp: string;
  event: string;
  details?: string;
}

export const createLogEntry = (
  event: string,
  details?: string
): MatchLogEntry => ({
  timestamp: new Date().toISOString(),
  event,
  details
});

export const createCoinTossLog = (
  winner: 'home' | 'away',
  side: 'heads' | 'tails',
  homeTeam: string,
  awayTeam: string
): MatchLogEntry => ({
  timestamp: new Date().toISOString(),
  event: 'Coin Toss',
  details: `Result: ${side.toUpperCase()}, Winner: ${winner === 'home' ? homeTeam : awayTeam}`
});
