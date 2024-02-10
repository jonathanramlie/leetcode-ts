// Checks if the total from given `a` and `b` could be in additive sequence
function checkNextNumber(a: number, b: number, numberPool: string): boolean {
  // Early exit, if we already exhausted the numberPool meaning no need to check the next number
  if (numberPool.length === 0) return true;

  const total = a + b;

  // Checks invalid leading zeros
  if (total !== 0 && numberPool[0] === "0") return false;

  const totalStr = `${total}`;
  // Check if the next number is equal to total, just need to check first two
  // If it's possible, continue to check the next operation
  // e.g. 1 + 99 = 100, check if number 199 (from 99 + 100) is in the numberPool
  if (numberPool.startsWith(totalStr)) {
    return checkNextNumber(
      b,
      total,
      numberPool.slice(totalStr.length, numberPool.length)
    );
  }
  return false;
}

// The problem gives an input of string containing numbers
// Our task are to check if the string given is in an additive sequence
// Meaning the first number added with the second number will resulting in third number
// Example: 123, 1 + 2 = 3, 123 is in additive sequence
//          199100199, 1 + 99 = 100, 99 + 100 = 199
// Take note that the number in the addition operation will be used in the next addition.
// Other than that, each number in the sequence cannot have a leading zeros (e.g. '09')
function isAdditiveNumber(num: string): boolean {
  // First we need to iterate to all possible 2 number operand (the x and y) this operation complexity is O(n^2)
  for (let i = 1; i < num.length; ++i) {
    const firstStr = num.slice(0, i);
    // Skip if potential number has leading zeroes, which is invalid
    if (firstStr.length > 1 && firstStr[0] === "0") continue;

    // Start from the next possible index until end
    for (let j = i + 1; j < num.length; ++j) {
      const secondStr = num.slice(i, j);
      // Skip if number is invalid
      if (secondStr.length > 1 && secondStr[0] === "0") continue;
      // Here will check if these 2 number is possible to generate the next number (total of both number)
      if (
        checkNextNumber(
          Number(firstStr),
          Number(secondStr),
          num.slice(j, num.length)
        )
      )
        return true;
    }
  }

  return false;
}

export default isAdditiveNumber;
