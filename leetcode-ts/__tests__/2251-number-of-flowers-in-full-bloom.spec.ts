import fullBloomFlowers from "../2251-number-of-flowers-in-full-bloom";

jest.setTimeout(150);

describe("Number of Flowers in Full Bloom", () => {
  it.each([
    /* test case: [string, result] */
    // [
    //   [
    //     [1, 6],
    //     [3, 7],
    //     [9, 12],
    //     [4, 13],
    //   ],
    //   [2, 3, 7, 11],
    //   [1, 2, 2, 2],
    // ],
    // [
    //   [
    //     [1, 10],
    //     [3, 3],
    //   ],
    //   [3, 3, 2],
    //   [2, 2, 1],
    // ],
    [
      [
        [32, 36],
        [20, 26],
        [32, 32],
        [43, 46],
        [40, 50],
        [9, 10],
        [19, 19],
        [2, 23],
        [36, 37],
        [38, 48],
        [13, 25],
        [12, 48],
        [21, 33],
        [4, 43],
        [43, 49],
        [35, 46],
        [41, 44],
        [36, 44],
        [40, 50],
        [42, 47],
        [27, 50],
        [7, 43],
        [5, 41],
        [32, 35],
        [24, 31],
        [33, 42],
        [44, 47],
        [32, 46],
        [39, 46],
        [48, 50],
        [10, 49],
        [14, 19],
        [13, 20],
        [41, 43],
        [39, 48],
        [33, 44],
        [23, 37],
        [34, 48],
        [36, 36],
        [6, 12],
        [14, 17],
        [31, 34],
        [28, 40],
        [11, 31],
        [17, 50],
        [31, 47],
        [17, 21],
        [33, 49],
        [20, 29],
        [27, 43],
        [18, 47],
        [46, 47],
        [29, 49],
        [50, 50],
        [5, 24],
        [19, 27],
        [16, 24],
        [18, 42],
        [5, 17],
        [17, 26],
      ],
      [
        19, 17, 42, 36, 43, 42, 25, 35, 31, 21, 49, 14, 1, 4, 24, 12, 38, 48,
        33, 36, 37, 8, 45, 50, 27, 20, 45, 42, 12, 5, 32, 41, 16, 23, 30, 29, 1,
        37, 16, 42, 43, 5, 50, 6, 49, 22, 34, 24, 6,
      ],
      [
        19, 17, 26, 24, 26, 26, 17, 22, 18, 19, 9, 13, 0, 2, 19, 10, 21, 13, 22,
        24, 22, 7, 20, 6, 16, 19, 20, 26, 10, 5, 20, 26, 14, 19, 16, 17, 0, 22,
        14, 26, 26, 5, 6, 6, 9, 18, 22, 19, 6,
      ],
    ],
  ])(
    "should return total flowers are viewed by the person",
    (flowers, people, expected) => {
      const result = fullBloomFlowers(flowers, people);
      console.log(result, expected);
      expect(result).toEqual(expected);
    }
  );
});
