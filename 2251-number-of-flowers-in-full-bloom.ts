// Lower bound binary search, that returns the index which hold the first greatest number found
// Or `arr.length` when not found
const search = (arr: Uint32Array, target: number): number => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
  // Given flowers [start, end][]
  // Whereas start always <= end
  // We can make this into 2 separate array then sort it
  const startArr = new Uint32Array(flowers.length);
  const endArr = new Uint32Array(flowers.length);

  for (let i = 0; i < flowers.length; ++i) {
    startArr[i] = flowers[i][0];
    // The provided flowers are in inclusive format
    // Add +1 to make it exclusive since we wanna check how many flower **have ended**
    // We can also not add 1 to endTime, but will need to change the equality checks on `search`
    // So it'll be `arr[mid] >= target` for searching endTime and keep `arr[mid] > target` for startTime
    endArr[i] = flowers[i][1] + 1;
  }

  // Sort ascending
  // Each array will represent when the flowers are blooming in startArr, and when the flowers have ended
  // Using this `startArr` we can do comparison with the person arrival time, to get how many flower have bloomed prior to arrivalTime
  // Combined the same comparison with endArr we'll get how many flower have ended prior to arrivalTime
  // Using both index we can subtract to get how many flowers are currently bloomed
  startArr.sort();
  endArr.sort();

  const result: number[] = [];
  for (const arrivalTime of people) {
    const numOfBloomedFlower = search(startArr, arrivalTime);
    const numOfWitheredFlower = search(endArr, arrivalTime);

    // Subtract to get the current number of bloomed flower
    result.push(numOfBloomedFlower - numOfWitheredFlower);
  }

  return result;
}

export default fullBloomFlowers;
