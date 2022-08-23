function balancedBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    if (character === '(' || character === '{' || character === '[') {
      stack.push(character);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    let check;
    switch (character) {
      case ')':
        check = stack.pop();
        if (check === '{' || check === '[') {
          return false;
        }
        break;
      case '}':
        check = stack.pop();
        if (check === '(' || check === '[') {
          return false;
        }
        break;
      case ']':
        check = stack.pop();
        if (check === '(' || check === '{') {
          return false;
        }
    }
  }
  return (stack.length === 0);
}
module.exports = balancedBrackets;
