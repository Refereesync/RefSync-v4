// utils/buildMatchSummary.ts
type MatchEvent = {
    type: string;
    playerNumber?: number;
    team?: 'home' | 'away';
    timestamp: string;
  };
  
  export const buildMatchSummary = (events: MatchEvent[]) => {
    const goals = events.filter((e) => e.type === 'goal');
    const cards = events.filter((e) => e.type.includes('card'));
    const subs = events.filter((e) => e.type === 'substitution');
    const sinBins = events.filter((e) => e.type === 'sin_bin');
  
    return {
      goals: goals.length,
      yellowCards: cards.filter((c) => c.type === 'yellow_card').length,
      redCards: cards.filter((c) => c.type === 'red_card' || c.type === 'second_yellow').length,
      substitutions: subs.length,
      sinBins: sinBins.length,
      timeline: events.map((e) => ({
        time: new Date(e.timestamp).toLocaleTimeString(),
        event: e.type,
        player: e.playerNumber,
        team: e.team,
      })),
    };
  };
  