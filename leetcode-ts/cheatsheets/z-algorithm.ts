export function searchPattern(text: string, pattern: string): number {
  const formattedText = `${pattern}$${text}`;
  const zArray = generateZArray(formattedText);

  for (let i = 0; i < formattedText.length; ++i) {
    if (zArray[i] === pattern.length) {
      // Since Z Array at index i indicates the longest common prefix length is equal from the search pattern
      // We can say that this index is the start of matched pattern
      // But since the generated pattern is based on P$T pattern we need to subtract the `pattern.length` + 1 (for `$` sign)
      return i - pattern.length - 1;
    }
  }

  return -1;
}

export function generateZArray(formattedText: string): number[] {
  // Initiate the Z Array
  // Example: text is "abc$abcdabc"
  const zArray = new Array(formattedText.length);
  let left = 0;
  let right = 0;

  for (let i = 1; i < formattedText.length; ++i) {
    // If i > right, no prior computation for longest common prefix
    if (i > right) {
      left = right = i;

      // Compute the longest common prefix
      while (
        right < formattedText.length &&
        formattedText[right - left] === formattedText[right]
      ) {
        right++;
      }

      // (right - left) resulting total character's with common prefix
      zArray[i] = right - left;
      // Revert to latest character within common prefix
      right--;
    } else {
      let k = i - left;

      // If right >= i, meaning there'a already a calculation with a common longest prefix on this index
      // We can check if it's still within the common prefix length
      // Assuming we have this text "aabxaabx"

      // When i is 5, we'll have these values
      // Given string - aabxaabx
      // Indexes      - 01234567
      // Pointers     -     li r - (left is 4, right is 7, index is 5)
      // Z Index      - 01004

      // Here we can check the if the previous Z Array value zArray[5-4] + i exceeds the right most pointer
      // If the value still within the range, we can set the value based on previous calculation
      // Otherwise compute the longest common prefix
      if (zArray[k] + i < right + 1) {
        zArray[i] = zArray[k];
      } else {
        // Set left pointer to current index to recalculate the longest common prefix
        left = i;

        // Exact same algorithm to calculate longest common prefix
        while (
          right < formattedText.length &&
          formattedText[right - left] === formattedText[right]
        ) {
          right++;
        }
        zArray[i] = right - left;
        right--;
      }
    }
  }

  return zArray;
}
