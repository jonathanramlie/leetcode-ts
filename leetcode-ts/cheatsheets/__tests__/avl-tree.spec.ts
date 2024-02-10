import { AVLNode, generateAVLTree } from "../avl-tree";
import { inOrderTraversal } from "../binary-tree";

describe("AVL Tree", () => {
  it.each([
    [
      [10, 5, 15, 3, 7, 12, 18],
      [3, 5, 7, 10, 12, 15, 18],
    ],
  ])("should correctly represent a balanced tree", (items, expected) => {
    const result = [];
    const avlTree = generateAVLTree(items, (a, b) => a - b);
    inOrderTraversal(avlTree.root, (node: AVLNode<number>) =>
      result.push(node.value)
    );
    expect(result).toEqual(expected);
  });
});
