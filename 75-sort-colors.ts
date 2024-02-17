/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const countSort = new Uint32Array(3);

  for (const num of nums) {
    for (let j = 2; j >= num; --j) {
      if (countSort[j] >= nums.length) return;
      nums[countSort[j]] = j;
      countSort[j]++;
    }
  }
}

export default sortColors;
