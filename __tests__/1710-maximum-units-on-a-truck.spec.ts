import maximumUnits from '../1710-maximum-units-on-a-truck';

const testCases: Array<[Array<[number, number]>, number, number]> = [
  [
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4,
    8,
  ],
  [
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10,
    91,
  ],
];

jest.setTimeout(150);

describe('Maximum Units on a Truck', () => {
  it.each(testCases)(
    'should return correct maximum units possible',
    (boxTypes, truckSize, result) => {
      expect(maximumUnits(boxTypes, truckSize)).toEqual(result);
    }
  );
});
