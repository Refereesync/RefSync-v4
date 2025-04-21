// sport.config.ts
export interface SportConfig {
    name: string;
    periods: number;
    periodLength: number;
    allowDraw: boolean;
    events: string[];
    sinBinTime?: number;
    scoring?: boolean;
  }
  
  export const sportConfig: SportConfig = {
    name: "Football",
    periods: 2,
    periodLength: 45,
    allowDraw: true,
    events: [
      "Goal",
      "Assist",
      "Substitution",
      "Yellow Card",
      "Red Card",
      "Second Yellow",
      "Sin Bin",
    ],
    sinBinTime: 10,
    scoring: true,
  };
  