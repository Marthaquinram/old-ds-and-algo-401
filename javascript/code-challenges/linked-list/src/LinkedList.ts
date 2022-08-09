import { display } from "./Collection";
import { Collection } from "./Collection";

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}

export class LinkedList<T> implements Collection<T> {
  zip(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    throw new Error("Method not implemented.");
  }
  static zip<T>(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    const zipped = new LinkedList<T>();
    let ll1h = ll1.start;
    let ll2h = ll2.start;
    while (ll1h || ll2h) {
      if (ll1h) {
        zipped.append(ll1h.item);
        ll1h = ll1h.next;
      }
      if (ll2h) {
        zipped.append(ll2h.item);
        ll2h = ll2h.next;
      }
    }
    return zipped;
  }

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
  insertBefore(needle: T, value: T): void {
    let tracker = this.start;
    let found = false; // have you located the node yet?
    while (tracker !== undefined) {
      // if tracker is NOT undefined
      if (tracker.item === needle && found === false) {
        // if the node after our current node has a value equal to the value we are looking for and if its true
        found = true; // set located node equal to true and i think avoids duplicates, so it finds the first one once .
        let movedNode = tracker;
        const newNode = {
          item: value,
          next: movedNode,
        };
        this.start = newNode;
      }
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

  insertAfter(needle: T, value: T): void {
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

  kthFromEnd(k: number): any {
    let tracker = this.start;
    let size = this.size(); //see line 123
    //this is checking if the value of k is not more than length of the linked list or if k is less 0 which would make it a negative. we dont want to work with negative numbers
    //edge case here
    if (k > size || k < 0) {
      throw new Error(
        "That kth value is more than the values in the linked list."
      );
    }

    while (k <= size) {
      // will never go past the length of thde linked list
      // k = 3
      //size = 10
      // 10 - 3(from the end of the LL)= 7(moving 7 spaces from the front of LL)                                                    Node G
      //  1         2       3         4        5        6     7||3         2          1     0
      //{'a'} -> {'b'} -> {'c'} -> {'d'} -> {'e'} -> {'f'} -> {'g'} -> {'h'} -> {'i'} -> {'j'}

      let len = size - k;
      for (let i = 0; i < len; i++) {
        tracker = tracker?.next;
      }
      return tracker?.item;
    }
  }
  //this counts the number of nodes in the linked list
  size(): number {
    let counter = 0;
    let tracker = this.start;
    while (tracker != undefined) {
      tracker = tracker.next;
      counter++;
    }
    return counter;
  }
  // zipLists();
}
