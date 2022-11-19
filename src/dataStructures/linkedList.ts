class Node {
  value: string | number;

  next: Node | null;

  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  private size: number;

  private root: null | Node;

  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value: string | number): boolean {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;

      return true;
    }

    let node = this.root;

    while (node.next) {
      node = node.next;
    }

    const newNode = new Node(value);

    // eslint-disable-next-line no-param-reassign
    node.next = newNode;

    this.size += 1;

    return true;
  }

  public getSize(): number {
    return this.size;
  }

  public print() {
    const result = [];

    let node = this.root;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    console.log(result);
  }
}
