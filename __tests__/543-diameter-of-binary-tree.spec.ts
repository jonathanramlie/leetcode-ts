import { diameterOfBinaryTree } from '../543-diameter-of-binary-tree';

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

const generateTreeNode = (arr: Array<number | null>): TreeNode => {
  const root = new TreeNode(arr[0]!);
  const nodeList: TreeNode[] = [];

  for (let i = 1, curr = root; i < arr.length; i++, curr = nodeList.shift()!) {
    const numLeft = arr[i];
    if (typeof numLeft === 'number') {
      curr.left = new TreeNode(numLeft);
      nodeList.push(curr.left);
    }

    const numRight = arr[++i];
    if (typeof numRight === 'number') {
      curr.right = new TreeNode(numRight);
      nodeList.push(curr.right);
    }
  }

  return root;
};

describe('Diameter of Binary Tree', () => {
  it.each([
    [[1, 2, 3, 4, 5], 3],
    [[1, 2], 1],
    [
      [
        4,
        -7,
        -3,
        null,
        null,
        -9,
        -3,
        9,
        -7,
        -4,
        null,
        6,
        null,
        -6,
        -6,
        null,
        null,
        0,
        6,
        5,
        null,
        9,
        null,
        null,
        -1,
        -4,
        null,
        null,
        null,
        -2,
      ],
      8,
    ],
  ])('should longest path length', (arr, result) => {
    expect(diameterOfBinaryTree(generateTreeNode(arr))).toEqual(result);
  });
});
