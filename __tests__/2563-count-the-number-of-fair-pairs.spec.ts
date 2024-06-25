import { countFairPairs } from '../2563-count-the-number-of-fair-pairs';

describe('countFairPairs', () => {
  it.each([
    [[0, 1, 7, 4, 4, 5], 3, 6, 6],
    [[1, 7, 9, 2, 5], 11, 11, 1],
  ])(
    'should return correct num of fair pairs',
    (nums, lower, upper, result) => {
      expect(countFairPairs(nums, lower, upper)).toBe(result);
    }
  );
});
