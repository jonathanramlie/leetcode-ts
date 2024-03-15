import peakIndexInMountainArray from '../852-peak-index-in-a-mountain-array';

describe('Peak Index in a Mountain Array', () => {
  it.each([
    [[0, 1, 0], 1],
    [[0, 2, 1, 0], 1],
    [[0, 10, 5, 2], 1],
  ])(
    'should return total cells that can flow to both oceans',
    (arr, result) => {
      expect(peakIndexInMountainArray(arr)).toEqual(result);
    }
  );
});
