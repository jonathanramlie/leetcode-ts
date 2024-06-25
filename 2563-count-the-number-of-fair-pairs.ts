function findLowerBound(nums: number[], idx: number, lower: number): number {
  let left = idx;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    const num = nums[mid];

    if (num < lower) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function findUpperBound(nums: number[], idx: number, upper: number): number {
  let left = idx;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    const num = nums[mid];

    if (num > upper) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

export function countFairPairs(
  nums: number[],
  lower: number,
  upper: number
): number {
  // Sort Ascending
  const sortedNums = nums.toSorted((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < sortedNums.length - 1; i++) {
    const num = sortedNums[i];

    // Get matched numbers excluding num at (i)
    // That's lower <= x <= upper
    total +=
      findUpperBound(sortedNums, i + 1, upper - num) -
      findLowerBound(sortedNums, i + 1, lower - num);
  }

  return total;
}
