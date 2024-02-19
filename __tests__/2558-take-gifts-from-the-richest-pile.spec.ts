import pickGifts from '../2558-take-gifts-from-the-richest-pile';

describe('Take Gifts From the Richest Pile', () => {
  it.each([
    [[25, 64, 9, 4, 100], 4, 29],
    [[1, 1, 1, 1], 4, 4],
  ])('should return sum of remaining gifts', (gifts, k, result) => {
    expect(pickGifts(gifts, k)).toEqual(result);
  });
});
