import { updateScore, initialScore } from "../scoreManager";

describe("Score Manager", () => {
  it("increments Team A score", () => {
    const updated = updateScore(initialScore, 'A');
    expect(updated.teamA).toBe(1);
  });

  it("increments Team B score", () => {
    const updated = updateScore(initialScore, 'B');
    expect(updated.teamB).toBe(1);
  });
});
