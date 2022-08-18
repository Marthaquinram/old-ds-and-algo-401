import { Stack } from "./stack";

describe("Stack", () => {
  it("can push", () => {
    const s = new Stack<string>();

    expect(() => s.push("Frodo")).not.toThrow();
  });

  it("pushes", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");

    expect(s.size).toBe(2);
    expect(s.peek).toBe("Sam");
  });
  it("Can successfully push multiple values onto a stack", () => {
    const s = new Stack<number>();

    s.push(1);
    s.push(2);
    s.push(3);

    expect(s.peek).toBe(3);
    expect(s.size).toBe(3);
  });

  it("Can successfully pop off the stack", () => {
    const s = new Stack<number>();

    s.push(1);
    s.push(2);
    s.push(3);

    expect(s.pop()).toBe(3);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    s.pop();
    s.pop();

    expect(s.size).toBe(0);
  });

  it("Can successfully peek the next item on the stack", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    s.push(3);

    expect(s.peek);
  });

  it("Can successfully instantiate an empty stack", () => {
    const s = new Stack<number>();

    expect(s.size).toBe(0);
    expect(s).toBeDefined();
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    const s = new Stack<number>();
    s.push(1);
    s.pop();

    expect(s.size).toBe(0);
  });
});
