class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  preOrder() {
    //Pre-order: root >> left >> right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    if (this.left) {
      // Left
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  inOrder() {
    // In - order: left >> root >> right
    let traversal = [];
    traversal.push(this.value); // Root
    if (this.left) {
      // Left
      let leftTraversal = this.left.inOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    // Right
    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = [...traversal, ...rightTraversal];
    }
    return traversal;
  }



  postOrder() {
    // Post - order: left >> right >> root
    let traversal = [];
    traversal.push(this.value); // Root
    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return traversal;
  }
  findMax() {

    if (this.root === undefined) {
    }

  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder();

  }
  inOrder() { return this.root.inOrder(); }
  postOrder() { return this.root.postOrder(); }
}



module.exports = { Node, BinaryTree };



//   findMax(node) {
//     if (node === undefined)
//       return Number.MIN_VALUEl

//     let res = node.value;
//     let leftRes = findMax(node.left);
//     let rightRes = findMax(node.right);

//     if (leftRes > res)
//       res = leftRes;
//     if (rightRes > res)
//       res = rightRes;
//     return res;
//   }
//   findMax(root)
// }
