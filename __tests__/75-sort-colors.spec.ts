import sortColors from '../75-sort-colors';

describe('Sort Colors', () => {
  it.each([
    [
      [2, 0, 2, 1, 1, 0],
      [0, 0, 1, 1, 2, 2],
    ],
    [
      [2, 0, 1],
      [0, 1, 2],
    ],
  ])('should return in sorted order', (arr, expected) => {
    sortColors(arr);
    expect(arr).toEqual(expected);
  });
});
