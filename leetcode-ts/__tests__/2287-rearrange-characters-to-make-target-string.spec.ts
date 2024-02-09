import rearrangeCharacters from "../2287-rearrange-characters-to-make-target-string";

jest.setTimeout(150);

describe("Sum of Scores of Built Strings", () => {
  it.each([
    /* test case: [string, result ]*/
    ["ilovecodingonleetcode", "code", 2],
    ["abcba", "abc", 1],
    ["abbaccaddaeea", "aaaaa", 1],
  ])("should return correct total score", (string, target, result) => {
    expect(rearrangeCharacters(string, target)).toEqual(result);
  });
});
