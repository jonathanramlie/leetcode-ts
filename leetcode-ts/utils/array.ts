export const swap = <T>(arr: T[], from: number, to: number): T[] => {
  const temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
};
