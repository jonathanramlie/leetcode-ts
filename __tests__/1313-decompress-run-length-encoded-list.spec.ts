import { decompressRLElist } from '../1313-decompress-run-length-encoded-list';

describe('decompressRLElist', () => {
  it.each([
    [
      [1, 2, 3, 4],
      [2, 4, 4, 4],
    ],
    [
      [1, 1, 2, 3],
      [1, 3, 3],
    ],
  ])('should return encoded list', (arr, result) => {
    expect(decompressRLElist(arr)).toMatchObject(result);
  });
});
