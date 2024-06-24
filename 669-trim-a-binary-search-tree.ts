interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (root === null) return null;

  const val = root.val;
  // Trim current node if outside range
  // Take the valid node between left/right
  if (val < low || val > high) {
    return trimBST(root.left, low, high) ?? trimBST(root.right, low, high);
  }

  // Trim both left and right node
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
}
