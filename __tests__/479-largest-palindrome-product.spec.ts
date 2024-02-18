import largestPalindrome from '../479-largest-palindrome-product';

describe('Largest Palindrome Product', () => {
  it.each([
    [1, 9],
    [2, 987],
    [8, 475],
  ])('should be able to correct largest palindrom', (n, result) => {
    expect(largestPalindrome(n)).toBe(result);
  });
});
