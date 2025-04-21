type Score = {
  home: number;
  away: number;
};

export class ScoreManager {
  private score: Score = { home: 0, away: 0 };

  increment(team: 'home' | 'away') {
    this.score[team]++;
  }

  getScore() {
    return { ...this.score };
  }

  reset() {
    this.score = { home: 0, away: 0 };
  }
}