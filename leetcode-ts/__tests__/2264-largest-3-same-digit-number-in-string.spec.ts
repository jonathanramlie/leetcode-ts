import largestGoodInteger from "../2264-largest-3-same-digit-number-in-string";
import rearrangeCharacters from "../2287-rearrange-characters-to-make-target-string";

jest.setTimeout(150);

describe("Largest 3-Same-Digit Number in String", () => {
  it.each([
    /* test case: [string, result] */
    ["6777133339", "777"],
    ["2300019", "000"],
    ["42352338", ""],
  ])("should return maximum good integer", (num, result) => {
    expect(largestGoodInteger(num)).toEqual(result);
  });
});
