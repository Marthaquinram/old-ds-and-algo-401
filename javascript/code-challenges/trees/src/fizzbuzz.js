class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
  addChild(tree) {
    this.children.push(tree);
  }
  preOrder() {
    return [this.value, this.children.map((child) => child.preOrder())];
  }
}
function fizzBuzz(tree) {
  console.log('HEY IM HERE', tree);
  // if % 3 -fizz
  //if % 5 buzz
  // if its % by both then print FizzBuzz
  const newTree = new Tree(tree.value, tree.children);

  if (newTree.value % 3 === 0 && newTree.value % 5 === 0) {
    tree.value = 'FizzBuzz';

    if (newTree.value % 3 === 0 && newTree.value % 5 !== 0) {
      newTree.value = 'Fizz';
    }
  }
  if (newTree.value % 5 === 0 && newTree.value % 3 !== 0) {
    newTree.value = 'Buzz';
  }
  // const nodes = tree.preOrder();
  // nodes = nodes.map(fizzBuzz);
  newTree.children = tree.children.map(fizzBuzz);
  // tree.children = storeChildren;


  return newTree;
}
// fizzBuzz();

module.exports = { Tree, fizzBuzz };
