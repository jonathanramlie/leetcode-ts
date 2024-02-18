const deltas = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

// Do dfs, mark the cell as visited
// Since we wanna do dfs from the ocean to specific cell
// The check for height is reversed
function dfs(
  [x, y]: [number, number],
  heights: number[][],
  flowMap: number[][],
  prevHeight: number
): void {
  if (
    x < 0 ||
    y < 0 ||
    y >= heights.length ||
    x >= heights[0].length ||
    Boolean(flowMap[y][x]) ||
    prevHeight > heights[y][x]
  ) {
    return;
  }

  flowMap[y][x] = 1;

  // DFS to neighbours
  for (let i = 0; i < 4; ++i) {
    const [dx, dy] = deltas[i];
    const targetX = x + dx;
    const targetY = y + dy;

    dfs([targetX, targetY], heights, flowMap, heights[y][x]);
  }
}

function pacificAtlantic(heights: number[][]): number[][] {
  // Map to indicate a cell is connected to atlantic / pacific
  const atlantic: number[][] = new Array(heights.length);
  const pacific: number[][] = new Array(heights.length);

  // Initialize cells
  for (let i = 0; i < heights.length; ++i) {
    atlantic[i] = new Uint8Array(heights[0].length) as unknown as number[];
    pacific[i] = new Uint8Array(heights[0].length) as unknown as number[];
  }

  // Fill data for pacific & atlantic based on y-position
  for (let i = 0; i < heights.length; ++i) {
    dfs([0, i], heights, pacific, heights[i][0]);
    dfs(
      [heights[0].length - 1, i],
      heights,
      atlantic,
      heights[i][heights[0].length - 1]
    );
  }

  // Fill data for pacific & atlantic based on x-position
  for (let i = 0; i < heights[0].length; ++i) {
    dfs([i, 0], heights, pacific, heights[0][i]);
    dfs(
      [i, heights.length - 1],
      heights,
      atlantic,
      heights[heights.length - 1][i]
    );
  }

  const result: number[][] = [];

  for (let i = 0; i < heights.length; ++i) {
    for (let j = 0; j < heights[i].length; ++j) {
      // Will add position if the cell is both connected to ocean
      if (Boolean(atlantic[i][j]) && Boolean(pacific[i][j])) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

export default pacificAtlantic;
