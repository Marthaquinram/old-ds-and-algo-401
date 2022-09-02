// Add
//  - Arguments: value
//  - Return: nothing
//  - Adds a new node with that value in the correct location in the binary search tree.
// Contains
//  - Argument: value
//  - Returns: boolean indicating whether or not the value is in the tree at least once.

const { Node, BinaryTree } = require("./binary_tree.js");

class BinarySearchTree extends BinaryTree {
  add(number, node) {

    if (node === undefined) {
      return (number);
    }
  }


}
// contains(number, node) {
//   if (node === undefined) {
//     return false;
//   }

// insert(data)
// {
//   // Creating a node and initialising
//   // with data
//   var newNode = new Node(data);
//   // root is null then node will
//   // be added to the tree and made root.
//   if (this.root === null)
//     this.root = newNode;
//   else
//     // find the correct position in the
//     // tree and add the node
//     this.insertNode(this.root, newNode);
// }
// // Method to insert a node in a tree
// // it moves over the tree to find the location
// // to insert a node with a given data
// insertNode(node, newNode)
// {
//   // if the data is less than the node
//   // data move left of the tree
//   if (newNode.data < node.data) {
//     // if left is null insert node here
//     if (node.left === null)
//       node.left = newNode;
//     else
//       // if left is not null recur until
//       // null is found
//       this.insertNode(node.left, newNode);
//   }
//   // if the data is more than the node
//   // data move right of the tree
//   else {
//     // if right is null insert node here
//     if (node.right === null)
//       node.right = newNode;
//     else
//       // if right is not null recur until
//       // null is found
//       this.insertNode(node.right, newNode);
//   }
// }
module.exports = { BinarySearchTree };
