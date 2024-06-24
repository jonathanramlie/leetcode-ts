interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const memoizeHeight = new Map();

// At first was attempting on to use sum of root.left + root.right max heights
// But since the path with max length not pass the root node
// We'll need to compute each node's sum of max height
// Using memoization to use unnecessary max depth computations
export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root == null) return 0;

  return Math.max(
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right),
    findMaxDepth(root.left) + findMaxDepth(root.right)
  );
}

function findMaxDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  if (memoizeHeight.has(root)) return memoizeHeight.get(root);

  const leftDepth = findMaxDepth(root.left);
  const rightDepth = findMaxDepth(root.right);

  const maxDepth = Math.max(leftDepth, rightDepth) + 1;

  memoizeHeight.set(root, maxDepth);

  return maxDepth;
}
