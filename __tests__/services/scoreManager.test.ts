import { ScoreManager } from '../../services/scoreManager';

describe('ScoreManager', () => {
  it('should score points correctly', () => {
    const manager = new ScoreManager(['p1', 'p2']);
    manager.pointWonBy('p1');
    manager.pointWonBy('p1');
    manager.pointWonBy('p1');
    manager.pointWonBy('p1');
    expect(manager.getCurrentScore().games[0]).toBe(1);
  });
});