import countExcellentPairs from '../2354-number-of-excellent-pairs';

describe('Number of Excellent Pairs', () => {
  it.each([
    [[1, 2, 3, 1], 3, 5],
    [[5, 1, 1], 10, 0],
    [[1, 2, 4, 8, 16, 32, 64, 128, 256], 2, 81],
  ])('should return correct total excellent pairs', (nums, k, expected) => {
    expect(countExcellentPairs(nums, k)).toEqual(expected);
  });
});
