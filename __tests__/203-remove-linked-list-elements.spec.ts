import removeElements, { ListNode } from '../203-remove-linked-list-elements';

describe('Remove Linked List Elements', () => {
  it.each([
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
    [[], 1, []],
    [[7, 7, 7, 7], 7, []],
    [[1, 2, 2, 1], 2, [1, 1]],
  ])(
    'should be able to remove value from linked list',
    (input, val, expected) => {
      const listNode = input.reduceRight<ListNode | null>((accu, num) => {
        return new ListNode(num, accu);
      }, null);

      let newNode = removeElements(listNode, val);

      const result: number[] = [];

      while (newNode !== null) {
        result.push(newNode.val);
        newNode = newNode.next;
      }

      expect(result).toEqual(expected);
    }
  );
});
