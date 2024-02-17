// In this problem we need to return the index when the first row/col are fully filled
// Since the numbers contained in `arr` and `mat` are unique
// and both contains all integer in ramge of [1, m * n]
// We can just do counting for each row/col until it filled to it's total cell
function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const colCounter = new Uint32Array(mat.length);
  const rowCounter = new Uint32Array(mat[0].length);
  const posMemo: Record<number, [number, number]> = {};

  // Firstly create a memo to save the position of the number
  for (let i = 0; i < mat.length; ++i) {
    for (let j = 0; j < mat[i].length; ++j) {
      const val = mat[i][j];
      posMemo[val] = [j, i];
    }
  }

  // Iterate the input `arr`
  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];
    const [row, col] = posMemo[num];

    // Since we already have the row/col
    // Can just add the current counter
    colCounter[col]++;
    rowCounter[row]++;

    // If the current row/col already reached total cell, return the index
    if (rowCounter[row] === mat.length || colCounter[col] === mat[0].length) {
      return i;
    }
  }

  return -1;
}

export default firstCompleteIndex;
