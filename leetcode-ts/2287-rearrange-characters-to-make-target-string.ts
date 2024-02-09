function rearrangeCharacters(s: string, target: string): number {
  if (s.length === 0 || target.length === 0 || s.length < target.length)
    return 0;
  const availableCharacters: Record<string, number> = {};

  for (const char of s) {
    availableCharacters[char] = (availableCharacters[char] || 0) + 1;
  }

  let count = 0;
  while (true) {
    for (const char of target) {
      if (!availableCharacters[char]) return count;
      availableCharacters[char]--;
    }

    count++;
  }
}

export default rearrangeCharacters;
