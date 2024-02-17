import canWinNim from '../292-nim-game';

describe('Nim Game', () => {
  it.each([
    [4, false],
    [1, true],
    [2, true],
  ])("should return true when it's possible to win", (total, canWin) => {
    expect(canWinNim(total)).toBe(canWin);
  });
});
