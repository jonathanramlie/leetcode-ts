export function decompressRLElist(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];

    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }

  return result;
}
