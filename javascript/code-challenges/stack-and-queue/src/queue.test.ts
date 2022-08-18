import { Queue } from "./queue";

describe("Queue", () => {
  it("can enqueue", () => {
    const q = new Queue<string>();

    expect(() => q.enqueue("Frodo")).not.toThrow();
  });

  it("enqueues", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");

    expect(q.size).toBe(2);
    expect(q.peek).toBe("Frodo");
  });

  it("Can successfully enqueue into a queue", () => {
    const q = new Queue<number>();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q).toBeDefined();
    expect(q.size).toBe(3);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    const q = new Queue<number>();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    expect(q).toBeDefined();
    expect(q.size).toBe(5);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    const q = new Queue<number>();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q).toBeDefined();
    expect(q.size).toBe(3);
    expect(q.dequeue()).toBe(1);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const q = new Queue<number>();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q).toBeDefined();
    expect(q.size).toBe(3);
    expect(q.peek).toBe(1);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    const q = new Queue<number>();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    q.dequeue();
    q.dequeue();
    q.dequeue();

    expect(q).toBeDefined();
    expect(q.size).toBe(0);
  });
  it("Can successfully instantiate an empty queue", () => {
    const q = new Queue<number>();

    expect(q).toBeDefined();
    expect(q.size).toBe(0);
  });
  it("Calling dequeue  on empty queue raises exception", () => {
    const q = new Queue<number>();

    expect(q).toBeDefined();
    expect(() => {
      q.dequeue();
    }).toThrow();
  });
  it("Calling peek on empty queue raises exception", () => {
    const q = new Queue<number>();

    expect(q).toBeDefined();
    expect(() => {
      q.peek;
    }).toThrow();
  });
});

//
//
//
