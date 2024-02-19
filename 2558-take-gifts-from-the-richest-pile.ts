function pickGifts(gifts: number[], k: number): number {
  let tempTotal = 0;

  for (let i = 0; i < k; ++i) {
    tempTotal = 0;
    let maxIdx = 0;
    for (let j = 0; j < gifts.length; ++j) {
      if (gifts[j] > gifts[maxIdx]) {
        maxIdx = j;
      }
      tempTotal += gifts[j];
    }

    const remainingGifts = Math.floor(gifts[maxIdx] ** 0.5);

    tempTotal -= gifts[maxIdx] - remainingGifts;
    gifts[maxIdx] = remainingGifts;
  }

  return tempTotal;
}

export default pickGifts;
