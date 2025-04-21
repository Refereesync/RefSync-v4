// Path: utils/sanctionUtils.ts

export type SanctionType = 'YELLOW' | 'RED' | 'SIN_BIN';

export interface Sanction {
  playerNumber: number;
  team: 'home' | 'away';
  type: SanctionType;
  timestamp: string;
  reason?: string;
  sinBinEndsAt?: string; // for SIN_BIN only
}

export const calculateSinBinEnd = (durationMinutes: number): string => {
  const end = new Date();
  end.setMinutes(end.getMinutes() + durationMinutes);
  return end.toISOString();
};

export const createSanction = (
  playerNumber: number,
  team: 'home' | 'away',
  type: SanctionType,
  duration?: number
): Sanction => {
  const base: Sanction = {
    playerNumber,
    team,
    type,
    timestamp: new Date().toISOString(),
  };

  if (type === 'SIN_BIN' && duration) {
    base.sinBinEndsAt = calculateSinBinEnd(duration);
  }

  return base;
};
