import decodeString from '../394-decode-string';

describe('Decode String', () => {
  it.each([
    ['3[a]2[bc]', 'aaabcbc'],
    ['3[a2[c]]', 'accaccacc'],
    ['2[abc]3[cd]ef', 'abcabccdcdcdef'],
  ])('should decoded string', (str, result) => {
    expect(decodeString(str)).toEqual(result);
  });
});
