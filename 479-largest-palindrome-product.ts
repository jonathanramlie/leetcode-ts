function reverseString(s: string): string {
  return s.split('').reverse().join('');
}

function largestPalindrome(n: number): number {
  if (n === 1) return 9;

  // e.g. 999
  const maxDigit = 10 ** n - 1;
  // e.g. 100
  const minDigit = 10 ** (n - 1);
  const bigZero = BigInt(0);

  // Basically will loop through all possible palindrome numbers
  // n-digits will have a maximum of n*2-digits palindrome
  for (let i = maxDigit; i > minDigit; --i) {
    // Generate palindrome number based on i from maxDigit to minDigit
    // e.g. 999999, 998899
    // Since it might be too long (max n-digits is 8), we'll use BigInt
    const palindromeNumber = BigInt(i + reverseString(i.toString()));
    // Iterate from maxDigit to find the first factor of generated palindrome number
    for (let j = BigInt(maxDigit); j * j >= palindromeNumber; --j) {
      // If modulo resulting in 0, meaning this number a product of j with another unknown number
      // Return immediately after modulo with 1337
      if (palindromeNumber % j === bigZero) {
        return Number(palindromeNumber % BigInt(1337));
      }
    }
  }

  return -1;
}

export default largestPalindrome;
