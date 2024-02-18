function getScopedString(s: string): string {
  let totalBracket = 0;
  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (char === '[') {
      totalBracket++;
    } else if (char === ']') {
      totalBracket--;
      if (totalBracket === 0) {
        return s.slice(1, i);
      }
    }
  }
  return s;
}

function decodeString(s: string): string {
  let idx = 0;
  let result = '';
  let numPrefix = '';
  while (idx < s.length) {
    const char = s[idx];
    if (char >= '0' && char <= '9') {
      numPrefix += char;
    } else if (char === '[') {
      const scopedString = getScopedString(s.slice(idx, s.length));
      result += decodeString(scopedString).repeat(Number(numPrefix));
      idx += scopedString.length;
      numPrefix = '';
    } else if (char >= 'a' && char <= 'z') {
      result += char;
    }

    idx++;
  }
  return result;
}

export default decodeString;
