import { BinaryTreeComparator, TreeNode } from "./binary-tree";

export class AVLNode<T> extends TreeNode<T> {
  height: number;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;

  constructor(value: T) {
    super(value);
    this.height = 1;
  }
}

export class AVLTree<T> {
  root: AVLNode<T> | null = null;

  getHeight(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  getBalanceFactor(node: AVLNode<T> | null): number {
    return this.getHeight(node?.left) - this.getHeight(node?.right);
  }

  updateHeight(node: AVLNode<T>): void {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  rotateRight(node: AVLNode<T>): AVLNode<T> {
    const leftChild = node.left;
    if (!leftChild) return node;

    const subTreeLeftChild = leftChild.right;

    // Perform rotation
    leftChild.right = node;
    node.left = subTreeLeftChild;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(leftChild);

    return leftChild;
  }

  rotateLeft(node: AVLNode<T>): AVLNode<T> {
    const rightChild = node.right;
    if (!rightChild) return node;

    const subTreeRightChild = rightChild.left;

    // Perform rotation
    rightChild.left = node;
    node.right = subTreeRightChild;

    // Update heights
    this.updateHeight(node);
    this.updateHeight(rightChild);

    return rightChild;
  }

  insert(value: T, comparator: BinaryTreeComparator<T>): void {
    this.root = this._insert(this.root, value, comparator);
  }

  private _insert(
    node: AVLNode<T> | null,
    value: T,
    comparator: BinaryTreeComparator<T>
  ): AVLNode<T> {
    if (node === null) {
      return new AVLNode<T>(value);
    }

    const result = comparator(value, node.value);
    if (result < 0) {
      node.left = this._insert(node.left, value, comparator);
    } else if (result > 0) {
      node.right = this._insert(node.right, value, comparator);
    } else {
      node.count += 1;
      return node;
    }

    // Update height of the current node
    this.updateHeight(node);

    // Get the balance factor to check if the node is unbalanced
    const balance = this.getBalanceFactor(node);

    // Perform rotations to balance the tree if needed
    if (balance > 1) {
      // Left heavy
      const result = comparator(value, node.left.value);
      if (result < 0) {
        return this.rotateRight(node);
      } else {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
    }

    if (balance < -1) {
      // Right heavy
      const result = comparator(value, node.right.value);
      if (result > 0) {
        return this.rotateLeft(node);
      } else {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
    }

    return node;
  }
}

export function generateAVLTree<T>(
  arr: T[],
  comparator: BinaryTreeComparator<T>
): AVLTree<T> {
  const avlTree = new AVLTree<T>();
  for (const item of arr) {
    avlTree.insert(item, comparator);
  }
  return avlTree;
}
