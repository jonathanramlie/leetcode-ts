import { trimBST } from '../669-trim-a-binary-search-tree';

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

const traverseInOrder = (
  root: TreeNode | null,
  accu: Array<number | null>
): void => {
  if (root === null) {
    return;
  }

  accu.push(root.val);

  if (root.left === null && root.right === null) return;

  if (root.left !== null) {
    traverseInOrder(root.left, accu);
  } else {
    accu.push(null);
  }
  if (root.right !== null) {
    traverseInOrder(root.right, accu);
  } else {
    accu.push(null);
  }
};

describe('Trim a Binary Search Tree', () => {
  it.each([
    [[1, 0, 2], 1, 2, [1, null, 2]],
    [[1, null, 2], 1, 2, [1, null, 2]],
    [[2, 1, 3], 3, 4, [3]],
  ])('should return trimmed tree', (arr, low, high, result) => {
    const trimResult: number[] = [];
    const root = trimBST(generateTreeNode(arr), low, high);
    traverseInOrder(root, trimResult);
    expect(trimResult).toEqual(result);
  });
});
