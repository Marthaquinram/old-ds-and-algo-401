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

  it("can append an element", () => {
    const listLinkAppend = new LinkedList<string>();

    listLinkAppend.insert("Frodo");
    listLinkAppend.insert("Sam");
    listLinkAppend.append("Pippin");
    listLinkAppend.insert("Merry");

    const str = listLinkAppend.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );
  });

  //Can successfully insert a node before the first node of a linked list
  it("can insert a node before the first node of a linked list", () => {
    const listLinkBefore = new LinkedList<string>();
    listLinkBefore.insert("Frodo"); //third and last node
    listLinkBefore.insert("Sam"); // second node
    listLinkBefore.insert("Merry"); // first node

    listLinkBefore.insertBefore("Merry", "Pippin"); // inserting a node before the first node of a linked list, Merry is last which means they are the first node in the LL
    const str = listLinkBefore.toString();
    expect(str).toEqual(
      "{ Pippin } -> { Merry } -> { Sam } -> { Frodo } -> NULL"
    );
  });

  //Can successfully insert a node before a node located i the middle of a linked list
  it("can insert a node before a node located i the middle of a linked list ", () => {
    const listLinkBefore = new LinkedList<string>();

    listLinkBefore.insert("Frodo"); //third and last node
    listLinkBefore.insert("Sam"); // second node
    listLinkBefore.insert("Merry"); // first node

    listLinkBefore.insertBefore("Sam", "Pippin"); // inserting a node before a node located i the middle of a linked list
    const str = listLinkBefore.toString();
    expect(str).toEqual(
      "{ Merry } -> { Pippin } -> { Sam } -> { Frodo } -> NULL"
    );
  });

  // Can successfully insert a node after the last node of the linked list
  it("can insert a node after the last node of the linked list", () => {
    const listLinkAfter = new LinkedList<string>();

    listLinkAfter.insert("Frodo");
    listLinkAfter.insert("Sam");
    listLinkAfter.insert("Merry");

    listLinkAfter.insertAfter("Frodo", "Pippin"); //insert after the last node of the linked list

    const str = listLinkAfter.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );
  });

  it("can insert after a node in the middle of the linked list", () => {
    // Can successfully insert after a node in the middle of the linked list
    const listLinkAfter = new LinkedList<string>();

    listLinkAfter.insert("Frodo");
    listLinkAfter.insert("Sam");
    listLinkAfter.insert("Merry");

    listLinkAfter.insertAfter("Sam", "Pippin"); //insert after the last node of the linked list

    const str = listLinkAfter.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Pippin } -> { Frodo } -> NULL"
    );
  });

  // Where k is greater than the length of the linked list
  it("returns k is greater than the length of the linked list", () => {
    const listLink: Collection<number> = new LinkedList<number>();

    listLink.insert(20);
    listLink.insert(47);
    listLink.insert(19);

    expect(() => listLink.kthFromEnd(5)).toThrow(
      "That kth value is more than the values in the linked list."
    );
  });

  // // Where k and the length of the list are the same
  it("returns k and the length of the list are the same", () => {
    const listLink: Collection<number> = new LinkedList<number>();

    listLink.insert(20);
    listLink.insert(47);
    listLink.insert(19);
    listLink.insert(32);
    listLink.insert(10);

    expect(listLink.kthFromEnd(5)).toEqual(10);
  });

  it("returns k is not a positive integer", () => {
    const listLink: Collection<number> = new LinkedList<number>();
    listLink.insert(19);
    listLink.insert(32);
    listLink.insert(10);
    expect(() => listLink.kthFromEnd(5)).toThrow(
      "That kth value is more than the values in the linked list."
    );
  });

  it("the linked list is of a size 1", () => {
    const listLink: Collection<number> = new LinkedList<number>();

    listLink.insert(10);

    expect(listLink.kthFromEnd(1)).toBe(10);
  });

  it("returns a Happy Path, where k is not at the end, but somewhere in the middle of the linked list", () => {
    const listLink: Collection<number> = new LinkedList<number>();

    listLink.insert(20);
    listLink.insert(47);
    listLink.insert(10);
    listLink.insert(19);
    listLink.insert(32);

    expect(listLink.kthFromEnd(3)).toEqual(10);
  });
});
