import firstCompleteIndex from '../2661-first-completely-painted-row-or-column';

jest.setTimeout(150);

describe('First Completely Painted Row or Column', () => {
  it.each([
    [
      [1, 3, 4, 2],
      [
        [1, 4],
        [2, 3],
      ],
      2,
    ],
    [
      [2, 8, 7, 4, 1, 3, 5, 6, 9],
      [
        [3, 2, 5],
        [1, 4, 6],
        [8, 7, 9],
      ],
      3,
    ],
  ])('should return first fully painted row/col', (arr, mat, result) => {
    expect(firstCompleteIndex(arr, mat)).toEqual(result);
  });
});
