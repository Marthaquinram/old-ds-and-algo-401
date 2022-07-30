import { Collection, display } from "./Collection";

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}

export class LinkedList<T> implements Collection<T> {
  // TODO
  start: Node<T> | undefined;
  butt: Node<T> | undefined;
  // creates the node
  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
    if (this.butt === undefined) {
      this.butt = newNode; // defining butt which is the first penny being placed down
    }
  }
  // finds the node
  includes(item: T): boolean {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }
  toString(): string {
    let string = "";
    let tracker = this.start;
    while (tracker !== undefined) {
      const displayString = display(tracker.item);
      string += `{ ${tracker.item} } -> `;
      tracker = tracker.next;
    }
    string += "NULL";
    return string;
  }
  append(value: T): void {
    if (this.butt) {
      //this.butt === true run code block
      const newNode = {
        item: value,
        next: undefined,
      };
      this.butt.next = newNode; // change it from undefined with no coin on the bottom,
      this.butt = newNode; // now make this the new node (new penny on the bottom)
    } else {
      //if there is no butt(the bottom penny of a stack, the first penny) then create a new node.
      this.insert(value);
    }
  }

  //arguments: value, new value
  //adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(needle: T, value: T) {
    let tracker = this.start;
    let found = false; // have you located the node yet?
    while (tracker !== undefined) {
      // if tracker is NOT undefined
      if (tracker.next?.item === needle && found === false) {
        // if the node after our current node has a value equal to the value we are looking for and if its true
        found = true; // set located node equal to true and i think avoids duplicates, so it finds the first one once .
        let movedNode = tracker.next;
        const newNode = {
          item: value,
          next: movedNode,
        };
        tracker.next = newNode;
      }
      tracker = tracker.next;
    }
  }

  insertAfter(needle: T, value: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === needle) {
        let movedNode = tracker.next;
        const newNode = {
          item: value,
          next: movedNode,
        };
        tracker.next = newNode;
      }
      tracker = tracker.next;
    }
  }
}
