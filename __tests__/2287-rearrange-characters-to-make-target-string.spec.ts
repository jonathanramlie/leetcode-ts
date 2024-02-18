import rearrangeCharacters from '../2287-rearrange-characters-to-make-target-string';

describe('Rearrange Characters to Make Target String', () => {
  it.each([
    ['ilovecodingonleetcode', 'code', 2],
    ['abcba', 'abc', 1],
    ['abbaccaddaeea', 'aaaaa', 1],
  ])(
    'should return correct total possible arrangement',
    (string, target, result) => {
      expect(rearrangeCharacters(string, target)).toEqual(result);
    }
  );
});
