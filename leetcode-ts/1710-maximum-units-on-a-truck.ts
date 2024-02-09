function maximumUnits(boxTypes: number[][], truckSize: number): number {
  if (!truckSize) return 0;

  let total = 0;
  const sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedBoxes.length && truckSize > 0; ++i) {
    const [availableBoxes, unitPerBox] = sortedBoxes[i];
    const unitToTake = Math.min(availableBoxes, truckSize);

    total += unitPerBox * unitToTake;
    truckSize -= unitToTake;
  }

  return total;
}

export default maximumUnits;
