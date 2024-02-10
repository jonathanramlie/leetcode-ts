import isAdditiveNumber from '../306-additive-number';

describe('Additive Number', () => {
  it.each([
    ['112358', true],
    ['199100199', true],
    ['1023', false],
    ['123', true],
    ['101', true],
  ])(
    'should return boolean representing if the input is in additive number format',
    (input, result) => {
      expect(isAdditiveNumber(input)).toBe(result);
    }
  );
});
