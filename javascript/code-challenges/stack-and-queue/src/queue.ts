export class Queue<T> {
  newArr: T[] = [];

  get size(): number {
    return this.newArr.length; // this checking the length of the array
  }

  get peek(): T {
    //what is the last element of the array or the top of the stack
    if (this.newArr.length === 0) {
      throw new Error("Nothing is in this queue");
    } else {
      return this.newArr[this.newArr.length - 1]; // this is peeking at the last elemnet in the array/queue
    }
  }
  //FIFO first in first out, add new element to array or queue, add to back of line
  enqueue(value: T): void {
    this.newArr.unshift(value);
  }

  dequeue(): T | undefined {
    if (this.newArr.length === 0) {
      throw new Error("Nothing is in this queue");
    } else {
      return this.newArr.pop();
    }
  }
}
