function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let idx = Math.round((arr.length - 1) / 2);

  while (true) {
    if (arr[idx - 1] > arr[idx]) {
      right = idx;
      idx = Math.round((left + idx - 1) / 2);
    } else if (arr[idx + 1] > arr[idx]) {
      left = idx;
      idx = Math.round((right + idx + 1) / 2);
    } else {
      break;
    }
  }

  return idx;
}

export default peakIndexInMountainArray;
