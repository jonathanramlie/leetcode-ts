// Count set of 1 bits of a number
export const countSetBits = (num: number): number => {
  let count = 0;
  // Loop until num have bits
  while (num > 0) {
    // Remove the lowest 1 bits of the number
    // Num 88 - 01011000
    //     87 - 01010111
    // By using & operator we can remove the lowest 1 bit
    // Resulting in 01010000 (88)
    // Then iterate until num is 0
    num &= num - 1;
    count++;
  }
  return count;
};
