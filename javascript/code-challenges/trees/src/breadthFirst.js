function breadthFirst(tree) {
  if (tree === undefined) {

    return;
  }


  let queue = [];
  let arr = [];


  queue.push(tree.root);

  // Continue searching through as queue as long as it's not empty.
  while (queue.length > 0) {
    // Create a reference to currentNode, at the top of the queue.
    let currentNode = queue.shift();
    arr.push(currentNode.value);
    // If currentNode has a left child node, add it to the queue.
    if (currentNode.left !== undefined) {
      queue.push(currentNode.left)
    }
    // If currentNode has a right child node, add it to the queue.
    if (currentNode.right !== undefined) {
      queue.push(currentNode.right)
    }
  }
  return arr;
}


class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }
}


breadthFirst();

module.exports = { Node, breadthFirst };
