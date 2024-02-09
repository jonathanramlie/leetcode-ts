import { generateZArray, searchPattern } from "../z-algorithm";

describe("Z Algorithm Linear Time Pattern Searching Algorithm", () => {
  it.each([
    ["hello world", "orld", 7],
    ["bababababa", "abab", 1],
    ["aaaa", "aa", 0],
    ["abcdef", "f", 5],
    ["unknown", "a", -1],
  ])(
    "given text '%s', pattern '%s' should return %s index",
    (text, pattern, result) => {
      expect(searchPattern(text, pattern)).toBe(result);
    }
  );
});
