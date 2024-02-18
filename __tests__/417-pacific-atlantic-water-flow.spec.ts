/* eslint-disable @typescript-eslint/require-array-sort-compare */
import pacificAtlantic from '../417-pacific-atlantic-water-flow';

describe('Pacific Atlantic Water Flow', () => {
  it.each([
    [
      [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ],
      [
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ],
    ],
    [
      [
        [1, 1],
        [1, 1],
        [1, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
    ],
  ])(
    'should return total cells that can flow to both oceans',
    (heights, result) => {
      expect(pacificAtlantic(heights).toSorted()).toEqual(result);
    }
  );
});
