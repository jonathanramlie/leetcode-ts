export class TreeNode<T> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;
  private readonly _value: T;
  public count: number = 1;

  constructor(value: T) {
    this._value = value;
  }

  public get value(): T {
    return this._value;
  }
}

export type BinaryTreeComparator<T> = (a: T, b: T) => number;
export class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T, comparator: BinaryTreeComparator<T>): void {
    this.root = this._insert(this.root, value, comparator);
  }

  private _insert(
    node: TreeNode<T> | null,
    value: T,
    comparator: BinaryTreeComparator<T>
  ): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    const result = comparator(value, node.value);
    if (result < 0) {
      node.left = this._insert(node.left, value, comparator);
    } else if (result > 0) {
      node.right = this._insert(node.right, value, comparator);
    } else {
      node.count += 1;
    }
    return node;
  }
}

type TraversableNode = {
  left: TraversableNode;
  right: TraversableNode;
} | null;

// Callback returns boolean that indicates if we should skip traversal
export function inOrderTraversal(
  node: TraversableNode,
  callback: (node: TraversableNode) => void
): void {
  if (node === null) return;

  inOrderTraversal(node.left, callback);
  callback(node);
  inOrderTraversal(node.right, callback);
}
