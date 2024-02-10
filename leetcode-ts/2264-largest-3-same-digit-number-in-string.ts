function largestGoodInteger(num: string): string {
  for (let i = 9; i >= 0; --i) {
    const target = `${i}${i}${i}`;
    if (num.includes(target)) return target;
  }

  return '';
}

export default largestGoodInteger;
