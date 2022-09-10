const { BinaryTree } = require("./binary_tree.js");
const { Node, breadthFirst } = require('./breadthFirst');

describe("Binary Tree", () => {
  const tree = new BinaryTree(
    new Node(
      2,
      new Node(7, new Node(2), new Node(6, new Node(5), new Node(11))), new Node(5, undefined, new Node(9, new Node(4)))
    ));

  //          2
  //        /   \
  //       7     5
  //      / \     \
  //     2  6      9
  //        / \    /
  //        5  11 4

  it("does an in-order traversal (left, root, right)", () => {
    expect(breadthFirst(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4])
  });
});
