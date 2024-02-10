import pivotArray from "../2161-partition-array-according-to-given-pivot";

const testCases: Array<[number[], number, number[]]> = [
  [[9, 12, 5, 10, 14, 3, 10], 10, [9, 5, 3, 10, 10, 12, 14]],
  [[-3, 4, 3, 2], 2, [-3, 2, 4, 3]],
];

jest.setTimeout(150);

describe("Partition Array According to Given Pivot", () => {
  it.each(testCases)(
    "should return correct array arrangement",
    (nums, pivot, result) => {
      expect(pivotArray(nums, pivot)).toEqual(result);
    },
  );
});
