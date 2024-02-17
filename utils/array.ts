export const swap = <T>(arr: T[], from: number, to: number): T[] => {
  const temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
};

export const binarySearchArray = <T>(arr: T[], target: T): number => {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

export const binarySearchLowerBound = <T>(arr: T[], target: T): number => {
  let lowerBound = 0;
  let upperBound = arr.length;

  while (lowerBound < upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);

    if (arr[mid] < target) {
      lowerBound = mid + 1;
    } else {
      upperBound = mid;
    }
  }
  return lowerBound;
};

export const binarySearchUpperBound = <T>(arr: T[], target: T): number => {
  let lowerBound = 0;
  let upperBound = arr.length;

  while (lowerBound < upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);

    if (arr[mid] <= target) {
      lowerBound = mid + 1;
    } else {
      upperBound = mid;
    }
  }

  return upperBound;
};
