import { countSetBits } from './utils/bit';

function countExcellentPairs(nums: number[], k: number): number {
  // Memoize the totalBits, and number associated to it
  const bitMap: Record<number, Set<number>> = {};

  // Calculate the bits, use set to remove redundant numbers
  for (const num of nums) {
    const totalBits = countSetBits(num);
    if (typeof bitMap[totalBits] !== 'undefined') {
      bitMap[totalBits].add(num);
    } else {
      bitMap[totalBits] = new Set([num]);
    }
  }

  // Sort descending based on the totalBits
  const flattenBitMap = Object.entries(bitMap)
    .map(([key, value]): [number, Set<number>] => [parseInt(key), value])
    .sort((a, b) => {
      return b[0] - a[0];
    });

  let counter = 0;
  // Number of bits for (num1 OR num2) + (num1 AND num2)
  // is equal to sum of num1 bits and num2 bits
  // Iterate the memoized data, to calculate the possible exellent pairs
  // Note that [1,2] and [2,1] are counted as distinct pairs
  for (let i = 0; i < flattenBitMap.length; ++i) {
    const [bitCount, numbers] = flattenBitMap[i];

    // Add the possibilities from the numbers set
    if (bitCount + bitCount >= k) {
      counter += numbers.size * numbers.size;
    }

    // Iterate to the smaller totalBits from the nums
    for (let j = i + 1; j < flattenBitMap.length; ++j) {
      const [nextBitCount, nextNumbers] = flattenBitMap[j];

      // Early exit
      if (nextBitCount + bitCount < k) {
        break;
      }

      counter += numbers.size * nextNumbers.size * 2;
    }
  }

  return counter;
}

export default countExcellentPairs;
