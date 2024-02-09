import sumScores from "../2223-sum-of-scores-of-built-strings";

const testCases: Array<[string, number]> = [
  /* test case: [string, result ]*/
  ["babab", 9],
  ["azbazbzaz", 14],
];

jest.setTimeout(150);

describe("Sum of Scores of Built Strings", () => {
  it.each(testCases)("should return correct total score", (input, score) => {
    expect(sumScores(input)).toEqual(score);
  });
});
