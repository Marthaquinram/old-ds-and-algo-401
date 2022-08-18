export class Stack<T> {
  newArr: T[] = []; //new array to push thing into.

  get size(): number {
    return this.newArr.length; // this checking the length of the array
    // throw new Error("Not implemented");
  }

  get peek(): T | undefined {
    if (this.newArr.length === 0) {
      throw new Error("Nothing is in this queue");
    } else {
      return this.newArr[this.size - 1];
    }
  }

  push(value: T): void {
    this.newArr.push(value);
  }

  pop(): T | undefined {
    return this.newArr.pop();
    // throw new Error("Not implemented");
  }
}

//test test
