class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  static create(head) {
    let node = new Node(head);
    return new LinkedList(node);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastnode = this.head;
    if (lastnode) {
      while (lastnode.next) {
        lastnode = lastnode.next;
      }
    }
    return lastnode;
  }

  addToTail(value) {
    if (this.head) {
      let lastnode = this.getLast();
      lastnode.next = new Node(value);
    }
  }

  getFirst() {
    return this.head.value;
  }
}

let node1 = new Node(2);
let node2 = new Node(3);

node1.next = node2;

let list = LinkedList.create(1);
list.addToTail(43);
list.addToTail(55);
list.addToTail(324);

console.log(list.getFirst());
