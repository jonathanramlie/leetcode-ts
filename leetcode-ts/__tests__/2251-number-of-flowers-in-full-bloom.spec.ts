import fullBloomFlowers from '../2251-number-of-flowers-in-full-bloom';

jest.setTimeout(150);

describe('Number of Flowers in Full Bloom', () => {
  it.each([
    [
      [
        [1, 6],
        [3, 7],
        [9, 12],
        [4, 13],
      ],
      [2, 3, 7, 11],
      [1, 2, 2, 2],
    ],
    [
      [
        [1, 10],
        [3, 3],
      ],
      [3, 3, 2],
      [2, 2, 1],
    ],
  ])(
    'should return total flowers are viewed by the person',
    (flowers, people, expected) => {
      const result = fullBloomFlowers(flowers, people);
      expect(result).toEqual(expected);
    }
  );
});
