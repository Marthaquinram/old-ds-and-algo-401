import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("instantiates linked list", () => {
    const linkedListStrings: Collection<string> = new LinkedList<string>();

    expect(linkedListStrings).toBeDefined();
  });

  it("can properly insert into the linked list", () => {
    const linkListNums: Collection<number> = new LinkedList<number>();

    linkListNums.insert(27);
    linkListNums.insert(28);
    linkListNums.insert(30);

    expect(linkListNums).toBeDefined();
    expect(linkListNums.includes(27)).toBe(true);
    expect(linkListNums.includes(28)).toBe(true);
    expect(linkListNums.includes(45)).toBe(false);
  });
  it("the head property will point to the first node in the linked list", () => {
    const linkedList: Collection<string> = new LinkedList<string>();
    linkedList.insert("tail");
    linkedList.insert("node3");
    linkedList.insert("node2");
    linkedList.insert("head");
    expect(linkedList.toString()).toEqual(
      "{ head } -> { node2 } -> { node3 } -> { tail } -> NULL"
    );
  });

  it("Can properly insert multiple nodes into the linked list", () => {
    const linkList: Collection<number> = new LinkedList<number>();

    linkList.insert(2);
    linkList.insert(4);
    linkList.insert(6);
    linkList.insert(8);
    linkList.insert(10);
    linkList.insert(12);

    expect(linkList).toBeDefined();
    expect(linkList.includes(12)).toBe(true);
    expect(linkList.includes(10)).toBe(true);
    expect(linkList.includes(8)).toBe(true);
    expect(linkList.includes(6)).toBe(true);
    expect(linkList.includes(4)).toBe(true);
    expect(linkList.includes(2)).toBe(true);
  });

  it("Will return true when finding a value within the linked list that exists", () => {
    const linkList: Collection<string> = new LinkedList<string>();

    linkList.insert("blue");
    linkList.insert("purple");
    linkList.insert("yellow");
    linkList.insert("green");
    linkList.insert("black");
    linkList.insert("orange");

    expect(linkList).toBeDefined();
    expect(linkList.includes("blue")).toBe(true);
    expect(linkList.includes("yellow")).toBe(true);
    expect(linkList.includes("green")).toBe(true);
    expect(linkList.includes("black")).toBe(true);
    expect(linkList.includes("orange")).toBe(true);
    expect(linkList.includes("my favorite color is purple")).toBe(false);
  });

  it("Will return false when searching for a value in the linked list that does not exist", () => {
    const linkList: Collection<string> = new LinkedList<string>();

    linkList.insert("blue");
    linkList.insert("purple");
    linkList.insert("yellow");
    linkList.insert("green");
    linkList.insert("black");
    linkList.insert("orange");

    expect(linkList).toBeDefined();
    expect(linkList.includes("magenta")).toBe(false);
    expect(linkList.includes("lavendar")).toBe(false);
    expect(linkList.includes("white")).toBe(false);
    expect(linkList.includes("grey")).toBe(false);
    expect(linkList.includes("orange")).toBe(true);
    expect(linkList.includes("my favorite color is purple")).toBe(false);
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const linkList: Collection<string> = new LinkedList<string>();

    linkList.insert("blue");
    linkList.insert("purple");
    linkList.insert("pink");

    expect(linkList.toString()).toEqual(
      "{ pink } -> { purple } -> { blue } -> NULL"
    );
  });
});
