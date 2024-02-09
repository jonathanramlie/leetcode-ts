function pivotArray(nums: number[], pivot: number): number[] {
  const result: number[] = new Array(nums.length);

  let left = 0;
  let right = nums.length - 1;
  for (let i = 0, j = nums.length - 1; i < nums.length; ++i, --j) {
    if (nums[i] < pivot) {
      result[left++] = nums[i];
    }

    if (nums[j] > pivot) {
      result[right--] = nums[j];
    }
  }

  for (let i = left; i <= right; ++i) {
    result[i] = pivot;
  }

  return result;
}

export default pivotArray;
