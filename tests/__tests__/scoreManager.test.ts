import { ScoreManager } from '../scoreManager';

test('ScoreManager increments correctly', () => {
  const manager = new ScoreManager();
  manager.increment('home');
  expect(manager.getScore().home).toBe(1);
});